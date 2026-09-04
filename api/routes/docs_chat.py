"""Bounded documentation chat, with explicitly configured public sponsorship."""

import json
import os
from collections.abc import Awaitable
from typing import Literal, cast

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import StreamingResponse
from loguru import logger
from pydantic import BaseModel, ConfigDict, Field, ValidationError, field_validator
from redis.asyncio import Redis

from api.constants import REDIS_URL
from api.services.auth.depends import get_user
from api.services.docs_chat import stream_answer

router = APIRouter(prefix="/docs", tags=["docs"])
redis = Redis.from_url(REDIS_URL, socket_connect_timeout=3, socket_timeout=3)


class ChatMessage(BaseModel):
    model_config = ConfigDict(extra="forbid")
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=4000)

    @field_validator("content")
    @classmethod
    def nonblank(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("Message cannot be blank")
        return value.strip()


class ChatRequest(BaseModel):
    model_config = ConfigDict(extra="forbid")
    messages: list[ChatMessage] = Field(min_length=1, max_length=6)
    current_slug: str = Field(
        default="overview", max_length=80, pattern=r"^[a-z0-9-]+$"
    )


async def check_budget(organization_id: int) -> None:
    # A fleet-wide hourly ceiling bounds anonymous usage without trusting proxy IP headers.
    count = await cast(
        Awaitable[int],
        redis.eval(
            "local n = redis.call('INCR', KEYS[1]); if n == 1 then redis.call('EXPIRE', KEYS[1], 3600) end; return n",
            1,
            f"docs_chat:hourly:{organization_id}",
        ),
    )
    if count > 60:
        raise HTTPException(
            429,
            "The agent is busy. Please try again later.",
            headers={"Retry-After": "3600"},
        )


@router.post("/chat")
async def docs_chat(request: Request):
    raw = bytearray()
    async for chunk in request.stream():
        raw.extend(chunk)
        if len(raw) > 24000:
            raise HTTPException(413, "Conversation is too long. Start a new chat.")
    try:
        payload = ChatRequest.model_validate_json(raw)
    except ValidationError:
        raise HTTPException(
            422, "Send between one and six valid chat messages."
        ) from None
    if payload.messages[-1].role != "user":
        raise HTTPException(422, "The last message must be a question.")

    sponsor = os.getenv("DOCS_CHAT_ORGANIZATION_ID", "")
    if sponsor:
        if not sponsor.isdigit() or int(sponsor) < 1:
            raise HTTPException(503, "The docs agent is temporarily unavailable.")
        organization_id = int(sponsor)
    else:
        if not request.headers.get("authorization"):
            raise HTTPException(401, "Sign in to talk to the docs agent.")
        user = await get_user(authorization=request.headers.get("authorization"))
        organization_id = cast(int | None, user.selected_organization_id)
        if not organization_id:
            raise HTTPException(400, "Select a workspace before starting chat.")
    try:
        await check_budget(organization_id)
    except HTTPException:
        raise
    except Exception as exc:  # noqa: BLE001 - provider errors must never expose credentials
        logger.warning("Docs chat failed: {}", type(exc).__name__)
        raise HTTPException(
            503, "The agent couldn't answer right now. Please try again."
        ) from None

    async def events():
        try:
            async for event in stream_answer(
                organization_id,
                [m.model_dump() for m in payload.messages],
                payload.current_slug,
            ):
                yield json.dumps(event) + "\n"
        except Exception as exc:  # noqa: BLE001 - stream failures must not expose provider details
            logger.warning("Docs chat stream failed: {}", type(exc).__name__)
            yield (
                json.dumps(
                    {
                        "type": "error",
                        "message": "The reply was interrupted. Please try again.",
                    }
                )
                + "\n"
            )

    return StreamingResponse(
        events(),
        media_type="application/x-ndjson",
        headers={"Cache-Control": "no-store", "X-Accel-Buffering": "no"},
    )
