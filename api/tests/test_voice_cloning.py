import io
import wave
from types import SimpleNamespace
from unittest.mock import AsyncMock

import httpx
import pytest

from api.schemas.ai_model_configuration import EffectiveAIModelConfiguration
from api.services.configuration import ai_model_configuration
from api.services.configuration.registry import ElevenlabsTTSConfiguration
from api.services.voice_cloning import service


@pytest.fixture
def mocks(monkeypatch):
    monkeypatch.setenv("VOICE_CLONING_ELEVENLABS_API_KEY", "test-platform-key")
    for name, value in {
        "claim_configuration_lease": "lease",
        "release_configuration_lease": None,
        "list_voice_clones": [],
        "set_voice_clone_status": None,
        "voice_clone_in_use": False,
    }.items():
        monkeypatch.setattr(service.db_client, name, AsyncMock(return_value=value))
    provider = AsyncMock(
        return_value=httpx.Response(
            200, json={"voice_id": "private-voice", "requires_verification": False}
        )
    )
    monkeypatch.setattr(service, "provider_request", provider)
    clone = SimpleNamespace(
        id="clone-1",
        provider_voice_id="private-voice",
        credential_source="platform",
        status="ready",
    )
    monkeypatch.setattr(
        service.db_client, "get_voice_clone", AsyncMock(return_value=clone)
    )
    monkeypatch.setattr(
        service.db_client, "create_voice_clone", AsyncMock(return_value=clone)
    )
    monkeypatch.setattr(
        service, "normalize_sample", AsyncMock(return_value=b"wave-data")
    )
    return provider


@pytest.mark.asyncio
async def test_consent_required_before_provider_call(mocks):
    with pytest.raises(service.VoiceCloneError, match="own voice"):
        await service.create_clone(
            organization_id=7, user_id=1, name="Me", consent=False, sample=b"data"
        )
    mocks.assert_not_awaited()


@pytest.mark.asyncio
async def test_create_records_owner_consent_and_verification(mocks):
    mocks.return_value = httpx.Response(
        200, json={"voice_id": "private-voice", "requires_verification": True}
    )
    await service.create_clone(
        organization_id=7, user_id=3, name=" My voice ", consent=True, sample=b"data"
    )
    service.db_client.create_voice_clone.assert_awaited_once_with(
        organization_id=7,
        created_by=3,
        name="My voice",
        provider_voice_id="private-voice",
        credential_source="platform",
        status="verification_required",
    )
    assert mocks.call_args.kwargs["files"]["files"] == (
        "sample.wav",
        b"wave-data",
        "audio/wav",
    )
    service.db_client.release_configuration_lease.assert_awaited_once()


@pytest.mark.asyncio
async def test_create_quota_blocks_provider(mocks):
    service.db_client.list_voice_clones.return_value = [object()] * 10
    with pytest.raises(service.VoiceCloneError, match="10 voice clones"):
        await service.create_clone(
            organization_id=7, user_id=3, name="Me", consent=True, sample=b"data"
        )
    mocks.assert_not_awaited()


@pytest.mark.asyncio
async def test_db_failure_removes_created_provider_voice(mocks):
    service.db_client.create_voice_clone.side_effect = RuntimeError("db down")
    with pytest.raises(RuntimeError):
        await service.create_clone(
            organization_id=7, user_id=3, name="Me", consent=True, sample=b"data"
        )
    assert mocks.await_args_list[-1].args == (
        "DELETE",
        "/v1/voices/private-voice",
        "test-platform-key",
    )


@pytest.mark.asyncio
async def test_cross_org_preview_and_delete_never_reach_provider(mocks):
    service.db_client.get_voice_clone.return_value = None
    for action in (
        service.preview_clone("foreign", 7, "hello"),
        service.delete_clone("foreign", 7),
    ):
        with pytest.raises(service.VoiceCloneError) as error:
            await action
        assert error.value.status_code == 404
    service.db_client.get_voice_clone.assert_awaited_with("foreign", 7)
    mocks.assert_not_awaited()


@pytest.mark.asyncio
async def test_in_use_clone_cannot_be_deleted(mocks):
    service.db_client.voice_clone_in_use.return_value = True
    with pytest.raises(service.VoiceCloneError, match="publish"):
        await service.delete_clone("clone-1", 7)
    mocks.assert_not_awaited()
    service.db_client.set_voice_clone_status.assert_not_awaited()


@pytest.mark.asyncio
async def test_delete_provider_failure_remains_retryable(mocks):
    mocks.side_effect = service.VoiceCloneError("provider down", 502)
    with pytest.raises(service.VoiceCloneError):
        await service.delete_clone("clone-1", 7)
    service.db_client.set_voice_clone_status.assert_awaited_once_with(
        "clone-1", 7, "deleting"
    )


@pytest.mark.asyncio
async def test_preview_requires_audio_before_marking_voice_ready(mocks):
    service.db_client.get_voice_clone.return_value.status = "verification_required"
    with pytest.raises(service.VoiceCloneError, match="playable audio"):
        await service.preview_clone("clone-1", 7, "hello")
    service.db_client.set_voice_clone_status.assert_not_awaited()
    mocks.return_value = httpx.Response(
        200, content=b"mp3", headers={"content-type": "audio/mpeg"}
    )
    assert await service.preview_clone("clone-1", 7, "hello") == b"mp3"
    service.db_client.set_voice_clone_status.assert_awaited_once_with(
        "clone-1", 7, "ready"
    )


