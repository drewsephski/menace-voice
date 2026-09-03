"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CloudSun,
  FileText,
  Headphones,
  Loader2,
  MessageCircle,
  Plus,
  Puzzle,
  Search,
  SlidersHorizontal,
  Target,
  UploadCloud,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import DocumentUpload from "@/app/files/DocumentUpload";
import { createMcpDefinition, MCP_URL_PATTERN } from "@/app/tools/config";
import {
  createToolApiV1ToolsPost,
  createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost,
  listDocumentsApiV1KnowledgeBaseDocumentsGet,
  listToolsApiV1ToolsGet,
} from "@/client/sdk.gen";
import type { DocumentResponseSchema, ToolResponse, WorkflowResponse } from "@/client/types.gen";
import { BrandLogo } from "@/components/BrandLogo";
import { CredentialSelector } from "@/components/http/credential-selector";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { detailFromError } from "@/lib/apiError";
import { useAuth } from "@/lib/auth";

type StepIndex = 0 | 1 | 2 | 3 | 4;
type TemplateId = "receptionist" | "lead-qualifier" | "support-desk" | "custom";

type TemplateOption = {
  id: TemplateId;
  label: string;
  description: string;
  useCase: string;
  activityDescription: string;
  icon: typeof Headphones;
};

type McpServerSummary = {
  toolUuid: string;
  name: string;
  description: string;
  url: string;
  discoveredToolCount: number;
  discoveryStatus: "ready" | "unavailable";
};

type McpPreset = {
  id: "exa" | "open-meteo";
  name: string;
  description: string;
  url: string;
  icon: typeof Search;
  logoUrl?: string;
};

const TEMPLATE_OPTIONS: TemplateOption[] = [
  {
    id: "receptionist",
    label: "Receptionist",
    description: "Answer questions, route callers, and capture messages.",
    useCase: "Front desk receptionist",
    activityDescription: "Greet callers, answer common questions, route them to the right person, and capture messages when nobody is available.",
    icon: Headphones,
  },
  {
    id: "lead-qualifier",
    label: "Lead qualifier",
    description: "Ask the right questions and pass along qualified leads.",
    useCase: "Lead qualification",
    activityDescription: "Qualify new leads by learning about their needs, timeline, and budget, then summarize the conversation for the sales team.",
    icon: Target,
  },
  {
    id: "support-desk",
    label: "Support desk",
    description: "Resolve common issues with a calm, helpful voice.",
    useCase: "Customer support",
    activityDescription: "Help customers troubleshoot common issues, find answers in the knowledge base, and escalate requests that need a human.",
    icon: MessageCircle,
  },
  {
    id: "custom",
    label: "Custom",
    description: "Start with a blank canvas and describe the job yourself.",
    useCase: "Custom voice agent",
    activityDescription: "",
    icon: SlidersHorizontal,
  },
];

const STEPS = ["Purpose", "Knowledge", "Behavior", "Connections", "Launch"] as const;
const TONES = [
  { value: "warm and helpful", label: "Warm and helpful", description: "Friendly, patient, and reassuring." },
  { value: "crisp and concise", label: "Crisp and concise", description: "Direct answers with no wasted words." },
  { value: "consultative", label: "Consultative", description: "Curious, thoughtful, and guided by context." },
] as const;
const LANGUAGES = ["English (US)", "English (UK)", "Spanish"] as const;

const MCP_PRESETS: McpPreset[] = [
  {
    id: "exa",
    name: "Exa web search",
    description: "Search the live web and fetch pages during a conversation.",
    url: "https://mcp.exa.ai/mcp",
    icon: Search,
    logoUrl: "https://exa.ai/search/images/logo.png",
  },
  {
    id: "open-meteo",
    name: "Open-Meteo weather",
    description: "Get current conditions and forecasts without an API key.",
    url: "https://open-meteo.caseyjhand.com/mcp",
    icon: CloudSun,
  },
];

function getMcpUrl(tool: ToolResponse): string | null {
  const definition = tool.definition;
  if (!definition || typeof definition !== "object") return null;
  const config = definition.config;
  if (!config || typeof config !== "object" || !("url" in config)) return null;
  return typeof config.url === "string" ? normalizeMcpUrl(config.url) ?? config.url : null;
}

