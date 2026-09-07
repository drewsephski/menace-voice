from copy import deepcopy

import pytest

from api.services.workflow.dto import ReactFlowDTO
from api.services.workflow.onboarding_prompt import (
    GENERATED_OBJECTIVE_MARKER,
    ONBOARDING_EXECUTION_MARKER,
    InvalidOnboardingWorkflowLayout,
    build_onboarding_generation_prompt,
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
    for edge in edges:
        edge["data"] = {"label": edge["id"], "condition": "Stage complete"}
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
    result_by_id = {node["id"]: node for node in result["nodes"]}
    for node in original["nodes"]:
        assert result_by_id[node["id"]]["position"] == node["position"]
    assert all(edge in result["edges"] for edge in original["edges"])

    by_id = {node["id"]: node for node in result["nodes"]}
    assert (
        "next response must be the opening itself" in by_id["start"]["data"]["prompt"]
    )
    assert by_id["start"]["data"]["prompt"].startswith(GENERATED_OBJECTIVE_MARKER)
    assert "how it earns attention" in by_id["start"]["data"]["prompt"]
    for index in range(3):
        assert f"Generated prompt {index}" in by_id[f"agent-{index}"]["data"]["prompt"]
        assert "Ask playful questions" not in by_id[f"agent-{index}"]["data"]["prompt"]
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


@pytest.mark.parametrize(
    ("direction", "brief", "language", "tone"),
    [
        (
            "inbound",
            (
                "Cedar repairs bikes in Austin, Tuesday through Saturday. "
                "Collect the bicycle type before discussing a repair. Do not quote prices."
            ),
            "Spanish",
            "calm and welcoming",
        ),
        (
            "outbound",
            (
                "Follow up on an existing software trial. Ask what blocked setup. "
                "Do not sell upgrades or request a password."
            ),
            "English (US)",
            "direct and helpful",
        ),
    ],
)
def test_setup_details_survive_generation_and_every_runtime_stage(
    direction, brief, language, tone
):
    from api.services.workflow.pipecat_engine_context_composer import (
        compose_system_prompt_for_node,
    )
    from api.services.workflow.workflow_graph import WorkflowGraph

    setup = {
        "agent_name": "Maya",
        "use_case": "Customer assistance",
        "call_type": direction,
        "agent_brief": brief,
        "tone": tone,
        "language": language,
        "voice_provider": "Menace Voice",
        "voice_name": "ember",
        "behavior_notes": "Offer a human only through a configured handoff.",
        "workflow_stages": ["Identify the need.", "Resolve it.", "Confirm next steps."],
    }
    generation = build_onboarding_generation_prompt(
        **setup,
        capabilities={"tools": [], "documents": []},
        has_pre_call_fetch=False,
        has_post_call_webhook=False,
    )
    assert brief in generation
    assert '"tools": [], "documents": []' in generation
    assert "OPTIONAL TEMPLATE HINTS" in generation
    assert "Do not force a three-stage sequence" in generation
    definition = enhance_onboarding_workflow_prompts(_workflow(), **setup)
    assert enhance_onboarding_workflow_prompts(definition, **setup) == definition
    graph = WorkflowGraph(ReactFlowDTO.model_validate(definition))
    for node in graph.nodes.values():
        if node.node_type == "globalNode":
            continue
        prompt = compose_system_prompt_for_node(
            node=node,
            workflow=graph,
            format_prompt=lambda value: value,
            has_recordings=False,
            functions=[],
        )
        assert prompt.count(brief) == 1
        assert language in prompt
        assert tone in prompt
        assert "Offer a human only through a configured handoff." in prompt
        assert "take precedence over generated objectives" in prompt
        assert "A caller correction replaces their earlier answer" in prompt
        if direction == "outbound":
            assert "You initiate the call" in prompt
            assert "The caller initiated the call" not in prompt
        else:
            assert "The caller initiated the call" in prompt
            assert "You initiate the call" not in prompt


@pytest.mark.parametrize("agent_count", [1, 2, 3, 4, 8])
def test_preserves_the_number_and_tailored_objectives_of_generated_stages(agent_count):
    source = _workflow(agent_count=agent_count)
    original = deepcopy(source)

    result = _enhance(source)

    assert source == original
    parsed = ReactFlowDTO.model_validate(result)
    stages = [node for node in parsed.nodes if node.type == "agentNode"]
    assert len(stages) == agent_count
    for stage in stages:
        original_stage = next(
            node for node in original["nodes"] if node["id"] == stage.id
        )
        assert stage.data.name == original_stage["data"]["name"]
        assert original_stage["data"]["prompt"] in stage.data.prompt
    assert all(edge in result["edges"] for edge in original["edges"])
    assert _enhance(result) == result


@pytest.mark.parametrize("node_type", ["startCall", "globalNode"])
def test_rejects_ambiguous_start_or_global_nodes(node_type):
    source = _workflow()
    duplicate = deepcopy(
        next(node for node in source["nodes"] if node["type"] == node_type)
    )
    duplicate["id"] = "duplicate"
    source["nodes"].append(duplicate)
    with pytest.raises(InvalidOnboardingWorkflowLayout, match="exactly one Start"):
        _enhance(source)


def test_rejects_missing_generated_node_list():
    with pytest.raises(InvalidOnboardingWorkflowLayout, match="no node list"):
        _enhance({})


@pytest.mark.parametrize(
    "defect",
    [
        "disconnected",
        "deadend",
        "missing_end",
        "dangling",
        "duplicate_id",
        "zero_stages",
        "too_many_stages",
        "missing_condition",
        "unsupported_settings",
    ],
)
def test_rejects_invalid_drafts_without_generic_rebuilding(defect):
    source = _workflow()
    if defect == "disconnected":
        source["edges"] = []
    elif defect == "deadend":
        source["edges"] = [edge for edge in source["edges"] if edge["target"] != "end"]
        source["edges"].append(
            {
                "id": "reachable-end",
                "source": "start",
                "target": "end",
                "data": {
                    "label": "Declined",
                    "condition": "Caller declines the call",
                },
            }
        )
    elif defect == "missing_end":
        source["nodes"] = [
            node for node in source["nodes"] if node["type"] != "endCall"
        ]
    elif defect == "dangling":
        source["edges"][0]["target"] = "missing"
    elif defect == "duplicate_id":
        source["nodes"][1]["id"] = "start"
    elif defect == "zero_stages":
        source = _workflow(agent_count=0)
    elif defect == "too_many_stages":
        source = _workflow(agent_count=9)
    elif defect == "missing_condition":
        source["edges"][0]["data"].pop("condition")
    else:
        source["nodes"][0]["data"]["webhook_url"] = "https://unrequested.example/hook"
    original = deepcopy(source)
    with pytest.raises(InvalidOnboardingWorkflowLayout):
        _enhance(source)
    assert source == original


@pytest.mark.parametrize("route", ["branch", "cycle_with_exit"])
def test_preserves_non_linear_plans_with_valid_exits(route):
    source = _workflow()
    if route == "branch":
        source["edges"].append(
            {
                "id": "skip-known",
                "source": "agent-0",
                "target": "agent-2",
                "data": {
                    "label": "Already resolved",
                    "condition": "Caller already provided a verified resolution",
                },
            }
        )
    else:
        source["edges"].append(
            {
                "id": "correct-answer",
                "source": "agent-2",
                "target": "agent-0",
                "data": {
                    "label": "Correction",
                    "condition": "Caller corrects their earlier answer",
                },
            }
        )
    result = _enhance(source)
    assert all(edge in result["edges"] for edge in source["edges"])
    assert sum(node["type"] == "agentNode" for node in result["nodes"]) == 3
    ReactFlowDTO.model_validate(result)


def test_generator_editor_metadata_and_disabled_defaults_do_not_discard_prompts():
    source = _workflow(agent_count=2)
    start = source["nodes"][0]
    start["data"].update(
        {
            "delayed_start": False,
            "detect_voicemail": False,
            "hovered_through_edge": False,
            "invalid": False,
            "is_static": False,
            "selected_through_edge": False,
            "validationMessage": "",
            "wait_for_user_response": False,
            "tool_uuids": None,
            "document_uuids": None,
        }
    )
    original = deepcopy(source)
    result = _enhance(source)
    assert source == original
    saved = next(node for node in result["nodes"] if node["id"] == "start")
    assert "invalid" not in saved["data"]
    assert "delayed_start" not in saved["data"]
    assert "Explain that the opening" in saved["data"]["prompt"]
    assert sum(node["type"] == "agentNode" for node in result["nodes"]) == 2


def test_global_accepts_empty_optional_fields_from_planner_schema():
    definition = _workflow()
    global_node = next(n for n in definition["nodes"] if n["type"] == "globalNode")
    global_node["data"].update(tool_uuids=[], document_uuids=[], mcp_tool_filters=None)
    result = _enhance(definition)
    global_data = next(n["data"] for n in result["nodes"] if n["type"] == "globalNode")
    assert "tool_uuids" not in global_data
    assert "document_uuids" not in global_data
    global_node["data"]["tool_uuids"] = ["unapproved-tool"]
    with pytest.raises(InvalidOnboardingWorkflowLayout, match="tool_uuids"):
        _enhance(definition)
