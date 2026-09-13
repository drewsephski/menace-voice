from unittest.mock import AsyncMock, patch

import pytest

from api.services.pipecat.llm_completion_errors import (
    format_llm_completion_error,
    is_fatal_llm_completion_error,
)


class _FakeResponse:
    def __init__(self, status_code: int):
        self.status_code = status_code


class _FakeAPIError(Exception):
    def __init__(self, message: str, *, status_code: int):
        super().__init__(message)
        self.status_code = status_code
        self.response = _FakeResponse(status_code)


def test_format_llm_completion_error_strips_html_403():
    exc = _FakeAPIError(
        "<html><head><title>403 Forbidden</title></head><body><center><h1>403 Forbidden</h1></center></body></html>",
        status_code=403,
    )

    message = format_llm_completion_error(exc, provider="openai")

    assert "<html" not in message.lower()
    assert "403" in message


def test_format_llm_completion_error_maps_dograh_403_to_quota_message(monkeypatch):
    monkeypatch.setattr(
        "api.services.pipecat.llm_completion_errors.DEPLOYMENT_MODE", "hosted"
    )
    exc = _FakeAPIError("forbidden", status_code=403)

    message = format_llm_completion_error(exc, provider="dograh")

    assert "Menace Voice credits" in message


def test_is_fatal_llm_completion_error_for_dograh_auth_failures():
    exc = _FakeAPIError("forbidden", status_code=403)

    assert is_fatal_llm_completion_error(exc, provider="dograh") is True


@pytest.mark.asyncio
async def test_dograh_openai_llm_service_rewrites_html_errors():
    from pipecat.processors.aggregators.llm_context import LLMContext
    from pipecat.services.openai.base_llm import OpenAILLMSettings
    from pipecat.services.openai.llm import OpenAILLMService

    from api.services.pipecat.openai_llm import DograhOpenAILLMService

    service = DograhOpenAILLMService(
        api_key="test-key",
        settings=OpenAILLMSettings(model="gpt-4.1-mini"),
    )
    service._failure_provider = "openai"
    service.push_frame = AsyncMock()

    with patch.object(
        OpenAILLMService,
        "get_chat_completions",
        AsyncMock(
            side_effect=_FakeAPIError(
                "<html><head><title>403 Forbidden</title></head></html>",
                status_code=403,
            )
        ),
    ):
        with pytest.raises(RuntimeError, match="403"):
            await service.get_chat_completions(LLMContext())

    service.push_frame.assert_not_awaited()
