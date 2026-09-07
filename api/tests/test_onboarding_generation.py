from copy import deepcopy
from itertools import pairwise
from unittest.mock import AsyncMock

import pytest

from api.db.models import KnowledgeBaseDocumentModel, ToolModel
from api.services.workflow.mcp_prompt import MCP_GUIDANCE_MARKER
from api.services.workflow.onboarding_capabilities import (
    build_onboarding_capability_catalog,
)
from api.services.workflow.onboarding_generation import (
    OnboardingSetup,
    generate_onboarding_workflow,
)
from api.services.workflow.onboarding_layout import InvalidOnboardingWorkflowLayout


def setup_for(brief="Book a bicycle repair after collecting the bicycle type."):
    return OnboardingSetup(
        agent_name="Maya",
        use_case="Custom",
        call_type="inbound",
        agent_brief=brief,
        tone="friendly",
        language="English",
        voice_provider="Menace Voice",
        voice_name="ember",
    )


def draft(
    stages=("Identify bicycle", "Book repair"),
    *,
    brief="Book a bicycle repair after collecting the bicycle type.",
):
    nodes = [
        {
            "id": "start",
            "type": "startCall",
            "position": {"x": 0, "y": 0},
            "data": {
                "name": "Welcome",
                "prompt": "Welcome the caller and ask what they need.",
            },
        }
    ]
    nodes.extend(
        {
            "id": f"stage-{index}",
            "type": "agentNode",
            "position": {"x": 400 * (index + 1), "y": 0},
            "data": {
                "name": objective,
                "prompt": f"Complete this task: {objective}. Ask only for missing facts.",
                "execution": {
                    "objective": objective,
                    "requirement_ids": ["brief-1"],
                    "inputs": [],
                    "actions": [
                        f"Carry out {objective.lower()} using the caller's confirmed information."
                    ],
                    "completion_criteria": [f"{objective} has a confirmed outcome."],
                    "failure_behavior": "Explain the missing information and ask for clarification.",
                },
                "tool_uuids": [],
                "document_uuids": [],
            },
        }
        for index, objective in enumerate(stages)
    )
    nodes.append(
        {
            "id": "end",
            "type": "endCall",
            "position": {"x": 400 * (len(stages) + 1), "y": 0},
            "data": {
                "name": "Goodbye",
                "prompt": "Summarize the actual outcome and say goodbye.",
            },
        }
    )
    return {
        "nodes": nodes,
        "edges": [
            {
                "id": f"edge-{index}",
                "source": source["id"],
                "target": target["id"],
                "data": {
                    "label": f"Continue {index}",
                    "condition": "The current objective is complete",
                },
            }
            for index, (source, target) in enumerate(pairwise(nodes))
        ],
    }


async def generate_with(generate, *, setup=None, capabilities=None, selected_tools=()):
    return await generate_onboarding_workflow(
        generate=generate,
        setup=setup or setup_for(),
        capabilities=capabilities or {"tools": [], "documents": []},
        has_pre_call_fetch=False,
        has_post_call_webhook=False,
        selected_tools=selected_tools,
    )


async def test_repairs_once_with_useful_draft_and_diagnostic_preserving_the_plan():
    valid = draft(
        (
            "Collect bicycle type",
            "Check repair availability",
            "Confirm repair slot",
            "Explain dropoff",
        )
    )
    valid["edges"].append(
        {
            "id": "already-known",
            "source": "stage-0",
            "target": "stage-2",
            "data": {
                "label": "Previously checked",
                "condition": "A successful current lookup already supplied availability",
            },
        }
    )
    invalid = deepcopy(valid)
    invalid["edges"][0]["target"] = "missing-node"
    generate = AsyncMock(
        side_effect=[
            {"workflow_definition": invalid},
            {"workflow_definition": valid, "name": "Bicycle repairs"},
        ]
    )

    result = await generate_with(generate)

    assert generate.await_count == 2
    repair_prompt = generate.await_args_list[1].args[0]
    assert "REPAIR THIS DRAFT" in repair_prompt
    assert "references a missing node" in repair_prompt
    assert "Check repair availability" in repair_prompt
    assert "already-known" in repair_prompt
    assert result["name"] == "Bicycle repairs"
    assert all(
        edge in result["workflow_definition"]["edges"] for edge in valid["edges"]
    )
    generated_stages = [
        node
        for node in result["workflow_definition"]["nodes"]
        if node["type"] == "agentNode"
    ]
    assert [node["data"]["name"] for node in generated_stages] == [
        "Collect bicycle type",
        "Check repair availability",
        "Confirm repair slot",
        "Explain dropoff",
    ]
    for source in valid["nodes"]:
        saved = next(
            node
            for node in result["workflow_definition"]["nodes"]
            if node["id"] == source["id"]
        )
        if source["type"] == "agentNode":
            assert source["data"]["execution"]["objective"] in saved["data"]["prompt"]
            assert "execution" not in saved["data"]
        else:
            assert source["data"]["prompt"] in saved["data"]["prompt"]


