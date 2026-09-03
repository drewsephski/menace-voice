"""Bounds tool outputs before they are written into LLM context.

Large MCP payloads (for example Exa web-search results with scraped HTML) can
bloat the next completion request enough to trip upstream WAF/proxy rules and
surface as opaque ``403 Forbidden`` HTML errors during completion.
"""

from __future__ import annotations

import json
from typing import Any

DEFAULT_TOOL_RESULT_MAX_CHARS = 12_000
TRUNCATION_SUFFIX = "...(truncated for model context)"


def bound_tool_result_for_llm(
    value: Any,
    *,
    max_chars: int = DEFAULT_TOOL_RESULT_MAX_CHARS,
) -> Any:
    """Return a tool result that is safe to pass to ``result_callback``.

    Strings are truncated in place. Dict/list results are serialized, bounded,
    and returned as a string so the LLM always sees a bounded payload.
    """
    if max_chars <= len(TRUNCATION_SUFFIX):
        raise ValueError("max_chars must be larger than the truncation suffix")

    if isinstance(value, (dict, list)):
        serialized = json.dumps(value, ensure_ascii=False)
        return _bound_text(serialized, max_chars=max_chars)

    return _bound_text(str(value), max_chars=max_chars)


def _bound_text(text: str, *, max_chars: int) -> str:
    if len(text) <= max_chars:
        return text
    keep = max_chars - len(TRUNCATION_SUFFIX)
    if keep <= 0:
        return TRUNCATION_SUFFIX[:max_chars]
    return f"{text[:keep]}{TRUNCATION_SUFFIX}"
