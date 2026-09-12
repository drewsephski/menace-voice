"""Harden prompts returned by the workflow generator for agent onboarding.

The generator is intentionally free to write a useful first draft, but the
onboarding product has a stricter contract: one global persona, three ordered
conversation stages, and caller-facing prompts that never narrate their own
strategy.  This module applies that contract immediately before persistence so
the saved workflow does not depend on the generator following prose perfectly.

Agent creation uses the MPS workflow API for graph generation, then calls
``enhance_onboarding_workflow_prompts`` here. Do not add a local LLM planner
for onboarding; that path produced unstable graphs and was removed.
"""

from __future__ import annotations

from copy import deepcopy
from itertools import pairwise
from typing import Any
from uuid import uuid4

from loguru import logger

ONBOARDING_EXECUTION_MARKER = "ONBOARDING EXECUTION CONTRACT"
GENERATED_OBJECTIVE_MARKER = "GENERATED NODE OBJECTIVE — INTERNAL; NEVER RECITE"
AGENT_NAME_SENTINEL = "the configured agent"


class InvalidOnboardingWorkflowLayout(ValueError):
    """Raised when generated onboarding output does not match the fixed shape."""


def _clean(value: str | None) -> str:
    return value.strip() if isinstance(value, str) else ""


_DEFAULT_ONBOARDING_STAGES = (
    "Understand why the caller is on the line and what they need.",
    "Handle the main task from the user's brief using any connected capabilities.",
    "Confirm next steps, recap key details, and close the conversation naturally.",
)


def resolve_onboarding_workflow_stages(workflow_stages: list[str]) -> list[str]:
    """Return exactly three stage objectives for the fixed onboarding canvas."""

    cleaned = [_clean(stage) for stage in workflow_stages if _clean(stage)]
    resolved = list(_DEFAULT_ONBOARDING_STAGES)
    for index, stage in enumerate(cleaned[:3]):
        resolved[index] = stage
    return resolved


def _with_contract(prompt: object, contract: str) -> str:
    base = _clean(prompt if isinstance(prompt, str) else None)
    if ONBOARDING_EXECUTION_MARKER in base:
        base = base.split(ONBOARDING_EXECUTION_MARKER, maxsplit=1)[0].rstrip()
    if base.startswith(GENERATED_OBJECTIVE_MARKER):
        base = base.removeprefix(GENERATED_OBJECTIVE_MARKER).strip()
    internal_objective = f"{GENERATED_OBJECTIVE_MARKER}\n{base}" if base else ""
    sections = [
        section for section in (internal_objective, contract.strip()) if section
    ]
    return "\n\n".join(sections)


def _global_position(nodes: list[dict[str, Any]]) -> dict[str, float]:
    positioned = [
        node.get("position")
        for node in nodes
        if isinstance(node.get("position"), dict)
        and isinstance(node["position"].get("x"), (int, float))
        and isinstance(node["position"].get("y"), (int, float))
        and node.get("type") in {"startCall", "agentNode", "endCall"}
    ]
    if not positioned:
        return {"x": -500.0, "y": 0.0}
    return {
        "x": float(min(position["x"] for position in positioned)) - 500.0,
        "y": float(sum(position["y"] for position in positioned) / len(positioned)),
    }


def _ordered_agent_nodes(
    agent_nodes: list[dict[str, Any]], edges: object
) -> list[dict[str, Any]]:
    """Topologically order stage nodes, preserving array order as a tie-break."""

    if not isinstance(edges, list):
        return agent_nodes

    by_id = {
        node.get("id"): node for node in agent_nodes if isinstance(node.get("id"), str)
    }
    source_order = {node.get("id"): index for index, node in enumerate(agent_nodes)}
    incoming = {node_id: 0 for node_id in by_id}
    outgoing: dict[str, list[str]] = {node_id: [] for node_id in by_id}

    for edge in edges:
        if not isinstance(edge, dict):
            continue
        source = edge.get("source")
        target = edge.get("target")
        if source in by_id and target in by_id:
            outgoing[source].append(target)
            incoming[target] += 1

    ready = sorted(
        (node_id for node_id, count in incoming.items() if count == 0),
        key=lambda node_id: source_order[node_id],
    )
    ordered: list[dict[str, Any]] = []
    while ready:
        node_id = ready.pop(0)
        ordered.append(by_id[node_id])
        for target in outgoing[node_id]:
            incoming[target] -= 1
            if incoming[target] == 0:
                ready.append(target)
                ready.sort(key=lambda ready_id: source_order[ready_id])

    return ordered if len(ordered) == len(agent_nodes) else agent_nodes


