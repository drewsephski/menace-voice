from datetime import datetime, timezone
from typing import Optional

from sqlalchemy import exists
from sqlalchemy.dialects.postgresql import insert
from sqlalchemy.future import select

from api.db.base_client import BaseDBClient
from api.db.models import (
    APIKeyModel,
    OrganizationModel,
    UserModel,
    organization_users_association,
)
from api.utils.api_key import generate_api_key


class OrganizationClient(BaseDBClient):
    async def get_organization_by_id(
        self, organization_id: int
    ) -> Optional[OrganizationModel]:
        """Get an organization by its ID."""
        async with self.async_session() as session:
            result = await session.execute(
                select(OrganizationModel).where(OrganizationModel.id == organization_id)
            )
            return result.scalars().first()

    async def get_organization_users(self, organization_id: int) -> list[UserModel]:
        """Get all users linked to an organization (many-to-many)."""
        async with self.async_session() as session:
            result = await session.execute(
                select(UserModel)
                .join(
                    organization_users_association,
                    organization_users_association.c.user_id == UserModel.id,
                )
                .where(
                    organization_users_association.c.organization_id == organization_id
                )
                .order_by(UserModel.id)
            )
            return list(result.scalars().all())

    async def get_or_create_organization_by_provider_id(
        self, org_provider_id: str, user_id: int
    ) -> tuple[OrganizationModel, bool]:
        """Get an existing organization by provider_id or create a new one.

        Returns:
            A tuple of (organization, was_created) where was_created is True if the organization
            was created in this call, False if it already existed.
        """
        async with self.async_session() as session:
            # First try to get existing organization
            result = await session.execute(
                select(OrganizationModel).where(
                    OrganizationModel.provider_id == org_provider_id
                )
            )
            organization = result.scalars().first()

            if organization is None:
                # Use PostgreSQL's INSERT ... ON CONFLICT DO NOTHING
                # This is atomic and handles race conditions at the database level

                stmt = insert(OrganizationModel.__table__).values(
                    provider_id=org_provider_id, created_at=datetime.now(timezone.utc)
                )
                # ON CONFLICT DO NOTHING - if another request already inserted, this becomes a no-op
                stmt = stmt.on_conflict_do_nothing(index_elements=["provider_id"])

                result = await session.execute(stmt)
                await session.commit()

                # Check if we actually inserted (rowcount > 0) or if there was a conflict (rowcount == 0)
                was_created = result.rowcount > 0

                # Now fetch the organization (either the one we just created or the one that existed)
                result = await session.execute(
                    select(OrganizationModel).where(
                        OrganizationModel.provider_id == org_provider_id
                    )
                )
                organization = result.scalars().first()

                if organization is None:
                    # This should never happen, but handle it just in case
                    error_msg = f"Failed to create or fetch organization with provider_id {org_provider_id}"
                    raise ValueError(error_msg)

                # Only create API key if we actually created the organization
                if was_created:
                    # Create a default API key for the new organization
                    _, key_hash, key_prefix = generate_api_key()

                    api_key = APIKeyModel(
                        organization_id=organization.id,
                        name="Default API Key",
                        key_hash=key_hash,
                        key_prefix=key_prefix,
                        is_active=True,
                        created_by=user_id,
                    )
                    session.add(api_key)
                    await session.commit()

                await session.refresh(organization)
                return organization, was_created
            return organization, False

    async def update_organization_subscription_fields(
        self,
        organization_id: int,
        *,
        stripe_customer_id: str | None = None,
        stripe_subscription_id: str | None = None,
        subscription_plan: str | None = None,
        subscription_status: str | None = None,
        subscription_current_period_end: datetime | None = None,
        trial_ends_at: datetime | None = None,
        clear_subscription: bool = False,
    ) -> None:
        async with self.async_session() as session:
            organization = await session.get(OrganizationModel, organization_id)
            if organization is None:
                return

            if stripe_customer_id is not None:
                organization.stripe_customer_id = stripe_customer_id
            if stripe_subscription_id is not None or clear_subscription:
                organization.stripe_subscription_id = stripe_subscription_id
            if subscription_plan is not None:
                organization.subscription_plan = subscription_plan
            if subscription_status is not None or clear_subscription:
                organization.subscription_status = subscription_status
            if subscription_current_period_end is not None or clear_subscription:
                organization.subscription_current_period_end = (
                    subscription_current_period_end
                )
            if trial_ends_at is not None or clear_subscription:
                organization.trial_ends_at = trial_ends_at

            await session.commit()

    async def get_organization_id_by_stripe_customer_id(
        self,
        stripe_customer_id: str | None,
    ) -> int | None:
        if not stripe_customer_id:
            return None
        async with self.async_session() as session:
            result = await session.execute(
                select(OrganizationModel.id).where(
                    OrganizationModel.stripe_customer_id == stripe_customer_id
                )
            )
            return result.scalar_one_or_none()

    async def get_organization_id_by_stripe_subscription_id(
        self,
        stripe_subscription_id: str | None,
    ) -> int | None:
        if not stripe_subscription_id:
            return None
        async with self.async_session() as session:
            result = await session.execute(
                select(OrganizationModel.id).where(
                    OrganizationModel.stripe_subscription_id == stripe_subscription_id
                )
            )
            return result.scalar_one_or_none()

    async def is_user_member_of_organization(
        self, user_id: int, organization_id: int
    ) -> bool:
        """Return True if the user belongs to the given organization."""
        async with self.async_session() as session:
            result = await session.execute(
                select(
                    exists().where(
                        (organization_users_association.c.user_id == user_id)
                        & (
                            organization_users_association.c.organization_id
                            == organization_id
                        )
                    )
                )
            )
            return bool(result.scalar())

    async def add_user_to_organization(
        self, user_id: int, organization_id: int
    ) -> None:
        """Ensure that a user is linked to an organization (many-to-many).

        The association is created only if it does not already exist.
        Uses INSERT ... ON CONFLICT DO NOTHING to handle race conditions.
        """
        async with self.async_session() as session:
            # Use PostgreSQL's INSERT ... ON CONFLICT DO NOTHING
            # This handles race conditions at the database level

            stmt = insert(organization_users_association).values(
                user_id=user_id, organization_id=organization_id
            )
            # ON CONFLICT DO NOTHING - if another request already inserted, this becomes a no-op
            # The primary key constraint on (user_id, organization_id) will trigger the conflict
            stmt = stmt.on_conflict_do_nothing()

            await session.execute(stmt)
            await session.commit()
