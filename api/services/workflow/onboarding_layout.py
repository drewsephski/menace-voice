from typing import Any

from pydantic import ValidationError

from api.services.workflow.dto import ReactFlowDTO
from api.services.workflow.workflow_graph import WorkflowGraph


class InvalidOnboardingWorkflowLayout(ValueError):
    pass


def validate_onboarding_layout(definition: dict[str, Any]) -> None:
    nodes, edges = definition.get("nodes"), definition.get("edges")
    if not isinstance(nodes, list) or not nodes:
        raise InvalidOnboardingWorkflowLayout(
            "The generated workflow has no node list."
        )
    if not isinstance(edges, list) or len(edges) > 64 or len(nodes) > 15:
        raise InvalidOnboardingWorkflowLayout("Use at most 15 nodes and 64 edges.")
    if any(not isinstance(node, dict) for node in nodes):
        raise InvalidOnboardingWorkflowLayout("Every node must be an object.")
    ids = [node.get("id") for node in nodes]
    if any(not isinstance(value, str) or not value.strip() for value in ids):
        raise InvalidOnboardingWorkflowLayout("Every node needs a non-empty string ID.")
    if len(set(ids)) != len(ids):
        raise InvalidOnboardingWorkflowLayout("Node IDs must be unique.")
    types = [node.get("type") for node in nodes]
    if any(
        kind not in ("startCall", "agentNode", "globalNode", "endCall")
        for kind in types
    ):
        raise InvalidOnboardingWorkflowLayout(
            "Use only Start, Agent, Global, and End nodes."
        )
    if types.count("startCall") != 1 or types.count("globalNode") > 1:
        raise InvalidOnboardingWorkflowLayout(
            "Use exactly one Start and at most one Global node."
        )
    if not 1 <= types.count("agentNode") <= 8 or not 1 <= types.count("endCall") <= 5:
        raise InvalidOnboardingWorkflowLayout(
            "Use 1 to 8 Agent nodes and 1 to 4 End nodes."
        )
    # Launch integrations and credentials are exclusively attached from validated
    # setup answers by the backend, never from model-generated configuration.
    allowed_fields = {
        "name",
        "prompt",
        "add_global_prompt",
        "allow_interrupt",
        "is_start",
        "is_end",
        "tool_uuids",
        "document_uuids",
        "mcp_tool_filters",
        "extraction_enabled",
        "extraction_prompt",
        "extraction_variables",
    }
    for node in nodes:
        data = node.get("data")
        if not isinstance(data, dict):
            raise InvalidOnboardingWorkflowLayout(f"Node {node['id']} needs data.")
        if set(data) - allowed_fields:
            raise InvalidOnboardingWorkflowLayout(
                f"Node {node['id']} contains unsupported settings: {sorted(set(data) - allowed_fields)}. Generate only prompt, name, "
                "resource assignments, interruption, and extraction settings."
            )
        prompt = data.get("prompt")
        if node["type"] != "globalNode" and (
            not isinstance(prompt, str) or not prompt.strip()
        ):
            raise InvalidOnboardingWorkflowLayout(
                f"Node {node['id']} needs a tailored prompt."
            )
        if isinstance(prompt, str) and len(prompt) > 24_000:
            raise InvalidOnboardingWorkflowLayout(
                f"Node {node['id']} prompt is too long."
            )
        name = data.get("name")
        if node["type"] == "agentNode" and (
            not isinstance(name, str) or not name.strip()
        ):
            raise InvalidOnboardingWorkflowLayout(
                f"Node {node['id']} needs a descriptive name."
            )

    adjacency: dict[str, list[str]] = {node_id: [] for node_id in ids}
    reverse: dict[str, list[str]] = {node_id: [] for node_id in ids}
    edge_ids: set[str] = set()
    for edge in edges:
        if not isinstance(edge, dict) or not isinstance(edge.get("id"), str):
            raise InvalidOnboardingWorkflowLayout(
                "Every edge needs a unique string ID."
            )
        if not edge["id"].strip() or edge["id"] in edge_ids:
            raise InvalidOnboardingWorkflowLayout(
                "Edge IDs must be non-empty and unique."
            )
        edge_ids.add(edge["id"])
        source, target = edge.get("source"), edge.get("target")
        if (
            not isinstance(source, str)
            or not isinstance(target, str)
            or source not in adjacency
            or target not in adjacency
        ):
            raise InvalidOnboardingWorkflowLayout(
                f"Edge {edge['id']} references a missing node."
            )
        data = edge.get("data")
        if not isinstance(data, dict) or any(
            not isinstance(data.get(key), str) or not data[key].strip()
            for key in ("label", "condition")
        ):
            raise InvalidOnboardingWorkflowLayout(
                f"Edge {edge['id']} needs a label and routing condition."
            )
        adjacency[source].append(target)
        reverse[target].append(source)

    def reachable(seeds: list[str], links: dict[str, list[str]]) -> set[str]:
        visited: set[str] = set()
        pending = list(seeds)
        while pending:
            current = pending.pop()
            if current not in visited:
                visited.add(current)
                pending.extend(links[current])
        return visited

    start = next(node["id"] for node in nodes if node["type"] == "startCall")
    ends = [node["id"] for node in nodes if node["type"] == "endCall"]
    conversational = {node["id"] for node in nodes if node["type"] != "globalNode"}
    if conversational - reachable([start], adjacency):
        raise InvalidOnboardingWorkflowLayout(
            "Every conversation node must be reachable from Start."
        )
    if conversational - reachable(ends, reverse):
        raise InvalidOnboardingWorkflowLayout(
            "Every conversation node must have a path to End."
        )
    try:
        WorkflowGraph(ReactFlowDTO.model_validate(definition))
    except (ValidationError, ValueError) as exc:
        if isinstance(exc, ValidationError):
            details = "; ".join(
                f"{'.'.join(map(str, error['loc']))}: {error['msg']}"
                for error in exc.errors(include_input=False)
            )
        else:
            details = str(exc)
        raise InvalidOnboardingWorkflowLayout(details) from exc
