"""Run bounded conversation regressions without external workflow effects."""

import asyncio
from typing import cast

from loguru import logger

from api.db import db_client
from api.db.models import UserModel
from api.enums import WorkflowRunMode, WorkflowRunState
from api.services.quota_service import authorize_workflow_run_start
from api.services.workflow.initial_context import merge_external_initial_context
from api.services.workflow.run_creation import prepare_workflow_run_inputs
from api.services.workflow.text_chat_session_service import (
    append_text_chat_user_message,
    complete_text_chat_session,
    default_text_chat_checkpoint,
    default_text_chat_session_data,
    execute_pending_text_chat_turn,
    initialize_text_chat_session,
)
from api.services.workflow.text_scenarios import (
    SCENARIO_TIMEOUT_SECONDS,
    SavedScenario,
    ScenarioReplayResult,
    evaluate_scenario,
    regression_snapshot,
)


class ScenarioNotFoundError(Exception):
    pass


class ScenarioQuotaError(Exception):
    pass


async def _complete_regression_run(run_id: int, organization_id: int) -> None:
    try:
        async with asyncio.timeout(15):
            latest = await db_client.get_workflow_run_text_session(
                run_id, organization_id=organization_id
            )
            if latest and latest.workflow_run.is_completed:
                return
            if latest:
                await complete_text_chat_session(
                    run_id=run_id,
                    text_session=latest,
                    expected_revision=cast(int, latest.revision),
                )
                return
    except Exception:  # noqa: BLE001 - try minimal persisted completion below
        logger.warning("Regression session cleanup failed for run {}", run_id)
    # Covers session creation failures without scheduling any integrations.
    async with asyncio.timeout(5):
        await db_client.update_workflow_run(
            run_id,
            is_completed=True,
            state=WorkflowRunState.COMPLETED.value,
            gathered_context={"error": "Regression session setup or cleanup failed"},
        )


async def execute_saved_scenario(
    *, workflow_id: int, scenario: SavedScenario, use_draft: bool, user: UserModel
) -> ScenarioReplayResult:
    organization_id = cast(int, user.selected_organization_id)
    workflow = await db_client.get_workflow(
        workflow_id, organization_id=organization_id
    )
    if not workflow:
        raise ScenarioNotFoundError("Workflow not found")
    inputs = await prepare_workflow_run_inputs(
        db_client,
        workflow,
        initial_context=merge_external_initial_context({}, scenario.initial_context),
        use_draft=use_draft,
    )
    definition = await db_client.get_text_scenario_definition(
        workflow_id, inputs.definition_id, organization_id=organization_id
    )
    if not definition or definition.workflow_id != workflow_id:
        raise ValueError("Save a workflow definition before replaying")
    snapshot = regression_snapshot(definition)
    run = await db_client.create_workflow_run(
        name=f"Regression: {scenario.name}",
        workflow_id=workflow_id,
        mode=WorkflowRunMode.TEXTCHAT.value,
        user_id=cast(int, user.id),
        initial_context=inputs.initial_context,
        organization_id=organization_id,
        definition_id=definition.id,
    )
    run_id = cast(int, run.id)
    data = {
        **default_text_chat_session_data(),
        "regression": {"source_run_id": scenario.source_run_id, "snapshot": snapshot},
        "original_initial_context": inputs.initial_context,
    }
    error = None
    try:
        async with asyncio.timeout(SCENARIO_TIMEOUT_SECONDS):
            await db_client.ensure_workflow_run_text_session(
                run_id, session_data=data, checkpoint=default_text_chat_checkpoint()
            )
            session = await db_client.get_workflow_run_text_session(
                run_id, organization_id=organization_id
            )
            if session is None:
                raise RuntimeError("Regression session was not persisted")
            quota = await authorize_workflow_run_start(
                workflow_id=workflow_id,
                organization_id=organization_id,
                workflow_run_id=run_id,
                actor_user=user,
            )
            if not quota.has_quota:
                raise ScenarioQuotaError(quota.error_message)
            session = await initialize_text_chat_session(
                run_id=run_id, text_session=session
            )
            session = await execute_pending_text_chat_turn(
                workflow_id=workflow_id, run_id=run_id, text_session=session
            )
            for message in scenario.messages:
                if session.workflow_run.is_completed:
                    break
                quota = await authorize_workflow_run_start(
                    workflow_id=workflow_id,
                    organization_id=organization_id,
                    workflow_run_id=run_id,
                    actor_user=user,
                )
                if not quota.has_quota:
                    raise ScenarioQuotaError(quota.error_message)
                session = await append_text_chat_user_message(
                    run_id=run_id,
                    text_session=session,
                    user_text=message,
                    expected_revision=cast(int, session.revision),
                )
                session = await execute_pending_text_chat_turn(
                    workflow_id=workflow_id, run_id=run_id, text_session=session
                )
    except ScenarioQuotaError:
        raise
    except TimeoutError:
        error = "Replay exceeded the three-minute time limit"
    except Exception:  # noqa: BLE001 - bounded replay returns a redacted error result
        # Provider exceptions may contain credentials or arbitrary response data.
        error = (
            "Replay failed during model execution. Inspect the run logs for details."
        )
    finally:
        await asyncio.shield(_complete_regression_run(run_id, organization_id))
    session = await db_client.get_workflow_run_text_session(
        run_id, organization_id=organization_id
    )
    turns = session.session_data.get("turns", []) if session else []
    checks = evaluate_scenario(turns, scenario.assertions, len(scenario.messages))
    return ScenarioReplayResult(
        workflow_run_id=run_id,
        definition_id=definition.id,
        passed=not error and all(check.passed for check in checks),
        checks=checks,
        turns=turns,
        error=error,
    )
