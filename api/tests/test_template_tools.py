from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from api.enums import ToolCategory
from api.services.workflow.template_tools import (
    TEMPLATE_MCP_URLS,
    ensure_template_tools,
    normalize_mcp_url,
)


def test_normalize_mcp_url_strips_trailing_slash():
    assert (
        normalize_mcp_url("https://mcp.exa.ai/mcp/")
        == "https://mcp.exa.ai/mcp"
    )


@pytest.mark.asyncio
async def test_ensure_template_tools_reuses_existing_builtin_tools():
    existing_end_call = SimpleNamespace(
        tool_uuid="end-call-1",
        category=ToolCategory.END_CALL.value,
        definition={"type": "end_call"},
    )
    existing_transfer = SimpleNamespace(
        tool_uuid="transfer-1",
        category=ToolCategory.TRANSFER_CALL.value,
        definition={"type": "transfer_call", "config": {}},
    )
    existing_current_time = SimpleNamespace(
        tool_uuid="current-time-1",
        category=ToolCategory.CURRENT_TIME.value,
        definition={"type": "current_time"},
    )

    with patch(
        "api.services.workflow.template_tools.db_client.get_tools_for_organization",
        AsyncMock(
            side_effect=[
                [existing_end_call],
                [existing_transfer],
                [existing_current_time],
            ]
        ),
    ) as get_tools:
        tool_uuids = await ensure_template_tools(
            template_id="receptionist",
            organization_id=11,
            user_id=7,
        )

    assert tool_uuids == ["end-call-1", "transfer-1", "current-time-1"]
    assert get_tools.await_count == 3


@pytest.mark.asyncio
async def test_ensure_template_tools_creates_missing_builtin_tools():
    created_tools: list[str] = []

    async def create_tool(**kwargs):
        category = kwargs["category"]
        tool_uuid = {
            ToolCategory.END_CALL.value: "end-call-new",
            ToolCategory.TRANSFER_CALL.value: "transfer-new",
            ToolCategory.CURRENT_TIME.value: "current-time-new",
        }[category]
        created_tools.append(category)
        return SimpleNamespace(tool_uuid=tool_uuid)

    with patch(
        "api.services.workflow.template_tools.db_client.get_tools_for_organization",
        AsyncMock(return_value=[]),
    ), patch(
        "api.services.workflow.template_tools.db_client.create_tool",
        AsyncMock(side_effect=create_tool),
    ):
        tool_uuids = await ensure_template_tools(
            template_id="receptionist",
            organization_id=11,
            user_id=7,
        )

    assert tool_uuids == ["end-call-new", "transfer-new", "current-time-new"]
    assert created_tools == [
        ToolCategory.END_CALL.value,
        ToolCategory.TRANSFER_CALL.value,
        ToolCategory.CURRENT_TIME.value,
    ]


def test_template_mcp_urls_never_auto_provision_auth_servers():
    no_auth_urls = {
        "https://mcp.context7.com/mcp",
        "https://mcp.deepwiki.com/mcp",
        "https://mcp.exa.ai/mcp",
        "https://open-meteo.caseyjhand.com/mcp",
    }
    for urls in TEMPLATE_MCP_URLS.values():
        for url in urls:
            assert url in no_auth_urls
