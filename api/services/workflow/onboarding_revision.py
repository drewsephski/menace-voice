import re
from copy import deepcopy
from typing import Any, Literal

from pydantic import ValidationError

from api.schemas.agent_setup import OnboardingSetup

CONVERSATION_TYPES = {"startCall", "agentNode", "endCall", "globalNode"}


def recover_agent_setup(
    definition: dict[str, Any], configurations: dict[str, Any] | None, name: str
) -> tuple[OnboardingSetup | None, Literal["saved", "legacy", "missing"]]:
    stored = (configurations or {}).get("agent_setup")
    if isinstance(stored, dict):
        try:
            return OnboardingSetup.model_validate(stored), "saved"
        except ValidationError:
            pass
    prompt = next(
        (
            n.get("data", {}).get("prompt", "")
            for n in definition.get("nodes", [])
            if n.get("type") == "globalNode"
        ),
        "",
    )
    if not isinstance(prompt, str):
        return None, "missing"
    brief = re.search(
        r"User's source-of-truth brief: (.*?)(?=\n(?:The configured brief|Speak in)|$)",
        prompt,
        re.DOTALL,
    )
    if not brief or not brief.group(1).strip():
        return None, "missing"
    behavior = re.search(
        r"Always-follow instruction from the user: (.*?)(?=\nPerform instructions naturally\.|$)",
        prompt,
        re.DOTALL,
    )
    language_tone = re.search(r"Speak in (.*?) with a (.*?) tone\.", prompt)
    voice = re.search(r"configured as ([^\n]+?) / ([^\n]+?)\. Never mention", prompt)
    use_case = re.search(r"a voice agent configured for: ([^\n]+)", prompt)
    language = (
        language_tone.group(1) if language_tone else "Follow the caller's language"
    )
    if language in {"multi", "auto"}:
        language = "Follow the caller's language"
    try:
        setup = OnboardingSetup(
            agent_name=name,
            use_case=use_case.group(1).removesuffix(".") if use_case else name,
            call_type="outbound" if "You initiate the call." in prompt else "inbound",
            agent_brief=brief.group(1).strip(),
            tone=language_tone.group(2) if language_tone else "natural and helpful",
            language=language,
            voice_provider=voice.group(1) if voice else "Workspace voice",
            voice_name=voice.group(2) if voice else "Configured voice",
            behavior_notes=behavior.group(1).strip() if behavior else None,
            workflow_stages=[],
        )
        return setup, "legacy"
    except ValidationError:
        return None, "missing"


def revision_resources(definition: dict[str, Any]) -> tuple[list[str], list[str]]:
    def collect(field: str) -> list[str]:
        return list(
            dict.fromkeys(
                uid
                for node in definition.get("nodes", [])
                for uid in (node.get("data", {}).get(field) or [])
            )
        )

    return collect("tool_uuids"), collect("document_uuids")


def preserve_launch_configuration(
    original: dict[str, Any], generated: dict[str, Any]
) -> dict[str, Any]:
    nodes = original.get("nodes", [])
    attached = {
        edge[key] for edge in original.get("edges", []) for key in ("source", "target")
    }
    extras = [node for node in nodes if node["type"] not in CONVERSATION_TYPES]
    if any(node["id"] in attached for node in extras):
        raise ValueError(
            "This workflow has connected integration nodes. Edit its prompts individually to preserve their routing."
        )
    if any(node.get("data", {}).get("extraction_enabled") for node in nodes):
        raise ValueError(
            "This workflow has custom variable extraction. Edit its prompts individually to preserve those mappings."
        )
    result = deepcopy(generated)
    # Keep saved connection configuration out of the planner and restore it only
    # after the new conversation has passed validation.
    old_start = next((n for n in nodes if n["type"] == "startCall"), None)
    new_start = next(n for n in result["nodes"] if n["type"] == "startCall")
    if old_start:
        for key, value in old_start.get("data", {}).items():
            if key.startswith("pre_call_fetch") or key in {
                "delayed_start",
                "delayed_start_duration",
            }:
                new_start["data"][key] = deepcopy(value)
    if any(n.get("data", {}).get("greeting_recording_id") for n in nodes):
        raise ValueError(
            "This workflow uses a recorded greeting. Edit its prompts individually to preserve the recording."
        )
    for node in extras:
        restored = deepcopy(node)
        if restored["id"] in {n["id"] for n in result["nodes"]}:
            raise ValueError(
                "Generated node IDs overlap with a saved integration. Please generate the preview again."
            )
        result["nodes"].append(restored)
    return result
