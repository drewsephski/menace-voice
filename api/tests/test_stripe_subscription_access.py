"""Tests for Stripe SaaS subscription access."""

from datetime import UTC, datetime, timedelta
from types import SimpleNamespace

import pytest

from api.services.billing.subscription_access import (
    get_subscription_access,
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
