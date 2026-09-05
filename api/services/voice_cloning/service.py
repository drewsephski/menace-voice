from __future__ import annotations

import asyncio
import io
import os
import re
import wave
from contextlib import asynccontextmanager
from datetime import timedelta

import httpx
from loguru import logger

from api.db import db_client
from api.schemas.voice_clone import VoiceCloneCapabilities
from api.services.configuration.registry import ElevenlabsTTSConfiguration

MAX_SAMPLE_BYTES = 20 * 1024 * 1024
PROVIDER_URL = "https://api.elevenlabs.io"


class VoiceCloneError(Exception):
    def __init__(self, message: str, status_code: int = 400):
        super().__init__(message)
        self.status_code = status_code


async def credentials(organization_id: int, source: str | None = None) -> tuple[str, str]:
    platform_key = os.getenv("VOICE_CLONING_ELEVENLABS_API_KEY", "").strip()
    if source in (None, "platform") and platform_key:
        return platform_key, "platform"
    if source != "platform":
        from api.services.configuration.ai_model_configuration import get_resolved_ai_model_configuration

        resolved = await get_resolved_ai_model_configuration(organization_id=organization_id)
        tts = resolved.effective.tts
        if (tts and tts.provider == "elevenlabs" and tts.api_key
                and getattr(tts, "base_url", PROVIDER_URL).rstrip("/") == PROVIDER_URL):
            return tts.api_key, "organization"
    raise VoiceCloneError(
        "Voice cloning needs an ElevenLabs connection. Configure ElevenLabs in Models, "
        "or ask your administrator to enable hosted voice cloning.", 409,
    )


async def capabilities(organization_id: int) -> VoiceCloneCapabilities:
    try:
        await credentials(organization_id)
    except VoiceCloneError as exc:
        return VoiceCloneCapabilities(available=False, message=str(exc))
    return VoiceCloneCapabilities(available=True, message="Record 1–2 minutes in a quiet room for the best match.")


@asynccontextmanager
async def operation_lock(organization_id: int):
    key = "voice_cloning_operation"
    token = await db_client.claim_configuration_lease(organization_id, key, timedelta(minutes=5))
    if token is None:
        raise VoiceCloneError("Another voice operation is running. Please try again shortly.", 409)
    try:
        yield
    finally:
        await db_client.release_configuration_lease(organization_id, key, token)


async def normalize_sample(data: bytes) -> bytes:
    if not data or len(data) > MAX_SAMPLE_BYTES:
        raise VoiceCloneError("Upload an audio recording up to 20 MB.")
    try:
        process = await asyncio.create_subprocess_exec(
            "ffmpeg", "-v", "error", "-nostdin", "-protocol_whitelist", "pipe",
            "-i", "pipe:0", "-t", "181", "-vn", "-ac", "1", "-ar", "16000",
            "-f", "s16le", "pipe:1", stdin=asyncio.subprocess.PIPE,
            stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE,
        )
    except FileNotFoundError as exc:
        raise VoiceCloneError("Audio processing is unavailable. Contact your administrator.", 503) from exc
    try:
        pcm, _ = await asyncio.wait_for(process.communicate(data), timeout=30)
    except (TimeoutError, asyncio.CancelledError):
        process.kill()
        await process.wait()
        raise
    duration = len(pcm) / 32000
    if process.returncode != 0 or not 30 <= duration <= 180:
        raise VoiceCloneError("Use a valid audio recording between 30 seconds and 3 minutes.")
    output = io.BytesIO()
    with wave.open(output, "wb") as audio:
        audio.setnchannels(1)
        audio.setsampwidth(2)
        audio.setframerate(16000)
        audio.writeframes(pcm)
    return output.getvalue()


async def provider_request(method: str, path: str, api_key: str, **kwargs) -> httpx.Response:
    try:
        async with httpx.AsyncClient(timeout=httpx.Timeout(90, connect=10)) as client:
            response = await client.request(method, f"{PROVIDER_URL}{path}", headers={"xi-api-key": api_key}, **kwargs)
    except httpx.RequestError as exc:
        raise VoiceCloneError("ElevenLabs did not respond. Check your voice library before retrying creation.", 502) from exc
    if response.is_success or (method == "DELETE" and response.status_code == 404):
        return response
    messages = {
        401: "The ElevenLabs connection is invalid. Update the API key.",
        403: "ElevenLabs denied this operation. Check voice permissions, verification, and plan access.",
        404: "This voice is no longer accessible in the connected ElevenLabs account.",
        429: "ElevenLabs has reached a usage or voice limit. Try again after checking your account.",
    }
    raise VoiceCloneError(messages.get(response.status_code, "ElevenLabs could not complete this operation. Check your recording and account."), 502)


async def get_clone(clone_id: str, organization_id: int):
    clone = await db_client.get_voice_clone(clone_id, organization_id)
    if clone is None:
        raise VoiceCloneError("Voice clone not found.", 404)
    return clone


