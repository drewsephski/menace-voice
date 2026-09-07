"""General workflow writes enforce the same clone rules as dedicated assignment."""

from datetime import UTC, datetime
from types import SimpleNamespace
from unittest.mock import DEFAULT, AsyncMock, Mock

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from api.routes import workflow as routes
from api.schemas.ai_model_configuration import EffectiveAIModelConfiguration
from api.services.auth.depends import get_user
from api.services.configuration import ai_model_configuration as model_configuration
from api.services.voice_cloning import service as voice_cloning

CLONE_ID = "b014cbbd-c163-4f29-9c5c-3f79fcb32667"
ORGANIZATION_ID = 11


@pytest.fixture
def workflow_api(monkeypatch):
    lease = SimpleNamespace(held=False, events=[])

    async def claim(*args):
        assert not lease.held
        lease.held = True
        lease.events.append("claim")
        return "test-token"

    async def release(*args):
        assert lease.held
        lease.events.append("release")
        lease.held = False

    claim_lease = AsyncMock(side_effect=claim)
    release_lease = AsyncMock(side_effect=release)
    monkeypatch.setattr(routes.db_client, "claim_configuration_lease", claim_lease)
    monkeypatch.setattr(routes.db_client, "release_configuration_lease", release_lease)
    draft = SimpleNamespace(
        id=2,
        workflow_json={"nodes": [], "edges": []},
        workflow_configurations={"voice_clone_id": CLONE_ID},
        template_context_variables={},
        version_number=None,
        status="draft",
    )
    workflow = SimpleNamespace(
        id=12,
        name="Support",
        status="active",
        created_at=datetime.now(UTC),
        current_definition_id=1,
        call_disposition_codes=None,
        released_definition=draft,
    )

    async def save(**kwargs):
        if (kwargs["workflow_configurations"] or {}).get("voice_clone_id"):
            assert lease.held
        lease.events.append("save")
        if kwargs["workflow_configurations"] is not None:
            draft.workflow_configurations = kwargs["workflow_configurations"]
        return workflow

    update = AsyncMock(side_effect=save)

    async def publish_draft(*args):
        if (draft.workflow_configurations or {}).get("voice_clone_id"):
            assert lease.held
        lease.events.append("publish")
        return DEFAULT

    publish = AsyncMock(
        side_effect=publish_draft,
        return_value=SimpleNamespace(
            id=2, version_number=2, status="published", published_at=datetime.now(UTC)
        ),
    )
    monkeypatch.setattr(
        routes.db_client, "get_workflow", AsyncMock(return_value=workflow)
    )

    async def read_draft(*args):
        lease.events.append("read_locked" if lease.held else "read_unlocked")
        return draft

    get_draft = AsyncMock(side_effect=read_draft)
    monkeypatch.setattr(routes.db_client, "get_draft_version", get_draft)
    monkeypatch.setattr(routes.db_client, "update_workflow", update)
    monkeypatch.setattr(routes.db_client, "publish_workflow_draft", publish)
    monkeypatch.setattr(
        routes, "_validate_workflow_definition", AsyncMock(return_value=[])
    )
    monkeypatch.setattr(routes, "capture_event", Mock())

    async def prepare(config, **kwargs):
        return config

    monkeypatch.setattr(routes, "apply_external_pbx_mapping_policy", prepare)
    resolved = AsyncMock(
        return_value=model_configuration.ResolvedAIModelConfiguration(
            effective=EffectiveAIModelConfiguration(), source="empty"
        )
    )
    monkeypatch.setattr(
        model_configuration, "get_resolved_ai_model_configuration", resolved
    )
    # The save route imports this resolver directly for legacy override validation.
    monkeypatch.setattr(routes, "get_resolved_ai_model_configuration", resolved)
    monkeypatch.setattr(routes.UserConfigurationValidator, "validate", AsyncMock())

    async def lookup_clone(*args):
        assert lease.held
        lease.events.append("validate_clone")
        return DEFAULT

    get_clone = AsyncMock(
        side_effect=lookup_clone,
        return_value=SimpleNamespace(
            id=CLONE_ID,
            organization_id=ORGANIZATION_ID,
            status="ready",
            provider_voice_id="provider-voice",
            credential_source="platform",
        ),
    )
    monkeypatch.setattr(voice_cloning.db_client, "get_voice_clone", get_clone)
    credentials = AsyncMock(return_value=("test-key", "platform"))
    monkeypatch.setattr(voice_cloning, "credentials", credentials)

    app = FastAPI()
    app.include_router(routes.router)
    app.dependency_overrides[get_user] = lambda: SimpleNamespace(
        id=1, provider_id="provider-1", selected_organization_id=ORGANIZATION_ID
    )
    return SimpleNamespace(
        client=TestClient(app),
        draft=draft,
        update=update,
        publish=publish,
        get_clone=get_clone,
        resolved=resolved,
        credentials=credentials,
        lease=lease,
        claim_lease=claim_lease,
        release_lease=release_lease,
        get_draft=get_draft,
    )


