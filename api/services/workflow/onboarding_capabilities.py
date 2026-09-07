"""Planning-only resource catalog and validation for generated onboarding flows."""

from __future__ import annotations

from collections import Counter
from collections.abc import Sequence
from typing import TYPE_CHECKING, Any

from api.enums import ToolCategory
from api.services.workflow.tools.calculator import get_calculator_tools
from api.services.workflow.tools.custom_tool import tool_to_function_schema
from api.services.workflow.tools.mcp_tool import namespace_function_name
from api.services.workflow.tools.timezone import get_time_tools
from api.services.workflow.workflow_graph import transition_tool_name

if TYPE_CHECKING:
    from api.db.models import KnowledgeBaseDocumentModel, ToolModel


def sanitize_capability_schema(schema: object) -> dict[str, Any] | bool | None:
    """Keep input structure, never schema defaults, examples or vendor extensions.

    A server schema is untrusted metadata. In particular, examples and defaults
    can contain credentials; external references must not disclose service URLs.
    """
    if isinstance(schema, bool):
        return schema
    if not isinstance(schema, dict):
        return None
    result: dict[str, Any] = {}
    for key in (
        "type",
        "title",
        "description",
        "enum",
        "const",
        "required",
        "format",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "minLength",
        "maxLength",
        "pattern",
        "minItems",
        "maxItems",
        "uniqueItems",
        "minProperties",
        "maxProperties",
    ):
        if key in schema:
            result[key] = schema[key]
    if isinstance(schema.get("$ref"), str) and schema["$ref"].startswith("#/"):
        result["$ref"] = schema["$ref"]
    for key in ("properties", "$defs", "definitions", "patternProperties"):
        if isinstance(schema.get(key), dict):
            result[key] = {
                name: sanitized
                for name, child in schema[key].items()
                if (sanitized := sanitize_capability_schema(child)) is not None
            }
    for key in (
        "items",
        "additionalProperties",
        "not",
        "if",
        "then",
        "else",
        "contains",
    ):
        if (
            key in schema
            and (child := sanitize_capability_schema(schema[key])) is not None
        ):
            result[key] = child
    for key in ("anyOf", "allOf", "oneOf", "prefixItems"):
        if isinstance(schema.get(key), list):
            result[key] = [
                sanitized
                for child in schema[key]
                if (sanitized := sanitize_capability_schema(child)) is not None
            ]
    return result


def build_onboarding_capability_catalog(
    tools: Sequence[ToolModel],
    documents: Sequence[KnowledgeBaseDocumentModel],
    *,
    organization_id: int,
) -> dict[str, Any]:
    """Describe authorized resources without credentials, transport config or I/O.

    Callers must resolve selected resources through organization-scoped DB APIs.
    This boundary checks ownership again before sending metadata to generation.
    Cached MCP descriptions remain useful when older discovery lacks schemas;
    an unknown schema is never represented as a parameterless operation.
    """
    if any(row.organization_id != organization_id for row in [*tools, *documents]):
        raise ValueError(
            "Onboarding resources must belong to the selected organization"
        )

    catalog_tools = []
    for tool in tools:
        operations = []
        if tool.category == ToolCategory.MCP.value:
            config = (tool.definition or {}).get("config", {})
            allowed = set(config.get("tools_filter") or [])
            for operation in config.get("discovered_tools") or []:
                name = operation.get("name")
                if (
                    not isinstance(name, str)
                    or not name
                    or (allowed and name not in allowed)
                ):
                    continue
                parameters = sanitize_capability_schema(operation.get("inputSchema"))
                operations.append(
                    {
                        "name": name,
                        "function_name": namespace_function_name(
                            tool.name, name, fallback=tool.tool_uuid[:8]
                        ),
                        "description": operation.get("description") or "",
                        "parameters": parameters,
                        "schema_status": "known"
                        if parameters is not None
                        else "unknown",
                    }
                )
        else:
            if tool.category == ToolCategory.CALCULATOR.value:
                schemas = get_calculator_tools()
            elif tool.category == ToolCategory.CURRENT_TIME.value:
                schemas = get_time_tools()
            else:
                schemas = [tool_to_function_schema(tool)]
            for schema in schemas:
                function = schema["function"]
                operations.append(
                    {
                        "name": function["name"],
                        "description": function["description"],
                        "parameters": sanitize_capability_schema(
                            function["parameters"]
                        ),
                        "schema_status": "known",
                    }
                )
        catalog_tools.append(
            {
                "tool_uuid": tool.tool_uuid,
                "name": tool.name,
                "description": tool.description or "",
                "category": tool.category,
                "operations": operations,
                "schema_status": "known"
                if operations
                and all(op["schema_status"] == "known" for op in operations)
                else "unknown",
            }
        )
    return {
        "tools": catalog_tools,
        "documents": [
            {"document_uuid": document.document_uuid, "title": document.filename}
            for document in documents
        ],
    }


