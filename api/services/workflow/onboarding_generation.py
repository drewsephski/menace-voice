import json
from collections.abc import Awaitable, Callable, Sequence
from typing import Any

from loguru import logger

from api.schemas.agent_setup import AgentOnboardingContext, OnboardingSetup
from api.services.workflow.mcp_prompt import (
    append_mcp_usage_instructions,
    build_mcp_usage_instructions,
)
from api.services.workflow.onboarding_capabilities import (
    validate_onboarding_resource_assignments,
)
from api.services.workflow.onboarding_execution import (
    EXECUTION_PLANNING_INSTRUCTIONS,
    build_onboarding_requirements,
    compile_onboarding_execution,
    repair_execution_plan,
)
from api.services.workflow.onboarding_layout import (
    InvalidOnboardingWorkflowLayout,
    validate_onboarding_layout,
)
from api.services.workflow.onboarding_prompt import (
    build_onboarding_generation_prompt,
    enhance_onboarding_workflow_prompts,
)

__all__ = ["AgentOnboardingContext", "OnboardingSetup", "generate_onboarding_workflow"]


async def generate_onboarding_workflow(
    *,
    generate: Callable[[str], Awaitable[dict[str, Any]]],
    setup: OnboardingSetup,
    capabilities: dict[str, Any],
    has_pre_call_fetch: bool,
    has_post_call_webhook: bool,
    selected_tools: Sequence[Any],
) -> dict[str, Any]:
    prompt = build_onboarding_generation_prompt(
        **setup.model_dump(),
        capabilities=capabilities,
        has_pre_call_fetch=has_pre_call_fetch,
        has_post_call_webhook=has_post_call_webhook,
    )
    requirements = build_onboarding_requirements(
        agent_brief=setup.agent_brief, behavior_notes=setup.behavior_notes
    )
    prompt += (
        "\n\nSTRUCTURED STAGE PLANS\n"
        + EXECUTION_PLANNING_INSTRUCTIONS
        + "\n\nAUTHORITATIVE REQUIREMENT CATALOG\n"
        + json.dumps(requirements, ensure_ascii=False)
    )
    request_prompt = prompt
    for attempt in range(2):
        result = await generate(request_prompt)
        definition = (
            result.get("workflow_definition") if isinstance(result, dict) else None
        )
        try:
            if not isinstance(definition, dict):
                raise InvalidOnboardingWorkflowLayout(
                    "Return a workflow_definition object."
                )
            prompt_setup = setup.model_dump()
            generated_name = result.get("name")
            if (
                setup.agent_name == "the configured agent"
                and isinstance(generated_name, str)
                and generated_name.strip()
            ):
                prompt_setup["agent_name"] = generated_name.strip()
            compiled = compile_onboarding_execution(
                definition,
                agent_brief=setup.agent_brief,
                behavior_notes=setup.behavior_notes,
            )
            hardened = enhance_onboarding_workflow_prompts(compiled, **prompt_setup)
            validate_onboarding_resource_assignments(hardened, capabilities)
            tools_by_uuid = {tool.tool_uuid: tool for tool in selected_tools}
            for node in hardened["nodes"]:
                assigned = [
                    tools_by_uuid[uid] for uid in node["data"].get("tool_uuids", [])
                ]
                instructions = build_mcp_usage_instructions(assigned)
                if instructions:
                    node["data"] = append_mcp_usage_instructions(
                        {"nodes": [node]}, instructions
                    )["nodes"][0]["data"]
            validate_onboarding_layout(hardened)
            return {**result, "workflow_definition": hardened}
        except ValueError as exc:
            logger.warning("Onboarding draft validation failed: {}", str(exc)[:4_000])
            if attempt:
                raise InvalidOnboardingWorkflowLayout(str(exc)) from exc
            logger.info("Repairing generated onboarding workflow before persistence")
            # Only conversation content goes back to the generator; never return
            # model-generated connection settings or credentials in repair feedback.
            draft = _repair_draft(definition)
            request_prompt = (
                prompt
                + "\n\nREPAIR THIS DRAFT\n"
                + json.dumps(draft, ensure_ascii=False)
                + "\nVALIDATION FEEDBACK\n"
                + str(exc)[:4_000]
                + "\nReturn the corrected full workflow. Preserve useful node IDs, names, "
                "tailored prompts, resource assignments, and branches. Fix the stated "
                "defect; do not replace the plan with generic stages."
            )
    raise InvalidOnboardingWorkflowLayout(
        "Workflow generation did not return a valid draft."
    )


def _repair_draft(definition: object) -> dict[str, Any]:
    if not isinstance(definition, dict):
        return {}
    nodes = definition.get("nodes")
    edges = definition.get("edges")
    return {
        "nodes": [
            {
                "id": node.get("id"),
                "type": node.get("type"),
                "data": {
                    **(
                        {"execution": repair_execution_plan(node["data"]["execution"])}
                        if "execution" in node["data"]
                        else {}
                    ),
                    **{
                        key: value
                        for key, value in node["data"].items()
                        if key
                        in {
                            "name",
                            "prompt",
                            "tool_uuids",
                            "document_uuids",
                            "mcp_tool_filters",
                        }
                    },
                },
            }
            for node in (nodes[:14] if isinstance(nodes, list) else [])
            if isinstance(node, dict) and isinstance(node.get("data"), dict)
        ],
        "edges": [
            {
                "id": edge.get("id"),
                "source": edge.get("source"),
                "target": edge.get("target"),
                "data": {
                    key: value
                    for key, value in edge["data"].items()
                    if key in {"label", "condition"}
                },
            }
            for edge in (edges[:64] if isinstance(edges, list) else [])
            if isinstance(edge, dict) and isinstance(edge.get("data"), dict)
        ],
    }
