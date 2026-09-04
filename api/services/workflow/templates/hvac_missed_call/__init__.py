import copy
import hashlib
import json
from pathlib import Path

from jsonschema import Draft202012Validator  # type: ignore[import-untyped]

from api.db.workflow_template_client import (
    WorkflowTemplateClient,
    WorkflowTemplateInstallResult,
)
from api.schemas.workflow_configurations import WorkflowConfigurationDefaults
from api.services.workflow.dto import ReactFlowDTO
from api.services.workflow.guardrails import GuardrailService
from api.services.workflow.workflow_graph import WorkflowGraph

HVAC_TEMPLATE_SLUG = "hvac-missed-call-recovery"
BUNDLE_PATH = Path(__file__).with_name("bundle.json")
SCHEMA_PATH = Path(__file__).with_name("bundle.schema.json")
_MANDATORY_FIELDS = (
    "caller_name",
    "callback_phone",
    "service_location",
    "reason_for_call",
    "urgency",
)
_DISPOSITIONS = (
    "qualified_callback",
    "successful_escalation",
    "caller_requested_callback",
    "incomplete_intake",
    "caller_abandoned",
    "transfer_failed",
    "technical_failure",
    "safety_fallback",
    "other",
)
_SEVERE_CATEGORIES = (
    "prohibited_safety_or_technical_advice",
    "fabricated_pricing_or_quote",
    "fabricated_appointment_or_technician_availability",
    "false_escalation_or_delivery_success",
    "broken_escalation_without_fallback",
    "caller_stranding_runtime_failure",
    "configured_disclosure_omission",
)
_PROHIBITED_LITERAL_CLAIMS = (
    "911",
    "we will dispatch",
    "technician is on the way",
)


class BundleValidationError(ValueError):
    pass


def _checksum(bundle: dict) -> str:
    checksum_input = copy.deepcopy(bundle)
    checksum_input.get("template_bundle", {}).pop("checksum", None)
    canonical = json.dumps(
        checksum_input, sort_keys=True, separators=(",", ":"), ensure_ascii=True
    ).encode()
    return f"sha256:{hashlib.sha256(canonical).hexdigest()}"


def with_checksum(bundle: dict) -> dict:
    updated = copy.deepcopy(bundle)
    updated["template_bundle"]["checksum"] = _checksum(updated)
    return updated


def validate_bundle(bundle: dict, *, verify_checksum: bool = True) -> None:
    schema = json.loads(SCHEMA_PATH.read_text())
    errors = sorted(
        Draft202012Validator(schema).iter_errors(bundle),
        key=lambda error: tuple(str(part) for part in error.absolute_path),
    )
    if errors:
        error = errors[0]
        path = ".".join(str(part) for part in error.absolute_path) or "bundle"
        raise BundleValidationError(f"{path}: {error.message}")

    metadata = bundle["template_bundle"]
    if metadata["slug"] != HVAC_TEMPLATE_SLUG:
        raise BundleValidationError(f"slug must be {HVAC_TEMPLATE_SLUG!r}")
    if metadata["schema_version"] != 1:
        raise BundleValidationError("unsupported schema_version")
    if not isinstance(metadata["version"], int) or metadata["version"] < 1:
        raise BundleValidationError("version must be a positive integer")
    if tuple(metadata["required_fields"]) != _MANDATORY_FIELDS:
        raise BundleValidationError("required_fields do not match the pilot contract")
    if tuple(metadata["disposition_map"]) != _DISPOSITIONS:
        raise BundleValidationError("disposition_map does not match the pilot contract")
    if tuple(metadata["severe_categories"]) != _SEVERE_CATEGORIES:
        raise BundleValidationError("severe_categories do not match the pilot contract")

    callback_policy = metadata["callback_policy"]
    if tuple(callback_policy.get("required_fields", ())) != _MANDATORY_FIELDS:
        raise BundleValidationError("callback_policy.required_fields are invalid")
    conditional = callback_policy.get("conditionally_required_fields", {})
    if conditional != {"preferred_callback_time": "live_escalation_not_successful"}:
        raise BundleValidationError(
            "preferred_callback_time must be required after unsuccessful escalation"
        )
    if metadata["escalation_policy"].get("success_requires") != "destination_answered":
        raise BundleValidationError(
            "escalation success must require destination_answered"
        )
    if metadata["escalation_policy"].get("fallback") != "callback":
        raise BundleValidationError("escalation must have a callback fallback")

    try:
        WorkflowConfigurationDefaults.model_validate(
            metadata["default_workflow_configuration"]
        )
        GuardrailService.from_workflow_configuration(
            metadata["default_workflow_configuration"]
        )
        WorkflowGraph(ReactFlowDTO.model_validate(bundle))
    except (ValueError, TypeError) as exc:
        raise BundleValidationError(f"workflow validation failed: {exc}") from exc

    serialized = json.dumps(bundle, sort_keys=True).casefold()
    for prohibited_claim in _PROHIBITED_LITERAL_CLAIMS:
        if prohibited_claim in serialized:
            raise BundleValidationError(
                f"bundle contains prohibited literal claim: {prohibited_claim}"
            )

    if verify_checksum:
        expected = _checksum(bundle)
        if metadata["checksum"] != expected:
            raise BundleValidationError(
                f"checksum mismatch: expected {expected}, got {metadata['checksum']}"
            )


def load_bundle(path: Path | str = BUNDLE_PATH) -> dict:
    bundle_path = Path(path)
    try:
        bundle = json.loads(bundle_path.read_text())
    except (OSError, json.JSONDecodeError) as exc:
        raise BundleValidationError(f"cannot load bundle: {exc}") from exc
    validate_bundle(bundle)
    return bundle


async def install_bundle(
    client: WorkflowTemplateClient,
    *,
    bundle: dict | None = None,
    check: bool = False,
) -> WorkflowTemplateInstallResult:
    source = load_bundle() if bundle is None else copy.deepcopy(bundle)
    validate_bundle(source)
    metadata = source["template_bundle"]
    return await client.install_versioned_workflow_template(
        template_name=metadata["slug"],
        template_description=metadata["description"],
        template_json=source,
        version=metadata["version"],
        checksum=metadata["checksum"],
        check_only=check,
    )


__all__ = [
    "BUNDLE_PATH",
    "HVAC_TEMPLATE_SLUG",
    "BundleValidationError",
    "install_bundle",
    "load_bundle",
    "validate_bundle",
    "with_checksum",
]
