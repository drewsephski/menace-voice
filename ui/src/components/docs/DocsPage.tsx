"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Copy,
  ExternalLink,
  Menu,
  Search,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";

import styles from "./docs.module.css";

type DocsMode = "builders" | "agents";

type DocBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; title: string; text: string };

interface DocArticle {
  slug: string;
  section: string;
  title: string;
  description: string;
  readTime: string;
  blocks: DocBlock[];
  next: string;
}

interface DocGroup {
  title: string;
  items: Array<Pick<DocArticle, "slug" | "title">>;
}

const BUILDER_ARTICLES: DocArticle[] = [
  {
    slug: "overview",
    section: "Start here",
    title: "From first call to production",
    description:
      "Get an agent talking in five minutes, then follow the shortest path to a reliable customer conversation.",
    readTime: "4 min read",
    next: "first-agent",
    blocks: [
      {
        type: "paragraph",
        text: "Menace Voice gives you a visual workflow for the conversation, a live Web Call for fast feedback, and the tools to connect that conversation to your systems.",
      },
      {
        type: "callout",
        title: "The recommended path",
        text: "Start in the browser. Add a tool when the agent needs to act. Connect telephony only after the conversation feels right.",
      },
      {
        type: "list",
        items: [
          "Create an agent from a plain-language use case.",
          "Run a Web Call and listen for the moments that need work.",
          "Add context, tools, and guardrails to the smallest useful scope.",
          "Move to phone or website traffic with logs and a human fallback in place.",
        ],
      },
    ],
  },
  {
    slug: "first-agent",
    section: "Start here",
    title: "Build your first voice agent",
    description:
      "Create a working agent without telephony setup, hear it in your browser, and make your first useful iteration.",
    readTime: "5 min read",
    next: "tools",
    blocks: [
      {
        type: "paragraph",
        text: "Describe one job clearly: who the agent helps, what it should accomplish, and what it must never promise. Menace generates the starting workflow so you can spend your time on the conversation, not plumbing.",
      },
      {
        type: "code",
        language: "Agent brief",
        code: `Goal: book a haircut appointment\nAudience: new and returning customers\nMust collect: service, preferred day, preferred time\nMust not: confirm a slot before the booking tool succeeds`,
      },
      {
        type: "list",
        items: [
          "Open the agent builder and choose Create an agent.",
          "Paste a specific use case, including success criteria and boundaries.",
          "Start a Web Call and try a normal path plus one unexpected question.",
          "Edit the node that owns the behavior, then call again to compare.",
        ],
      },
      {
        type: "callout",
        title: "Keep the first version small",
        text: "One clear job makes the first transcript easier to evaluate. Add branches only when a real conversation proves you need them.",
      },
    ],
  },
  {
    slug: "tools",
    section: "Build the behavior",
    title: "Give your agent tools",
    description:
      "Connect real-world actions with explicit inputs, safe failure states, and a response the caller can understand.",
    readTime: "7 min read",
    next: "knowledge",
    blocks: [
      {
        type: "paragraph",
        text: "A tool is a contract between the agent and your system. Describe what it does, validate every argument at the boundary, and tell the agent what to say when the action cannot complete.",
      },
      {
        type: "code",
        language: "Tool description",
        code: `Name: lookup_order\nPurpose: find an order by the caller's order number\nInput: order_number (string, required)\nSuccess: return status and estimated delivery\nFailure: explain that the lookup is unavailable; do not invent a status`,
      },
      {
        type: "list",
        items: [
          "Prefer one tool per business action instead of a catch-all endpoint.",
          "Keep credentials and internal implementation details out of the prompt.",
          "Return structured, minimal data that the agent can turn into natural language.",
          "Test timeouts, empty results, validation errors, and duplicate requests.",
        ],
      },
    ],
  },
  {
    slug: "knowledge",
    section: "Build the behavior",
    title: "Add context and knowledge",
    description:
      "Help the agent answer with the right context without turning every prompt into a data dump.",
    readTime: "6 min read",
    next: "deploy",
    blocks: [
      {
        type: "paragraph",
        text: "Use knowledge base documents for stable reference material, and context variables for facts that belong to this caller or run. Keep the distinction clear so answers stay current and auditable.",
      },
      {
        type: "list",
        items: [
          "Upload the source of truth, not screenshots of the source of truth.",
          "Pass only the caller's relevant context into a run.",
          "State the source and freshness of policy or pricing information.",
          "Tell the agent to ask for clarification when context conflicts.",
        ],
      },
      {
        type: "callout",
        title: "A useful rule",
        text: "If a value changes during a conversation, it belongs in run context or a tool response. If it changes outside the conversation, keep the system of record outside the prompt.",
      },
    ],
  },
  {
    slug: "deploy",
    section: "Ship with confidence",
    title: "Move from demo to production",
    description:
      "Connect your traffic, watch real runs, and define the moment a human should take over.",
    readTime: "8 min read",
    next: "overview",
    blocks: [
      {
        type: "paragraph",
        text: "Before you connect a phone number or embed the widget, make the failure path as intentional as the happy path. Production agents are judged by what they do when a service is slow, a caller is unclear, or a request is out of scope.",
      },
      {
        type: "list",
        items: [
          "Choose an explicit inbound or outbound entry point.",
          "Add a human handoff condition for uncertainty, urgency, or sensitive requests.",
          "Verify webhook signatures before accepting call results.",
          "Review transcripts, latency, tool outcomes, and dispositions after launch.",
        ],
      },
      {
        type: "callout",
        title: "Ship a feedback loop",
        text: "A small set of reviewed calls is more useful than a large set of unexamined transcripts. Turn recurring misses into a prompt, tool, or workflow change.",
      },
    ],
  },
];