async def test_two_invalid_drafts_fail_without_a_generic_fallback():
    invalid = draft()
    invalid["edges"] = []
    generate = AsyncMock(return_value={"workflow_definition": invalid})
    with pytest.raises(InvalidOnboardingWorkflowLayout, match="reachable from Start"):
        await generate_with(generate)
    assert generate.await_count == 2


async def test_private_generated_settings_are_excluded_from_repair_feedback():
    invalid = draft()
    invalid["nodes"][0]["data"]["webhook"] = {
        "url": "https://SECRET_HOST",
        "token": "SECRET_TOKEN",
    }
    invalid["nodes"][0]["credentials"] = "SECRET_CREDENTIAL"
    invalid["private_config"] = "SECRET_CONFIG"
    invalid["edges"][0]["data"]["authorization"] = "SECRET_AUTH"
    generate = AsyncMock(
        side_effect=[
            {"workflow_definition": invalid, "model_configuration": "SECRET_MODEL"},
            {"workflow_definition": draft()},
        ]
    )

    await generate_with(generate)

    repair = generate.await_args_list[1].args[0]
    assert "SECRET" not in repair
    assert "unsupported settings" in repair
    assert "Identify bicycle" in repair


async def test_selected_resources_and_mcp_guidance_stay_in_the_assigned_stage():
    tool = ToolModel(
        tool_uuid="tool-weather",
        organization_id=11,
        category="mcp",
        name="Weather",
        description="Read forecasts",
        definition={
            "type": "mcp",
            "config": {
                "url": "https://open-meteo.caseyjhand.com/mcp",
                "discovered_tools": [
                    {
                        "name": "forecast",
                        "description": "Get a forecast",
                        "inputSchema": {
                            "type": "object",
                            "properties": {"location": {"type": "string"}},
                        },
                    }
                ],
            },
        },
    )
    document = KnowledgeBaseDocumentModel(
        organization_id=11, document_uuid="doc-hours", filename="Opening hours.pdf"
    )
    capabilities = build_onboarding_capability_catalog(
        [tool], [document], organization_id=11
    )
    definition = draft(("Check weather before repair", "Explain opening hours"))
    weather = next(node for node in definition["nodes"] if node["id"] == "stage-0")
    weather["data"].update(
        tool_uuids=["tool-weather"], mcp_tool_filters={"tool-weather": ["forecast"]}
    )
    hours = next(node for node in definition["nodes"] if node["id"] == "stage-1")
    hours["data"]["document_uuids"] = ["doc-hours"]
    generate = AsyncMock(return_value={"workflow_definition": definition})

    result = await generate_with(
        generate, capabilities=capabilities, selected_tools=[tool]
    )

    assert generate.await_count == 1
    by_id = {node["id"]: node for node in result["workflow_definition"]["nodes"]}
    assert by_id["stage-0"]["data"]["tool_uuids"] == ["tool-weather"]
    assert by_id["stage-0"]["data"]["mcp_tool_filters"] == {
        "tool-weather": ["forecast"]
    }
    assert by_id["stage-1"]["data"]["document_uuids"] == ["doc-hours"]
    for node in by_id.values():
        assert (MCP_GUIDANCE_MARKER in node["data"]["prompt"]) is (
            node["id"] == "stage-0"
        )
        if node["id"] != "stage-0":
            assert not node["data"].get("tool_uuids")
        if node["id"] != "stage-1":
            assert not node["data"].get("document_uuids")


