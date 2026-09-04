"""SaaS subscription plan definitions and limits."""

from dataclasses import dataclass
from typing import Literal

SubscriptionPlanId = Literal["free", "starter", "pro"]
PaidSubscriptionPlanId = Literal["starter", "pro"]

TRIAL_DAYS = 14


@dataclass(frozen=True)
class PlanLimits:
    max_workflows: int
    telephony_enabled: bool
    campaigns_enabled: bool
    max_concurrent_calls: int


@dataclass(frozen=True)
class PlanCatalogEntry:
    id: PaidSubscriptionPlanId
    name: str
    price_usd: int
    description: str
    features: tuple[str, ...]
    limits: PlanLimits


PLAN_LIMITS: dict[SubscriptionPlanId, PlanLimits] = {
    "free": PlanLimits(
        max_workflows=1,
        telephony_enabled=False,
        campaigns_enabled=False,
        max_concurrent_calls=1,
    ),
    "starter": PlanLimits(
        max_workflows=10,
        telephony_enabled=True,
        campaigns_enabled=False,
        max_concurrent_calls=5,
    ),
    "pro": PlanLimits(
        max_workflows=50,
        telephony_enabled=True,
        campaigns_enabled=True,
        max_concurrent_calls=20,
    ),
}

PAID_PLANS: tuple[PlanCatalogEntry, ...] = (
    PlanCatalogEntry(
        id="starter",
        name="Starter",
        price_usd=49,
        description="For teams shipping their first production voice agents.",
        features=(
            "10 voice agents",
            "Telephony (inbound & outbound)",
            "5 concurrent calls",
            "WebRTC testing",
            "Email support",
        ),
        limits=PLAN_LIMITS["starter"],
    ),
    PlanCatalogEntry(
        id="pro",
        name="Pro",
        price_usd=149,
        description="For growing teams running campaigns at scale.",
        features=(
            "50 voice agents",
            "Telephony (inbound & outbound)",
            "Outbound campaigns",
            "20 concurrent calls",
            "Priority support",
        ),
        limits=PLAN_LIMITS["pro"],
    ),
)

PAID_PLAN_IDS: frozenset[str] = frozenset(plan.id for plan in PAID_PLANS)

ACTIVE_SUBSCRIPTION_STATUSES: frozenset[str] = frozenset(
    {"trialing", "active", "past_due"}
)
