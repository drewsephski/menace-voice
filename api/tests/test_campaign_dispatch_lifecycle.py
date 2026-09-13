"""Regression tests for dispatch ownership across cancellation boundaries."""

import asyncio
from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest

from api.services.call_concurrency import CallConcurrencySlot
from api.services.campaign import campaign_call_dispatcher as dispatch_module
from api.services.campaign.campaign_call_dispatcher import CampaignCallDispatcher


@pytest.fixture
def dispatch_setup(monkeypatch):
    dispatcher = CampaignCallDispatcher()
    db = SimpleNamespace(
        get_workflow=AsyncMock(return_value=SimpleNamespace(id=1)),
        create_workflow_run=AsyncMock(return_value=SimpleNamespace(id=30, logs={})),
        update_workflow_run=AsyncMock(),
        update_queued_run=AsyncMock(),
        mark_queued_run_processed=AsyncMock(return_value=True),
    )
    limiter = SimpleNamespace(
        acquire_from_number=AsyncMock(return_value="+15551110001"),
        release_from_number=AsyncMock(return_value=True),
        store_workflow_from_number_mapping=AsyncMock(),
        delete_workflow_from_number_mapping=AsyncMock(),
    )
    concurrency = SimpleNamespace(
        bind_workflow_run=AsyncMock(),
        release_slot=AsyncMock(),
        release_workflow_run_slot=AsyncMock(),
    )
    provider = SimpleNamespace(
        PROVIDER_NAME="twilio",
        WEBHOOK_ENDPOINT="twilio/voice",
        initiate_call=AsyncMock(
            return_value=SimpleNamespace(call_id="call-30", provider_metadata={})
        ),
    )
    quota = AsyncMock(return_value=SimpleNamespace(has_quota=True))
    monkeypatch.setattr(dispatch_module, "db_client", db)
    monkeypatch.setattr(dispatch_module, "rate_limiter", limiter)
    monkeypatch.setattr(dispatch_module, "call_concurrency", concurrency)
    monkeypatch.setattr(dispatch_module, "authorize_workflow_run_start", quota)
    monkeypatch.setattr(
        dispatch_module,
        "get_backend_endpoints",
        AsyncMock(return_value=("https://example.test", None)),
    )
    dispatcher.get_provider_for_campaign = AsyncMock(return_value=provider)
    queued = SimpleNamespace(
        id=20, source_uuid="row-20", context_variables={"phone_number": "+15552220001"}
    )
    campaign = SimpleNamespace(
        id=10,
        workflow_id=1,
        organization_id=2,
        created_by=3,
        telephony_configuration_id=4,
    )
    slot = CallConcurrencySlot(2, "slot-1", 5, "campaign:10")
    return SimpleNamespace(
        dispatcher=dispatcher,
        db=db,
        limiter=limiter,
        concurrency=concurrency,
        provider=provider,
        quota=quota,
        queued=queued,
        campaign=campaign,
        slot=slot,
    )


@pytest.mark.parametrize(
    "boundary", ["workflow_read", "workflow_create", "slot_bind", "mapping", "quota"]
)
async def test_cancel_before_provider_releases_owned_resources(
    dispatch_setup, boundary
):
    setup = dispatch_setup
    started = asyncio.Event()
    finish = asyncio.Event()
    target = {
        "workflow_read": setup.db.get_workflow,
        "workflow_create": setup.db.create_workflow_run,
        "slot_bind": setup.concurrency.bind_workflow_run,
        "mapping": setup.limiter.store_workflow_from_number_mapping,
        "quota": setup.quota,
    }[boundary]
    result = target.return_value

    async def wait_at_boundary(*args, **kwargs):
        started.set()
        await finish.wait()
        return result

    target.side_effect = wait_at_boundary
    task = asyncio.create_task(
        setup.dispatcher.dispatch_call(setup.queued, setup.campaign, setup.slot)
    )
    await started.wait()
    task.cancel()
    await asyncio.sleep(0)
    finish.set()
    with pytest.raises(asyncio.CancelledError):
        await task

    setup.provider.initiate_call.assert_not_awaited()
    setup.concurrency.release_slot.assert_awaited_once_with(setup.slot)
    if boundary != "workflow_read":
        setup.limiter.release_from_number.assert_awaited_once()
        setup.db.update_queued_run.assert_awaited_once()
        assert setup.db.update_queued_run.await_args.kwargs["state"] == "failed"
        assert setup.db.update_workflow_run.await_args.kwargs["is_completed"] is True


