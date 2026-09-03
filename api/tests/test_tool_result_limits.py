from api.services.workflow.tools.tool_result_limits import (
    DEFAULT_TOOL_RESULT_MAX_CHARS,
    TRUNCATION_SUFFIX,
    bound_tool_result_for_llm,
)


def test_bound_tool_result_for_llm_truncates_long_strings():
    text = "x" * (DEFAULT_TOOL_RESULT_MAX_CHARS + 500)
    bounded = bound_tool_result_for_llm(text)

    assert len(bounded) == DEFAULT_TOOL_RESULT_MAX_CHARS
    assert bounded.endswith(TRUNCATION_SUFFIX)


def test_bound_tool_result_for_llm_preserves_short_strings():
    text = "short tool payload"
    assert bound_tool_result_for_llm(text) == text


def test_bound_tool_result_for_llm_serializes_and_bounds_dicts():
    payload = {"content": "y" * (DEFAULT_TOOL_RESULT_MAX_CHARS + 100)}
    bounded = bound_tool_result_for_llm(payload)

    assert isinstance(bounded, str)
    assert len(bounded) == DEFAULT_TOOL_RESULT_MAX_CHARS
    assert bounded.endswith(TRUNCATION_SUFFIX)
