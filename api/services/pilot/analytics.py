from collections.abc import Mapping
from typing import Any

from api.services.pilot.contracts import (
    ActivationMilestone,
    CallbackSummary,
    DeliveryStatus,
    EscalationStatus,
    SevereCategory,
)
from api.services.pilot.costs import ActualCostState


def build_pilot_analytics_properties(
    summary: CallbackSummary, *, extra: Mapping[str, Any] | None = None
) -> dict[str, Any]:
    del extra
    total = summary.costs.known_total
    return {
        "schema_version": summary.schema_version,
        "outcome": summary.classification.outcome.value,
        "severe_categories": sorted(
            {failure.category.value for failure in summary.severe_failures}
        ),
        "escalation_status": summary.escalation.status.value,
        "delivery_status": summary.delivery.status.value,
        "cost_component_states": sorted(
            {entry.state.value for entry in summary.costs.entries}
        ),
        "known_cost_currency": total.currency if total else None,
        "known_cost_amount": str(total.amount) if total else None,
    }


_MONITORING_ALLOWLIST = {
    "schema_version",
    "activation_milestone",
    "outcome",
    "severe_categories",
    "escalation_status",
    "delivery_status",
    "cost_component_states",
}
_OUTCOME_VALUES = {
    "qualified_callback",
    "successful_escalation",
    "caller_requested_callback",
    "incomplete_intake",
    "caller_abandoned",
    "transfer_failed",
    "technical_failure",
    "safety_fallback",
    "other",
}
_SEVERE_VALUES = {category.value for category in SevereCategory}
_ACTIVATION_VALUES = {milestone.value for milestone in ActivationMilestone}
_ESCALATION_VALUES = {status.value for status in EscalationStatus}
_DELIVERY_VALUES = {status.value for status in DeliveryStatus}
_COST_STATE_VALUES = {state.value for state in ActualCostState}


def sanitize_pilot_monitoring_context(properties: Mapping[str, Any]) -> dict[str, Any]:
    sanitized: dict[str, Any] = {}
    if properties.get("schema_version") == "1.0":
        sanitized["schema_version"] = "1.0"
    if properties.get("outcome") in _OUTCOME_VALUES:
        sanitized["outcome"] = properties["outcome"]
    severe_categories = properties.get("severe_categories")
    if isinstance(severe_categories, list) and all(
        isinstance(category, str) and category in _SEVERE_VALUES
        for category in severe_categories
    ):
        sanitized["severe_categories"] = sorted(set(severe_categories))
    for key, allowed_values in {
        "activation_milestone": _ACTIVATION_VALUES,
        "escalation_status": _ESCALATION_VALUES,
        "delivery_status": _DELIVERY_VALUES,
    }.items():
        value = properties.get(key)
        if isinstance(value, str) and value in allowed_values:
            sanitized[key] = value
    cost_component_states = properties.get("cost_component_states")
    if isinstance(cost_component_states, list) and all(
        isinstance(state, str) and state in _COST_STATE_VALUES
        for state in cost_component_states
    ):
        sanitized["cost_component_states"] = sorted(set(cost_component_states))
    return sanitized
