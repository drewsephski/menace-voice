import uuid
from datetime import datetime, timezone

from loguru import logger
from pydantic import ValidationError
from sqlalchemy import func
from sqlalchemy.dialects.postgresql import insert
from sqlalchemy.exc import IntegrityError
from sqlalchemy.future import select

from api.db.base_client import BaseDBClient
from api.db.models import UserConfigurationModel, UserModel
from api.enums import UserConfigurationKey
from api.schemas.ai_model_configuration import EffectiveAIModelConfiguration

_LOCAL_PROVIDER_ID_PREFIX = "oss_"


def _is_local_provider_id(provider_id: str | None) -> bool:
    return bool(provider_id) and provider_id.startswith(_LOCAL_PROVIDER_ID_PREFIX)


class UserClient(BaseDBClient):
    async def get_or_create_user_by_provider_id(
        self, provider_id: str, email: str | None = None
    ) -> tuple[UserModel, bool]:
        """Return (user, was_created) tuple.

        When ``email`` is provided, a local (``oss_*``) row that already owns
        that address is rebound to ``provider_id`` instead of inserting a
        second user. That is the local-auth → Stack Auth switch: the unique
        ``lower(email)`` index would otherwise 500 on the email sync.
        """
        normalized_email = email.strip().lower() if email else None

        async with self.async_session() as session:
            user = await self._user_by_provider_id(session, provider_id)
            owner = (
                await self._user_by_email(session, normalized_email)
                if normalized_email
                else None
            )

            if (
                user is not None
                and owner is not None
                and user.id != owner.id
                and _is_local_provider_id(owner.provider_id)
            ):
                await self._rebind_local_user_to_provider(
                    session, local_user=owner, stub_user=user, provider_id=provider_id
                )
                await session.commit()
                await session.refresh(owner)
                return owner, False

            if user is not None:
                if (
                    normalized_email
                    and (user.email or "").lower() != normalized_email
                    and owner is None
                ):
                    user.email = normalized_email
                    try:
                        await session.commit()
                    except IntegrityError:
                        await session.rollback()
                        logger.warning(
                            "Skipped email sync for user {} because {} is already taken",
                            user.id,
                            normalized_email,
                        )
                return user, False

            if owner is not None:
                if _is_local_provider_id(owner.provider_id):
                    owner.provider_id = provider_id
                    await session.commit()
                    await session.refresh(owner)
                    logger.info(
                        "Linked local user {} to provider_id {}",
                        owner.id,
                        provider_id,
                    )
                    return owner, False
                # Another identity already owns this address. Create the
                # Stack user without copying the email so we do not 500.
                logger.warning(
                    "Provider {} email {} is already held by user {}; skipping email copy",
                    provider_id,
                    normalized_email,
                    owner.id,
                )
                normalized_email = None

            values = {
                "provider_id": provider_id,
                "created_at": datetime.now(timezone.utc),
                "selected_organization_id": None,
                "is_superuser": False,
            }
            if normalized_email:
                values["email"] = normalized_email

            stmt = insert(UserModel.__table__).values(**values)
            stmt = stmt.on_conflict_do_nothing(index_elements=["provider_id"])

            try:
                result = await session.execute(stmt)
                await session.commit()
                was_created = result.rowcount > 0
            except IntegrityError:
                await session.rollback()
                owner = await self._user_by_email(session, normalized_email)
                if owner is not None and _is_local_provider_id(owner.provider_id):
                    owner.provider_id = provider_id
                    await session.commit()
                    await session.refresh(owner)
                    logger.info(
                        "Linked local user {} to provider_id {} after email conflict",
                        owner.id,
                        provider_id,
                    )
                    return owner, False
                stmt = insert(UserModel.__table__).values(
                    provider_id=provider_id,
                    created_at=datetime.now(timezone.utc),
                    selected_organization_id=None,
                    is_superuser=False,
                )
                stmt = stmt.on_conflict_do_nothing(index_elements=["provider_id"])
                result = await session.execute(stmt)
                await session.commit()
                was_created = result.rowcount > 0

            result = await session.execute(
                select(UserModel).where(UserModel.provider_id == provider_id)
            )
            user = result.scalars().first()

            if user is None:
                raise ValueError(
                    f"Failed to create or fetch user with provider_id {provider_id}"
                )
        return user, was_created

    async def _user_by_provider_id(self, session, provider_id: str) -> UserModel | None:
        result = await session.execute(
            select(UserModel).where(UserModel.provider_id == provider_id)
        )
        return result.scalars().first()

    async def _user_by_email(self, session, email: str | None) -> UserModel | None:
        if not email:
            return None
        result = await session.execute(
            select(UserModel).where(func.lower(UserModel.email) == email)
        )
        return result.scalars().first()

    async def _rebind_local_user_to_provider(
        self,
        session,
        *,
        local_user: UserModel,
        stub_user: UserModel,
        provider_id: str,
    ) -> None:
        """Move Stack's provider_id onto the existing local user.

        The stub row was created by an earlier get-or-create on provider_id
        before email was synced. Free that unique key first, then claim it.
        """
        stub_user.provider_id = f"merged_{stub_user.id}_{uuid.uuid4()}"
        await session.flush()
        local_user.provider_id = provider_id
        logger.info(
            "Rebound local user {} onto provider_id {}; retired stub user {}",
            local_user.id,
            provider_id,
            stub_user.id,
        )

    async def get_user_by_id(self, user_id: int) -> UserModel | None:
        """Fetch a user by their internal ID."""
        async with self.async_session() as session:
            result = await session.execute(
                select(UserModel).where(UserModel.id == user_id)
            )
            return result.scalars().first()

    async def _get_user_configuration_row(
        self, session, user_id: int, key: str
    ) -> UserConfigurationModel | None:
        result = await session.execute(
            select(UserConfigurationModel).where(
                UserConfigurationModel.user_id == user_id,
                UserConfigurationModel.key == key,
            )
        )
        return result.scalars().first()

    async def get_user_configuration_value(self, user_id: int, key: str) -> dict | None:
        """Get the JSON value stored for a user under `key`, or None."""
        async with self.async_session() as session:
            row = await self._get_user_configuration_row(session, user_id, key)
            return row.configuration if row else None

    async def upsert_user_configuration_value(
        self, user_id: int, key: str, value: dict
    ) -> dict:
        """Create or update the JSON value stored for a user under `key`."""
        async with self.async_session() as session:
            stmt = insert(UserConfigurationModel.__table__).values(
                user_id=user_id,
                key=key,
                configuration=value,
            )
            stmt = stmt.on_conflict_do_update(
                constraint="_user_configuration_key_uc",
                set_={"configuration": stmt.excluded.configuration},
            ).returning(UserConfigurationModel.configuration)
            try:
                result = await session.execute(stmt)
                await session.commit()
            except Exception as e:
                await session.rollback()
                raise e
            return result.scalar_one()

    async def get_user_configurations(
        self, user_id: int
    ) -> EffectiveAIModelConfiguration:
        async with self.async_session() as session:
            configuration_obj = await self._get_user_configuration_row(
                session, user_id, UserConfigurationKey.MODEL_CONFIGURATION.value
            )
            if not configuration_obj:
                return EffectiveAIModelConfiguration()

            try:
                return EffectiveAIModelConfiguration.model_validate(
                    {
                        **configuration_obj.configuration,
                        "last_validated_at": configuration_obj.last_validated_at,
                    }
                )
            except ValidationError as e:
                # If configuration contains an unsupported provider,
                # return a default configuration without failing
                logger.warning(
                    f"Failed to validate user configuration for user {user_id}: {e}. "
                    "Returning default configuration."
                )
                return EffectiveAIModelConfiguration()

    async def update_user_configuration(
        self, user_id: int, configuration: EffectiveAIModelConfiguration
    ) -> EffectiveAIModelConfiguration:
        value = await self.upsert_user_configuration_value(
            user_id,
            UserConfigurationKey.MODEL_CONFIGURATION.value,
            configuration.model_dump(),
        )
        return EffectiveAIModelConfiguration.model_validate(value)

    async def update_user_configuration_last_validated_at(self, user_id: int) -> None:
        async with self.async_session() as session:
            configuration_obj = await self._get_user_configuration_row(
                session, user_id, UserConfigurationKey.MODEL_CONFIGURATION.value
            )
            if not configuration_obj:
                raise ValueError(f"User configuration with ID {user_id} not found")
            configuration_obj.last_validated_at = datetime.now()
            try:
                await session.commit()
            except Exception as e:
                await session.rollback()
                raise e
            await session.refresh(configuration_obj)

    async def update_user_selected_organization(
        self, user_id: int, organization_id: int
    ) -> None:
        """Update the user's selected organization ID."""
        async with self.async_session() as session:
            from sqlalchemy import update

            # Use a direct UPDATE statement to avoid race conditions
            # This is atomic at the database level
            stmt = (
                update(UserModel)
                .where(UserModel.id == user_id)
                .values(selected_organization_id=organization_id)
            )

            result = await session.execute(stmt)

            if result.rowcount == 0:
                raise ValueError(f"User with ID {user_id} not found")

            await session.commit()

    async def update_user_email(self, user_id: int, email: str) -> None:
        """Update the user's email address.

        A unique-constraint collision (another user already owns the address)
        is ignored so Stack email sync cannot 500 an otherwise valid session.
        """
        async with self.async_session() as session:
            from sqlalchemy import update

            stmt = (
                update(UserModel)
                .where(UserModel.id == user_id)
                .values(email=email.lower())
            )
            try:
                await session.execute(stmt)
                await session.commit()
            except IntegrityError:
                await session.rollback()
                logger.warning(
                    "Skipped email update for user {} because {} is already taken",
                    user_id,
                    email.lower(),
                )

    async def get_user_by_email(self, email: str) -> UserModel | None:
        """Fetch a user by their email address (case-insensitive).

        Email addresses are case-insensitive in practice, so a user who
        signed up as "User@example.com" must still be found when they later
        log in as "user@example.com". Compare on lower(email) so lookups are
        robust to capitalization differences across sign-in flows.
        """
        normalized_email = email.lower()
        async with self.async_session() as session:
            result = await session.execute(
                select(UserModel).where(func.lower(UserModel.email) == normalized_email)
            )
            return result.scalars().first()

    async def create_user_with_email(
        self, email: str, password_hash: str, name: str | None = None
    ) -> UserModel:
        """Create a new user with email and password hash."""
        async with self.async_session() as session:
            user = UserModel(
                provider_id=f"oss_{int(datetime.now(timezone.utc).timestamp())}_{uuid.uuid4()}",
                email=email.lower(),
                password_hash=password_hash,
            )
            session.add(user)
            await session.commit()
            await session.refresh(user)
            return user
