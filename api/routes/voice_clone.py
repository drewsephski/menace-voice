from typing import Annotated

from fastapi import APIRouter, Depends, File, Form, HTTPException, Response, UploadFile

from api.db import db_client
from api.db.models import UserModel
from api.schemas.voice_clone import (
    VoiceCloneAgent,
    VoiceCloneAssignment,
    VoiceCloneCapabilities,
    VoiceClonePreviewRequest,
    VoiceCloneResponse,
)
from api.services.auth.depends import get_user
from api.services.voice_cloning import service

router = APIRouter(prefix="/voice-clones", tags=["voice-clones"])


def organization_id(user: UserModel) -> int:
    if not user.selected_organization_id:
        raise HTTPException(403, "Select an organization first.")
    return user.selected_organization_id


@router.get("/capabilities")
async def voice_clone_capabilities(
    user: UserModel = Depends(get_user),
) -> VoiceCloneCapabilities:
    return await service.capabilities(organization_id(user))


@router.get("")
async def list_voice_clones(
    user: UserModel = Depends(get_user),
) -> list[VoiceCloneResponse]:
    return [
        VoiceCloneResponse.model_validate(clone)
        for clone in await db_client.list_voice_clones(organization_id(user))
    ]


@router.get("/agents")
async def list_voice_clone_agents(
    user: UserModel = Depends(get_user),
) -> list[VoiceCloneAgent]:
    return await db_client.list_voice_clone_agents(organization_id(user))


@router.put("/agents/{workflow_id}", status_code=204)
async def assign_voice_clone(
    workflow_id: int, body: VoiceCloneAssignment, user: UserModel = Depends(get_user)
) -> None:
    await service.assign_clone(workflow_id, body.voice_clone_id, organization_id(user))


@router.post("", status_code=201)
async def create_voice_clone(
    name: Annotated[str, Form(min_length=1, max_length=80)],
    consent: Annotated[bool, Form()],
    sample: Annotated[UploadFile, File()],
    user: UserModel = Depends(get_user),
) -> VoiceCloneResponse:
    org_id = organization_id(user)
    try:
        data = await sample.read(service.MAX_SAMPLE_BYTES + 1)
        clone = await service.create_clone(
            organization_id=org_id,
            user_id=user.id,
            name=name,
            consent=consent,
            sample=data,
        )
        return VoiceCloneResponse.model_validate(clone)
    finally:
        await sample.close()


@router.post(
    "/{clone_id}/preview",
    response_class=Response,
    responses={
        200: {
            "content": {
                "audio/mpeg": {"schema": {"type": "string", "format": "binary"}}
            }
        }
    },
)
async def preview_voice_clone(
    clone_id: str, body: VoiceClonePreviewRequest, user: UserModel = Depends(get_user)
) -> Response:
    audio = await service.preview_clone(clone_id, organization_id(user), body.text)
    return Response(
        audio, media_type="audio/mpeg", headers={"Cache-Control": "no-store"}
    )


@router.delete("/{clone_id}", status_code=204)
async def delete_voice_clone(
    clone_id: str, user: UserModel = Depends(get_user)
) -> None:
    await service.delete_clone(clone_id, organization_id(user))
