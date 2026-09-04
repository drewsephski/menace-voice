from __future__ import annotations

import re
from collections.abc import Awaitable, Callable, Mapping, Sequence
from dataclasses import asdict, dataclass
from typing import Any, Literal

from pipecat.frames.frames import (
    Frame,
    LLMContextFrame,
    LLMFullResponseEndFrame,
    LLMFullResponseStartFrame,
    LLMTextFrame,
    TTSSpeakFrame,
)
from pipecat.processors.frame_processor import FrameDirection, FrameProcessor

GUARDRAIL_POLICY_CONFIGURATION_KEY = "guardrails"
GUARDRAIL_POLICY_VERSION = 1
_METADATA_IDENTIFIER = re.compile(r"^[A-Za-z0-9_.:-]{1,160}$")


class GuardrailConfigurationError(ValueError):
    pass


@dataclass(frozen=True)
class GuardrailViolation:
    version: int
    category: str
    severity: Literal["severe"]
    stage: Literal["input", "output"]
    action: Literal["bypass", "replace"]
    rule_id: str
    escalation: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass(frozen=True)
class GuardrailDecision:
    response: str
    violation: GuardrailViolation


@dataclass(frozen=True)
class _CompiledRule:
    id: str
    patterns: tuple[re.Pattern[str], ...]
    response: str
    category: str
    escalation: str | None

    def matches(self, text: str) -> bool:
        return any(pattern.search(text) is not None for pattern in self.patterns)


ViolationRecorder = Callable[[GuardrailViolation], Awaitable[None]]
InputBypassCallback = Callable[[], Awaitable[None]]


async def _ignore_violation(_violation: GuardrailViolation) -> None:
    return None


class GuardrailService:
    def __init__(
        self,
        *,
        input_rules: Sequence[_CompiledRule] = (),
        output_rules: Sequence[_CompiledRule] = (),
        record_violation: ViolationRecorder | None = None,
    ) -> None:
        self._input_rules = tuple(input_rules)
        self._output_rules = tuple(output_rules)
        self._record_violation = record_violation or _ignore_violation

    @property
    def enabled(self) -> bool:
        return bool(self._input_rules or self._output_rules)

    @property
    def input_enabled(self) -> bool:
        return bool(self._input_rules)

    @property
    def output_enabled(self) -> bool:
        return bool(self._output_rules)

    @classmethod
    def from_workflow_configuration(
        cls,
        workflow_configuration: Mapping[str, Any] | None,
        *,
        record_violation: ViolationRecorder | None = None,
    ) -> GuardrailService:
        raw_policy = (workflow_configuration or {}).get(
            GUARDRAIL_POLICY_CONFIGURATION_KEY
        )
        if raw_policy is None:
            return cls(record_violation=record_violation)
        if not isinstance(raw_policy, Mapping):
            raise GuardrailConfigurationError("guardrails must be an object")

        enabled = raw_policy.get("enabled", False)
        if not isinstance(enabled, bool):
            raise GuardrailConfigurationError("guardrails.enabled must be boolean")
        if not enabled:
            return cls(record_violation=record_violation)

        version = raw_policy.get("policy_schema_version", GUARDRAIL_POLICY_VERSION)
        if (
            isinstance(version, bool)
            or not isinstance(version, int)
            or version != GUARDRAIL_POLICY_VERSION
        ):
            raise GuardrailConfigurationError(
                f"Unsupported guardrails policy_schema_version: {version!r}"
            )

        input_rules = _compile_rules(raw_policy.get("input_rules", []), "input")
        output_rules = _compile_rules(raw_policy.get("output_rules", []), "output")
        return cls(
            input_rules=input_rules,
            output_rules=output_rules,
            record_violation=record_violation,
        )

    def evaluate_input(self, text: str) -> GuardrailDecision | None:
        return self._evaluate(text, self._input_rules, stage="input", action="bypass")

    def evaluate_output(self, text: str) -> GuardrailDecision | None:
        return self._evaluate(
            text, self._output_rules, stage="output", action="replace"
        )

    async def record(self, violation: GuardrailViolation) -> None:
        await self._record_violation(violation)

    @staticmethod
    def _evaluate(
        text: str,
        rules: Sequence[_CompiledRule],
        *,
        stage: Literal["input", "output"],
        action: Literal["bypass", "replace"],
    ) -> GuardrailDecision | None:
        for rule in rules:
            if rule.matches(text):
                return GuardrailDecision(
                    response=rule.response,
                    violation=GuardrailViolation(
                        version=GUARDRAIL_POLICY_VERSION,
                        category=rule.category,
                        severity="severe",
                        stage=stage,
                        action=action,
                        rule_id=rule.id,
                        escalation=rule.escalation,
                    ),
                )
        return None


