from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock

import pytest
from fastapi import HTTPException

from api.routes import s3_signed_url
from api.routes.s3_signed_url import (
    _extract_legacy_workflow_run_id,
    _extract_org_id_from_key,
)


def test_split_recording_keys_are_workflow_run_artifacts_not_org_keys():
    assert _extract_legacy_workflow_run_id("recordings/1855/user.wav") == 1855
    assert _extract_legacy_workflow_run_id("recordings/1855/bot.wav") == 1855

    assert _extract_org_id_from_key("recordings/1855/user.wav") is None
    assert _extract_org_id_from_key("recordings/1855/bot.wav") is None


def test_legacy_recording_keys_do_not_fall_through_to_org_scoped_auth():
    assert _extract_legacy_workflow_run_id("recordings/1855.wav") == 1855
    assert _extract_legacy_workflow_run_id("recordings/1855/other.wav") is None

    assert _extract_org_id_from_key("recordings/1855.wav") is None
    assert _extract_org_id_from_key("recordings/1855/other.wav") is None
    assert _extract_org_id_from_key("recordings/1855/user.wav/nested") is None


def test_known_org_scoped_keys_extract_org_id():
    assert _extract_org_id_from_key("campaigns/42/source.csv") == 42
    assert _extract_org_id_from_key("knowledge_base/42/document/file.pdf") == 42
    assert _extract_org_id_from_key("recordings/42/greeting-123/greeting.wav") == 42
    assert _extract_legacy_workflow_run_id("campaigns/42/source.csv") is None


def test_unknown_numeric_prefix_is_not_treated_as_org_scoped():
    assert _extract_org_id_from_key("unknown/42/file.wav") is None


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "key",
    [
        "recordings/1855.wav",
        "recordings/1855/user.wav",
        "recordings/1855/bot.wav",
        "transcripts/1855.txt",
    ],
)
async def test_metadata_denies_missing_or_other_tenant_run_before_storage(
    monkeypatch, key
):
    db = SimpleNamespace(get_workflow_run=AsyncMock(return_value=None))
    storage = SimpleNamespace(aget_file_metadata=AsyncMock())
    factory = MagicMock()
    monkeypatch.setattr(s3_signed_url, "db_client", db)
    monkeypatch.setattr(s3_signed_url, "storage_fs", storage)
    monkeypatch.setattr(s3_signed_url, "get_storage_for_backend", factory)
    user = SimpleNamespace(is_superuser=False, selected_organization_id=7)
    with pytest.raises(HTTPException) as exc:
        await s3_signed_url.get_file_metadata(key, user=user)
    assert exc.value.status_code == 403
    db.get_workflow_run.assert_awaited_once_with(1855, organization_id=7)
    storage.aget_file_metadata.assert_not_called()
    factory.assert_not_called()


@pytest.mark.asyncio
async def test_metadata_owned_run_uses_recorded_storage_backend(monkeypatch):
    run = SimpleNamespace(storage_backend="s3")
    db = SimpleNamespace(get_workflow_run=AsyncMock(return_value=run))
    storage = SimpleNamespace(aget_file_metadata=AsyncMock(return_value={"size": 42}))
    factory = MagicMock(return_value=storage)
    monkeypatch.setattr(s3_signed_url, "db_client", db)
    monkeypatch.setattr(s3_signed_url, "get_storage_for_backend", factory)
    result = await s3_signed_url.get_file_metadata(
        "transcripts/1855.txt",
        user=SimpleNamespace(is_superuser=False, selected_organization_id=7),
    )
    assert result == {"key": "transcripts/1855.txt", "metadata": {"size": 42}}
    factory.assert_called_once_with("s3")


@pytest.mark.asyncio
@pytest.mark.parametrize("is_superuser", [False, True])
async def test_ownerless_voicemail_metadata_requires_superuser(
    monkeypatch, is_superuser
):
    storage = SimpleNamespace(aget_file_metadata=AsyncMock(return_value={"size": 42}))
    monkeypatch.setattr(s3_signed_url, "storage_fs", storage)
    user = SimpleNamespace(is_superuser=is_superuser, selected_organization_id=7)
    if is_superuser:
        result = await s3_signed_url.get_file_metadata(
            "voicemail_detections/example.wav", user=user
        )
        assert result["metadata"] == {"size": 42}
    else:
        with pytest.raises(HTTPException) as exc:
            await s3_signed_url.get_file_metadata(
                "voicemail_detections/example.wav", user=user
            )
        assert exc.value.status_code == 403
        storage.aget_file_metadata.assert_not_called()
