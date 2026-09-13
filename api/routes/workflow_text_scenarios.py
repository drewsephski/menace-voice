"""Tenant-scoped saved text regressions with an isolated execution boundary."""

from typing import Annotated, cast

from fastapi import APIRouter, Depends, HTTPException

from api.db import db_client
from api.db.models import UserModel
from api.services.auth.depends import get_user_with_selected_organization
from api.services.workflow.initial_context import merge_external_initial_context
from api.services.workflow.text_scenario_execution import (
    ScenarioNotFoundError,
    ScenarioQuotaError,
    execute_saved_scenario,
)
from api.services.workflow.text_scenarios import (
    ReplayScenarioRequest,
    SavedScenario,
    SaveScenarioRequest,
    ScenarioReplayResult,
    scenario_messages,
)

router = APIRouter(tags=["workflow-text-scenarios"])
ScopedUser = Annotated[UserModel, Depends(get_user_with_selected_organization)]


async def load_source(workflow_id: int, run_id: int, user: UserModel):
    source = await db_client.get_workflow_run_text_session(
        run_id, organization_id=cast(int, user.selected_organization_id)
    )
    if not source or source.workflow_run.workflow_id != workflow_id:
        raise HTTPException(404, "Conversation not found")
    return source


@router.get("/{workflow_id}/text-chat/scenarios", response_model=list[SavedScenario])
async def list_text_scenarios(workflow_id: int, user: ScopedUser):
    sources = await db_client.list_text_scenarios(
        workflow_id, organization_id=cast(int, user.selected_organization_id)
    )
    return [
        SavedScenario.model_validate(source.session_data["saved_scenario"])
        for source in sources
    ]


@router.put("/{workflow_id}/text-chat/scenarios/{run_id}", response_model=SavedScenario)
async def save_text_scenario(
    workflow_id: int,
    run_id: int,
    request: SaveScenarioRequest,
    user: ScopedUser,
):
    source = await load_source(workflow_id, run_id, user)
    if not source.workflow_run.is_completed:
        raise HTTPException(409, "End the conversation before saving a regression")
    try:
        messages = scenario_messages(source.session_data)
    except ValueError as exc:
        raise HTTPException(422, str(exc)) from exc
    scenario = SavedScenario(
        source_run_id=run_id,
        name=request.name,
        messages=messages,
        initial_context=merge_external_initial_context(
            {},
            source.session_data.get(
                "original_initial_context", source.workflow_run.initial_context or {}
            ),
        ),
        assertions=request.assertions,
    )
    saved = await db_client.set_text_scenario(
        workflow_id,
        run_id,
        organization_id=cast(int, user.selected_organization_id),
        scenario=scenario.model_dump(),
    )
    if not saved:
        raise HTTPException(404, "Conversation not found")
    return scenario


@router.delete("/{workflow_id}/text-chat/scenarios/{run_id}", status_code=204)
async def delete_text_scenario(
    workflow_id: int,
    run_id: int,
    user: ScopedUser,
):
    if not await db_client.set_text_scenario(
        workflow_id,
        run_id,
        organization_id=cast(int, user.selected_organization_id),
        scenario=None,
    ):
        raise HTTPException(404, "Conversation not found")


@router.post(
    "/{workflow_id}/text-chat/scenarios/{run_id}/replay",
    response_model=ScenarioReplayResult,
)
async def replay_text_scenario(
    workflow_id: int,
    run_id: int,
    request: ReplayScenarioRequest,
    user: ScopedUser,
):
    source = await load_source(workflow_id, run_id, user)
    saved = (source.session_data or {}).get("saved_scenario")
    if not saved:
        raise HTTPException(404, "Saved scenario not found")
    scenario = SavedScenario.model_validate(saved)
    try:
        return await execute_saved_scenario(
            workflow_id=workflow_id,
            scenario=scenario,
            use_draft=request.use_draft,
            user=user,
        )
    except ScenarioNotFoundError as exc:
        raise HTTPException(404, str(exc)) from exc
    except ScenarioQuotaError as exc:
        raise HTTPException(402, str(exc)) from exc
    except ValueError as exc:
        raise HTTPException(422, str(exc)) from exc
