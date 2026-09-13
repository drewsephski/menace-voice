"""Native Cloudonix callback credential sync preserves domain configuration."""

from unittest.mock import AsyncMock, MagicMock

import pytest
from fastapi import HTTPException

from api.services.telephony.providers import cloudonix
from api.services.telephony.providers.cloudonix.provider import CloudonixProvider
from api.services.telephony.providers.cloudonix.setup import resolve_setup_checklist
from api.services.telephony.registry import ConfigurationSetupState

SECRET = "configured-local-test-webhook-secret"


def response_context(status, data):
    response = MagicMock(status=status)
    response.json = AsyncMock(return_value=data)
    context = MagicMock()
    context.__aenter__ = AsyncMock(return_value=response)
    context.__aexit__ = AsyncMock(return_value=None)
    return context


def setup_session(monkeypatch, profile, read_status=200, write_status=200):
    session = MagicMock()
    session.get.return_value = response_context(read_status, {"profile": profile})
    session.put.return_value = response_context(write_status, {})
    session.__aenter__ = AsyncMock(return_value=session)
    session.__aexit__ = AsyncMock(return_value=None)
    monkeypatch.setattr(
        cloudonix.aiohttp, "ClientSession", MagicMock(return_value=session)
    )
    return session


def credentials():
    return {
        "domain_id": "acme.cloudonix.net",
        "bearer_token": "domain-api-token",
        "webhook_secret": SECRET,
    }


@pytest.mark.asyncio
async def test_sync_preserves_domain_profile_and_does_not_use_api_token(monkeypatch):
    profile = {
        "cdr-endpoint": "https://example.test/cdr",
        "custom-setting": {"enabled": True},
    }
    session = setup_session(monkeypatch, profile)
    assert await cloudonix._sync_webhook_secret(credentials()) == credentials()
    assert session.put.call_args.kwargs["json"] == {
        "profile": {**profile, "authorization-api-key": SECRET}
    }
    assert profile.get("authorization-api-key") is None


@pytest.mark.asyncio
async def test_sync_reuses_existing_matching_secret_without_write(monkeypatch):
    session = setup_session(monkeypatch, {"authorization-api-key": SECRET})
    await cloudonix._sync_webhook_secret(credentials())
    session.put.assert_not_called()


@pytest.mark.asyncio
async def test_sync_refuses_to_replace_unknown_shared_secret(monkeypatch):
    session = setup_session(
        monkeypatch, {"authorization-api-key": "another-integration-secret"}
    )
    with pytest.raises(HTTPException) as exc:
        await cloudonix._sync_webhook_secret(credentials())
    assert exc.value.status_code == 409
    session.put.assert_not_called()


@pytest.mark.asyncio
async def test_sync_allows_explicit_rotation_of_our_existing_secret(monkeypatch):
    session = setup_session(
        monkeypatch, {"authorization-api-key": "previous-managed-secret"}
    )
    await cloudonix._sync_webhook_secret(
        credentials(), {"webhook_secret": "previous-managed-secret"}
    )
    session.put.assert_called_once()


@pytest.mark.asyncio
@pytest.mark.parametrize("read_status,write_status", [(500, 200), (200, 500)])
async def test_sync_errors_do_not_report_success(
    monkeypatch, read_status, write_status
):
    setup_session(monkeypatch, {}, read_status, write_status)
    with pytest.raises(HTTPException) as exc:
        await cloudonix._sync_webhook_secret(credentials())
    assert exc.value.status_code == 502


@pytest.mark.asyncio
async def test_legacy_config_cannot_dial_before_configuring_callbacks(monkeypatch):
    provider = CloudonixProvider(
        {
            "domain_id": "acme",
            "bearer_token": "api-token",
            "from_numbers": ["+15551230001"],
        }
    )
    session_factory = MagicMock()
    monkeypatch.setattr(cloudonix.aiohttp, "ClientSession", session_factory)
    with pytest.raises(ValueError, match="Webhook Secret"):
        await provider.initiate_call("+15551230002", "https://example.test")
    with pytest.raises(ValueError, match="Webhook Secret"):
        await provider.transfer_call("+15551230002", "transfer", "conference")
    session_factory.assert_not_called()


