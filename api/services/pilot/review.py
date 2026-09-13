"""Conservative review projections of persisted call evidence.

Disposition is the workflow's recorded classification, not a verified pilot
outcome. HTTP acceptance, a transfer disposition, and model usage cannot prove
human receipt or authoritative currency costs.
"""

import math
from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class WebhookReview(BaseModel):
    queued: int = 0
    accepted: int = 0
    failed: int = 0
    human_receipt: Literal["not_recorded"] = "not_recorded"


class PilotRunReview(BaseModel):
    run_id: int
    workflow_id: int
    created_at: datetime
    state: str
    mode: str
    is_completed: bool
    disposition: str | None
    call_status: str | None
    error_recorded: bool
    transfer: Literal["recorded_transfer", "not_recorded"]
    duration_seconds: float | None
    recorded_token_usage: float | None
    actual_cost: Literal["not_recorded"] = "not_recorded"
    webhooks: WebhookReview = Field(default_factory=WebhookReview)


class PilotReviewPage(BaseModel):
    runs: list[PilotRunReview]
    next_before_id: int | None = None


def _recorded_text(value: object) -> str | None:
    return value[:200] if isinstance(value, str) and value.strip() else None


def _nonnegative_number(value: object) -> float | None:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    number = float(value)
    return number if math.isfinite(number) and number >= 0 else None


def project_run_review(run: dict, webhooks: WebhookReview) -> PilotRunReview:
    """Expose only selected evidence; never copy context/PII, logs or URLs."""
    gathered = run.get("gathered_context")
    gathered = gathered if isinstance(gathered, dict) else {}
    usage = run.get("usage_info")
    usage = usage if isinstance(usage, dict) else {}
    cost = run.get("cost_info")
    cost = cost if isinstance(cost, dict) else {}
    call_status = _recorded_text(gathered.get("call_status"))
    return PilotRunReview(
        run_id=run["id"],
        workflow_id=run["workflow_id"],
        created_at=run["created_at"],
        state=run["state"],
        mode=run["mode"],
        is_completed=bool(run["is_completed"]),
        disposition=_recorded_text(gathered.get("call_disposition")),
        call_status=call_status,
        error_recorded=bool(gathered.get("error")),
        transfer=(
            "recorded_transfer" if call_status == "transfer_call" else "not_recorded"
        ),
        duration_seconds=_nonnegative_number(usage.get("call_duration_seconds")),
        recorded_token_usage=_nonnegative_number(cost.get("dograh_token_usage")),
        webhooks=webhooks,
    )
