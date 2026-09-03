from __future__ import annotations

from typing import Any, Iterable

MCP_GUIDANCE_MARKER = "MCP tool guidance:"


def build_mcp_usage_instructions(tools: Iterable[Any]) -> str:
    instructions: list[str] = []
    for tool in tools:
        if getattr(tool, "category", None) != "mcp":
            continue

        name = str(getattr(tool, "name", "MCP server")).strip() or "MCP server"
        definition = getattr(tool, "definition", None)
        config = definition.get("config") if isinstance(definition, dict) else None
        url = config.get("url") if isinstance(config, dict) else None

        if url == "https://mcp.exa.ai/mcp":
            instruction = (
                f"Use {name} when the caller needs current information from the "
                "public web or asks you to look up a webpage. Prefer it over "
                "guessing, summarize the result clearly, and mention when "
                "information came from web search."
            )
        elif url == "https://open-meteo.caseyjhand.com/mcp":
            instruction = (
                f"Use {name} for current conditions, forecasts, or weather-related "
                "planning. Ask for the caller's location if it is missing, and "
                "distinguish a forecast from a current observation."
            )
        else:
            instruction = (
                f"Use {name} only when its connected tools are relevant to the "
                "caller's request. Ask for missing details before taking an "
                "action and never claim an action succeeded unless the tool "
                "confirms it."
            )
        instructions.append(instruction)

    if not instructions:
        return ""
    return f"{MCP_GUIDANCE_MARKER}\n" + "\n".join(
        f"- {instruction}" for instruction in instructions
    )


def append_mcp_usage_instructions(
    workflow_definition: dict[str, Any],
    instructions: str,
) -> dict[str, Any]:
    if not instructions:
        return workflow_definition

    nodes = workflow_definition.get("nodes")
    if not isinstance(nodes, list):
        return workflow_definition

    updated_definition = {**workflow_definition}
    updated_nodes: list[Any] = []
    for node in nodes:
        if not isinstance(node, dict) or node.get("type") not in {
            "startCall",
            "agentNode",
        }:
            updated_nodes.append(node)
            continue

        data = dict(node.get("data")) if isinstance(node.get("data"), dict) else {}
        prompt = data.get("prompt")
        if isinstance(prompt, str) and prompt.strip():
            if MCP_GUIDANCE_MARKER not in prompt:
                data["prompt"] = f"{prompt.rstrip()}\n\n{instructions}"
        else:
            data["prompt"] = instructions
        updated_nodes.append({**node, "data": data})

    updated_definition["nodes"] = updated_nodes
    return updated_definition
