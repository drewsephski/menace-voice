from datetime import datetime
from decimal import Decimal
from enum import Enum

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator

from api.services.pilot.iso_4217 import ISO_4217_ALPHA_CODES


class ActualCostState(str, Enum):
    KNOWN = "known"
    PENDING = "pending"
    UNAVAILABLE = "unavailable"


class ComponentCostEntry(BaseModel):
    model_config = ConfigDict(extra="forbid", frozen=True)

    component: str = Field(min_length=1, max_length=100)
    state: ActualCostState
    amount: Decimal | None = Field(default=None, ge=0, max_digits=18, decimal_places=6)
    currency: str | None = Field(default=None, min_length=3, max_length=3)
    authoritative_source: str = Field(min_length=1, max_length=160)
    source_record_id: str | None = Field(default=None, min_length=1, max_length=255)
    observed_at: datetime
    idempotency_key: str = Field(min_length=1, max_length=255)

    @field_validator("currency")
    @classmethod
    def normalize_iso_currency(cls, value: str | None) -> str | None:
        if value is None:
            return None
        normalized = value.upper()
        if normalized not in ISO_4217_ALPHA_CODES:
            raise ValueError("currency must be a current ISO 4217 alphabetic code")
        return normalized

    @model_validator(mode="after")
    def validate_actual_cost_state(self) -> "ComponentCostEntry":
        if self.observed_at.tzinfo is None:
            raise ValueError("observed_at must include a timezone")
        if self.state is ActualCostState.KNOWN:
            if self.amount is None or self.currency is None:
                raise ValueError("known actual costs require amount and currency")
        elif self.amount is not None:
            raise ValueError("pending and unavailable costs must not include an amount")
        return self

    @property
    def reconciliation_identity(self) -> tuple[str, str]:
        return (
            self.authoritative_source,
            self.source_record_id or f"idempotency:{self.idempotency_key}",
        )


class KnownCostTotal(BaseModel):
    model_config = ConfigDict(extra="forbid", frozen=True)

    amount: Decimal = Field(ge=0, max_digits=18, decimal_places=6)
    currency: str = Field(min_length=3, max_length=3)


class CostLedger(BaseModel):
    model_config = ConfigDict(extra="forbid", frozen=True)

    entries: tuple[ComponentCostEntry, ...]

    @property
    def known_total(self) -> KnownCostTotal | None:
        known = [
            entry for entry in self.entries if entry.state is ActualCostState.KNOWN
        ]
        if not known:
            return None
        currencies = {entry.currency for entry in known}
        if len(currencies) != 1:
            return None
        currency = next(iter(currencies))
        if currency is None:
            return None
        return KnownCostTotal(
            amount=sum((entry.amount or Decimal(0) for entry in known), Decimal(0)),
            currency=currency,
        )

    def merge(self, incoming: list[ComponentCostEntry]) -> "CostLedger":
        reconciled: dict[tuple[str, str], ComponentCostEntry] = {}
        for entry in (*self.entries, *incoming):
            identity = entry.reconciliation_identity
            current = reconciled.get(identity)
            if current is None or _should_replace(current, entry):
                reconciled[identity] = entry
        return CostLedger(
            entries=tuple(
                sorted(
                    reconciled.values(),
                    key=lambda entry: (
                        entry.observed_at,
                        entry.authoritative_source,
                        entry.idempotency_key,
                    ),
                )
            )
        )


def _should_replace(current: ComponentCostEntry, candidate: ComponentCostEntry) -> bool:
    current_rank = 1 if current.state is ActualCostState.KNOWN else 0
    candidate_rank = 1 if candidate.state is ActualCostState.KNOWN else 0
    if candidate_rank != current_rank:
        return candidate_rank > current_rank
    return candidate.observed_at > current.observed_at