const AGENT_ARTICLES: DocArticle[] = [
  {
    slug: "agent-overview",
    section: "Agent docs",
    title: "Build agents that can be trusted",
    description:
      "A practical guide for coding agents that create, configure, and operate Menace Voice workflows safely.",
    readTime: "5 min read",
    next: "agent-quickstart",
    blocks: [
      {
        type: "paragraph",
        text: "An implementation agent should treat a voice workflow as a production boundary: inspect the current definition, make the smallest valid change, and prove the behavior with a real run.",
      },
      {
        type: "callout",
        title: "Agent operating principle",
        text: "Observe → plan → mutate → validate → report the evidence. Never infer a successful call from a successful API response alone.",
      },
      {
        type: "list",
        items: [
          "Read the current workflow and its configuration before editing.",
          "Prefer idempotent API calls and preserve unrelated nodes and settings.",
          "Validate contracts at the boundary and redact secrets from logs.",
          "Exercise the user-visible path, then report what was actually observed.",
        ],
      },
    ],
  },
  {
    slug: "agent-quickstart",
    section: "Agent docs",
    title: "Agent quickstart",
    description:
      "Give a coding agent a narrow, observable path to create and improve its first Menace Voice agent.",
    readTime: "6 min read",
    next: "tool-contracts",
    blocks: [
      {
        type: "paragraph",
        text: "Start every task with a read-only inventory: find the target agent, inspect its current version, and identify the exact node or tool that owns the requested behavior.",
      },
      {
        type: "code",
        language: "Task contract",
        code: `Objective: add order lookup to the support agent\nRead first: workflow definition, tool config, latest run\nChange: one tool + one agent-node instruction\nProve: validation passes, tool failure is handled, transcript is legible\nReport: changed ids, run id, and remaining risks`,
      },
      {
        type: "list",
        items: [
          "Use a stable agent identifier and record the version you changed.",
          "Keep tool schemas strict and descriptions short enough to be actionable.",
          "Test the success path and at least one refusal or timeout path.",
          "Leave a human-readable handoff note for the next operator.",
        ],
      },
    ],
  },
  {
    slug: "tool-contracts",
    section: "Agent docs",
    title: "Design tool contracts",
    description:
      "Make tool calls predictable for both the model and the system that receives them.",
    readTime: "7 min read",
    next: "memory-context",
    blocks: [
      {
        type: "paragraph",
        text: "Treat every tool as a typed function with one job. The agent should know when to call it, what it may return, and how to recover when it cannot run.",
      },
      {
        type: "code",
        language: "JSON",
        code: `{\n  "name": "lookup_order",\n  "description": "Get current delivery status for one order.",\n  "parameters": {\n    "type": "object",\n    "properties": {\n      "order_number": { "type": "string" }\n    },\n    "required": ["order_number"],\n    "additionalProperties": false\n  }\n}`,
      },
      {
        type: "list",
        items: [
          "Validate shape, authorization, and ownership before doing work.",
          "Use bounded timeouts and return machine-readable error categories.",
          "Make retries safe or explicitly mark the action as non-retryable.",
          "Never ask the model to construct secrets, SQL, or privileged headers.",
        ],
      },
    ],
  },
  {
    slug: "memory-context",
    section: "Agent docs",
    title: "Memory and context",
    description:
      "Separate what the agent should remember in the conversation from what your systems should own durably.",
    readTime: "6 min read",
    next: "mcp-bridge",
    blocks: [
      {
        type: "paragraph",
        text: "Context should be scoped to the current run and easy to explain. Durable memory belongs in a system with explicit retention, access control, and correction paths.",
      },
      {
        type: "list",
        items: [
          "Pass stable identity and task facts, not an entire customer record.",
          "Label values from tools versus values supplied by the caller.",
          "Resolve conflicts in favor of the latest trusted system response.",
          "Give the caller a way to correct important remembered information.",
        ],
      },
      {
        type: "callout",
        title: "Protect the boundary",
        text: "Do not put API keys, access tokens, or hidden system instructions into user-visible context. Keep secrets in server-side configuration and pass only the result the agent needs.",
      },
    ],
  },
  {
    slug: "mcp-bridge",
    section: "Agent docs",
    title: "Use the MCP bridge safely",
    description:
      "Connect an agent to external tools while keeping permissions, timeouts, and ownership explicit.",
    readTime: "8 min read",
    next: "production-checklist",
    blocks: [
      {
        type: "paragraph",
        text: "MCP is a useful boundary for discovering tools, but discovery is not authorization. Expose only the tools this workflow needs, and review the server identity before enabling it.",
      },
      {
        type: "list",
        items: [
          "Allowlist servers and tools per environment.",
          "Use least-privilege credentials with an owner and rotation path.",
          "Set timeouts, size limits, and a clear fallback for unavailable tools.",
          "Record tool name, duration, outcome, and request id without recording secrets.",
        ],
      },
      {
        type: "callout",
        title: "Human approval belongs at the edge",
        text: "For irreversible actions such as refunds, account changes, or external messages, require a visible approval step before the tool executes.",
      },
    ],
  },
  {
    slug: "production-checklist",
    section: "Agent docs",
    title: "Production checklist",
    description:
      "The final pass before your agent is allowed to touch real callers, real data, and real systems.",
    readTime: "9 min read",
    next: "agent-overview",
    blocks: [
      {
        type: "list",
        items: [
          "Auth: keys are scoped, stored outside prompts, and rotated.",
          "Behavior: out-of-scope requests, silence, interruptions, and handoff are tested.",
          "Tools: inputs are validated, timeouts are bounded, and retries are safe.",
          "Operations: transcripts, traces, webhooks, and dispositions are observable.",
          "Recovery: a human can take over and the caller knows what happens next.",
          "Change control: every workflow edit has a version, owner, and rollback path.",
        ],
      },
      {
        type: "callout",
        title: "Prove the boundary",
        text: "Static validation tells you the definition is well-formed. A reviewed run tells you the conversation, tool behavior, and handoff are working together.",
      },
    ],
  },
];

