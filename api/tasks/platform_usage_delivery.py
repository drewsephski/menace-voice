"""Deliver persisted usage reports without replaying completion integrations.

Only receiver-confirmed idempotency makes ambiguous transport outcomes safe to
retry. Otherwise retain them as dead letters for explicit reconciliation.
"""

import asyncio
from datetime import UTC, datetime, timedelta

import httpx
from loguru import logger

from api.constants import DEPLOYMENT_MODE
from api.db import db_client
from api.services.mps_service_key_client import mps_service_key_client


def _failure(exc: Exception, retry_safe: bool) -> tuple[bool, str, int | None]:
    if isinstance(exc, (httpx.ConnectError, httpx.ConnectTimeout, httpx.PoolTimeout)):
        return True, type(exc).__name__, None
    if isinstance(exc, httpx.HTTPStatusError):
        code = exc.response.status_code
        if code == 409 and "usage_not_ready" in exc.response.text:
            return False, "no_billable_stt_usage", code
        if code == 429:
            return True, "rate_limited", code
        if code >= 500 or code == 408:
            return retry_safe, "ambiguous_http_response", code
        return False, "permanent_http_failure", code
    # Read/write errors, invalid response JSON, and unknown client exceptions
    # may occur after MPS accepted a charge. Never persist response bodies.
    return retry_safe, "ambiguous_transport_outcome", None


async def deliver_platform_usage(_ctx, delivery_id: int) -> None:
    if DEPLOYMENT_MODE == "oss":
        return
    delivery = await db_client.claim_platform_usage_delivery(delivery_id)
    if delivery is None:
        return
    if delivery.attempt_count > delivery.max_attempts:
        await db_client.finish_platform_usage_delivery(
            delivery.id,
            delivery.attempt_count,
            status="dead_letter",
            error="attempt_limit_reached",
        )
        return
    try:
        # Wall-clock deadline also bounds slow trickle responses, unlike the
        # client's per-I/O timeout. The persisted lease is 300 seconds.
        async with asyncio.timeout(120):
            await mps_service_key_client.report_platform_usage(
                organization_id=delivery.organization_id,
                **delivery.payload,
            )
    except Exception as exc:  # noqa: BLE001 - persist every ambiguous send outcome
        retry, error, code = _failure(exc, delivery.retry_safe)
        if error == "no_billable_stt_usage":
            # Preserve the established MPS contract: after the client's short
            # usage_not_ready retries, a 409 means no platform fee for this run.
            status = "skipped"
        elif retry and delivery.attempt_count < delivery.max_attempts:
            status = "pending"
        else:
            status = "dead_letter"
        scheduled_for = (
            datetime.now(UTC)
            + timedelta(seconds=min(3600, 30 * 2 ** min(delivery.attempt_count - 1, 7)))
            if status == "pending"
            else None
        )
        await db_client.finish_platform_usage_delivery(
            delivery.id,
            delivery.attempt_count,
            status=status,
            error=error,
            status_code=code,
            scheduled_for=scheduled_for,
        )
        logger.warning(
            "Platform usage delivery {}: {} ({})", delivery.id, status, error
        )
    else:
        await db_client.finish_platform_usage_delivery(
            delivery.id,
            delivery.attempt_count,
            status="sent",
            status_code=200,
        )


async def sweep_platform_usage_deliveries(_ctx) -> None:
    if DEPLOYMENT_MODE == "oss":
        return
    from api.tasks.arq import enqueue_job
    from api.tasks.function_names import FunctionNames

    after_id = 0
    while deliveries := await db_client.get_due_platform_usage_deliveries(
        after_id=after_id
    ):
        for delivery in deliveries:
            if delivery.scheduled_for is None:
                continue
            # Include the lease/due timestamp so a retained ARQ result cannot
            # suppress recovery after an earlier worker exits or times out.
            await enqueue_job(
                FunctionNames.DELIVER_PLATFORM_USAGE,
                delivery.id,
                _job_id=f"platform-usage-{delivery.id}-{delivery.scheduled_for.isoformat()}",
            )
        after_id = deliveries[-1].id
