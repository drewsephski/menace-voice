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
      "Understand how Menace Voice fits together, choose the right starting path, and move from a browser test to a monitored production agent.",
    readTime: "8 min read",
    next: "first-agent",
    blocks: [
      {
        type: "paragraph",
        text: "Menace Voice is a platform for building and running conversational voice agents. You shape the conversation as a workflow, test it from your browser, connect it to live data, and then make it available over a phone number or a website. Each completed conversation produces a run record with the transcript, recording, context, usage, and cost information you need to review what happened.",
      },
      {
        type: "callout",
        title: "The recommended path",
        text: "Start with a Web Call. It exercises the speech, model, voice, workflow, and tool pipeline without requiring a phone number. Connect telephony only after the core conversation and its failure paths are working.",
      },
      { type: "heading", id: "choose-environment", text: "Choose your environment" },
      {
        type: "paragraph",
        text: "Use the hosted Menace Voice app when you want to start immediately. A self-hosted deployment gives you control over the application, database, Redis, and object storage, but you are also responsible for Docker resources, provider credentials, networking, upgrades, and backups. The workflow builder behaves the same way in both environments.",
      },
      {
        type: "list",
        items: [
          "Hosted: sign in, open the guided agent setup, and configure a managed or bring-your-own model stack.",
          "Self-hosted: deploy the Menace Voice services first, sign in to the local dashboard, then configure model providers before testing an agent.",
          "Keep API keys, service keys, telephony secrets, and provider credentials in the platform's credential and configuration screens, never in prompts.",
        ],
      },
      { type: "heading", id: "core-pieces", text: "Know the five core pieces" },
      {
        type: "list",
        items: [
          "Agent or workflow: the versioned graph that defines the conversation. The dashboard says agent; the API and SDK often say workflow.",
          "Nodes and edges: nodes own prompts or actions, while directed edges describe the conditions that move the conversation forward.",
          "Model configuration: either realtime speech-to-speech, Menace Voice-managed inference, or separate BYOK LLM, voice, and transcriber services.",
          "Tools and knowledge: tools read or change live systems; knowledge base documents provide reference material; initial context carries data for one run.",
          "Run: the durable record of one web, inbound, outbound, or campaign execution, including artifacts and gathered context.",
        ],
      },
      { type: "heading", id: "recommended-sequence", text: "Build in this order" },
      {
        type: "list",
        items: [
          "Define one job, the caller, a successful outcome, and the things the agent must not claim or do.",
          "Complete the guided setup: Purpose, Knowledge, Behavior, Voice, Connections, and Launch.",
          "Run several Web Calls against the draft, including a normal request, missing information, an out-of-scope request, and a tool failure.",
          "Pass caller-specific data through initial context; attach only the documents and tools needed by each conversational node.",
          "Add a result path such as a webhook, gathered-context fields, dispositions, or QA analysis so downstream systems can use the outcome.",
          "Publish the reviewed draft, connect website or telephony traffic, then inspect real runs and iterate from evidence.",
        ],
      },
      { type: "heading", id: "ready-to-launch", text: "Define ready before launch" },
      {
        type: "paragraph",
        text: "A saved workflow is not proof that a caller will have a good conversation. Before launch, write down the expected opening, required questions, acceptable tool outcomes, escalation condition, closing message, and final data you expect to see. Review a real run against that list and keep the published agent unchanged until the draft passes.",
      },
      {
        type: "link",
        before: "Start with the guided walkthrough in ",
        label: "Build your first voice agent",
        slug: "first-agent",
        after: ", then use the production guide when you are ready to connect traffic.",
      },
    ],
  },
  {
    slug: "first-agent",
    section: "Start here",
    title: "Build your first voice agent",
    description:
      "Complete the guided six-step setup, generate a focused workflow, and test the first draft from your browser before adding telephony.",
    readTime: "10 min read",
    next: "tools",
    blocks: [
      {
        type: "paragraph",
        text: "The fastest way to a useful first agent is to give Menace Voice a narrow brief and let the guided setup build the initial workflow around it. You do not need a phone number for this tutorial. You need a signed-in workspace, permission to use your microphone, and a working model configuration by the time you reach the Voice step.",
      },
      { type: "heading", id: "write-brief", text: "1. Start with a testable brief" },
      {
        type: "code",
        language: "Agent brief",
        code: `Job: help new and returning customers request a haircut appointment\nSuccess: collect service, preferred day, preferred time, name, and callback number\nBoundaries: never claim a slot is booked until the scheduling tool confirms it\nEscalate: transfer or capture a callback request when the caller needs staff help`,
      },
      {
        type: "paragraph",
        text: "A useful brief describes observable behavior. Avoid broad directions such as “be a helpful receptionist.” State what the agent should collect, what system result counts as success, and what it should do when it cannot complete the job.",
      },
      { type: "heading", id: "guided-setup", text: "2. Complete the six setup steps" },
      {
        type: "list",
        items: [
          "Purpose: choose a starting template or Custom, name the agent, select inbound or outbound, and describe the job in detail.",
          "Knowledge: select existing documents or upload the policies and reference material this agent should use.",
          "Behavior: choose the tone and language, then add requirements, boundaries, escalation rules, and any wording the agent must preserve.",
          "Voice: confirm the organization model configuration and select the voice used by the generated agent. Self-hosted workspaces must supply valid managed or BYOK configuration.",
          "Connections: add only the built-in, HTTP, or remote MCP tools needed for this job. Templates can recommend appropriate options, but you control what is attached.",
          "Launch: optionally configure a pre-call caller lookup and a post-call webhook, review the summary, and create the first workflow.",
        ],
      },
      {
        type: "callout",
        title: "What generation gives you",
        text: "Menace Voice creates a workflow with an opening, ordered conversation stages, explicit transition conditions, and a closing path based on your brief. Connected documents and tools are attached to the generated conversational nodes. Treat this as a first draft to review, not a finished production script.",
      },
      { type: "heading", id: "first-web-call", text: "3. Run the first Web Call" },
      {
        type: "paragraph",
        text: "Open the generated agent and start a Web Call. Allow microphone access, speak as the intended caller, and watch the live transcript, node transitions, and tool activity. Web Calls run the speech-to-text, model, text-to-speech, workflow, recording, and transcript path without using a telephony provider.",
      },
      {
        type: "list",
        items: [
          "Happy path: provide the expected information and confirm the agent reaches the intended outcome.",
          "Missing information: omit one required detail and confirm the agent asks for it instead of guessing.",
          "Boundary: ask for something the agent is not allowed to promise and confirm it explains the limit or escalates.",
          "Interruption: speak while the agent is talking and check that the turn still feels natural for your interruption settings.",
          "Tool failure: when a tool is attached, exercise an empty result or failure and confirm the agent does not invent success.",
        ],
      },
      { type: "heading", id: "iterate", text: "4. Make one change at a time" },
      {
        type: "paragraph",
        text: "Edit the node that owned the incorrect behavior. Put shared persona, language, and non-negotiable rules in the Global node; keep stage-specific questions and tool instructions in the Agent node where they apply. Save the draft, start a new Web Call, and compare the new run with the previous transcript.",
      },
      {
        type: "callout",
        title: "Keep the first version small",
        text: "One clear job makes the transcript easy to evaluate. Add a new branch only when a real test shows that the current node cannot express the behavior cleanly.",
      },
      {
        type: "link",
        before: "When the conversation needs live data or an action, continue to ",
        label: "Give your agent tools",
        slug: "tools",
        after: ". For policies and caller-specific data, use Knowledge & context next.",
      },
    ],
  },
  {
    slug: "tools",
    section: "Build the behavior",
    title: "Give your agent tools",
    description:
      "Add built-in, HTTP API, or remote MCP tools and make their invocation, inputs, and failure behavior clear to the model.",
    readTime: "11 min read",
    next: "knowledge",
    blocks: [
      {
        type: "paragraph",
        text: "A tool lets an agent do more than talk. It can end or transfer a call, get the current time, call a REST endpoint, or invoke a function exposed by a remote MCP server. Menace Voice presents attached tools to the model; the model decides when to call one and which arguments to provide from the conversation.",
      },
      { type: "heading", id: "choose-tool", text: "Choose the right tool type" },
      {
        type: "list",
        items: [
          "Built-in tools cover Menace Voice behavior such as ending a call, transferring supported telephony calls, calculating a value, or looking up the current time.",
          "HTTP API tools call a REST endpoint you control or a third-party service. Use them for focused lookups and actions such as finding an order or creating a lead.",
          "MCP Server tools discover functions from a remote Streamable HTTP MCP endpoint. Use a tool filter and node-level selection to expose only the remote functions the conversation needs.",
        ],
      },
      {
        type: "callout",
        title: "Two different MCP directions",
        text: "An MCP Server tool lets a live voice agent call an external MCP server. The Menace Voice MCP endpoint in Agent docs does the reverse: it lets Codex, Claude, or another coding assistant inspect and edit your Menace Voice workspace.",
      },
      { type: "heading", id: "define-contract", text: "Define one observable contract" },
      {
        type: "code",
        language: "Tool description",
        code: `Name: lookup_order\nUse when: the caller asks for the current status of a specific order\nRequired input: order_number (string)\nSuccess result: order status and estimated delivery date\nEmpty result: say the order could not be found and verify the number once\nFailure: say the lookup is temporarily unavailable; never invent a status`,
      },
      {
        type: "paragraph",
        text: "The name and description help the model decide whether to call the tool. Parameter descriptions tell it what value to extract. Keep each tool focused on one business action, mark only truly necessary fields as required, and return a small structured response the agent can explain naturally.",
      },
      { type: "heading", id: "configure-http", text: "Configure an HTTP API tool" },
      {
        type: "list",
        items: [
          "Create a tool and choose HTTP API. Use an action-oriented name and a plain description of exactly when it should run.",
          "Enter the full endpoint URL, including http:// or https://, and choose the method your endpoint accepts.",
          "Select a saved credential and add non-secret custom headers when the endpoint requires authentication or routing metadata.",
          "Define each parameter with a name, type, description, and required flag. Align these with what the endpoint validates.",
          "Save the tool, open the conversational node that needs it, and attach the tool there. Creating it does not make it available automatically.",
        ],
      },
      { type: "heading", id: "configure-mcp", text: "Configure a remote MCP tool" },
      {
        type: "paragraph",
        text: "For a remote MCP server, provide the Streamable HTTP URL and the credential required by that server. Bearer Token is the common choice when its documentation specifies Authorization: Bearer. Menace Voice discovers the server's tool catalog when you save or refresh it, then opens a live authenticated MCP session when a call starts.",
      },
      {
        type: "list",
        items: [
          "Confirm discovery succeeds before attaching the server to an agent.",
          "Apply a server-level filter when the server exposes functions unrelated to this use case.",
          "At the node, select only the remote functions that should be callable during that stage.",
          "Do not place the remote access token in a prompt; the model sees the function schema, not the stored secret.",
        ],
      },
      { type: "heading", id: "prompt-and-test", text: "Tell the node when to call it" },
      {
        type: "code",
        language: "Node instruction",
        code: `When the caller asks about an order's current status:\n1. Ask for the order number if it is missing.\n2. Read the number back once for confirmation.\n3. Call lookup_order before stating a status or delivery date.\n4. If the result is empty or fails, follow the tool's failure instruction.`,
      },
      {
        type: "list",
        items: [
          "Test a sentence that should call the tool and one that should not.",
          "Check the run log for the selected tool, exact arguments, duration, and returned result.",
          "Exercise invalid input, empty data, authentication failure, and timeout behavior.",
          "For state-changing actions, confirm the caller's intent before the call and make duplicate requests safe in your backend.",
        ],
      },
      {
        type: "link",
        before: "Use ",
        label: "Knowledge & context",
        slug: "knowledge",
        after: " for stable documents and per-call facts; use a tool when the answer must come from a live system or an action must occur.",
      },
    ],
  },
  {
    slug: "knowledge",
    section: "Build the behavior",
    title: "Add context and knowledge",
    description:
      "Combine knowledge base documents, initial context, pre-call lookup data, and gathered results without mixing their responsibilities.",
    readTime: "12 min read",
    next: "deploy",
    blocks: [
      {
        type: "paragraph",
        text: "Menace Voice has several ways to give an agent information. Choose based on ownership and freshness: documents for stable reference material, initial context for facts known about this run, a pre-call fetch or tool for live system data, and gathered context for structured values learned during the conversation.",
      },
      { type: "heading", id: "choose-source", text: "Choose the source of truth" },
      {
        type: "list",
        items: [
          "Knowledge base: policies, menus, product reference, FAQs, and other documents the agent should quote or summarize.",
          "Initial context: caller name, account ID, requested appointment, campaign fields, and other values available before the conversation begins.",
          "Pre-call data fetch: an HTTP lookup that runs before the greeting and merges returned JSON into initial context.",
          "Tool result: current availability, order state, balance, or any value that should be fetched at the moment it is needed.",
          "Gathered context: typed fields extracted from the transcript, such as resolution, callback requested, or appointment preference.",
        ],
      },
      { type: "heading", id: "knowledge-files", text: "Prepare knowledge base files" },
      {
        type: "paragraph",
        text: "Upload a PDF, Word document, text file, or JSON file up to 5 MB, then choose a retrieval mode. Full Document provides the complete extracted text and does not need an embedding model. Chunked Search splits and indexes larger material, so it requires an embedding configuration before processing and retrieval can succeed.",
      },
      {
        type: "list",
        items: [
          "Use Full Document for a short menu, policy sheet, price list, or focused FAQ.",
          "Use Chunked Search for a longer manual, policy collection, or contract where only a few sections are relevant to each question.",
          "Give documents clear headings, short sections, and one primary topic; re-upload them when the source changes.",
          "Wait for processing to complete, then attach the document to each Start Call or Agent node that should access it.",
          "Attach selectively. A document uploaded to the workspace is not available to a node until you attach it.",
        ],
      },
      { type: "heading", id: "initial-context", text: "Pass per-run context" },
      {
        type: "code",
        language: "API trigger body",
        code: `{
  "phone_number": "+14155550100",
  "initial_context": {
    "customer_name": "Jane",
    "account": {
      "plan": "premium"
    }
  }
}`,
      },
      {
        type: "paragraph",
        text: "In an Agent prompt, reference initial-context fields directly, for example {{customer_name}} or {{account.plan}}. Use a pipe for a fallback such as {{customer_name | there}}. In a Webhook payload, include the object prefix: {{initial_context.customer_name}}.",
      },
      {
        type: "callout",
        title: "Test context is not production context",
        text: "Context variables saved in Agent Settings are used for Web Call and editor test calls. Production inbound calls and campaign calls use the actual telephony or contact data instead. Browser tests are inbound by default; set the test direction variable to outbound when that distinction affects the prompt.",
      },
      { type: "heading", id: "gathered-context", text: "Extract structured outcomes" },
      {
        type: "paragraph",
        text: "Enable extraction on an Agent or End Call node and define each result with a stable name, a string, number, or boolean type, and a precise instruction describing the evidence required. Menace Voice merges extracted values into gathered_context as the call progresses. If the transcript does not support a value, the agent should leave it empty rather than infer it.",
      },
      {
        type: "code",
        language: "Webhook payload",
        code: `{
  "customer": "{{initial_context.customer_name}}",
  "resolution": "{{gathered_context.resolution}}",
  "callback_requested": "{{gathered_context.callback_requested}}",
  "recording_url": "{{recording_url}}",
  "transcript_url": "{{transcript_url}}"
}`,
      },
      {
        type: "callout",
        title: "Keep the data flow one-way",
        text: "Agent prompts can read initial context, but they cannot read gathered_context. Send gathered values to a webhook or read them from the completed run. If the live conversation needs a current value, fetch it with a tool instead of relying on post-call extraction.",
      },
      {
        type: "link",
        before: "When your agent and data flow are stable, use ",
        label: "Move from demo to production",
        slug: "deploy",
        after: " to choose the right traffic path and verification checklist.",
      },
    ],
  },
  {
    slug: "deploy",
    section: "Ship with confidence",
    title: "Move from demo to production",
    description:
      "Publish a tested draft, connect website or telephony traffic, and operate the agent from run evidence instead of assumptions.",
    readTime: "13 min read",
    next: "overview",
    blocks: [
      {
        type: "paragraph",
        text: "Production starts when real people, phone numbers, and systems touch the workflow. Before that point, separate three checks: the draft is structurally valid, a Web Call behaves correctly, and the chosen delivery path is configured. Passing one does not prove the others.",
      },
      { type: "heading", id: "publish", text: "1. Freeze and publish the reviewed draft" },
      {
        type: "paragraph",
        text: "Menace Voice keeps draft and published workflow versions separate. Editor tests and test trigger URLs can exercise the latest draft, while production trigger URLs continue to use the published version. Review the exact draft you tested, publish it deliberately, and make further changes in a new draft.",
      },
      { type: "heading", id: "traffic-path", text: "2. Choose one traffic path first" },
      {
        type: "list",
        items: [
          "Website: embed the generated widget for browser voice or chat. This avoids telephony but still creates runs for review.",
          "Inbound phone: create a telephony configuration, add an active phone number, assign its inbound agent, and complete the provider's webhook setup.",
          "One-off outbound: set a ready telephony configuration as the organization default, configure an active caller ID, and start from the dashboard, SDK, Agent UUID, or API Trigger URL.",
          "Campaign: upload a CSV with phone_number plus optional initial-context columns, then set conservative concurrency, calling windows, retry behavior, and a circuit breaker.",
        ],
      },
      {
        type: "callout",
        title: "Use E.164 phone numbers",
        text: "Store destinations and PSTN caller IDs with a leading plus sign and country code, for example +14155550100. Provider trial accounts may also require the destination number to be verified before an outbound test can connect.",
      },
      { type: "heading", id: "outbound-api", text: "3. Trigger outbound calls safely" },
      {
        type: "code",
        language: "API Trigger request",
        code: `curl -X POST "https://YOUR_API_HOST/api/v1/public/agent/test/TRIGGER_UUID" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: $MENACE_VOICE_API_KEY" \\
  -d '{
    "phone_number": "+14155550100",
    "initial_context": { "customer_name": "Jane" }
  }'`,
      },
      {
        type: "paragraph",
        text: "Use the test route while iterating and the production route only after publishing. The UUID in /public/agent/{uuid} belongs to an API Trigger node. A stable Agent UUID uses the separate /public/agent/workflow/{workflow_uuid} route. Do not swap those identifiers. A successful initiation returns a workflow run ID; it does not prove the person answered or the conversation completed.",
      },
      { type: "heading", id: "results", text: "4. Close the data loop" },
      {
        type: "list",
        items: [
          "Add precise extraction fields for the business outcome you need, and configure call dispositions when downstream reporting depends on a controlled set of results.",
          "Use a Webhook node to POST selected initial context, gathered context, disposition, recording URL, and transcript URL to your backend.",
          "Authenticate the receiving endpoint through a saved Menace Voice credential and validate the request body in your backend.",
          "Add a QA node for post-call analysis when you need consistent scoring or tags. QA runs after the call and cannot change the live conversation.",
        ],
      },
      { type: "heading", id: "observe", text: "5. Review the first real runs" },
      {
        type: "list",
        items: [
          "Connection: did the call or widget session start, and did audio work in both directions?",
          "Conversation: did the transcript show the expected questions, edge transitions, and closing path?",
          "Actions: were the correct tools called with supported arguments, and were failures explained accurately?",
          "Outcome: were gathered context and disposition supported by the transcript and delivered to the receiving system?",
          "Operations: were latency, duration, provider usage, cost, trace data, and errors within the limits you set?",
        ],
      },
      {
        type: "callout",
        title: "Ship a feedback loop",
        text: "Review a small first batch before increasing traffic or campaign concurrency. Turn each recurring miss into the smallest prompt, edge, tool, context, or provider change, then prove that change on a new draft before publishing again.",
      },
      {
        type: "link",
        before: "If a coding assistant will maintain the workflow, continue in ",
        label: "Build agents that can be trusted",
        slug: "agent-overview",
        mode: "agents",
        after: " for the supported Menace Voice MCP authoring flow.",
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
      "Connect an implementation assistant to Menace Voice and use the platform's read, schema, docs, tool, and workflow operations in a controlled authoring loop.",
    readTime: "9 min read",
    next: "agent-quickstart",
    blocks: [
      {
        type: "paragraph",
        text: "Menace Voice exposes a Streamable HTTP MCP server for Codex, Claude, Cursor, and other compatible clients. It lets an implementation assistant browse the Menace Voice docs, inspect workspace resources, discover current node schemas, create reusable tools, and author workflows as validated SDK TypeScript.",
      },
      {
        type: "callout",
        title: "Agent operating principle",
        text: "Plan with the builder, read the current workspace, discover the current schema, save the smallest complete change, review the resulting draft, and then verify behavior in Menace Voice. A successful save proves the definition passed validation; it does not prove a live conversation.",
      },
      { type: "heading", id: "mcp-access", text: "What the MCP connection can access" },
      {
        type: "list",
        items: [
          "Documentation: list the docs tree, search by concept, and read a complete page or section before answering product-mechanics questions.",
          "Workspace catalog: list agents, reusable tools, credentials, knowledge documents, and recordings available to the API key's organization.",
          "Authoring schema: list node types, read a node type's fields, defaults, limits, examples, and graph constraints, and retrieve voice-prompting guidance.",
          "Workflow source: project the latest working version to editable @dograh/sdk TypeScript, then parse and validate the complete source on save.",
          "Mutations: create a reusable tool, create a new workflow, or save an existing workflow as a new draft.",
        ],
      },
      { type: "heading", id: "version-behavior", text: "Understand version behavior" },
      {
        type: "paragraph",
        text: "Creating a new workflow through MCP stores it as published version 1 because there is no earlier production definition to protect. Editing an existing workflow is different: save_workflow writes a new draft and leaves the currently published version serving traffic. The human operator reviews and publishes that draft from the Menace Voice UI.",
      },
      {
        type: "callout",
        title: "Names and prompts have different version semantics",
        text: "A definition change is saved to the draft. A workflow rename is a workflow-level field and can take effect immediately when the name in the edited TypeScript changes. Ask explicitly before renaming an existing agent.",
      },
      { type: "heading", id: "safe-authoring", text: "Use a bounded authoring loop" },
      {
        type: "list",
        items: [
          "Identify the exact agent by listing workflows; never guess an ID from a name fragment.",
          "Fetch get_workflow_code before any edit so the assistant sees the same latest draft or published working copy as the UI.",
          "Read node specs and prompt guidance for any node being added or materially changed.",
          "Preserve existing nodes, edges, variable names, document UUIDs, and tool UUIDs unless the requested behavior requires a change.",
          "Submit the complete TypeScript source to save_workflow, resolve structured parse or validation errors, and confirm saved is exactly true.",
          "Open the draft in Menace Voice, run the relevant browser or phone scenario, and publish only after the observable behavior passes.",
        ],
      },
      {
        type: "link",
        before: "Follow ",
        label: "Agent quickstart",
        slug: "agent-quickstart",
        mode: "agents",
        after: " to configure a client and complete the first read-only session.",
      },
    ],
  },
  {
    slug: "agent-quickstart",
    section: "Agent docs",
    title: "Agent quickstart",
    description:
      "Create an API key, register the hosted or self-hosted MCP endpoint, inspect an agent, and save a reviewable draft with an evidence-based prompt.",
    readTime: "11 min read",
    next: "tool-contracts",
    blocks: [
      {
        type: "paragraph",
        text: "Start by connecting your MCP client to the same Menace Voice workspace a human operator uses. The API key determines the organization and resources the assistant can see, so create a dedicated key, store it outside source control, and revoke it when the integration is no longer needed.",
      },
      { type: "heading", id: "prerequisites", text: "1. Collect the prerequisites" },
      {
        type: "list",
        items: [
          "Create a Menace Voice API key from the API Keys page and copy it immediately; the full value is shown only once.",
          "Hosted endpoint: https://voice.menaceui.com/api/v1/mcp/.",
          "Self-hosted endpoint: your backend base URL followed by /api/v1/mcp/.",
          "Use a client that supports Streamable HTTP and can send the X-API-Key header.",
        ],
      },
      { type: "heading", id: "codex-config", text: "2. Configure Codex without committing the key" },
      {
        type: "code",
        language: "~/.codex/config.toml",
        code: `[mcp_servers.dograh]\nurl = "https://voice.menaceui.com/api/v1/mcp/"\nenv_http_headers = { "X-API-Key" = "DOGRAH_API_KEY" }`,
      },
      {
        type: "code",
        language: "Shell",
        code: `export DOGRAH_API_KEY="YOUR_API_KEY"\ncodex mcp list\ncodex mcp get dograh`,
      },
      {
        type: "paragraph",
        text: "The server name dograh is only the local client identifier and matches the current SDK package. The product and workspace remain Menace Voice. For other MCP clients, use the same endpoint and X-API-Key header in that client's Streamable HTTP configuration.",
      },
      { type: "heading", id: "first-session", text: "3. Make the first session read-only" },
      {
        type: "code",
        language: "Prompt",
        code: `Connect to Menace Voice. List the active agents, then find the agent named “Support Desk”.\nRead its current TypeScript projection and report whether you are looking at a draft or published version.\nDo not save or create anything. Summarize its nodes, branches, attached tools, and documents.`,
      },
      {
        type: "paragraph",
        text: "This proves authentication, organization scope, workflow lookup, and source projection without changing the workspace. Check that the reported agent, node names, and version match the Menace Voice UI before authorizing an edit.",
      },
      { type: "heading", id: "edit-session", text: "4. Give the edit a precise contract" },
      {
        type: "code",
        language: "Task contract",
        code: `Objective: add order-status lookup to the existing Support Desk agent\nPreserve: all unrelated nodes, edges, prompts, tools, documents, and variable names\nRead first: current workflow code, HTTP tool schema, agentNode schema, prompting guide\nChange: create one lookup_order tool and attach it only to the Order Support node\nDraft proof: save_workflow returns saved: true and identify the new draft version\nRuntime proof: stop before publishing; give me the exact Web Call scenarios to run`,
      },
      {
        type: "paragraph",
        text: "The MCP instructions require a plan stage before new workflow authoring, current prompt guidance before writing prompts, and a review stage after a successful save. Keep the user involved in decisions about persona, stages, tools, exit conditions, and irreversible business actions.",
      },
      { type: "heading", id: "review-output", text: "5. Review the result in Menace Voice" },
      {
        type: "list",
        items: [
          "Confirm the named draft version exists and the published version has not changed.",
          "Inspect the graph for preserved nodes and edges, and verify the new tool is attached only where intended.",
          "Run a Web Call for the success, missing-input, empty-result, and tool-failure paths.",
          "Review the transcript and tool log, then publish from the UI only if the draft meets the defined outcome.",
        ],
      },
      {
        type: "link",
        before: "Before asking an implementation assistant to create integrations, read ",
        label: "Design tool contracts",
        slug: "tool-contracts",
        mode: "agents",
        after: " for the supported creation and attachment flow.",
      },
    ],
  },
  {
    slug: "tool-contracts",
    section: "Agent docs",
    title: "Design tool contracts",
    description:
      "Create reusable Menace Voice tools through MCP, attach them by UUID, and preserve a strict boundary between model decisions and system authorization.",
    readTime: "10 min read",
    next: "memory-context",
    blocks: [
      {
        type: "paragraph",
        text: "The Menace Voice MCP server can create reusable HTTP API, end-call, transfer-call, calculator, current-time, and remote MCP-server tools. It does not expose credential secrets. If a new tool needs authentication, a human first creates the credential in the UI; the implementation assistant selects its UUID from list_credentials.",
      },
      { type: "heading", id: "contract", text: "Specify the behavior before the schema" },
      {
        type: "code",
        language: "Tool contract",
        code: `Business action: read the current status of one customer-owned order\nInvoke when: the caller asks about a specific order and confirms the order number\nDo not invoke when: the caller asks only about general shipping policy\nInput: order_number, string, required, read back once before lookup\nSuccess: return status and estimated_delivery\nNot found: verify once, then offer the approved human follow-up\nFailure: explain temporary unavailability; do not guess or claim a later retry`,
      },
      {
        type: "paragraph",
        text: "This contract tells the implementation assistant what schema to create, what node instruction to write, and which runtime scenarios matter. The endpoint must still enforce authentication, ownership, validation, and authorization; a correct model-generated argument is never a substitute for backend checks.",
      },
      { type: "heading", id: "create-flow", text: "Use the supported creation flow" },
      {
        type: "list",
        items: [
          "Call list_credentials when authentication is needed and select an existing credential UUID owned by the same organization.",
          "Call create_tool with the current request schema. Treat created: true and the returned tool_uuid as the only successful creation result.",
          "Fetch the current workflow with get_workflow_code instead of reconstructing it from memory or from a stale prompt.",
          "Add the returned UUID to tool_uuids on the specific Start Call or Agent node that needs it.",
          "Save the complete workflow source with save_workflow and resolve every parse, schema, graph, or tool-name collision error.",
        ],
      },
      { type: "heading", id: "http-boundary", text: "Make HTTP actions safe" },
      {
        type: "list",
        items: [
          "Keep each endpoint single-purpose and validate its request body independently of the model's function schema.",
          "Return a compact JSON result with stable field names and an explicit empty or error state.",
          "Use bounded server and downstream timeouts so a slow integration does not stall the conversation indefinitely.",
          "Make state-changing requests idempotent when retries are possible, and require explicit caller confirmation before irreversible actions.",
          "Do not put keys, tokens, raw SQL, internal stack traces, or privileged headers in tool descriptions, prompts, or results.",
        ],
      },
      { type: "heading", id: "attachment-scope", text: "Scope availability to the conversation stage" },
      {
        type: "paragraph",
        text: "A reusable tool exists at workspace level, but the model can call it only when its UUID is attached to the active conversational node. Attach lookup_order to the order-support stage, not every node. For remote MCP servers, also filter the server catalog and select only the remote functions required at that node.",
      },
      {
        type: "callout",
        title: "Creation is not execution proof",
        text: "A created tool and a valid draft prove storage and structural validation. A reviewed run must still show that the right utterance invoked it, the arguments matched the transcript, the endpoint result was handled accurately, and unrelated requests did not invoke it.",
      },
      {
        type: "link",
        before: "Use ",
        label: "Memory and context",
        slug: "memory-context",
        mode: "agents",
        after: " to decide which values belong in the workflow, one run, a document, or an external system.",
      },
    ],
  },
  {
    slug: "memory-context",
    section: "Agent docs",
    title: "Memory and context",
    description:
      "Model the data available before, during, and after a run so implementation agents preserve variable names and never confuse context with durable storage.",
    readTime: "9 min read",
    next: "mcp-bridge",
    blocks: [
      {
        type: "paragraph",
        text: "Menace Voice context is run-scoped. It personalizes a conversation and captures its result, but it is not a general-purpose customer database or durable memory layer. Keep the authoritative customer record in your system and move only the fields needed for the current conversation across the boundary.",
      },
      { type: "heading", id: "data-model", text: "Use the context model precisely" },
      {
        type: "list",
        items: [
          "initial_context contains values known before the call. It can come from an API trigger, campaign CSV, telephony data, test settings, or a pre-call fetch.",
          "Template variables render initial-context values into prompts. Agent prompts use {{field}}; webhook payloads use {{initial_context.field}}.",
          "gathered_context contains typed values extracted from the transcript by Agent or End Call nodes. It is available in the completed run and webhook templates, not later Agent prompts.",
          "Tool results are live turn data. Use them to answer the current question; persist any durable change in the external system that owns it.",
          "Knowledge documents are workspace resources attached by document UUID. They provide reference text, not caller-specific mutable state.",
        ],
      },
      { type: "heading", id: "preserve-contract", text: "Preserve variable contracts during edits" },
      {
        type: "code",
        language: "Context contract",
        code: `Input\n  initial_context.customer_name: string\n  initial_context.account_id: string\n\nPrompt references\n  {{customer_name}}\n  {{account_id}}\n\nOutput\n  gathered_context.resolution: string\n  gathered_context.callback_requested: boolean`,
      },
      {
        type: "paragraph",
        text: "When an implementation assistant renames a variable, it must update every producer and consumer: API or campaign input, pre-call response, prompt template, extraction definition, webhook payload, and downstream handler. If the request does not require a rename, preserve the existing key exactly.",
      },
      { type: "heading", id: "minimize", text: "Minimize what enters the run" },
      {
        type: "list",
        items: [
          "Pass the account ID and relevant status, not an entire CRM record.",
          "Exclude passwords, access tokens, payment credentials, private notes, and fields the conversation cannot use.",
          "Use a pre-call fetch when caller identity must be resolved from the inbound caller and called numbers before the greeting.",
          "Use a tool when freshness matters at the moment of the question, especially for availability, balances, or mutable order state.",
          "Define how the agent handles missing, stale, or conflicting values instead of silently choosing one.",
        ],
      },
      {
        type: "callout",
        title: "Protect the boundary",
        text: "Credentials belong in Menace Voice credential storage or server-side configuration. They must never be written into workflow prompts, initial context, tool arguments generated by the model, webhook bodies, or implementation-agent handoff notes.",
      },
      {
        type: "link",
        before: "For the two supported MCP directions and their different trust boundaries, continue to ",
        label: "Use the MCP bridge safely",
        slug: "mcp-bridge",
        mode: "agents",
        after: ".",
      },
    ],
  },
  {
    slug: "mcp-bridge",
    section: "Agent docs",
    title: "Use the MCP bridge safely",
    description:
      "Distinguish workspace authoring from live-call MCP tools, scope both connections, and verify discovery, credentials, drafts, and runtime behavior separately.",
    readTime: "10 min read",
    next: "production-checklist",
    blocks: [
      {
        type: "paragraph",
        text: "Menace Voice participates in MCP in two directions. The Menace Voice MCP server lets an implementation assistant work on your workspace. An MCP Server tool attached to a workflow lets the live voice agent call a different remote MCP server during a conversation. They use different endpoints, credentials, permissions, and verification steps.",
      },
      { type: "heading", id: "authoring-mcp", text: "Workspace authoring MCP" },
      {
        type: "list",
        items: [
          "Endpoint: the hosted or self-hosted Menace Voice backend at /api/v1/mcp/.",
          "Authentication: X-API-Key using an organization-scoped Menace Voice API key.",
          "Purpose: browse Menace Voice docs and workspace resources, discover node schemas, create reusable tools, and create or edit workflows.",
          "Mutation boundary: new workflows are created as published version 1; edits to existing workflows are saved as drafts for human review.",
          "Operational rule: use a dedicated key, keep it outside the repository, verify the selected organization, and revoke it when no longer needed.",
        ],
      },
      { type: "heading", id: "runtime-mcp", text: "Live-call MCP Server tools" },
      {
        type: "list",
        items: [
          "Endpoint: a remote Streamable HTTP MCP URL configured as a reusable Menace Voice tool.",
          "Authentication: the credential required by that remote server, commonly a saved Bearer Token credential.",
          "Purpose: expose selected remote functions to the model during a Web Call or phone conversation.",
          "Runtime behavior: Menace Voice discovers and caches the catalog, opens a live session for the attached server, namespaces functions, forwards selected calls, and returns results to the model.",
          "Failure behavior: if the remote server is unavailable, the conversation can continue without those functions; the node prompt still needs an honest fallback.",
        ],
      },
      { type: "heading", id: "least-privilege", text: "Apply least privilege at every layer" },
      {
        type: "list",
        items: [
          "Confirm the remote server owner and exact URL before saving it; use separate development and production credentials.",
          "Filter the discovered catalog at server level, then select the smallest function set at each node.",
          "Give the remote credential only the permissions those functions need and document its owner and rotation path.",
          "Keep the model-facing description about capability and invocation, not about tokens or internal authorization details.",
          "Review function name, arguments, duration, and result in a real run without copying secrets or sensitive payloads into logs.",
        ],
      },
      {
        type: "callout",
        title: "Discovery is not authorization",
        text: "A successfully discovered remote function is only available to the model. The remote server must still authenticate the request, authorize the underlying resource, validate arguments, and make state-changing operations safe against duplicates.",
      },
      { type: "heading", id: "verification", text: "Verify each boundary separately" },
      {
        type: "list",
        items: [
          "Authoring MCP: verify the client can list the intended workspace, read current workflow code, and perform a read-only docs query.",
          "Tool creation: verify create_tool returns created: true and the expected tool UUID and discovered catalog.",
          "Workflow draft: verify save_workflow returns saved: true and that the published version is unchanged.",
          "Live call: verify the intended utterance invokes the allowed remote function with supported arguments and handles unavailability without inventing a result.",
        ],
      },
      {
        type: "link",
        before: "Finish with the ",
        label: "Production checklist",
        slug: "production-checklist",
        mode: "agents",
        after: " before an implementation-agent change is published to real traffic.",
      },
    ],
  },
  {
    slug: "production-checklist",
    section: "Agent docs",
    title: "Production checklist",
    description:
      "A concrete handoff gate for implementation-agent changes before the reviewed draft is published to real callers, data, and systems.",
    readTime: "12 min read",
    next: "agent-overview",
    blocks: [
      {
        type: "paragraph",
        text: "Use this checklist for the exact draft you intend to publish. Record the agent ID, draft version, purpose of the change, and the run IDs used for verification. If the draft changes after testing, repeat the checks affected by that change.",
      },
      { type: "heading", id: "definition", text: "Definition and change scope" },
      {
        type: "list",
        items: [
          "The implementation assistant fetched the current workflow code before editing and preserved unrelated nodes, edges, prompts, variables, tools, and documents.",
          "Every new or changed node uses the current node-type schema and has a clear name, focused prompt, supported fields, and reachable edges.",
          "Edge labels are short and edge conditions are complete, observable statements about the live conversation.",
          "save_workflow returned saved: true for the intended agent ID and produced the draft version being reviewed.",
          "The published workflow remained unchanged while the draft was under test.",
        ],
      },
      { type: "heading", id: "models", text: "Models, voice, and conversation" },
      {
        type: "list",
        items: [
          "The model configuration is valid for the deployment: realtime speech-to-speech plus analysis LLM, Menace Voice-managed inference, or a complete BYOK stack.",
          "The opening identifies the agent appropriately, establishes the purpose, and does not make claims the workflow cannot support.",
          "Required information, confirmation points, success criteria, and closing behavior are explicit in the owning nodes.",
          "Normal speech, silence, interruption, correction, ambiguity, out-of-scope requests, and the configured escalation path were exercised.",
          "The transcript, audio, node transitions, and final response were reviewed together rather than inferred from configuration.",
        ],
      },
      { type: "heading", id: "data-tools", text: "Data, tools, and external systems" },
      {
        type: "list",
        items: [
          "Initial-context producers and prompt references use the same variable names, and missing values have an intentional fallback.",
          "Gathered-context fields have stable names, correct types, evidence-based extraction instructions, and downstream consumers that handle empty values.",
          "Documents are processed, current, and attached only to nodes where they are relevant; Chunked Search has a working embedding configuration.",
          "Tools are attached only to the nodes that need them, credentials are referenced from secure storage, and no secret appears in prompts or context.",
          "Success, not-found, validation, authorization, timeout, and duplicate-action behavior were tested for every changed external tool.",
          "Webhook payloads were received and validated by the intended backend, with the expected context, disposition, and artifact URLs.",
        ],
      },
      { type: "heading", id: "delivery", text: "Delivery path" },
      {
        type: "list",
        items: [
          "Website delivery: the selected widget mode loads, obtains microphone permission when required, starts a run, and behaves at desktop and mobile widths.",
          "Inbound telephony: the active number is assigned to the correct agent and a real inbound test reaches the expected published workflow.",
          "Outbound telephony: the configuration is active and ready, the caller ID is valid, and a real test connects through the selected provider.",
          "API trigger: the correct trigger UUID or Agent UUID route is used, X-API-Key scope is correct, and the returned run ID is followed to a terminal result.",
          "Campaign: a small contact batch proves CSV mapping, time windows, concurrency, retry rules, circuit breaker behavior, and result reporting before scale-up.",
        ],
      },
      { type: "heading", id: "operations", text: "Operations and release" },
      {
        type: "list",
        items: [
          "Run status, transcript, recording, initial context, gathered context, usage, cost, tool activity, and errors are visible to the operator who owns the launch.",
          "QA output and call dispositions match transcript evidence and are not treated as a substitute for reviewing the first real calls.",
          "The owner knows when to pause traffic, what failure threshold matters, and how callers reach a human or receive a clear next step.",
          "The reviewed draft is published once, then a production-path smoke call confirms the published version rather than the draft route.",
          "The previous published version and the change record remain available for audit and recovery.",
        ],
      },
      {
        type: "callout",
        title: "Prove the boundary",
        text: "Structural validation, a saved draft, a Web Call, a telephony initiation response, and a completed production call are different evidence layers. Report exactly which layers passed and do not describe an unobserved layer as complete.",
      },
      {
        type: "link",
        before: "Return to ",
        label: "Build agents that can be trusted",
        slug: "agent-overview",
        mode: "agents",
        after: " when starting the next bounded workflow change.",
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

function ArticleBody({
  article,
  mode,
  onNavigate,
}: {
  article: DocArticle;
  mode: DocsMode;
  onNavigate: (slug: string, mode: DocsMode) => void;
}) {
  return (
    <div id="article-guidance">
      {article.blocks.map((block, index) => {
        if (block.type === "heading") {
          return <h3 className={styles.sectionHeading} id={block.id} key={`${article.slug}-heading-${block.id}`}>{block.text}</h3>;
        }

        if (block.type === "paragraph") {
          return <p className={styles.bodyCopy} key={`${article.slug}-paragraph-${index}`}>{block.text}</p>;
        }

        if (block.type === "list") {
          return <ul className={styles.checkList} key={`${article.slug}-list-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        }

        if (block.type === "code") {
          return <CodeBlock block={block} key={`${article.slug}-code-${index}`} />;
        }

        if (block.type === "callout") {
          return (
          <aside className={styles.callout} key={`${article.slug}-callout-${index}`}>
            <ShieldCheck size={18} aria-hidden="true" />
            <div><strong>{block.title}</strong><p>{block.text}</p></div>
          </aside>
          );
        }

        const targetMode = block.mode ?? mode;
        return (
          <p className={styles.bodyCopy} key={`${article.slug}-link-${index}`}>
            {block.before}
            <a
              className={styles.inlineLink}
              href={`/docs#${block.slug}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(block.slug, targetMode);
              }}
            >
              {block.label}
            </a>
            {block.after}
          </p>
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

export function DocsPage({
  signInHref = "/auth/login",
  startBuildingHref = "/auth/signup",
}: {
  signInHref?: string;
  startBuildingHref?: string;
}) {
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
    const hashMode = (Object.keys(ARTICLES) as DocsMode[]).find((candidateMode) =>
      ARTICLES[candidateMode].some((item) => item.slug === hashSlug),
    );
    if (hashMode) {
      setMode(hashMode);
      setActiveSlug(hashSlug);
    }

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
    const nextSlug = getFirstSlug(nextMode);
    setMode(nextMode);
    setActiveSlug(nextSlug);
    setSearch("");
    setMobileNavOpen(false);
    window.history.replaceState(null, "", `/docs#${nextSlug}`);
  }

  function selectArticle(slug: string, nextMode: DocsMode = mode) {
    setMode(nextMode);
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
        <div className={styles.topActions}><a href={signInHref}>Sign in</a><a className={styles.startButton} href={startBuildingHref}>Start building</a></div>
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
              <ArticleBody article={article} mode={mode} onNavigate={selectArticle} />
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
