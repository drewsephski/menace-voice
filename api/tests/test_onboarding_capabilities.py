import json

import pytest

from api.db.models import KnowledgeBaseDocumentModel, ToolModel
from api.services.workflow.onboarding_capabilities import (
    build_onboarding_capability_catalog,
    sanitize_capability_schema,
    validate_onboarding_resource_assignments,
)


def make_tool(category="http_api", **config):
    return ToolModel(
        tool_uuid="tool-1",
        organization_id=11,
        name="Book appointment",
        description="Reserve an appointment",
        category=category,
        definition={"type": category, "config": config},
    )


def test_http_catalog_excludes_transport_credentials_and_presets():
    tool = make_tool(
        url="https://secret.example/book?token=SECRET_TOKEN",
        headers={"Authorization": "SECRET_HEADER"},
        credential_uuid="SECRET_UUID",
        body_template={"api_key": "SECRET_BODY"},
        preset_parameters=[{"name": "token", "value_template": "SECRET_PRESET"}],
        parameters=[
            {
                "name": "time",
                "description": "Confirmed booking time",
                "type": "string",
                "required": True,
            }
        ],
    )
    document = KnowledgeBaseDocumentModel(
        organization_id=11,
        document_uuid="doc-1",
        filename="Hours.pdf",
        full_text="PRIVATE_FULL_TEXT",
        source_url="https://private.example/file",
    )
    catalog = build_onboarding_capability_catalog(
        [tool], [document], organization_id=11
    )
    encoded = json.dumps(catalog)
    assert "SECRET" not in encoded
    assert "PRIVATE" not in encoded
    assert "https://" not in encoded
    assert catalog["documents"] == [{"document_uuid": "doc-1", "title": "Hours.pdf"}]
    assert catalog["tools"][0]["operations"][0]["parameters"] == {
        "type": "object",
        "properties": {
            "time": {"type": "string", "description": "Confirmed booking time"}
        },
        "required": ["time"],
    }


@pytest.mark.parametrize("resource", ["tool", "document"])
def test_catalog_rejects_cross_tenant_rows(resource):
    tool = make_tool()
    document = KnowledgeBaseDocumentModel(
        organization_id=11, document_uuid="doc-1", filename="Hours.pdf"
    )
    if resource == "tool":
        tool.organization_id = 12
    else:
        document.organization_id = 12
    with pytest.raises(ValueError, match="selected organization"):
        build_onboarding_capability_catalog([tool], [document], organization_id=11)


@pytest.mark.parametrize(
    "category, names",
    [
        ("calculator", ["safe_calculator"]),
        ("current_time", ["get_current_time", "convert_time"]),
    ],
)
def test_builtin_catalog_matches_runtime_functions(category, names):
    catalog = build_onboarding_capability_catalog(
        [make_tool(category)], [], organization_id=11
    )
    operations = catalog["tools"][0]["operations"]
    assert [op["name"] for op in operations] == names
    assert all(op["parameters"]["properties"] for op in operations)


def test_transfer_catalog_only_exposes_runtime_resolver_inputs():
    tool = make_tool(
        "transfer_call",
        destination_source="dynamic",
        destination="PRIVATE_DESTINATION",
        resolver={
            "url": "https://private.example/resolver",
            "headers": {"Authorization": "SECRET"},
            "parameters": [
                {
                    "name": "department",
                    "type": "string",
                    "description": "Requested department",
                }
            ],
        },
    )
    operation = build_onboarding_capability_catalog([tool], [], organization_id=11)[
        "tools"
    ][0]["operations"][0]
    assert set(operation["parameters"]["properties"]) == {"department"}
    assert "PRIVATE" not in json.dumps(operation)
    assert "SECRET" not in json.dumps(operation)


def test_mcp_catalog_preserves_unknown_schemas_and_server_allowlist():
    tool = make_tool(
        "mcp",
        url="https://private.example",
        tools_filter=["book", "hours"],
        discovered_tools=[
            {
                "name": "book",
                "description": "Reserve a slot",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "time": {"type": "string", "default": "SECRET_DEFAULT"}
                    },
                    "required": ["time"],
                    "x-auth": "SECRET_EXTENSION",
                },
            },
            {"name": "hours", "description": "Read opening hours"},
            {"name": "delete_all", "description": "Delete everything"},
        ],
    )
    catalog = build_onboarding_capability_catalog([tool], [], organization_id=11)
    operations = catalog["tools"][0]["operations"]
    assert [op["name"] for op in operations] == ["book", "hours"]
    assert operations[0]["function_name"] == "mcp__book_appointment__book"
    assert operations[0]["schema_status"] == "known"
    assert operations[1]["parameters"] is None
    assert operations[1]["schema_status"] == "unknown"
    assert "SECRET" not in json.dumps(catalog)