const BUILDER_GROUPS: DocGroup[] = [
  { title: "Start here", items: [{ slug: "overview", title: "Overview" }, { slug: "first-agent", title: "Your first agent" }] },
  { title: "Build the behavior", items: [{ slug: "tools", title: "Tools" }, { slug: "knowledge", title: "Knowledge & context" }] },
  { title: "Ship with confidence", items: [{ slug: "deploy", title: "Production checklist" }] },
];

const AGENT_GROUPS: DocGroup[] = [
  { title: "Agent docs", items: [{ slug: "agent-overview", title: "Overview" }, { slug: "agent-quickstart", title: "Agent quickstart" }] },
  { title: "Build reliable behavior", items: [{ slug: "tool-contracts", title: "Tool contracts" }, { slug: "memory-context", title: "Memory & context" }, { slug: "mcp-bridge", title: "MCP bridge" }] },
  { title: "Ship with confidence", items: [{ slug: "production-checklist", title: "Production checklist" }] },
];

const ARTICLES: Record<DocsMode, DocArticle[]> = {
  builders: BUILDER_ARTICLES,
  agents: AGENT_ARTICLES,
};

const GROUPS: Record<DocsMode, DocGroup[]> = {
  builders: BUILDER_GROUPS,
  agents: AGENT_GROUPS,
};

function getArticle(mode: DocsMode, slug: string) {
  return ARTICLES[mode].find((article) => article.slug === slug) ?? ARTICLES[mode][0];
}

