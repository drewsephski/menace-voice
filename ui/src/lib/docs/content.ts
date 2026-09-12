import articles from "./articles.json";

export type DocsMode = "builders" | "agents";

export type DocBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; title: string; text: string }
  | {
      type: "link";
      before: string;
      label: string;
      slug: string;
      mode?: DocsMode;
      after?: string;
    };

export interface DocArticle {
  slug: string;
  section: string;
  title: string;
  description: string;
  readTime: string;
  blocks: DocBlock[];
  next: string;
}

export interface DocGroup {
  title: string;
  items: Array<Pick<DocArticle, "slug" | "title">>;
}

const BUILDER_GROUPS: DocGroup[] = [
  {
    title: "Start here",
    items: [
      { slug: "overview", title: "Overview" },
      { slug: "model-setup", title: "Models and costs" },
      { slug: "first-agent", title: "Your first agent" },
    ],
  },
  { title: "Build the behavior", items: [{ slug: "tools", title: "Tools" }, { slug: "knowledge", title: "Knowledge & context" }] },
  { title: "Ship with confidence", items: [{ slug: "deploy", title: "Production checklist" }] },
];

const AGENT_GROUPS: DocGroup[] = [
  { title: "Agent docs", items: [{ slug: "agent-overview", title: "Overview" }, { slug: "agent-quickstart", title: "Agent quickstart" }] },
  { title: "Build reliable behavior", items: [{ slug: "tool-contracts", title: "Tool contracts" }, { slug: "memory-context", title: "Memory & context" }, { slug: "mcp-bridge", title: "MCP bridge" }] },
  { title: "Ship with confidence", items: [{ slug: "production-checklist", title: "Production checklist" }] },
];

export const ARTICLES = articles as Record<DocsMode, DocArticle[]>;

export const GROUPS: Record<DocsMode, DocGroup[]> = {
  builders: BUILDER_GROUPS,
  agents: AGENT_GROUPS,
};