def test_schema_sanitizer_removes_nested_payloads_and_external_references():
    schema = {
        "anyOf": [{"$ref": "https://secret.example/schema"}, {"$ref": "#/$defs/input"}],
        "$defs": {
            "input": {
                "type": "object",
                "properties": {
                    "nested": {
                        "type": "array",
                        "items": {"type": "string", "examples": ["SECRET"]},
                    }
                },
                "default": {"password": "SECRET"},
            },
        },
    }
    result = sanitize_capability_schema(schema)
    assert "SECRET" not in json.dumps(result)
    assert "https://" not in json.dumps(result)
    assert result["anyOf"][1] == {"$ref": "#/$defs/input"}


def test_assignments_preserve_targeted_resources_without_blanket_attachment():
    catalog = build_onboarding_capability_catalog([make_tool()], [], organization_id=11)
    definition = {
        "nodes": [
            {"id": "start", "type": "startCall", "data": {}},
            {"id": "book", "type": "agentNode", "data": {"tool_uuids": ["tool-1"]}},
        ]
    }
    before = json.dumps(definition)
    validate_onboarding_resource_assignments(definition, catalog)
    assert json.dumps(definition) == before


@pytest.mark.parametrize(
    "nodes, message",
    [
        (
            [
                {
                    "id": "book",
                    "type": "agentNode",
                    "data": {"tool_uuids": ["foreign-tool"]},
                }
            ],
            "unauthorized",
        ),
        (
            [
                {
                    "id": "book",
                    "type": "agentNode",
                    "data": {"document_uuids": ["foreign-doc"]},
                }
            ],
            "unauthorized",
        ),
        ([{"id": "book", "type": "agentNode", "data": {}}], "every selected"),
        (
            [
                {
                    "id": "global",
                    "type": "globalNode",
                    "data": {"tool_uuids": ["tool-1"]},
                }
            ],
            "only be assigned",
        ),
    ],
)
def test_invalid_or_unused_resource_assignments_fail(nodes, message):
    catalog = build_onboarding_capability_catalog([make_tool()], [], organization_id=11)
    with pytest.raises(ValueError, match=message):
        validate_onboarding_resource_assignments({"nodes": nodes}, catalog)


@pytest.mark.parametrize(
    "filters",
    [
        {"tool-1": ["delete_all"]},
        {"foreign-tool": ["book"]},
        {"tool-1": []},
        {},
    ],
)
def test_mcp_filters_cannot_invent_or_silently_suppress_operations(filters):
    tool = make_tool(
        "mcp", discovered_tools=[{"name": "book", "description": "Reserve slot"}]
    )
    catalog = build_onboarding_capability_catalog([tool], [], organization_id=11)
    definition = {
        "nodes": [
            {
                "id": "book",
                "type": "agentNode",
                "data": {
                    "tool_uuids": ["tool-1"],
                    "mcp_tool_filters": filters,
                },
            }
        ]
    }
    with pytest.raises(ValueError):
        validate_onboarding_resource_assignments(definition, catalog)


def test_mcp_cache_without_discovery_is_explicitly_unknown_but_assignable():
    catalog = build_onboarding_capability_catalog(
        [make_tool("mcp")], [], organization_id=11
    )
    assert catalog["tools"][0]["operations"] == []
    assert catalog["tools"][0]["schema_status"] == "unknown"
    validate_onboarding_resource_assignments(
        {
            "nodes": [
                {
                    "id": "help",
                    "type": "agentNode",
                    "data": {
                        "tool_uuids": ["tool-1"],
                    },
                }
            ]
        },
        catalog,
    )


def collision_definition(*, label, tool_uuids=None, document_uuids=None, filters=None):
    data = {"tool_uuids": tool_uuids or [], "document_uuids": document_uuids or []}
    if filters is not None:
        data["mcp_tool_filters"] = filters
    return {
        "nodes": [{"id": "stage", "type": "agentNode", "data": data}],
        "edges": [
            {
                "id": "next",
                "source": "stage",
                "target": "end",
                "data": {"label": label},
            },
        ],
    }


