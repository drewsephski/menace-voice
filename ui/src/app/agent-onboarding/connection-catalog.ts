import {
  BookOpen,
  Building2,
  Calendar,
  CloudSun,
  CreditCard,
  Database,
  FileText,
  GitBranch,
  Github,
  type LucideIcon,
  Search,
  UserPlus,
  Webhook,
  Zap,
} from "lucide-react";

import { MCP_URL_PATTERN } from "@/app/tools/config";
import type { HttpApiToolDefinition, ToolResponse } from "@/client/types.gen";

export type McpPresetId =
  | "context7"
  | "open-meteo"
  | "exa"
  | "deepwiki"
  | "calcom"
  | "linear"
  | "github"
  | "notion"
  | "stripe"
  | "hubspot"
  | "zapier";

export type HttpTemplateId = "notify-webhook" | "lookup-record" | "create-lead";

export type McpPreset = {
  id: McpPresetId;
  name: string;
  description: string;
  url: string;
  icon: LucideIcon;
  logoUrl?: string;
  wordmarkUrl?: string;
  /** When false, skip the white tile behind the logo (e.g. logos with their own backdrop). */
  logoOnWhite?: boolean;
  iconClassName?: string;
  requiresAuth?: boolean;
  authHint?: string;
};

export type HttpTemplate = {
  id: HttpTemplateId;
  name: string;
  description: string;
  method: "GET" | "POST";
  urlPlaceholder: string;
  icon: LucideIcon;
  iconColor: string;
  parameters: Array<{
    name: string;
    type: "string";
    description: string;
    required: boolean;
  }>;
};

export const MCP_PRESETS: McpPreset[] = [
  {
    id: "context7",
    name: "Context7 library docs",
    description:
      "Look up current, version-specific documentation and examples for modern libraries.",
    url: "https://mcp.context7.com/mcp",
    icon: BookOpen,
    logoUrl: "/integrations/context7.svg",
  },
  {
    id: "deepwiki",
    name: "DeepWiki repositories",
    description:
      "Explain public GitHub repositories and their architecture from generated documentation.",
    url: "https://mcp.deepwiki.com/mcp",
    icon: GitBranch,
    logoUrl: "/integrations/deepwiki.png",
    logoOnWhite: false,
  },
  {
    id: "exa",
    name: "Exa web search",
    description: "Search the live web and fetch pages during a conversation.",
    url: "https://mcp.exa.ai/mcp",
    icon: Search,
    logoUrl: "/integrations/exa.png",
  },
  {
    id: "open-meteo",
    name: "Open-Meteo weather",
    description: "Get current conditions and forecasts without an API key.",
    url: "https://open-meteo.caseyjhand.com/mcp",
    icon: CloudSun,
    logoUrl: "/integrations/open-meteo-mark.svg",
    wordmarkUrl: "/integrations/open-meteo.svg",
  },
  {
    id: "calcom",
    name: "Cal.com scheduling",
    description:
      "Check availability and manage bookings during the call.",
    url: "https://mcp.cal.com/mcp",
    icon: Calendar,
    logoUrl: "/integrations/calcom-mark.svg",
    wordmarkUrl: "/integrations/calcom.svg",
    logoOnWhite: false,
    requiresAuth: true,
    authHint: "Cal.com API key as a Bearer token",
  },
  {
    id: "linear",
    name: "Linear issues",
    description: "Search and create Linear issues from a support call.",
    url: "https://mcp.linear.app/mcp",
    icon: GitBranch,
    logoUrl: "/integrations/linear.svg",
    requiresAuth: true,
    authHint: "Linear API key as a Bearer token",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Look up public or private repositories and issues.",
    url: "https://api.githubcopilot.com/mcp",
    icon: Github,
    logoUrl: "/integrations/github.svg",
    requiresAuth: true,
    authHint: "GitHub personal access token as a Bearer token",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Search living docs that are not uploaded as files.",
    url: "https://mcp.notion.com/mcp",
    icon: FileText,
    logoUrl: "/integrations/notion.svg",
    requiresAuth: true,
    authHint: "Notion integration token as a Bearer token",
  },
  {
    id: "stripe",
    name: "Stripe billing",
    description:
      "Look up customers, invoices, and subscriptions. Use a read-only key.",
    url: "https://mcp.stripe.com",
    icon: CreditCard,
    logoUrl: "/integrations/stripe.svg",
    requiresAuth: true,
    authHint: "Restricted read-only Stripe key as a Bearer token",
  },
  {
    id: "hubspot",
    name: "HubSpot CRM",
    description: "Look up and create HubSpot contacts and notes.",
    url: "https://mcp.hubspot.com/mcp",
    icon: Building2,
    logoUrl: "/integrations/hubspot.svg",
    requiresAuth: true,
    authHint: "HubSpot private app token as a Bearer token",
  },
  {
    id: "zapier",
    name: "Zapier",
    description:
      "Call a few selected Zapier actions. Filter tools after connecting.",
    url: "https://mcp.zapier.com/api/v1/connect",
    icon: Zap,
    logoUrl: "/integrations/zapier.svg",
    requiresAuth: true,
    authHint: "Zapier MCP connection token as a Bearer token",
  },
];