function getDiscoveredToolCount(tool: ToolResponse): number {
  const definition = tool.definition;
  if (!definition || typeof definition !== "object") return 0;
  const config = definition.config;
  if (!config || typeof config !== "object" || !("discovered_tools" in config)) return 0;
  const discoveredTools = config.discovered_tools;
  return Array.isArray(discoveredTools) ? discoveredTools.length : 0;
}

function normalizeMcpUrl(value: string): string | null {
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

function getMcpUsageInstructions(servers: McpServerSummary[]): string {
  if (servers.length === 0) return "No external MCP servers are connected.";

  const instructions = servers.map((server) => {
    if (server.url === "https://mcp.exa.ai/mcp") {
      return `Use ${server.name} when the caller needs current information from the public web or asks you to look up a webpage. Prefer it over guessing, summarize the result clearly, and mention when information came from web search.`;
    }
    if (server.url === "https://open-meteo.caseyjhand.com/mcp") {
      return `Use ${server.name} for current conditions, forecasts, or weather-related planning. Ask for the caller's location if it is missing, and distinguish a forecast from a current observation.`;
    }
    return `Use ${server.name} only when its connected tools are relevant to the caller's request. Ask for missing details before taking an action and never claim an action succeeded unless the tool confirms it.`;
  });

  return `MCP tool guidance:\n${instructions.map((instruction) => `- ${instruction}`).join("\n")}`;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

export default function AgentOnboardingPage() {
  const { user, getAccessToken, loading, redirectToLogin } = useAuth();
  const [step, setStep] = useState<StepIndex>(0);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>("custom");
  const [activityDescription, setActivityDescription] = useState("");
  const [useCase, setUseCase] = useState("Custom voice agent");
  const [agentName, setAgentName] = useState("New voice agent");
  const [callType, setCallType] = useState<"inbound" | "outbound">("inbound");
  const [tone, setTone] = useState<(typeof TONES)[number]["value"]>("warm and helpful");
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("English (US)");
  const [behaviorNotes, setBehaviorNotes] = useState("");
  const [documents, setDocuments] = useState<DocumentResponseSchema[]>([]);
  const [selectedDocumentUuids, setSelectedDocumentUuids] = useState<string[]>([]);
  const [documentsLoading, setDocumentsLoading] = useState(true);
  const [documentsError, setDocumentsError] = useState<string | null>(null);
  const [mcpServers, setMcpServers] = useState<McpServerSummary[]>([]);
  const [availableMcpTools, setAvailableMcpTools] = useState<ToolResponse[]>([]);
  const [mcpToolsLoading, setMcpToolsLoading] = useState(false);
  const [mcpToolsError, setMcpToolsError] = useState<string | null>(null);
  const [mcpName, setMcpName] = useState("");
  const [mcpDescription, setMcpDescription] = useState("");
  const [mcpUrl, setMcpUrl] = useState("");
  const [mcpToolsFilter, setMcpToolsFilter] = useState("");
  const [mcpCredentialUuid, setMcpCredentialUuid] = useState("");
  const [mcpError, setMcpError] = useState<string | null>(null);
  const [isAddingMcp, setIsAddingMcp] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [createdWorkflow, setCreatedWorkflow] = useState<WorkflowResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchDocuments = useCallback(async () => {
    if (!user) return;

    try {
      setDocumentsLoading(true);
      setDocumentsError(null);
      const accessToken = await getAccessToken();
      const response = await listDocumentsApiV1KnowledgeBaseDocumentsGet({
        query: { limit: 100, offset: 0 },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.error || !response.data) {
        throw new Error(detailFromError(response.error, "Could not load your documents."));
      }
      setDocuments(response.data?.documents ?? []);
    } catch (err) {
      setDocuments([]);
      setDocumentsError(err instanceof Error ? err.message : "Could not load your documents.");
    } finally {
      setDocumentsLoading(false);
    }
  }, [getAccessToken, user]);

  useEffect(() => {
    if (!loading && !user) redirectToLogin();
  }, [loading, redirectToLogin, user]);

  useEffect(() => {
    void fetchDocuments();
  }, [fetchDocuments]);

  useEffect(() => {
    const hasProcessingDocuments = documents.some(
      (document) => document.processing_status === "pending" || document.processing_status === "processing",
    );
    if (step !== 1 || !hasProcessingDocuments) return;

    const pollInterval = window.setInterval(() => {
      void fetchDocuments();
    }, 5000);
    return () => window.clearInterval(pollInterval);
  }, [documents, fetchDocuments, step]);

  const handleDocumentUpload = useCallback(async (documentUuid?: string) => {
    if (documentUuid) {
      setSelectedDocumentUuids((current) => current.includes(documentUuid) ? current : [...current, documentUuid]);
    }
    await fetchDocuments();
  }, [fetchDocuments]);

  useEffect(() => {
    if (step !== 3 || !user) return;

    const fetchMcpTools = async () => {
      try {
        setMcpToolsLoading(true);
        setMcpToolsError(null);
        const accessToken = await getAccessToken();
        const response = await listToolsApiV1ToolsGet({
          headers: { Authorization: `Bearer ${accessToken}` },
          query: { status: "active" },
        });
        if (response.error) {
          throw new Error(detailFromError(response.error, "Could not load saved MCP servers."));
        }
        setAvailableMcpTools((response.data ?? []).filter((tool) => tool.category === "mcp"));
      } catch (err) {
        setAvailableMcpTools([]);
        setMcpToolsError(err instanceof Error ? err.message : "Could not load saved MCP servers.");
      } finally {
        setMcpToolsLoading(false);
      }
    };

    void fetchMcpTools();
  }, [getAccessToken, step, user]);

  const selectedTemplateOption = useMemo(() => TEMPLATE_OPTIONS.find((template) => template.id === selectedTemplate), [selectedTemplate]);
  const selectableDocuments = useMemo(
    () => documents.filter((document) => document.processing_status === "completed" || selectedDocumentUuids.includes(document.document_uuid)),
    [documents, selectedDocumentUuids],
  );

  const chooseTemplate = (template: TemplateOption) => {
    setSelectedTemplate(template.id);
    setUseCase(template.useCase);
    setActivityDescription(template.activityDescription);
    if (template.id !== "custom") setAgentName(`${template.label} agent`);
  };

  const toggleDocument = (documentUuid: string, checked: boolean) => {
    setSelectedDocumentUuids((current) => {
      if (checked) return current.includes(documentUuid) ? current : [...current, documentUuid];
      return current.filter((uuid) => uuid !== documentUuid);
    });
  };

  const addMcpServer = async (preset?: McpPreset) => {
    if (!user) {
      setMcpError("Sign in before adding a server.");
      return;
    }
    const name = preset?.name ?? mcpName.trim();
    const url = preset?.url ?? mcpUrl.trim();
    const description = preset?.description ?? mcpDescription.trim();
    if (!name || !url) {
      setMcpError("Add a server name and URL to continue.");
      return;
    }
    const normalizedUrl = normalizeMcpUrl(url);
    if (!normalizedUrl || !MCP_URL_PATTERN.test(normalizedUrl)) {
      setMcpError("The MCP server URL must start with http:// or https://.");
      return;
    }

    try {
      setIsAddingMcp(true);
      setMcpError(null);
      const accessToken = await getAccessToken();
      const existingTool = availableMcpTools.find((tool) => getMcpUrl(tool) === normalizedUrl);
      if (existingTool) {
        setMcpServers((current) => current.some((server) => server.toolUuid === existingTool.tool_uuid)
          ? current
          : [...current, {
            toolUuid: existingTool.tool_uuid,
            name: existingTool.name,
            description: existingTool.description ?? (description || "MCP server"),
            url: normalizedUrl,
            discoveredToolCount: getDiscoveredToolCount(existingTool),
            discoveryStatus: getDiscoveredToolCount(existingTool) > 0 ? "ready" : "unavailable",
          }]);
        toast.success(`${existingTool.name} is already connected`);
        return;
      }
      const response = await createToolApiV1ToolsPost({
        body: {
          name,
          description: description || "MCP server connected during agent setup.",
          category: "mcp",
          icon: "puzzle",
          icon_color: "#f04438",
          definition: createMcpDefinition(normalizedUrl, mcpCredentialUuid, preset ? "" : mcpToolsFilter),
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.error || !response.data) {
        throw new Error(detailFromError(response.error, "The server could not be saved."));
      }
      const tool: ToolResponse = response.data;
      setAvailableMcpTools((current) => [...current, tool]);
      setMcpServers((current) => [...current, {
        toolUuid: tool.tool_uuid,
        name: tool.name,
        description: tool.description ?? "MCP server",
        url: normalizedUrl,
        discoveredToolCount: getDiscoveredToolCount(tool),
        discoveryStatus: getDiscoveredToolCount(tool) > 0 ? "ready" : "unavailable",
      }]);
      setMcpName("");
      setMcpDescription("");
      setMcpUrl("");
      setMcpToolsFilter("");
      setMcpCredentialUuid("");
      if (getDiscoveredToolCount(tool) > 0) {
        toast.success("MCP server saved");
      } else {
        toast.warning("MCP server saved, but no tools were discovered yet");
      }
    } catch (err) {
      setMcpError(err instanceof Error ? err.message : "The server could not be saved.");
    } finally {
      setIsAddingMcp(false);
    }
  };

  const canContinue = step === 0 ? activityDescription.trim().length > 0 : step === 2 ? agentName.trim().length > 0 : true;

  const createAgent = async () => {
    if (!user) {
      setError("You must be signed in to create an agent.");
      return;
    }
    try {
      setIsCreating(true);
      setError(null);
      const accessToken = await getAccessToken();
      const configurationSummary = [
        `Tone: ${tone}.`,
        `Language and voice: ${language}.`,
        `Call direction: ${callType}.`,
        behaviorNotes.trim() ? `Additional behavior: ${behaviorNotes.trim()}` : "",
        getMcpUsageInstructions(mcpServers),
      ].filter(Boolean).join(" ");
      const response = await createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost({
        body: {
          call_type: callType,
          name: agentName.trim(),
          use_case: useCase.trim() || "Custom voice agent",
          activity_description: `${activityDescription.trim()}\n\n${configurationSummary}`,
          tool_uuids: mcpServers.map((server) => server.toolUuid),
          document_uuids: selectedDocumentUuids,
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.error || !response.data) {
        throw new Error(detailFromError(response.error, "The agent could not be created."));
      }

      setCreatedWorkflow(response.data);
      toast.success("Your agent is ready to shape");
    } catch (err) {
      setError(err instanceof Error ? err.message : "The agent could not be created.");
    } finally {
      setIsCreating(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="container mx-auto flex min-h-[calc(100dvh-5rem)] items-center justify-center px-4 py-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Preparing agent setup...
        </div>
      </div>
    );
  }

  if (createdWorkflow) {
    return (
      <div className="container mx-auto flex min-h-[calc(100dvh-5rem)] max-w-3xl items-center px-4 py-10">
        <Card className="card-weave w-full overflow-hidden border-green-500/30">
          <CardContent className="flex flex-col items-center px-6 py-14 text-center sm:px-12">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400"><CheckCircle2 className="h-9 w-9" /></div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-green-400">Agent created</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{agentName}</h1>
            <p className="mt-4 max-w-xl text-muted-foreground">Your first voice agent is ready. Open the editor to hear it, refine the conversation, and publish when it feels right.</p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild className="h-11 px-6"><Link href={`/workflow/${createdWorkflow.id}?onboarding=web_call`}>Open and test agent <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" className="h-11 px-6"><Link href="/overview">Back to overview</Link></Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100dvh-3.5rem)]">
      <div className="container mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-9">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-card/70 p-2 md:hidden"><BrandLogo mark className="h-5" /></div>
            <div>
              <Link href="/overview" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="h-4 w-4" />Back to overview</Link>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Build an agent that sounds like you</h1>
              <p className="mt-2 max-w-2xl text-muted-foreground">A few focused questions are all it takes to get a useful first draft.</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex"><span className="font-medium text-foreground">{step + 1}</span><span>/</span><span>{STEPS.length}</span></div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_280px] xl:gap-10">
          <Card className="card-weave overflow-hidden">
            <CardHeader className="border-b border-border/60 px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"><span className="text-foreground">Step {String(step + 1).padStart(2, "0")}</span><span className="text-border">/</span><span>{STEPS[step]}</span></div>
              <CardTitle className="mt-5 text-2xl leading-tight sm:text-3xl">{step === 0 && "What should your agent help with?"}{step === 1 && "What should it know from day one?"}{step === 2 && "How should it sound?"}{step === 3 && "What should it connect to?"}{step === 4 && "Ready to bring it to life?"}</CardTitle>
              <CardDescription className="mt-2 max-w-2xl text-base">{step === 0 && "Start with a template or tell us in your own words."}{step === 1 && "Upload the documents and references your agent can use during a call."}{step === 2 && "Give the agent a name, a voice, and a few guardrails for every conversation."}{step === 3 && "Connect reusable MCP tools now, or leave this step for later."}{step === 4 && "Review the setup. We’ll generate the first workflow and open it in the editor."}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-7 px-5 py-6 sm:px-8 sm:py-8">
              {documentsError && <p className="text-sm text-red-300">{documentsError}</p>}
              {mcpToolsError && <p className="text-sm text-red-300">{mcpToolsError}</p>}
              {step === 0 && <div className="space-y-7"><div className="space-y-2"><Label htmlFor="agent-purpose">Describe the job</Label><Textarea id="agent-purpose" value={activityDescription} onChange={(event) => setActivityDescription(event.target.value)} placeholder="For example: qualify inbound leads, answer questions about our services, and book a demo when there’s a good fit." className="min-h-36 resize-y bg-background/35 text-base leading-7" /><p className="text-xs text-muted-foreground">A clear description gives your first draft a strong starting point.</p></div><div className="space-y-3"><div><p className="text-sm font-medium">Or start with a template</p><p className="mt-1 text-sm text-muted-foreground">You can change everything in the editor later.</p></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{TEMPLATE_OPTIONS.map((template) => { const Icon = template.icon; const isSelected = selectedTemplate === template.id; return <button key={template.id} type="button" aria-pressed={isSelected} onClick={() => chooseTemplate(template)} className={`group relative min-h-36 rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/70 ${isSelected ? "border-cta bg-cta/10 shadow-[0_0_0_1px_rgba(240,68,56,0.25)]" : "border-border/70 bg-background/25 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-background/45"}`}><div className={`mb-8 flex h-9 w-9 items-center justify-center rounded-lg border ${isSelected ? "border-cta/50 bg-cta/15 text-cta" : "border-border/70 bg-muted/30 text-muted-foreground group-hover:text-foreground"}`}><Icon className="h-5 w-5" /></div><p className="font-medium">{template.label}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{template.description}</p>{isSelected && <Check className="absolute right-3 top-3 h-4 w-4 text-cta" />}</button>; })}</div></div></div>}

              {step === 1 && <div className="space-y-7"><div className="rounded-xl border border-border/70 bg-background/25 p-4 sm:p-5"><div className="mb-4 flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta"><UploadCloud className="h-5 w-5" /></div><div><p className="font-medium">Add a document</p><p className="mt-1 text-sm text-muted-foreground">PDF, DOCX, TXT, JSON, and Markdown up to 5MB.</p></div></div><DocumentUpload onUploadSuccess={handleDocumentUpload} /></div><div className="space-y-3"><div className="flex items-end justify-between gap-3"><div><p className="text-sm font-medium">Choose knowledge for this agent</p><p className="mt-1 text-sm text-muted-foreground">Uploads are selected automatically. Add or remove anything before you continue.</p></div><span className="text-xs text-muted-foreground">{selectedDocumentUuids.length} selected</span></div><div className="rounded-xl border border-border/70 bg-background/25">{documentsLoading ? <div className="flex items-center gap-2 p-5 text-sm text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" />Loading documents...</div> : documentsError ? <div className="flex flex-col gap-3 p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>{documentsError}</span><Button type="button" variant="outline" size="sm" onClick={() => void fetchDocuments()}>Try again</Button></div> : selectableDocuments.length === 0 ? <div className="p-6 text-center"><FileText className="mx-auto h-8 w-8 text-muted-foreground/70" /><p className="mt-3 text-sm font-medium">No documents yet</p><p className="mt-1 text-sm text-muted-foreground">You can skip this step and add knowledge from the editor later.</p></div> : <div className="divide-y divide-border/60">{selectableDocuments.map((document) => { const isSelected = selectedDocumentUuids.includes(document.document_uuid); const isProcessing = document.processing_status !== "completed"; return <label key={document.document_uuid} htmlFor={`onboarding-doc-${document.document_uuid}`} className={`flex items-center gap-3 p-4 transition-colors hover:bg-muted/25 ${isSelected ? "bg-cta/5" : ""} ${isProcessing && !isSelected ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}><Checkbox id={`onboarding-doc-${document.document_uuid}`} checked={isSelected} disabled={isProcessing && !isSelected} onCheckedChange={(checked) => toggleDocument(document.document_uuid, checked === true)} /><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta"><FileText className="h-4 w-4" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{document.filename}</p><p className="mt-1 text-xs text-muted-foreground">{formatFileSize(document.file_size_bytes)} · {isProcessing ? "Processing now" : document.retrieval_mode === "full_document" ? "Full document" : "Chunked search"}</p></div>{isSelected && <Check className="h-4 w-4 text-cta" />}</label>; })}</div>}</div></div></div>}

              {step === 2 && <div className="space-y-7"><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2 sm:col-span-2"><Label htmlFor="agent-name">Agent name</Label><Input id="agent-name" value={agentName} onChange={(event) => setAgentName(event.target.value)} placeholder="e.g. Maya, our front desk agent" className="h-11 bg-background/35" /></div><div className="space-y-2"><Label htmlFor="call-type">Call direction</Label><Select value={callType} onValueChange={(value) => setCallType(value as "inbound" | "outbound")}><SelectTrigger id="call-type" className="h-11 bg-background/35"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="inbound">Inbound · people call your agent</SelectItem><SelectItem value="outbound">Outbound · your agent calls people</SelectItem></SelectContent></Select></div><div className="space-y-2"><Label htmlFor="agent-language">Language and voice</Label><Select value={language} onValueChange={(value) => setLanguage(value as (typeof LANGUAGES)[number])}><SelectTrigger id="agent-language" className="h-11 bg-background/35"><SelectValue /></SelectTrigger><SelectContent>{LANGUAGES.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select></div></div><div className="space-y-3"><div><p className="text-sm font-medium">Choose a tone</p><p className="mt-1 text-sm text-muted-foreground">This shapes the first draft. You can tune it precisely later.</p></div><div className="grid gap-3 md:grid-cols-3">{TONES.map((option) => { const isSelected = tone === option.value; return <button key={option.value} type="button" aria-pressed={isSelected} onClick={() => setTone(option.value)} className={`rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/70 ${isSelected ? "border-cta bg-cta/10" : "border-border/70 bg-background/25 hover:border-foreground/30"}`}><div className="flex items-center justify-between gap-2"><span className="text-sm font-medium">{option.label}</span>{isSelected && <Check className="h-4 w-4 text-cta" />}</div><p className="mt-2 text-xs leading-5 text-muted-foreground">{option.description}</p></button>; })}</div></div><div className="space-y-2"><Label htmlFor="behavior-notes">Anything else it should always do?</Label><Textarea id="behavior-notes" value={behaviorNotes} onChange={(event) => setBehaviorNotes(event.target.value)} placeholder="Keep answers under two sentences. Always confirm the caller’s email before booking." className="min-h-28 bg-background/35" /></div></div>}

              {step === 3 && <div className="space-y-7">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Start with a preset</p>
                    <p className="mt-1 text-sm text-muted-foreground">One click adds a ready-to-use server. No API key is needed for these defaults.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {MCP_PRESETS.map((preset) => {
                      const Icon = preset.icon;
                      const isConnected = mcpServers.some((server) => server.url === preset.url);
                      return <button key={preset.id} type="button" onClick={() => void addMcpServer(preset)} disabled={isAddingMcp || mcpToolsLoading || isConnected} className={`group rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/70 ${isConnected ? "border-cta/40 bg-cta/5" : "border-border/70 bg-background/25 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-background/45"}`}>
                        <div className="flex items-start gap-3"><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isConnected ? "bg-cta/15 text-cta" : "bg-muted/50 text-muted-foreground group-hover:text-foreground"}`}>{preset.logoUrl ? <span aria-label={`${preset.name} logo`} role="img" className="h-7 w-7 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${preset.logoUrl})` }} /> : <Icon className="h-4 w-4" />}</div><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><p className="font-medium">{preset.name}</p>{isConnected ? <Check className="h-4 w-4 text-cta" /> : <Plus className="h-4 w-4 text-muted-foreground" />}</div><p className="mt-1 text-xs leading-5 text-muted-foreground">{preset.description}</p></div></div>
                      </button>;
                    })}
                  </div>
                  {mcpToolsLoading && <p className="text-xs text-muted-foreground">Checking your saved MCP servers...</p>}
                  {mcpToolsError && <p className="text-xs text-amber-300">{mcpToolsError} You can still add a new server below.</p>}
                </div>
                <div className="rounded-xl border border-border/70 bg-background/25 p-4 sm:p-5">
                  <div className="mb-5 flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta"><Puzzle className="h-5 w-5" /></div><div><p className="font-medium">Connect a custom MCP server</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Bring your own tools for customer records, scheduling, internal search, or anything else your agent needs.</p></div></div>
                  <div className="grid gap-4 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="mcp-name">Server name</Label><Input id="mcp-name" value={mcpName} onChange={(event) => setMcpName(event.target.value)} placeholder="e.g. CRM tools" className="bg-background/35" /></div><div className="space-y-2"><Label htmlFor="mcp-url">Server URL</Label><Input id="mcp-url" value={mcpUrl} onChange={(event) => setMcpUrl(event.target.value)} placeholder="https://your-server.com/mcp" className="bg-background/35" /></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="mcp-description">What can it do? <span className="font-normal text-muted-foreground">(optional)</span></Label><Input id="mcp-description" value={mcpDescription} onChange={(event) => setMcpDescription(event.target.value)} placeholder="Look up customers and update lead status" className="bg-background/35" /></div><div className="space-y-2 sm:col-span-2"><CredentialSelector value={mcpCredentialUuid} onChange={setMcpCredentialUuid} label="Authentication" description="Optional credentials for this MCP server." /></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="mcp-tools">Limit exposed tools <span className="font-normal text-muted-foreground">(optional, comma separated)</span></Label><Input id="mcp-tools" value={mcpToolsFilter} onChange={(event) => setMcpToolsFilter(event.target.value)} placeholder="search_customer, update_lead" className="bg-background/35" /></div></div>{mcpError && <p className="mt-4 text-sm text-red-300">{mcpError}</p>}<Button type="button" variant="outline" className="mt-5" onClick={() => void addMcpServer()} disabled={isAddingMcp}><Plus className="h-4 w-4" />{isAddingMcp ? "Saving server..." : "Add custom server"}</Button>
                </div>
                {mcpServers.length > 0 && <div className="space-y-3"><div><p className="text-sm font-medium">Connected servers</p><p className="mt-1 text-sm text-muted-foreground">These reusable tools will be attached to every conversational node in the new agent.</p></div><div className="space-y-2">{mcpServers.map((server) => <div key={server.toolUuid} className={`flex items-center gap-3 rounded-xl border p-4 ${server.discoveryStatus === "ready" ? "border-cta/30 bg-cta/5" : "border-amber-500/30 bg-amber-500/5"}`}><div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${server.discoveryStatus === "ready" ? "bg-cta/15 text-cta" : "bg-amber-500/15 text-amber-300"}`}><Puzzle className="h-4 w-4" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{server.name}</p><p className="truncate text-xs text-muted-foreground">{server.url}{server.discoveryStatus === "ready" ? ` · ${server.discoveredToolCount} tools found` : " · no tools discovered yet"}</p></div>{server.discoveryStatus === "ready" ? <Check className="h-4 w-4 text-cta" /> : <span className="text-xs text-amber-300">Needs attention</span>}</div>)}</div></div>}
              </div>}

              {step === 4 && <div className="space-y-5"><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-border/70 bg-background/25 p-4"><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Purpose</p><p className="mt-2 font-medium">{selectedTemplateOption?.label ?? "Custom agent"}</p><p className="mt-1 text-sm text-muted-foreground">{useCase}</p></div><div className="rounded-xl border border-border/70 bg-background/25 p-4"><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Identity</p><p className="mt-2 font-medium">{agentName}</p><p className="mt-1 text-sm text-muted-foreground">{callType} · {language}</p></div><div className="rounded-xl border border-border/70 bg-background/25 p-4"><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Knowledge</p><p className="mt-2 font-medium">{selectedDocumentUuids.length ? `${selectedDocumentUuids.length} document${selectedDocumentUuids.length === 1 ? "" : "s"} connected` : "No documents connected"}</p><p className="mt-1 text-sm text-muted-foreground">You can add more in the editor.</p></div><div className="rounded-xl border border-border/70 bg-background/25 p-4"><p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Connections</p><p className="mt-2 font-medium">{mcpServers.length ? `${mcpServers.length} MCP server${mcpServers.length === 1 ? "" : "s"}` : "No MCP servers"}</p><p className="mt-1 text-sm text-muted-foreground">Optional for your first draft.</p></div></div><div className="rounded-xl border border-cta/30 bg-cta/5 p-5"><div className="flex items-start gap-3"><div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cta text-cta-foreground"><Check className="h-4 w-4" /></div><div><p className="font-medium">You’re ready for the first draft</p><p className="mt-1 text-sm leading-6 text-muted-foreground">We’ll generate the workflow, connect the resources you selected, and take you straight to the editor to test it.</p></div></div></div>{error && <p className="text-sm text-red-300">{error}</p>}</div>}
            </CardContent>

            <div className="flex flex-col-reverse gap-3 border-t border-border/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"><Button type="button" variant="ghost" onClick={() => setStep((current) => current === 0 ? 0 : (current - 1) as StepIndex)} disabled={step === 0 || isCreating} className="justify-start text-muted-foreground hover:text-foreground sm:px-0"><ArrowLeft className="h-4 w-4" />Back</Button><div className="flex items-center justify-end gap-3">{step < 4 && <Button type="button" variant="ghost" onClick={() => setStep((current) => (current + 1) as StepIndex)} disabled={isCreating} className="text-muted-foreground hover:text-foreground">Skip for now</Button>}{step < 4 ? <Button type="button" onClick={() => setStep((current) => (current + 1) as StepIndex)} disabled={!canContinue || isCreating} className="h-11 px-5">Continue <ArrowRight className="h-4 w-4" /></Button> : <Button type="button" onClick={() => void createAgent()} disabled={isCreating} className="h-11 min-w-36 px-5">{isCreating ? <><Loader2 className="h-4 w-4 animate-spin" />Creating...</> : <>Create agent <ArrowRight className="h-4 w-4" /></>}</Button>}</div></div>
          </Card>

          <aside className="lg:pt-2"><Card className="card-weave lg:sticky lg:top-24"><CardHeader className="px-5 pb-4 pt-5"><CardTitle className="text-lg">Your build</CardTitle><CardDescription>Shape the essentials, then refine the details in the editor.</CardDescription></CardHeader><CardContent className="px-5 pb-6"><div className="mb-6 h-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-cta transition-all duration-300" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} /></div><ol className="space-y-1">{STEPS.map((stepLabel, index) => { const isCurrent = index === step; const isComplete = index < step; return <li key={stepLabel} className="flex items-center gap-3 py-2.5"><div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-colors ${isCurrent ? "border-cta bg-cta text-cta-foreground" : isComplete ? "border-cta/50 bg-cta/10 text-cta" : "border-border/80 text-muted-foreground"}`}>{isComplete ? <Check className="h-4 w-4" /> : index + 1}</div><span className={`text-sm ${isCurrent ? "font-medium text-foreground" : "text-muted-foreground"}`}>{stepLabel}</span></li>; })}</ol><div className="mt-6 border-t border-border/60 pt-5 text-xs leading-5 text-muted-foreground">You can skip any step and finish setup later from your agent editor.</div></CardContent></Card></aside>
        </div>
      </div>
    </div>
  );
}
