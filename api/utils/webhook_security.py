"""Validate webhook destinations and pin hosted requests to a checked address."""

import asyncio
import ipaddress

import httpx

from api.constants import DEPLOYMENT_MODE
from api.utils.url_security import _is_blocked_saas_service_ip, _resolve_hostname_ips

_DNS_TIMEOUT_SECONDS = 10
_NAT64_NETWORK = ipaddress.ip_network("64:ff9b::/96")


class UnsafeWebhookURL(ValueError):
    """Permanent configuration error; messages must never include the URL."""


def _check_public_ip(ip: ipaddress.IPv4Address | ipaddress.IPv6Address) -> None:
    # IPv6 translation/tunneling must not disguise a private IPv4 destination.
    if isinstance(ip, ipaddress.IPv6Address):
        if ip.ipv4_mapped:
            _check_public_ip(ip.ipv4_mapped)
        if ip.sixtofour:
            _check_public_ip(ip.sixtofour)
        if ip.teredo:
            for embedded in ip.teredo:
                _check_public_ip(embedded)
        if ip in _NAT64_NETWORK:
            _check_public_ip(ipaddress.IPv4Address(int(ip) & 0xFFFFFFFF))
    if not ip.is_global or _is_blocked_saas_service_ip(ip):
        raise UnsafeWebhookURL("Webhook URL must resolve to public IP addresses")


def validate_webhook_url(value: str) -> httpx.URL:
    """Check syntax and literal addresses without DNS during workflow parsing."""
    try:
        url = httpx.URL(value)
    except (httpx.InvalidURL, ValueError) as exc:
        raise UnsafeWebhookURL("Webhook URL is invalid") from exc
    if url.scheme not in {"http", "https"} or not url.host:
        raise UnsafeWebhookURL("Webhook URL must use http or https")
    if DEPLOYMENT_MODE != "oss":
        if url.username or url.password:
            raise UnsafeWebhookURL("Use webhook credentials instead of URL userinfo")
        if url.host.rstrip(".").lower() == "localhost":
            raise UnsafeWebhookURL("Webhook URL must resolve to public IP addresses")
        try:
            ip = ipaddress.ip_address(url.host)
        except ValueError:
            pass
        else:
            _check_public_ip(ip)
    return url


async def prepare_webhook_request(
    endpoint_url: str, headers: dict[str, str]
) -> tuple[list[httpx.URL], dict[str, str], dict[str, str]]:
    """Resolve once and validate all candidates, preserving Host and TLS identity.

    A validate-then-connect by hostname would permit DNS rebinding. HTTP Core's
    ``sni_hostname`` extension keeps certificate verification against the original
    hostname while the request URL connects to a validated numeric address.
    Callers must disable redirects and hosted environment proxies.
    """
    url = validate_webhook_url(endpoint_url)
    if DEPLOYMENT_MODE == "oss":
        return [url], headers, {}
    try:
        addresses = await asyncio.wait_for(
            asyncio.to_thread(_resolve_hostname_ips, url.host, url.port),
            timeout=_DNS_TIMEOUT_SECONDS,
        )
    except (ValueError, TimeoutError) as exc:
        # DNS failures can be temporary; leave the durable delivery retryable.
        raise httpx.ConnectError("Could not resolve webhook hostname") from exc
    if not addresses:
        raise httpx.ConnectError("Could not resolve webhook hostname")
    for address in addresses:
        _check_public_ip(address)

    # Do not let custom headers redirect virtual-host routing after validation.
    headers = {key: value for key, value in headers.items() if key.lower() != "host"}
    headers["Host"] = url.netloc.decode("ascii")
    return (
        [url.copy_with(host=str(address)) for address in dict.fromkeys(addresses)],
        headers,
        {"sni_hostname": url.host},
    )


async def send_webhook_request(
    client: httpx.AsyncClient,
    urls: list[httpx.URL],
    *,
    method: str,
    headers: dict[str, str],
    extensions: dict[str, str],
    payload: object,
    timeout: float,
) -> httpx.Response:
    """Try validated addresses only while no HTTP request could have been sent.

    Connect failures (TCP/TLS establishment) can safely try another address.
    Read/write/protocol errors are ambiguous for POST delivery and must return to
    the durable retry policy instead. Bound the whole attempt so address fallback
    cannot outlive its database lease, with a share of the budget for each connect.
    """
    if not urls:
        raise httpx.ConnectError("No webhook destination addresses")
    request_timeout = httpx.Timeout(timeout, connect=timeout / len(urls))
    try:
        async with asyncio.timeout(timeout):
            for index, url in enumerate(urls):
                try:
                    return await client.request(
                        method=method,
                        url=url,
                        json=payload if method in {"POST", "PUT", "PATCH"} else None,
                        headers=headers,
                        timeout=request_timeout,
                        extensions=extensions,
                    )
                except (httpx.ConnectError, httpx.ConnectTimeout):
                    if index == len(urls) - 1:
                        raise
    except TimeoutError as exc:
        # The deadline may expire after a send. Never fall back in this case.
        raise httpx.ReadTimeout("Webhook request attempt timed out") from exc
    raise httpx.ConnectError("No webhook destination addresses")