def validate_onboarding_resource_assignments(
    definition: dict[str, Any],
    catalog: dict[str, Any],
    *,
    require_coverage: bool = True,
) -> None:
    """Reject invented/unused resources; preserve deliberate stage assignments."""
    tools = {tool["tool_uuid"]: tool for tool in catalog["tools"]}
    authorized = {
        "tool_uuids": set(tools),
        "document_uuids": {doc["document_uuid"] for doc in catalog["documents"]},
    }
    assigned: dict[str, set[str]] = {key: set() for key in authorized}
    for node in definition.get("nodes", []):
        data = node.get("data") or {}
        for key, permitted in authorized.items():
            references = data.get(key, [])
            if not isinstance(references, list) or any(
                not isinstance(reference, str) for reference in references
            ):
                raise ValueError(f"Node {node.get('id')} {key} must be a list of UUIDs")
            if references and node.get("type") not in {"startCall", "agentNode"}:
                raise ValueError(
                    "Resources may only be assigned to Start and Agent stages"
                )
            if set(references) - permitted:
                raise ValueError(f"Node {node.get('id')} references unauthorized {key}")
            assigned[key].update(references)

        filters = data.get("mcp_tool_filters")
        if filters is None:
            continue
        if not isinstance(filters, dict):
            raise ValueError(  # noqa: TRY004 - Generation validation uses ValueError for repair.
                "mcp_tool_filters must map selected tool UUIDs to operation names"
            )
        for tool_uuid, operation_names in filters.items():
            tool = tools.get(tool_uuid)
            if (
                not tool
                or tool_uuid not in data.get("tool_uuids", [])
                or tool["category"] != ToolCategory.MCP.value
            ):
                raise ValueError(
                    "MCP filters must reference an MCP tool assigned to this stage"
                )
            if not isinstance(operation_names, list) or any(
                not isinstance(name, str) for name in operation_names
            ):
                raise ValueError("MCP filters must contain lists of operation names")
            known_names = {operation["name"] for operation in tool["operations"]}
            if set(operation_names) - known_names:
                raise ValueError(
                    "MCP filters reference operations absent from the authorized catalog"
                )
        # A supplied filter map suppresses every MCP tool without a nonempty entry.
        for tool_uuid in data.get("tool_uuids", []):
            if tools[tool_uuid][
                "category"
            ] == ToolCategory.MCP.value and not filters.get(tool_uuid):
                raise ValueError(
                    "Assigned MCP tools need at least one operation when filters are supplied"
                )

    if require_coverage:
        for key, permitted in authorized.items():
            if permitted - assigned[key]:
                raise ValueError(
                    f"Assign every selected {key} to at least one relevant stage"
                )

    for node in definition.get("nodes", []):
        data = node.get("data") or {}
        names = [
            transition_tool_name(edge["data"]["label"])
            for edge in definition.get("edges", [])
            if edge.get("source") == node.get("id")
        ]
        if data.get("document_uuids"):
            names.append("retrieve_from_knowledge_base")
        filters = data.get("mcp_tool_filters")
        for tool_uuid in data.get("tool_uuids", []):
            tool = tools[tool_uuid]
            for operation in tool["operations"]:
                if tool["category"] == ToolCategory.MCP.value:
                    if (
                        filters is not None
                        and operation["name"] not in filters[tool_uuid]
                    ):
                        continue
                    names.append(operation["function_name"])
                else:
                    names.append(operation["name"])
        duplicates = sorted(name for name, count in Counter(names).items() if count > 1)
        if duplicates:
            raise ValueError(
                f"Node {node.get('id')} has duplicate runtime function names: "
                + ", ".join(duplicates)
                + ". Use distinct transition labels or assign non-conflicting tools."
            )
