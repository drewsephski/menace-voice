"""Callback authentication must precede every state/event/provider mutation."""

import base64
import json
from types import SimpleNamespace
from unittest.mock import AsyncMock
from urllib.parse import urlencode

import pytest
from fastapi import HTTPException
from starlette.requests import Request
from twilio.request_validator import RequestValidator

from api.routes import telephony as twilio_routes
from api.services.telephony.providers.cloudonix import routes as cloudonix_routes
from api.services.telephony.providers.cloudonix.provider import CloudonixProvider
from api.services.telephony.providers.telnyx import routes as telnyx_routes
from api.services.telephony.providers.telnyx.provider import TelnyxProvider
from api.services.telephony.providers.twilio.provider import TwilioProvider
from api.services.telephony.transfer_event_protocol import TransferContext

SECRET = "local-test-webhook-secret-32-characters"


def request_for(path, data, headers=None, form=False):
    body = (urlencode(data) if form else json.dumps(data, indent=2)).encode()
    content_type = "application/x-www-form-urlencoded" if form else "application/json"
    raw_headers = {"content-type": content_type, **(headers or {})}

    async def receive():
        return {"type": "http.request", "body": body, "more_body": False}

    return Request(
        {
            "type": "http",
            "method": "POST",
            "scheme": "https",
            "server": ("example.test", 443),
            "path": path,
            "query_string": b"",
            "headers": [(k.encode(), v.encode()) for k, v in raw_headers.items()],
        },
        receive,
    )


def mock_run(monkeypatch, routes, provider, mode):
    run = SimpleNamespace(
        id=4,
        workflow_id=2,
        mode=mode,
        initial_context={"telephony_configuration_id": 9},
        gathered_context={"call_id": "original-call"},
    )
    monkeypatch.setattr(
        routes.db_client, "get_workflow_run_by_id", AsyncMock(return_value=run)
    )
    monkeypatch.setattr(
        routes.db_client, "get_workflow_run_by_call_id", AsyncMock(return_value=run)
    )
    monkeypatch.setattr(
        routes.db_client,
        "get_workflow_by_id",
        AsyncMock(return_value=SimpleNamespace(organization_id=7)),
    )
    monkeypatch.setattr(
        routes, "get_telephony_provider_for_run", AsyncMock(return_value=provider)
    )
    return run


def mock_transfer(monkeypatch, routes):
    context = TransferContext(
        transfer_id="transfer-1",
        call_sid="destination-call",
        target_number="+15551230001",
        original_call_sid="original-call",
        tool_uuid="tool-1",
        conference_name="conference-1",
        initiated_at=123.0,
        workflow_run_id=4,
    )
    manager = SimpleNamespace(
        get_transfer_context=AsyncMock(return_value=context),
        publish_transfer_event=AsyncMock(),
        store_transfer_context=AsyncMock(),
        remove_transfer_context=AsyncMock(),
    )
    monkeypatch.setattr(
        routes, "get_call_transfer_manager", AsyncMock(return_value=manager)
    )
    return context, manager


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "headers,valid",
    [
        ({}, False),
        ({"x-cx-apikey": "wrong-key"}, False),
        ({"x-cx-apikey": "domain-api-token"}, False),
        ({"authorization": "Bearer wrong-key"}, False),
        ({"authorization": f"Bearer {SECRET}"}, True),
        ({"authorization": f"bearer {SECRET}"}, True),
    ],
)
async def test_cloudonix_verifier_is_fail_closed(headers, valid):
    provider = CloudonixProvider(
        {"bearer_token": "domain-api-token", "webhook_secret": SECRET}
    )
    assert await provider.verify_inbound_signature("", {}, headers) is valid
    provider.webhook_secret = None
    assert await provider.verify_inbound_signature("", {}, headers) is False


