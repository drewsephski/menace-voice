from copy import deepcopy

import pytest

from api.services.workflow.dto import ReactFlowDTO
from api.services.workflow.onboarding_prompt import (
    GENERATED_OBJECTIVE_MARKER,
    ONBOARDING_EXECUTION_MARKER,
    InvalidOnboardingWorkflowLayout,
    enhance_onboarding_workflow_prompts,
)


def _workflow(*, include_global: bool = True, agent_count: int = 3) -> dict:
    agents = [
        {
            "id": f"agent-{index}",
            "type": "agentNode",
            "position": {"x": index * 400 + 400, "y": index * 150},
            "data": {
                "name": f"Generated stage {index}",
                "prompt": f"Generated prompt {index}",
            },
        }
        for index in range(agent_count)
    ]
    nodes = [
        {
            "id": "start",
            "type": "startCall",
            "position": {"x": 0, "y": 0},
            "data": {
                "name": "Start",
                "prompt": "Explain that the opening should earn attention.",
            },
        },
        # Deliberately reverse array order. Edge order is the stage order.
        *reversed(agents),
        {
            "id": "end",
            "type": "endCall",
            "position": {"x": 1800, "y": 0},
            "data": {"name": "End", "prompt": "Say goodbye."},
        },
    ]
    if include_global:
        nodes.append(
            {
                "id": "global",
                "type": "globalNode",
                "position": {"x": -500, "y": 100},
                "data": {"name": "Old persona", "prompt": "Generic helper."},
            }
        )

    edges = []
    if agents:
        edges.append({"id": "start-edge", "source": "start", "target": "agent-0"})
        edges.extend(
            {
                "id": f"agent-edge-{index}",
                "source": f"agent-{index}",
                "target": f"agent-{index + 1}",
            }
            for index in range(agent_count - 1)
        )
        edges.append(
            {
                "id": "end-edge",
                "source": f"agent-{agent_count - 1}",
                "target": "end",
            }
        )
    return {"nodes": nodes, "edges": edges}


def _enhance(workflow: dict) -> dict:
    return enhance_onboarding_workflow_prompts(
        workflow,
        agent_name="Maya",
        use_case="Silly self-test prank call",
        call_type="outbound",
        agent_brief="Call me about my suspiciously organized sock drawer.",
        tone="playful but respectful",
        language="English (US)",
        voice_provider="Menace Voice",
        voice_name="ember",
        behavior_notes="Stop immediately if I say the test is over.",
        workflow_stages=[
            "Confirm the right person and introduce the sock mystery.",
            "Ask playful questions about the organized socks.",
            "Reveal the joke and close without dragging it out.",
        ],
    )


def test_enhances_every_prompt_without_changing_the_generated_layout():
    source = _workflow()
    original = deepcopy(source)

    result = _enhance(source)

    assert source == original
    assert [node["id"] for node in result["nodes"]] == [
        node["id"] for node in original["nodes"]
    ]
    assert [node["position"] for node in result["nodes"]] == [
        node["position"] for node in original["nodes"]
    ]

    by_id = {node["id"]: node for node in result["nodes"]}
    assert (
        "next response must be the opening itself" in by_id["start"]["data"]["prompt"]
    )
    assert by_id["start"]["data"]["prompt"].startswith(GENERATED_OBJECTIVE_MARKER)
    assert "how it earns attention" in by_id["start"]["data"]["prompt"]
    assert "Confirm the right person" in by_id["agent-0"]["data"]["prompt"]
    assert "Ask playful questions" in by_id["agent-1"]["data"]["prompt"]
    assert "Reveal the joke" in by_id["agent-2"]["data"]["prompt"]
    assert "real outcome" in by_id["end"]["data"]["prompt"]
    assert "Silly self-test prank call" in by_id["global"]["data"]["prompt"]
    assert "playful but respectful" in by_id["global"]["data"]["prompt"]
    assert "Menace Voice / ember" in by_id["global"]["data"]["prompt"]
    assert all(
        node["data"].get("add_global_prompt") is True
        for node in result["nodes"]
        if node["type"] in {"startCall", "agentNode", "endCall"}
    )
    assert all(
        ONBOARDING_EXECUTION_MARKER in node["data"]["prompt"]
        for node in result["nodes"]
    )


def test_adds_one_global_node_when_the_generator_omits_it():
    result = _enhance(_workflow(include_global=False))

    global_nodes = [node for node in result["nodes"] if node["type"] == "globalNode"]
    assert len(global_nodes) == 1
    assert global_nodes[0]["position"]["x"] == -500.0
    assert global_nodes[0]["data"]["name"] == "Voice and boundaries"


@pytest.mark.parametrize("agent_count", [0, 1, 2, 4, 6])
def test_rebuilds_generated_workflows_with_the_wrong_number_of_agent_nodes(
    agent_count: int,
):
    source = _workflow(agent_count=agent_count)
    original = deepcopy(source)

    result = _enhance(source)

    assert source == original
    parsed = ReactFlowDTO.model_validate(result)
    stages = [node for node in parsed.nodes if node.type == "agentNode"]
    assert len(stages) == 3
    assert "Confirm the right person" in stages[0].data.prompt
    assert "Ask playful questions" in stages[1].data.prompt
    assert "Reveal the joke" in stages[2].data.prompt
    assert [(edge.source, edge.target) for edge in parsed.edges[:4]] == [
        ("start", "stage-1"),
        ("stage-1", "stage-2"),
        ("stage-2", "stage-3"),
        ("stage-3", "end"),
    ]
    for node_id in ("start", "stage-1", "stage-2", "stage-3"):
        assert any(
            edge.source == node_id
            and edge.target == "end"
            and "stop" in edge.data.condition
            for edge in parsed.edges
        )
    global_node = next(node for node in parsed.nodes if node.type == "globalNode")
    assert "suspiciously organized sock drawer" in global_node.data.prompt
    assert "Stop immediately" in global_node.data.prompt


@pytest.mark.parametrize("node_type", ["startCall", "globalNode"])
def test_rebuilds_ambiguous_start_or_global_nodes(node_type: str):
    source = _workflow()
    duplicate = deepcopy(
        next(node for node in source["nodes"] if node["type"] == node_type)
    )
    duplicate["id"] = "duplicate"
    source["nodes"].append(duplicate)

    result = _enhance(source)

    ReactFlowDTO.model_validate(result)
    assert sum(node["type"] == node_type for node in result["nodes"]) == 1


def test_rejects_missing_generated_node_list():
    with pytest.raises(InvalidOnboardingWorkflowLayout, match="no node list"):
        _enhance({})
