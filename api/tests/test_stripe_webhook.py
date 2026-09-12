"""Tests for Stripe webhook handling and subscription sync."""

import hashlib
import hmac
import json
import time
from datetime import UTC, datetime, timedelta
from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock

import pytest
from fastapi import HTTPException
from fastapi.testclient import TestClient

from api.app import app
from api.constants import STRIPE_PRO_PRICE_ID, STRIPE_STARTER_PRICE_ID
from api.services.billing import stripe_service as stripe_service_module
from api.services.billing.stripe_service import (
    _eligible_for_stripe_trial,
    _resolve_plan_from_subscription,
    apply_subscription_from_stripe,
    clear_subscription_for_organization,
    handle_stripe_webhook,
)


def _sign_webhook_payload(payload: str, secret: str) -> str:
    timestamp = int(time.time())
    signed_payload = f"{timestamp}.{payload}"
    signature = hmac.new(
        secret.encode("utf-8"),
        signed_payload.encode("utf-8"),
        hashlib.sha256,
    ).hexdigest()
    return f"t={timestamp},v1={signature}"


def _stripe_event(event_id: str, event_type: str, data_object: dict) -> dict:
    return {
        "id": event_id,
        "object": "event",
        "livemode": False,
        "type": event_type,
        "data": {"object": data_object},
    }


def _subscription_object(
    *,
    organization_id: int = 42,
    status: str = "active",
    price_id: str | None = None,
    subscription_id: str = "sub_123",
) -> dict:
    return {
        "id": subscription_id,
        "status": status,
        "customer": "cus_123",
        "current_period_end": int(datetime.now(UTC).timestamp()) + 3600,
        "trial_end": None,
        "metadata": {"organization_id": str(organization_id), "plan": "starter"},
        "items": {
            "data": [
                {
                    "price": {
                        "id": price_id or STRIPE_STARTER_PRICE_ID,
                    }
                }
            ]
        },
    }


@pytest.fixture
def webhook_secret(monkeypatch):
    secret = "whsec_test_secret"
    monkeypatch.setattr(stripe_service_module, "STRIPE_WEBHOOK_SECRET", secret)
    monkeypatch.setattr(stripe_service_module, "STRIPE_SECRET_KEY", "sk_test_x")
    monkeypatch.setattr(
        stripe_service_module,
        "STRIPE_STARTER_PRICE_ID",
        STRIPE_STARTER_PRICE_ID or "price_starter",
    )
    monkeypatch.setattr(
        stripe_service_module,
        "STRIPE_PRO_PRICE_ID",
        STRIPE_PRO_PRICE_ID or "price_pro",
    )
    return secret


@pytest.fixture
def mock_db(monkeypatch):
    get_org = AsyncMock(
        return_value=SimpleNamespace(
            id=42, stripe_customer_id="cus_123", stripe_subscription_id="sub_123"
        )
    )
    update_fields = AsyncMock()
    get_by_customer = AsyncMock(return_value=42)
    get_by_subscription = AsyncMock(return_value=None)
    monkeypatch.setattr(
        stripe_service_module.db_client, "get_organization_by_id", get_org
    )
    monkeypatch.setattr(
        stripe_service_module.db_client,
        "update_organization_subscription_fields",
        update_fields,
    )
    monkeypatch.setattr(
        stripe_service_module.db_client,
        "get_organization_id_by_stripe_customer_id",
        get_by_customer,
    )
    monkeypatch.setattr(
        stripe_service_module.db_client,
        "get_organization_id_by_stripe_subscription_id",
        get_by_subscription,
    )
    return SimpleNamespace(
        get_org=get_org,
        update_fields=update_fields,
        get_by_customer=get_by_customer,
        get_by_subscription=get_by_subscription,
    )


@pytest.fixture
def mock_redis(monkeypatch):
    redis = MagicMock()
    redis.get = AsyncMock(return_value=None)
    redis.set = AsyncMock(return_value=True)
    lock = MagicMock()
    lock.acquire = AsyncMock(return_value=True)
    lock.release = AsyncMock()
    redis.lock.return_value = lock
    get_arq_redis = AsyncMock(return_value=redis)
    monkeypatch.setattr(
        stripe_service_module, "get_arq_redis", get_arq_redis, raising=False
    )
    import api.tasks.arq as arq_module

    monkeypatch.setattr(arq_module, "get_arq_redis", get_arq_redis)
    return redis