def _write(api, operation, config=None):
    if operation == "publish":
        if config is not None:
            api.draft.workflow_configurations = config
        return api.client.post("/workflow/12/publish")
    return api.client.put(
        "/workflow/12",
        json={"workflow_configurations": config or {"voice_clone_id": CLONE_ID}},
    )


@pytest.mark.parametrize("operation", ["save", "publish"])
@pytest.mark.parametrize("missing_reason", ["foreign", "deleted"])
def test_missing_or_foreign_clone_is_rejected(workflow_api, operation, missing_reason):
    # The organization-scoped DB lookup hides foreign and deleted rows identically.
    workflow_api.get_clone.return_value = None
    response = _write(workflow_api, operation)

    assert response.status_code == 404
    assert response.json()["detail"] == "Voice clone not found."
    workflow_api.get_clone.assert_awaited_once_with(CLONE_ID, ORGANIZATION_ID)
    workflow_api.update.assert_not_awaited()
    workflow_api.publish.assert_not_awaited()
    workflow_api.credentials.assert_not_awaited()


@pytest.mark.parametrize("operation", ["save", "publish"])
@pytest.mark.parametrize("status", ["verification_required", "deleting"])
def test_unready_clone_is_rejected(workflow_api, operation, status):
    workflow_api.get_clone.return_value.status = status
    response = _write(workflow_api, operation)

    assert response.status_code == 409
    assert "not ready" in response.json()["detail"]
    workflow_api.update.assert_not_awaited()
    workflow_api.publish.assert_not_awaited()
    workflow_api.credentials.assert_not_awaited()


@pytest.mark.parametrize("operation", ["save", "publish"])
@pytest.mark.parametrize("realtime_source", ["organization", "workflow_override"])
def test_realtime_configuration_rejects_clone(workflow_api, operation, realtime_source):
    config = {"voice_clone_id": CLONE_ID}
    if realtime_source == "organization":
        workflow_api.resolved.return_value.effective.is_realtime = True
    else:
        config["model_overrides"] = {"is_realtime": True}
    response = _write(workflow_api, operation, config)

    assert response.status_code == 409
    assert "pipeline" in response.json()["detail"]
    workflow_api.update.assert_not_awaited()
    workflow_api.publish.assert_not_awaited()
    workflow_api.credentials.assert_not_awaited()


@pytest.mark.parametrize("operation", ["save", "publish"])
def test_ready_organization_clone_is_accepted(workflow_api, operation):
    response = _write(workflow_api, operation)

    assert response.status_code == 200, response.text
    workflow_api.get_clone.assert_awaited_once_with(CLONE_ID, ORGANIZATION_ID)
    workflow_api.credentials.assert_awaited_once_with(ORGANIZATION_ID, "platform")
    workflow_api.claim_lease.assert_awaited_once()
    workflow_api.release_lease.assert_awaited_once_with(
        ORGANIZATION_ID, "voice_cloning_operation", "test-token"
    )
    events = workflow_api.lease.events
    assert events.index("claim") < events.index("validate_clone")
    assert events.index("validate_clone") < events.index(operation)
    assert events.index(operation) < events.index("release")
    assert not workflow_api.lease.held
    if operation == "save":
        assert workflow_api.update.await_args.kwargs["workflow_configurations"] == {
            "voice_clone_id": CLONE_ID
        }
        assert response.json()["workflow_configurations"] == {
            "voice_clone_id": CLONE_ID
        }
    else:
        workflow_api.publish.assert_awaited_once_with(12)
        assert events.index("claim") < events.index("read_locked")
        assert events.index("read_locked") < events.index("validate_clone")


