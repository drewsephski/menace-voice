"""OpenAI-compatible LLM services with clearer completion error handling."""

from __future__ import annotations

from openai import AsyncStream
from openai.types.chat import ChatCompletionChunk
from pipecat.frames.frames import ErrorFrame
from pipecat.processors.frame_processor import FrameDirection
from pipecat.processors.aggregators.llm_context import LLMContext
from pipecat.services.openai.llm import OpenAILLMService
from pipecat.services.openrouter.llm import OpenRouterLLMService

from api.services.pipecat.llm_completion_errors import (
    format_llm_completion_error,
    is_fatal_llm_completion_error,
)


class LLMCompletionErrorMixin:
    """Mixin that normalizes provider failures before they reach the pipeline."""

    _failure_provider: str | None = None

    async def get_chat_completions(
        self, context: LLMContext
    ) -> AsyncStream[ChatCompletionChunk]:
        try:
            return await super().get_chat_completions(context)  # type: ignore[misc]
        except Exception as exc:
            message = format_llm_completion_error(
                exc,
                provider=self._failure_provider,
            )
            if is_fatal_llm_completion_error(
                exc,
                provider=self._failure_provider,
            ):
                await self.push_frame(
                    ErrorFrame(error=message, fatal=True),
                    direction=FrameDirection.UPSTREAM,
                )
                return None  # type: ignore[return-value]
            raise RuntimeError(message) from exc


class DograhOpenAILLMService(LLMCompletionErrorMixin, OpenAILLMService):
    """OpenAI-compatible LLM with bounded, actionable completion failures."""


class DograhOpenRouterLLMService(LLMCompletionErrorMixin, OpenRouterLLMService):
    """OpenRouter LLM with bounded, actionable completion failures."""
