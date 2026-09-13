from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest
from arq import Retry

from api.enums import WorkflowRunMode
from api.services import workflow_run_billing as billing
from api.tasks import arq, workflow_completion


def _run(**changes):
    values = {
        "id": 123,
        "workflow_id": 456,
        "is_completed": True,
        "initial_context": {"mps_correlation_id": "mps-corr-123"},
        "usage_info": {"call_duration_seconds": 87},
        "workflow": SimpleNamespace(organization_id=42),
    }
    return SimpleNamespace(**(values | changes))


@pytest.fixture
def outbox(monkeypatch):
    monkeypatch.setattr(billing, "DEPLOYMENT_MODE", "saas")
    monkeypatch.delenv("MPS_PLATFORM_USAGE_IDEMPOTENCY_CONFIRMED", raising=False)
    create = AsyncMock(return_value=SimpleNamespace(id=9, status="pending"))
    enqueue = AsyncMock()
    monkeypatch.setattr(billing.db_client, "create_platform_usage_delivery", create)
    monkeypatch.setattr(arq, "enqueue_job", enqueue)
    return create, enqueue


@pytest.mark.asyncio
@pytest.mark.parametrize("correlation", ["mps-corr-123", None])
async def test_completion_persists_frozen_report_before_enqueue(outbox, correlation):
    create, enqueue = outbox
    run = _run(
        initial_context={"mps_correlation_id": correlation} if correlation else {}
    )
    await billing.report_workflow_run_platform_usage(run)
    create.assert_awaited_once_with(
        workflow_run_id=123,
        organization_id=42,
        retry_safe=False,
        payload={
            "workflow_run_id": 123,
            "correlation_id": correlation,
            "duration_seconds": None if correlation else 87.0,
            "metadata": {
                "source": "workflow_run_completion",
                "workflow_id": 456,
                "duration_source": "mps_correlation"
                if correlation
                else "dograh_usage_info",
            },
        },
    )
    enqueue.assert_awaited_once_with("deliver_platform_usage", 9)


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "changes",
    [
        {"is_completed": False},
        {"mode": WorkflowRunMode.TEXTCHAT.value},
        {"workflow": None},
        {"initial_context": {}, "usage_info": {}},
        {"initial_context": {}, "usage_info": {"call_duration_seconds": float("inf")}},
    ],
)
async def test_unbillable_runs_do_not_create_reports(outbox, changes):
    await billing.report_workflow_run_platform_usage(_run(**changes))
    outbox[0].assert_not_awaited()


@pytest.mark.asyncio
async def test_oss_never_creates_reports(outbox, monkeypatch):
    monkeypatch.setattr(billing, "DEPLOYMENT_MODE", "oss")
    await billing.report_workflow_run_platform_usage(_run())
    outbox[0].assert_not_awaited()


@pytest.mark.asyncio
async def test_redis_failure_preserves_durable_report(outbox):
    outbox[1].side_effect = ConnectionError("Redis unavailable")
    await billing.report_workflow_run_platform_usage(_run())
    outbox[0].assert_awaited_once()


@pytest.mark.asyncio
async def test_database_failure_propagates_and_retries_before_integrations(
    outbox, monkeypatch
):
    outbox[0].side_effect = RuntimeError("PostgreSQL unavailable")
    monkeypatch.setattr(
        billing.db_client, "get_workflow_run_by_id", AsyncMock(return_value=_run())
    )
    integrations = AsyncMock()
    monkeypatch.setattr(
        workflow_completion, "run_integrations_post_workflow_run", integrations
    )
    with pytest.raises(Retry):
        await workflow_completion.process_workflow_completion({}, 123)
    integrations.assert_not_awaited()


@pytest.mark.asyncio
async def test_completed_report_is_not_enqueued_again(outbox):
    outbox[0].return_value.status = "sent"
    await billing.report_workflow_run_platform_usage(_run())
    outbox[1].assert_not_awaited()


@pytest.mark.asyncio
async def test_idempotency_confirmation_is_explicit(outbox, monkeypatch):
    monkeypatch.setenv("MPS_PLATFORM_USAGE_IDEMPOTENCY_CONFIRMED", "true")
    await billing.report_workflow_run_platform_usage(_run())
    assert outbox[0].call_args.kwargs["retry_safe"] is True
