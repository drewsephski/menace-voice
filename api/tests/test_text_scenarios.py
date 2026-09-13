from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest
from fastapi import HTTPException
from pydantic import ValidationError

from api.routes import workflow_text_scenarios as routes
from api.services.workflow import text_scenario_execution as execution
from api.services.workflow.text_scenarios import (
    SaveScenarioRequest,
    ScenarioAssertions,
    evaluate_scenario,
    regression_snapshot,
    scenario_messages,
)


def definition(nodes=None):
    return SimpleNamespace(
        id=12,
        workflow_json={
            "nodes": nodes
            or [{"id": "start", "type": "startCall", "data": {"name": "Start"}}],
            "edges": [],
        },
        workflow_configurations={"llm": {"model": "original"}},
    )


@pytest.mark.parametrize(
    "node",
    [
        {"type": "webhook", "data": {}},
        {"type": "unknownFutureNode", "data": {}},
        {"type": "agentNode", "data": {"tool_uuids": ["transfer"]}},
        {"type": "agentNode", "data": {"mcp_tool_filters": {"server": []}}},
        {"type": "startCall", "data": {"pre_call_fetch_url": "https://example.com"}},
        {"type": "startCall", "data": {"pre_call_fetch_enabled": True}},
    ],
)
def test_external_effects_fail_closed(node):
    with pytest.raises(ValueError):
        regression_snapshot(definition([node]))


def test_snapshot_survives_draft_mutation():
    draft = definition()
    snapshot = regression_snapshot(draft)
    expected = deepcopy(snapshot)
    draft.workflow_json["nodes"][0]["data"]["name"] = "Changed"
    draft.workflow_configurations["llm"]["model"] = "Changed"
    assert snapshot == expected


def test_ordered_messages_respect_rewind():
    turns = [
        {"id": str(i), "status": "completed", "user_message": {"text": str(i)}}
        for i in range(3)
    ]
    assert scenario_messages({"turns": turns, "cursor_turn_id": "1"}) == ["0", "1"]


@pytest.mark.parametrize(
    "turns",
    [
        [],
        [{"status": "failed", "user_message": {"text": "hello"}}],
        [{"status": "completed", "user_message": {"text": " "}}],
        [{"status": "completed", "user_message": "malformed"}],
        [{"status": "completed", "user_message": {"text": "hello"}}] * 21,
    ],
)
def test_invalid_histories_rejected(turns):
    with pytest.raises(ValueError):
        scenario_messages({"turns": turns})


def test_assertions_and_missing_turn_failures():
    turns = [
        {
            "status": "completed",
            "user_message": {"text": "help"},
            "assistant_message": {"text": "Please HOLD"},
            "events": [{"type": "node_transition", "payload": {"node_id": "handoff"}}],
        }
    ]
    checks = evaluate_scenario(
        turns,
        ScenarioAssertions(node_ids=["handoff", "end"], reply_contains=["hold"]),
        2,
    )
    assert [check.passed for check in checks] == [False, True, False, True]


def test_names_and_assertions_are_bounded():
    with pytest.raises(ValidationError):
        SaveScenarioRequest(name=" ")
    with pytest.raises(ValidationError):
        ScenarioAssertions(reply_contains=["x" * 501])


@pytest.mark.asyncio
async def test_source_tenant_and_workflow_scope(monkeypatch):
    get = AsyncMock(
        return_value=SimpleNamespace(workflow_run=SimpleNamespace(workflow_id=999))
    )
    monkeypatch.setattr(routes.db_client, "get_workflow_run_text_session", get)
    with pytest.raises(HTTPException) as exc:
        await routes.load_source(42, 7, SimpleNamespace(selected_organization_id=3))
    assert exc.value.status_code == 404
    get.assert_awaited_once_with(7, organization_id=3)