async def test_unassigned_selected_resources_trigger_repair_instead_of_silent_loss():
    document = KnowledgeBaseDocumentModel(
        organization_id=11, document_uuid="doc-hours", filename="Hours.pdf"
    )
    capabilities = build_onboarding_capability_catalog(
        [], [document], organization_id=11
    )
    repaired = draft()
    repaired["nodes"][1]["data"]["document_uuids"] = ["doc-hours"]
    generate = AsyncMock(
        side_effect=[
            {"workflow_definition": draft()},
            {"workflow_definition": repaired},
        ]
    )
    result = await generate_with(generate, capabilities=capabilities)
    assert generate.await_count == 2
    assert "Assign every selected document_uuids" in generate.await_args_list[1].args[0]
    assert result["workflow_definition"]["nodes"][1]["data"]["document_uuids"] == [
        "doc-hours"
    ]


@pytest.mark.parametrize(
    "brief, objectives",
    [
        (
            "Book an HVAC visit after checking service eligibility.",
            (
                "Identify heating problem",
                "Check service area",
                "Find appointment",
                "Confirm HVAC visit",
            ),
        ),
        (
            "Tutor Spanish by assessing fluency then practicing conversation.",
            ("Assess Spanish fluency", "Practice Spanish conversation"),
        ),
    ],
)
async def test_different_briefs_retain_distinctive_generated_stage_plans(
    brief, objectives
):
    generate = AsyncMock(
        return_value={"workflow_definition": draft(objectives, brief=brief)}
    )
    result = await generate_with(generate, setup=setup_for(brief))
    assert brief in generate.await_args.args[0]
    stages = [
        node
        for node in result["workflow_definition"]["nodes"]
        if node["type"] == "agentNode"
    ]
    assert tuple(node["data"]["name"] for node in stages) == objectives
    for node, objective in zip(stages, objectives):
        assert objective in node["data"]["prompt"]
        assert brief in node["data"]["prompt"]


async def test_missing_execution_plan_gets_targeted_repair_with_original_brief():
    invalid = draft()
    invalid["nodes"][1]["data"].pop("execution")
    setup = setup_for()
    original_setup = setup.model_dump()
    generate = AsyncMock(
        side_effect=[{"workflow_definition": invalid}, {"workflow_definition": draft()}]
    )
    result = await generate_with(generate, setup=setup)
    repair_prompt = generate.await_args_list[1].args[0]
    assert "structured execution plan" in repair_prompt
    assert setup.agent_brief in repair_prompt
    assert "completion_criteria" in repair_prompt
    assert setup.model_dump() == original_setup
    assert "Actions:" in result["workflow_definition"]["nodes"][1]["data"]["prompt"]


async def test_unknown_requirement_reference_is_repaired_without_adopting_it_as_source():
    invalid = draft()
    invalid["nodes"][1]["data"]["execution"]["requirement_ids"] = ["foreign-1"]
    generate = AsyncMock(
        side_effect=[{"workflow_definition": invalid}, {"workflow_definition": draft()}]
    )
    result = await generate_with(generate)
    repair_prompt = generate.await_args_list[1].args[0]
    assert "authoritative requirement catalog" in repair_prompt
    assert "Book a bicycle repair" in repair_prompt
    assert all(
        "foreign-1" not in node["data"]["prompt"]
        for node in result["workflow_definition"]["nodes"]
    )


async def test_generation_accepts_stage_grounded_in_explicit_behavior_notes():
    setup = setup_for()
    setup.behavior_notes = "Ask for the bicycle model before explaining repair options."
    definition = draft()
    definition["nodes"][1]["data"]["execution"]["requirement_ids"] = ["behavior-1"]
    generate = AsyncMock(return_value={"workflow_definition": definition})
    result = await generate_with(generate, setup=setup)
    assert generate.await_count == 1
    assert (
        setup.behavior_notes
        in result["workflow_definition"]["nodes"][1]["data"]["prompt"]
    )