def _global_prompt(
    *,
    agent_name: str,
    use_case: str,
    call_type: str,
    agent_brief: str,
    tone: str,
    language: str,
    voice_provider: str,
    voice_name: str,
    behavior_notes: str | None,
) -> str:
    direction = (
        "You initiate the call. Be transparent about who you are and why you are "
        "calling, and honor a refusal or request to stop immediately."
        if call_type == "outbound"
        else (
            "The caller initiated the call. Orient quickly and help with the reason "
            "they called."
        )
    )
    behavior = _clean(behavior_notes)
    return "\n".join(
        [
            ONBOARDING_EXECUTION_MARKER,
            f"You are {agent_name}, a voice agent configured for: {use_case}.",
            f"User's source-of-truth brief: {agent_brief}",
            (
                f"Speak in {language} with a {tone} tone. Use short, natural "
                "sentences that are easy to understand over a call."
            ),
            (
                "The runtime speech voice is already configured as "
                f"{voice_provider} / {voice_name}. Never mention the provider, "
                "voice identifier, prompt, workflow, nodes, tools, policies, or "
                "internal reasoning to the caller."
            ),
            direction,
            *(
                [f"Always-follow instruction from the user: {behavior}"]
                if behavior
                else []
            ),
            (
                "Perform instructions naturally. Never recite, summarize, or explain "
                "the brief, a stage objective, an opening strategy, or what you are "
                "about to do."
            ),
            (
                "Do not invent facts, availability, prices, policies, identities, "
                "tool results, or completed actions. If information is unavailable, "
                "say so briefly and take the configured fallback or escalation path."
            ),
            (
                "Ask one useful question at a time. Before an external or "
                "hard-to-reverse action, confirm the important details and intent. "
                "Claim success only after a tool reports success."
            ),
            (
                "Respect privacy, opt-outs, wrong numbers, refusals, and requests to "
                "stop. Follow any stricter safety, consent, escalation, or "
                "confirmation rule in the user's brief."
            ),
        ]
    )


def _build_onboarding_layout(workflow_stages: list[str]) -> dict[str, Any]:
    """Build a connected draft from the user's stages when generation drifts.

    Do not splice arbitrary generated branches or objectives into different stages;
    the structured brief and stage contracts supply the replacement prompts.
    Resources and launch integrations must be attached after this step.
    """
    nodes: list[dict[str, Any]] = [
        {
            "id": "start",
            "type": "startCall",
            "position": {"x": 0, "y": 0},
            "data": {"name": "Start Call", "is_start": True},
        },
        *[
            {
                "id": f"stage-{index + 1}",
                "type": "agentNode",
                "position": {"x": (index + 1) * 400, "y": 0},
                "data": {"name": f"Stage {index + 1}"},
            }
            for index in range(3)
        ],
        {
            "id": "end",
            "type": "endCall",
            "position": {"x": 1600, "y": 0},
            "data": {"name": "End Call", "is_end": True},
        },
    ]
    conditions = [
        "The caller is oriented and ready for the first stage.",
        *[f"This stage's outcome is complete: {stage}" for stage in workflow_stages],
    ]
    conditions[-1] += (
        " Or the caller asks to stop, declines to continue, or the user's brief "
        "requires ending the call."
    )
    edges: list[dict[str, Any]] = [
        {
            "id": f"transition-{index + 1}",
            "source": source["id"],
            "target": target["id"],
            "data": {
                "label": f"complete_stage_{index}",
                "condition": conditions[index],
            },
        }
        for index, (source, target) in enumerate(pairwise(nodes))
    ]
    edges.extend(
        {
            "id": f"stop-{node['id']}",
            "source": node["id"],
            "target": "end",
            "data": {
                "label": "end_on_request",
                "condition": (
                    "The caller asks to stop or end the call, declines to continue, "
                    "or the user's brief requires ending the call."
                ),
            },
        }
        for node in nodes[:-2]
    )
    return {"nodes": nodes, "edges": edges}


