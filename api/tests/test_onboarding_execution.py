from copy import deepcopy

import pytest

from api.services.workflow.onboarding_execution import (
    build_onboarding_requirements,
    compile_onboarding_execution,
    repair_execution_plan,
)

BRIEF = "Explain the API authentication setup and troubleshoot errors using the technical documentation."


def execution_workflow():
    return {
        "nodes": [
            {
                "id": "auth",
                "type": "agentNode",
                "data": {
                    "name": "Explain authentication setup",
                    "prompt": "Hi there! Would you like to book an appointment?",
                    "execution": {
                        "objective": "Determine which authentication setup step needs explanation.",
                        "requirement_ids": ["brief-1"],
                        "inputs": [
                            "The authentication step the caller is trying to complete."
                        ],
                        "actions": [
                            "Explain that step using the selected technical documentation."
                        ],
                        "completion_criteria": [
                            "The caller understands the authentication step or identifies a specific error."
                        ],
                        "failure_behavior": "If documentation does not establish the answer, explain the gap and request the exact error without secrets.",
                    },
                },
            }
        ],
        "edges": [],
    }


def test_compiles_actionable_instructions_from_source_and_discards_caller_scripts():
    definition = execution_workflow()
    original = deepcopy(definition)
    result = compile_onboarding_execution(definition, agent_brief=BRIEF)
    assert definition == original
    data = result["nodes"][0]["data"]
    assert "execution" not in data
    assert "book an appointment" not in data["prompt"]
    assert "Hi there" not in data["prompt"]
    for heading in (
        "Source requirements:",
        "Objective:",
        "Required input:",
        "Actions:",
        "Complete when:",
        "If blocked:",
    ):
        assert heading in data["prompt"]
    assert "Explain the API authentication setup" in data["prompt"]
    assert "exact error without secrets" in data["prompt"]


@pytest.mark.parametrize(
    "field",
    [
        "objective",
        "requirement_ids",
        "inputs",
        "actions",
        "completion_criteria",
        "failure_behavior",
    ],
)
def test_every_execution_dimension_is_required(field):
    definition = execution_workflow()
    definition["nodes"][0]["data"]["execution"].pop(field)
    with pytest.raises(ValueError, match=field):
        compile_onboarding_execution(definition, agent_brief=BRIEF)


@pytest.mark.parametrize(
    "field,value",
    [
        ("actions", []),
        ("completion_criteria", []),
        ("failure_behavior", "  "),
        ("actions", ["  "]),
    ],
)
def test_rejects_empty_action_completion_and_failure_instructions(field, value):
    definition = execution_workflow()
    definition["nodes"][0]["data"]["execution"][field] = value
    with pytest.raises(ValueError, match="structured execution plan"):
        compile_onboarding_execution(definition, agent_brief=BRIEF)


@pytest.mark.parametrize("name", ["Stage 1", "Main Agenda", "node", "Core interaction"])
def test_rejects_placeholder_names_even_with_a_valid_requirement_reference(name):
    definition = execution_workflow()
    definition["nodes"][0]["data"]["name"] = name
    with pytest.raises(ValueError, match="generic placeholder"):
        compile_onboarding_execution(definition, agent_brief=BRIEF)


def test_rejects_plan_grounded_in_a_different_brief_without_changing_original_source():
    definition = execution_workflow()
    definition["nodes"][0]["data"]["execution"]["requirement_ids"] = ["foreign-1"]
    original = deepcopy(definition)
    with pytest.raises(ValueError, match="authoritative requirement catalog"):
        compile_onboarding_execution(definition, agent_brief=BRIEF)
    assert definition == original


def test_no_additional_inputs_are_needed_when_previous_stages_already_collected_them():
    definition = execution_workflow()
    definition["nodes"][0]["data"]["execution"]["inputs"] = []
    result = compile_onboarding_execution(definition, agent_brief=BRIEF)
    assert "no additional input is required" in result["nodes"][0]["data"]["prompt"]


def test_repair_feedback_excludes_unknown_nested_settings():
    plan = execution_workflow()["nodes"][0]["data"]["execution"]
    plan["api_key"] = "SECRET"
    plan["inputs"] = [{"secret": "SECRET"}]
    feedback = repair_execution_plan(plan)
    assert "api_key" not in feedback
    assert "inputs" not in feedback
    assert feedback["objective"] == plan["objective"]


def test_optional_null_execution_on_non_agent_nodes_is_removed_before_dto_validation():
    definition = execution_workflow()
    definition["nodes"].append(
        {
            "id": "start",
            "type": "startCall",
            "data": {
                "name": "Welcome",
                "prompt": "Welcome the caller",
                "execution": None,
            },
        }
    )
    result = compile_onboarding_execution(definition, agent_brief=BRIEF)
    assert "execution" not in result["nodes"][1]["data"]


def test_accepts_exact_behavior_instruction_as_authoritative_source():
    definition = execution_workflow()
    quote = "Ask for the library, version, and actual question."
    definition["nodes"][0]["data"]["execution"]["requirement_ids"] = ["behavior-1"]
    result = compile_onboarding_execution(
        definition,
        agent_brief=BRIEF,
        behavior_notes=quote + " Do not request credentials.",
    )
    assert quote in result["nodes"][0]["data"]["prompt"]


@pytest.mark.parametrize(
    "behavior_notes", [None, "", "   ", "Ask for the library and version."]
)
def test_behavior_notes_do_not_authorize_foreign_quotes(behavior_notes):
    definition = execution_workflow()
    definition["nodes"][0]["data"]["execution"]["requirement_ids"] = ["foreign-1"]
    with pytest.raises(ValueError, match="authoritative requirement catalog"):
        compile_onboarding_execution(
            definition, agent_brief=BRIEF, behavior_notes=behavior_notes
        )


def test_requirement_catalog_has_stable_ids_and_preserves_original_source_fragments():
    brief = "Explain API authentication. Troubleshoot version errors.\nShow the documented fix."
    notes = "Ask which library and version. Never request credentials."
    requirements = build_onboarding_requirements(
        agent_brief=brief, behavior_notes=notes
    )
    assert [item["id"] for item in requirements] == [
        "brief-1",
        "brief-2",
        "brief-3",
        "behavior-1",
        "behavior-2",
    ]
    for requirement in requirements:
        source = brief if requirement["source"] == "agent_brief" else notes
        assert requirement["text"] in source
    assert requirements[1]["text"] == "Troubleshoot version errors."
    assert requirements[-1]["text"] == "Never request credentials."


def test_compiled_prompt_leads_with_local_objective_and_ends_with_authoritative_sources():
    definition = execution_workflow()
    result = compile_onboarding_execution(definition, agent_brief=BRIEF)
    prompt = result["nodes"][0]["data"]["prompt"]
    assert prompt.startswith("Objective:")
    assert prompt.index("Source requirements:") > prompt.index("If blocked:")
    assert prompt.endswith(BRIEF)


def test_missing_behavior_catalog_entry_cannot_be_referenced():
    definition = execution_workflow()
    definition["nodes"][0]["data"]["execution"]["requirement_ids"] = ["behavior-1"]
    with pytest.raises(ValueError, match="authoritative requirement catalog"):
        compile_onboarding_execution(definition, agent_brief=BRIEF, behavior_notes="  ")
