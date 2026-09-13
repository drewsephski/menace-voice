"""Tenant-scoped, bounded reads for pilot outcome review."""

from sqlalchemy import func, select

from api.db.base_client import BaseDBClient
from api.db.models import WebhookDeliveryModel, WorkflowModel, WorkflowRunModel
from api.services.pilot.review import (
    PilotReviewPage,
    WebhookReview,
    project_run_review,
)


class PilotReviewClient(BaseDBClient):
    async def get_pilot_review(
        self,
        organization_id: int,
        workflow_id: int,
        limit: int = 25,
        before_id: int | None = None,
    ) -> PilotReviewPage | None:
        if not 1 <= limit <= 100:
            raise ValueError("limit must be between 1 and 100")
        if before_id is not None and before_id < 1:
            raise ValueError("before_id must be positive")

        async with self.async_session() as session:
            workflow = await session.execute(
                select(WorkflowModel.id).where(
                    WorkflowModel.id == workflow_id,
                    WorkflowModel.organization_id == organization_id,
                )
            )
            if workflow.scalar_one_or_none() is None:
                return None

            query = (
                select(
                    WorkflowRunModel.id,
                    WorkflowRunModel.workflow_id,
                    WorkflowRunModel.created_at,
                    WorkflowRunModel.state,
                    WorkflowRunModel.mode,
                    WorkflowRunModel.is_completed,
                    WorkflowRunModel.gathered_context,
                    WorkflowRunModel.usage_info,
                    WorkflowRunModel.cost_info,
                )
                .join(WorkflowModel, WorkflowRunModel.workflow_id == WorkflowModel.id)
                .where(
                    WorkflowModel.organization_id == organization_id,
                    WorkflowRunModel.workflow_id == workflow_id,
                )
                .order_by(WorkflowRunModel.id.desc())
                .limit(limit + 1)
            )
            if before_id is not None:
                query = query.where(WorkflowRunModel.id < before_id)
            result = await session.execute(query)
            records = list(result.mappings().all())
            visible = records[:limit]
            counts = {run["id"]: WebhookReview() for run in visible}
            if counts:
                deliveries = await session.execute(
                    select(
                        WebhookDeliveryModel.workflow_run_id,
                        WebhookDeliveryModel.status,
                        func.count().label("count"),
                    )
                    .where(
                        WebhookDeliveryModel.organization_id == organization_id,
                        WebhookDeliveryModel.workflow_run_id.in_(list(counts)),
                    )
                    .group_by(
                        WebhookDeliveryModel.workflow_run_id,
                        WebhookDeliveryModel.status,
                    )
                )
                for run_id, status, count in deliveries.all():
                    evidence = counts[run_id]
                    if status == "succeeded":
                        evidence.accepted = count
                    elif status == "dead_letter":
                        evidence.failed = count
                    elif status == "pending":
                        evidence.queued = count

            return PilotReviewPage(
                runs=[
                    project_run_review(dict(run), counts[run["id"]]) for run in visible
                ],
                next_before_id=(visible[-1]["id"] if len(records) > limit else None),
            )
