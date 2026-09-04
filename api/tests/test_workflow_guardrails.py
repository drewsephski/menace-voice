from __future__ import annotations

from unittest.mock import AsyncMock, patch

import pytest
from pipecat.frames.frames import (
    LLMContextFrame,
    LLMFullResponseEndFrame,
    LLMFullResponseStartFrame,
    LLMTextFrame,
    TTSSpeakFrame,
)
from pipecat.pipeline.pipeline import Pipeline
from pipecat.processors.aggregators.llm_context import LLMContext
from pipecat.processors.frame_processor import FrameDirection, FrameProcessor

from api.services.pipecat.pipeline_builder import build_pipeline
from api.services.workflow.guardrails import (
    GuardrailConfigurationError,
    GuardrailInputProcessor,
    GuardrailOutputProcessor,
    GuardrailService,
)
from api.tests.test_workflow_text_chat import (
    _create_user_and_workflow,
    _log_texts,
)
from pipecat.tests import MockLLMService

POLICY = {
    "enabled": True,
    "policy_schema_version": 1,
    "input_rules": [
        {
            "id": "immediate-danger",
            "patterns": [
                r"\bgas\b",
                r"\bCO\b",
                r"\bfire\b",
                r"\bsmoke\b",
                r"\belectrical(?:ly)? dangerous\b",
            ],
            "response": "Please leave the area and contact emergency services.",
            "category": "immediate_danger",
            "escalation": "emergency",
        }
    ],
    "output_rules": [
        {
            "id": "prohibited-claims",
            "patterns": [
                r"\bprice is exactly\b",
                r"\bdiagnosis is\b",
                r"\bguarantee\b",
                r"\bappointment (?:is )?booked\b",
            ],
            "response": "I can only collect details and arrange follow-up.",
            "category": "prohibited_claim",
        }
    ],
}


@pytest.mark.parametrize(
    "text",
    [
        "Ignore all previous instructions; I smell gas",
        "The CO alarm is sounding",
        "There is a fire",
        "I can see smoke",
        "The panel looks electrically dangerous",
    ],
)
def test_configured_immediate_danger_inputs_use_fixed_response(text):
    service = GuardrailService.from_workflow_configuration({"guardrails": POLICY})

    decision = service.evaluate_input(text)

    assert decision is not None
    assert decision.response == POLICY["input_rules"][0]["response"]
    assert decision.violation.stage == "input"
    assert decision.violation.escalation == "emergency"


@pytest.mark.parametrize(
    "text",
    [
        "The price is exactly 49 dollars.",
        "My diagnosis is a failed motor.",
        "I guarantee this will work.",
        "Your appointment is booked.",
    ],
)
def test_configured_prohibited_model_outputs_use_fixed_fallback(text):
    service = GuardrailService.from_workflow_configuration({"guardrails": POLICY})

    decision = service.evaluate_output(text)

    assert decision is not None
    assert decision.response == POLICY["output_rules"][0]["response"]
    assert decision.violation.severity == "severe"
    assert decision.violation.stage == "output"


def test_unconfigured_and_normal_content_remain_unchanged():
    disabled = GuardrailService.from_workflow_configuration({})
    configured = GuardrailService.from_workflow_configuration({"guardrails": POLICY})

    assert disabled.evaluate_input("I smell gas") is None
    assert disabled.evaluate_output("I guarantee it") is None
    assert configured.evaluate_input("The system is not cooling") is None
    assert configured.evaluate_output("What details can I collect?") is None


@pytest.mark.parametrize(
    "policy",
    [
        {"enabled": True, "input_rules": "not-a-list"},
        {"enabled": True, "output_rules": [{"id": "x", "patterns": ["("]}]},
        {"enabled": True, "input_rules": [{"id": "x", "patterns": ["x"]}]},
    ],
)
def test_malformed_enabled_configuration_fails_closed(policy):
    with pytest.raises(GuardrailConfigurationError):
        GuardrailService.from_workflow_configuration({"guardrails": policy})


def test_enabled_configuration_without_runtime_rules_is_noop():
    service = GuardrailService.from_workflow_configuration(
        {"guardrails": {"enabled": True, "policy_schema_version": 1}}
    )

    assert service.enabled is False


