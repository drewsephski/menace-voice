from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
from fastapi.testclient import TestClient

from api.schemas.agent_setup import OnboardingSetup
from api.services.workflow.onboarding_revision import (
    preserve_launch_configuration,
    recover_agent_setup,
    revision_resources,
)
from api.services.workflow.onboarding_prompt import ONBOARDING_EXECUTION_MARKER
from api.tests.onboarding_fixtures import draft, setup_for
from api.tests.test_workflow_create_route import _make_test_app


def test_stored_setup_is_authoritative_over_stale_global():
    setup = setup_for("Explain the configured library documentation.")
    definition = {"nodes": [{"type": "globalNode", "data": {"prompt": "Bookings"}}]}
    recovered, source = recover_agent_setup(
        definition, {"agent_setup": setup.model_dump()}, "Docs"
    )
    assert source == "saved"
    assert recovered == setup


def test_legacy_recovery_reports_source_without_inventing_a_new_brief():
    brief = "Collect preferred date and service.\nExplain that the team confirms availability."
    definition = {
        "nodes": [
            {
                "type": "globalNode",
                "data": {
                    "prompt": (
                        f"You are the configured agent, a voice agent configured for: Bookings.\n"
                        f"User's source-of-truth brief: {brief}\nSpeak in multi with a warm tone.\n"
                        "The runtime speech voice is already configured as Menace Voice / default. Never mention it.\n"
                        "Always-follow instruction from the user: Never promise a confirmed booking.\nPerform instructions naturally."
                    )
                },
            }
        ]
    }
    recovered, source = recover_agent_setup(definition, {}, "Booking")
    assert source == "legacy"
    assert recovered.agent_brief == brief
    assert recovered.language == "Follow the caller's language"
    assert recovered.voice_name == "default"
    assert recovered.behavior_notes == "Never promise a confirmed booking."
    assert recover_agent_setup({"nodes": []}, None, "Untitled") == (None, "missing")


def test_revision_preserves_connections_without_sending_them_to_generation():
    original = draft()
    next(node for node in original["nodes"] if node["type"] == "startCall")["data"].update(
        pre_call_fetch_url="https://private.example",
        pre_call_fetch_credential_uuid="credential-1",
    )
    hook = {
        "id": "hook",
        "type": "webhook",
        "data": {
            "endpoint_url": "https://private.example/complete",
            "credential_uuid": "credential-2",
        },
    }
    original["nodes"].append(hook)
    before = deepcopy(original)
    result = preserve_launch_configuration(
        original, draft(("Check library", "Explain API"))
    )
    assert (
        next(node for node in result["nodes"] if node["type"] == "startCall")["data"]["pre_call_fetch_credential_uuid"] == "credential-1"
    )
    assert result["nodes"][-1] == hook
    assert original == before


@pytest.mark.parametrize("kind", ["extraction", "connected", "recording"])
def test_revision_refuses_to_silently_drop_manual_configuration(kind):
    original = draft()
    if kind == "extraction":
        next(node for node in original["nodes"] if node["type"] == "agentNode")["data"]["extraction_enabled"] = True
    elif kind == "recording":
        next(node for node in original["nodes"] if node["type"] == "startCall")["data"]["greeting_recording_id"] = 12
    else:
        original["nodes"].append({"id": "integration", "type": "custom", "data": {}})
        original["edges"].append({"source": "integration", "target": "start"})
    with pytest.raises(ValueError):
        preserve_launch_configuration(original, draft())


def test_revision_deduplicates_selected_resources():
    definition = draft()
    for node in definition["nodes"]:
        node["data"].update(tool_uuids=["tool-1"], document_uuids=["doc-1"])
    assert revision_resources(definition) == (["tool-1"], ["doc-1"])


def test_preview_is_scoped_and_does_not_save_or_publish():
    setup = setup_for("Explain library APIs from documentation.")
    definition = draft(("Identify library", "Explain API"), brief=setup.agent_brief)
    version = SimpleNamespace(
        workflow_json=draft(), workflow_configurations={"max_call_duration": 420}
    )
    client = TestClient(_make_test_app())
    with (
        patch("api.routes.workflow.db_client") as db,
        patch(
            "api.routes.workflow.mps_service_key_client.call_workflow_api",
            AsyncMock(return_value={"workflow_definition": definition}),
        ) as mock_mps,
    ):
        db.get_workflow = AsyncMock(
            return_value=SimpleNamespace(name="Booking", released_definition=version)
        )
        db.get_draft_version = AsyncMock(return_value=None)
        db.get_tools_by_uuids = AsyncMock(return_value=[])
        db.get_documents_by_uuids = AsyncMock(return_value=[])
        response = client.post("/workflow/4/agent-preview", json=setup.model_dump())
    assert response.status_code == 200, response.text
    assert response.json()["agent_setup"]["agent_brief"] == setup.agent_brief
    db.get_workflow.assert_awaited_once_with(4, organization_id=11)
    assert db.get_workflow.await_count == 1
    assert db.get_draft_version.await_count == 1
    assert mock_mps.await_args.kwargs["activity_description"] == setup.agent_brief
    nodes = response.json()["workflow_definition"]["nodes"]
    assert all(
        n["data"].get("add_global_prompt") is True
        for n in nodes
        if n["type"] in {"startCall", "agentNode", "endCall"}
    )
    assert all(
        ONBOARDING_EXECUTION_MARKER in n["data"]["prompt"]
        for n in nodes
        if n["type"] == "agentNode"
    )


def test_preview_denies_foreign_workflow_before_planning():
    client = TestClient(_make_test_app())
    with (
        patch("api.routes.workflow.db_client") as db,
        patch(
            "api.routes.workflow.mps_service_key_client.call_workflow_api",
            AsyncMock(),
        ) as mock_mps,
    ):
        db.get_workflow = AsyncMock(return_value=None)
        response = client.post(
            "/workflow/99/agent-preview", json=setup_for().model_dump()
        )
    assert response.status_code == 404
    mock_mps.assert_not_awaited()
    db.get_workflow.assert_awaited_once_with(99, organization_id=11)


def test_setup_endpoint_returns_exact_saved_brief():
    setup = setup_for("Explain library APIs from documentation.")
    version = SimpleNamespace(
        workflow_json=draft(),
        workflow_configurations={"agent_setup": setup.model_dump()},
    )
    client = TestClient(_make_test_app())
    with patch("api.routes.workflow.db_client") as db:
        db.get_workflow = AsyncMock(
            return_value=SimpleNamespace(name="Docs", released_definition=version)
        )
        db.get_draft_version = AsyncMock(return_value=None)
        response = client.get("/workflow/4/agent-setup")
    assert response.status_code == 200
    assert response.json() == {"source": "saved", "setup": setup.model_dump()}


@pytest.mark.parametrize("field", ["agent_name", "use_case"])
def test_setup_rejects_blank_identity(field):
    values = setup_for().model_dump()
    values[field] = "  "
    with pytest.raises(ValueError):
        OnboardingSetup.model_validate(values)
