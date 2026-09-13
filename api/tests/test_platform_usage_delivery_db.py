"""Real PostgreSQL coverage for billing outbox state transitions and fencing."""

from datetime import UTC, datetime, timedelta
from uuid import uuid4

import pytest
from sqlalchemy import select, update

from api.db.models import (
    OrganizationModel,
    PlatformUsageDeliveryModel,
    UserModel,
    WorkflowModel,
    WorkflowRunModel,
)


@pytest.fixture
async def usage_run(async_session):
    org = OrganizationModel(provider_id=f"billing-org-{uuid4()}")
    user = UserModel(provider_id=f"billing-user-{uuid4()}")
    async_session.add_all([org, user])
    await async_session.flush()
    workflow = WorkflowModel(
        name="Billing workflow",
        user_id=user.id,
        organization_id=org.id,
        workflow_definition={"nodes": [], "edges": []},
        template_context_variables={},
    )
    async_session.add(workflow)
    await async_session.flush()
    run = WorkflowRunModel(
        name="Billing run", workflow_id=workflow.id, mode="test", is_completed=True
    )
    async_session.add(run)
    await async_session.flush()
    return org.id, run.id


async def _create(client, scope, retry_safe=False):
    org_id, run_id = scope
    return await client.create_platform_usage_delivery(
        workflow_run_id=run_id,
        organization_id=org_id,
        payload={"workflow_run_id": run_id, "duration_seconds": 12},
        retry_safe=retry_safe,
    )


@pytest.mark.asyncio
async def test_duplicate_completion_freezes_one_request(db_session, usage_run):
    first = await _create(db_session, usage_run)
    second = await db_session.create_platform_usage_delivery(
        workflow_run_id=usage_run[1],
        organization_id=usage_run[0],
        payload={"duration_seconds": 999},
        retry_safe=True,
    )
    assert first.id == second.id
    assert second.payload["duration_seconds"] == 12
    assert second.retry_safe is False


@pytest.mark.asyncio
async def test_scope_mismatch_rejected(db_session, usage_run):
    with pytest.raises(ValueError, match="organization"):
        await _create(db_session, (usage_run[0] + 100000, usage_run[1]))


@pytest.mark.asyncio
@pytest.mark.parametrize("retry_safe", [False, True])
async def test_expired_claim_recovers_or_requires_reconciliation(
    db_session,
    async_session,
    usage_run,
    retry_safe,
):
    row = await _create(db_session, usage_run, retry_safe)
    claimed = await db_session.claim_platform_usage_delivery(row.id)
    assert claimed.attempt_count == 1
    assert await db_session.claim_platform_usage_delivery(row.id) is None
    await async_session.execute(
        update(PlatformUsageDeliveryModel)
        .where(
            PlatformUsageDeliveryModel.id == row.id,
        )
        .values(scheduled_for=datetime.now(UTC) - timedelta(seconds=1))
    )
    await async_session.commit()
    reclaimed = await db_session.claim_platform_usage_delivery(row.id)
    if retry_safe:
        assert reclaimed.attempt_count == 2
        # A worker from the expired lease cannot mark the newer attempt sent.
        await db_session.finish_platform_usage_delivery(row.id, 1, status="sent")
        actual = (
            await async_session.execute(
                select(PlatformUsageDeliveryModel)
                .where(
                    PlatformUsageDeliveryModel.id == row.id,
                )
                .execution_options(populate_existing=True)
            )
        ).scalar_one()
        assert actual.status == "sending"
        await db_session.finish_platform_usage_delivery(row.id, 2, status="sent")
    else:
        assert reclaimed is None
        letters = await db_session.list_platform_usage_dead_letters(usage_run[0])
        assert [entry.id for entry in letters] == [row.id]
        assert letters[0].last_error == "ambiguous_worker_exit_requires_reconciliation"


@pytest.mark.asyncio
async def test_operator_confirmation_scoped_and_retry_fence_monotonic(
    db_session, usage_run
):
    row = await _create(db_session, usage_run)
    await db_session.claim_platform_usage_delivery(row.id)
    await db_session.finish_platform_usage_delivery(
        row.id, 1, status="dead_letter", error="unknown"
    )
    assert not await db_session.reconcile_platform_usage_delivery(
        row.id, usage_run[0] + 100000, processed=False
    )
    assert await db_session.reconcile_platform_usage_delivery(
        row.id, usage_run[0], processed=False
    )
    assert not await db_session.reconcile_platform_usage_delivery(
        row.id, usage_run[0], processed=False
    )
    reclaimed = await db_session.claim_platform_usage_delivery(row.id)
    assert reclaimed.attempt_count == 2
    assert reclaimed.max_attempts == 9


@pytest.mark.asyncio
async def test_confirm_processed_never_schedules_another_charge(db_session, usage_run):
    row = await _create(db_session, usage_run)
    await db_session.claim_platform_usage_delivery(row.id)
    await db_session.finish_platform_usage_delivery(
        row.id, 1, status="dead_letter", error="unknown"
    )
    assert await db_session.reconcile_platform_usage_delivery(
        row.id, usage_run[0], processed=True
    )
    assert await db_session.claim_platform_usage_delivery(row.id) is None


@pytest.mark.asyncio
async def test_concurrent_workers_claim_only_once(test_engine):
    """Separate DB sessions must not both win the same persisted lease."""
    import asyncio

    from sqlalchemy import delete
    from sqlalchemy.ext.asyncio import async_sessionmaker

    from api.db.platform_usage_delivery_client import PlatformUsageDeliveryClient

    sessions = async_sessionmaker(test_engine, expire_on_commit=False)
    client = PlatformUsageDeliveryClient.__new__(PlatformUsageDeliveryClient)
    client.async_session = sessions
    async with sessions() as session:
        org = OrganizationModel(provider_id=f"claim-org-{uuid4()}")
        user = UserModel(provider_id=f"claim-user-{uuid4()}")
        session.add_all([org, user])
        await session.flush()
        workflow = WorkflowModel(
            name="Claim test",
            user_id=user.id,
            organization_id=org.id,
            workflow_definition={},
            template_context_variables={},
        )
        session.add(workflow)
        await session.flush()
        run = WorkflowRunModel(name="Claim test", workflow_id=workflow.id, mode="test")
        session.add(run)
        await session.commit()
    try:
        row = await _create(client, (org.id, run.id), retry_safe=True)
        claims = await asyncio.gather(
            client.claim_platform_usage_delivery(row.id),
            client.claim_platform_usage_delivery(row.id),
        )
        winners = [claim for claim in claims if claim is not None]
        assert len(winners) == 1
        assert winners[0].attempt_count == 1
    finally:
        async with sessions() as session:
            await session.execute(
                delete(PlatformUsageDeliveryModel).where(
                    PlatformUsageDeliveryModel.workflow_run_id == run.id
                )
            )
            await session.execute(
                delete(WorkflowRunModel).where(WorkflowRunModel.id == run.id)
            )
            await session.execute(
                delete(WorkflowModel).where(WorkflowModel.id == workflow.id)
            )
            await session.execute(delete(UserModel).where(UserModel.id == user.id))
            await session.execute(
                delete(OrganizationModel).where(OrganizationModel.id == org.id)
            )
            await session.commit()
