from datetime import UTC, datetime
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from api.enums import CallType
from api.routes.workflow import _attach_launch_integrations, router
from api.services.auth.depends import get_user


def _make_test_app() -> FastAPI:
    app = FastAPI()
    app.include_router(router)
    app.dependency_overrides[get_user] = lambda: SimpleNamespace(
        id=1,
        provider_id="provider-1",
        selected_organization_id=11,
    )
    return app


def test_attach_launch_integrations_fills_empty_webhook_and_start_call():
    definition = {
        "nodes": [
            {"id": "start", "type": "startCall", "data": {"prompt": "Hi"}},
            {"id": "hook", "type": "webhook", "data": {"endpoint_url": ""}},
        ]
    }

    updated = _attach_launch_integrations(
        definition,
        call_type="outbound",
        pre_call_fetch_url="https://crm.example.com/lookup",
        pre_call_fetch_credential_uuid="cred-1",
        post_call_webhook_url="https://hooks.example.com/calls",
        post_call_webhook_credential_uuid="cred-2",
    )

    assert len(updated["nodes"]) == 2
    start_data = updated["nodes"][0]["data"]
    webhook_data = updated["nodes"][1]["data"]
    assert start_data["pre_call_fetch_url"] == "https://crm.example.com/lookup"
    assert start_data["pre_call_fetch_mode"] == "outbound"
    assert start_data["pre_call_fetch_credential_uuid"] == "cred-1"
    assert webhook_data["endpoint_url"] == "https://hooks.example.com/calls"
    assert webhook_data["credential_uuid"] == "cred-2"
    assert webhook_data["payload_template"]["call_id"] == "{{workflow_run_id}}"


def test_create_workflow_rejects_invalid_trigger_path_before_db_write():
    app = _make_test_app()
    client = TestClient(app)

    with patch("api.routes.workflow.db_client") as mock_db:
        response = client.post(
            "/workflow/create/definition",
            json={
                "name": "Support Agent",
                "workflow_definition": {
                    "nodes": [
                        {
                            "id": "trigger-1",
                            "type": "trigger",
                            "data": {"trigger_path": "support/west"},
                        }
                    ],
                    "edges": [],
                },
            },
        )

    assert response.status_code == 422
    detail = response.json()["detail"]
    assert detail["is_valid"] is False
    assert detail["errors"][0]["field"] == "data.trigger_path"
    assert "single URL path segment" in detail["errors"][0]["message"]
    assert mock_db.mock_calls == []


def test_create_workflow_rejects_duplicate_api_triggers_before_db_write():
    app = _make_test_app()
    client = TestClient(app)

    with patch("api.routes.workflow.db_client") as mock_db:
        response = client.post(
            "/workflow/create/definition",
            json={
                "name": "Support Agent",
                "workflow_definition": {
                    "nodes": [
                        {
                            "id": "trigger-1",
                            "type": "trigger",
                            "data": {"trigger_path": "support_west"},
                        },
                        {
                            "id": "trigger-2",
                            "type": "trigger",
                            "data": {"trigger_path": "support_east"},
                        },
                    ],
                    "edges": [],
                },
            },
        )

    assert response.status_code == 422
    detail = response.json()["detail"]
    assert detail["is_valid"] is False
    assert detail["errors"][0]["kind"] == "workflow"
    assert "at most one API Trigger" in detail["errors"][0]["message"]
    assert mock_db.mock_calls == []


def test_update_workflow_rejects_duplicate_transition_tools_before_db_write():
    app = _make_test_app()
    client = TestClient(app)

    with patch("api.routes.workflow.db_client") as mock_db:
        response = client.put(
            "/workflow/33",
            json={
                "workflow_definition": {
                    "nodes": [],
                    "edges": [
                        {
                            "id": "edge-1",
                            "source": "agent-1",
                            "target": "end-1",
                            "data": {
                                "label": "Go to sales",
                                "condition": "Caller wants sales.",
                            },
                        },
                        {
                            "id": "edge-2",
                            "source": "agent-1",
                            "target": "end-2",
                            "data": {
                                "label": "go-to-sales",
                                "condition": "Caller asks for sales.",
                            },
                        },
                    ],
                }
            },
        )

    assert response.status_code == 409
    detail = response.json()["detail"]
    assert detail["is_valid"] is False
    assert {error["id"] for error in detail["errors"]} == {"edge-1", "edge-2"}
    assert all(error["kind"] == "edge" for error in detail["errors"])
    assert all(error["field"] == "data.label" for error in detail["errors"])
    assert all(
        'Transition tool name "go_to_sales" is duplicated' in error["message"]
        for error in detail["errors"]
    )
    assert mock_db.mock_calls == []