async def create_clone(*, organization_id: int, user_id: int, name: str, consent: bool, sample: bytes):
    name = name.strip()
    if not name or len(name) > 80:
        raise VoiceCloneError("Enter a voice name between 1 and 80 characters.")
    if not consent:
        raise VoiceCloneError("Confirm that this is your own voice and you consent to cloning it.")
    api_key, source = await credentials(organization_id)
    async with operation_lock(organization_id):
        if len(await db_client.list_voice_clones(organization_id)) >= 10:
            raise VoiceCloneError("Your organization can keep up to 10 voice clones. Delete an unused voice first.", 409)
        try:
            audio = await normalize_sample(sample)
        except TimeoutError as exc:
            raise VoiceCloneError("The recording took too long to process. Try a shorter recording.", 422) from exc
        response = await provider_request("POST", "/v1/voices/add", api_key,
                                          data={"name": name}, files={"files": ("sample.wav", audio, "audio/wav")})
        try:
            result = response.json()
            voice_id = result["voice_id"]
            if not isinstance(voice_id, str) or not re.fullmatch(r"[A-Za-z0-9_-]{1,128}", voice_id):
                raise ValueError("Invalid voice ID")
            verification = result["requires_verification"]
            if not isinstance(verification, bool):
                raise ValueError("Invalid verification status")
        except (ValueError, KeyError, TypeError) as exc:
            raise VoiceCloneError("ElevenLabs returned an unexpected response. Check your provider voice library before retrying.", 502) from exc
        try:
            return await db_client.create_voice_clone(
                organization_id=organization_id, created_by=user_id, name=name,
                provider_voice_id=voice_id, credential_source=source,
                status="verification_required" if verification else "ready",
            )
        except Exception:
            try:
                await provider_request("DELETE", f"/v1/voices/{voice_id}", api_key)
            except VoiceCloneError:
                logger.error("Voice clone persistence and provider cleanup failed for organization {}", organization_id)
            raise


async def preview_clone(clone_id: str, organization_id: int, text: str) -> bytes:
    if not text.strip():
        raise VoiceCloneError("Enter something for your voice to say.")
    async with operation_lock(organization_id):
        clone = await get_clone(clone_id, organization_id)
        if clone.status == "deleting":
            raise VoiceCloneError("This voice is being deleted.", 409)
        api_key, _ = await credentials(organization_id, clone.credential_source)
        response = await provider_request("POST", f"/v1/text-to-speech/{clone.provider_voice_id}", api_key,
            params={"output_format": "mp3_44100_128"},
            json={"text": text, "model_id": "eleven_flash_v2_5"})
        if not response.headers.get("content-type", "").startswith("audio/") or not response.content:
            raise VoiceCloneError("ElevenLabs returned no playable audio.", 502)
        if clone.status == "verification_required":
            await db_client.set_voice_clone_status(clone_id, organization_id, "ready")
        return response.content


async def delete_clone(clone_id: str, organization_id: int) -> None:
    async with operation_lock(organization_id):
        clone = await get_clone(clone_id, organization_id)
        if await db_client.voice_clone_in_use(clone_id, organization_id):
            raise VoiceCloneError("Remove this voice from agent drafts and publish those changes before deleting it.", 409)
        api_key, _ = await credentials(organization_id, clone.credential_source)
        # A retry can finish deletion after provider success followed by a DB failure.
        await db_client.set_voice_clone_status(clone_id, organization_id, "deleting")
        await provider_request("DELETE", f"/v1/voices/{clone.provider_voice_id}", api_key)
        await db_client.set_voice_clone_status(clone_id, organization_id, "deleted")


async def apply_clone_to_config(configuration, clone_id: str, organization_id: int):
    clone = await get_clone(clone_id, organization_id)
    if clone.status != "ready":
        raise VoiceCloneError("This voice is not ready. Complete provider verification and preview it first.", 409)
    if configuration.is_realtime:
        raise VoiceCloneError("Voice cloning needs a pipeline agent. Select pipeline mode in Models first.", 409)
    api_key, _ = await credentials(organization_id, clone.credential_source)
    return configuration.model_copy(update={"tts": ElevenlabsTTSConfiguration(
        api_key=api_key, voice=clone.provider_voice_id,
    )})


async def assign_clone(workflow_id: int, clone_id: str | None, organization_id: int) -> None:
    from api.services.configuration.ai_model_configuration import get_effective_ai_model_configuration_for_workflow

    async with operation_lock(organization_id):
        workflow = await db_client.get_workflow(workflow_id, organization_id=organization_id)
        if workflow is None:
            raise VoiceCloneError("Agent not found.", 404)
        draft = await db_client.get_draft_version(workflow_id)
        base = draft or workflow.released_definition
        config = dict(base.workflow_configurations if base else workflow.workflow_configurations or {})
        if clone_id:
            config["voice_clone_id"] = clone_id
            await get_effective_ai_model_configuration_for_workflow(
                organization_id=organization_id, workflow_configurations=config)
        else:
            config.pop("voice_clone_id", None)
        await db_client.update_workflow(workflow_id, name=None, workflow_definition=None,
            template_context_variables=None, workflow_configurations=config, organization_id=organization_id)
