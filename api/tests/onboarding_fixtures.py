"""Shared fixtures for agent onboarding workflow tests."""

from itertools import pairwise

from api.schemas.agent_setup import OnboardingSetup


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
        workflow_stages=[
            "Identify the bicycle type and the repair needed.",
            "Collect scheduling details and confirm service expectations.",
            "Summarize the booking request and close the call.",
        ],
    )


def draft(
    stages=("Identify bicycle", "Book repair", "Confirm details"),
    *,
    brief="Book a bicycle repair after collecting the bicycle type.",
):
    nodes = [
        {
            "id": "global",
            "type": "globalNode",
            "position": {"x": -500, "y": 0},
            "data": {
                "name": "Voice and boundaries",
                "prompt": (
                    "You help callers book bicycle repairs after confirming the "
                    "bicycle type. Do not quote prices unless the caller asks."
                ),
            },
        },
        {
            "id": "start",
            "type": "startCall",
            "position": {"x": 0, "y": 0},
            "data": {
                "name": "Welcome",
                "prompt": "Welcome the caller and ask what they need.",
            },
        },
    ]
    nodes.extend(
        {
            "id": f"stage-{index}",
            "type": "agentNode",
            "position": {"x": 400 * (index + 1), "y": 0},
            "data": {
                "name": objective,
                "prompt": f"Complete this task: {objective}. Ask only for missing facts.",
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
    conversational = [node for node in nodes if node["type"] != "globalNode"]
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
            for index, (source, target) in enumerate(pairwise(conversational))
        ],
    }
