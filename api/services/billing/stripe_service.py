"""Stripe billing integration for self-hosted SaaS deployments."""

from __future__ import annotations

import secrets
from datetime import UTC, datetime, timedelta
from typing import Any, cast

from fastapi import HTTPException
from loguru import logger
from stripe import SignatureVerificationError, StripeClient, Webhook
from stripe.params import CustomerCreateParams
from stripe.params.billing_portal import (
    SessionCreateParams as PortalSessionCreateParams,
)
from stripe.params.checkout import SessionCreateParams
from stripe.params.checkout._session_create_params import (
    SessionCreateParamsSubscriptionData,
)

from api.constants import (
    STRIPE_PRO_PRICE_ID,
    STRIPE_SECRET_KEY,
    STRIPE_STARTER_PRICE_ID,
    STRIPE_WEBHOOK_SECRET,
    UI_APP_URL,
)
from api.db import db_client
from api.db.models import OrganizationModel
from api.services.billing.plans import (
    ACTIVE_SUBSCRIPTION_STATUSES,
    PAID_PLAN_IDS,
    TRIAL_DAYS,
    SubscriptionPlanId,
)

_WEBHOOK_EVENT_TTL_SECONDS = 8 * 24 * 60 * 60


def stripe_billing_enabled() -> bool:
    return bool(
        STRIPE_SECRET_KEY
        and STRIPE_STARTER_PRICE_ID
        and STRIPE_PRO_PRICE_ID
        and STRIPE_WEBHOOK_SECRET
    )


def stripe_webhook_configured() -> bool:
    return stripe_billing_enabled() and bool(STRIPE_WEBHOOK_SECRET)


def get_stripe_client() -> StripeClient:
    if not STRIPE_SECRET_KEY:
        raise HTTPException(status_code=503, detail="Stripe billing is not configured")
    return StripeClient(STRIPE_SECRET_KEY)


def price_id_for_plan(plan: str) -> str:
    if plan == "starter":
        if not STRIPE_STARTER_PRICE_ID:
            raise HTTPException(
                status_code=503, detail="Starter plan is not configured"
            )
        return STRIPE_STARTER_PRICE_ID
    if plan == "pro":
        if not STRIPE_PRO_PRICE_ID:
            raise HTTPException(status_code=503, detail="Pro plan is not configured")
        return STRIPE_PRO_PRICE_ID
    raise HTTPException(status_code=400, detail="Invalid subscription plan")


def plan_for_price_id(price_id: str | None) -> SubscriptionPlanId:
    if price_id and STRIPE_PRO_PRICE_ID and price_id == STRIPE_PRO_PRICE_ID:
        return "pro"
    if price_id and STRIPE_STARTER_PRICE_ID and price_id == STRIPE_STARTER_PRICE_ID:
        return "starter"
    return "free"


def _eligible_for_stripe_trial(organization: OrganizationModel) -> bool:
    """Stripe trial only for orgs that have never had a local or paid trial."""
    if organization.stripe_subscription_id:
        return False
    if organization.trial_ends_at is not None:
        return False
    return organization.subscription_status is None


async def ensure_stripe_customer(
    organization: OrganizationModel,
    *,
    email: str | None = None,
) -> str:
    if organization.stripe_customer_id:
        return cast(str, organization.stripe_customer_id)

    client = get_stripe_client()
    params: CustomerCreateParams = {
        "metadata": {
            "organization_id": str(organization.id),
            "organization_provider_id": str(organization.provider_id),
        },
    }
    if email:
        params["email"] = email
    customer = client.customers.create(params=params)
    await db_client.update_organization_subscription_fields(
        cast(int, organization.id),
        stripe_customer_id=customer.id,
    )
    return customer.id


async def create_checkout_session(
    organization: OrganizationModel,
    *,
    plan: str,
    email: str | None = None,
) -> str:
    if plan not in PAID_PLAN_IDS:
        raise HTTPException(status_code=400, detail="Invalid subscription plan")

    if organization.stripe_subscription_id:
        raise HTTPException(
            status_code=409,
            detail="Manage your existing subscription in the billing portal.",
        )

    customer_id = await ensure_stripe_customer(organization, email=email)
    client = get_stripe_client()
    integration_suffix = secrets.token_hex(4)

    subscription_data: SessionCreateParamsSubscriptionData = {
        "metadata": {
            "organization_id": str(organization.id),
            "plan": plan,
        },
    }
    if _eligible_for_stripe_trial(organization):
        subscription_data["trial_period_days"] = TRIAL_DAYS

    params: SessionCreateParams = {
        "mode": "subscription",
        "customer": customer_id,
        "line_items": [{"price": price_id_for_plan(plan), "quantity": 1}],
        "success_url": f"{UI_APP_URL.rstrip('/')}/billing?checkout=success",
        "cancel_url": f"{UI_APP_URL.rstrip('/')}/billing?checkout=canceled",
        "client_reference_id": str(organization.id),
        "metadata": {
            "organization_id": str(organization.id),
            "plan": plan,
        },
        "subscription_data": subscription_data,
        "allow_promotion_codes": True,
        "integration_identifier": f"dograh_saas_checkout_{integration_suffix}",
    }
    session = client.checkout.sessions.create(params=params)
    if not session.url:
        raise HTTPException(
            status_code=502, detail="Stripe checkout session missing URL"
        )
    return session.url


