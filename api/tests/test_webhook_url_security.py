import ipaddress
import ssl
from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock

import httpcore
import httpx
import pytest
from pydantic import ValidationError

from api.services.workflow.dto import WebhookNodeData
from api.tasks import webhook_delivery
from api.utils import webhook_security


@pytest.fixture(autouse=True)
def hosted(monkeypatch):
    monkeypatch.setattr(webhook_security, "DEPLOYMENT_MODE", "saas")
    monkeypatch.setattr(webhook_delivery, "DEPLOYMENT_MODE", "saas")


@pytest.mark.parametrize(
    "url",
    [
        "file:///etc/passwd",
        "ftp://example.com/hook",
        "http://localhost./hook",
        "http://127.0.0.1/hook",
        "http://10.0.0.1/hook",
        "http://169.254.169.254/latest/meta-data",
        "http://100.64.0.1/hook",
        "http://[::ffff:127.0.0.1]/hook",
        "http://[64:ff9b::a9fe:a9fe]/hook",
        "http://[2002:7f00:0001::]/hook",
        "https://user:password@example.com/hook",
    ],
)
def test_configuration_rejects_unsafe_literal_destinations(url):
    with pytest.raises(ValidationError):
        WebhookNodeData(name="Webhook", endpoint_url=url)


@pytest.mark.asyncio
async def test_dns_answer_is_pinned_with_original_host_and_tls_identity(monkeypatch):
    resolve = MagicMock(return_value=[ipaddress.ip_address("8.8.8.8")])
    monkeypatch.setattr(webhook_security, "_resolve_hostname_ips", resolve)
    urls, headers, extensions = await webhook_security.prepare_webhook_request(
        "https://hooks.example.com:8443/a%2Fb?token=secret",
        {"hOsT": "internal.example.com", "X-Custom": "value"},
    )
    assert [str(url) for url in urls] == ["https://8.8.8.8:8443/a%2Fb?token=secret"]
    assert headers == {"Host": "hooks.example.com:8443", "X-Custom": "value"}
    assert extensions == {"sni_hostname": "hooks.example.com"}
    resolve.assert_called_once_with("hooks.example.com", 8443)


@pytest.mark.asyncio
async def test_http_transport_connects_to_pinned_ip_and_verifies_original_certificate(
    monkeypatch,
):
    from httpcore._backends.auto import AutoBackend

    monkeypatch.setattr(
        webhook_security,
        "_resolve_hostname_ips",
        lambda *_: [ipaddress.ip_address("8.8.8.8")],
    )
    urls, headers, extensions = await webhook_security.prepare_webhook_request(
        "https://hooks.example.com/hook", {}
    )
    stream = MagicMock()
    stream.read = AsyncMock(
        return_value=b"HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n"
    )
    stream.write = AsyncMock()
    stream.aclose = AsyncMock()
    stream.start_tls = AsyncMock(return_value=stream)
    connect = AsyncMock(return_value=stream)
    monkeypatch.setattr(AutoBackend, "connect_tcp", connect)
    async with httpx.AsyncClient(trust_env=False, follow_redirects=False) as client:
        response = await client.post(urls[0], headers=headers, extensions=extensions)
    assert response.status_code == 200
    assert connect.call_args.kwargs["host"] == "8.8.8.8"
    tls = stream.start_tls.call_args.kwargs
    assert tls["server_hostname"] == "hooks.example.com"
    assert tls["ssl_context"].check_hostname
    assert tls["ssl_context"].verify_mode == ssl.CERT_REQUIRED


@pytest.mark.asyncio
async def test_mixed_public_private_dns_answers_are_rejected(monkeypatch):
    monkeypatch.setattr(
        webhook_security,
        "_resolve_hostname_ips",
        lambda *_: [ipaddress.ip_address("8.8.8.8"), ipaddress.ip_address("10.0.0.1")],
    )
    with pytest.raises(webhook_security.UnsafeWebhookURL, match="public IP"):
        await webhook_security.prepare_webhook_request("https://hooks.example.com", {})


