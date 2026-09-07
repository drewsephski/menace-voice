import asyncio
import json
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import pytest
from pipecat.services.openai.base_llm import BaseOpenAILLMService

from api.services.workflow import onboarding_planner
from api.services.workflow.onboarding_planner import (
    OnboardingPlanningError,
    plan_onboarding_workflow,
)


@pytest.fixture
def planner_dependencies():
    llm = Mock(spec=BaseOpenAILLMService)
    llm.run_inference = AsyncMock(
        return_value=json.dumps(
            {
                "name": "Bicycle repairs",
                "workflow_definition": {"nodes": [], "edges": []},
            }
        )
    )
    llm.cleanup = AsyncMock()
    llm._client = SimpleNamespace(close=AsyncMock())
    configuration = SimpleNamespace(
        llm=SimpleNamespace(provider="dograh", model="default")
    )
    with (
        patch.object(
            onboarding_planner,
            "get_effective_ai_model_configuration_for_workflow",
            AsyncMock(return_value=configuration),
        ) as resolve,
        patch.object(
            onboarding_planner, "create_llm_service", Mock(return_value=llm)
        ) as create,
    ):
        yield SimpleNamespace(
            llm=llm, configuration=configuration, resolve=resolve, create=create
        )


@pytest.mark.parametrize(
    "provider,realtime", [("dograh", False), ("openrouter", False), ("openai", True)]
)
async def test_uses_scoped_effective_configuration_and_existing_text_model_factory(
    planner_dependencies, provider, realtime
):
    deps = planner_dependencies
    deps.configuration.llm.provider = provider
    deps.configuration.is_realtime = realtime
    override = {
        "model_configuration_v2_override": {"mode": "byok", "api_key": "SECRET_CONFIG"}
    }
    result = await plan_onboarding_workflow(
        "Plan bicycle repairs",
        user=SimpleNamespace(selected_organization_id=11),
        workflow_configurations=override,
    )
    deps.resolve.assert_awaited_once_with(
        organization_id=11, workflow_configurations=override
    )
    deps.create.assert_called_once_with(
        deps.configuration, usage_context="agent_onboarding"
    )
    call = deps.llm.run_inference.await_args
    assert call.args[0].get_messages() == [
        {"role": "user", "content": "Plan bicycle repairs"}
    ]
    assert call.kwargs["max_tokens"] == 12_000
    assert "OUTPUT SCHEMA" in call.kwargs["system_instruction"]
    assert "SECRET_CONFIG" not in call.kwargs["system_instruction"]
    assert result["name"] == "Bicycle repairs"
    deps.llm.cleanup.assert_awaited_once()
    deps.llm._client.close.assert_awaited_once()


async def test_preserves_generated_branch_plan_and_only_returns_allowed_envelope_keys(
    planner_dependencies,
):
    definition = {
        "nodes": [
            {
                "id": "eligibility",
                "type": "agentNode",
                "data": {"name": "Check service area", "prompt": "Ask postcode"},
            }
        ],
        "edges": [
            {
                "source": "eligibility",
                "target": "booking",
                "data": {"label": "Eligible", "condition": "Address is served"},
            },
            {
                "source": "eligibility",
                "target": "unavailable",
                "data": {
                    "label": "Outside service area",
                    "condition": "Address is not served",
                },
            },
        ],
    }
    planner_dependencies.llm.run_inference.return_value = (
        "```json\n"
        + json.dumps(
            {
                "name": "HVAC intake",
                "workflow_definition": definition,
                "provider_config": "SECRET",
            }
        )
        + "\n```"
    )
    result = await plan_onboarding_workflow(
        "Plan HVAC intake with eligibility branching",
        user=SimpleNamespace(selected_organization_id=11),
    )
    assert result == {"name": "HVAC intake", "workflow_definition": definition}


