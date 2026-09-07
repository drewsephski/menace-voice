from typing import Literal

from pydantic import BaseModel, Field, field_validator


class AgentOnboardingContext(BaseModel):
    agent_brief: str = Field(min_length=1, max_length=8_000)
    tone: str = Field(min_length=1, max_length=100)
    language: str = Field(min_length=1, max_length=100)
    voice_provider: str = Field(min_length=1, max_length=100)
    voice_name: str = Field(min_length=1, max_length=255)
    behavior_notes: str | None = Field(default=None, max_length=4_000)
    workflow_stages: list[str] = Field(
        default_factory=list,
        max_length=8,
        description="Optional template hints; the planner chooses the stages from the brief.",
    )

    @field_validator(
        "agent_brief",
        "tone",
        "language",
        "voice_provider",
        "voice_name",
    )
    @classmethod
    def _strip_required_text(cls, value: str) -> str:
        value = value.strip()
        if not value:
            raise ValueError("must not be blank")
        return value

    @field_validator("behavior_notes")
    @classmethod
    def _strip_optional_text(cls, value: str | None) -> str | None:
        value = value.strip() if value else ""
        return value or None

    @field_validator("workflow_stages")
    @classmethod
    def _validate_workflow_stages(cls, stages: list[str]) -> list[str]:
        cleaned = [stage.strip() for stage in stages]
        if any(not stage for stage in cleaned):
            raise ValueError("workflow stages must not be blank")
        if any(len(stage) > 2_000 for stage in cleaned):
            raise ValueError("workflow stages must be 2,000 characters or fewer")
        return cleaned


class OnboardingSetup(AgentOnboardingContext):
    agent_name: str = Field(min_length=1, max_length=255)
    use_case: str = Field(min_length=1, max_length=2000)
    call_type: Literal["inbound", "outbound"]

    @field_validator("agent_name", "use_case")
    @classmethod
    def _strip_identity(cls, value: str) -> str:
        value = value.strip()
        if not value:
            raise ValueError("must not be blank")
        return value
