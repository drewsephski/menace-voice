import importlib

import pytest

from api.enums import ToolCategory
from api.schemas.tool import CurrentTimeToolDefinition
from api.services.workflow.pipecat_engine_custom_tools import CustomToolManager
from api.services.workflow.tools.timezone import convert_time, get_current_time
from api.tests.conftest import MockToolModel


def test_current_time_category_exists():
    assert ToolCategory.CURRENT_TIME.value == "current_time"
    assert ToolCategory("current_time") is ToolCategory.CURRENT_TIME


def test_current_time_tool_definition_schema():
    definition = CurrentTimeToolDefinition(type="current_time")
    assert definition.type == "current_time"
    assert definition.schema_version == 1


def test_current_time_migration_present_and_chained(monkeypatch):
    mod = importlib.import_module(
        "api.alembic.versions.b8c4d2e1f0a9_add_current_time_in_toolcategory"
    )
    assert mod.revision == "b8c4d2e1f0a9"
    assert mod.down_revision == "f3a1c47b9e02"

    calls = []

    def fake_sync_enum_values(**kwargs):
        calls.append(kwargs)

    monkeypatch.setattr(mod.op, "sync_enum_values", fake_sync_enum_values)

    mod.upgrade()
    mod.downgrade()

    assert len(calls) == 2
    assert calls[0]["enum_name"] == "tool_category"
    assert "current_time" in calls[0]["new_values"]
    assert "current_time" not in calls[1]["new_values"]


def test_get_current_time_returns_iso_timestamp():
    result = get_current_time("UTC")
    assert result["timezone"] == "UTC"
    assert "T" in result["datetime"]
    assert isinstance(result["is_dst"], bool)


def test_get_current_time_rejects_invalid_timezone():
    with pytest.raises(ValueError, match="Invalid timezone"):
        get_current_time("Not/A_Zone")


def test_convert_time_between_timezones():
    result = convert_time("UTC", "15:00", "America/New_York")
    assert result["source"]["timezone"] == "UTC"
    assert result["target"]["timezone"] == "America/New_York"
    assert result["time_difference"].startswith("-")


@pytest.mark.asyncio
async def test_custom_tool_manager_exposes_current_time_schemas(mock_engine):
    manager = CustomToolManager(mock_engine)
    tool = MockToolModel(
        tool_uuid="time-uuid-1",
        name="Current Time",
        description="Get the current time",
        definition={"schema_version": 1, "type": "current_time"},
        category=ToolCategory.CURRENT_TIME.value,
    )

    from unittest.mock import AsyncMock, patch

    with patch(
        "api.services.workflow.pipecat_engine_custom_tools.db_client"
    ) as mock_db:
        mock_db.get_tools_by_uuids = AsyncMock(return_value=[tool])
        schemas = await manager.get_tool_schemas(["time-uuid-1"])

    names = {schema.name for schema in schemas}
    assert names == {"get_current_time", "convert_time"}
