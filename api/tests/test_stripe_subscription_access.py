"""Tests for Stripe SaaS subscription access."""

from datetime import UTC, datetime, timedelta
from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest
from fastapi import HTTPException

from api.services.billing.subscription_access import (
    assert_subscription_feature,
    get_subscription_access,
    public_plan_catalog,
    resolve_effective_plan,
)


def _organization(**overrides):
    defaults = {
        "subscription_plan": "starter",
        "subscription_status": "trialing",
        "trial_ends_at": datetime.now(UTC) + timedelta(days=7),
        "subscription_current_period_end": None,
    }
    defaults.update(overrides)
    return SimpleNamespace(**defaults)


def test_resolve_effective_plan_returns_starter_during_active_trial():
    organization = _organization()
    assert resolve_effective_plan(organization) == "starter"


def test_resolve_effective_plan_returns_free_after_expired_trial():
    organization = _organization(
        subscription_status="trialing",
        trial_ends_at=datetime.now(UTC) - timedelta(days=1),
    )
    assert resolve_effective_plan(organization) == "free"


def test_get_subscription_access_marks_expired_trial_inactive():
    organization = _organization(
        subscription_status="trialing",
        trial_ends_at=datetime.now(UTC) - timedelta(days=1),
    )
    access = get_subscription_access(organization)
    assert access.plan == "free"
    assert access.is_active is False


def test_public_plan_catalog_includes_free_plan_first():
    catalog = public_plan_catalog()

    assert [plan["id"] for plan in catalog] == ["free", "starter", "pro"]
    assert catalog[0]["price_usd"] == 0
    assert catalog[0]["limits"] == {
        "max_workflows": 1,
        "telephony_enabled": False,
        "campaigns_enabled": False,
        "max_concurrent_calls": 1,
    }


@pytest.mark.asyncio
async def test_free_plan_allows_first_agent(monkeypatch):
    organization = _organization(
        subscription_plan="free",
        subscription_status=None,
        trial_ends_at=None,
    )
    monkeypatch.setattr(
        "api.services.billing.subscription_access.stripe_billing_enabled",
        lambda: True,
    )
    monkeypatch.setattr(
        "api.services.billing.subscription_access.db_client.get_organization_by_id",
        AsyncMock(return_value=organization),
    )
    monkeypatch.setattr(
        "api.services.billing.subscription_access.db_client.get_workflow_counts",
        AsyncMock(return_value={"total": 0}),
    )

    access = await assert_subscription_feature(42, requires_workflow_slot=True)

    assert access.plan == "free"


@pytest.mark.asyncio
async def test_free_plan_rejects_second_agent(monkeypatch):
    organization = _organization(
        subscription_plan="free",
        subscription_status=None,
        trial_ends_at=None,
    )
    monkeypatch.setattr(
        "api.services.billing.subscription_access.stripe_billing_enabled",
        lambda: True,
    )
    monkeypatch.setattr(
        "api.services.billing.subscription_access.db_client.get_organization_by_id",
        AsyncMock(return_value=organization),
    )
    monkeypatch.setattr(
        "api.services.billing.subscription_access.db_client.get_workflow_counts",
        AsyncMock(return_value={"total": 1}),
    )

    with pytest.raises(HTTPException) as exc_info:
        await assert_subscription_feature(42, requires_workflow_slot=True)

    assert exc_info.value.status_code == 402
    assert exc_info.value.detail == (
        "Your Free plan allows up to 1 agent. Upgrade to add more."
    )
