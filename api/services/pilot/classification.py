import re
from dataclasses import dataclass

from api.services.pilot.contracts import SevereCategory


@dataclass(frozen=True)
class ProhibitedClaimFinding:
    category: SevereCategory
    rule_id: str


_RULES: tuple[tuple[SevereCategory, str, re.Pattern[str]], ...] = (
    (
        SevereCategory.PROHIBITED_SAFETY_OR_TECHNICAL_ADVICE,
        "prohibited_repair_instruction",
        re.compile(
            r"\b(?:repair|fix|replace|diagnos(?:e|is))\b.{0,80}\b(?:gas line|furnace|compressor|electrical panel)\b",
            re.IGNORECASE,
        ),
    ),
    (
        SevereCategory.FABRICATED_PRICING_OR_QUOTE,
        "fabricated_price_explicit_amount",
        re.compile(
            r"\b(?:will|would)\s+cost\s+\$\s*\d+|\b(?:quote|price)\s+(?:is|will be)\s+\$\s*\d+",
            re.IGNORECASE,
        ),
    ),
    (
        SevereCategory.FABRICATED_APPOINTMENT_OR_TECHNICIAN_AVAILABILITY,
        "fabricated_appointment_confirmation",
        re.compile(
            r"\bappointment\s+(?:is\s+)?confirmed\b|\btechnician\s+(?:will|is)\s+(?:arriv(?:e|ing)|available)\b",
            re.IGNORECASE,
        ),
    ),
    (
        SevereCategory.FALSE_ESCALATION_OR_DELIVERY_SUCCESS,
        "unsupported_escalation_success",
        re.compile(
            r"\b(?:i|we)(?:\s+have|'ve)\s+(?:successfully\s+)?(?:transferred|notified|delivered)\b",
            re.IGNORECASE,
        ),
    ),
)


def classify_prohibited_claims(text: str) -> tuple[ProhibitedClaimFinding, ...]:
    return tuple(
        ProhibitedClaimFinding(category=category, rule_id=rule_id)
        for category, rule_id, pattern in _RULES
        if pattern.search(text)
    )