def _compile_rules(raw_rules: Any, stage: str) -> tuple[_CompiledRule, ...]:
    if not isinstance(raw_rules, list):
        raise GuardrailConfigurationError(f"{stage}_rules must be a list")

    compiled: list[_CompiledRule] = []
    seen_ids: set[str] = set()
    for index, raw_rule in enumerate(raw_rules):
        path = f"{stage}_rules[{index}]"
        if not isinstance(raw_rule, Mapping):
            raise GuardrailConfigurationError(f"{path} must be an object")
        rule_id = raw_rule.get("id")
        response = raw_rule.get("response")
        category = raw_rule.get("category")
        patterns = raw_rule.get("patterns")
        escalation = raw_rule.get("escalation")
        if not isinstance(rule_id, str) or not _METADATA_IDENTIFIER.fullmatch(rule_id):
            raise GuardrailConfigurationError(f"{path}.id must be a safe identifier")
        if rule_id in seen_ids:
            raise GuardrailConfigurationError(f"Duplicate guardrail rule id: {rule_id}")
        if not isinstance(response, str) or not response.strip():
            raise GuardrailConfigurationError(
                f"{path}.response must be a non-empty string"
            )
        if not isinstance(category, str) or not _METADATA_IDENTIFIER.fullmatch(
            category
        ):
            raise GuardrailConfigurationError(
                f"{path}.category must be a safe identifier"
            )
        if escalation is not None and (
            not isinstance(escalation, str)
            or not _METADATA_IDENTIFIER.fullmatch(escalation)
        ):
            raise GuardrailConfigurationError(
                f"{path}.escalation must be a safe identifier"
            )
        if (
            not isinstance(patterns, list)
            or not patterns
            or any(not isinstance(pattern, str) or not pattern for pattern in patterns)
        ):
            raise GuardrailConfigurationError(
                f"{path}.patterns must be a non-empty string list"
            )
        try:
            compiled_patterns = tuple(
                re.compile(pattern, re.IGNORECASE) for pattern in patterns
            )
        except re.error as exc:
            raise GuardrailConfigurationError(
                f"{path}.patterns contains invalid regular expression"
            ) from exc
        seen_ids.add(rule_id)
        compiled.append(
            _CompiledRule(
                id=rule_id,
                patterns=compiled_patterns,
                response=response.strip(),
                category=category,
                escalation=escalation,
            )
        )
    return tuple(compiled)


def _latest_user_text(frame: LLMContextFrame) -> tuple[int, str] | None:
    messages = frame.context.get_messages()
    for index in range(len(messages) - 1, -1, -1):
        message = messages[index]
        if not isinstance(message, Mapping) or message.get("role") != "user":
            continue
        content = message.get("content")
        if isinstance(content, str):
            return id(message), content
        if isinstance(content, list):
            parts = [
                item.get("text", "")
                for item in content
                if isinstance(item, Mapping) and isinstance(item.get("text"), str)
            ]
            return id(message), "".join(parts)
    return None


class GuardrailInputProcessor(FrameProcessor):
    def __init__(
        self,
        service: GuardrailService,
        *,
        bypass_callback: InputBypassCallback | None = None,
    ) -> None:
        super().__init__()
        self._service = service
        self._bypass_callback = bypass_callback
        self._last_checked_user_message: tuple[int, str] | None = None

    async def process_frame(self, frame: Frame, direction: FrameDirection) -> None:
        await super().process_frame(frame, direction)
        if (
            isinstance(frame, LLMContextFrame)
            and direction == FrameDirection.DOWNSTREAM
        ):
            latest_user_message = _latest_user_text(frame)
            if (
                latest_user_message is not None
                and latest_user_message != self._last_checked_user_message
            ):
                self._last_checked_user_message = latest_user_message
                _, text = latest_user_message
                decision = self._service.evaluate_input(text)
                if decision is not None:
                    await self._service.record(decision.violation)
                    if self._bypass_callback is not None:
                        await self._bypass_callback()
                    await self.push_frame(
                        TTSSpeakFrame(decision.response), FrameDirection.DOWNSTREAM
                    )
                    return
        await self.push_frame(frame, direction)


class GuardrailOutputProcessor(FrameProcessor):
    def __init__(self, service: GuardrailService) -> None:
        super().__init__()
        self._service = service
        self._buffering = False
        self._text_frames: list[tuple[LLMTextFrame, FrameDirection]] = []

    async def process_frame(self, frame: Frame, direction: FrameDirection) -> None:
        await super().process_frame(frame, direction)
        if not self._service.output_enabled:
            await self.push_frame(frame, direction)
            return
        if direction != FrameDirection.DOWNSTREAM:
            await self.push_frame(frame, direction)
            return
        if isinstance(frame, LLMFullResponseStartFrame):
            self._buffering = True
            self._text_frames.clear()
            await self.push_frame(frame, direction)
            return
        if self._buffering and isinstance(frame, LLMTextFrame):
            self._text_frames.append((frame, direction))
            return
        if self._buffering and isinstance(frame, LLMFullResponseEndFrame):
            self._buffering = False
            text = "".join(buffered.text for buffered, _ in self._text_frames)
            decision = self._service.evaluate_output(text)
            if decision is not None:
                await self._service.record(decision.violation)
                await self.push_frame(LLMTextFrame(decision.response), direction)
            else:
                for buffered, buffered_direction in self._text_frames:
                    await self.push_frame(buffered, buffered_direction)
            self._text_frames.clear()
            await self.push_frame(frame, direction)
            return
        await self.push_frame(frame, direction)