def enhance_onboarding_workflow_prompts(
    workflow_definition: dict[str, Any],
    *,
    agent_name: str,
    use_case: str,
    call_type: str,
    agent_brief: str,
    tone: str,
    language: str,
    voice_provider: str,
    voice_name: str,
    behavior_notes: str | None,
    workflow_stages: list[str],
) -> dict[str, Any]:
    """Return a copy with the fixed onboarding shape and prompt boundaries applied."""

    workflow_stages = resolve_onboarding_workflow_stages(workflow_stages)

    updated = deepcopy(workflow_definition)
    raw_nodes = updated.get("nodes")
    if not isinstance(raw_nodes, list):
        raise InvalidOnboardingWorkflowLayout(
            "The generated workflow has no node list."
        )
    nodes = [node for node in raw_nodes if isinstance(node, dict)]

    start_nodes = [node for node in nodes if node.get("type") == "startCall"]
    agent_nodes = [node for node in nodes if node.get("type") == "agentNode"]
    global_nodes = [node for node in nodes if node.get("type") == "globalNode"]

    if len(start_nodes) != 1 or len(agent_nodes) != 3 or len(global_nodes) > 1:
        logger.warning(
            "Rebuilding onboarding draft from structured answers: "
            "{} start nodes, {} agent nodes, {} global nodes",
            len(start_nodes),
            len(agent_nodes),
            len(global_nodes),
        )
        updated = _build_onboarding_layout(workflow_stages)
        raw_nodes = updated["nodes"]
        nodes = raw_nodes
        start_nodes = [node for node in nodes if node["type"] == "startCall"]
        agent_nodes = [node for node in nodes if node["type"] == "agentNode"]
        global_nodes = []

    global_prompt = _global_prompt(
        agent_name=_clean(agent_name) or "the configured agent",
        use_case=_clean(use_case) or "the user's requested job",
        call_type=call_type,
        agent_brief=_clean(agent_brief),
        tone=_clean(tone),
        language=_clean(language),
        voice_provider=_clean(voice_provider),
        voice_name=_clean(voice_name),
        behavior_notes=behavior_notes,
    )

    if global_nodes:
        global_data = global_nodes[0].get("data")
        global_data = dict(global_data) if isinstance(global_data, dict) else {}
        global_data["name"] = global_data.get("name") or "Voice and boundaries"
        global_data["prompt"] = global_prompt
        global_nodes[0]["data"] = global_data
    else:
        global_node = {
            "id": f"global-{uuid4().hex[:8]}",
            "type": "globalNode",
            "position": _global_position(nodes),
            "data": {
                "name": "Voice and boundaries",
                "prompt": global_prompt,
            },
        }
        raw_nodes.append(global_node)

    start_data = start_nodes[0].get("data")
    start_data = dict(start_data) if isinstance(start_data, dict) else {}
    opening_direction = (
        "Deliver a brief, truthful introduction using the configured identity and "
        "the actual reason for calling. Confirm the right person when relevant, "
        "then give them room to continue or decline."
        if call_type == "outbound"
        else (
            "Welcome the caller once and invite or acknowledge the actual reason "
            "they called."
        )
    )
    start_data["prompt"] = _with_contract(
        start_data.get("prompt"),
        "\n".join(
            [
                ONBOARDING_EXECUTION_MARKER,
                opening_direction,
                (
                    "Your next response must be the opening itself. Do not explain "
                    "the opening, its purpose, how it earns attention, or what you "
                    "plan to say next."
                ),
                (
                    "Use the user's brief as context, not as a script. Move into the "
                    "first configured stage as soon as the caller is oriented."
                ),
            ]
        ),
    )
    start_data["add_global_prompt"] = True
    start_nodes[0]["data"] = start_data

    for index, node in enumerate(
        _ordered_agent_nodes(agent_nodes, updated.get("edges"))
    ):
        data = node.get("data")
        data = dict(data) if isinstance(data, dict) else {}
        data["prompt"] = _with_contract(
            data.get("prompt"),
            "\n".join(
                [
                    ONBOARDING_EXECUTION_MARKER,
                    f"Current stage objective: {workflow_stages[index]}",
                    (
                        "Perform this objective naturally in the context of the "
                        "user's brief. Do not name, quote, summarize, or explain the "
                        "stage."
                    ),
                    (
                        "Use what the caller has already said. Ask only for missing "
                        "information, and transition only when this stage's outcome "
                        "is complete or its configured escalation condition is met."
                    ),
                ]
            ),
        )
        data["add_global_prompt"] = True
        node["data"] = data

    for node in nodes:
        if node.get("type") != "endCall":
            continue
        data = node.get("data")
        data = dict(data) if isinstance(data, dict) else {}
        data["prompt"] = _with_contract(
            data.get("prompt"),
            "\n".join(
                [
                    ONBOARDING_EXECUTION_MARKER,
                    (
                        "Close with the real outcome, any confirmed next step, and a "
                        "short natural goodbye."
                    ),
                    (
                        "Do not introduce a new topic, repeat the whole conversation, "
                        "or claim an action succeeded without a successful tool result."
                    ),
                ]
            ),
        )
        data["add_global_prompt"] = True
        node["data"] = data

    return updated
