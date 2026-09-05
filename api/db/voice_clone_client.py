from sqlalchemy import select
from sqlalchemy.orm import selectinload

from api.db.base_client import BaseDBClient
from api.db.models import VoiceCloneModel, WorkflowDefinitionModel, WorkflowModel


class VoiceCloneClient(BaseDBClient):
    async def list_voice_clones(self, organization_id: int) -> list[VoiceCloneModel]:
        async with self.async_session() as session:
            result = await session.execute(
                select(VoiceCloneModel)
                .where(
                    VoiceCloneModel.organization_id == organization_id,
                    VoiceCloneModel.status != "deleted",
                )
                .order_by(VoiceCloneModel.created_at.desc())
            )
            return list(result.scalars())

    async def get_voice_clone(
        self, clone_id: str, organization_id: int
    ) -> VoiceCloneModel | None:
        async with self.async_session() as session:
            result = await session.execute(
                select(VoiceCloneModel).where(
                    VoiceCloneModel.id == clone_id,
                    VoiceCloneModel.organization_id == organization_id,
                    VoiceCloneModel.status != "deleted",
                )
            )
            return result.scalar_one_or_none()

    async def create_voice_clone(
        self,
        *,
        organization_id: int,
        created_by: int,
        name: str,
        provider_voice_id: str,
        credential_source: str,
        status: str,
    ) -> VoiceCloneModel:
        async with self.async_session() as session:
            clone = VoiceCloneModel(
                organization_id=organization_id,
                created_by=created_by,
                name=name,
                provider_voice_id=provider_voice_id,
                credential_source=credential_source,
                status=status,
                consent_version="own-voice-v1",
            )
            session.add(clone)
            await session.commit()
            await session.refresh(clone)
            return clone

    async def set_voice_clone_status(
        self, clone_id: str, organization_id: int, status: str
    ) -> None:
        async with self.async_session() as session:
            clone = (
                await session.execute(
                    select(VoiceCloneModel)
                    .where(
                        VoiceCloneModel.id == clone_id,
                        VoiceCloneModel.organization_id == organization_id,
                    )
                    .with_for_update()
                )
            ).scalar_one_or_none()
            if clone is None:
                raise ValueError("Voice clone not found")
            clone.status = status
            await session.commit()

    async def list_voice_clone_agents(self, organization_id: int) -> list[dict]:
        async with self.async_session() as session:
            workflows = (
                await session.execute(
                    select(WorkflowModel)
                    .where(
                        WorkflowModel.organization_id == organization_id,
                    )
                    .options(selectinload(WorkflowModel.released_definition))
                    .order_by(WorkflowModel.name)
                )
            ).scalars()
            return [
                {
                    "id": w.id,
                    "name": w.name,
                    "voice_clone_id": (w.workflow_configurations or {}).get(
                        "voice_clone_id"
                    ),
                    "published_voice_clone_id": (
                        (w.released_definition.workflow_configurations or {}).get(
                            "voice_clone_id"
                        )
                        if w.released_definition
                        else None
                    ),
                }
                for w in workflows
            ]

    async def voice_clone_in_use(self, clone_id: str, organization_id: int) -> bool:
        async with self.async_session() as session:
            # Archived releases are checked again by runtime resolution if restored.
            result = await session.execute(
                select(WorkflowDefinitionModel.id)
                .join(
                    WorkflowModel,
                    WorkflowModel.id == WorkflowDefinitionModel.workflow_id,
                )
                .where(
                    WorkflowModel.organization_id == organization_id,
                    WorkflowDefinitionModel.status.in_(["draft", "published"]),
                    WorkflowDefinitionModel.workflow_configurations[
                        "voice_clone_id"
                    ].as_string()
                    == clone_id,
                )
                .limit(1)
            )
            return result.scalar_one_or_none() is not None
