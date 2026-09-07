"""HTTP-to-runtime integration with real DB/audio processing and mocked provider I/O."""

import io
import uuid
import wave
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock

import httpx
import pytest
from fastapi import FastAPI

from api.routes import voice_clone
from api.routes import workflow as workflow_routes
from api.schemas.ai_model_configuration import EffectiveAIModelConfiguration
from api.services.auth.depends import get_user
from api.services.configuration import ai_model_configuration
from api.services.configuration.registry import ElevenlabsTTSConfiguration
from api.services.pipecat import service_factory
from api.services.pipecat.audio_config import AudioConfig
from api.services.voice_cloning import service
from api.tests.conftest import DEFAULT_WORKFLOW_DEFINITION
from api.tests.test_voice_cloning import wav_sample


@pytest.mark.asyncio
async def test_upload_preview_publish_and_runtime_voice_lifecycle(
    db_session, async_session, monkeypatch
):
    suffix = uuid.uuid4().hex
    user, _ = await db_session.get_or_create_user_by_provider_id(f"clone-e2e-{suffix}")
    org, _ = await db_session.get_or_create_organization_by_provider_id(
        org_provider_id=f"clone-e2e-{suffix}", user_id=user.id
    )
    workflow = await db_session.create_workflow(
        name="Clone integration agent",
        workflow_definition=DEFAULT_WORKFLOW_DEFINITION,
        user_id=user.id,
        organization_id=org.id,
        workflow_configurations={"dictionary": "preserve this"},
    )
    provider_voice_id = "private-provider-voice-e2e"
    preview_audio = b"ID3-mocked-provider-preview"
    provider_calls = []

    async def provider_response(method, path, api_key, **kwargs):
        assert api_key == "test-provider-key"
        provider_calls.append((method, path))
        if method == "POST" and path == "/v1/voices/add":
            # This payload passed through the real ffmpeg normalizer.
            filename, normalized, content_type = kwargs["files"]["files"]
            assert (filename, content_type) == ("sample.wav", "audio/wav")
            with wave.open(io.BytesIO(normalized), "rb") as audio:
                assert audio.getnchannels() == 1
                assert audio.getsampwidth() == 2
                assert audio.getframerate() == service.SAMPLE_RATE
                assert audio.getnframes() / audio.getframerate() == 30
            return httpx.Response(
                200,
                json={"voice_id": provider_voice_id, "requires_verification": True},
            )
        if method == "POST" and path == f"/v1/text-to-speech/{provider_voice_id}":
            assert kwargs["json"]["text"] == "This is my cloned voice."
            return httpx.Response(
                200, content=preview_audio, headers={"content-type": "audio/mpeg"}
            )
        assert (method, path) == ("DELETE", f"/v1/voices/{provider_voice_id}")
        return httpx.Response(204)

    monkeypatch.setattr(service, "provider_request", provider_response)
    monkeypatch.setattr(
        service,
        "credentials",
        AsyncMock(return_value=("test-provider-key", "platform")),
    )
    organization_config = EffectiveAIModelConfiguration(
        tts=ElevenlabsTTSConfiguration(
            api_key="test-organization-key",
            voice="original-voice",
            model="eleven_multilingual_v2",
            speed=1.15,
        )
    )
    monkeypatch.setattr(
        ai_model_configuration,
        "get_resolved_ai_model_configuration",
        AsyncMock(
            return_value=ai_model_configuration.ResolvedAIModelConfiguration(
                effective=organization_config, source="empty"
            )
        ),
    )
    tts_constructor = Mock()
    monkeypatch.setattr(service_factory, "ElevenLabsTTSService", tts_constructor)
    app = FastAPI()
    app.include_router(voice_clone.router)
    app.include_router(workflow_routes.router)
    app.dependency_overrides[get_user] = lambda: SimpleNamespace(
        id=user.id, provider_id=user.provider_id, selected_organization_id=org.id
    )

    async with httpx.AsyncClient(
        transport=httpx.ASGITransport(app=app), base_url="http://testserver"
    ) as client:
        created = await client.post(
            "/voice-clones",
            data={"name": "My voice", "consent": "true"},
            files={"sample": ("recording.wav", wav_sample(30), "audio/wav")},
        )
        assert created.status_code == 201, created.text
        assert set(created.json()) == {"id", "name", "status", "created_at"}
        assert provider_voice_id not in created.text
        assert created.json()["status"] == "verification_required"
        clone_id = created.json()["id"]
        clone = await db_session.get_voice_clone(clone_id, org.id)
        assert clone.organization_id == org.id
        assert clone.created_by == user.id
        assert clone.provider_voice_id == provider_voice_id

        preview = await client.post(
            f"/voice-clones/{clone_id}/preview",
            json={"text": "This is my cloned voice."},
        )
        assert preview.status_code == 200, preview.text
        assert preview.headers["content-type"] == "audio/mpeg"
        assert preview.content == preview_audio
        await async_session.refresh(clone)
        assert clone.status == "ready"

        assigned = await client.put(
            f"/voice-clones/agents/{workflow.id}", json={"voice_clone_id": clone_id}
        )
        assert assigned.status_code == 204, assigned.text
        draft = await db_session.get_draft_version(workflow.id)
        assert draft.workflow_configurations == {
            "dictionary": "preserve this",
            "voice_clone_id": clone_id,
        }
        await async_session.refresh(workflow, ["released_definition"])
        assert workflow.released_definition.workflow_configurations == {
            "dictionary": "preserve this"
        }
        before_publish = await ai_model_configuration.get_effective_ai_model_configuration_for_workflow(
            organization_id=org.id,
            workflow_configurations=workflow.released_definition.workflow_configurations,
        )
        assert before_publish.tts.voice == "original-voice"

        published = await client.post(f"/workflow/{workflow.id}/publish")
        assert published.status_code == 200, published.text
        await async_session.refresh(workflow, ["released_definition"])
        assert (
            workflow.released_definition.workflow_configurations["voice_clone_id"]
            == clone_id
        )
        runtime_config = await ai_model_configuration.get_effective_ai_model_configuration_for_workflow(
            organization_id=org.id,
            workflow_configurations=workflow.released_definition.workflow_configurations,
        )
        tts = service_factory.create_tts_service(
            runtime_config,
            AudioConfig(
                transport_in_sample_rate=16000, transport_out_sample_rate=16000
            ),
        )
        assert tts is tts_constructor.return_value
        tts_constructor.assert_called_once()
        settings = tts_constructor.call_args.kwargs["settings"]
        assert settings.voice == provider_voice_id
        assert settings.model == "eleven_multilingual_v2"
        assert settings.speed == 1.15
        assert tts_constructor.call_args.kwargs["api_key"] == "test-provider-key"

        removed = await client.put(
            f"/voice-clones/agents/{workflow.id}", json={"voice_clone_id": None}
        )
        assert removed.status_code == 204, removed.text
        assert await db_session.voice_clone_in_use(clone_id, org.id)
        republished = await client.post(f"/workflow/{workflow.id}/publish")
        assert republished.status_code == 200, republished.text
        assert not await db_session.voice_clone_in_use(clone_id, org.id)
        deleted = await client.delete(f"/voice-clones/{clone_id}")
        assert deleted.status_code == 204, deleted.text
        assert await db_session.get_voice_clone(clone_id, org.id) is None
        assert await db_session.list_voice_clones(org.id) == []

    assert provider_calls == [
        ("POST", "/v1/voices/add"),
        ("POST", f"/v1/text-to-speech/{provider_voice_id}"),
        ("DELETE", f"/v1/voices/{provider_voice_id}"),
    ]