@pytest.mark.asyncio
async def test_replay_rejects_external_effects_before_creating_run(monkeypatch):
    from api.services.workflow.text_scenarios import ReplayScenarioRequest

    source = SimpleNamespace(
        session_data={
            "saved_scenario": {
                "source_run_id": 7,
                "name": "test",
                "messages": ["hi"],
                "initial_context": {},
                "assertions": {},
            }
        }
    )
    monkeypatch.setattr(routes, "load_source", AsyncMock(return_value=source))
    monkeypatch.setattr(
        routes.db_client, "get_workflow", AsyncMock(return_value=SimpleNamespace(id=42))
    )
    monkeypatch.setattr(
        execution,
        "prepare_workflow_run_inputs",
        AsyncMock(return_value=SimpleNamespace(definition_id=12)),
    )
    unsafe = definition([{"type": "webhook", "data": {}}])
    unsafe.workflow_id = 42
    monkeypatch.setattr(
        routes.db_client, "get_text_scenario_definition", AsyncMock(return_value=unsafe)
    )
    create = AsyncMock()
    monkeypatch.setattr(routes.db_client, "create_workflow_run", create)
    with pytest.raises(HTTPException) as exc:
        await routes.replay_text_scenario(
            42, 7, ReplayScenarioRequest(), SimpleNamespace(selected_organization_id=3)
        )
    assert exc.value.status_code == 422
    create.assert_not_awaited()


@pytest.mark.asyncio
@pytest.mark.parametrize("outcome", ["success", "timeout", "cancel", "quota", "setup"])
async def test_replay_pins_snapshot_and_always_completes_run(monkeypatch, outcome):
    import asyncio

    from api.services.workflow.text_scenarios import ReplayScenarioRequest

    source = SimpleNamespace(
        session_data={
            "saved_scenario": {
                "source_run_id": 7,
                "name": "test",
                "messages": ["hi"],
                "initial_context": {"customer": "Alex"},
                "assertions": {"reply_contains": ["hello"]},
            }
        }
    )
    from api.services.managed_model_services import MPS_CORRELATION_ID_CONTEXT_KEY

    source.session_data["saved_scenario"]["initial_context"][
        MPS_CORRELATION_ID_CONTEXT_KEY
    ] = "old-test-run"
    monkeypatch.setattr(routes, "load_source", AsyncMock(return_value=source))
    monkeypatch.setattr(
        routes.db_client, "get_workflow", AsyncMock(return_value=SimpleNamespace(id=42))
    )
    monkeypatch.setattr(
        execution,
        "prepare_workflow_run_inputs",
        AsyncMock(
            return_value=SimpleNamespace(
                definition_id=12, initial_context={"customer": "Alex"}
            )
        ),
    )
    draft = definition()
    draft.workflow_id = 42
    monkeypatch.setattr(
        routes.db_client, "get_text_scenario_definition", AsyncMock(return_value=draft)
    )
    run = SimpleNamespace(id=8, is_completed=False)
    monkeypatch.setattr(
        routes.db_client, "create_workflow_run", AsyncMock(return_value=run)
    )
    session = SimpleNamespace(revision=0, workflow_run=run, session_data={})

    async def ensure(run_id, *, session_data, checkpoint):
        if outcome == "setup":
            raise RuntimeError("database write failed")
        session.session_data = session_data
        # Simulate an editor changing the draft immediately after run creation.
        draft.workflow_json["nodes"][0]["data"]["name"] = "new name"

    monkeypatch.setattr(routes.db_client, "ensure_workflow_run_text_session", ensure)
    monkeypatch.setattr(
        routes.db_client,
        "get_workflow_run_text_session",
        AsyncMock(return_value=None if outcome == "setup" else session),
    )
    update_run = AsyncMock()
    monkeypatch.setattr(routes.db_client, "update_workflow_run", update_run)
    monkeypatch.setattr(
        execution,
        "authorize_workflow_run_start",
        AsyncMock(
            return_value=SimpleNamespace(
                has_quota=outcome != "quota", error_message="No credits"
            )
        ),
    )
    monkeypatch.setattr(
        execution, "initialize_text_chat_session", AsyncMock(return_value=session)
    )
    append = AsyncMock(return_value=session)
    monkeypatch.setattr(execution, "append_text_chat_user_message", append)

    async def execute(**kwargs):
        assert (
            kwargs["text_session"].session_data["regression"]["snapshot"][
                "workflow_json"
            ]["nodes"][0]["data"]["name"]
            == "Start"
        )
        if outcome == "timeout":
            raise TimeoutError()
        if outcome == "cancel":
            raise asyncio.CancelledError()
        if append.await_count:
            session.session_data["turns"] = [
                {
                    "status": "completed",
                    "user_message": {"text": "hi"},
                    "assistant_message": {"text": "hello"},
                }
            ]
        return session

    monkeypatch.setattr(execution, "execute_pending_text_chat_turn", execute)
    cleanup = AsyncMock()
    monkeypatch.setattr(execution, "complete_text_chat_session", cleanup)
    user = SimpleNamespace(id=1, selected_organization_id=3)
    if outcome == "cancel":
        with pytest.raises(asyncio.CancelledError):
            await routes.replay_text_scenario(42, 7, ReplayScenarioRequest(), user)
    elif outcome == "quota":
        with pytest.raises(HTTPException) as exc:
            await routes.replay_text_scenario(42, 7, ReplayScenarioRequest(), user)
        assert exc.value.status_code == 402
        append.assert_not_awaited()
    else:
        result = await routes.replay_text_scenario(42, 7, ReplayScenarioRequest(), user)
        assert result.passed == (outcome == "success")
        assert result.definition_id == 12
        if outcome == "timeout":
            assert "time limit" in result.error
    assert execution.prepare_workflow_run_inputs.await_args.kwargs[
        "initial_context"
    ] == {"customer": "Alex"}
    if outcome == "setup":
        cleanup.assert_not_awaited()
        assert update_run.await_args.kwargs["is_completed"] is True
    else:
        cleanup.assert_awaited_once_with(
            run_id=8, text_session=session, expected_revision=0
        )


