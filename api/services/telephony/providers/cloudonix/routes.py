"""Cloudonix telephony routes (webhooks, status callbacks, answer URLs).

Mounted under ``/api/v1/telephony`` by ``api.routes.telephony`` via the
provider registry — see ProviderSpec.router.
"""

from typing import Any, cast

from fastapi import APIRouter, HTTPException, Request
from loguru import logger
from pipecat.utils.run_context import set_current_run_id

from api.db import db_client
from api.db.models import WorkflowRunModel
from api.services.telephony.call_transfer_manager import get_call_transfer_manager
from api.services.telephony.factory import get_telephony_provider_for_run
from api.services.telephony.providers.cloudonix.provider import CloudonixProvider
from api.services.telephony.status_processor import (
    StatusCallbackRequest,
    _process_status_update,
)
from api.services.telephony.transfer_event_protocol import (
    TransferEvent,
    TransferEventType,
)

router = APIRouter()

# Cloudonix session statuses that terminate a transfer without an answer.
_CLOUDONIX_TRANSFER_FAILURE_STATUSES = {
    "busy",
    "noanswer",
    "cancel",
    "nocredit",
    "error",
    "congestion",
    "failed",
}


async def _authenticated_provider_for_run(
    request: Request,
    workflow_run: WorkflowRunModel,
    data: dict[str, Any],
    call_id: str,
) -> CloudonixProvider:
    workflow = await db_client.get_workflow_by_id(cast(int, workflow_run.workflow_id))
    if not workflow:
        raise HTTPException(status_code=404, detail="Workflow not found")
    provider = await get_telephony_provider_for_run(
        workflow_run, cast(int, workflow.organization_id)
    )
    if not isinstance(provider, CloudonixProvider) or workflow_run.mode != "cloudonix":
        raise HTTPException(status_code=403, detail="Callback provider mismatch")
    if not await provider.verify_inbound_signature(
        str(request.url), data, dict(request.headers)
    ):
        raise HTTPException(status_code=401, detail="Invalid webhook authentication")
    run_context = cast(dict[str, Any] | None, workflow_run.gathered_context) or {}
    if not call_id or call_id != run_context.get("call_id"):
        raise HTTPException(status_code=403, detail="Callback call identity mismatch")
    for domain in (
        data.get("domain"),
        data.get("Domain"),
        request.headers.get("x-cx-domain"),
    ):
        if domain is not None and (
            not isinstance(domain, str)
            or provider._normalize_domain(domain) != provider.domain_id
        ):
            raise HTTPException(status_code=403, detail="Callback domain mismatch")
    return provider


async def _read_callback(request: Request) -> dict[str, Any]:
    try:
        if "application/json" in request.headers.get("content-type", ""):
            data = await request.json()
        else:
            data = dict(await request.form())
    except (ValueError, UnicodeDecodeError) as exc:
        raise HTTPException(status_code=400, detail="Invalid callback payload") from exc
    if isinstance(data, list) and len(data) == 1:
        data = data[0]
    if not isinstance(data, dict):
        raise HTTPException(status_code=400, detail="Expected one callback object")
    return data


@router.post("/cloudonix/transfer-result/{transfer_id}")
async def handle_cloudonix_transfer_result(transfer_id: str, request: Request):
    """Drive transfer completion from the destination leg's session status.

    ``CloudonixProvider.transfer_call`` sets this URL as the outbound call
    object's ``callback``. Cloudonix POSTs session-status notifications here;
    a ``connected`` status means the destination answered (publish
    DESTINATION_ANSWERED so the shared handler forks the caller into the
    conference), while terminal non-answer statuses publish TRANSFER_FAILED.
    Intermediate statuses (ringing/processing) are acked without publishing.
    """
    data = await _read_callback(request)

    conferenceStatus = str(data.get("StatusCallbackEvent", "")).lower()
    outboundCallStatus = str(data.get("status", "")).lower()
    destination_token = (
        data.get("Session") or data.get("token") or data.get("CallSid", "")
    )

    logger.info(
        f"[Cloudonix Transfer] transfer_id={transfer_id} status={outboundCallStatus} conferenceStatus={conferenceStatus}"
        f"token={destination_token}"
    )

    call_transfer_manager = await get_call_transfer_manager()
    transfer_context = await call_transfer_manager.get_transfer_context(transfer_id)
    if not transfer_context:
        logger.warning(
            f"[Cloudonix Transfer] No transfer context for {transfer_id}; ignoring"
        )
        return {"status": "ignored", "reason": "unknown_transfer"}

    if not transfer_context.workflow_run_id:
        raise HTTPException(status_code=404, detail="Workflow run not found")
    workflow_run = await db_client.get_workflow_run_by_id(
        transfer_context.workflow_run_id
    )
    if not workflow_run:
        raise HTTPException(status_code=404, detail="Workflow run not found")
    await _authenticated_provider_for_run(
        request, workflow_run, data, transfer_context.original_call_sid
    )
    if not destination_token or (
        transfer_context.call_sid and destination_token != transfer_context.call_sid
    ):
        raise HTTPException(status_code=403, detail="Transfer call identity mismatch")
    if not transfer_context.call_sid:
        raise HTTPException(
            status_code=503, detail="Transfer destination is not bound yet"
        )

    original_call_sid = transfer_context.original_call_sid
    conference_name = transfer_context.conference_name

    if conferenceStatus == "participant-join":
        event = TransferEvent(
            type=TransferEventType.DESTINATION_ANSWERED,
            transfer_id=transfer_id,
            original_call_sid=original_call_sid or "",
            transfer_call_sid=destination_token,
            conference_name=conference_name,
            message="Great! The destination answered. Connecting you now.",
            status="success",
            action="destination_answered",
        )
    elif outboundCallStatus in _CLOUDONIX_TRANSFER_FAILURE_STATUSES:
        event = TransferEvent(
            type=TransferEventType.TRANSFER_FAILED,
            transfer_id=transfer_id,
            original_call_sid=original_call_sid or "",
            transfer_call_sid=destination_token,
            conference_name=conference_name,
            message="The transfer call could not be completed.",
            status="transfer_failed",
            action="transfer_failed",
            reason=outboundCallStatus,
        )
    else:
        logger.info(
            f"[Cloudonix Transfer] Intermediate status {outboundCallStatus} for {transfer_id}, "
            "waiting"
        )
        return {"status": "pending"}

    await call_transfer_manager.publish_transfer_event(event)
    return {"status": "completed"}