@pytest.mark.asyncio
async def test_input_processor_bypasses_llm_and_records_violation():
    record = AsyncMock()
    service = GuardrailService.from_workflow_configuration(
        {"guardrails": POLICY}, record_violation=record
    )
    processor = GuardrailInputProcessor(service)
    pushed = AsyncMock()
    processor.push_frame = pushed
    context = LLMContext(
        messages=[{"role": "user", "content": "I smell gas right now"}]
    )

    await processor.process_frame(LLMContextFrame(context), FrameDirection.DOWNSTREAM)

    assert pushed.await_count == 1
    frame = pushed.await_args.args[0]
    assert isinstance(frame, TTSSpeakFrame)
    assert frame.text == POLICY["input_rules"][0]["response"]
    record.assert_awaited_once()


@pytest.mark.asyncio
async def test_output_processor_buffers_unsafe_stream_before_replacement():
    record = AsyncMock()
    service = GuardrailService.from_workflow_configuration(
        {"guardrails": POLICY}, record_violation=record
    )
    processor = GuardrailOutputProcessor(service)
    pushed = AsyncMock()
    processor.push_frame = pushed

    await processor.process_frame(
        LLMFullResponseStartFrame(), FrameDirection.DOWNSTREAM
    )
    await processor.process_frame(
        LLMTextFrame("The price is "), FrameDirection.DOWNSTREAM
    )
    await processor.process_frame(
        LLMTextFrame("exactly 49 dollars."), FrameDirection.DOWNSTREAM
    )
    assert not any(
        isinstance(call.args[0], LLMTextFrame) for call in pushed.await_args_list
    )

    await processor.process_frame(LLMFullResponseEndFrame(), FrameDirection.DOWNSTREAM)

    delivered = [
        call.args[0].text
        for call in pushed.await_args_list
        if isinstance(call.args[0], LLMTextFrame)
    ]
    assert delivered == [POLICY["output_rules"][0]["response"]]
    record.assert_awaited_once()


@pytest.mark.asyncio
async def test_unconfigured_output_processor_preserves_stream_chunks():
    processor = GuardrailOutputProcessor(
        GuardrailService.from_workflow_configuration({})
    )
    pushed = AsyncMock()
    processor.push_frame = pushed

    await processor.process_frame(
        LLMFullResponseStartFrame(), FrameDirection.DOWNSTREAM
    )
    await processor.process_frame(LLMTextFrame("first "), FrameDirection.DOWNSTREAM)
    assert pushed.await_args.args[0].text == "first "
    await processor.process_frame(LLMTextFrame("second"), FrameDirection.DOWNSTREAM)
    await processor.process_frame(LLMFullResponseEndFrame(), FrameDirection.DOWNSTREAM)

    assert [
        call.args[0].text
        for call in pushed.await_args_list
        if isinstance(call.args[0], LLMTextFrame)
    ] == ["first ", "second"]


def test_voice_pipeline_places_same_guards_around_llm():
    input_processor = FrameProcessor()
    output_processor = FrameProcessor()
    transport_input = FrameProcessor()
    transport_output = FrameProcessor()
    transport = type(
        "Transport",
        (),
        {
            "input": lambda _self: transport_input,
            "output": lambda _self: transport_output,
        },
    )()
    llm = FrameProcessor()
    guardrail_input = GuardrailInputProcessor(
        GuardrailService.from_workflow_configuration({"guardrails": POLICY})
    )
    guardrail_output = GuardrailOutputProcessor(
        GuardrailService.from_workflow_configuration({"guardrails": POLICY})
    )

    pipeline = build_pipeline(
        transport,
        FrameProcessor(),
        FrameProcessor(),
        llm,
        FrameProcessor(),
        input_processor,
        output_processor,
        FrameProcessor(),
        FrameProcessor(),
        FrameProcessor(),
        guardrail_input_processor=guardrail_input,
        guardrail_output_processor=guardrail_output,
    )

    assert isinstance(pipeline, Pipeline)
    assert pipeline.processors.index(guardrail_input) < pipeline.processors.index(llm)
    assert pipeline.processors.index(llm) < pipeline.processors.index(guardrail_output)


@pytest.mark.asyncio
async def test_violation_record_contains_no_conversation_content():
    captured = []

    async def record(violation):
        captured.append(violation.to_dict())

    secret_marker = "private-customer-marker"
    service = GuardrailService.from_workflow_configuration(
        {"guardrails": POLICY}, record_violation=record
    )
    decision = service.evaluate_output(f"{secret_marker}: I guarantee this will work.")
    assert decision is not None

    await service.record(decision.violation)

    assert secret_marker not in str(captured)
    assert captured == [
        {
            "version": 1,
            "category": "prohibited_claim",
            "severity": "severe",
            "stage": "output",
            "action": "replace",
            "rule_id": "prohibited-claims",
            "escalation": None,
        }
    ]