@pytest.mark.asyncio
async def test_scenario_persistence_is_scoped_and_does_not_delete_transcript(
    db_session, async_session
):
    from api.tests.test_workflow_text_chat import _create_user_and_workflow

    graph = definition().workflow_json
    user, workflow = await _create_user_and_workflow(
        db_session,
        async_session,
        workflow_definition=graph,
        suffix="saved-scenario-owner",
    )
    other_user, other_workflow = await _create_user_and_workflow(
        db_session,
        async_session,
        workflow_definition=graph,
        suffix="saved-scenario-other",
    )
    org_id = user.selected_organization_id
    run = await db_session.create_workflow_run(
        name="Scenario source",
        workflow_id=workflow.id,
        mode="textchat",
        user_id=user.id,
        organization_id=org_id,
    )
    turns = [{"status": "completed", "user_message": {"text": "hello"}}]
    await db_session.ensure_workflow_run_text_session(
        run.id, session_data={"turns": turns}, checkpoint={}
    )
    await db_session.update_workflow_run(run.id, is_completed=True)
    saved = {
        "source_run_id": run.id,
        "name": "hello",
        "messages": ["hello"],
        "assertions": {},
        "initial_context": {},
    }
    assert await db_session.set_text_scenario(
        workflow.id, run.id, organization_id=org_id, scenario=saved
    )
    assert (
        len(await db_session.list_text_scenarios(workflow.id, organization_id=org_id))
        == 1
    )
    assert (
        await db_session.list_text_scenarios(
            workflow.id, organization_id=other_user.selected_organization_id
        )
        == []
    )
    assert not await db_session.set_text_scenario(
        workflow.id,
        run.id,
        organization_id=other_user.selected_organization_id,
        scenario=None,
    )
    assert not await db_session.set_text_scenario(
        other_workflow.id, run.id, organization_id=org_id, scenario=None
    )
    assert await db_session.set_text_scenario(
        workflow.id, run.id, organization_id=org_id, scenario=None
    )
    assert (
        await db_session.list_text_scenarios(workflow.id, organization_id=org_id) == []
    )
    source = await db_session.get_workflow_run_text_session(
        run.id, organization_id=org_id
    )
    assert source.session_data["turns"] == turns


@pytest.mark.asyncio
async def test_saving_legacy_context_removes_run_owned_identity(monkeypatch):
    from api.services.managed_model_services import MPS_CORRELATION_ID_CONTEXT_KEY

    source = SimpleNamespace(
        session_data={
            "turns": [{"status": "completed", "user_message": {"text": "hi"}}]
        },
        workflow_run=SimpleNamespace(
            is_completed=True,
            initial_context={
                "customer": "Alex",
                "provider": "telnyx",
                "runtime_configuration": {},
                MPS_CORRELATION_ID_CONTEXT_KEY: "test-old-run-identity",
            },
        ),
    )
    monkeypatch.setattr(routes, "load_source", AsyncMock(return_value=source))
    save = AsyncMock(return_value=True)
    monkeypatch.setattr(routes.db_client, "set_text_scenario", save)
    result = await routes.save_text_scenario(
        42,
        7,
        SaveScenarioRequest(name="legacy"),
        SimpleNamespace(selected_organization_id=3),
    )
    assert result.initial_context == {"customer": "Alex"}
