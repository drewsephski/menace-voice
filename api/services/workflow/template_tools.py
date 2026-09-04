"""Built-in and MCP tool provisioning for agent onboarding templates."""

from __future__ import annotations

from typing import Any
from urllib.parse import urlparse

from loguru import logger

from api.db import db_client
from api.enums import ToolCategory
from api.services.tool_management import populate_discovered_tools

AGENT_ONBOARDING_TEMPLATE_IDS = frozenset(
    {
        "receptionist",
        "lead-qualifier",
        "support-desk",
        "technical-docs",
        "appointment-coordinator",
        "service-dispatcher",
        "feedback-interviewer",
        "custom",
    }
)

_BUILTIN_TOOL_DEFAULTS: dict[ToolCategory, dict[str, Any]] = {
    ToolCategory.END_CALL: {
        "name": "End Call",
        "description": (
            "End the call when either user asks to disconnect the call, or when "
            "you believe its time to end the conversation"
        ),
        "icon": "phone-off",
        "icon_color": "#EF4444",
        "definition": {
            "schema_version": 1,
            "type": "end_call",
            "config": {
                "messageType": "none",
                "customMessage": None,
                "audioRecordingId": None,
                "endCallReason": False,
                "endCallReasonDescription": None,
            },
        },
    },
    ToolCategory.TRANSFER_CALL: {
        "name": "Transfer Call",
        "description": "Transfer the caller to another phone number when requested",
        "icon": "phone-forwarded",
        "icon_color": "#10B981",
        "definition": {
            "schema_version": 1,
            "type": "transfer_call",
            "config": {
                "destination_source": "static",
                "destination": "",
                "messageType": "none",
                "customMessage": None,
                "audioRecordingId": None,
                "timeout": 30,
                "call_disposition": None,
                "parameters": None,
                "resolver": None,
                "context_mapping": None,
            },
        },
    },
    ToolCategory.CALCULATOR: {
        "name": "Calculator",
        "description": (
            "Perform arithmetic calculations (supports +, -, *, /, **, %, "
            "and parentheses)"
        ),
        "icon": "calculator",
        "icon_color": "#F59E0B",
        "definition": {
            "schema_version": 1,
            "type": "calculator",
        },
    },
    ToolCategory.CURRENT_TIME: {
        "name": "Current Time",
        "description": (
            "Get the current date and time in a timezone, or convert a time "
            "between timezones. Use this before confirming appointments, hours, "
            "or any time-sensitive detail."
        ),
        "icon": "clock",
        "icon_color": "#0EA5E9",
        "definition": {
            "schema_version": 1,
            "type": "current_time",
        },
    },
}