@pytest.mark.asyncio
async def test_runtime_uses_same_credentials_and_keeps_original_config(mocks):
    config = EffectiveAIModelConfiguration(
        tts=ElevenlabsTTSConfiguration(api_key="original", voice="stock")
    )
    result = await service.apply_clone_to_config(config, "clone-1", 7)
    assert result.tts.voice == "private-voice"
    assert result.tts.api_key == "test-platform-key"
    assert config.tts.voice == "stock"
    assert result.llm is config.llm


@pytest.mark.asyncio
async def test_realtime_and_unverified_clones_rejected(mocks):
    with pytest.raises(service.VoiceCloneError, match="pipeline"):
        await service.apply_clone_to_config(
            EffectiveAIModelConfiguration(is_realtime=True), "clone-1", 7
        )
    service.db_client.get_voice_clone.return_value.status = "verification_required"
    with pytest.raises(service.VoiceCloneError, match="not ready"):
        await service.apply_clone_to_config(
            EffectiveAIModelConfiguration(), "clone-1", 7
        )


@pytest.mark.asyncio
async def test_existing_org_clone_does_not_switch_to_platform_account(
    mocks, monkeypatch
):
    monkeypatch.setattr(
        ai_model_configuration,
        "get_resolved_ai_model_configuration",
        AsyncMock(
            return_value=SimpleNamespace(
                effective=EffectiveAIModelConfiguration(
                    tts=ElevenlabsTTSConfiguration(api_key="org-key")
                )
            )
        ),
    )
    assert await service.credentials(7, "organization") == ("org-key", "organization")
    monkeypatch.delenv("VOICE_CLONING_ELEVENLABS_API_KEY")
    with pytest.raises(service.VoiceCloneError):
        await service.credentials(7, "platform")


@pytest.mark.asyncio
async def test_central_runtime_resolver_applies_clone(mocks, monkeypatch):
    monkeypatch.setattr(
        ai_model_configuration,
        "get_resolved_ai_model_configuration",
        AsyncMock(
            return_value=SimpleNamespace(effective=EffectiveAIModelConfiguration())
        ),
    )
    result = (
        await ai_model_configuration.get_effective_ai_model_configuration_for_workflow(
            organization_id=7, workflow_configurations={"voice_clone_id": "clone-1"}
        )
    )
    assert result.tts.voice == "private-voice"
    assert result.tts.provider == "elevenlabs"


@pytest.mark.asyncio
async def test_assignment_preserves_draft_and_does_not_publish(mocks, monkeypatch):
    published = {"max_call_duration": 120}
    draft = {"max_call_duration": 180, "dictionary": "Menace"}
    monkeypatch.setattr(
        service.db_client,
        "get_workflow",
        AsyncMock(
            return_value=SimpleNamespace(
                released_definition=SimpleNamespace(workflow_configurations=published)
            )
        ),
    )
    monkeypatch.setattr(
        service.db_client,
        "get_draft_version",
        AsyncMock(return_value=SimpleNamespace(workflow_configurations=draft)),
    )
    update = AsyncMock()
    monkeypatch.setattr(service.db_client, "update_workflow", update)
    monkeypatch.setattr(
        ai_model_configuration,
        "get_effective_ai_model_configuration_for_workflow",
        AsyncMock(),
    )
    await service.assign_clone(11, "clone-1", 7)
    assert update.call_args.kwargs["workflow_configurations"] == {
        **draft,
        "voice_clone_id": "clone-1",
    }
    assert update.call_args.kwargs["organization_id"] == 7
    assert published == {"max_call_duration": 120}
    assert "voice_clone_id" not in draft


def wav_sample(seconds):
    output = io.BytesIO()
    with wave.open(output, "wb") as audio:
        audio.setnchannels(1)
        audio.setsampwidth(2)
        audio.setframerate(16000)
        audio.writeframes(b"\x01\x00" * 16000 * seconds)
    return output.getvalue()


@pytest.mark.asyncio
@pytest.mark.parametrize("sample", [b"not audio", wav_sample(2), wav_sample(181)])
async def test_real_decoder_rejects_invalid_or_out_of_range_samples(sample):
    with pytest.raises(service.VoiceCloneError):
        await service.normalize_sample(sample)


@pytest.mark.asyncio
async def test_real_decoder_accepts_valid_sample():
    result = await service.normalize_sample(wav_sample(30))
    with wave.open(io.BytesIO(result)) as audio:
        assert audio.getnframes() == 480000
        assert audio.getnchannels() == 1


@pytest.mark.asyncio
async def test_database_tenant_isolation_and_draft_publication(db_session, monkeypatch):
    user, _ = await db_session.get_or_create_user_by_provider_id(
        "voice-clone-test-user"
    )
    org, _ = await db_session.get_or_create_organization_by_provider_id(
        org_provider_id="voice-clone-test-org", user_id=user.id
    )
    clone = await db_session.create_voice_clone(
        organization_id=org.id,
        created_by=user.id,
        name="Test",
        provider_voice_id="provider-id",
        credential_source="platform",
        status="ready",
    )
    assert clone.consent_version == "own-voice-v1"
    assert await db_session.get_voice_clone(clone.id, org.id + 9999) is None
    assert await db_session.list_voice_clones(org.id + 9999) == []
    assert (await db_session.list_voice_clones(org.id))[0].id == clone.id
    await db_session.set_voice_clone_status(clone.id, org.id, "deleted")
    assert await db_session.get_voice_clone(clone.id, org.id) is None
