"""Subscription access checks for Stripe-backed SaaS plans."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import UTC, datetime

from fastapi import HTTPException

from api.db import db_client
from api.db.models import OrganizationModel
from api.services.billing.plans import PLAN_LIMITS, PAID_PLANS, SubscriptionPlanId
from api.services.billing.stripe_service import stripe_billing_enabled


@dataclass(frozen=True)
class SubscriptionAccess:
    plan: SubscriptionPlanId
    status: str | None
    is_active: bool
    trial_ends_at: datetime | None
    current_period_end: datetime | None
    limits: object


def _now() -> datetime:
    return datetime.now(UTC)


def _is_trial_active(organization: OrganizationModel) -> bool:
    if organization.subscription_status != "trialing":
        return False
    if organization.trial_ends_at is None:
        return True
    trial_end = organization.trial_ends_at
    if trial_end.tzinfo is None:
        trial_end = trial_end.replace(tzinfo=UTC)
    return trial_end > _now()


def resolve_effective_plan(organization: OrganizationModel) -> SubscriptionPlanId:
    status = organization.subscription_status
    plan = organization.subscription_plan or "free"

    if status in {"trialing", "active", "past_due"}:
        if status == "trialing" and not _is_trial_active(organization):
            return "free"
        if plan in PLAN_LIMITS:
            return plan  # type: ignore[return-value]
        return "starter"

    if _is_trial_active(organization):
        return "starter"

    return "free"


def get_subscription_access(organization: OrganizationModel) -> SubscriptionAccess:
    effective_plan = resolve_effective_plan(organization)
    status = organization.subscription_status
    is_active = effective_plan != "free"

    return SubscriptionAccess(
        plan=effective_plan,
        status=status,
        is_active=is_active,
        trial_ends_at=organization.trial_ends_at,
        current_period_end=organization.subscription_current_period_end,
        limits=PLAN_LIMITS[effective_plan],
    )


def subscription_required_message(feature: str) -> str:
    return (
        f"Your subscription does not include {feature}. "
        "Upgrade on the Billing page to continue."
    )


async def assert_subscription_feature(
    organization_id: int,
    *,
    requires_telephony: bool = False,
    requires_campaigns: bool = False,
    requires_workflow_slot: bool = False,
) -> SubscriptionAccess:
    organization = await db_client.get_organization_by_id(organization_id)
    if organization is None:
        raise HTTPException(status_code=404, detail="Organization not found")

    if not stripe_billing_enabled():
        return get_subscription_access(organization)

    access = get_subscription_access(organization)
    limits = PLAN_LIMITS[access.plan]

    if access.plan == "free":
        raise HTTPException(
            status_code=402,
            detail=(
                "Your trial has ended or you do not have an active subscription. "
                "Choose a plan on the Billing page to continue."
            ),
        )

    if requires_telephony and not limits.telephony_enabled:
        raise HTTPException(
            status_code=402,
            detail=subscription_required_message("telephony"),
        )

    if requires_campaigns and not limits.campaigns_enabled:
        raise HTTPException(
            status_code=402,
            detail=subscription_required_message("outbound campaigns"),
        )

    if requires_workflow_slot:
        counts = await db_client.get_workflow_counts(organization_id=organization_id)
        if counts.get("total", 0) >= limits.max_workflows:
            raise HTTPException(
                status_code=402,
                detail=(
                    f"Your {access.plan.title()} plan allows up to "
                    f"{limits.max_workflows} agents. Upgrade to add more."
                ),
            )

    return access


def public_plan_catalog() -> list[dict[str, object]]:
    return [
        {
            "id": plan.id,
            "name": plan.name,
            "price_usd": plan.price_usd,
            "description": plan.description,
            "features": list(plan.features),
            "limits": {
                "max_workflows": plan.limits.max_workflows,
                "telephony_enabled": plan.limits.telephony_enabled,
                "campaigns_enabled": plan.limits.campaigns_enabled,
                "max_concurrent_calls": plan.limits.max_concurrent_calls,
            },
        }
        for plan in PAID_PLANS
    ]