def test_update_workflow_rejects_transition_custom_tool_collision_before_db_write():
    app = _make_test_app()
    client = TestClient(app)
    tool = SimpleNamespace(
        tool_uuid="tool-uuid-1",
        name="Transfer Callback",
        category="transfer_call",
    )

    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.services.workflow.tool_name_validation.db_client.get_tools_by_uuids",
            AsyncMock(return_value=[tool]),
        ) as get_tools_mock,
    ):
        response = client.put(
            "/workflow/33",
            json={
                "workflow_definition": {
                    "nodes": [
                        {
                            "id": "agent-1",
                            "type": "agentNode",
                            "data": {
                                "name": "Agent",
                                "tool_uuids": ["tool-uuid-1"],
                            },
                        }
                    ],
                    "edges": [
                        {
                            "id": "edge-1",
                            "source": "agent-1",
                            "target": "end-1",
                            "data": {
                                "label": "transfer callback",
                                "condition": "Caller requested a callback.",
                            },
                        }
                    ],
                }
            },
        )

    assert response.status_code == 409
    detail = response.json()["detail"]
    assert detail["is_valid"] is False
    assert detail["errors"] == [
        {
            "kind": "edge",
            "id": "edge-1",
            "field": "data.label",
            "message": (
                'Transition tool name "transfer_callback" conflicts with custom '
                'tool "Transfer Callback" attached to this node. Use a unique '
                "edge label or rename the custom tool."
            ),
        }
    ]
    get_tools_mock.assert_awaited_once_with(["tool-uuid-1"], 11)
    assert mock_db.mock_calls == []


def test_create_workflow_from_template_attaches_selected_resources_atomically():
    app = _make_test_app()
    client = TestClient(app)
    created_at = datetime.now(UTC)
    generated_definition = {
        "nodes": [
            {
                "id": "start",
                "type": "startCall",
                "data": {"prompt": "Greet the caller."},
            },
            {
                "id": "agent",
                "type": "agentNode",
                "data": {"name": "Agent", "prompt": "Help the caller."},
            },
            {"id": "end", "type": "endCall", "data": {}},
        ],
        "edges": [],
    }
    workflow = SimpleNamespace(
        id=42,
        name="Maya",
        status="draft",
        created_at=created_at,
        current_definition_id=7,
        template_context_variables=None,
        call_disposition_codes=None,
        workflow_configurations=None,
    )

    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.routes.workflow.ensure_template_tools",
            AsyncMock(return_value=["builtin-1"]),
        ),
        patch(
            "api.routes.workflow.mps_service_key_client.call_workflow_api",
            AsyncMock(return_value={"workflow_definition": generated_definition}),
        ) as generate_workflow,
    ):
        mock_db.get_tools_by_uuids = AsyncMock(
            return_value=[
                SimpleNamespace(
                    tool_uuid="mcp-1",
                    category="mcp",
                    name="Exa web search",
                    definition={
                        "type": "mcp",
                        "config": {"url": "https://mcp.exa.ai/mcp"},
                    },
                ),
                SimpleNamespace(
                    tool_uuid="builtin-1",
                    category="transfer_call",
                    name="Transfer Call",
                    definition={"type": "transfer_call", "config": {}},
                ),
            ]
        )
        mock_db.get_documents_by_uuids = AsyncMock(
            return_value=[SimpleNamespace(document_uuid="doc-1")]
        )
        mock_db.create_workflow = AsyncMock(return_value=workflow)

        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "inbound",
                "use_case": "Receptionist",
                "activity_description": "Answer calls",
                "name": "Maya",
                "template_id": "receptionist",
                "tool_uuids": ["mcp-1", "mcp-1"],
                "document_uuids": ["doc-1"],
            },
        )

    assert response.status_code == 200
    generate_workflow.assert_awaited_once()
    create_kwargs = mock_db.create_workflow.await_args.kwargs
    assert create_kwargs["name"] == "Maya"
    assert all(
        node["data"].get("tool_uuids") == ["mcp-1", "builtin-1"]
        and node["data"].get("document_uuids") == ["doc-1"]
        for node in create_kwargs["workflow_definition"]["nodes"]
        if node["type"] in {"startCall", "agentNode"}
    )
    assert all(
        "MCP tool guidance:" in node["data"]["prompt"]
        for node in create_kwargs["workflow_definition"]["nodes"]
        if node["type"] in {"startCall", "agentNode"}
    )
    assert create_kwargs["workflow_definition"]["nodes"][2]["data"] == {}