@pytest.mark.parametrize(
    "response", [None, "not json", "[]", '{"raw": "private provider text"}']
)
async def test_malformed_output_returns_invalid_draft_for_existing_bounded_repair(
    planner_dependencies, response
):
    planner_dependencies.llm.run_inference.return_value = response
    result = await plan_onboarding_workflow(
        "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
    )
    assert not result.get("workflow_definition")
    assert "raw" not in result
    planner_dependencies.llm.cleanup.assert_awaited_once()


async def test_provider_error_is_actionable_and_does_not_disclose_credentials(
    planner_dependencies,
):
    planner_dependencies.llm.run_inference.side_effect = RuntimeError(
        "401 SECRET_TOKEN https://private.example"
    )
    with pytest.raises(
        OnboardingPlanningError, match="connection and available quota"
    ) as caught:
        await plan_onboarding_workflow(
            "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
        )
    assert "SECRET" not in str(caught.value)
    assert caught.value.__suppress_context__ is True
    planner_dependencies.llm.cleanup.assert_awaited_once()
    planner_dependencies.llm._client.close.assert_awaited_once()


async def test_timeout_is_bounded_and_cleans_up(planner_dependencies, monkeypatch):
    async def wait_forever(*args, **kwargs):
        await asyncio.Event().wait()

    planner_dependencies.llm.run_inference.side_effect = wait_forever
    monkeypatch.setattr(onboarding_planner, "ONBOARDING_PLANNING_TIMEOUT_SECONDS", 0.01)
    with pytest.raises(OnboardingPlanningError, match="timed out"):
        await plan_onboarding_workflow(
            "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
        )
    planner_dependencies.llm.cleanup.assert_awaited_once()


async def test_no_organization_cannot_resolve_another_tenants_configuration(
    planner_dependencies,
):
    with pytest.raises(OnboardingPlanningError, match="Select an organization"):
        await plan_onboarding_workflow(
            "Plan repair stages", user=SimpleNamespace(selected_organization_id=None)
        )
    planner_dependencies.resolve.assert_not_awaited()
    planner_dependencies.create.assert_not_called()


async def test_missing_text_model_does_not_guess_or_fallback(planner_dependencies):
    planner_dependencies.configuration.llm = None
    with pytest.raises(OnboardingPlanningError, match="Configure a language model"):
        await plan_onboarding_workflow(
            "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
        )
    planner_dependencies.create.assert_not_called()


async def test_cleanup_failure_does_not_replace_a_successful_plan(planner_dependencies):
    planner_dependencies.llm.cleanup.side_effect = RuntimeError("SECRET cleanup error")
    result = await plan_onboarding_workflow(
        "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
    )
    assert result["name"] == "Bicycle repairs"
    planner_dependencies.llm._client.close.assert_awaited_once()


async def test_external_cancellation_propagates_and_closes_the_model(
    planner_dependencies,
):
    planner_dependencies.llm.run_inference.side_effect = asyncio.CancelledError()
    with pytest.raises(asyncio.CancelledError):
        await plan_onboarding_workflow(
            "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
        )
    planner_dependencies.llm.cleanup.assert_awaited_once()


async def test_json_parser_failure_returns_an_invalid_draft_for_repair(
    planner_dependencies,
):
    with patch.object(
        onboarding_planner,
        "parse_llm_json",
        side_effect=ValueError("Invalid response SECRET"),
    ):
        result = await plan_onboarding_workflow(
            "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
        )
    assert result == {"workflow_definition": {}}


@pytest.mark.parametrize("name", [None, "", "   ", "x" * 256, 42])
async def test_invalid_generated_name_is_omitted_without_losing_the_plan(
    planner_dependencies, name
):
    definition = {"nodes": [{"id": "keep-this-stage"}], "edges": []}
    planner_dependencies.llm.run_inference.return_value = json.dumps(
        {"name": name, "workflow_definition": definition}
    )
    result = await plan_onboarding_workflow(
        "Plan repair stages", user=SimpleNamespace(selected_organization_id=11)
    )
    assert result == {"workflow_definition": definition}