@pytest.mark.parametrize(
    "category,label",
    [
        ("http_api", "Book Appointment"),
        ("calculator", "Safe Calculator"),
        ("current_time", "Get Current Time"),
    ],
)
def test_transition_names_cannot_shadow_runtime_tool_operations(category, label):
    catalog = build_onboarding_capability_catalog(
        [make_tool(category)], [], organization_id=11
    )
    definition = collision_definition(label=label, tool_uuids=["tool-1"])
    with pytest.raises(ValueError, match="duplicate runtime function names"):
        validate_onboarding_resource_assignments(definition, catalog)


def test_distinct_tool_ids_cannot_expose_the_same_builtin_function():
    first = make_tool("calculator")
    second = make_tool("calculator")
    second.tool_uuid = "tool-2"
    second.name = "A differently named calculator"
    catalog = build_onboarding_capability_catalog(
        [first, second], [], organization_id=11
    )
    definition = collision_definition(label="Done", tool_uuids=["tool-1", "tool-2"])
    with pytest.raises(ValueError, match="safe_calculator"):
        validate_onboarding_resource_assignments(definition, catalog)


def test_document_retrieval_name_is_reserved_only_on_nodes_with_documents():
    document = KnowledgeBaseDocumentModel(
        organization_id=11, document_uuid="doc-1", filename="Hours.pdf"
    )
    catalog = build_onboarding_capability_catalog([], [document], organization_id=11)
    definition = collision_definition(
        label="Retrieve From Knowledge Base", document_uuids=["doc-1"]
    )
    with pytest.raises(ValueError, match="retrieve_from_knowledge_base"):
        validate_onboarding_resource_assignments(definition, catalog)
    definition["nodes"].append(
        {"id": "reference", "type": "agentNode", "data": {"document_uuids": ["doc-1"]}}
    )
    definition["nodes"][0]["data"]["document_uuids"] = []
    validate_onboarding_resource_assignments(definition, catalog)


def test_custom_tool_cannot_shadow_document_retrieval():
    tool = make_tool()
    tool.name = "Retrieve From Knowledge Base"
    document = KnowledgeBaseDocumentModel(
        organization_id=11, document_uuid="doc-1", filename="Hours.pdf"
    )
    catalog = build_onboarding_capability_catalog(
        [tool], [document], organization_id=11
    )
    definition = collision_definition(
        label="Done", tool_uuids=["tool-1"], document_uuids=["doc-1"]
    )
    with pytest.raises(ValueError, match="retrieve_from_knowledge_base"):
        validate_onboarding_resource_assignments(definition, catalog)


def test_mcp_namespace_collision_respects_assigned_operation_filters():
    tool = make_tool("mcp", discovered_tools=[{"name": "book"}, {"name": "hours"}])
    catalog = build_onboarding_capability_catalog([tool], [], organization_id=11)
    definition = collision_definition(
        label="mcp__book_appointment__book", tool_uuids=["tool-1"]
    )
    with pytest.raises(ValueError, match="mcp__book_appointment__book"):
        validate_onboarding_resource_assignments(definition, catalog)
    definition["nodes"][0]["data"]["mcp_tool_filters"] = {"tool-1": ["hours"]}
    validate_onboarding_resource_assignments(definition, catalog)


def test_unknown_mcp_catalog_does_not_guess_a_function_name_from_its_display_name():
    catalog = build_onboarding_capability_catalog(
        [make_tool("mcp")], [], organization_id=11
    )
    validate_onboarding_resource_assignments(
        collision_definition(label="Book Appointment", tool_uuids=["tool-1"]), catalog
    )
    assert catalog["tools"][0]["schema_status"] == "unknown"


def test_duplicate_normalized_transition_names_are_rejected():
    definition = collision_definition(label="Already done")
    definition["edges"].append(
        {
            "id": "other",
            "source": "stage",
            "target": "other-end",
            "data": {"label": "Already-done"},
        }
    )
    with pytest.raises(ValueError, match="already_done"):
        validate_onboarding_resource_assignments(
            definition, {"tools": [], "documents": []}
        )
