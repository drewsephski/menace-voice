"""Stripe subscription billing routes."""

from datetime import datetime
from typing import Any, Literal

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from api.db import db_client
from api.db.models import UserModel
from api.services.auth.depends import get_user_with_selected_organization
from api.services.billing.plans import PLAN_LIMITS
from api.services.billing.stripe_service import (
    create_checkout_session,
    create_customer_portal_session,
    stripe_billing_enabled,
)
from api.services.billing.subscription_access import (
    get_subscription_access,
    public_plan_catalog,
)

router = APIRouter(prefix="/organizations/billing", tags=["billing"])


class SubscriptionLimitsResponse(BaseModel):
    max_workflows: int
    telephony_enabled: bool
    campaigns_enabled: bool
    max_concurrent_calls: int


class SubscriptionUsageResponse(BaseModel):
    workflows: int


class SubscriptionStatusResponse(BaseModel):
    stripe_enabled: bool
    plan: str
    status: str | None = None
    is_active: bool
    has_active_subscription: bool = False
    has_billing_account: bool = False
    trial_ends_at: datetime | None = None
    current_period_end: datetime | None = None
    limits: SubscriptionLimitsResponse
    usage: SubscriptionUsageResponse
    plans: list[dict[str, Any]] = Field(default_factory=list)


class CheckoutSessionRequest(BaseModel):
    plan: Literal["starter", "pro"]


class CheckoutSessionResponse(BaseModel):
    checkout_url: str


class PortalSessionResponse(BaseModel):
    portal_url: str


@router.get("/subscription", response_model=SubscriptionStatusResponse)
async def get_subscription_status(
    user: UserModel = Depends(get_user_with_selected_organization),
) -> SubscriptionStatusResponse:
    organization_id = user.selected_organization_id
    if organization_id is None:
        raise HTTPException(status_code=400, detail="No organization selected")

    organization = await db_client.get_organization_by_id(organization_id)
    if organization is None:
        raise HTTPException(status_code=404, detail="Organization not found")

    access = get_subscription_access(organization)
    counts = await db_client.get_workflow_counts(organization_id=organization_id)
    limits = PLAN_LIMITS[access.plan]

    return SubscriptionStatusResponse(
        stripe_enabled=stripe_billing_enabled(),
        plan=access.plan,
        status=access.status,
        is_active=access.is_active,
        has_active_subscription=bool(organization.stripe_subscription_id)
        and access.is_active,
        has_billing_account=bool(organization.stripe_customer_id),
        trial_ends_at=access.trial_ends_at,
        current_period_end=access.current_period_end,
        limits=SubscriptionLimitsResponse(
            max_workflows=limits.max_workflows,
            telephony_enabled=limits.telephony_enabled,
            campaigns_enabled=limits.campaigns_enabled,
            max_concurrent_calls=limits.max_concurrent_calls,
        ),
        usage=SubscriptionUsageResponse(workflows=counts.get("total", 0)),
        plans=public_plan_catalog() if stripe_billing_enabled() else [],
    )


@router.post("/subscription/checkout", response_model=CheckoutSessionResponse)
async def create_subscription_checkout(
    request: CheckoutSessionRequest,
    user: UserModel = Depends(get_user_with_selected_organization),
) -> CheckoutSessionResponse:
    if not stripe_billing_enabled():
        raise HTTPException(status_code=404, detail="Stripe billing is not enabled")

    organization_id = user.selected_organization_id
    if organization_id is None:
        raise HTTPException(status_code=400, detail="No organization selected")

    organization = await db_client.get_organization_by_id(organization_id)
    if organization is None:
        raise HTTPException(status_code=404, detail="Organization not found")

    checkout_url = await create_checkout_session(
        organization,
        plan=request.plan,
        email=user.email,
    )
    return CheckoutSessionResponse(checkout_url=checkout_url)


@router.post("/subscription/portal", response_model=PortalSessionResponse)
async def create_subscription_portal(
    user: UserModel = Depends(get_user_with_selected_organization),
) -> PortalSessionResponse:
    if not stripe_billing_enabled():
        raise HTTPException(status_code=404, detail="Stripe billing is not enabled")

    organization_id = user.selected_organization_id
    if organization_id is None:
        raise HTTPException(status_code=400, detail="No organization selected")

    organization = await db_client.get_organization_by_id(organization_id)
    if organization is None:
        raise HTTPException(status_code=404, detail="Organization not found")

    portal_url = await create_customer_portal_session(organization)
    return PortalSessionResponse(portal_url=portal_url)