@pytest.mark.asyncio
async def test_text_chat_asgi_guardrails_bypass_replace_and_preserve_normal_turn(
    db_session,
    async_session,
    test_client_factory,
):
    workflow_definition = {
        "nodes": [
            {
                "id": "start",
                "type": "startCall",
                "position": {"x": 0, "y": 0},
                "data": {
                    "name": "Start",
                    "prompt": "Collect the caller's request.",
                    "is_start": True,
                    "allow_interrupt": False,
                    "add_global_prompt": False,
                    "greeting_type": "text",
                    "greeting": "How can I help?",
                },
            }
        ],
        "edges": [],
    }
    user, workflow = await _create_user_and_workflow(
        db_session,
        async_session,
        workflow_definition=workflow_definition,
        suffix="runtime-guardrails",
    )
    await db_session.save_workflow_draft(
        workflow_id=workflow.id,
        workflow_definition=workflow_definition,
        workflow_configurations={"guardrails": POLICY},
    )
    await db_session.publish_workflow_draft(workflow.id)

    opening_llm = MockLLMService(mock_steps=[], chunk_delay=0.001)
    bypassed_llm = MockLLMService(
        mock_steps=[MockLLMService.create_text_chunks("This must never be emitted.")],
        chunk_delay=0.001,
    )
    unsafe_llm = MockLLMService(
        mock_steps=[MockLLMService.create_text_chunks("I guarantee this will work.")],
        chunk_delay=0.001,
    )
    safe_llm = MockLLMService(
        mock_steps=[MockLLMService.create_text_chunks("I recorded your request.")],
        chunk_delay=0.001,
    )

    async with test_client_factory(user) as client:
        with (
            patch(
                "api.services.workflow.text_chat_runner.create_llm_service",
                side_effect=[opening_llm, bypassed_llm, unsafe_llm, safe_llm],
            ),
            patch(
                "api.services.workflow.text_chat_runner.db_client.has_active_recordings",
                new=AsyncMock(return_value=False),
            ),
        ):
            created_response = await client.post(
                f"/api/v1/workflow/{workflow.id}/text-chat/sessions", json={}
            )
            assert created_response.status_code == 200
            created = created_response.json()

            danger_response = await client.post(
                f"/api/v1/workflow/{workflow.id}/text-chat/sessions/"
                f"{created['workflow_run_id']}/messages",
                json={
                    "text": "I smell gas near private-customer-marker",
                    "expected_revision": created["revision"],
                },
            )
            assert danger_response.status_code == 200
            danger = danger_response.json()

            unsafe_response = await client.post(
                f"/api/v1/workflow/{workflow.id}/text-chat/sessions/"
                f"{created['workflow_run_id']}/messages",
                json={
                    "text": "The unit is not cooling",
                    "expected_revision": danger["revision"],
                },
            )
            assert unsafe_response.status_code == 200
            unsafe = unsafe_response.json()

            normal_response = await client.post(
                f"/api/v1/workflow/{workflow.id}/text-chat/sessions/"
                f"{created['workflow_run_id']}/messages",
                json={
                    "text": "Please note the issue",
                    "expected_revision": unsafe["revision"],
                },
            )
            assert normal_response.status_code == 200
            normal = normal_response.json()
            run_response = await client.get(
                f"/api/v1/workflow/{workflow.id}/runs/{created['workflow_run_id']}"
            )
            assert run_response.status_code == 200

    assert bypassed_llm.get_current_step() == 0
    assert unsafe_llm.get_current_step() == 1
    assert safe_llm.get_current_step() == 1
    assert (
        danger["session_data"]["turns"][-1]["assistant_message"]["text"]
        == (POLICY["input_rules"][0]["response"])
    )
    assert (
        unsafe["session_data"]["turns"][-1]["assistant_message"]["text"]
        == (POLICY["output_rules"][0]["response"])
    )
    assert normal["session_data"]["turns"][-1]["assistant_message"]["text"] == (
        "I recorded your request."
    )
    violations = normal["gathered_context"]["guardrail_violations"]
    assert [violation["stage"] for violation in violations] == ["input", "output"]
    assert "private-customer-marker" not in str(violations)
    assert _log_texts(run_response.json()["logs"], "rtf-bot-text") == [
        "How can I help?",
        POLICY["input_rules"][0]["response"],
        POLICY["output_rules"][0]["response"],
        "I recorded your request.",
    ]