async def create_customer_portal_session(organization: OrganizationModel) -> str:
    if not organization.stripe_customer_id:
        raise HTTPException(
            status_code=400,
            detail="No billing account yet. Subscribe to a plan first.",
        )

    client = get_stripe_client()
    params: PortalSessionCreateParams = {
        "customer": cast(str, organization.stripe_customer_id),
        "return_url": f"{UI_APP_URL.rstrip('/')}/billing",
    }
    session = client.billing_portal.sessions.create(params=params)
    if not session.url:
        raise HTTPException(status_code=502, detail="Stripe portal session missing URL")
    return session.url


def _parse_timestamp(value: int | None) -> datetime | None:
    if value is None:
        return None
    return datetime.fromtimestamp(value, tz=UTC)


def _subscription_payload(subscription: Any) -> dict[str, Any]:
    if isinstance(subscription, dict):
        return subscription
    if hasattr(subscription, "to_dict"):
        return subscription.to_dict()
    return dict(subscription)


def _resolve_plan_from_subscription(subscription: dict[str, Any]) -> SubscriptionPlanId:
    items = subscription.get("items", {}).get("data", [])
    price_id = items[0]["price"]["id"] if items else None
    plan = plan_for_price_id(price_id)
    if plan != "free":
        return plan

    metadata = subscription.get("metadata") or {}
    metadata_plan = metadata.get("plan")
    if metadata_plan in PAID_PLAN_IDS:
        return metadata_plan  # type: ignore[return-value]
    return "free"


async def apply_subscription_from_stripe(
    organization_id: int,
    subscription: dict[str, Any],
) -> None:
    organization = await db_client.get_organization_by_id(organization_id)
    if organization is None:
        logger.warning(
            "Ignoring Stripe subscription update for unknown organization {}",
            organization_id,
        )
        return

    if (
        not organization.stripe_customer_id
        or subscription.get("customer") != organization.stripe_customer_id
    ):
        raise HTTPException(
            status_code=400, detail="Stripe customer does not match organization"
        )

    status = subscription.get("status")
    plan = _resolve_plan_from_subscription(subscription)
    resolved_plan: SubscriptionPlanId
    if status in ACTIVE_SUBSCRIPTION_STATUSES:
        resolved_plan = plan if plan != "free" else "starter"
    else:
        resolved_plan = "free"

    items = subscription.get("items", {}).get("data", [])
    period_end = subscription.get("current_period_end")
    if period_end is None and items:
        period_end = items[0].get("current_period_end")

    await db_client.update_organization_subscription_fields(
        organization_id,
        stripe_subscription_id=subscription.get("id"),
        subscription_plan=resolved_plan,
        subscription_status=status,
        subscription_current_period_end=_parse_timestamp(period_end),
        trial_ends_at=_parse_timestamp(subscription.get("trial_end")),
    )


async def clear_subscription_for_organization(organization_id: int) -> None:
    await db_client.update_organization_subscription_fields(
        organization_id,
        stripe_subscription_id=None,
        subscription_plan="free",
        subscription_status="canceled",
        subscription_current_period_end=None,
        trial_ends_at=None,
        clear_subscription=True,
    )


async def _resolve_organization_id_from_subscription_event(
    data_object: dict[str, Any],
) -> int | None:
    organization_id = _organization_id_from_metadata(data_object.get("metadata"))
    if organization_id is not None:
        return organization_id

    organization_id = await db_client.get_organization_id_by_stripe_customer_id(
        data_object.get("customer")
    )
    if organization_id is not None:
        return organization_id

    return await db_client.get_organization_id_by_stripe_subscription_id(
        data_object.get("id")
    )


async def _resolve_organization_id_from_checkout_session(
    data_object: dict[str, Any],
) -> int | None:
    organization_id = _organization_id_from_metadata(data_object.get("metadata"))
    if organization_id is not None:
        return organization_id

    client_reference_id = data_object.get("client_reference_id")
    if client_reference_id is not None:
        try:
            return int(client_reference_id)
        except (TypeError, ValueError):
            return None
    return None


