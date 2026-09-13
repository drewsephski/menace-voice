from datetime import UTC, datetime
from types import SimpleNamespace
from unittest.mock import AsyncMock

import httpx
import pytest

from api.tasks import arq
from api.tasks import platform_usage_delivery as task


def _http_error(code, body="failure"):
    response = httpx.Response(
        code, text=body, request=httpx.Request("POST", "https://mps.invalid/usage")
    )
    return httpx.HTTPStatusError("failed", request=response.request, response=response)


@pytest.fixture
def delivery(monkeypatch):
    monkeypatch.setattr(task, "DEPLOYMENT_MODE", "saas")
    row = SimpleNamespace(
        id=1,
        organization_id=42,
        payload={"workflow_run_id": 123},
        attempt_count=1,
        max_attempts=8,
        retry_safe=False,
    )
    monkeypatch.setattr(
        task.db_client, "claim_platform_usage_delivery", AsyncMock(return_value=row)
    )
    monkeypatch.setattr(task.db_client, "finish_platform_usage_delivery", AsyncMock())
    monkeypatch.setattr(
        task.mps_service_key_client, "report_platform_usage", AsyncMock()
    )
    return row


@pytest.mark.asyncio
async def test_success_marks_sent(delivery):
    await task.deliver_platform_usage({}, 1)
    task.db_client.finish_platform_usage_delivery.assert_awaited_once_with(
        1, 1, status="sent", status_code=200
    )


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "error,retry_safe,expected",
    [
        (httpx.ConnectTimeout("offline"), False, "pending"),
        (httpx.ConnectError("offline"), False, "pending"),
        (httpx.PoolTimeout("busy"), False, "pending"),
        (_http_error(429), False, "pending"),
        (_http_error(503), False, "dead_letter"),
        (_http_error(503), True, "pending"),
        (httpx.ReadTimeout("unknown"), False, "dead_letter"),
        (httpx.ReadTimeout("unknown"), True, "pending"),
        (httpx.WriteError("unknown"), False, "dead_letter"),
        (_http_error(403), True, "dead_letter"),
        (_http_error(409, "usage_not_ready"), True, "skipped"),
    ],
)
async def test_failure_policy(delivery, error, retry_safe, expected):
    delivery.retry_safe = retry_safe
    task.mps_service_key_client.report_platform_usage.side_effect = error
    await task.deliver_platform_usage({}, 1)
    kwargs = task.db_client.finish_platform_usage_delivery.call_args.kwargs
    assert kwargs["status"] == expected
    assert (kwargs["scheduled_for"] is not None) == (expected == "pending")


@pytest.mark.asyncio
async def test_retry_budget_is_bounded(delivery):
    delivery.attempt_count = 8
    task.mps_service_key_client.report_platform_usage.side_effect = httpx.ConnectError(
        "offline"
    )
    await task.deliver_platform_usage({}, 1)
    assert (
        task.db_client.finish_platform_usage_delivery.call_args.kwargs["status"]
        == "dead_letter"
    )


@pytest.mark.asyncio
async def test_competing_worker_does_not_send(delivery):
    task.db_client.claim_platform_usage_delivery.return_value = None
    await task.deliver_platform_usage({}, 1)
    task.mps_service_key_client.report_platform_usage.assert_not_awaited()


@pytest.mark.asyncio
async def test_sweeper_recovers_lost_jobs_with_pagination(delivery, monkeypatch):
    row = SimpleNamespace(id=1, scheduled_for=datetime.now(UTC))
    due = AsyncMock(side_effect=[[row], []])
    enqueue = AsyncMock()
    monkeypatch.setattr(task.db_client, "get_due_platform_usage_deliveries", due)
    monkeypatch.setattr(arq, "enqueue_job", enqueue)
    await task.sweep_platform_usage_deliveries({})
    enqueue.assert_awaited_once()
    assert enqueue.call_args.args == ("deliver_platform_usage", 1)
    assert due.call_args.kwargs == {"after_id": 1}
