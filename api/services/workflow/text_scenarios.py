"""Bounded conversation regressions. External effects are rejected, never mocked."""

from copy import deepcopy
from typing import Any

from pydantic import BaseModel, Field, field_validator

MAX_SCENARIO_MESSAGES = 20
SCENARIO_TIMEOUT_SECONDS = 180


class ScenarioAssertions(BaseModel):
    node_ids: list[str] = Field(default_factory=list, max_length=20)
    reply_contains: list[str] = Field(default_factory=list, max_length=20)

    @field_validator("node_ids", "reply_contains")
    @classmethod
    def validate_strings(cls, values: list[str]) -> list[str]:
        if any(not value.strip() or len(value) > 500 for value in values):
            raise ValueError("Assertions must contain 1–500 characters")
        return list(dict.fromkeys(value.strip() for value in values))


class SaveScenarioRequest(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    assertions: ScenarioAssertions = Field(default_factory=ScenarioAssertions)

    @field_validator("name")
    @classmethod
    def trim_name(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("Name cannot be blank")
        return value.strip()


class ReplayScenarioRequest(BaseModel):
    use_draft: bool = True


class SavedScenario(BaseModel):
    source_run_id: int
    name: str
    messages: list[str] = Field(min_length=1, max_length=MAX_SCENARIO_MESSAGES)
    initial_context: dict[str, Any]
    assertions: ScenarioAssertions


class ScenarioCheck(BaseModel):
    description: str
    passed: bool


class ScenarioReplayResult(BaseModel):
    workflow_run_id: int
    definition_id: int
    passed: bool
    checks: list[ScenarioCheck]
    turns: list[dict[str, Any]]
    error: str | None = None


def scenario_messages(session_data: dict[str, Any]) -> list[str]:
    turns = session_data.get("turns") or []
    if not isinstance(turns, list) or any(not isinstance(turn, dict) for turn in turns):
        raise ValueError("Conversation contains malformed turns")
    cursor = session_data.get("cursor_turn_id")
    if cursor:
        ids = [turn.get("id") for turn in turns]
        if cursor not in ids:
            raise ValueError("Conversation has an invalid rewind cursor")
        turns = turns[: ids.index(cursor) + 1]
    messages = []
    for turn in turns:
        user_message = turn.get("user_message")
        if user_message is None:
            continue
        text = user_message.get("text") if isinstance(user_message, dict) else None
        if (
            turn.get("status") != "completed"
            or not isinstance(text, str)
            or not text.strip()
        ):
            raise ValueError("Only completed, nonempty messages can be saved")
        if len(text) > 4000:
            raise ValueError("Scenario messages must not exceed 4,000 characters")
        messages.append(text)
    if not 1 <= len(messages) <= MAX_SCENARIO_MESSAGES:
        raise ValueError(
            f"Save a conversation with 1–{MAX_SCENARIO_MESSAGES} user messages"
        )
    return messages


def regression_snapshot(definition) -> dict[str, Any]:
    """Fail closed before any model, pre-call, MCP or integration execution.

    The allowlist must be reviewed when adding conversational node types. Keeping
    all external tool references out also prevents transfer-tool registration.
    """
    graph = deepcopy(definition.workflow_json)
    if not isinstance(graph, dict) or not isinstance(graph.get("nodes"), list):
        raise ValueError("Save a valid conversational workflow before replaying")  # noqa: TRY004 - reported as invalid scenario input
    allowed = {"startCall", "endCall", "agentNode", "globalNode", "trigger"}
    for node in graph.get("nodes", []):
        data = node.get("data") or {}
        if node.get("type") not in allowed:
            raise ValueError(
                "Regression replay supports conversational nodes only; remove integration, webhook, and QA nodes from the test workflow"
            )
        if data.get("tool_uuids") or data.get("mcp_tool_filters"):
            raise ValueError(
                "Regression replay does not execute tools, MCP, or call transfers; use a conversation-only test workflow"
            )
        if (
            data.get("pre_call_fetch_url")
            or data.get("pre_call_fetch_enabled")
            or data.get("pre_call_fetch_mode", "disabled") not in (None, "disabled")
        ):
            raise ValueError(
                "Regression replay does not execute pre-call fetch; supply the context in the saved conversation instead"
            )
    return {
        "definition_id": definition.id,
        "workflow_json": graph,
        "workflow_configurations": deepcopy(definition.workflow_configurations or {}),
    }


def evaluate_scenario(
    turns: list[dict[str, Any]], assertions: ScenarioAssertions, expected_messages: int
) -> list[ScenarioCheck]:
    nodes = {
        event.get("payload", {}).get("node_id")
        for turn in turns
        for event in turn.get("events", [])
        if event.get("type") == "node_transition"
    }
    replies = "\n".join(
        (turn.get("assistant_message") or {}).get("text", "") for turn in turns
    ).casefold()
    checks = [
        ScenarioCheck(
            description="All saved messages completed",
            passed=sum(
                bool(turn.get("user_message")) and turn.get("status") == "completed"
                for turn in turns
            )
            == expected_messages,
        )
    ]
    checks.extend(
        ScenarioCheck(description=f"Visited node {node}", passed=node in nodes)
        for node in assertions.node_ids
    )
    checks.extend(
        ScenarioCheck(
            description=f"Reply contains “{text}”", passed=text.casefold() in replies
        )
        for text in assertions.reply_contains
    )
    return checks
