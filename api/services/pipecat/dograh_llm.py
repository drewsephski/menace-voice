"""Menace Voice managed LLM with actionable completion failures."""

from __future__ import annotations

from openai import AsyncStream
from openai.types.chat import ChatCompletionChunk

from api.services.pipecat.llm_completion_errors import (
    format_llm_completion_error,
    is_fatal_llm_completion_error,
)
from pipecat.frames.frames import ErrorFrame
from pipecat.processors.aggregators.llm_context import LLMContext
from pipecat.processors.frame_processor import FrameDirection
from pipecat.services.dograh.llm import DograhLLMService


class DograhManagedLLMService(DograhLLMService):
    """Dograh/MPS LLM with clearer quota and auth failure handling."""

    async def get_chat_completions(
        self, context: LLMContext
    ) -> AsyncStream[ChatCompletionChunk] | None:
        try:
            return await super().get_chat_completions(context)
        except Exception as exc:
            message = format_llm_completion_error(exc, provider="dograh")
            if is_fatal_llm_completion_error(exc, provider="dograh"):
                await self.push_frame(
                    ErrorFrame(error=message, fatal=True),
                    direction=FrameDirection.UPSTREAM,
                )
                return None
            raise RuntimeError(message) from exc