@pytest.mark.parametrize("agent_count", [1, 2, 3, 4, 8])
def test_create_workflow_from_template_hardens_onboarding_prompts_and_layout(
    agent_count,
):
    app = _make_test_app()
    client = TestClient(app)
    created_at = datetime.now(UTC)
    generated_definition = {
        "nodes": [
            {
                "id": "start",
                "type": "startCall",
                "position": {"x": 0, "y": 0},
                "data": {
                    "name": "Welcome",
                    "prompt": "Describe an attention-getting opening.",
                },
            },
            *[
                {
                    "id": f"agent-{index}",
                    "type": "agentNode",
                    "position": {"x": (index + 1) * 400, "y": 0},
                    "data": {
                        "name": f"Investigate mystery {index}",
                        "prompt": f"Ask playful sock question {index}.",
                        "execution": {
                            "objective": f"Investigate sock mystery {index}",
                            "requirement_ids": ["brief-1"],
                            "inputs": [],
                            "actions": [f"Ask playful sock question {index}."],
                            "completion_criteria": ["The caller answered the sock question."],
                            "failure_behavior": "Stop when the caller requests it.",
                        },
                        "tool_uuids": ["mcp-1"] if index == 0 else [],
                        "document_uuids": ["doc-1"] if index == 0 else [],
                    },
                }
                for index in range(agent_count)
            ],
            {
                "id": "end",
                "type": "endCall",
                "position": {"x": 1600, "y": 0},
                "data": {"name": "Goodbye", "prompt": "End."},
            },
        ],
        "edges": [
            {
                "id": f"e-{index}",
                "source": source,
                "target": target,
                "data": {
                    "label": f"complete_{index}",
                    "condition": "The current question has been answered.",
                },
            }
            for index, (source, target) in enumerate(
                zip(
                    ["start", *[f"agent-{index}" for index in range(agent_count)]],
                    [*[f"agent-{index}" for index in range(agent_count)], "end"],
                    strict=True,
                )
            )
        ],
    }
    workflow = SimpleNamespace(
        id=42,
        name="Maya",
        status="draft",
        created_at=created_at,
        current_definition_id=7,
        template_context_variables=None,
        call_disposition_codes=None,
        workflow_configurations=None,
    )

    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.routes.workflow.ensure_template_tools",
            AsyncMock(return_value=[]),
        ),
        patch(
            "api.routes.workflow.plan_onboarding_workflow",
            AsyncMock(return_value={"workflow_definition": generated_definition}),
        ) as mock_generator,
    ):
        mock_db.get_tools_by_uuids = AsyncMock(
            return_value=[
                SimpleNamespace(
                    tool_uuid="mcp-1",
                    organization_id=11,
                    description="Reference documentation",
                    category="mcp",
                    name="Documentation",
                    definition={
                        "type": "mcp",
                        "config": {"url": "https://docs.example.com/mcp"},
                    },
                )
            ]
        )
        mock_db.get_documents_by_uuids = AsyncMock(
            return_value=[
                SimpleNamespace(
                    document_uuid="doc-1", organization_id=11, filename="Reference"
                )
            ]
        )
        mock_db.create_workflow = AsyncMock(return_value=workflow)

        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "outbound",
                "use_case": "Self-test prank call",
                "activity_description": "Structured generator brief",
                "name": "Maya",
                "tool_uuids": ["mcp-1"],
                "document_uuids": ["doc-1"],
                "pre_call_fetch_url": "https://crm.example.com/lookup",
                "post_call_webhook_url": "https://hooks.example.com/calls",
                "onboarding_context": {
                    "agent_brief": "Call me about my organized sock drawer.",
                    "tone": "playful",
                    "language": "English (US)",
                    "voice_provider": "Menace Voice",
                    "voice_name": "ember",
                    "behavior_notes": "Stop when I say the test is over.",
                    "workflow_stages": [
                        "Introduce the sock mystery.",
                        "Ask two playful questions.",
                        "Reveal the joke and close.",
                    ],
                },
            },
        )

    assert response.status_code == 200
    generator_prompt = mock_generator.await_args.args[0]
    assert "Call me about my organized sock drawer." in generator_prompt
    assert "Stop when I say the test is over." in generator_prompt
    assert "Ask two playful questions." in generator_prompt
    assert '"name": "Documentation"' in generator_prompt
    assert '"document_uuid": "doc-1"' in generator_prompt
    assert "Pre-call record lookup configured: True" in generator_prompt
    assert "Post-call webhook configured: True" in generator_prompt
    assert "Structured generator brief" not in generator_prompt
    saved_setup = mock_db.create_workflow.await_args.kwargs["workflow_configurations"]["agent_setup"]
    assert saved_setup["agent_brief"] == "Call me about my organized sock drawer."
    assert saved_setup["behavior_notes"] == "Stop when I say the test is over."
    assert saved_setup["call_type"] == "outbound"
    definition = mock_db.create_workflow.await_args.kwargs["workflow_definition"]
    assert (
        len([node for node in definition["nodes"] if node["type"] == "agentNode"])
        == agent_count
    )
    assert (
        len([node for node in definition["nodes"] if node["type"] == "globalNode"]) == 1
    )
    start = next(node for node in definition["nodes"] if node["type"] == "startCall")
    assert "opening itself" in start["data"]["prompt"]
    assert start["data"]["pre_call_fetch_url"] == "https://crm.example.com/lookup"
    webhook = next(node for node in definition["nodes"] if node["type"] == "webhook")
    assert webhook["data"]["endpoint_url"] == "https://hooks.example.com/calls"
    for node in definition["nodes"]:
        if node["type"] in {"startCall", "agentNode"}:
            if node["id"] == "agent-0":
                assert node["data"]["tool_uuids"] == ["mcp-1"]
                assert node["data"]["document_uuids"] == ["doc-1"]
                assert "MCP tool guidance:" in node["data"]["prompt"]
            else:
                assert not node["data"].get("tool_uuids")
                assert not node["data"].get("document_uuids")
                assert "MCP tool guidance:" not in node["data"]["prompt"]
    assert all(
        node["data"].get("add_global_prompt") is True
        for node in definition["nodes"]
        if node["type"] in {"startCall", "agentNode", "endCall"}
    )