async def test_cancel_during_provider_retains_reservations_without_requeue(
    dispatch_setup,
):
    setup = dispatch_setup
    started = asyncio.Event()

    async def provider_pending(**kwargs):
        started.set()
        await asyncio.Event().wait()

    setup.provider.initiate_call.side_effect = provider_pending
    task = asyncio.create_task(
        setup.dispatcher.dispatch_call(setup.queued, setup.campaign, setup.slot)
    )
    await started.wait()
    task.cancel()
    with pytest.raises(asyncio.CancelledError):
        await task

    setup.concurrency.release_slot.assert_not_awaited()
    setup.concurrency.release_workflow_run_slot.assert_not_awaited()
    setup.limiter.release_from_number.assert_not_awaited()
    assert setup.db.update_queued_run.await_args.kwargs["state"] == "failed"
    assert (
        setup.db.update_workflow_run.await_args.kwargs["gathered_context"][
            "dispatch_status"
        ]
        == "unknown_after_cancellation"
    )


async def test_cancel_during_number_reservation_settles_and_releases_receipt(
    dispatch_setup,
):
    setup = dispatch_setup
    started = asyncio.Event()
    finish = asyncio.Event()

    async def reserve(*args):
        started.set()
        await finish.wait()
        return "+15551110001"

    setup.limiter.acquire_from_number.side_effect = reserve
    task = asyncio.create_task(
        setup.dispatcher.dispatch_call(setup.queued, setup.campaign, setup.slot)
    )
    await started.wait()
    task.cancel()
    await asyncio.sleep(0)
    finish.set()
    with pytest.raises(asyncio.CancelledError):
        await task
    setup.limiter.release_from_number.assert_awaited_once()
    setup.concurrency.release_slot.assert_awaited_once()
    setup.db.create_workflow_run.assert_not_awaited()


async def test_quota_error_releases_resources_and_terminalizes_run(dispatch_setup):
    setup = dispatch_setup
    setup.quota.side_effect = RuntimeError("quota service unavailable")
    with pytest.raises(RuntimeError, match="quota service unavailable"):
        await setup.dispatcher.dispatch_call(setup.queued, setup.campaign, setup.slot)
    setup.concurrency.release_slot.assert_awaited_once()
    setup.limiter.release_from_number.assert_awaited_once()
    setup.provider.initiate_call.assert_not_awaited()
    assert setup.db.update_queued_run.await_args.kwargs["state"] == "failed"


async def test_metadata_error_after_acceptance_does_not_release_active_call(
    dispatch_setup,
):
    setup = dispatch_setup
    setup.db.update_workflow_run.side_effect = [RuntimeError("write failed"), None]
    with pytest.raises(RuntimeError, match="write failed"):
        await setup.dispatcher.dispatch_call(setup.queued, setup.campaign, setup.slot)
    setup.concurrency.release_slot.assert_not_awaited()
    setup.limiter.release_from_number.assert_not_awaited()
    setup.db.mark_queued_run_processed.assert_awaited_once_with(20, 10)


async def test_cancel_during_claim_returns_committed_claims(monkeypatch):
    started = asyncio.Event()
    finish = asyncio.Event()
    rows = [SimpleNamespace(id=20)]

    async def claim(**kwargs):
        started.set()
        await finish.wait()
        return rows

    db = SimpleNamespace(
        get_campaign_by_id=AsyncMock(return_value=SimpleNamespace(state="running")),
        claim_queued_runs_for_processing=AsyncMock(side_effect=claim),
        return_processing_queued_runs_without_workflow=AsyncMock(return_value=1),
    )
    monkeypatch.setattr(dispatch_module, "db_client", db)
    task = asyncio.create_task(CampaignCallDispatcher().process_batch(10))
    await started.wait()
    task.cancel()
    await asyncio.sleep(0)
    finish.set()
    with pytest.raises(asyncio.CancelledError):
        await task
    db.return_processing_queued_runs_without_workflow.assert_awaited_once_with([20])


async def test_cancel_during_concurrent_reservation_releases_committed_slot(
    monkeypatch,
):
    from api.services.call_concurrency import service as concurrency_module
    from api.services.call_concurrency.service import CallConcurrencyService

    started = asyncio.Event()
    finish = asyncio.Event()

    async def reserve(*args, **kwargs):
        started.set()
        await finish.wait()
        return SimpleNamespace(slot_id="slot-20", active_count=1)

    limiter = SimpleNamespace(
        try_acquire_concurrent_slot_details=AsyncMock(side_effect=reserve),
        release_concurrent_slot=AsyncMock(),
    )
    monkeypatch.setattr(concurrency_module, "rate_limiter", limiter)
    service = CallConcurrencyService()
    service.get_org_concurrent_limit = AsyncMock(return_value=5)
    task = asyncio.create_task(service.acquire_org_slot(2, source="campaign:10"))
    await started.wait()
    task.cancel()
    await asyncio.sleep(0)
    finish.set()
    with pytest.raises(asyncio.CancelledError):
        await task
    limiter.release_concurrent_slot.assert_awaited_once_with(
        2, "slot-20", scope_key=None
    )