@pytest.mark.asyncio
async def test_oss_keeps_private_endpoints_and_custom_host(monkeypatch):
    monkeypatch.setattr(webhook_security, "DEPLOYMENT_MODE", "oss")
    resolve = MagicMock()
    monkeypatch.setattr(webhook_security, "_resolve_hostname_ips", resolve)
    urls, headers, extensions = await webhook_security.prepare_webhook_request(
        "http://127.0.0.1:8080/hook", {"Host": "local-service"}
    )
    assert [str(url) for url in urls] == ["http://127.0.0.1:8080/hook"]
    assert headers == {"Host": "local-service"}
    assert extensions == {}
    resolve.assert_not_called()


@pytest.fixture
def delivery_db(monkeypatch):
    delivery = SimpleNamespace(
        id=1,
        workflow_run_id=2,
        organization_id=3,
        attempt_count=0,
        http_method="POST",
        endpoint_url="https://hooks.example.com/private-secret",
        credential_uuid=None,
        custom_headers=[],
        delivery_uuid="delivery-1",
        webhook_name="Webhook",
        payload={"event": "done"},
        max_attempts=5,
    )
    db = SimpleNamespace(
        claim_webhook_delivery=AsyncMock(return_value=delivery),
        mark_webhook_delivery_dead_letter=AsyncMock(),
        mark_webhook_delivery_succeeded=AsyncMock(),
        schedule_webhook_delivery_retry=AsyncMock(),
    )
    monkeypatch.setattr(webhook_delivery, "db_client", db)
    return delivery, db


@pytest.mark.asyncio
async def test_persisted_private_destination_deadletters_without_request(
    monkeypatch, delivery_db
):
    delivery, db = delivery_db
    monkeypatch.setattr(
        webhook_security,
        "_resolve_hostname_ips",
        lambda *_: [ipaddress.ip_address("169.254.169.254")],
    )
    client = MagicMock()
    monkeypatch.setattr(webhook_delivery.httpx, "AsyncClient", client)
    await webhook_delivery.deliver_webhook(None, delivery.id)
    client.assert_not_called()
    db.mark_webhook_delivery_dead_letter.assert_awaited_once_with(
        1, 1, "Webhook URL must resolve to public IP addresses", None
    )
    db.schedule_webhook_delivery_retry.assert_not_called()


@pytest.mark.asyncio
async def test_dns_failure_is_retryable_and_sanitized(monkeypatch, delivery_db):
    delivery, db = delivery_db
    monkeypatch.setattr(
        webhook_security,
        "_resolve_hostname_ips",
        MagicMock(side_effect=ValueError("resolver error")),
    )
    monkeypatch.setattr(webhook_delivery, "_enqueue_delivery", AsyncMock())
    await webhook_delivery.deliver_webhook(None, delivery.id)
    db.mark_webhook_delivery_dead_letter.assert_not_called()
    error = db.schedule_webhook_delivery_retry.call_args.kwargs["last_error"]
    assert "Could not resolve webhook hostname" in error
    assert "private-secret" not in error


@pytest.mark.asyncio
async def test_delivery_disables_redirects_proxies_and_uses_pinned_ip(
    monkeypatch, delivery_db
):
    delivery, db = delivery_db
    monkeypatch.setattr(
        webhook_security,
        "_resolve_hostname_ips",
        lambda *_: [ipaddress.ip_address("8.8.8.8")],
    )
    response = httpx.Response(
        302,
        headers={"Location": "http://169.254.169.254/"},
        request=httpx.Request("POST", "https://8.8.8.8/private-secret"),
    )
    client = MagicMock()
    client.request = AsyncMock(return_value=response)
    context = MagicMock()
    context.__aenter__ = AsyncMock(return_value=client)
    factory = MagicMock(return_value=context)
    monkeypatch.setattr(webhook_delivery.httpx, "AsyncClient", factory)
    await webhook_delivery.deliver_webhook(None, delivery.id)
    factory.assert_called_once_with(follow_redirects=False, trust_env=False)
    client.request.assert_awaited_once()
    kwargs = client.request.call_args.kwargs
    assert kwargs["url"].host == "8.8.8.8"
    assert kwargs["headers"]["Host"] == "hooks.example.com"
    assert kwargs["extensions"]["sni_hostname"] == "hooks.example.com"
    db.mark_webhook_delivery_dead_letter.assert_awaited_once()
    db.mark_webhook_delivery_succeeded.assert_not_called()