def test_create_workflow_from_template_attaches_launch_integrations():
    app = _make_test_app()
    client = TestClient(app)
    created_at = datetime.now(UTC)
    generated_definition = {
        "nodes": [
            {
                "id": "start",
                "type": "startCall",
                "position": {"x": 0, "y": 0},
                "data": {"prompt": "Greet the caller."},
            },
            {
                "id": "agent",
                "type": "agentNode",
                "data": {"name": "Agent", "prompt": "Help the caller."},
            },
            {"id": "end", "type": "endCall", "data": {}},
        ],
        "edges": [],
    }
    workflow = SimpleNamespace(
        id=42,
        name="Maya",
        status="draft",
        created_at=created_at,
        current_definition_id=7,
        template_context_variables=None,
        call_disposition_codes=None,
        workflow_configurations=None,
    )

    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.routes.workflow.ensure_template_tools",
            AsyncMock(return_value=[]),
        ),
        patch(
            "api.routes.workflow.mps_service_key_client.call_workflow_api",
            AsyncMock(return_value={"workflow_definition": generated_definition}),
        ),
    ):
        mock_db.get_tools_by_uuids = AsyncMock(return_value=[])
        mock_db.get_documents_by_uuids = AsyncMock(return_value=[])
        mock_db.create_workflow = AsyncMock(return_value=workflow)

        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "inbound",
                "use_case": "Receptionist",
                "activity_description": "Answer calls",
                "name": "Maya",
                "pre_call_fetch_url": "https://crm.example.com/lookup",
                "post_call_webhook_url": "https://hooks.example.com/calls",
            },
        )

    assert response.status_code == 200
    nodes = mock_db.create_workflow.await_args.kwargs["workflow_definition"]["nodes"]
    start_node = next(node for node in nodes if node["type"] == "startCall")
    webhook_node = next(node for node in nodes if node["type"] == "webhook")
    assert start_node["data"]["pre_call_fetch_url"] == "https://crm.example.com/lookup"
    assert start_node["data"]["pre_call_fetch_mode"] == "inbound"
    assert start_node["data"]["pre_call_fetch_credential_uuid"] is None
    assert webhook_node["data"]["endpoint_url"] == "https://hooks.example.com/calls"
    assert webhook_node["data"]["http_method"] == "POST"
    assert webhook_node["data"]["enabled"] is True
    assert "call_disposition" in webhook_node["data"]["payload_template"]