@pytest.mark.asyncio
@pytest.mark.parametrize("kind", ["status", "cdr", "transfer"])
@pytest.mark.parametrize(
    "failure", ["missing", "wrong", "provider", "domain", "call", "valid"]
)
async def test_cloudonix_routes_authenticate_and_bind_call(monkeypatch, kind, failure):
    provider = CloudonixProvider({"domain_id": "acme", "webhook_secret": SECRET})
    run = mock_run(monkeypatch, cloudonix_routes, provider, "cloudonix")
    _, manager = mock_transfer(monkeypatch, cloudonix_routes)
    process = AsyncMock()
    monkeypatch.setattr(cloudonix_routes, "_process_status_update", process)
    data = {
        "domain": "acme.cloudonix.net",
        "token": "original-call",
        "status": "completed",
    }
    if kind == "cdr":
        data.update(session={"token": "original-call"}, disposition="ANSWER")
    elif kind == "transfer":
        data.update(Session="destination-call", StatusCallbackEvent="participant-join")
    headers = {"authorization": f"Bearer {SECRET}"}
    if failure == "missing":
        headers = {}
    elif failure == "wrong":
        headers["authorization"] = "Bearer wrong"
    elif failure == "provider":
        run.mode = "twilio"
    elif failure == "domain":
        data["domain"] = "other.cloudonix.net"
    elif failure == "call":
        if kind == "cdr":
            data["session"] = {"token": "other-call"}
        elif kind == "transfer":
            data["Session"] = "other-call"
        else:
            data["token"] = "other-call"
    request = request_for("/callback", data, headers)
    handler = {
        "status": lambda: cloudonix_routes.handle_cloudonix_status_callback(4, request),
        "cdr": lambda: cloudonix_routes.handle_cloudonix_cdr(request),
        "transfer": lambda: cloudonix_routes.handle_cloudonix_transfer_result(
            "transfer-1", request
        ),
    }[kind]
    if failure == "valid":
        assert (await handler())["status"] in ("success", "completed")
        assert process.await_count + manager.publish_transfer_event.await_count == 1
    else:
        with pytest.raises(HTTPException) as exc:
            await handler()
        assert exc.value.status_code in (401, 403)
        process.assert_not_awaited()
        manager.publish_transfer_event.assert_not_awaited()
        manager.store_transfer_context.assert_not_awaited()


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "failure",
    [
        "missing",
        "wrong",
        "provider",
        "account",
        "call",
        "unbound_wrong_destination",
        "unbound",
        "valid",
    ],
)
async def test_twilio_transfer_checks_actual_signature_before_publishing(
    monkeypatch, failure
):
    provider = TwilioProvider({"account_sid": "AC-account", "auth_token": "test-auth"})
    run = mock_run(monkeypatch, twilio_routes, provider, "twilio")
    context, manager = mock_transfer(monkeypatch, twilio_routes)
    path = "/api/v1/telephony/transfer-result/transfer-1"
    data = {
        "AccountSid": "AC-account",
        "CallSid": "destination-call",
        "CallStatus": "answered",
    }
    if failure == "account":
        data["AccountSid"] = "AC-other"
    elif failure == "call":
        data["CallSid"] = "other-call"
    elif failure == "provider":
        run.mode = "cloudonix"
    elif failure in ("unbound", "unbound_wrong_destination"):
        context.call_sid = None
        data["To"] = context.target_number if failure == "unbound" else "+15551230009"
    signature = RequestValidator("test-auth").compute_signature(
        f"https://example.test{path}", data
    )
    headers = {"x-twilio-signature": signature}
    if failure == "missing":
        headers = {}
    elif failure == "wrong":
        headers["x-twilio-signature"] = "invalid"
    request = request_for(path, data, headers, form=True)
    if failure in ("valid", "unbound"):
        assert (
            await twilio_routes.complete_transfer_function_call("transfer-1", request)
        )["status"] == "completed"
        manager.publish_transfer_event.assert_awaited_once()
    else:
        with pytest.raises(HTTPException) as exc:
            await twilio_routes.complete_transfer_function_call("transfer-1", request)
        assert exc.value.status_code in (401, 403, 409)
        manager.publish_transfer_event.assert_not_awaited()


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "failure", ["signature", "provider", "connection", "call", "valid"]
)
@pytest.mark.parametrize("event", ["call.answered", "call.hangup", "call.initiated"])
async def test_telnyx_transfer_checks_raw_body_and_signed_identity(
    monkeypatch, failure, event
):
    provider = TelnyxProvider({"connection_id": "connection-1"})
    verify = AsyncMock(return_value=failure != "signature")
    monkeypatch.setattr(provider, "verify_inbound_signature", verify)
    run = mock_run(monkeypatch, telnyx_routes, provider, "telnyx")
    context, manager = mock_transfer(monkeypatch, telnyx_routes)
    seed, hangup = AsyncMock(return_value="conference-id"), AsyncMock()
    monkeypatch.setattr(telnyx_routes, "_seed_destination_conference", seed)
    monkeypatch.setattr(telnyx_routes, "_hangup_caller_leg", hangup)
    if event == "call.hangup":
        context.conference_id = "conference-id"
    data = {
        "data": {
            "event_type": event,
            "payload": {
                "call_control_id": "new-routed-destination-id",
                "connection_id": "connection-1",
                "client_state": base64.b64encode(b"transfer-1").decode(),
            },
        }
    }
    if failure == "provider":
        run.mode = "twilio"
    elif failure == "connection":
        data["data"]["payload"]["connection_id"] = "other-connection"
    elif failure == "call":
        data["data"]["payload"]["client_state"] = base64.b64encode(
            b"other-transfer"
        ).decode()
    request = request_for("/callback", data)
    if failure == "valid":
        await telnyx_routes.handle_telnyx_transfer_result("transfer-1", request)
        # Whitespace is preserved; never JSON reserialize for signature checks.
        assert verify.await_args.args[3] == json.dumps(data, indent=2)
        if event == "call.answered":
            seed.assert_awaited_once()
        elif event == "call.hangup":
            hangup.assert_awaited_once()
    else:
        with pytest.raises(HTTPException) as exc:
            await telnyx_routes.handle_telnyx_transfer_result("transfer-1", request)
        assert exc.value.status_code in (401, 403)
        seed.assert_not_awaited()
        hangup.assert_not_awaited()
        manager.publish_transfer_event.assert_not_awaited()
        manager.store_transfer_context.assert_not_awaited()
        manager.remove_transfer_context.assert_not_awaited()


