import { describe, expect, it } from "vitest";

import type { ToolResponse } from "@/client/types.gen";

import {
  getHttpTemplateForTool,
  getMcpPresetForTool,
} from "./connection-catalog";

function createTool(overrides: Partial<ToolResponse>): ToolResponse {
  return {
    id: 1,
    tool_uuid: "tool-1",
    name: "Tool",
    description: null,
    category: "http_api",
    icon: null,
    icon_color: null,
    status: "active",
    definition: {},
    created_at: "2026-09-04T00:00:00Z",
    updated_at: null,
    ...overrides,
  };
}

describe("tool presentation catalog", () => {
  it("matches a known MCP server by normalized URL", () => {
    const tool = createTool({
      category: "mcp",
      name: "Documentation",
      definition: {
        type: "mcp",
        config: { url: "https://mcp.context7.com/mcp/" },
      },
    });

    expect(getMcpPresetForTool(tool)?.id).toBe("context7");
  });

  it("uses the saved MCP name when a URL is unavailable", () => {
    const tool = createTool({
      category: "mcp",
      name: "Open-Meteo weather",
    });

    expect(getMcpPresetForTool(tool)?.id).toBe("open-meteo");
  });

  it.each([
    ["https://mcp.exa.ai/mcp?tools=web_search_exa", "exa"],
    ["https://mcp.linear.app/sse", "linear"],
    ["https://mcp.zapier.com/api/v1/connect/workspace", "zapier"],
  ])("recognizes the provider at %s after the tool is renamed", (url, id) => {
    expect(getMcpPresetForTool(createTool({
      category: "mcp",
      name: "My connection",
      definition: { type: "mcp", config: { url } },
    }))?.id).toBe(id);
  });

  it.each([
    "https://mcp.exa.ai.example.com/mcp",
    "https://example.com/mcp.exa.ai",
    "invalid url",
  ])("does not assign a provider logo to an unknown endpoint %s", (url) => {
    expect(getMcpPresetForTool(createTool({
      category: "mcp",
      name: "My connection",
      definition: { type: "mcp", config: { url } },
    }))).toBeNull();
  });

  it.each([
    ["Notify a webhook", "notify-webhook"],
    ["Look up a record", "lookup-record"],
    ["Create a lead", "create-lead"],
  ])("gives %s its own HTTP presentation", (name, expectedId) => {
    const tool = createTool({ name });

    expect(getHttpTemplateForTool(tool)?.id).toBe(expectedId);
  });

  it("recognizes a custom webhook endpoint", () => {
    const tool = createTool({
      name: "Send summary",
      definition: {
        type: "http_api",
        config: { url: "https://hooks.example.com/call-summary" },
      },
    });

    expect(getHttpTemplateForTool(tool)?.id).toBe("notify-webhook");
  });
});