def test_create_workflow_from_template_persists_validated_model_configuration():
    app = _make_test_app()
    client = TestClient(app)
    created_at = datetime.now(UTC)
    generated_definition = {
        "nodes": [{"id": "start", "type": "startCall", "data": {"prompt": "Hi"}}],
        "edges": [],
    }
    workflow = SimpleNamespace(
        id=42,
        name="Maya",
        status="draft",
        created_at=created_at,
        current_definition_id=7,
        template_context_variables=None,
        call_disposition_codes=None,
        workflow_configurations={
            "model_configuration_v2_override": {
                "version": 2,
                "mode": "dograh",
                "dograh": {
                    "api_key": "service-key",
                    "voice": "recommended-voice",
                    "speed": 1,
                    "language": "en-US",
                },
            }
        },
    )

    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.routes.workflow.ensure_template_tools",
            AsyncMock(return_value=[]),
        ),
        patch(
            "api.routes.workflow.mps_service_key_client.call_workflow_api",
            AsyncMock(return_value={"workflow_definition": generated_definition}),
        ),
        patch(
            "api.routes.workflow.get_resolved_ai_model_configuration",
            AsyncMock(return_value=SimpleNamespace(organization_configuration=None)),
        ),
        patch(
            "api.routes.workflow.UserConfigurationValidator.validate",
            AsyncMock(),
        ) as validate_configuration,
    ):
        mock_db.get_tools_by_uuids = AsyncMock(return_value=[])
        mock_db.get_documents_by_uuids = AsyncMock(return_value=[])
        mock_db.create_workflow = AsyncMock(return_value=workflow)

        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "inbound",
                "use_case": "Receptionist",
                "activity_description": "Answer calls",
                "name": "Maya",
                "workflow_configurations": workflow.workflow_configurations,
            },
        )

    assert response.status_code == 200
    create_kwargs = mock_db.create_workflow.await_args.kwargs
    saved_override = create_kwargs["workflow_configurations"][
        "model_configuration_v2_override"
    ]
    assert saved_override["dograh"]["voice"] == "recommended-voice"
    assert saved_override["dograh"]["language"] == "en-US"
    validate_configuration.assert_awaited_once()


def test_create_workflow_from_template_rejects_invalid_launch_url():
    app = _make_test_app()
    client = TestClient(app)

    with patch(
        "api.routes.workflow.mps_service_key_client.call_workflow_api",
        AsyncMock(),
    ) as generate_workflow:
        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "inbound",
                "use_case": "Receptionist",
                "activity_description": "Answer calls",
                "pre_call_fetch_url": "crm.example.com/lookup",
            },
        )

    assert response.status_code == 422
    assert "http://" in response.json()["detail"]
    generate_workflow.assert_not_awaited()


def test_create_workflow_from_template_rejects_unknown_launch_credential():
    app = _make_test_app()
    client = TestClient(app)

    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.routes.workflow.mps_service_key_client.call_workflow_api",
            AsyncMock(),
        ) as generate_workflow,
    ):
        mock_db.get_credential_by_uuid = AsyncMock(return_value=None)

        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "inbound",
                "use_case": "Receptionist",
                "activity_description": "Answer calls",
                "post_call_webhook_url": "https://hooks.example.com/calls",
                "post_call_webhook_credential_uuid": "missing-cred",
            },
        )

    assert response.status_code == 404
    assert "missing-cred" in response.json()["detail"]
    generate_workflow.assert_not_awaited()


