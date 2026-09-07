import asyncio
import json
from typing import Any, Literal

from loguru import logger
from pipecat.processors.aggregators.llm_context import LLMContext
from pipecat.services.openai.base_llm import BaseOpenAILLMService
from pydantic import BaseModel, Field

from api.db.models import UserModel
from api.services.configuration.ai_model_configuration import (
    get_effective_ai_model_configuration_for_workflow,
)
from api.services.gen_ai.json_parser import parse_llm_json
from api.services.pipecat.service_factory import create_llm_service
from api.services.workflow.onboarding_execution import (
    EXECUTION_PLANNING_INSTRUCTIONS,
    AgentExecutionPlan,
)

ONBOARDING_PLANNING_TIMEOUT_SECONDS = 90
ONBOARDING_PLANNING_MAX_TOKENS = 12_000


class OnboardingPlanningError(ValueError):
    pass


class _Position(BaseModel):
    x: float
    y: float


class _NodeData(BaseModel):
    name: str
    prompt: str
    execution: AgentExecutionPlan | None = None
    tool_uuids: list[str] = Field(default_factory=list)
    document_uuids: list[str] = Field(default_factory=list)
    mcp_tool_filters: dict[str, list[str]] | None = None


class _Node(BaseModel):
    id: str
    type: Literal["startCall", "agentNode", "endCall", "globalNode"]
    position: _Position
    data: _NodeData


class _EdgeData(BaseModel):
    label: str
    condition: str


class _Edge(BaseModel):
    id: str
    source: str
    target: str
    data: _EdgeData


class _Definition(BaseModel):
    nodes: list[_Node] = Field(min_length=4, max_length=14)
    edges: list[_Edge] = Field(max_length=64)


class _Plan(BaseModel):
    name: str
    workflow_definition: _Definition


_PLANNING_INSTRUCTION = (
    "You plan executable conversational workflows for Menace Voice. Return only one JSON "
    "object matching the supplied schema, with a name and workflow_definition. Honor the "
    "configured agent name when provided; otherwise choose a short descriptive name from "
    "the task. Decompose the actual job into useful distinct Agent stages, and branch when "
    "different caller intents or results require different work. Never collapse a multi-step "
    "task into a generic Main Agenda node. Follow the requested 1 to 8 Agent limit without "
    "forcing a fixed count. Preserve meaningful branches and objectives in a repair. "
    "Only describe authorized capabilities; do not call tools or invent their results. "
    "Keep each stage prompt specific to its objective, required inputs, authorized "
    "operations, completion criteria, and failure paths. Respect all setup constraints. "
    "Include nonempty prompts and descriptive names, numeric node positions, and unique "
    "edge labels with explicit routing conditions. Global has no edges. Never include "
    "credentials, provider configuration, URLs, recording IDs, or webhook configuration. "
    "Do not include explanatory text outside the JSON object.\n\nOUTPUT SCHEMA\n"
    + json.dumps(_Plan.model_json_schema())
    + "\n\n"
    + EXECUTION_PLANNING_INSTRUCTIONS
)


async def plan_onboarding_workflow(
    prompt: str,
    *,
    user: UserModel,
    workflow_configurations: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Use the configured text model; graph validation/repair belongs to generation."""
    if not user.selected_organization_id:
        raise OnboardingPlanningError(
            "Select an organization before creating an agent."
        )
    llm = None
    try:
        async with asyncio.timeout(ONBOARDING_PLANNING_TIMEOUT_SECONDS):
            configuration = await get_effective_ai_model_configuration_for_workflow(
                organization_id=user.selected_organization_id,
                workflow_configurations=workflow_configurations,
            )
            if configuration.llm is None:
                raise OnboardingPlanningError(
                    "Configure a language model before creating an agent."
                )
            llm = create_llm_service(configuration, usage_context="agent_onboarding")
            context = LLMContext()
            context.set_messages([{"role": "user", "content": prompt}])
            response = await llm.run_inference(
                context,
                max_tokens=ONBOARDING_PLANNING_MAX_TOKENS,
                system_instruction=_PLANNING_INSTRUCTION,
            )
            try:
                parsed = parse_llm_json(response) if isinstance(response, str) else {}
            except ValueError:
                parsed = {}
            if not isinstance(parsed, dict):
                return {"workflow_definition": {}}
            result = {"workflow_definition": parsed.get("workflow_definition", {})}
            name = parsed.get("name")
            if isinstance(name, str) and 0 < len(name.strip()) <= 255:
                result["name"] = name.strip()
            return result
    except TimeoutError:
        raise OnboardingPlanningError(
            "Agent planning timed out. Please try creating the agent again."
        ) from None
    except OnboardingPlanningError:
        raise
    except Exception:  # noqa: BLE001 - Provider exceptions may contain credentials and request data.
        raise OnboardingPlanningError(
            "The configured language model could not plan this agent. Check its connection and available quota, then retry."
        ) from None
    finally:
        if llm is not None:
            try:
                async with asyncio.timeout(5):
                    try:
                        await llm.cleanup()
                    finally:
                        if isinstance(llm, BaseOpenAILLMService):
                            await llm._client.close()
            except Exception:  # noqa: BLE001 - Cleanup must not replace the planning result or expose provider data.
                logger.warning(
                    "Could not finish closing the onboarding planner model connection"
                )