_MCP_PRESET_DEFAULTS: dict[str, dict[str, Any]] = {
    "https://mcp.context7.com/mcp": {
        "name": "Context7 library docs",
        "description": (
            "Look up current, version-specific documentation and examples for "
            "modern libraries."
        ),
        "icon": "book-open",
        "icon_color": "#8B5CF6",
    },
    "https://mcp.deepwiki.com/mcp": {
        "name": "DeepWiki repositories",
        "description": (
            "Explain public GitHub repositories and their architecture from "
            "generated documentation."
        ),
        "icon": "git-branch",
        "icon_color": "#8B5CF6",
    },
    "https://mcp.exa.ai/mcp": {
        "name": "Exa web search",
        "description": "Search the live web and fetch pages during a conversation.",
        "icon": "search",
        "icon_color": "#8B5CF6",
    },
    "https://open-meteo.caseyjhand.com/mcp": {
        "name": "Open-Meteo weather",
        "description": "Get current conditions and forecasts without an API key.",
        "icon": "cloud-sun",
        "icon_color": "#F59E0B",
    },
    "https://mcp.cal.com/mcp": {
        "name": "Cal.com scheduling",
        "description": (
            "Check availability and manage bookings. Requires a Cal.com API key "
            "stored as a Bearer token credential."
        ),
        "icon": "calendar",
        "icon_color": "#292929",
    },
    "https://mcp.linear.app/mcp": {
        "name": "Linear issues",
        "description": (
            "Search and create Linear issues. Requires a Linear API key stored "
            "as a Bearer token credential."
        ),
        "icon": "kanban",
        "icon_color": "#5E6AD2",
    },
    "https://api.githubcopilot.com/mcp": {
        "name": "GitHub",
        "description": (
            "Look up repositories and issues. Requires a GitHub personal access "
            "token stored as a Bearer token credential."
        ),
        "icon": "github",
        "icon_color": "#24292F",
    },
    "https://mcp.notion.com/mcp": {
        "name": "Notion",
        "description": (
            "Search Notion pages and databases. Requires a Notion integration "
            "token stored as a Bearer token credential."
        ),
        "icon": "file-text",
        "icon_color": "#111111",
    },
    "https://mcp.stripe.com": {
        "name": "Stripe billing",
        "description": (
            "Look up customers, invoices, and subscriptions. Use a restricted "
            "read-only Stripe key as a Bearer token credential."
        ),
        "icon": "credit-card",
        "icon_color": "#635BFF",
    },
    "https://mcp.hubspot.com/mcp": {
        "name": "HubSpot CRM",
        "description": (
            "Look up and create HubSpot contacts. Requires a HubSpot private "
            "app token stored as a Bearer token credential."
        ),
        "icon": "building-2",
        "icon_color": "#FF7A59",
    },
    "https://mcp.zapier.com/api/v1/connect": {
        "name": "Zapier",
        "description": (
            "Call selected Zapier actions. Connect at mcp.zapier.com, then store "
            "the connection token as a Bearer credential and filter to a few actions."
        ),
        "icon": "zap",
        "icon_color": "#FF4A00",
    },
}

TEMPLATE_BUILTIN_CATEGORIES: dict[str, list[ToolCategory]] = {
    "receptionist": [
        ToolCategory.END_CALL,
        ToolCategory.TRANSFER_CALL,
        ToolCategory.CURRENT_TIME,
    ],
    "lead-qualifier": [
        ToolCategory.END_CALL,
        ToolCategory.TRANSFER_CALL,
        ToolCategory.CURRENT_TIME,
    ],
    "support-desk": [
        ToolCategory.END_CALL,
        ToolCategory.TRANSFER_CALL,
        ToolCategory.CURRENT_TIME,
    ],
    "technical-docs": [ToolCategory.END_CALL],
    "appointment-coordinator": [
        ToolCategory.END_CALL,
        ToolCategory.TRANSFER_CALL,
        ToolCategory.CALCULATOR,
        ToolCategory.CURRENT_TIME,
    ],
    "service-dispatcher": [
        ToolCategory.END_CALL,
        ToolCategory.TRANSFER_CALL,
        ToolCategory.CURRENT_TIME,
    ],
    "feedback-interviewer": [ToolCategory.END_CALL],
    "custom": [ToolCategory.END_CALL],
}

TEMPLATE_MCP_URLS: dict[str, list[str]] = {
    "support-desk": ["https://mcp.exa.ai/mcp"],
    "technical-docs": [
        "https://mcp.context7.com/mcp",
        "https://mcp.exa.ai/mcp",
        "https://mcp.deepwiki.com/mcp",
    ],
    "service-dispatcher": ["https://open-meteo.caseyjhand.com/mcp"],
}


def normalize_mcp_url(value: str) -> str | None:
    try:
        parsed = urlparse(value.strip())
        if parsed.scheme not in {"http", "https"}:
            return None
        path = parsed.path.rstrip("/") or "/"
        return f"{parsed.scheme}://{parsed.netloc}{path}"
    except Exception:  # noqa: BLE001
        return None


