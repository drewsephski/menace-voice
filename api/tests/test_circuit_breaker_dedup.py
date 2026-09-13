"""Exercise actual Redis Lua atomicity, rather than mocking EVAL responses."""

import asyncio
import uuid
from unittest.mock import patch

import pytest

from api.services.campaign.circuit_breaker import CircuitBreaker


@pytest.fixture
async def breaker():
    cb = CircuitBreaker()
    campaign_id = uuid.uuid4().int % (2**31)
    yield cb, campaign_id
    redis = await cb._get_redis()
    keys = [key async for key in redis.scan_iter(match=f"cb_*:{campaign_id}*")]
    if keys:
        await redis.delete(*keys)
    await cb.close()


@pytest.mark.parametrize("failure", [True, False])
async def test_duplicate_callbacks_count_once_sequential_and_concurrent(
    breaker, failure
):
    cb, campaign_id = breaker
    first = await cb.record_call_outcome(campaign_id, failure, workflow_run_id=100)
    assert first[1] is not None
    duplicates = await asyncio.gather(
        *[
            cb.record_call_outcome(campaign_id, failure, workflow_run_id=100)
            for _ in range(20)
        ]
    )
    assert all(result == (False, None) for result in duplicates)
    _, stats = await cb.is_circuit_open(campaign_id)
    assert stats["failure_count"] == int(failure)
    assert stats["success_count"] == int(not failure)


async def test_pipeline_failure_corrects_success_without_double_counting(breaker):
    cb, campaign_id = breaker
    await cb.record_call_outcome(campaign_id, False, workflow_run_id=100)
    await cb.record_call_outcome(campaign_id, True, workflow_run_id=100)
    await cb.record_call_outcome(campaign_id, False, workflow_run_id=100)
    _, stats = await cb.is_circuit_open(campaign_id)
    assert stats["failure_count"] == 1
    assert stats["success_count"] == 0


async def test_simultaneous_conflicting_outcomes_converge_to_one_failure(breaker):
    cb, campaign_id = breaker
    await asyncio.gather(
        *[
            cb.record_call_outcome(campaign_id, bool(i % 2), workflow_run_id=100)
            for i in range(20)
        ]
    )
    _, stats = await cb.is_circuit_open(campaign_id)
    assert stats["failure_count"] == 1
    assert stats["success_count"] == 0


@pytest.mark.parametrize("first_failure", [True, False])
async def test_duplicate_does_not_trip_after_reset(breaker, first_failure):
    cb, campaign_id = breaker
    await cb.record_call_outcome(campaign_id, first_failure, workflow_run_id=100)
    await cb.reset(campaign_id)
    assert await cb.record_call_outcome(campaign_id, True, workflow_run_id=100) == (
        False,
        None,
    )
    _, stats = await cb.is_circuit_open(campaign_id)
    assert stats["failure_count"] == stats["success_count"] == 0


async def test_late_correction_preserves_original_window_timestamp(breaker):
    cb, campaign_id = breaker
    with patch("api.services.campaign.circuit_breaker.time.time", return_value=1000):
        await cb.record_call_outcome(campaign_id, False, workflow_run_id=100)
    with patch("api.services.campaign.circuit_breaker.time.time", return_value=1300):
        assert await cb.record_call_outcome(campaign_id, True, workflow_run_id=100) == (
            False,
            None,
        )
        _, stats = await cb.is_circuit_open(campaign_id)
    assert stats["failure_count"] == stats["success_count"] == 0