@router.post("/cloudonix/status-callback/{workflow_run_id}")
async def handle_cloudonix_status_callback(
    workflow_run_id: int,
    request: Request,
):
    """Handle Cloudonix-specific status callbacks.

    Cloudonix sends call status updates to the callback URL specified during call initiation.
    """
    set_current_run_id(workflow_run_id)
    callback_data = await _read_callback(request)

    # Get workflow run to find organization
    workflow_run = await db_client.get_workflow_run_by_id(workflow_run_id)
    if not workflow_run:
        logger.warning(f"Workflow run {workflow_run_id} not found for status callback")
        return {"status": "ignored", "reason": "workflow_run_not_found"}

    callback_call_id = (
        callback_data.get("token")
        or callback_data.get("session_id")
        or callback_data.get("CallSid")
        or callback_data.get("Session", "")
    )
    provider = await _authenticated_provider_for_run(
        request, workflow_run, callback_data, callback_call_id
    )

    # Parse the callback data into generic format
    parsed_data = provider.parse_status_callback(callback_data)

    # Create StatusCallbackRequest from parsed data
    status_update = StatusCallbackRequest(
        call_id=parsed_data["call_id"],
        status=parsed_data["status"],
        from_number=parsed_data.get("from_number"),
        to_number=parsed_data.get("to_number"),
        direction=parsed_data.get("direction"),
        duration=parsed_data.get("duration"),
        extra=parsed_data.get("extra", {}),
    )

    # Process the status update
    await _process_status_update(workflow_run_id, status_update)

    return {"status": "success"}


@router.post("/cloudonix/cdr")
async def handle_cloudonix_cdr(request: Request):
    """Handle Cloudonix CDR (Call Detail Record) webhooks.

    Cloudonix sends CDR records when calls complete. The CDR contains:
    - domain: Used to identify the organization
    - call_id: Used to find the workflow run
    - disposition: Call termination status (ANSWER, BUSY, CANCEL, FAILED, CONGESTION, NOANSWER)
    - duration/billsec: Call duration information
    """
    try:
        cdr_data = await request.json()
    except (ValueError, UnicodeDecodeError):
        logger.warning("Failed to parse Cloudonix CDR JSON")
        return {"status": "error", "message": "Invalid JSON payload"}

    if not isinstance(cdr_data, dict):
        raise HTTPException(status_code=400, detail="Expected CDR object")

    # Extract domain to find organization
    domain = cdr_data.get("domain")
    if not domain:
        logger.warning("Cloudonix CDR missing domain field")
        return {"status": "error", "message": "Missing domain field"}

    # Extract call_id to find workflow run
    session = cdr_data.get("session")
    call_id = session.get("token") if isinstance(session, dict) else None
    logger.info(f"Cloudonix CDR received for call id {call_id}")
    if not call_id:
        logger.warning("Cloudonix CDR missing call_id field")
        return {"status": "error", "message": "Missing call_id field"}

    # Find workflow run by call_id in gathered_context
    workflow_run = await db_client.get_workflow_run_by_call_id(call_id)
    if not workflow_run:
        logger.warning(f"No workflow run found for Cloudonix call_id: {call_id}")
        return {"status": "ignored", "reason": "workflow_run_not_found"}

    workflow_run_id = cast(int, workflow_run.id)
    set_current_run_id(workflow_run_id)
    logger.info(f"[run {workflow_run_id}] Processing Cloudonix CDR for call {call_id}")

    await _authenticated_provider_for_run(request, workflow_run, cdr_data, call_id)
    parsed_data = CloudonixProvider.parse_cdr_status_callback(cdr_data)
    status_update = StatusCallbackRequest(
        call_id=parsed_data["call_id"],
        status=parsed_data["status"],
        from_number=parsed_data.get("from_number"),
        to_number=parsed_data.get("to_number"),
        duration=parsed_data.get("duration"),
        extra=parsed_data.get("extra", {}),
    )

    # Process the status update
    await _process_status_update(workflow_run_id, status_update)

    logger.info(
        f"[run {workflow_run_id}] Cloudonix CDR processed successfully - "
        f"disposition: {cdr_data.get('disposition')}, status: {status_update.status}"
    )

    return {"status": "success"}