function getFirstSlug(mode: DocsMode) {
  return ARTICLES[mode][0].slug;
}

function getPreviousSlug(mode: DocsMode, slug: string) {
  const currentIndex = ARTICLES[mode].findIndex((article) => article.slug === slug);
  return ARTICLES[mode][currentIndex > 0 ? currentIndex - 1 : ARTICLES[mode].length - 1].slug;
}

function Logo() {
  return <BrandLogo inverse className={styles.logo} />;
}

function CodeBlock({ block }: { block: Extract<DocBlock, { type: "code" }> }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(block.code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = block.code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span>{block.language}</span>
        <button type="button" onClick={() => void copyCode()} aria-label={`Copy ${block.language} example`}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre><code>{block.code}</code></pre>
    </div>
  );
}

function ArticleBody({ article }: { article: DocArticle }) {
  return (
    <div id="article-guidance">
      {article.blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p className={styles.bodyCopy} key={`${article.slug}-paragraph-${index}`}>{block.text}</p>;
        }

        if (block.type === "list") {
          return <ul className={styles.checkList} key={`${article.slug}-list-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        }

        if (block.type === "code") {
          return <CodeBlock block={block} key={`${article.slug}-code-${index}`} />;
        }

        return (
          <aside className={styles.callout} key={`${article.slug}-callout-${index}`}>
            <ShieldCheck size={18} aria-hidden="true" />
            <div><strong>{block.title}</strong><p>{block.text}</p></div>
          </aside>
        );
      })}
    </div>
  );
}

function DocsNav({
  groups,
  activeSlug,
  onSelect,
  onClose,
}: {
  groups: DocGroup[];
  activeSlug: string;
  onSelect: (slug: string) => void;
  onClose?: () => void;
}) {
  return (
    <nav className={styles.sideNav} aria-label="Documentation sections">
      {groups.map((group) => (
        <div className={styles.navGroup} key={group.title}>
          <p className={styles.navGroupTitle}>{group.title}</p>
          {group.items.map((item) => (
            <button className={styles.navItem} data-active={activeSlug === item.slug} key={item.slug} onClick={() => { onSelect(item.slug); onClose?.(); }} type="button">
              <span>{item.title}</span><ChevronRight size={14} aria-hidden="true" />
            </button>
          ))}
        </div>
      ))}
      <div className={styles.helpCard}>
        <CircleHelp size={16} aria-hidden="true" />
        <div>
          <strong>Need a hand?</strong>
          <a href="https://github.com/drewsephski/menace-voice/issues" target="_blank" rel="noreferrer">Ask in the forum <ExternalLink size={12} aria-hidden="true" /></a>
        </div>
      </div>
    </nav>
  );
}

export function DocsPage() {
  const [mode, setMode] = useState<DocsMode>("builders");
  const [activeSlug, setActiveSlug] = useState("overview");
  const [search, setSearch] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const articles = ARTICLES[mode];
  const groups = GROUPS[mode];
  const article = getArticle(mode, activeSlug);

  const searchResults = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];
    return articles.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(query)).slice(0, 5);
  }, [articles, search]);

  useEffect(() => {
    const hashSlug = window.location.hash.replace("#", "");
    if (hashSlug && ARTICLES.builders.some((item) => item.slug === hashSlug)) setActiveSlug(hashSlug);

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function selectMode(nextMode: DocsMode) {
    setMode(nextMode);
    setActiveSlug(getFirstSlug(nextMode));
    setSearch("");
    setMobileNavOpen(false);
  }

  function selectArticle(slug: string) {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `/docs#${slug}`);
  }

  return (
    <div className={styles.root}>
      <header className={styles.topBar}>
        <Link href="/" aria-label="Menace Voice home"><Logo /></Link>
        <nav className={styles.productNav} aria-label="Product navigation">
          <Link href="/#platform">Platform</Link><Link href="/#use-cases">Use cases</Link><Link href="/#product-walkthrough">Product</Link><Link href="/#integrations">Integrations</Link><Link className={styles.currentNav} href="/docs" aria-current="page">Docs</Link>
        </nav>
        <div className={styles.topActions}><a href="/auth/login">Sign in</a><a className={styles.startButton} href="/auth/signup">Start building</a></div>
        <button className={styles.mobileMenuButton} type="button" aria-label={mobileNavOpen ? "Close docs navigation" : "Open docs navigation"} onClick={() => setMobileNavOpen((open) => !open)}>{mobileNavOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>

      <main>
        <section className={styles.docsHero}>
          <div className={styles.heroTopLine}>
            <div><p className={styles.eyebrow}>DOCUMENTATION / 2026</p><h1>Menace Voice Docs</h1></div>
            <label className={styles.searchBox}><Search size={17} aria-hidden="true" /><input ref={searchRef} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search docs..." aria-label="Search docs" /><kbd>⌘ K</kbd></label>
          </div>
          {searchResults.length > 0 ? <div className={styles.searchResults} role="listbox" aria-label="Search results">{searchResults.map((result) => <button key={result.slug} type="button" onClick={() => { selectArticle(result.slug); setSearch(""); }}><span>{result.title}</span><ChevronRight size={14} /></button>)}</div> : null}
          <LayoutGroup id="docs-mode">
            <div className={styles.modeTabs} role="tablist" aria-label="Documentation audience">
              <button className={styles.modeTab} data-active={mode === "builders"} id="builders-tab" onClick={() => selectMode("builders")} role="tab" aria-selected={mode === "builders"} type="button"><BookOpen size={15} />Build with Menace{mode === "builders" ? <motion.span className={styles.tabIndicator} layoutId="mode-indicator" /> : null}</button>
              <button className={styles.modeTab} data-active={mode === "agents"} id="agents-tab" onClick={() => selectMode("agents")} role="tab" aria-selected={mode === "agents"} type="button"><Terminal size={15} />Agent docs{mode === "agents" ? <motion.span className={styles.tabIndicator} layoutId="mode-indicator" /> : null}</button>
            </div>
          </LayoutGroup>
        </section>

        <div className={styles.docsLayout}>
          <aside className={styles.desktopSidebar}><DocsNav groups={groups} activeSlug={article.slug} onSelect={selectArticle} /></aside>
          <AnimatePresence>{mobileNavOpen ? <motion.aside className={styles.mobileSidebar} initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -24, opacity: 0 }} transition={{ duration: 0.2 }}><DocsNav groups={groups} activeSlug={article.slug} onSelect={selectArticle} onClose={() => setMobileNavOpen(false)} /></motion.aside> : null}</AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.article className={styles.article} id="article-start" key={`${mode}-${article.slug}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: "easeOut" }}>
              <div className={styles.breadcrumb}><span>{article.section}</span><ChevronRight size={14} /><strong>{article.title}</strong></div>
              <div className={styles.articleHeading}><div><p className={styles.articleLabel}>{mode === "agents" ? "FOR IMPLEMENTATION AGENTS" : "FOR BUILDERS"}</p><h2>{article.title}</h2><p className={styles.articleDescription}>{article.description}</p></div><span className={styles.readTime}>{article.readTime}</span></div>
              <div className={styles.articleRule} />
              <ArticleBody article={article} />
              <div className={styles.articleFooter} id="article-next"><button type="button" onClick={() => selectArticle(getPreviousSlug(mode, article.slug))}><ArrowLeft size={15} /> Previous</button><button type="button" onClick={() => selectArticle(article.next)}>Next up <ArrowRight size={15} /></button></div>
            </motion.article>
          </AnimatePresence>

          <aside className={styles.rightRail}>
            <div className={styles.onPage}><p className={styles.railLabel}>ON THIS PAGE</p><a className={styles.onPageActive} href="#article-start">{article.title}</a><a href="#article-guidance">The practical path</a><a href="#article-next">What&apos;s next</a></div>
            <div className={styles.nextCard}><p className={styles.railLabel}>NEXT STEP</p><strong>{getArticle(mode, article.next).title}</strong><p>{getArticle(mode, article.next).description}</p><button type="button" onClick={() => selectArticle(article.next)}>Continue <ArrowRight size={15} /></button></div>
            <div className={styles.feedbackCard}><p>Was this page useful?</p><div><button type="button" aria-label="Yes, this page was useful"><Check size={14} /></button><button type="button" aria-label="Copy page link"><Clipboard size={14} /></button></div></div>
          </aside>
        </div>
      </main>

      <footer className={styles.footer}><span>© 2026 Menace Voice. Built by Menace.</span><span className={styles.footerLinks}><a href="https://github.com/drewsephski/menace-voice" target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a><Link href="/">Back to menacevoice.com <ArrowRight size={12} /></Link></span></footer>
    </div>
  );
}