def test_eligible_for_stripe_trial_false_after_local_trial():
    organization = SimpleNamespace(
        stripe_subscription_id=None,
        trial_ends_at=datetime.now(UTC) + timedelta(days=3),
        subscription_status="trialing",
    )
    assert _eligible_for_stripe_trial(organization) is False


def test_eligible_for_stripe_trial_true_for_new_org():
    organization = SimpleNamespace(
        stripe_subscription_id=None,
        trial_ends_at=None,
        subscription_status=None,
    )
    assert _eligible_for_stripe_trial(organization) is True


def test_resolve_plan_from_subscription_metadata_fallback():
    subscription = {
        "metadata": {"plan": "pro"},
        "items": {"data": [{"price": {"id": "price_unknown"}}]},
    }
    monkeypatch_price = STRIPE_PRO_PRICE_ID or "price_pro"
    with pytest.MonkeyPatch.context() as mp:
        mp.setattr(stripe_service_module, "STRIPE_PRO_PRICE_ID", monkeypatch_price)
        mp.setattr(stripe_service_module, "STRIPE_STARTER_PRICE_ID", "price_starter")
        assert _resolve_plan_from_subscription(subscription) == "pro"


@pytest.mark.asyncio
async def test_apply_subscription_ignores_unknown_organization(mock_db, monkeypatch):
    mock_db.get_org.return_value = None
    await apply_subscription_from_stripe(99, _subscription_object())
    mock_db.update_fields.assert_not_awaited()


@pytest.mark.asyncio
async def test_apply_subscription_sets_active_starter_plan(mock_db):
    await apply_subscription_from_stripe(42, _subscription_object(status="active"))
    mock_db.update_fields.assert_awaited_once()
    kwargs = mock_db.update_fields.await_args.kwargs
    assert kwargs["subscription_plan"] == "starter"
    assert kwargs["subscription_status"] == "active"
    assert kwargs["stripe_subscription_id"] == "sub_123"


@pytest.mark.asyncio
async def test_clear_subscription_clears_all_fields(mock_db):
    await clear_subscription_for_organization(42)
    mock_db.update_fields.assert_awaited_once_with(
        42,
        stripe_subscription_id=None,
        subscription_plan="free",
        subscription_status="canceled",
        subscription_current_period_end=None,
        trial_ends_at=None,
        clear_subscription=True,
    )


@pytest.mark.asyncio
async def test_webhook_subscription_deleted_clears_subscription(
    webhook_secret, mock_db, mock_redis
):
    payload = json.dumps(
        _stripe_event(
            "evt_sub_deleted",
            "customer.subscription.deleted",
            _subscription_object(status="canceled"),
        )
    )
    signature = _sign_webhook_payload(payload, webhook_secret)

    await handle_stripe_webhook(payload.encode("utf-8"), signature)

    mock_db.update_fields.assert_awaited_once()
    assert mock_db.update_fields.await_args.kwargs.get("clear_subscription") is True


@pytest.mark.asyncio
async def test_webhook_skips_duplicate_events(webhook_secret, mock_db, mock_redis):
    mock_redis.get.return_value = b"done"
    payload = json.dumps(
        _stripe_event(
            "evt_duplicate",
            "customer.subscription.updated",
            _subscription_object(),
        )
    )
    signature = _sign_webhook_payload(payload, webhook_secret)

    await handle_stripe_webhook(payload.encode("utf-8"), signature)

    mock_db.update_fields.assert_not_awaited()


@pytest.mark.asyncio
async def test_webhook_checkout_completed_uses_client_reference_id(
    webhook_secret, mock_db, mock_redis, monkeypatch
):
    subscription = _subscription_object()
    retrieve = MagicMock(return_value=subscription)
    client = MagicMock()
    client.subscriptions.retrieve = retrieve
    monkeypatch.setattr(stripe_service_module, "get_stripe_client", lambda: client)

    payload = json.dumps(
        _stripe_event(
            "evt_checkout",
            "checkout.session.completed",
            {
                "metadata": {},
                "client_reference_id": "42",
                "subscription": "sub_123",
            },
        )
    )
    signature = _sign_webhook_payload(payload, webhook_secret)

    await handle_stripe_webhook(payload.encode("utf-8"), signature)

    retrieve.assert_called_once_with("sub_123")
    mock_db.update_fields.assert_awaited_once()


