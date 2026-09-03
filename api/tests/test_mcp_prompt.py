from types import SimpleNamespace

from api.services.workflow.mcp_prompt import (
    append_mcp_usage_instructions,
    build_mcp_usage_instructions,
)


def test_mcp_guidance_is_derived_from_selected_mcp_tools():
    tool = SimpleNamespace(
        category="mcp",
        name="CRM tools",
        definition={
            "type": "mcp",
            "config": {"url": "https://crm.example.com/mcp"},
        },
    )

    instructions = build_mcp_usage_instructions([tool])

    assert instructions.startswith("MCP tool guidance:")
    assert "Use CRM tools only when" in instructions


def test_mcp_guidance_is_persisted_on_conversational_nodes_only():
    definition = {
        "nodes": [
            {"id": "start", "type": "startCall", "data": {"prompt": "Greet."}},
            {"id": "agent", "type": "agentNode", "data": {}},
            {"id": "end", "type": "endCall", "data": {"prompt": "Goodbye."}},
        ],
        "edges": [],
    }
    instructions = "MCP tool guidance:\n- Use CRM tools when relevant."

    updated = append_mcp_usage_instructions(definition, instructions)

    assert "Greet.\n\nMCP tool guidance:" in updated["nodes"][0]["data"]["prompt"]
    assert updated["nodes"][1]["data"]["prompt"] == instructions
    assert updated["nodes"][2]["data"]["prompt"] == "Goodbye."
    assert definition["nodes"][0]["data"] == {"prompt": "Greet."}
