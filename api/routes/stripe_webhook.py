"""Stripe webhook handler (unauthenticated)."""

from fastapi import APIRouter, Header, HTTPException, Request
from loguru import logger

from api.services.billing.stripe_service import (
    handle_stripe_webhook,
    stripe_webhook_configured,
)

router = APIRouter(tags=["stripe-webhooks"])


@router.post("/webhooks/stripe")
async def stripe_webhook(
    request: Request,
    stripe_signature: str | None = Header(default=None, alias="Stripe-Signature"),
) -> dict[str, str]:
    if not stripe_webhook_configured():
        raise HTTPException(status_code=404, detail="Stripe billing is not enabled")

    payload = await request.body()
    try:
        await handle_stripe_webhook(payload, stripe_signature)
    except HTTPException:
        raise
    except Exception as exc:
        logger.exception("Stripe webhook handler failed")
        raise HTTPException(status_code=500, detail="Webhook processing failed") from exc
    return {"status": "ok"}