@pytest.mark.asyncio
async def test_webhook_invoice_paid_restores_subscription(
    webhook_secret, mock_db, mock_redis, monkeypatch
):
    subscription = _subscription_object(status="active")
    retrieve = MagicMock(return_value=subscription)
    client = MagicMock()
    client.subscriptions.retrieve = retrieve
    monkeypatch.setattr(stripe_service_module, "get_stripe_client", lambda: client)

    payload = json.dumps(
        _stripe_event(
            "evt_invoice_paid",
            "invoice.paid",
            {
                "customer": "cus_123",
                "subscription": "sub_123",
            },
        )
    )
    signature = _sign_webhook_payload(payload, webhook_secret)

    await handle_stripe_webhook(payload.encode("utf-8"), signature)

    retrieve.assert_called_once_with("sub_123")
    mock_db.update_fields.assert_awaited_once()


def test_webhook_endpoint_rejects_invalid_signature(webhook_secret, monkeypatch):
    monkeypatch.setattr(
        stripe_service_module,
        "stripe_webhook_configured",
        lambda: True,
    )
    client = TestClient(app)
    response = client.post(
        "/api/v1/webhooks/stripe",
        content=b"{}",
        headers={"Stripe-Signature": "t=0,v1=invalid"},
    )
    assert response.status_code == 400


@pytest.mark.asyncio
async def test_failed_webhook_can_be_retried(webhook_secret, mock_db, mock_redis):
    mock_db.update_fields.side_effect = [RuntimeError("database unavailable"), None]
    payload = json.dumps(
        _stripe_event(
            "evt_retry",
            "customer.subscription.deleted",
            _subscription_object(status="canceled"),
        )
    )
    signature = _sign_webhook_payload(payload, webhook_secret)
    with pytest.raises(RuntimeError, match="database unavailable"):
        await handle_stripe_webhook(payload.encode(), signature)
    mock_redis.set.assert_not_awaited()
    mock_redis.lock.return_value.release.assert_awaited_once()
    await handle_stripe_webhook(payload.encode(), signature)
    assert mock_db.update_fields.await_count == 2
    mock_redis.set.assert_awaited_once()


@pytest.mark.asyncio
async def test_concurrent_webhook_requests_retry(webhook_secret, mock_db, mock_redis):
    mock_redis.lock.return_value.acquire.return_value = False
    payload = json.dumps(
        _stripe_event(
            "evt_busy",
            "customer.subscription.deleted",
            _subscription_object(),
        )
    )
    with pytest.raises(HTTPException) as exc:
        await handle_stripe_webhook(
            payload.encode(), _sign_webhook_payload(payload, webhook_secret)
        )
    assert exc.value.status_code == 503
    mock_db.update_fields.assert_not_awaited()
    mock_redis.set.assert_not_awaited()


@pytest.mark.asyncio
async def test_webhook_rejects_wrong_mode(webhook_secret, mock_db, mock_redis):
    event = _stripe_event(
        "evt_live", "customer.subscription.deleted", _subscription_object()
    )
    event["livemode"] = True
    payload = json.dumps(event)
    with pytest.raises(HTTPException) as exc:
        await handle_stripe_webhook(
            payload.encode(), _sign_webhook_payload(payload, webhook_secret)
        )
    assert exc.value.status_code == 400
    mock_db.update_fields.assert_not_awaited()
    mock_redis.lock.assert_not_called()


@pytest.mark.asyncio
async def test_webhook_redis_outage_does_not_apply_event(
    webhook_secret, mock_db, mock_redis
):
    mock_redis.lock.return_value.acquire.side_effect = ConnectionError(
        "redis unavailable"
    )
    payload = json.dumps(
        _stripe_event(
            "evt_outage", "customer.subscription.deleted", _subscription_object()
        )
    )
    with pytest.raises(ConnectionError):
        await handle_stripe_webhook(
            payload.encode(), _sign_webhook_payload(payload, webhook_secret)
        )
    mock_db.update_fields.assert_not_awaited()