export const MCP_PRESET_BY_ID = Object.fromEntries(
  MCP_PRESETS.map((preset) => [preset.id, preset]),
) as Record<McpPresetId, McpPreset>;

export const HTTP_TEMPLATES: HttpTemplate[] = [
  {
    id: "notify-webhook",
    name: "Notify a webhook",
    description:
      "POST a call summary to Slack, n8n, Zapier, or any incoming webhook.",
    method: "POST",
    urlPlaceholder: "https://hooks.example.com/voice-summary",
    icon: Webhook,
    iconColor: "#A855F7",
    parameters: [
      {
        name: "summary",
        type: "string",
        description: "Concise recap of the conversation and any commitments.",
        required: true,
      },
      {
        name: "caller_name",
        type: "string",
        description: "Caller's name if known.",
        required: false,
      },
      {
        name: "next_step",
        type: "string",
        description: "The follow-up the caller was promised.",
        required: false,
      },
    ],
  },
  {
    id: "lookup-record",
    name: "Look up a record",
    description:
      "GET a customer, order, or ticket by phone number before answering from memory.",
    method: "GET",
    urlPlaceholder: "https://api.example.com/customers",
    icon: Database,
    iconColor: "#0EA5E9",
    parameters: [
      {
        name: "phone",
        type: "string",
        description: "Caller's phone number in E.164 format when available.",
        required: true,
      },
    ],
  },
  {
    id: "create-lead",
    name: "Create a lead",
    description:
      "POST a qualified lead to your CRM or intake API after the caller confirms.",
    method: "POST",
    urlPlaceholder: "https://api.example.com/leads",
    icon: UserPlus,
    iconColor: "#10B981",
    parameters: [
      {
        name: "name",
        type: "string",
        description: "Lead full name.",
        required: true,
      },
      {
        name: "phone",
        type: "string",
        description: "Lead callback number.",
        required: true,
      },
      {
        name: "email",
        type: "string",
        description: "Lead email if collected.",
        required: false,
      },
      {
        name: "notes",
        type: "string",
        description: "Qualification notes, timeline, and next step.",
        required: true,
      },
    ],
  },
];

export const HTTP_TEMPLATE_BY_ID = Object.fromEntries(
  HTTP_TEMPLATES.map((template) => [template.id, template]),
) as Record<HttpTemplateId, HttpTemplate>;

export function getMcpPresetShortName(preset: McpPreset): string {
  switch (preset.id) {
    case "context7":
      return "Context7";
    case "exa":
      return "Exa";
    case "deepwiki":
      return "DeepWiki";
    case "open-meteo":
      return "Open-Meteo";
    case "calcom":
      return "Cal.com";
    case "linear":
      return "Linear";
    case "github":
      return "GitHub";
    case "notion":
      return "Notion";
    case "stripe":
      return "Stripe";
    case "hubspot":
      return "HubSpot";
    case "zapier":
      return "Zapier";
    default:
      return preset.name;
  }
}