@pytest.fixture
def dual_stack_transport(monkeypatch):
    from httpcore._backends.auto import AutoBackend

    resolve = MagicMock(
        return_value=[
            ipaddress.ip_address("2606:4700:4700::1111"),
            ipaddress.ip_address("1.1.1.1"),
        ]
    )
    monkeypatch.setattr(webhook_security, "_resolve_hostname_ips", resolve)
    stream = MagicMock()
    stream.read = AsyncMock(
        return_value=b"HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n"
    )
    stream.write = AsyncMock()
    stream.aclose = AsyncMock()
    stream.start_tls = AsyncMock(return_value=stream)
    connect = AsyncMock(return_value=stream)
    monkeypatch.setattr(AutoBackend, "connect_tcp", connect)
    return resolve, stream, connect


@pytest.mark.asyncio
@pytest.mark.parametrize("failure", [httpcore.ConnectError, httpcore.ConnectTimeout])
async def test_delivery_falls_back_to_validated_ipv4_after_connect_failure(
    delivery_db, dual_stack_transport, failure
):
    delivery, db = delivery_db
    resolve, stream, connect = dual_stack_transport
    connect.side_effect = [failure("IPv6 unavailable"), stream]
    await webhook_delivery.deliver_webhook(None, delivery.id)
    assert [call.kwargs["host"] for call in connect.call_args_list] == [
        "2606:4700:4700::1111",
        "1.1.1.1",
    ]
    resolve.assert_called_once()
    tls = stream.start_tls.call_args.kwargs
    assert tls["server_hostname"] == "hooks.example.com"
    assert tls["ssl_context"].check_hostname
    assert tls["ssl_context"].verify_mode == ssl.CERT_REQUIRED
    wire_data = b"".join(call.args[0] for call in stream.write.call_args_list)
    assert wire_data.count(b"POST /private-secret HTTP/1.1") == 1
    assert b"Host: hooks.example.com" in wire_data
    db.mark_webhook_delivery_succeeded.assert_awaited_once_with(1, 1, 200)
    db.schedule_webhook_delivery_retry.assert_not_called()


@pytest.mark.asyncio
@pytest.mark.parametrize(
    ("stage", "failure"),
    [
        ("write", httpcore.WriteError),
        ("write", httpcore.WriteTimeout),
        ("read", httpcore.ReadError),
        ("read", httpcore.ReadTimeout),
        ("read", httpcore.RemoteProtocolError),
    ],
)
async def test_delivery_never_falls_back_after_ambiguous_request_failure(
    monkeypatch, delivery_db, dual_stack_transport, stage, failure
):
    delivery, db = delivery_db
    resolve, stream, connect = dual_stack_transport
    getattr(stream, stage).side_effect = failure("Request may have been sent")
    if failure is httpcore.WriteError:
        # HTTP Core still accepts an early server response after WriteError.
        # Make that read fail too so this exercises an ambiguous failed send.
        stream.read.side_effect = httpcore.ReadError("No response available")
    monkeypatch.setattr(webhook_delivery, "_enqueue_delivery", AsyncMock())
    await webhook_delivery.deliver_webhook(None, delivery.id)
    connect.assert_awaited_once()
    assert connect.call_args.kwargs["host"] == "2606:4700:4700::1111"
    resolve.assert_called_once()
    db.mark_webhook_delivery_succeeded.assert_not_called()
    db.schedule_webhook_delivery_retry.assert_awaited_once()
