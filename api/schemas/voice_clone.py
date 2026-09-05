from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


class VoiceCloneResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    name: str
    status: Literal["ready", "verification_required", "deleting", "deleted"]
    created_at: datetime


class VoiceCloneCapabilities(BaseModel):
    available: bool
    message: str
    max_sample_bytes: int = 20 * 1024 * 1024
    min_sample_seconds: int = 30
    max_sample_seconds: int = 180


class VoiceClonePreviewRequest(BaseModel):
    text: str = Field(min_length=1, max_length=500)


class VoiceCloneAssignment(BaseModel):
    voice_clone_id: str | None = Field(default=None, max_length=36)


class VoiceCloneAgent(BaseModel):
    id: int
    name: str
    voice_clone_id: str | None
    published_voice_clone_id: str | None