export function normalizeMcpUrl(value: string): string | null {
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    url.hash = "";
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return url.toString();
  } catch {
    return null;
  }
}

export function getMcpUrl(tool: Pick<ToolResponse, "definition">): string | null {
  const definition = tool.definition;
  if (!definition || typeof definition !== "object") return null;
  const config = definition.config;
  if (!config || typeof config !== "object" || !("url" in config)) return null;
  return typeof config.url === "string"
    ? (normalizeMcpUrl(config.url) ?? config.url)
    : null;
}

export function getMcpPresetForTool(tool: Pick<ToolResponse, "category" | "name" | "definition">): McpPreset | null {
  if (tool.category !== "mcp") return null;

  const toolUrl = normalizeMcpUrl(getMcpUrl(tool) ?? "");
  const byUrl = toolUrl
    ? MCP_PRESETS.find((preset) => new URL(preset.url).hostname === new URL(toolUrl).hostname)
    : undefined;
  if (byUrl) return byUrl;

  const normalizedName = tool.name.trim().toLowerCase();
  return (
    MCP_PRESETS.find((preset) => {
      const names = [preset.name, getMcpPresetShortName(preset)].map((name) =>
        name.toLowerCase(),
      );
      return names.some(
        (name) => normalizedName === name || normalizedName.startsWith(`${name} `),
      );
    }) ?? null
  );
}

export function getHttpTemplateForTool(tool: Pick<ToolResponse, "category" | "name" | "definition">): HttpTemplate | null {
  if (tool.category !== "http_api") return null;

  const normalizedName = tool.name.trim().toLowerCase();
  const exactMatch = HTTP_TEMPLATES.find(
    (template) => template.name.toLowerCase() === normalizedName,
  );
  if (exactMatch) return exactMatch;

  if (normalizedName.includes("webhook")) {
    return HTTP_TEMPLATE_BY_ID["notify-webhook"];
  }
  if (normalizedName.includes("lead")) {
    return HTTP_TEMPLATE_BY_ID["create-lead"];
  }
  if (/(lookup|look up|record)/.test(normalizedName)) {
    return HTTP_TEMPLATE_BY_ID["lookup-record"];
  }

  const config = tool.definition?.config;
  if (config && typeof config === "object" && "url" in config) {
    const url = typeof config.url === "string" ? config.url : "";
    const normalizedUrl = normalizeMcpUrl(url);
    if (normalizedUrl) {
      const parsedUrl = new URL(normalizedUrl);
      const isWebhookHost = /^(hooks?|webhooks?)\./i.test(parsedUrl.hostname);
      const isWebhookPath = /\/(hooks?|webhooks?)(\/|$)/i.test(
        parsedUrl.pathname,
      );
      if (isWebhookHost || isWebhookPath) {
        return HTTP_TEMPLATE_BY_ID["notify-webhook"];
      }
    }
  }

  return null;
}

export function getDiscoveredToolCount(tool: ToolResponse): number {
  const definition = tool.definition;
  if (!definition || typeof definition !== "object") return 0;
  const config = definition.config;
  if (!config || typeof config !== "object" || !("discovered_tools" in config))
    return 0;
  const discoveredTools = config.discovered_tools;
  return Array.isArray(discoveredTools) ? discoveredTools.length : 0;
}

export function isValidMcpUrl(value: string): boolean {
  const normalized = normalizeMcpUrl(value);
  return Boolean(normalized && MCP_URL_PATTERN.test(normalized));
}