def test_create_workflow_from_template_rejects_unavailable_selected_resource():
    app = _make_test_app()
    client = TestClient(app)

    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.routes.workflow.mps_service_key_client.call_workflow_api",
            AsyncMock(),
        ) as generate_workflow,
    ):
        mock_db.get_tools_by_uuids = AsyncMock(return_value=[])

        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "inbound",
                "use_case": "Receptionist",
                "activity_description": "Answer calls",
                "tool_uuids": ["missing-tool"],
            },
        )

    assert response.status_code == 404
    assert "missing-tool" in response.json()["detail"]
    generate_workflow.assert_not_awaited()


def test_create_workflow_run_uses_draft_and_template_context():
    app = _make_test_app()
    client = TestClient(app)

    workflow = SimpleNamespace(
        id=33,
        released_definition=SimpleNamespace(
            id=77,
            template_context_variables={"name": "published"},
        ),
        current_definition=None,
        template_context_variables={"name": "workflow"},
    )
    draft = SimpleNamespace(
        id=88,
        template_context_variables={"name": "draft", "draft_only": "kept"},
    )
    run = SimpleNamespace(
        id=501,
        workflow_id=workflow.id,
        name="WR-test",
        mode="smallwebrtc",
        created_at=datetime.now(UTC),
        definition_id=draft.id,
        initial_context={"name": "draft", "draft_only": "kept"},
        gathered_context={},
    )

    with patch("api.routes.workflow.db_client") as mock_db:
        mock_db.get_workflow = AsyncMock(return_value=workflow)
        mock_db.get_draft_version = AsyncMock(return_value=draft)
        mock_db.create_workflow_run = AsyncMock(return_value=run)

        response = client.post(
            f"/workflow/{workflow.id}/runs",
            json={"name": "WR-test", "mode": "smallwebrtc"},
        )

    assert response.status_code == 200
    mock_db.get_draft_version.assert_awaited_once_with(workflow.id)
    create_kwargs = mock_db.create_workflow_run.await_args.kwargs
    assert create_kwargs["definition_id"] == draft.id
    assert create_kwargs["initial_context"] == {
        "name": "draft",
        "draft_only": "kept",
        "direction": "inbound",
    }
    assert create_kwargs["call_type"] == CallType.INBOUND


def test_create_workflow_webrtc_run_can_simulate_outbound_from_template_context():
    app = _make_test_app()
    client = TestClient(app)

    workflow = SimpleNamespace(id=33, current_definition=None)
    draft = SimpleNamespace(
        id=88,
        template_context_variables={"direction": " OUTBOUND "},
    )
    run = SimpleNamespace(
        id=501,
        workflow_id=workflow.id,
        name="WR-test",
        mode="smallwebrtc",
        created_at=datetime.now(UTC),
        definition_id=draft.id,
        initial_context={"direction": "outbound"},
        gathered_context={},
    )

    with patch("api.routes.workflow.db_client") as mock_db:
        mock_db.get_workflow = AsyncMock(return_value=workflow)
        mock_db.get_draft_version = AsyncMock(return_value=draft)
        mock_db.create_workflow_run = AsyncMock(return_value=run)

        response = client.post(
            f"/workflow/{workflow.id}/runs",
            json={"name": "WR-test", "mode": "smallwebrtc"},
        )

    assert response.status_code == 200
    create_kwargs = mock_db.create_workflow_run.await_args.kwargs
    assert create_kwargs["call_type"] == CallType.OUTBOUND
    assert create_kwargs["initial_context"]["direction"] == "outbound"


def test_onboarding_invalid_drafts_never_reach_persistence():
    client = TestClient(_make_test_app())
    with (
        patch("api.routes.workflow.db_client") as mock_db,
        patch(
            "api.routes.workflow.plan_onboarding_workflow",
            AsyncMock(return_value={"workflow_definition": {"nodes": [], "edges": []}}),
        ) as generate,
    ):
        mock_db.create_workflow = AsyncMock()
        response = client.post(
            "/workflow/create/template",
            json={
                "call_type": "inbound",
                "use_case": "Spanish tutor",
                "activity_description": "Practice vocabulary",
                "name": "Tutor QA",
                "onboarding_context": {
                    "agent_brief": "Practice Spanish vocabulary and gently correct mistakes.",
                    "tone": "friendly",
                    "language": "Spanish",
                    "voice_provider": "Menace Voice",
                    "voice_name": "ember",
                },
            },
        )
    assert response.status_code == 502
    assert "No agent was saved" in response.json()["detail"]
    assert generate.await_count == 2
    mock_db.create_workflow.assert_not_awaited()