def test_legacy_readiness_explains_authentication_requirement():
    checklist = resolve_setup_checklist(
        {"domain_id": "acme", "bearer_token": "api-token"},
        ConfigurationSetupState(
            active_phone_number_count=1, inbound_routed_phone_number_count=0
        ),
    )
    assert not checklist.ready_for_outbound
    assert "Webhook Secret" in checklist.outbound_blocked_reason


def test_webhook_secret_is_masked_and_restored_on_configuration_edit():
    from api.routes.organization import _credentials_for_display, preserve_masked_fields
    from api.services.telephony.providers.cloudonix.config import (
        CloudonixConfigurationRequest,
    )

    stored = credentials()
    displayed = _credentials_for_display("cloudonix", stored)
    assert displayed["webhook_secret"] != SECRET
    assert SECRET not in str(displayed)
    incoming = CloudonixConfigurationRequest.model_validate(displayed).model_dump()
    preserve_masked_fields("cloudonix", incoming, stored)
    assert incoming["webhook_secret"] == SECRET
    assert stored["webhook_secret"] == SECRET


@pytest.mark.asyncio
async def test_managed_provisioning_reuses_secret_after_local_persist_failure(
    monkeypatch,
):
    from types import SimpleNamespace

    from api.services.telephony.providers.cloudonix import provisioning

    mps_result = {
        "domain_name": "managed-domain",
        "domain_uuid": "domain-uuid",
        "provisioning_id": "provisioning-id",
        "bearer_token": "private-domain-api-token",
    }
    monkeypatch.setattr(
        provisioning.mps_service_key_client,
        "ensure_cloudonix_domain",
        AsyncMock(return_value=mps_result),
    )
    monkeypatch.setattr(
        provisioning.db_client,
        "list_telephony_configurations",
        AsyncMock(return_value=[]),
    )
    preprocess = AsyncMock(side_effect=lambda value: value)
    monkeypatch.setattr(provisioning, "_preprocess_credentials_on_save", preprocess)
    monkeypatch.setattr(
        provisioning.db_client,
        "create_telephony_configuration",
        AsyncMock(
            side_effect=[RuntimeError("database unavailable"), SimpleNamespace(id=1)]
        ),
    )
    with pytest.raises(RuntimeError):
        await provisioning.ensure_managed_cloudonix_configuration(
            7, mps_organization_id=7, created_by="test"
        )
    await provisioning.ensure_managed_cloudonix_configuration(
        7, mps_organization_id=7, created_by="test"
    )
    first = preprocess.await_args_list[0].args[0]["webhook_secret"]
    retry = preprocess.await_args_list[1].args[0]["webhook_secret"]
    assert first == retry
    assert first != mps_result["bearer_token"]


@pytest.mark.asyncio
@pytest.mark.parametrize("same_domain", [True, False])
async def test_legacy_configuration_edit_preserves_secret_only_for_same_domain(
    monkeypatch, same_domain
):
    incoming = {"domain_id": "acme.cloudonix.net", "webhook_secret": None}
    stored = {
        **credentials(),
        "domain_id": "acme.cloudonix.net" if same_domain else "other.cloudonix.net",
    }
    passthrough = lambda value: value
    monkeypatch.setattr(
        cloudonix, "_fetch_domain_uuid", AsyncMock(side_effect=passthrough)
    )
    monkeypatch.setattr(
        cloudonix, "_ensure_application_name", AsyncMock(side_effect=passthrough)
    )
    sync = AsyncMock(side_effect=lambda value, existing: value)
    monkeypatch.setattr(cloudonix, "_sync_webhook_secret", sync)
    result = await cloudonix._preprocess_credentials_on_save(incoming, stored)
    assert result["webhook_secret"] == (SECRET if same_domain else None)