export function getMcpUsageInstructions(
  servers: Array<{ name: string; url: string }>,
): string {
  if (servers.length === 0) return "No external MCP servers are connected.";

  const instructions = servers.map((server) => {
    if (server.url === "https://mcp.context7.com/mcp") {
      return `Use ${server.name} first for questions about libraries, frameworks, SDKs, or APIs. Ask for the package and version when it matters, prefer the returned documentation and examples over memory, and state the version context when answering.`;
    }
    if (server.url === "https://mcp.deepwiki.com/mcp") {
      return `Use ${server.name} for questions about a public repository's architecture, setup, or implementation. Confirm the repository before searching, distinguish generated repository documentation from official maintainer documentation, and do not claim private-repository access.`;
    }
    if (server.url === "https://mcp.exa.ai/mcp") {
      return `Use ${server.name} when the caller needs current information from the public web or asks you to look up a webpage. Prefer it over guessing, summarize the result clearly, and mention when information came from web search.`;
    }
    if (server.url === "https://open-meteo.caseyjhand.com/mcp") {
      return `Use ${server.name} for current conditions, forecasts, or weather-related planning. Ask for the caller's location if it is missing, and distinguish a forecast from a current observation.`;
    }
    if (server.url.startsWith("https://mcp.cal.com")) {
      return `Use ${server.name} to check availability or manage bookings. Never confirm a time until the tool returns a slot, and read back the confirmed details.`;
    }
    if (server.url.startsWith("https://mcp.linear.app")) {
      return `Use ${server.name} to search existing issues before creating a new one. Confirm the title and priority with the caller before creating.`;
    }
    if (server.url.startsWith("https://api.githubcopilot.com/mcp")) {
      return `Use ${server.name} for repository or issue questions. Confirm the owner and repo name before searching.`;
    }
    if (server.url.startsWith("https://mcp.notion.com")) {
      return `Use ${server.name} for internal documentation that lives in Notion. Prefer retrieved pages over memory.`;
    }
    if (server.url.startsWith("https://mcp.stripe.com")) {
      return `Use ${server.name} only to look up billing status. Do not refund, charge, or change subscriptions on this call.`;
    }
    if (server.url.startsWith("https://mcp.hubspot.com")) {
      return `Use ${server.name} to look up or create CRM records. Confirm contact details before writing, and never claim a save succeeded unless the tool confirms it.`;
    }
    if (server.url.startsWith("https://mcp.zapier.com")) {
      return `Use ${server.name} only for the filtered Zapier actions attached to this agent. Ask for missing fields before taking an action.`;
    }
    return `Use ${server.name} only when its connected tools are relevant to the caller's request. Ask for missing details before taking an action and never claim an action succeeded unless the tool confirms it.`;
  });

  return `MCP tool guidance:\n${instructions.map((instruction) => `- ${instruction}`).join("\n")}`;
}

export function createHttpTemplateDefinition(
  template: HttpTemplate,
  url: string,
  credentialUuid: string,
): HttpApiToolDefinition {
  return {
    schema_version: 1,
    type: "http_api",
    config: {
      method: template.method,
      url: url.trim(),
      credential_uuid: credentialUuid || null,
      timeout_ms: 5000,
      parameters: template.parameters.map((parameter) => ({
        name: parameter.name,
        type: parameter.type,
        description: parameter.description,
        required: parameter.required,
      })),
    },
  };
}

export function getHttpUsageInstructions(
  tools: Array<{ name: string; templateId?: HttpTemplateId }>,
): string {
  if (tools.length === 0) return "";
  const lines = tools.map((tool) => {
    if (tool.templateId === "create-lead") {
      return `Use ${tool.name} only after the caller confirms they want to be contacted. Read back name and phone before saving.`;
    }
    if (tool.templateId === "lookup-record") {
      return `Use ${tool.name} before answering account-specific questions. If the lookup fails, say so and collect a callback.`;
    }
    if (tool.templateId === "notify-webhook") {
      return `Use ${tool.name} once you have a complete recap. Do not claim the team was notified unless the tool succeeds.`;
    }
    return `Use ${tool.name} only when the caller's request matches that HTTP API. Confirm required fields first.`;
  });
  return `HTTP API guidance:\n${lines.map((line) => `- ${line}`).join("\n")}`;
}
