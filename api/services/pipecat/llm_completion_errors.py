"""Helpers for turning opaque LLM provider failures into actionable errors."""

from __future__ import annotations

import json
import re
from typing import Any

from api.constants import DEPLOYMENT_MODE
from api.errors.failure import extract_http_status
from api.services.quota_service import (
    HOSTED_QUOTA_EXCEEDED_MESSAGE,
    OSS_HOSTED_KEY_QUOTA_EXCEEDED_MESSAGE,
    OSS_QUOTA_EXCEEDED_MESSAGE,
)

_HTML_TITLE_RE = re.compile(r"<title>\s*([^<]+)\s*</title>", re.I)


def _strip_html_error_body(message: str) -> str:
    lowered = message.lower()
    if "<html" not in lowered and "</title>" not in lowered:
        return message.strip()

    title_match = _HTML_TITLE_RE.search(message)
    if title_match:
        return title_match.group(1).strip()

    if "403 forbidden" in lowered:
        return "403 Forbidden"
    if "401 unauthorized" in lowered:
        return "401 Unauthorized"

    return "upstream HTTP error"


def _dograh_quota_message() -> str:
    if DEPLOYMENT_MODE == "oss":
        return OSS_QUOTA_EXCEEDED_MESSAGE
    return HOSTED_QUOTA_EXCEEDED_MESSAGE


def _parse_json_error_detail(raw: str) -> str | None:
    stripped = raw.strip()
    if not stripped.startswith("{"):
        return None
    try:
        payload = json.loads(stripped)
    except json.JSONDecodeError:
        return None
    if not isinstance(payload, dict):
        return None

    for key in ("detail", "message", "error", "error_message"):
        value = payload.get(key)
        if isinstance(value, str) and value.strip():
            return value.strip()
        if isinstance(value, dict):
            nested = value.get("message") or value.get("code")
            if isinstance(nested, str) and nested.strip():
                return nested.strip()
    return None


def format_llm_completion_error(
    exc: BaseException,
    *,
    provider: str | None = None,
) -> str:
    """Return a user-facing LLM completion error without raw HTML bodies."""
    status = extract_http_status(exc)
    raw = str(exc).strip()
    parsed_detail = _parse_json_error_detail(raw)
    normalized_provider = (provider or "").lower()

    if normalized_provider == "dograh":
        if status == 403 or "quota_exceeded" in raw.lower():
            if DEPLOYMENT_MODE == "oss" and "service key" in raw.lower():
                return OSS_HOSTED_KEY_QUOTA_EXCEEDED_MESSAGE
            return _dograh_quota_message()
        if status == 401:
            return (
                "Menace Voice rejected the service key used for this call. "
                "Verify the key in Models configuration."
            )

    if status == 403:
        return (
            "The LLM provider rejected the request (HTTP 403). "
            "Verify API key permissions, billing status, and that tool results "
            "are not being blocked by an upstream proxy."
        )
    if status == 401:
        return (
            "The LLM provider rejected the API key (HTTP 401). "
            "Check your model configuration."
        )
    if status == 429:
        return (
            "The LLM provider rate-limited this request (HTTP 429). Try again shortly."
        )

    if parsed_detail:
        return parsed_detail

    if "<html" in raw.lower():
        return f"LLM provider error: {_strip_html_error_body(raw)}"

    return raw or type(exc).__name__


def is_fatal_llm_completion_error(
    exc: BaseException,
    *,
    provider: str | None = None,
) -> bool:
    """Whether a completion failure should terminate the call immediately."""
    status = extract_http_status(exc)
    normalized_provider = (provider or "").lower()
    raw = str(exc).lower()

    if normalized_provider == "dograh" and status in (401, 403):
        return True
    if normalized_provider == "dograh" and "quota_exceeded" in raw:
        return True
    return False


def llm_completion_error_context(exc: BaseException) -> dict[str, Any]:
    """Structured fields for logging/telemetry alongside a completion failure."""
    return {
        "http_status": extract_http_status(exc),
        "exception_type": type(exc).__name__,
    }
