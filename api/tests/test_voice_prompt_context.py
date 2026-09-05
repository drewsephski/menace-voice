"""Prompt delivery and history continuity without external model calls."""

from copy import deepcopy
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest
from pipecat.processors.aggregators.llm_context import LLMContext

from api.services.workflow.dto import AgentNodeData, EdgeDataDTO
from api.services.workflow.pipecat_engine import PipecatEngine
from api.services.workflow.pipecat_engine_context_composer import (
    compose_functions_for_node,
    compose_system_prompt_for_node,
)
from api.services.workflow.pipecat_engine_context_summarizer import (
    CALL_SUMMARIZATION_PROMPT,
    ContextSummarizationManager,
)
from api.services.workflow.pipecat_engine_custom_tools import get_function_schema
from api.services.workflow.workflow_graph import Edge, Node


def test_prompt_resolves_live_gathered_facts_without_overwriting_initial_values():
    initial = {"city": "Austin", "gathered_context": {"city": "untrusted"}}
    engine = PipecatEngine(workflow=None, call_context_vars=initial)
    engine.record_context({"city": "Dallas", "confirmed": False, "count": 0})
    prompt = (
        "Original {{initial_context.city}} / {{city}}; "
        "current {{gathered_context.city}}; confirmed {{gathered_context.confirmed}}; "
        "count {{gathered_context.count}}; {{missing | unknown}}"
    )
    assert engine._format_prompt(prompt) == (
        "Original Austin / Austin; current Dallas; confirmed False; count 0; unknown"
    )
    engine.record_context({"city": "Houston"})
    assert "current Houston" in engine._format_prompt(prompt)
    assert initial == {"city": "Austin", "gathered_context": {"city": "untrusted"}}


@pytest.mark.asyncio
async def test_entering_tool_free_stage_clears_previous_tools_before_settings_update():
    context = LLMContext()
    observed_tools = []

    async def capture_settings(_settings):
        observed_tools.append(context.tools)

    llm = SimpleNamespace(_update_settings=AsyncMock(side_effect=capture_settings))
    engine = PipecatEngine(
        workflow=None, call_context_vars={}, context=context, llm=llm
    )
    await engine._update_llm_context("Book", [get_function_schema("book", "Book")])
    assert observed_tools[0].standard_tools[0].name == "book"
    await engine._update_llm_context("Close", [])
    assert observed_tools[1] == LLMContext().tools


@pytest.mark.asyncio
@pytest.mark.parametrize("has_documents", [False, True])
async def test_capability_guidance_uses_actual_schemas_not_selected_tool_ids(
    has_documents,
):
    node = Node(
        "agent",
        "agentNode",
        AgentNodeData(
            name="Support",
            prompt="Help with the service request.",
            tool_uuids=["unavailable-integration"],
            document_uuids=["doc-1"] if has_documents else [],
        ),
    )
    node.out_edges = [
        Edge(
            "finish",
            "agent",
            "end",
            EdgeDataDTO(
                label="finish",
                condition="The request is resolved.",
            ),
        )
    ]
    functions = await compose_functions_for_node(node=node, custom_tool_manager=None)
    prompt = compose_system_prompt_for_node(
        node=node,
        workflow=SimpleNamespace(global_node_id=None),
        format_prompt=lambda value: value,
        has_recordings=False,
        functions=functions,
    )
    assert "transition changes the conversation stage" in prompt
    assert "unavailable-integration" not in prompt
    assert ("Search the attached knowledge" in prompt) is has_documents
    assert ("No lookup or external-action tools" in prompt) is not has_documents


@pytest.mark.asyncio
async def test_action_guidance_and_recording_protocol_coexist():
    node = Node(
        "agent",
        "agentNode",
        AgentNodeData(
            name="Booking",
            prompt="RECORDING_ID: welcome",
        ),
    )
    prompt = compose_system_prompt_for_node(
        node=node,
        workflow=SimpleNamespace(global_node_id=None),
        format_prompt=lambda value: value,
        has_recordings=True,
        functions=[get_function_schema("book", "Book after confirmation")],
    )
    assert "confirm consequential actions" in prompt
    assert "No lookup or external-action tools" not in prompt
    assert "RESPONSE MODE INSTRUCTIONS" in prompt


def _history():
    return [
        {"role": "system", "content": "Configured agent brief"},
        *[
            {"role": "user" if i % 2 == 0 else "assistant", "content": str(i)}
            for i in range(10)
        ],
    ]


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "mutation", ["append", "replace", "edit", "node_change", "invalid_index"]
)
async def test_summary_applies_only_to_unchanged_history_and_preserves_new_turns(
    mutation,
):
    context = LLMContext(messages=_history())
    node = SimpleNamespace(id="stage-2", name="Resolve")
    engine = SimpleNamespace(
        context=context,
        _current_node=node,
        _get_otel_context=lambda: None,
    )
    summary = "Caller corrected the city to Dallas. Booking still unconfirmed."
    new_turn = {"role": "user", "content": "Actually make that tomorrow."}

    async def generate(frame):
        assert frame.context is not context
        assert frame.summarization_prompt == CALL_SUMMARIZATION_PROMPT
        assert frame.min_messages_to_keep == 4
        if mutation == "append":
            context.add_message(new_turn)
        elif mutation == "replace":
            context.set_messages([{"role": "user", "content": "Replacement"}])
        elif mutation == "edit":
            context.messages[1]["content"] = "Corrected during inference"
        elif mutation == "node_change":
            engine._current_node = SimpleNamespace(id="stage-3")
        assert frame.context.messages == _history()
        return summary, 999 if mutation == "invalid_index" else 6

    engine.inference_llm = SimpleNamespace(
        _generate_summary=AsyncMock(side_effect=generate)
    )
    manager = ContextSummarizationManager(engine)
    original = deepcopy(context.messages)
    with patch(
        "api.services.workflow.pipecat_engine_context_summarizer.ensure_tracing",
        return_value=False,
    ):
        await manager._summarize_context_in_background()

    if mutation == "append":
        assert context.messages[0] == original[0]
        assert summary in context.messages[1]["content"]
        assert context.messages[2:] == [*original[7:], new_turn]
    else:
        assert not any(summary in message["content"] for message in context.messages)
        if mutation == "replace":
            assert context.messages == [{"role": "user", "content": "Replacement"}]
        elif mutation == "edit":
            assert context.messages[1]["content"] == "Corrected during inference"
        else:
            assert context.messages == original


@pytest.mark.asyncio
async def test_failed_summary_keeps_full_conversation():
    context = LLMContext(messages=_history())
    original = deepcopy(context.messages)
    engine = SimpleNamespace(
        context=context,
        _current_node=SimpleNamespace(id="stage", name="Stage"),
        _get_otel_context=lambda: None,
        inference_llm=SimpleNamespace(
            _generate_summary=AsyncMock(side_effect=TimeoutError)
        ),
    )
    await ContextSummarizationManager(engine)._summarize_context_in_background()
    assert context.messages == original
