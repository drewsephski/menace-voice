import re
from copy import deepcopy
from typing import Annotated, Any

from pydantic import BaseModel, ConfigDict, Field, StringConstraints, ValidationError

_Instruction = Annotated[
    str, StringConstraints(strip_whitespace=True, min_length=1, max_length=2_000)
]
_PLACEHOLDER = re.compile(
    r"(?:(?:stage|step|phase|agent|node)(?:\s*\d+)?|main agenda|core interaction|main interaction)",
    re.IGNORECASE,
)


class AgentExecutionPlan(BaseModel):
    model_config = ConfigDict(extra="forbid")

    objective: _Instruction
    requirement_ids: list[_Instruction] = Field(min_length=1, max_length=12)
    inputs: list[_Instruction] = Field(max_length=12)
    actions: list[_Instruction] = Field(min_length=1, max_length=12)
    completion_criteria: list[_Instruction] = Field(min_length=1, max_length=12)
    failure_behavior: _Instruction


EXECUTION_PLANNING_INSTRUCTIONS = (
    "For every Agent node, data.execution is mandatory: {objective, requirement_ids, "
    "inputs, actions, completion_criteria, failure_behavior}. requirement_ids must be "
    "a nonempty array of exact IDs from the AUTHORITATIVE REQUIREMENT CATALOG that "
    "justify this stage. Reference IDs; do not copy or rewrite source text. The backend "
    "inserts the original requirement text. objective states the local task serving "
    "those requirements. inputs is an array of missing information required for this "
    "task (empty when none); actions is a nonempty array of concrete instructions; "
    "completion_criteria is a nonempty array of observable outcomes; failure_behavior "
    "states the specific fallback when blocked. Write instructions to the agent, not "
    "lines of caller dialogue. Every input, action and outcome must serve the referenced "
    "requirements. Do not introduce unrelated business goals or processes absent from "
    "the brief and explicit behavior notes. Agent prompts are compiled from this plan; "
    "freeform data.prompt cannot substitute for execution. Use descriptive stage names, "
    "never placeholders such as Stage 1 or Main Agenda."
)


def build_onboarding_requirements(
    *, agent_brief: str, behavior_notes: str | None = None
) -> list[dict[str, str]]:
    requirements = []
    for prefix, source, text in (
        ("brief", "agent_brief", agent_brief),
        ("behavior", "behavior_notes", behavior_notes or ""),
    ):
        fragments = [
            part
            for part in re.split(r"\r?\n|(?<=[.!?])\s+(?=[A-Z])", text)
            if part.strip()
        ]
        for index, fragment in enumerate(fragments, 1):
            requirements.append(
                {"id": f"{prefix}-{index}", "source": source, "text": fragment}
            )
    return requirements


def compile_onboarding_execution(
    definition: dict[str, Any], *, agent_brief: str, behavior_notes: str | None = None
) -> dict[str, Any]:
    """Validate source anchors and compile local plans before graph validation."""
    requirements = {
        item["id"]: item["text"]
        for item in build_onboarding_requirements(
            agent_brief=agent_brief, behavior_notes=behavior_notes
        )
    }
    compiled = deepcopy(definition)
    nodes = compiled.get("nodes")
    if not isinstance(nodes, list):
        return compiled
    for node in nodes:
        if not isinstance(node, dict):
            continue
        data = node.get("data")
        if not isinstance(data, dict):
            continue
        if node.get("type") != "agentNode":
            if data.get("execution") is not None:
                raise ValueError(
                    "Only Agent nodes may contain a structured execution plan."
                )
            data.pop("execution", None)
            continue
        try:
            execution = AgentExecutionPlan.model_validate(data.get("execution"))
        except ValidationError as exc:
            details = "; ".join(
                f"{'.'.join(map(str, error['loc'])) or 'execution'}: {error['msg']}"
                for error in exc.errors(include_input=False)
            )
            raise ValueError(
                f"Agent {node.get('id')} needs a structured execution plan. {details}"
            ) from None
        if set(execution.requirement_ids) - requirements.keys():
            raise ValueError(
                f"Agent {node.get('id')} requirement_ids must reference IDs from the authoritative requirement catalog."
            )
        name = data.get("name")
        if (
            isinstance(name, str) and _PLACEHOLDER.fullmatch(name.strip())
        ) or _PLACEHOLDER.fullmatch(execution.objective):
            raise ValueError(
                f"Agent {node.get('id')} needs a specific stage name and objective, not a generic placeholder."
            )
        data["prompt"] = "\n\n".join(
            [
                f"Objective: {execution.objective}",
                "Required input:\n"
                + (
                    "\n".join(f"- {item}" for item in execution.inputs)
                    or "- Use the information already available; no additional input is required."
                ),
                "Actions:\n"
                + "\n".join(
                    f"{index}. {action}"
                    for index, action in enumerate(execution.actions, 1)
                ),
                "Complete when:\n"
                + "\n".join(f"- {item}" for item in execution.completion_criteria),
                f"If blocked: {execution.failure_behavior}",
                "Source requirements:\n"
                + "\n".join(
                    f"- {requirements[requirement_id]}"
                    for requirement_id in dict.fromkeys(execution.requirement_ids)
                ),
            ]
        )
        data.pop("execution", None)
    return compiled


def repair_execution_plan(value: object) -> dict[str, Any] | None:
    if not isinstance(value, dict):
        return None
    return {
        key: item
        for key, item in value.items()
        if key in AgentExecutionPlan.model_fields
        and (
            isinstance(item, str)
            or isinstance(item, list)
            and all(isinstance(entry, str) for entry in item)
        )
    }
