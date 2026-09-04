from datetime import UTC, datetime
from enum import Enum
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field, model_validator

from api.services.pilot.costs import CostLedger

PILOT_TELEMETRY_SCHEMA_VERSION = "1.0"


class _StringEnum(str, Enum):
    pass


class ActivationMilestone(_StringEnum):
    CONFIGURED = "configured"
    WORKFLOW_PUBLISHED = "workflow_published"
    INBOUND_ROUTE_ENABLED = "inbound_route_enabled"
    FIRST_CALL_COMPLETED = "first_call_completed"


class NormalizedOutcome(_StringEnum):
    QUALIFIED_CALLBACK = "qualified_callback"
    SUCCESSFUL_ESCALATION = "successful_escalation"
    CALLER_REQUESTED_CALLBACK = "caller_requested_callback"
    INCOMPLETE_INTAKE = "incomplete_intake"
    CALLER_ABANDONED = "caller_abandoned"
    TRANSFER_FAILED = "transfer_failed"
    TECHNICAL_FAILURE = "technical_failure"
    SAFETY_FALLBACK = "safety_fallback"
    OTHER = "other"


class SevereCategory(_StringEnum):
    PROHIBITED_SAFETY_OR_TECHNICAL_ADVICE = "prohibited_safety_or_technical_advice"
    FABRICATED_PRICING_OR_QUOTE = "fabricated_pricing_or_quote"
    FABRICATED_APPOINTMENT_OR_TECHNICIAN_AVAILABILITY = (
        "fabricated_appointment_or_technician_availability"
    )
    FALSE_ESCALATION_OR_DELIVERY_SUCCESS = "false_escalation_or_delivery_success"
    BROKEN_ESCALATION_WITHOUT_FALLBACK = "broken_escalation_without_fallback"
    CALLER_STRANDING_RUNTIME_FAILURE = "caller_stranding_runtime_failure"
    CONFIGURED_DISCLOSURE_OMISSION = "configured_disclosure_omission"


class EscalationStatus(_StringEnum):
    NOT_ATTEMPTED = "not_attempted"
    PENDING = "pending"
    SUCCEEDED = "succeeded"
    FAILED = "failed"


class DeliveryStatus(_StringEnum):
    NOT_ATTEMPTED = "not_attempted"
    QUEUED = "queued"
    ACCEPTED = "accepted"
    DELIVERED = "delivered"
    FAILED = "failed"


class PilotContractModel(BaseModel):
    model_config = ConfigDict(extra="forbid", frozen=True)


class CallbackCallerProvided(PilotContractModel):
    caller_name: str = Field(min_length=1, max_length=200)
    callback_phone: str = Field(min_length=3, max_length=50)
    service_location: str = Field(min_length=1, max_length=500)
    reason_for_call: str = Field(min_length=1, max_length=2_000)
    urgency: str = Field(min_length=1, max_length=100)
    preferred_callback_time: str | None = Field(default=None, max_length=200)
    existing_customer: bool | None = None
    symptoms: str | None = Field(default=None, max_length=2_000)


class PilotClassification(PilotContractModel):
    outcome: NormalizedOutcome
    urgency: str | None = Field(default=None, max_length=100)


class EscalationEvidence(PilotContractModel):
    status: EscalationStatus
    fallback_offered: bool = False
    attempted_at: datetime | None = None


class DeliveryEvidence(PilotContractModel):
    status: DeliveryStatus
    human_receipt_confirmed: bool = False
    observed_at: datetime | None = None


class SevereFailure(PilotContractModel):
    category: SevereCategory
    rule_id: str = Field(min_length=1, max_length=160)
    observed_at: datetime = Field(default_factory=lambda: datetime.now(UTC))


class CallbackSummary(PilotContractModel):
    schema_version: Literal["1.0"] = "1.0"
    caller: CallbackCallerProvided
    classification: PilotClassification
    escalation: EscalationEvidence
    delivery: DeliveryEvidence
    severe_failures: tuple[SevereFailure, ...] = ()
    costs: CostLedger

    @model_validator(mode="after")
    def require_callback_time_without_successful_escalation(self) -> "CallbackSummary":
        if (
            self.escalation.status is not EscalationStatus.SUCCEEDED
            and not self.caller.preferred_callback_time
        ):
            raise ValueError(
                "preferred_callback_time is required when live escalation does not succeed"
            )
        return self