@pytest.mark.asyncio
async def test_subscription_uses_item_period_end(mock_db):
    subscription = _subscription_object()
    period_end = subscription.pop("current_period_end")
    subscription["items"]["data"][0]["current_period_end"] = period_end
    await apply_subscription_from_stripe(42, subscription)
    assert mock_db.update_fields.await_args.kwargs[
        "subscription_current_period_end"
    ] == datetime.fromtimestamp(period_end, tz=UTC)


@pytest.mark.asyncio
@pytest.mark.parametrize("event_type", ["invoice.paid", "invoice.payment_failed"])
async def test_modern_invoice_uses_current_subscription(
    webhook_secret, mock_db, mock_redis, monkeypatch, event_type
):
    client = MagicMock()
    client.subscriptions.retrieve.return_value = _subscription_object(status="active")
    monkeypatch.setattr(stripe_service_module, "get_stripe_client", lambda: client)
    payload = json.dumps(
        _stripe_event(
            "evt_modern_invoice",
            event_type,
            {
                "customer": "cus_123",
                "parent": {
                    "type": "subscription_details",
                    "subscription_details": {"subscription": "sub_123"},
                },
            },
        )
    )
    await handle_stripe_webhook(
        payload.encode(), _sign_webhook_payload(payload, webhook_secret)
    )
    client.subscriptions.retrieve.assert_called_once_with("sub_123")
    assert mock_db.update_fields.await_args.kwargs["subscription_status"] == "active"


@pytest.mark.asyncio
@pytest.mark.parametrize("event_type", ["invoice.paid", "invoice.payment_failed"])
async def test_one_off_invoice_does_not_change_access(
    webhook_secret, mock_db, mock_redis, event_type
):
    payload = json.dumps(
        _stripe_event(
            "evt_one_off", event_type, {"customer": "cus_123", "parent": None}
        )
    )
    await handle_stripe_webhook(
        payload.encode(), _sign_webhook_payload(payload, webhook_secret)
    )
    mock_db.update_fields.assert_not_awaited()


@pytest.mark.asyncio
async def test_existing_subscription_cannot_start_second_checkout(monkeypatch):
    customer = AsyncMock()
    monkeypatch.setattr(stripe_service_module, "ensure_stripe_customer", customer)
    with pytest.raises(HTTPException) as exc:
        await stripe_service_module.create_checkout_session(
            SimpleNamespace(stripe_subscription_id="sub_existing"), plan="pro"
        )
    assert exc.value.status_code == 409
    customer.assert_not_awaited()


def test_billing_requires_webhook_secret(webhook_secret, monkeypatch):
    monkeypatch.setattr(stripe_service_module, "STRIPE_WEBHOOK_SECRET", "")
    assert stripe_service_module.stripe_billing_enabled() is False


@pytest.mark.asyncio
async def test_old_subscription_update_uses_current_state(
    webhook_secret, mock_db, mock_redis, monkeypatch
):
    client = MagicMock()
    client.subscriptions.retrieve.return_value = _subscription_object(status="canceled")
    monkeypatch.setattr(stripe_service_module, "get_stripe_client", lambda: client)
    payload = json.dumps(
        _stripe_event(
            "evt_delayed",
            "customer.subscription.updated",
            _subscription_object(status="active"),
        )
    )
    await handle_stripe_webhook(
        payload.encode(), _sign_webhook_payload(payload, webhook_secret)
    )
    assert mock_db.update_fields.await_args.kwargs["subscription_plan"] == "free"
    assert mock_db.update_fields.await_args.kwargs["subscription_status"] == "canceled"


@pytest.mark.asyncio
async def test_old_subscription_deleted_does_not_cancel_replacement(
    webhook_secret, mock_db, mock_redis
):
    mock_db.get_org.return_value.stripe_subscription_id = "sub_replacement"
    payload = json.dumps(
        _stripe_event(
            "evt_old_deleted",
            "customer.subscription.deleted",
            _subscription_object(status="canceled"),
        )
    )
    await handle_stripe_webhook(
        payload.encode(), _sign_webhook_payload(payload, webhook_secret)
    )
    mock_db.update_fields.assert_not_awaited()


@pytest.mark.asyncio
async def test_subscription_metadata_cannot_override_customer_ownership(mock_db):
    subscription = _subscription_object()
    subscription["customer"] = "cus_another_organization"
    with pytest.raises(HTTPException) as exc:
        await apply_subscription_from_stripe(42, subscription)
    assert exc.value.status_code == 400
    mock_db.update_fields.assert_not_awaited()