@pytest.mark.parametrize(
    ("body", "replacement"),
    [
        ({"name": "Renamed"}, None),
        ({"workflow_configurations": None}, None),
        ({"workflow_configurations": {}}, {}),
        ({"workflow_configurations": {"voice_clone_id": None}}, {}),
        (
            {"workflow_configurations": {"max_call_duration": 600}},
            {"max_call_duration": 600},
        ),
    ],
)
def test_clone_free_save_preserves_configuration_replacement_semantics(
    workflow_api, body, replacement
):
    response = workflow_api.client.put("/workflow/12", json=body)

    assert response.status_code == 200, response.text
    assert (
        workflow_api.update.await_args.kwargs["workflow_configurations"] == replacement
    )
    expected = {"voice_clone_id": CLONE_ID} if replacement is None else replacement
    assert response.json()["workflow_configurations"] == expected
    workflow_api.resolved.assert_not_awaited()
    workflow_api.get_clone.assert_not_awaited()
    workflow_api.claim_lease.assert_not_awaited()


@pytest.mark.parametrize("config", [None, {}, {"voice_clone_id": None}])
def test_clone_free_publish_does_not_resolve_models(workflow_api, config):
    workflow_api.draft.workflow_configurations = config
    response = workflow_api.client.post("/workflow/12/publish")

    assert response.status_code == 200, response.text
    workflow_api.publish.assert_awaited_once_with(12)
    workflow_api.resolved.assert_not_awaited()
    workflow_api.get_clone.assert_not_awaited()
    workflow_api.claim_lease.assert_not_awaited()


@pytest.mark.parametrize("clone_id", [123, True, [], {}, "", "x" * 37])
def test_invalid_clone_id_type_or_length_is_rejected(workflow_api, clone_id):
    response = workflow_api.client.put(
        "/workflow/12", json={"workflow_configurations": {"voice_clone_id": clone_id}}
    )

    assert response.status_code == 422
    workflow_api.update.assert_not_awaited()
    workflow_api.get_clone.assert_not_awaited()


@pytest.mark.parametrize("operation", ["save", "publish"])
def test_busy_clone_lease_rejects_write_before_validation(workflow_api, operation):
    workflow_api.claim_lease.side_effect = None
    workflow_api.claim_lease.return_value = None
    response = _write(workflow_api, operation)

    assert response.status_code == 409
    assert "Another voice operation" in response.json()["detail"]
    workflow_api.get_clone.assert_not_awaited()
    workflow_api.update.assert_not_awaited()
    workflow_api.publish.assert_not_awaited()
    workflow_api.release_lease.assert_not_awaited()


def test_publish_validates_draft_reread_under_lease(workflow_api):
    replacement_clone_id = "9501625f-b7ee-47d9-aef8-19dde3c390f4"

    async def read_draft(*args):
        if workflow_api.lease.held:
            return SimpleNamespace(
                workflow_json={"nodes": [], "edges": []},
                workflow_configurations={"voice_clone_id": replacement_clone_id},
            )
        return workflow_api.draft

    workflow_api.get_draft.side_effect = read_draft
    response = workflow_api.client.post("/workflow/12/publish")

    assert response.status_code == 200, response.text
    assert workflow_api.get_draft.await_count == 2
    workflow_api.get_clone.assert_awaited_once_with(
        replacement_clone_id, ORGANIZATION_ID
    )
    workflow_api.publish.assert_awaited_once_with(12)
    assert not workflow_api.lease.held


def test_publish_rejects_draft_removed_before_lease_acquired(workflow_api):
    workflow_api.get_draft.side_effect = [workflow_api.draft, None]
    response = workflow_api.client.post("/workflow/12/publish")

    assert response.status_code == 400
    assert response.json()["detail"] == "No draft to publish"
    workflow_api.get_clone.assert_not_awaited()
    workflow_api.publish.assert_not_awaited()
    workflow_api.release_lease.assert_awaited_once()
    assert not workflow_api.lease.held
