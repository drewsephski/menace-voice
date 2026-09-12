"""Regression for generated agents asking questions then skipping the answer."""

from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest
from pipecat.processors.aggregators.llm_context import LLMContext

from api.services.workflow.dto import AgentNodeData, StartCallNodeData
from api.services.workflow.pipecat_engine import PipecatEngine
from api.services.workflow.workflow_graph import Node


def make_engine(*, start=False, generated=True, messages=(), speech=""):
    engine = PipecatEngine(
        workflow=None, call_context_vars={}, context=LLMContext(messages=list(messages))
    )
    data_type = StartCallNodeData if start else AgentNodeData
    engine._current_node = Node(
        "collect-message",
        "startCall" if start else "agentNode",
        data_type(
            name="Take a message",
            prompt=("ONBOARDING EXECUTION CONTRACT\n" if generated else "")
            + "Collect the caller's message.",
        ),
    )
    engine._current_llm_generation_reference_text = speech
    engine._perform_variable_extraction_if_needed = AsyncMock()
    engine.set_node = AsyncMock()
    return engine


@pytest.mark.asyncio
@pytest.mark.parametrize("speech", ["What is your name?", "お名前は？", "ما اسمك؟"])
async def test_question_and_transition_does_not_skip_caller_or_trigger_more_speech(
    speech,
):
    engine = make_engine(
        messages=[{"role": "user", "content": "Please take a message."}], speech=speech
    )
    callback = AsyncMock()
    transition = await engine._create_transition_func("finish", "end")
    await transition(SimpleNamespace(arguments={}, result_callback=callback))
    engine.set_node.assert_not_awaited()
    engine._perform_variable_extraction_if_needed.assert_not_awaited()
    assert callback.call_args.args[0]["status"] == "waiting_for_caller"
    assert callback.call_args.kwargs["properties"].run_llm is False


def test_opening_cannot_advance_without_caller_input():
    engine = make_engine(
        start=True, messages=[{"role": "system", "content": "Initial context"}]
    )
    assert engine._transition_needs_caller_response()


def test_aggregated_question_is_guarded_when_stream_callback_is_unavailable():
    engine = make_engine(
        messages=[
            {"role": "user", "content": "Take a message."},
            {"role": "assistant", "content": "What should I pass along?"},
            {"role": "assistant", "content": None, "tool_calls": []},
        ]
    )
    assert engine._transition_needs_caller_response()


@pytest.mark.asyncio
async def test_real_answer_allows_silent_routing_without_an_extra_turn_per_node():
    engine = make_engine(
        messages=[
            {"role": "assistant", "content": "What should I pass along?"},
            {
                "role": "user",
                "content": "Alex here. Please ask Drew to call me about dinner.",
            },
        ]
    )
    callback = AsyncMock()
    transition = await engine._create_transition_func("confirm_message", "confirm")
    await transition(SimpleNamespace(arguments={}, result_callback=callback))
    engine.set_node.assert_awaited_once_with("confirm")
    assert callback.call_args.args[0] == {"status": "done"}


def test_caller_stop_and_known_outcomes_can_route_without_another_question():
    engine = make_engine(
        start=True, messages=[{"role": "user", "content": "Please end the call."}]
    )
    assert not engine._transition_needs_caller_response()


def test_manual_workflows_keep_existing_automatic_transitions():
    engine = make_engine(start=True, generated=False, speech="Continue?")
    assert not engine._transition_needs_caller_response()


@pytest.mark.asyncio
async def test_previous_stage_tool_cannot_reenter_its_destination():
    engine = make_engine(messages=[{"role": "user", "content": "Please continue."}])
    transition = await engine._create_transition_func("complete_stage_1", "stage-2")
    engine._current_node = Node(
        "stage-2",
        "agentNode",
        AgentNodeData(name="Confirm", prompt="Confirm the message."),
    )
    callback = AsyncMock()
    await transition(SimpleNamespace(arguments={}, result_callback=callback))
    engine.set_node.assert_not_awaited()
    assert callback.call_args.args[0]["status"] == "stale_transition"
    assert callback.call_args.kwargs["properties"].run_llm is False
