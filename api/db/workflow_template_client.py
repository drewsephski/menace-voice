from dataclasses import dataclass
from typing import cast

from sqlalchemy import text
from sqlalchemy.future import select

from api.db.base_client import BaseDBClient
from api.db.models import WorkflowTemplates


class WorkflowTemplateInstallError(ValueError):
    pass


class WorkflowTemplateChecksumCollisionError(WorkflowTemplateInstallError):
    pass


class WorkflowTemplateDowngradeError(WorkflowTemplateInstallError):
    pass


@dataclass(frozen=True)
class WorkflowTemplateInstallResult:
    action: str
    template_id: int | None
    version: int
    checksum: str
    changed: bool


class WorkflowTemplateClient(BaseDBClient):
    async def get_workflow_template(self, template_id: int) -> WorkflowTemplates | None:
        """Get a workflow template by ID."""
        async with self.async_session() as session:
            result = await session.execute(
                select(WorkflowTemplates).where(WorkflowTemplates.id == template_id)
            )
            return result.scalars().first()

    async def get_workflow_template_by_name(
        self, template_name: str
    ) -> WorkflowTemplates | None:
        """Get a workflow template by name."""
        async with self.async_session() as session:
            result = await session.execute(
                select(WorkflowTemplates).where(
                    WorkflowTemplates.template_name == template_name
                )
            )
            return result.scalars().first()

    async def get_all_workflow_templates(self) -> list[WorkflowTemplates]:
        """Get all workflow templates."""
        async with self.async_session() as session:
            result = await session.execute(select(WorkflowTemplates))
            return result.scalars().all()

    async def create_workflow_template(
        self, template_name: str, template_description: str, template_json: dict
    ) -> WorkflowTemplates:
        """Create a new workflow template."""
        async with self.async_session() as session:
            try:
                new_template = WorkflowTemplates(
                    template_name=template_name,
                    template_description=template_description,
                    template_json=template_json,
                )
                session.add(new_template)
                await session.commit()
                await session.refresh(new_template)
                return new_template
            except Exception:
                await session.rollback()
                raise

    async def install_versioned_workflow_template(
        self,
        *,
        template_name: str,
        template_description: str,
        template_json: dict,
        version: int,
        checksum: str,
        check_only: bool = False,
    ) -> WorkflowTemplateInstallResult:
        async with self.async_session() as session:
            try:
                await session.execute(
                    text("SELECT pg_advisory_xact_lock(hashtext(:template_name))"),
                    {"template_name": template_name},
                )
                result = await session.execute(
                    select(WorkflowTemplates)
                    .where(WorkflowTemplates.template_name == template_name)
                    .order_by(WorkflowTemplates.id)
                    .with_for_update()
                )
                templates = result.scalars().all()
                if len(templates) > 1:
                    raise WorkflowTemplateInstallError(
                        f"multiple workflow templates exist for slug {template_name!r}"
                    )

                if not templates:
                    if check_only:
                        return WorkflowTemplateInstallResult(
                            action="create_required",
                            template_id=None,
                            version=version,
                            checksum=checksum,
                            changed=False,
                        )
                    template = WorkflowTemplates(
                        template_name=template_name,
                        template_description=template_description,
                        template_json=template_json,
                    )
                    session.add(template)
                    await session.commit()
                    await session.refresh(template)
                    return WorkflowTemplateInstallResult(
                        action="created",
                        template_id=cast(int, template.id),
                        version=version,
                        checksum=checksum,
                        changed=True,
                    )

                template = templates[0]
                installed_metadata = (template.template_json or {}).get(
                    "template_bundle", {}
                )
                installed_version = installed_metadata.get("version")
                installed_checksum = installed_metadata.get("checksum")
                if not isinstance(installed_version, int) or not isinstance(
                    installed_checksum, str
                ):
                    raise WorkflowTemplateInstallError(
                        f"installed template {template_name!r} has no version metadata"
                    )

                if version < installed_version:
                    raise WorkflowTemplateDowngradeError(
                        f"refusing template downgrade {installed_version} -> {version}"
                    )
                if version == installed_version:
                    if (
                        checksum != installed_checksum
                        or template.template_json != template_json
                    ):
                        raise WorkflowTemplateChecksumCollisionError(
                            f"checksum collision for {template_name!r} version {version}"
                        )
                    return WorkflowTemplateInstallResult(
                        action="unchanged",
                        template_id=cast(int, template.id),
                        version=version,
                        checksum=checksum,
                        changed=False,
                    )

                if check_only:
                    return WorkflowTemplateInstallResult(
                        action="update_required",
                        template_id=cast(int, template.id),
                        version=version,
                        checksum=checksum,
                        changed=False,
                    )

                template.template_description = template_description
                template.template_json = template_json
                await session.commit()
                await session.refresh(template)
                return WorkflowTemplateInstallResult(
                    action="updated",
                    template_id=cast(int, template.id),
                    version=version,
                    checksum=checksum,
                    changed=True,
                )
            except WorkflowTemplateInstallError:
                raise
            except Exception:
                await session.rollback()
                raise

    async def update_workflow_template(
        self,
        template_id: int,
        template_name: str | None = None,
        template_json: dict | None = None,
    ) -> WorkflowTemplates:
        """Update an existing workflow template."""
        async with self.async_session() as session:
            try:
                result = await session.execute(
                    select(WorkflowTemplates).where(WorkflowTemplates.id == template_id)
                )
                template = result.scalars().first()
                if not template:
                    raise ValueError(
                        f"Workflow template with ID {template_id} not found"
                    )

                if template_name is not None:
                    template.template_name = template_name
                if template_json is not None:
                    template.template_json = template_json

                await session.commit()
                await session.refresh(template)
                return template
            except Exception:
                await session.rollback()
                raise

    async def delete_workflow_template(self, template_id: int) -> bool:
        """Delete a workflow template by ID."""
        async with self.async_session() as session:
            try:
                result = await session.execute(
                    select(WorkflowTemplates).where(WorkflowTemplates.id == template_id)
                )
                template = result.scalars().first()
                if not template:
                    return False

                await session.delete(template)
                await session.commit()
                return True
            except Exception:
                await session.rollback()
                raise