@pytest.mark.asyncio
@pytest.mark.parametrize("entrypoint", ["preprocess", "sync"])
async def test_equal_api_and_webhook_secrets_are_rejected_before_any_provider_io(
    monkeypatch, entrypoint
):
    session_factory = MagicMock(side_effect=AssertionError("No HTTP allowed"))
    monkeypatch.setattr(cloudonix.aiohttp, "ClientSession", session_factory)
    supplied = {**credentials(), "bearer_token": SECRET}
    operation = (
        cloudonix._preprocess_credentials_on_save
        if entrypoint == "preprocess"
        else cloudonix._sync_webhook_secret
    )
    with pytest.raises(HTTPException) as exc:
        await operation(supplied)
    assert exc.value.status_code == 422
    assert "must differ" in exc.value.detail
    assert SECRET not in exc.value.detail
    session_factory.assert_not_called()


@pytest.mark.asyncio
async def test_api_token_change_cannot_match_omitted_existing_webhook_secret(
    monkeypatch,
):
    session_factory = MagicMock(side_effect=AssertionError("No HTTP allowed"))
    monkeypatch.setattr(cloudonix.aiohttp, "ClientSession", session_factory)
    with pytest.raises(HTTPException) as exc:
        await cloudonix._preprocess_credentials_on_save(
            {**credentials(), "bearer_token": SECRET, "webhook_secret": None},
            credentials(),
        )
    assert exc.value.status_code == 422
    session_factory.assert_not_called()


@pytest.mark.asyncio
async def test_masked_secret_collision_does_not_reject_distinct_credentials(
    monkeypatch,
):
    from api.routes.organization import _credentials_for_display, preserve_masked_fields
    from api.services.telephony.providers.cloudonix.config import (
        CloudonixConfigurationRequest,
    )

    stored = {
        **credentials(),
        "bearer_token": "a" * 32 + "tail",
        "webhook_secret": "b" * 32 + "tail",
    }
    displayed = _credentials_for_display("cloudonix", stored)
    assert displayed["bearer_token"] == displayed["webhook_secret"]
    incoming = CloudonixConfigurationRequest.model_validate(displayed).model_dump()
    preserve_masked_fields("cloudonix", incoming, stored)
    read = AsyncMock(side_effect=lambda value: value)
    monkeypatch.setattr(cloudonix, "_fetch_domain_uuid", read)
    monkeypatch.setattr(
        cloudonix,
        "_ensure_application_name",
        AsyncMock(side_effect=lambda value: value),
    )
    monkeypatch.setattr(
        cloudonix,
        "_sync_webhook_secret",
        AsyncMock(side_effect=lambda value, existing: value),
    )
    result = await cloudonix._preprocess_credentials_on_save(incoming, stored)
    assert result["bearer_token"] == stored["bearer_token"]
    assert result["webhook_secret"] == stored["webhook_secret"]
    read.assert_awaited_once()


@pytest.mark.asyncio
async def test_stored_equal_credentials_cannot_authenticate_or_start_calls(monkeypatch):
    supplied = {
        **credentials(),
        "bearer_token": SECRET,
        "from_numbers": ["+15551230001"],
    }
    provider = CloudonixProvider(supplied)
    assert not await provider.verify_inbound_signature(
        "", {}, {"authorization": f"Bearer {SECRET}"}
    )
    session_factory = MagicMock(side_effect=AssertionError("No HTTP allowed"))
    monkeypatch.setattr(cloudonix.aiohttp, "ClientSession", session_factory)
    with pytest.raises(ValueError, match="Webhook Secret"):
        await provider.initiate_call("+15551230002", "https://example.test")
    with pytest.raises(ValueError, match="Webhook Secret"):
        await provider.transfer_call("+15551230002", "transfer", "conference")
    session_factory.assert_not_called()
    checklist = resolve_setup_checklist(
        supplied,
        ConfigurationSetupState(
            active_phone_number_count=1, inbound_routed_phone_number_count=0
        ),
    )
    assert not checklist.ready_for_outbound
