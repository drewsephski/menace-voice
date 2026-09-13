"""Durable platform billing outbox, with fenced claims and frozen request data."""

from datetime import UTC, datetime, timedelta

from sqlalchemy import select, update
from sqlalchemy.dialects.postgresql import insert

from api.db.base_client import BaseDBClient
from api.db.models import PlatformUsageDeliveryModel, WorkflowModel, WorkflowRunModel


class PlatformUsageDeliveryClient(BaseDBClient):
    async def create_platform_usage_delivery(
        self,
        *,
        workflow_run_id: int,
        organization_id: int,
        payload: dict,
        retry_safe: bool,
    ) -> PlatformUsageDeliveryModel:
        async with self.async_session() as session:
            run = await session.execute(
                select(WorkflowRunModel.id)
                .join(WorkflowModel, WorkflowRunModel.workflow_id == WorkflowModel.id)
                .where(
                    WorkflowRunModel.id == workflow_run_id,
                    WorkflowModel.organization_id == organization_id,
                )
            )
            if run.scalar_one_or_none() is None:
                raise ValueError("Workflow run not found in organization")
            await session.execute(
                insert(PlatformUsageDeliveryModel)
                .values(
                    workflow_run_id=workflow_run_id,
                    organization_id=organization_id,
                    payload=payload,
                    retry_safe=retry_safe,
                    scheduled_for=datetime.now(UTC),
                )
                .on_conflict_do_nothing(index_elements=["workflow_run_id"])
            )
            await session.commit()
            result = await session.execute(
                select(PlatformUsageDeliveryModel).where(
                    PlatformUsageDeliveryModel.workflow_run_id == workflow_run_id
                )
            )
            return result.scalar_one()

    async def claim_platform_usage_delivery(
        self,
        delivery_id: int,
        lease_seconds: int = 300,
    ) -> PlatformUsageDeliveryModel | None:
        now = datetime.now(UTC)
        async with self.async_session() as session:
            # A previous worker may have sent the request before dying. Without
            # a verified receiver idempotency contract, never blindly resend it.
            await session.execute(
                update(PlatformUsageDeliveryModel)
                .where(
                    PlatformUsageDeliveryModel.id == delivery_id,
                    PlatformUsageDeliveryModel.status == "sending",
                    PlatformUsageDeliveryModel.scheduled_for <= now,
                    PlatformUsageDeliveryModel.retry_safe.is_(False),
                )
                .values(
                    status="dead_letter",
                    scheduled_for=None,
                    last_error="ambiguous_worker_exit_requires_reconciliation",
                )
            )
            result = await session.execute(
                update(PlatformUsageDeliveryModel)
                .where(
                    PlatformUsageDeliveryModel.id == delivery_id,
                    PlatformUsageDeliveryModel.status.in_(["pending", "sending"]),
                    PlatformUsageDeliveryModel.scheduled_for <= now,
                )
                .values(
                    status="sending",
                    attempt_count=PlatformUsageDeliveryModel.attempt_count + 1,
                    scheduled_for=now + timedelta(seconds=lease_seconds),
                    updated_at=now,
                )
                .returning(PlatformUsageDeliveryModel)
            )
            delivery = result.scalar_one_or_none()
            if delivery is not None:
                session.expunge(delivery)
            await session.commit()
            return delivery

    async def finish_platform_usage_delivery(
        self,
        delivery_id: int,
        attempt_count: int,
        *,
        status: str,
        error: str | None = None,
        status_code: int | None = None,
        scheduled_for: datetime | None = None,
    ) -> None:
        async with self.async_session() as session:
            await session.execute(
                update(PlatformUsageDeliveryModel)
                .where(
                    PlatformUsageDeliveryModel.id == delivery_id,
                    PlatformUsageDeliveryModel.status == "sending",
                    PlatformUsageDeliveryModel.attempt_count == attempt_count,
                )
                .values(
                    status=status,
                    last_error=error,
                    last_status_code=status_code,
                    scheduled_for=scheduled_for,
                    updated_at=datetime.now(UTC),
                )
            )
            await session.commit()

    async def get_due_platform_usage_deliveries(
        self,
        *,
        after_id: int = 0,
        limit: int = 100,
    ) -> list[PlatformUsageDeliveryModel]:
        async with self.async_session() as session:
            result = await session.execute(
                select(PlatformUsageDeliveryModel)
                .where(
                    PlatformUsageDeliveryModel.status.in_(["pending", "sending"]),
                    PlatformUsageDeliveryModel.scheduled_for <= datetime.now(UTC),
                    PlatformUsageDeliveryModel.id > after_id,
                )
                .order_by(PlatformUsageDeliveryModel.id)
                .limit(limit)
            )
            return list(result.scalars())

    async def list_platform_usage_dead_letters(
        self,
        organization_id: int,
        *,
        after_id: int = 0,
        limit: int = 100,
    ) -> list[PlatformUsageDeliveryModel]:
        async with self.async_session() as session:
            result = await session.execute(
                select(PlatformUsageDeliveryModel)
                .where(
                    PlatformUsageDeliveryModel.organization_id == organization_id,
                    PlatformUsageDeliveryModel.status == "dead_letter",
                    PlatformUsageDeliveryModel.id > after_id,
                )
                .order_by(PlatformUsageDeliveryModel.id)
                .limit(limit)
            )
            return list(result.scalars())

    async def reconcile_platform_usage_delivery(
        self,
        delivery_id: int,
        organization_id: int,
        *,
        processed: bool,
    ) -> bool:
        """Operator assertion after checking MPS records, scoped to one tenant.

        Never resets attempt_count: monotonic fencing prevents a stale worker
        completing a newly scheduled attempt after operator reconciliation.
        """
        async with self.async_session() as session:
            result = await session.execute(
                update(PlatformUsageDeliveryModel)
                .where(
                    PlatformUsageDeliveryModel.id == delivery_id,
                    PlatformUsageDeliveryModel.organization_id == organization_id,
                    PlatformUsageDeliveryModel.status == "dead_letter",
                )
                .values(
                    status="sent" if processed else "pending",
                    scheduled_for=None if processed else datetime.now(UTC),
                    max_attempts=PlatformUsageDeliveryModel.attempt_count + 8,
                    last_error="operator_confirmed_processed"
                    if processed
                    else "operator_confirmed_not_processed",
                    updated_at=datetime.now(UTC),
                )
                .returning(PlatformUsageDeliveryModel.id)
            )
            changed = result.scalar_one_or_none() is not None
            await session.commit()
            return changed