def _mcp_url_from_definition(definition: Any) -> str | None:
    if not isinstance(definition, dict) or definition.get("type") != "mcp":
        return None
    config = definition.get("config")
    if not isinstance(config, dict):
        return None
    url = config.get("url")
    return normalize_mcp_url(url) if isinstance(url, str) else None


async def _find_org_tool_by_category(
    *,
    organization_id: int,
    category: ToolCategory,
) -> Any | None:
    tools = await db_client.get_tools_for_organization(
        organization_id,
        status="active",
        category=category.value,
    )
    return tools[0] if tools else None


async def _find_org_mcp_tool_by_url(
    *,
    organization_id: int,
    url: str,
) -> Any | None:
    normalized_url = normalize_mcp_url(url)
    if not normalized_url:
        return None

    tools = await db_client.get_tools_for_organization(
        organization_id,
        status="active",
        category=ToolCategory.MCP.value,
    )
    for tool in tools:
        tool_url = _mcp_url_from_definition(tool.definition)
        if tool_url == normalized_url:
            return tool
    return None


async def _ensure_builtin_tool(
    *,
    organization_id: int,
    user_id: int,
    category: ToolCategory,
) -> str:
    existing = await _find_org_tool_by_category(
        organization_id=organization_id,
        category=category,
    )
    if existing is not None:
        return existing.tool_uuid

    defaults = _BUILTIN_TOOL_DEFAULTS[category]
    tool = await db_client.create_tool(
        organization_id=organization_id,
        user_id=user_id,
        name=defaults["name"],
        definition=defaults["definition"],
        category=category.value,
        description=defaults["description"],
        icon=defaults["icon"],
        icon_color=defaults["icon_color"],
    )
    return tool.tool_uuid


async def _ensure_mcp_tool(
    *,
    organization_id: int,
    user_id: int,
    url: str,
) -> str:
    existing = await _find_org_mcp_tool_by_url(
        organization_id=organization_id,
        url=url,
    )
    if existing is not None:
        return existing.tool_uuid

    normalized_url = normalize_mcp_url(url)
    if not normalized_url:
        raise ValueError(f"Unsupported MCP URL: {url}")

    preset = _MCP_PRESET_DEFAULTS.get(
        normalized_url,
        {
            "name": "MCP Server",
            "description": "Connected MCP server",
            "icon": "puzzle",
            "icon_color": "#8B5CF6",
        },
    )
    definition = {
        "schema_version": 1,
        "type": "mcp",
        "config": {
            "transport": "streamable_http",
            "url": normalized_url,
            "credential_uuid": None,
            "tools_filter": [],
        },
    }
    try:
        definition = await populate_discovered_tools(
            definition,
            organization_id=organization_id,
        )
    except Exception as exc:  # noqa: BLE001
        logger.warning(
            "MCP discovery failed while provisioning template tool {}: {}",
            normalized_url,
            exc,
        )

    tool = await db_client.create_tool(
        organization_id=organization_id,
        user_id=user_id,
        name=preset["name"],
        definition=definition,
        category=ToolCategory.MCP.value,
        description=preset["description"],
        icon=preset["icon"],
        icon_color=preset["icon_color"],
    )
    return tool.tool_uuid


async def ensure_template_tools(
    *,
    template_id: str,
    organization_id: int,
    user_id: int,
) -> list[str]:
    """Return tool UUIDs that should be attached for an onboarding template."""
    if template_id not in AGENT_ONBOARDING_TEMPLATE_IDS:
        return []

    tool_uuids: list[str] = []

    for category in TEMPLATE_BUILTIN_CATEGORIES.get(template_id, []):
        tool_uuids.append(
            await _ensure_builtin_tool(
                organization_id=organization_id,
                user_id=user_id,
                category=category,
            )
        )

    for url in TEMPLATE_MCP_URLS.get(template_id, []):
        tool_uuids.append(
            await _ensure_mcp_tool(
                organization_id=organization_id,
                user_id=user_id,
                url=url,
            )
        )

    return list(dict.fromkeys(tool_uuids))
