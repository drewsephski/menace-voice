"""Workflow-run billing hooks.

Dograh does not rate or deduct credits locally. MPS owns credit accounting.
For hosted deployments, Dograh reports completed platform usage to MPS.
When a server-minted MPS correlation id exists, MPS uses model-service usage
as the canonical duration. Otherwise Dograh reports the completed run duration.
"""

import math
import os
from typing import Any

from loguru import logger

from api.constants import DEPLOYMENT_MODE
from api.db import db_client
from api.enums import WorkflowRunMode
from api.services.managed_model_services import get_mps_correlation_id


def _workflow_run_organization_id(workflow_run) -> int | None:
    workflow = getattr(workflow_run, "workflow", None)
    return getattr(workflow, "organization_id", None)


def _duration_seconds_from_usage_info(workflow_run) -> float | None:
    usage_info: dict[str, Any] = getattr(workflow_run, "usage_info", None) or {}
    duration = usage_info.get("call_duration_seconds")
    if duration is None:
        return None
    try:
        duration_seconds = float(duration)
    except (TypeError, ValueError):
        return None

    return (
        duration_seconds
        if math.isfinite(duration_seconds) and duration_seconds > 0
        else None
    )


async def report_workflow_run_platform_usage(workflow_run) -> None:
    """Report hosted platform usage for a completed workflow run to MPS."""
    if DEPLOYMENT_MODE == "oss":
        return

    if getattr(workflow_run, "mode", None) == WorkflowRunMode.TEXTCHAT.value:
        logger.info(
            "Skipping platform usage report for text chat workflow run {}",
            workflow_run.id,
        )
        return

    if not getattr(workflow_run, "is_completed", False):
        logger.warning(
            "Workflow run is not completed in report_workflow_run_platform_usage"
        )
        return

    organization_id = _workflow_run_organization_id(workflow_run)
    if organization_id is None:
        logger.warning(
            "Skipping platform usage report for workflow run {}: no organization_id",
            workflow_run.id,
        )
        return

    correlation_id = get_mps_correlation_id(
        getattr(workflow_run, "initial_context", None)
    )
    duration_seconds = (
        None if correlation_id else _duration_seconds_from_usage_info(workflow_run)
    )
    if not correlation_id and duration_seconds is None:
        logger.warning(
            "Skipping platform usage report for workflow run {}: no billable duration",
            workflow_run.id,
        )
        return

    delivery = await db_client.create_platform_usage_delivery(
        workflow_run_id=workflow_run.id,
        organization_id=organization_id,
        payload={
            "correlation_id": correlation_id,
            "duration_seconds": duration_seconds,
            "workflow_run_id": workflow_run.id,
            "metadata": {
                "source": "workflow_run_completion",
                "workflow_id": getattr(workflow_run, "workflow_id", None),
                "duration_source": "mps_correlation"
                if correlation_id
                else "dograh_usage_info",
            },
        },
        retry_safe=os.getenv(
            "MPS_PLATFORM_USAGE_IDEMPOTENCY_CONFIRMED", "false"
        ).lower()
        == "true",
    )
    # Persistence errors intentionally propagate: completion must not claim
    # success when its billing obligation was never recorded. Redis failures
    # are recoverable because the periodic sweeper reads the committed outbox.
    if delivery.status == "pending":
        from api.tasks.arq import enqueue_job
        from api.tasks.function_names import FunctionNames

        try:
            await enqueue_job(FunctionNames.DELIVER_PLATFORM_USAGE, delivery.id)
        except Exception:  # noqa: BLE001 - committed reports survive enqueue errors
            logger.warning(
                "Platform usage delivery {} persisted; enqueue failed, awaiting sweep",
                delivery.id,
            )


async def report_completed_workflow_run_platform_usage(workflow_run_id: int) -> None:
    """Load a completed workflow run and persist its platform usage report."""
    if DEPLOYMENT_MODE == "oss":
        return
    workflow_run = await db_client.get_workflow_run_by_id(workflow_run_id)
    if not workflow_run:
        logger.warning(
            "Skipping platform usage report: workflow run {} not found",
            workflow_run_id,
        )
        return

    await report_workflow_run_platform_usage(workflow_run)