async def handle_stripe_webhook(payload: bytes, signature: str | None) -> None:
    if not STRIPE_WEBHOOK_SECRET:
        raise HTTPException(status_code=503, detail="Stripe webhook is not configured")
    if not signature:
        raise HTTPException(status_code=400, detail="Missing Stripe signature")

    try:
        event = Webhook.construct_event(
            payload.decode("utf-8"),
            signature,
            STRIPE_WEBHOOK_SECRET,
        )
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid Stripe webhook payload")
    except SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid Stripe webhook signature")

    event_payload = _subscription_payload(event)
    event_id = event_payload.get("id")
    event_type = event_payload.get("type")
    data_object = (event_payload.get("data") or {}).get("object") or {}

    if not event_id or not event_type:
        raise HTTPException(status_code=400, detail="Invalid Stripe event")

    live_mode = (STRIPE_SECRET_KEY or "").startswith(("sk_live_", "rk_live_"))
    if event_payload.get("livemode") is not live_mode:
        raise HTTPException(status_code=400, detail="Stripe event mode mismatch")

    from api.tasks.arq import get_arq_redis

    # Fail with a retryable response if Redis is unavailable. Only record completion
    # after the DB update succeeds; a process crash must not discard Stripe retries.
    redis = await get_arq_redis()
    event_key = f"stripe:webhook:v2:{event_id}"
    lock = redis.lock(f"{event_key}:lock", timeout=300, blocking=False)
    if not await lock.acquire():
        raise HTTPException(status_code=503, detail="Stripe event is being processed")
    try:
        if await redis.get(event_key):
            logger.info("Skipping duplicate Stripe webhook event {}", event_id)
            return
        await _process_stripe_event(event_id, event_type, data_object)
        await redis.set(event_key, "done", ex=_WEBHOOK_EVENT_TTL_SECONDS)
    finally:
        await lock.release()


async def _process_stripe_event(
    event_id: str, event_type: str, data_object: dict[str, Any]
) -> None:

    logger.info("Processing Stripe webhook event {} ({})", event_id, event_type)

    client = get_stripe_client()

    if event_type == "checkout.session.completed":
        organization_id = await _resolve_organization_id_from_checkout_session(
            data_object
        )
        subscription_id = data_object.get("subscription")
        if organization_id and subscription_id:
            subscription = client.subscriptions.retrieve(subscription_id)
            await apply_subscription_from_stripe(
                organization_id,
                _subscription_payload(subscription),
            )
        else:
            logger.warning(
                "checkout.session.completed missing organization or subscription: {}",
                event_id,
            )
        return

    if event_type in {
        "customer.subscription.created",
        "customer.subscription.updated",
        "customer.subscription.deleted",
    }:
        organization_id = await _resolve_organization_id_from_subscription_event(
            data_object
        )
        if organization_id is None:
            logger.warning(
                "Stripe subscription event without organization mapping: {}",
                event_id,
            )
            return
        if event_type == "customer.subscription.deleted":
            organization = await db_client.get_organization_by_id(organization_id)
            if (
                organization is None
                or organization.stripe_subscription_id != data_object.get("id")
            ):
                return
            if organization.stripe_customer_id != data_object.get("customer"):
                raise HTTPException(
                    status_code=400,
                    detail="Stripe customer does not match organization",
                )
            await clear_subscription_for_organization(organization_id)
            return
        # Events can arrive out of order. Fetch the authoritative subscription
        # instead of restoring access from an old active/trialing snapshot.
        subscription = client.subscriptions.retrieve(data_object["id"])
        await apply_subscription_from_stripe(
            organization_id,
            _subscription_payload(subscription),
        )
        return

    if event_type in {"invoice.paid", "invoice.payment_failed"}:
        parent = data_object.get("parent") or {}
        subscription_details = parent.get("subscription_details") or {}
        subscription_id = subscription_details.get("subscription") or data_object.get(
            "subscription"
        )
        # A one-off invoice must never grant or revoke subscription access.
        if not subscription_id:
            return
        organization_id = await db_client.get_organization_id_by_stripe_customer_id(
            data_object.get("customer")
        )
        if organization_id is None:
            return
        # Retrieve current status so delayed invoice events cannot undo recovery.
        subscription = client.subscriptions.retrieve(subscription_id)
        await apply_subscription_from_stripe(
            organization_id,
            _subscription_payload(subscription),
        )


def _organization_id_from_metadata(metadata: dict[str, Any] | None) -> int | None:
    if not metadata:
        return None
    raw = metadata.get("organization_id")
    if raw is None:
        return None
    try:
        return int(raw)
    except (TypeError, ValueError):
        return None


async def initialize_organization_trial(organization_id: int) -> None:
    if not stripe_billing_enabled():
        return

    organization = await db_client.get_organization_by_id(organization_id)
    if organization is None:
        return
    if organization.subscription_status is not None:
        return

    await db_client.update_organization_subscription_fields(
        organization_id,
        subscription_plan="starter",
        subscription_status="trialing",
        trial_ends_at=datetime.now(UTC) + timedelta(days=TRIAL_DAYS),
    )