@pytest.mark.asyncio
@pytest.mark.parametrize("failure", ["missing", "tampered", "valid"])
async def test_telnyx_transfer_verifies_real_ed25519_signature(monkeypatch, failure):
    from api.tests.telephony.telnyx.test_provider import _signed_headers

    data = {
        "data": {
            "event_type": "call.answered",
            "payload": {
                "connection_id": "connection-1",
                "call_control_id": "destination-call",
                "client_state": base64.b64encode(b"transfer-1").decode(),
            },
        }
    }
    public_key, headers = _signed_headers(json.dumps(data, indent=2))
    provider = TelnyxProvider(
        {"connection_id": "connection-1", "webhook_public_key": public_key}
    )
    mock_run(monkeypatch, telnyx_routes, provider, "telnyx")
    _, manager = mock_transfer(monkeypatch, telnyx_routes)
    seed = AsyncMock(return_value="conference-id")
    monkeypatch.setattr(telnyx_routes, "_seed_destination_conference", seed)
    if failure == "missing":
        headers = {}
    elif failure == "tampered":
        data["data"]["payload"]["call_control_id"] = "modified-id"
    request = request_for("/callback", data, headers)
    if failure == "valid":
        await telnyx_routes.handle_telnyx_transfer_result("transfer-1", request)
        seed.assert_awaited_once()
        manager.publish_transfer_event.assert_awaited_once()
    else:
        with pytest.raises(HTTPException) as exc:
            await telnyx_routes.handle_telnyx_transfer_result("transfer-1", request)
        assert exc.value.status_code == 401
        seed.assert_not_awaited()
        manager.publish_transfer_event.assert_not_awaited()


@pytest.mark.asyncio
async def test_telnyx_dial_seeds_transfer_identity_in_every_callback(monkeypatch):
    from unittest.mock import MagicMock

    from api.services.telephony.providers.telnyx import provider as module

    provider = TelnyxProvider(
        {
            "api_key": "test-api-key",
            "connection_id": "connection-1",
            "from_numbers": ["+15551230001"],
        }
    )
    response = MagicMock(status=200)
    response.text = AsyncMock(
        return_value=json.dumps({"data": {"call_control_id": "destination-call"}})
    )
    response.__aenter__ = AsyncMock(return_value=response)
    response.__aexit__ = AsyncMock(return_value=None)
    session = MagicMock()
    session.post.return_value = response
    session.__aenter__ = AsyncMock(return_value=session)
    session.__aexit__ = AsyncMock(return_value=None)
    monkeypatch.setattr(
        module.aiohttp, "ClientSession", MagicMock(return_value=session)
    )
    monkeypatch.setattr(
        module,
        "get_backend_endpoints",
        AsyncMock(return_value=("https://example.test", "wss://example.test")),
    )
    await provider.transfer_call("+15551230002", "transfer-1", "conference-1")
    assert (
        session.post.call_args.kwargs["json"]["client_state"]
        == base64.b64encode(b"transfer-1").decode()
    )
