from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Path, Query

from api.db import db_client
from api.db.models import UserModel
from api.services.auth.depends import get_user
from api.services.pilot.review import PilotReviewPage

router = APIRouter(prefix="/workflow", tags=["pilot-review"])


@router.get("/{workflow_id}/pilot-review", response_model=PilotReviewPage)
async def get_pilot_review(
    user: Annotated[UserModel, Depends(get_user)],
    workflow_id: int = Path(..., ge=1),
    limit: int = Query(25, ge=1, le=100),
    before_id: int | None = Query(None, ge=1),
) -> PilotReviewPage:
    if not user.selected_organization_id:
        raise HTTPException(status_code=400, detail="No organization selected")
    page = await db_client.get_pilot_review(
        organization_id=user.selected_organization_id,
        workflow_id=workflow_id,
        limit=limit,
        before_id=before_id,
    )
    if page is None:
        raise HTTPException(status_code=404, detail="Workflow not found")
    return page
