"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe,
  Link2,
  Loader2,
  Plus,
  Puzzle,
  Settings2,
  Sparkles,
  UploadCloud,
  Volume2,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type KeyboardEvent, type MouseEvent, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

import {
  buildAgentOnboardingContext,
  buildAgentOnboardingPrompt,
} from "@/app/agent-onboarding/agent-prompt";
import {
  createHttpTemplateDefinition,
  getDiscoveredToolCount,
  getHttpUsageInstructions,
  getMcpPresetShortName,
  getMcpUrl,
  getMcpUsageInstructions,
  HTTP_TEMPLATE_BY_ID,
  HTTP_TEMPLATES,
  type HttpTemplateId,
  MCP_PRESET_BY_ID,
  MCP_PRESETS,
  type McpPreset,
  type McpPresetId,
  normalizeMcpUrl,
} from "@/app/agent-onboarding/connection-catalog";
import {
  getAgentVoiceSelection,
  getVoiceProviderLabel,
  isCatalogVoiceProvider,
  updateAgentVoiceSelection,
} from "@/app/agent-onboarding/voice-configuration";
import DocumentUpload from "@/app/files/DocumentUpload";
import {
  createMcpDefinition,
  getCategoryConfig,
  MCP_URL_PATTERN,
  type ToolCategory,
} from "@/app/tools/config";
import { ToolLogo } from "@/app/tools/ToolLogo";
import {
  createToolApiV1ToolsPost,
  createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost,
  getModelConfigurationV2ApiV1OrganizationsModelConfigurationsV2Get,
  getModelConfigurationV2DefaultsApiV1OrganizationsModelConfigurationsV2DefaultsGet,
  listDocumentsApiV1KnowledgeBaseDocumentsGet,
  listToolsApiV1ToolsGet,
} from "@/client/sdk.gen";
import type {
  DocumentResponseSchema,
  OrganizationAiModelConfigurationResponse,
  OrganizationAiModelConfigurationV2,
  ToolResponse,
  WorkflowResponse,
} from "@/client/types.gen";
import {
  AIModelConfigurationV2Editor,
  type ModelConfigurationDefaultsV2,
} from "@/components/AIModelConfigurationV2Editor";
import { BrandLogo } from "@/components/BrandLogo";
import { CredentialSelector } from "@/components/http/credential-selector";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { VoiceSelectorModal } from "@/components/VoiceSelectorModal";
import { detailFromError } from "@/lib/apiError";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

type StepIndex = 0 | 1 | 2 | 3 | 4 | 5;
type TemplateId =
  | "receptionist"
  | "lead-qualifier"
  | "support-desk"
  | "technical-docs"
  | "appointment-coordinator"
  | "service-dispatcher"
  | "feedback-interviewer"
  | "custom";

type BuiltinToolCategory = Extract<
  ToolCategory,
  "end_call" | "transfer_call" | "calculator" | "current_time"
>;

type TemplateOption = {
  id: TemplateId;
  label: string;
  description: string;
  useCase: string;
  activityDescription: string;
  workflowStages?: readonly string[];
  avatarUrl: string;
  recommendedBuiltinToolCategories?: BuiltinToolCategory[];
  recommendedMcpPresetIds?: McpPresetId[];
  recommendedHttpTemplateIds?: HttpTemplateId[];
};

type McpServerSummary = {
  toolUuid: string;
  name: string;
  description: string;
  url: string;
  discoveredToolCount: number;
  discoveryStatus: "ready" | "unavailable";
};

type HttpToolSummary = {
  toolUuid: string;
  name: string;
  description: string;
  url: string;
  templateId?: HttpTemplateId;
};

const TEMPLATE_OPTIONS: TemplateOption[] = [
  {
    id: "receptionist",
    label: "Receptionist",
    description: "Answer questions, route callers, and capture messages.",
    useCase: "Front desk receptionist",
    activityDescription:
      "Greet callers warmly, answer common front-desk questions, and route people to the right teammate or department. When someone is unavailable, collect a complete message with name, callback number, and reason for the call. Close each conversation by confirming next steps and whether the caller needs anything else.",
    workflowStages: [
      "Welcome the caller, identify why they called, and answer front-desk questions from available knowledge.",
      "Resolve the request, route to the right person, or collect a complete message when a transfer is unavailable.",
      "Read back names, numbers, and next steps, then confirm the caller has nothing else they need before closing.",
    ],
    avatarUrl: "/avatars/receptionist.svg",
    recommendedBuiltinToolCategories: ["end_call", "transfer_call", "current_time"],
    recommendedMcpPresetIds: ["calcom", "notion"],
    recommendedHttpTemplateIds: ["lookup-record", "notify-webhook"],
  },
  {
    id: "lead-qualifier",
    label: "Lead qualifier",
    description: "Ask the right questions and pass along qualified leads.",
    useCase: "Lead qualification",
    activityDescription:
      "Qualify inbound leads by understanding their goals, timeline, budget, and current situation without sounding like an interrogation. Ask follow-up questions that clarify fit, urgency, and decision process, then note any blockers or buying signals. Summarize the opportunity clearly for the sales team and explain the approved next step to the prospect.",
    workflowStages: [
      "Understand the prospect's goal, current situation, and reason for considering a change.",
      "Qualify fit by gathering the agreed criteria without sounding like an interrogation or inventing product claims.",
      "Summarize the opportunity and either arrange the approved next step or explain the human follow-up clearly.",
    ],
    avatarUrl: "/avatars/lead-qualifier.svg",
    recommendedBuiltinToolCategories: ["end_call", "transfer_call", "current_time"],
    recommendedMcpPresetIds: ["hubspot", "exa"],
    recommendedHttpTemplateIds: ["create-lead"],
  },
  {
    id: "support-desk",
    label: "Support desk",
    description: "Resolve common issues with a calm, helpful voice.",
    useCase: "Customer support",
    activityDescription:
      "Help customers troubleshoot common product issues, search the knowledge base for accurate answers, and guide them through one safe step at a time. Confirm symptoms, attempted fixes, and impact before escalating anything that needs a human. End each call with a concise recap of what was tried, what was resolved, and what happens next.",
    workflowStages: [
      "Identify the customer, the affected product or service, the symptoms, and the outcome they need.",
      "Guide one safe troubleshooting step at a time using available knowledge, checking the result before continuing.",
      "Confirm the resolution or create a complete escalation summary with attempted steps, impact, and the promised next action.",
    ],
    avatarUrl: "/avatars/support-desk.svg",
    recommendedBuiltinToolCategories: ["end_call", "transfer_call", "current_time"],
    recommendedMcpPresetIds: ["exa", "linear", "stripe"],
    recommendedHttpTemplateIds: ["lookup-record"],
  },
  {
    id: "technical-docs",
    label: "Technical documentation",
    description:
      "Explain modern libraries with current, version-aware references.",
    useCase: "Technical documentation assistant",
    activityDescription:
      "Help developers understand modern libraries and frameworks, explain APIs with concise examples, and clarify version differences when they matter. Use connected documentation sources to stay current instead of relying on memory alone. Summarize the recommended implementation, call out any assumptions, and label uncertainty when docs are incomplete.",
    workflowStages: [
      "Clarify the library, version, environment, and specific implementation goal or error.",
      "Retrieve current documentation with connected sources and explain the relevant API with a focused example.",
      "Check the answer against the caller's constraints, summarize the implementation, and label any remaining uncertainty.",
    ],
    avatarUrl: "/avatars/technical-docs.svg",
    recommendedBuiltinToolCategories: ["end_call"],
    recommendedMcpPresetIds: ["context7", "exa", "deepwiki", "github"],
  },
  {
    id: "appointment-coordinator",
    label: "Appointment coordinator",
    description:
      "Schedule, change, and confirm appointments without overpromising.",
    useCase: "Appointment scheduling and coordination",
    activityDescription:
      "Help callers book, reschedule, or cancel appointments while following scheduling policies from your knowledge base. Collect the service, contact details, timezone, and preferred times, then check connected tools before confirming any change. Never promise a slot that has not been verified, and capture a precise callback request when scheduling cannot be completed live.",
    workflowStages: [
      "Identify whether the caller is booking, changing, or canceling, then collect the service, contact details, timezone, and constraints.",
      "Check policies and connected scheduling tools, offer only confirmed options, and obtain approval before making a change.",
      "Read back the appointment details and confirmation, or capture a precise staff callback request when the action cannot be completed.",
    ],
    avatarUrl: "/avatars/appointment-coordinator.svg",
    recommendedBuiltinToolCategories: [
      "end_call",
      "transfer_call",
      "calculator",
      "current_time",
    ],
    recommendedMcpPresetIds: ["calcom"],
    recommendedHttpTemplateIds: ["notify-webhook"],
  },
  {
    id: "service-dispatcher",
    label: "Service dispatcher",
    description:
      "Triage service calls and hand technicians a complete job brief.",
    useCase: "Field service intake and dispatch",
    activityDescription:
      "Triage incoming field-service requests, gather address, equipment, symptoms, timing, and access constraints, and prepare a complete dispatch brief. Treat possible safety hazards as urgent and direct callers to emergency services when someone may be in danger. Close with a concise recap, reference number when available, and the expected technician response.",
    workflowStages: [
      "Screen for immediate danger and urgency before gathering routine service details or attempting troubleshooting.",
      "Build a complete job brief, check coverage and availability, and confirm the address, access, and service window with the caller.",
      "Dispatch or escalate through connected tools, then provide the reference, expected response, safety reminder, and concise recap.",
    ],
    avatarUrl: "/avatars/service-dispatcher.svg",
    recommendedBuiltinToolCategories: [
      "end_call",
      "transfer_call",
      "current_time",
    ],
    recommendedMcpPresetIds: ["open-meteo", "calcom"],
    recommendedHttpTemplateIds: ["lookup-record", "notify-webhook"],
  },
  {
    id: "feedback-interviewer",
    label: "Feedback interviewer",
    description:
      "Run respectful interviews that turn conversations into clear insights.",
    useCase: "Customer feedback and experience interviews",
    activityDescription:
      "Conduct brief, permission-based feedback interviews after a service or purchase, explaining the purpose and confirming the caller has time to participate. Ask one neutral question at a time, capture ratings, strengths, problems, and follow-up preferences without defending the company. Summarize feedback accurately, separate quotes from interpretation, and flag issues that need human follow-up.",
    workflowStages: [
      "State the purpose, identify the relevant experience, obtain permission to continue, and honor any opt-out immediately.",
      "Run the interview one neutral question at a time, adapting follow-ups to clarify ratings, strengths, and problems.",
      "Reflect back the key feedback, confirm whether follow-up is wanted, and flag unresolved issues without promising an outcome.",
    ],
    avatarUrl: "/avatars/feedback-interviewer.svg",
    recommendedBuiltinToolCategories: ["end_call"],
    recommendedHttpTemplateIds: ["notify-webhook"],
  },
  {
    id: "custom",
    label: "Custom",
    description: "Start with a blank canvas and describe the job yourself.",
    useCase: "Custom voice agent",
    activityDescription: "",
    workflowStages: [],
    avatarUrl: "/avatars/custom.svg",
    recommendedBuiltinToolCategories: ["end_call"],
  },
];

const STEPS = [
  "Purpose",
  "Knowledge",
  "Behavior",
  "Voice",
  "Connections",
  "Launch",
] as const;
const TONES = [
  {
    value: "warm and helpful",
    label: "Warm and helpful",
    description: "Friendly, patient, and reassuring.",
  },
  {
    value: "crisp and concise",
    label: "Crisp and concise",
    description: "Direct answers with no wasted words.",
  },
  {
    value: "consultative",
    label: "Consultative",
    description: "Curious, thoughtful, and guided by context.",
  },
] as const;
const LANGUAGES = [
  { value: "en-US", label: "English (US)" },
  { value: "en-GB", label: "English (UK)" },
  { value: "es", label: "Spanish" },
] as const;

type LanguageCode = (typeof LANGUAGES)[number]["value"];

function getLanguageLabel(language: LanguageCode): string {
  return LANGUAGES.find((option) => option.value === language)?.label ?? language;
}

function getProviderCostLabel(provider: string): string {
  if (provider === "dograh") return "Managed · uses Menace Voice credits";
  if (provider === "speaches") return "Free provider · self-hosted";
  return "Bring your own key · provider charges may apply";
}

function TemplateToolTooltip({
  label,
  description,
  children,
}: {
  label: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className="inline-flex"
          tabIndex={0}
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={6} className="max-w-56">
        <p className="font-medium">{label}</p>
        <p className="mt-0.5 text-primary-foreground/80">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function McpPresetLogoImage({
  preset,
  className,
  size = "md",
}: {
  preset: McpPreset;
  className?: string;
  size?: "sm" | "md";
}) {
  const Icon = preset.icon;

  if (!preset.logoUrl) {
    return (
      <Icon
        className={cn(
          preset.iconClassName ??
            (size === "sm"
              ? "h-3.5 w-3.5 text-muted-foreground"
              : "h-5 w-5"),
          className,
        )}
        aria-hidden
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={preset.logoUrl}
      alt=""
      aria-hidden
      className={cn(
        "object-contain",
        size === "sm" ? "h-4 w-4" : "h-8 w-8",
        className,
      )}
    />
  );
}

function TemplateMcpLogo({ preset }: { preset: McpPreset }) {
  const Icon = preset.icon;
  const useWhiteTile = Boolean(preset.logoUrl && preset.logoOnWhite !== false);

  return (
    <TemplateToolTooltip label={preset.name} description={preset.description}>
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/50 p-0.5 shadow-sm transition-transform duration-300 ease-out group-hover/card:scale-105",
          useWhiteTile ? "bg-white/95" : "bg-background/80",
        )}
      >
        {preset.logoUrl ? (
          <McpPresetLogoImage preset={preset} size="sm" className="h-[1.125rem] w-[1.125rem]" />
        ) : (
          <Icon
            className={preset.iconClassName ?? "h-4 w-4 text-muted-foreground"}
            aria-hidden
          />
        )}
      </div>
    </TemplateToolTooltip>
  );
}

function TemplateHttpLogo({ templateId }: { templateId: HttpTemplateId }) {
  const template = HTTP_TEMPLATE_BY_ID[templateId];
  if (!template) return null;
  const Icon = template.icon;

  return (
    <TemplateToolTooltip label={template.name} description={template.description}>
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-background/80 shadow-sm transition-transform duration-300 ease-out group-hover/card:scale-105"
        style={{ color: template.iconColor }}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </div>
    </TemplateToolTooltip>
  );
}

function TemplateBuiltinLogo({
  category,
}: {
  category: BuiltinToolCategory;
}) {
  const config = getCategoryConfig(category);
  if (!config) return null;
  const Icon = config.icon;

  return (
    <TemplateToolTooltip label={config.label} description={config.description}>
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-background/80 shadow-sm transition-transform duration-300 ease-out group-hover/card:scale-105"
        style={{ color: config.iconColor }}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </div>
    </TemplateToolTooltip>
  );
}

function getBuiltinToolShortName(category: BuiltinToolCategory): string {
  return getCategoryConfig(category)?.label ?? category;
}

function getTemplateToolCount(template: TemplateOption): number {
  return (
    (template.recommendedBuiltinToolCategories?.length ?? 0) +
    (template.recommendedMcpPresetIds?.length ?? 0) +
    (template.recommendedHttpTemplateIds?.length ?? 0)
  );
}

function TemplateOptionCard({
  template,
  isSelected,
  onSelect,
}: {
  template: TemplateOption;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [showTools, setShowTools] = useState(false);
  const reduceMotion = useReducedMotion();
  const toolCount = getTemplateToolCount(template);

  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  };

  const handleToggleTools = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const avatarVariants = reduceMotion
    ? {
        rest: { opacity: isSelected ? 0.9 : 0.46 },
        hover: { opacity: 0.9 },
      }
    : {
        rest: {
          opacity: isSelected ? 0.9 : 0.4,
          scale: isSelected ? 1.02 : 0.94,
          y: isSelected ? 0 : 3,
          rotate: 0,
        },
        hover: {
          opacity: 1,
          scale: 1.13,
          y: -3,
          rotate: -1.25,
        },
      };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      title={template.label}
      onClick={onSelect}
      onKeyDown={handleCardKeyDown}
      initial={false}
      animate="rest"
      whileHover={reduceMotion ? undefined : "hover"}
      whileFocus={reduceMotion ? undefined : "hover"}
      className={cn(
        "group/card relative z-0 flex h-full min-h-[11rem] cursor-pointer flex-col overflow-visible rounded-xl border p-4 text-left transition-[border-color,background-color,box-shadow] duration-300 ease-out hover:z-10 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/70",
        isSelected
          ? "border-cta bg-cta/10 shadow-[0_0_0_1px_rgba(240,68,56,0.25)]"
          : "border-border/70 bg-background/25 hover:border-foreground/30 hover:bg-background/45",
        isSelected && !showTools && "z-10",
        showTools && "z-20",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="min-w-0 truncate text-sm font-medium leading-tight">
          {template.label}
        </p>
        {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-cta" />}
      </div>
      <p className="mt-2 min-h-[3.75rem] flex-1 text-xs leading-5 text-muted-foreground line-clamp-3">
        {template.description}
      </p>

      <div className="relative mt-3 flex h-20 shrink-0 items-end justify-between gap-2">
        {toolCount > 0 ? (
          <Popover open={showTools} onOpenChange={setShowTools}>
            <PopoverTrigger asChild>
              <button
                type="button"
                onClick={handleToggleTools}
                aria-expanded={showTools}
                aria-controls={`template-tools-${template.id}`}
                className="relative z-20 inline-flex max-w-[calc(100%-5.5rem)] items-center gap-1 rounded-md px-0.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-background/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/70"
              >
                Included tools
                <span className="tabular-nums text-muted-foreground/70">
                  ({toolCount})
                </span>
                <ChevronDown
                  className={cn(
                    "h-3 w-3 shrink-0 transition-transform duration-300 ease-out",
                    showTools && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              id={`template-tools-${template.id}`}
              side="top"
              align="start"
              sideOffset={8}
              collisionPadding={12}
              className="w-[9.25rem] max-w-[9.25rem] p-2"
              onClick={(event) => event.stopPropagation()}
              onOpenAutoFocus={(event) => event.preventDefault()}
            >
              <div
                className="flex flex-wrap gap-1.5"
                aria-label="Included tools"
              >
                {template.recommendedBuiltinToolCategories?.map((category) => (
                  <TemplateBuiltinLogo key={category} category={category} />
                ))}
                {template.recommendedMcpPresetIds?.map((presetId) => {
                  const preset = MCP_PRESET_BY_ID[presetId];
                  if (!preset) return null;
                  return (
                    <TemplateMcpLogo key={presetId} preset={preset} />
                  );
                })}
                {template.recommendedHttpTemplateIds?.map((templateId) => (
                  <TemplateHttpLogo
                    key={templateId}
                    templateId={templateId}
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <span aria-hidden />
        )}

        <div className="relative h-20 w-20 shrink-0 overflow-visible">
          <div
            className={cn(
              "pointer-events-none absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(240,68,56,0.14),transparent_68%)] opacity-0 blur-md transition-opacity duration-300",
              isSelected && "opacity-100",
              "group-hover/card:opacity-100 group-focus-visible/card:opacity-100",
            )}
            aria-hidden
          />
          <motion.div
            variants={avatarVariants}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 20,
              mass: 0.72,
            }}
            className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 origin-bottom-right will-change-transform"
          >
            <Image
              src={template.avatarUrl}
              alt=""
              aria-hidden
              width={128}
              height={128}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function getTemplateToolSummary(template: TemplateOption): string {
  const builtinNames =
    template.recommendedBuiltinToolCategories?.map(getBuiltinToolShortName) ??
    [];
  const mcpNames =
    template.recommendedMcpPresetIds?.map(
      (presetId) =>
        MCP_PRESET_BY_ID[presetId] &&
        getMcpPresetShortName(MCP_PRESET_BY_ID[presetId]),
    ) ?? [];
  const httpNames =
    template.recommendedHttpTemplateIds?.map(
      (templateId) => HTTP_TEMPLATE_BY_ID[templateId]?.name,
    ) ?? [];

  return [...builtinNames, ...mcpNames.filter(Boolean), ...httpNames.filter(Boolean)].join(
    ", ",
  );
}

function getRecommendedMcpPresets(
  template: TemplateOption | undefined,
  requiresAuth: boolean,
): McpPreset[] {
  return (template?.recommendedMcpPresetIds ?? [])
    .map((presetId) => MCP_PRESET_BY_ID[presetId])
    .filter(
      (preset): preset is McpPreset =>
        Boolean(preset) && Boolean(preset.requiresAuth) === requiresAuth,
    );
}

function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function McpPresetButton({
  preset,
  isConnected,
  isRecommended,
  isSelected,
  disabled,
  onSelect,
}: {
  preset: McpPreset;
  isConnected: boolean;
  isRecommended: boolean;
  isSelected: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  const Icon = preset.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled || isConnected}
      aria-pressed={isConnected || isSelected}
      className={`group rounded-xl border p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/70 ${
        isConnected
          ? "cursor-default border-cta/40 bg-cta/5"
          : "cursor-pointer border-border/70 bg-background/25 hover:-translate-y-0.25 hover:border-foreground/10 hover:bg-background/45"
      } ${isSelected && !isConnected ? "border-cta/50 ring-1 ring-cta/40" : ""}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
            isConnected
              ? "bg-cta/15 text-cta"
              : "bg-muted/50 text-muted-foreground group-hover:text-foreground"
          }`}
        >
          {preset.logoUrl ? (
            preset.logoOnWhite === false ? (
              <McpPresetLogoImage
                preset={preset}
                size="md"
                className="h-10 w-10"
              />
            ) : (
              <div
                aria-label={`${preset.name} logo`}
                role="img"
                className="flex h-full w-full items-center justify-center rounded-md bg-white p-1"
              >
                <McpPresetLogoImage preset={preset} size="md" />
              </div>
            )
          ) : (
            <Icon className={preset.iconClassName ?? "h-5 w-5"} />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium">{preset.name}</p>
              {isRecommended && !isConnected && (
                <span className="rounded-full bg-cta/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-cta">
                  Recommended
                </span>
              )}
              {preset.requiresAuth && !isConnected && (
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  API key
                </span>
              )}
            </div>
            {isConnected ? (
              <Check className="h-4 w-4 text-cta" />
            ) : (
              <Plus className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <p className="text-xs leading-5 text-muted-foreground">
            {preset.description}
          </p>
        </div>
      </div>
    </button>
  );
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  return `${(bytes / 1024 ** index).toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

export default function AgentOnboardingPage() {
  const { user, getAccessToken, loading, redirectToLogin } = useAuth();
  const [step, setStep] = useState<StepIndex>(0);
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateId>("custom");
  const [activityDescription, setActivityDescription] = useState("");
  const [useCase, setUseCase] = useState("Custom voice agent");
  const [agentName, setAgentName] = useState("New voice agent");
  const [callType, setCallType] = useState<"inbound" | "outbound">("inbound");
  const [tone, setTone] =
    useState<(typeof TONES)[number]["value"]>("warm and helpful");
  const [language, setLanguage] = useState<LanguageCode>("en-US");
  const [behaviorNotes, setBehaviorNotes] = useState("");
  const [modelConfigurationDefaults, setModelConfigurationDefaults] =
    useState<ModelConfigurationDefaultsV2 | null>(null);
  const [organizationModelConfiguration, setOrganizationModelConfiguration] =
    useState<OrganizationAiModelConfigurationResponse | null>(null);
  const [agentModelConfiguration, setAgentModelConfiguration] =
    useState<OrganizationAiModelConfigurationV2 | null>(null);
  const [modelConfigurationLoading, setModelConfigurationLoading] =
    useState(false);
  const [modelConfigurationLoaded, setModelConfigurationLoaded] =
    useState(false);
  const [modelConfigurationError, setModelConfigurationError] = useState<
    string | null
  >(null);
  const [voiceConfirmed, setVoiceConfirmed] = useState(false);
  const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);
  const [documents, setDocuments] = useState<DocumentResponseSchema[]>([]);
  const [selectedDocumentUuids, setSelectedDocumentUuids] = useState<string[]>(
    [],
  );
  const [documentsLoading, setDocumentsLoading] = useState(true);
  const [documentsError, setDocumentsError] = useState<string | null>(null);
  const [mcpServers, setMcpServers] = useState<McpServerSummary[]>([]);
  const [availableMcpTools, setAvailableMcpTools] = useState<ToolResponse[]>(
    [],
  );
  const [mcpToolsLoading, setMcpToolsLoading] = useState(false);
  const [mcpToolsError, setMcpToolsError] = useState<string | null>(null);
  const [mcpName, setMcpName] = useState("");
  const [mcpDescription, setMcpDescription] = useState("");
  const [mcpUrl, setMcpUrl] = useState("");
  const [mcpToolsFilter, setMcpToolsFilter] = useState("");
  const [mcpCredentialUuid, setMcpCredentialUuid] = useState("");
  const [mcpError, setMcpError] = useState<string | null>(null);
  const [authPresetId, setAuthPresetId] = useState<McpPresetId | null>(null);
  const [presetCredentialUuid, setPresetCredentialUuid] = useState("");
  const [httpTools, setHttpTools] = useState<HttpToolSummary[]>([]);
  const [httpTemplateId, setHttpTemplateId] = useState<HttpTemplateId>(
    "notify-webhook",
  );
  const [httpUrl, setHttpUrl] = useState("");
  const [httpCredentialUuid, setHttpCredentialUuid] = useState("");
  const [httpError, setHttpError] = useState<string | null>(null);
  const [isAddingHttp, setIsAddingHttp] = useState(false);
  const [isAddingMcp, setIsAddingMcp] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const submitting = useRef(false);
  const [pendingTemplate, setPendingTemplate] = useState<TemplateOption | null>(null);
  const [createdWorkflow, setCreatedWorkflow] =
    useState<WorkflowResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preCallFetchUrl, setPreCallFetchUrl] = useState("");
  const [preCallFetchCredentialUuid, setPreCallFetchCredentialUuid] =
    useState("");
  const [postCallWebhookUrl, setPostCallWebhookUrl] = useState("");
  const [postCallWebhookCredentialUuid, setPostCallWebhookCredentialUuid] =
    useState("");

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
        throw new Error(
          detailFromError(response.error, "Could not load your documents."),
        );
      }
      setDocuments(response.data?.documents ?? []);
    } catch (err) {
      setDocuments([]);
      setDocumentsError(
        err instanceof Error ? err.message : "Could not load your documents.",
      );
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
      (document) =>
        document.processing_status === "pending" ||
        document.processing_status === "processing",
    );
    if (step !== 1 || !hasProcessingDocuments) return;

    const pollInterval = window.setInterval(() => {
      void fetchDocuments();
    }, 5000);
    return () => window.clearInterval(pollInterval);
  }, [documents, fetchDocuments, step]);

  const handleDocumentUpload = useCallback(
    async (documentUuid?: string) => {
      if (documentUuid) {
        setSelectedDocumentUuids((current) =>
          current.includes(documentUuid) ? current : [...current, documentUuid],
        );
      }
      await fetchDocuments();
    },
    [fetchDocuments],
  );

  useEffect(() => {
    if (step !== 4 || !user) return;

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
          throw new Error(
            detailFromError(
              response.error,
              "Could not load saved MCP servers.",
            ),
          );
        }
        setAvailableMcpTools(
          (response.data ?? []).filter((tool) => tool.category === "mcp"),
        );
      } catch (err) {
        setAvailableMcpTools([]);
        setMcpToolsError(
          err instanceof Error
            ? err.message
            : "Could not load saved MCP servers.",
        );
      } finally {
        setMcpToolsLoading(false);
      }
    };

    void fetchMcpTools();
  }, [getAccessToken, step, user]);

  useEffect(() => {
    if (step !== 3 || !user || modelConfigurationLoaded) return;

    const loadModelConfiguration = async () => {
      try {
        setModelConfigurationLoading(true);
        setModelConfigurationError(null);
        const [defaultsResult, configurationResult] = await Promise.all([
          getModelConfigurationV2DefaultsApiV1OrganizationsModelConfigurationsV2DefaultsGet(),
          getModelConfigurationV2ApiV1OrganizationsModelConfigurationsV2Get(),
        ]);

        if (defaultsResult.error || !defaultsResult.data) {
          throw new Error(
            detailFromError(
              defaultsResult.error,
              "Could not load available voice providers.",
            ),
          );
        }
        if (configurationResult.error || !configurationResult.data) {
          throw new Error(
            detailFromError(
              configurationResult.error,
              "Could not load your current voice setup.",
            ),
          );
        }

        const defaults = defaultsResult.data as ModelConfigurationDefaultsV2;
        const configuration = configurationResult.data;
        setModelConfigurationDefaults(defaults);
        setOrganizationModelConfiguration(configuration);

        const current = configuration.configuration as
          | OrganizationAiModelConfigurationV2
          | null;
        const currentVoice = getAgentVoiceSelection(current);
        if (currentVoice?.language) {
          const supportedLanguage = LANGUAGES.find(
            (option) => option.value === currentVoice.language,
          );
          if (supportedLanguage) setLanguage(supportedLanguage.value);
        }
        setModelConfigurationLoaded(true);
      } catch (err) {
        setModelConfigurationError(
          err instanceof Error
            ? err.message
            : "Could not load your current voice setup.",
        );
      } finally {
        setModelConfigurationLoading(false);
      }
    };

    void loadModelConfiguration();
  }, [modelConfigurationLoaded, step, user]);

  const selectedTemplateOption = useMemo(
    () => TEMPLATE_OPTIONS.find((template) => template.id === selectedTemplate),
    [selectedTemplate],
  );
  const selectableDocuments = useMemo(
    () =>
      documents.filter(
        (document) =>
          document.processing_status === "completed" ||
          selectedDocumentUuids.includes(document.document_uuid),
      ),
    [documents, selectedDocumentUuids],
  );
  const readyMcpPresets = useMemo(
    () => MCP_PRESETS.filter((preset) => !preset.requiresAuth),
    [],
  );
  const authMcpPresets = useMemo(
    () => MCP_PRESETS.filter((preset) => preset.requiresAuth),
    [],
  );
  const recommendedReadyMcpPresets = useMemo(
    () => getRecommendedMcpPresets(selectedTemplateOption, false),
    [selectedTemplateOption],
  );
  const recommendedAuthMcpPresets = useMemo(
    () => getRecommendedMcpPresets(selectedTemplateOption, true),
    [selectedTemplateOption],
  );
  const selectedAuthPreset = authPresetId
    ? MCP_PRESET_BY_ID[authPresetId]
    : null;
  const selectedHttpTemplate = HTTP_TEMPLATE_BY_ID[httpTemplateId];
  const organizationConfiguration = organizationModelConfiguration
    ?.configuration as OrganizationAiModelConfigurationV2 | null | undefined;
  const activeModelConfiguration =
    agentModelConfiguration ?? organizationConfiguration ?? null;
  const voiceSelection = getAgentVoiceSelection(activeModelConfiguration);
  const unconnectedRecommendedReadyMcpPresets =
    recommendedReadyMcpPresets.filter(
      (preset) => !mcpServers.some((server) => server.url === preset.url),
    );

  useEffect(() => {
    const recommendedId =
      selectedTemplateOption?.recommendedHttpTemplateIds?.[0];
    if (recommendedId) setHttpTemplateId(recommendedId);
  }, [selectedTemplateOption]);

  const applyTemplate = (template: TemplateOption) => {
    setSelectedTemplate(template.id);
    setUseCase(template.useCase);
    if (template.id !== "custom") {
      setActivityDescription(template.activityDescription);
      setAgentName(`${template.label} agent`);
    }
    setPendingTemplate(null);
  };

  const chooseTemplate = (template: TemplateOption) => {
    if (template.id === selectedTemplate) return;
    if (template.id !== "custom" && activityDescription.trim()
      && activityDescription !== selectedTemplateOption?.activityDescription) {
      setPendingTemplate(template);
      return;
    }
    applyTemplate(template);
  };

  const editBrief = (brief: string) => {
    setActivityDescription(brief);
    setSelectedTemplate("custom");
    setUseCase("Custom voice agent");
    setPendingTemplate(null);
    if (agentName === `${selectedTemplateOption?.label} agent`) {
      setAgentName("New voice agent");
    }
  };

  const chooseVoice = (voice: string) => {
    if (!activeModelConfiguration) {
      setModelConfigurationError(
        "Set up an organization model configuration before choosing a voice.",
      );
      return;
    }
    try {
      const normalizedVoice = voice.trim();
      setAgentModelConfiguration(
        updateAgentVoiceSelection(
          activeModelConfiguration,
          normalizedVoice,
          language,
        ),
      );
      setVoiceConfirmed(Boolean(normalizedVoice));
      setModelConfigurationError(null);
    } catch (err) {
      setModelConfigurationError(
        err instanceof Error ? err.message : "The voice could not be selected.",
      );
    }
  };

  const chooseLanguage = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage);
    if (!activeModelConfiguration || !voiceSelection) return;
    try {
      setAgentModelConfiguration(
        updateAgentVoiceSelection(
          activeModelConfiguration,
          voiceSelection.voice,
          nextLanguage,
        ),
      );
    } catch (err) {
      setModelConfigurationError(
        err instanceof Error
          ? err.message
          : "The language could not be selected.",
      );
    }
  };

  const applyAdvancedModelConfiguration = async (
    configuration: OrganizationAiModelConfigurationV2,
  ) => {
    setAgentModelConfiguration(configuration);
    const advancedVoice = getAgentVoiceSelection(configuration);
    setVoiceConfirmed(Boolean(advancedVoice?.voice));
    if (advancedVoice?.language) {
      const supportedLanguage = LANGUAGES.find(
        (option) => option.value === advancedVoice.language,
      );
      if (supportedLanguage) setLanguage(supportedLanguage.value);
    }
    toast.success("Advanced voice settings applied");
  };

  const toggleDocument = (documentUuid: string, checked: boolean) => {
    setSelectedDocumentUuids((current) => {
      if (checked)
        return current.includes(documentUuid)
          ? current
          : [...current, documentUuid];
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
    const credentialUuid = preset
      ? preset.requiresAuth
        ? presetCredentialUuid
        : ""
      : mcpCredentialUuid;
    if (preset?.requiresAuth && !credentialUuid) {
      setAuthPresetId(preset.id);
      setMcpError(
        `Select a credential for ${preset.name} (${preset.authHint ?? "Bearer token"}), then connect.`,
      );
      return;
    }
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
      const existingTool = availableMcpTools.find(
        (tool) => getMcpUrl(tool) === normalizedUrl,
      );
      if (existingTool) {
        setMcpServers((current) =>
          current.some((server) => server.toolUuid === existingTool.tool_uuid)
            ? current
            : [
                ...current,
                {
                  toolUuid: existingTool.tool_uuid,
                  name: existingTool.name,
                  description:
                    existingTool.description ?? (description || "MCP server"),
                  url: normalizedUrl,
                  discoveredToolCount: getDiscoveredToolCount(existingTool),
                  discoveryStatus:
                    getDiscoveredToolCount(existingTool) > 0
                      ? "ready"
                      : "unavailable",
                },
              ],
        );
        toast.success(`${existingTool.name} is already connected`);
        return;
      }
      const response = await createToolApiV1ToolsPost({
        body: {
          name,
          description:
            description || "MCP server connected during agent setup.",
          category: "mcp",
          icon: "puzzle",
          icon_color: "#8B5CF6",
          definition: createMcpDefinition(
            normalizedUrl,
            credentialUuid,
            preset ? "" : mcpToolsFilter,
          ),
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.error || !response.data) {
        throw new Error(
          detailFromError(response.error, "The server could not be saved."),
        );
      }
      const tool: ToolResponse = response.data;
      setAvailableMcpTools((current) => [...current, tool]);
      setMcpServers((current) => [
        ...current,
        {
          toolUuid: tool.tool_uuid,
          name: tool.name,
          description: tool.description ?? "MCP server",
          url: normalizedUrl,
          discoveredToolCount: getDiscoveredToolCount(tool),
          discoveryStatus:
            getDiscoveredToolCount(tool) > 0 ? "ready" : "unavailable",
        },
      ]);
      setMcpName("");
      setMcpDescription("");
      setMcpUrl("");
      setMcpToolsFilter("");
      setMcpCredentialUuid("");
      setPresetCredentialUuid("");
      setAuthPresetId(null);
      if (getDiscoveredToolCount(tool) > 0) {
        toast.success("MCP server saved");
      } else {
        toast.warning("MCP server saved, but no tools were discovered yet");
      }
    } catch (err) {
      setMcpError(
        err instanceof Error ? err.message : "The server could not be saved.",
      );
    } finally {
      setIsAddingMcp(false);
    }
  };

  const removeMcpServer = (toolUuid: string) => {
    setMcpServers((current) => {
      const server = current.find((item) => item.toolUuid === toolUuid);
      if (!server) return current;
      toast.success(`${server.name} removed`);
      return current.filter((item) => item.toolUuid !== toolUuid);
    });
  };

  const addRecommendedMcpServers = async () => {
    const recommendedPresetIds =
      selectedTemplateOption?.recommendedMcpPresetIds ?? [];
    for (const preset of MCP_PRESETS.filter((item) =>
      recommendedPresetIds.includes(item.id),
    )) {
      if (preset.requiresAuth) continue;
      if (mcpServers.some((server) => server.url === preset.url)) continue;
      await addMcpServer(preset);
    }
  };

  const handleSelectMcpPreset = (preset: McpPreset) => {
    if (preset.requiresAuth) {
      if (authPresetId === preset.id && presetCredentialUuid) {
        void addMcpServer(preset);
        return;
      }
      setAuthPresetId(preset.id);
      setMcpError(null);
      return;
    }
    void addMcpServer(preset);
  };

  const addHttpTool = async () => {
    if (!user) {
      setHttpError("Sign in before adding an HTTP API.");
      return;
    }
    const template = HTTP_TEMPLATE_BY_ID[httpTemplateId];
    const url = httpUrl.trim();
    if (!template || !url) {
      setHttpError("Choose a template and enter the API URL.");
      return;
    }
    if (!MCP_URL_PATTERN.test(url)) {
      setHttpError("The API URL must start with http:// or https://.");
      return;
    }

    try {
      setIsAddingHttp(true);
      setHttpError(null);
      const accessToken = await getAccessToken();
      const response = await createToolApiV1ToolsPost({
        body: {
          name: template.name,
          description: template.description,
          category: "http_api",
          icon: "globe",
          icon_color: "#3B82F6",
          definition: createHttpTemplateDefinition(
            template,
            url,
            httpCredentialUuid,
          ),
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.error || !response.data) {
        throw new Error(
          detailFromError(response.error, "The HTTP API could not be saved."),
        );
      }
      const tool = response.data;
      setHttpTools((current) => [
        ...current,
        {
          toolUuid: tool.tool_uuid,
          name: tool.name,
          description: tool.description ?? template.description,
          url,
          templateId: template.id,
        },
      ]);
      setHttpUrl("");
      setHttpCredentialUuid("");
      toast.success("HTTP API saved");
    } catch (err) {
      setHttpError(
        err instanceof Error ? err.message : "The HTTP API could not be saved.",
      );
    } finally {
      setIsAddingHttp(false);
    }
  };

  const removeHttpTool = (toolUuid: string) => {
    setHttpTools((current) => {
      const tool = current.find((item) => item.toolUuid === toolUuid);
      if (!tool) return current;
      toast.success(`${tool.name} removed`);
      return current.filter((item) => item.toolUuid !== toolUuid);
    });
  };

  const canContinue =
    step === 0
      ? activityDescription.trim().length > 0
      : step === 2
        ? agentName.trim().length > 0
        : step === 3
          ? voiceConfirmed && Boolean(voiceSelection?.voice)
        : true;

  const createAgent = async () => {
    if (submitting.current || createdWorkflow) return;
    if (!activityDescription.trim() || !agentName.trim() || pendingTemplate) {
      setError("Review the job description and agent name before creating your agent.");
      return;
    }
    if (!user) {
      setError("You must be signed in to create an agent.");
      return;
    }
    if (!voiceSelection) {
      setError("Choose and confirm a voice before creating the agent.");
      return;
    }
    submitting.current = true;
    try {
      setIsCreating(true);
      setError(null);
      const accessToken = await getAccessToken();
      const workflowStages = selectedTemplateOption?.workflowStages ?? [];
      const onboardingPromptInput = {
        agentName: agentName.trim(),
        useCase: useCase.trim() || "Custom voice agent",
        activityDescription: activityDescription.trim(),
        callType,
        tone,
        language: getLanguageLabel(language),
        voiceProvider: getVoiceProviderLabel(voiceSelection.provider),
        voiceName: voiceSelection.voice,
        behaviorNotes,
        workflowStages,
        connectionInstructions: [
          getMcpUsageInstructions(mcpServers),
          getHttpUsageInstructions(httpTools),
        ],
      } as const;
      const response =
        await createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost({
          body: {
            call_type: callType,
            name: agentName.trim(),
            use_case: useCase.trim() || "Custom voice agent",
            activity_description: buildAgentOnboardingPrompt(
              onboardingPromptInput,
            ),
            onboarding_context: buildAgentOnboardingContext(
              onboardingPromptInput,
            ),
            template_id:
              selectedTemplate === "custom" ? null : selectedTemplate,
            tool_uuids: [
              ...mcpServers.map((server) => server.toolUuid),
              ...httpTools.map((tool) => tool.toolUuid),
            ],
            document_uuids: selectedDocumentUuids,
            workflow_configurations: agentModelConfiguration
              ? {
                  model_configuration_v2_override: agentModelConfiguration,
                }
              : undefined,
            pre_call_fetch_url: preCallFetchUrl.trim() || null,
            pre_call_fetch_credential_uuid:
              preCallFetchUrl.trim()
                ? preCallFetchCredentialUuid || null
                : null,
            post_call_webhook_url: postCallWebhookUrl.trim() || null,
            post_call_webhook_credential_uuid:
              postCallWebhookUrl.trim()
                ? postCallWebhookCredentialUuid || null
                : null,
          },
          headers: { Authorization: `Bearer ${accessToken}` },
        });
      if (response.error || !response.data) {
        throw new Error(
          detailFromError(response.error, "The agent could not be created."),
        );
      }

      setCreatedWorkflow(response.data);
      toast.success("Your agent is ready to shape");
    } catch (err) {
      submitting.current = false;
      setError(
        err instanceof Error ? err.message : "The agent could not be created.",
      );
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
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-green-400">
              Agent created
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {agentName}
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Your first voice agent is ready. Open the editor to hear it,
              refine the conversation, and publish when it feels right.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild className="h-11 px-6">
                <Link
                  href={`/workflow/${createdWorkflow.id}?onboarding=web_call`}
                >
                  Open and test agent <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 px-6">
                <Link href="/overview">Back to overview</Link>
              </Button>
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
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-card/70 p-2 md:hidden">
              <BrandLogo mark className="h-5" />
            </div>
            <div>
              <Link
                href="/overview"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to overview
              </Link>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Build an agent that sounds like you
              </h1>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                A few focused questions are all it takes to get a useful first
                draft.
              </p>
              <Link href="/agent-onboarding/quick" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium hover:underline">
                <Sparkles className="h-3.5 w-3.5" />
                Skip the steps with Quick setup
              </Link>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <span className="font-medium text-foreground">{step + 1}</span>
            <span>/</span>
            <span>{STEPS.length}</span>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_280px] xl:gap-10">
          <Card className="card-weave overflow-hidden">
            <CardHeader className="border-b border-border/60 px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-foreground">
                  Step {String(step + 1).padStart(2, "0")}
                </span>
                <span className="text-border">/</span>
                <span>{STEPS[step]}</span>
              </div>
              <CardTitle className="mt-5 text-2xl leading-tight sm:text-3xl">
                {step === 0 && "What should your agent help with?"}
                {step === 1 && "What should it know from day one?"}
                {step === 2 && "How should it behave?"}
                {step === 3 && "Choose the voice people will hear"}
                {step === 4 && "What should it connect to?"}
                {step === 5 && "Ready to bring it to life?"}
              </CardTitle>
              <CardDescription className="mt-2 max-w-2xl text-base">
                {step === 0 &&
                  "Start with a template or tell us in your own words."}
                {step === 1 &&
                  "Upload the documents and references your agent can use during a call."}
                {step === 2 &&
                  "Give the agent a name and a few guardrails for every conversation."}
                {step === 3 &&
                  "Listen to a few options and pick one. Provider and model controls stay available below when you need them."}
                {step === 4 &&
                  "Connect MCP servers and HTTP APIs now, or leave this step for later."}
                {step === 5 &&
                  "Review the setup, optionally add a caller lookup and hangup webhook, then generate the first workflow."}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-7 px-5 py-6 sm:px-8 sm:py-8">
              {documentsError && (
                <p className="text-sm text-red-300">{documentsError}</p>
              )}
              {mcpToolsError && (
                <p className="text-sm text-red-300">{mcpToolsError}</p>
              )}
              {step === 0 && (
                <div className="space-y-7">
                  <div className="space-y-2">
                    <Label htmlFor="agent-purpose">Describe the job</Label>
                    <Textarea
                      id="agent-purpose"
                      value={activityDescription}
                      onChange={(event) =>
                        editBrief(event.target.value)
                      }
                      placeholder="For example: qualify inbound leads, answer questions about our services, and book a demo when there’s a good fit."
                      rows={5}
                      className="h-36 resize-none overflow-y-auto bg-background/35 text-base leading-7 transition-colors duration-200"
                    />
                    <p className="text-xs text-muted-foreground">
                      This description defines the agent&apos;s job. Editing a template
                      switches to Custom so its old stage suggestions do not override your brief.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium">
                        Or start with a template
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You can change everything in the editor later.
                      </p>
                    </div>
                    {pendingTemplate && (
                      <div className="space-y-3 rounded-lg border border-amber-500/40 p-4" role="region" aria-label="Review replacement template">
                        <p className="font-medium">Replace your brief with {pendingTemplate.label}?</p>
                        <p className="whitespace-pre-wrap text-sm text-muted-foreground">{pendingTemplate.activityDescription}</p>
                        <div className="flex gap-2">
                          <Button type="button" onClick={() => applyTemplate(pendingTemplate)}>Replace brief</Button>
                          <Button type="button" variant="outline" onClick={() => setPendingTemplate(null)}>Keep my brief</Button>
                        </div>
                      </div>
                    )}
                    <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {TEMPLATE_OPTIONS.map((template) => (
                        <TemplateOptionCard
                          key={template.id}
                          template={template}
                          isSelected={selectedTemplate === template.id}
                          onSelect={() => chooseTemplate(template)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-7">
                  <div className="rounded-xl border border-border/70 bg-background/25 p-4 sm:p-5">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta">
                        <UploadCloud className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Add a document</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          PDF, DOCX, TXT, JSON, and Markdown up to 5MB.
                        </p>
                      </div>
                    </div>
                    <DocumentUpload onUploadSuccess={handleDocumentUpload} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium">
                          Choose knowledge for this agent
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Uploads are selected automatically. Add or remove
                          anything before you continue.
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {selectedDocumentUuids.length} selected
                      </span>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-background/25">
                      {documentsLoading ? (
                        <div className="flex items-center gap-2 p-5 text-sm text-muted-foreground">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Loading documents...
                        </div>
                      ) : documentsError ? (
                        <div className="flex flex-col gap-3 p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                          <span>{documentsError}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => void fetchDocuments()}
                          >
                            Try again
                          </Button>
                        </div>
                      ) : selectableDocuments.length === 0 ? (
                        <div className="p-6 text-center">
                          <FileText className="mx-auto h-8 w-8 text-muted-foreground/70" />
                          <p className="mt-3 text-sm font-medium">
                            No documents yet
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            You can skip this step and add knowledge from the
                            editor later.
                          </p>
                        </div>
                      ) : (
                        <div className="divide-y divide-border/60">
                          {selectableDocuments.map((document) => {
                            const isSelected = selectedDocumentUuids.includes(
                              document.document_uuid,
                            );
                            const isProcessing =
                              document.processing_status !== "completed";
                            return (
                              <label
                                key={document.document_uuid}
                                htmlFor={`onboarding-doc-${document.document_uuid}`}
                                className={`flex items-center gap-3 p-4 transition-colors hover:bg-muted/25 ${isSelected ? "bg-cta/5" : ""} ${isProcessing && !isSelected ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
                              >
                                <Checkbox
                                  id={`onboarding-doc-${document.document_uuid}`}
                                  checked={isSelected}
                                  disabled={isProcessing && !isSelected}
                                  onCheckedChange={(checked) =>
                                    toggleDocument(
                                      document.document_uuid,
                                      checked === true,
                                    )
                                  }
                                />
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta">
                                  <FileText className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-medium">
                                    {document.filename}
                                  </p>
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    {formatFileSize(document.file_size_bytes)} ·{" "}
                                    {isProcessing
                                      ? "Processing now"
                                      : document.retrieval_mode ===
                                          "full_document"
                                        ? "Full document"
                                        : "Chunked search"}
                                  </p>
                                </div>
                                {isSelected && (
                                  <Check className="h-4 w-4 text-cta" />
                                )}
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="agent-name">Agent name</Label>
                      <Input
                        id="agent-name"
                        value={agentName}
                        onChange={(event) => setAgentName(event.target.value)}
                        placeholder="e.g. Maya, our front desk agent"
                        className="h-11 bg-background/35"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="call-type">Call direction</Label>
                      <Select
                        value={callType}
                        onValueChange={(value) =>
                          setCallType(value as "inbound" | "outbound")
                        }
                      >
                        <SelectTrigger
                          id="call-type"
                          className="h-11 bg-background/35"
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inbound">
                            Inbound · people call your agent
                          </SelectItem>
                          <SelectItem value="outbound">
                            Outbound · your agent calls people
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium">Choose a tone</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        This shapes the first draft. You can tune it precisely
                        later.
                      </p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-3">
                      {TONES.map((option) => {
                        const isSelected = tone === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => setTone(option.value)}
                            className={`rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/70 ${isSelected ? "border-cta bg-cta/10" : "border-border/70 bg-background/25 hover:border-foreground/30"}`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-medium">
                                {option.label}
                              </span>
                              {isSelected && (
                                <Check className="h-4 w-4 text-cta" />
                              )}
                            </div>
                            <p className="mt-2 text-xs leading-5 text-muted-foreground">
                              {option.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="behavior-notes">
                      Anything else it should always do?
                    </Label>
                    <Textarea
                      id="behavior-notes"
                      value={behaviorNotes}
                      onChange={(event) => setBehaviorNotes(event.target.value)}
                      placeholder="Keep answers under two sentences. Always confirm the caller’s email before booking."
                      className="min-h-28 bg-background/35"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  {modelConfigurationLoading ? (
                    <div className="flex min-h-48 items-center justify-center gap-2 rounded-xl border border-border/70 bg-background/25 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading voices...
                    </div>
                  ) : modelConfigurationError ? (
                    <div className="rounded-xl border border-destructive/40 bg-destructive/10 p-5">
                      <p className="text-sm font-medium text-destructive">
                        Voice setup is unavailable
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {modelConfigurationError}
                      </p>
                      <Button asChild variant="outline" size="sm" className="mt-4">
                        <Link href="/model-configurations">Configure models</Link>
                      </Button>
                    </div>
                  ) : voiceSelection && activeModelConfiguration ? (
                    <>
                      <div className="overflow-hidden rounded-xl border border-cta/30 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--cta)_12%,transparent),transparent_55%)]">
                        <div className="flex flex-col gap-5 p-5 sm:p-6">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta text-cta-foreground shadow-[0_0_24px_rgba(240,68,56,0.24)]">
                              <Volume2 className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="font-medium">
                                  {getVoiceProviderLabel(voiceSelection.provider)}
                                </p>
                                <span className="rounded-full border border-border/70 bg-background/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                                  {getProviderCostLabel(voiceSelection.provider)}
                                </span>
                              </div>
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                Pick a voice you would trust to represent your
                                business. {isCatalogVoiceProvider(voiceSelection.provider)
                                  ? "The first two catalog matches are our recommended starting points."
                                  : "Use the voice ID from your provider; you can switch providers below."}
                              </p>
                            </div>
                          </div>

                          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_220px]">
                            <div className="space-y-2">
                              <Label htmlFor="agent-voice">Agent voice</Label>
                              {isCatalogVoiceProvider(voiceSelection.provider) ? (
                                <div id="agent-voice">
                                  <VoiceSelectorModal
                                    provider={voiceSelection.provider}
                                    model={voiceSelection.model}
                                    value={voiceSelection.voice}
                                    onChange={chooseVoice}
                                    allowManualInput={
                                      voiceSelection.provider !== "dograh" ||
                                      (modelConfigurationDefaults?.dograh
                                        .allow_custom_input ?? false)
                                    }
                                    recommendedCount={2}
                                  />
                                </div>
                              ) : (
                                <Input
                                  id="agent-voice"
                                  value={voiceSelection.voice}
                                  onChange={(event) => chooseVoice(event.target.value)}
                                  placeholder="Enter the provider voice ID"
                                  className="h-11 bg-background/50"
                                />
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="agent-language">Language</Label>
                              <Select
                                value={language}
                                onValueChange={(value) =>
                                  chooseLanguage(value as LanguageCode)
                                }
                              >
                                <SelectTrigger
                                  id="agent-language"
                                  className="h-11 bg-background/50"
                                >
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {LANGUAGES.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            {voiceConfirmed ? (
                              <>
                                <CheckCircle2 className="h-4 w-4 text-green-400" />
                                Voice selected and ready to save with this agent.
                              </>
                            ) : (
                              <>
                                <Sparkles className="h-4 w-4 text-cta" />
                                Open the voice picker and confirm one to continue.
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <Collapsible
                        open={advancedSettingsOpen}
                        onOpenChange={setAdvancedSettingsOpen}
                        className="overflow-hidden rounded-xl border border-border/70 bg-background/20"
                      >
                        <CollapsibleTrigger asChild>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-background/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cta/70 sm:p-5"
                          >
                            <span className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground">
                                <Settings2 className="h-4 w-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-medium">
                                  Advanced model settings
                                </span>
                                <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                                  Optional. Change the voice, transcriber, LLM,
                                  embeddings, or switch to speech-to-speech.
                                </span>
                              </span>
                            </span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 motion-reduce:transition-none",
                                advancedSettingsOpen && "rotate-180",
                              )}
                            />
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2 motion-reduce:animate-none">
                          <div className="space-y-5 border-t border-border/60 p-4 sm:p-5">
                            <div className="rounded-lg border border-border/60 bg-muted/20 p-4 text-xs leading-5 text-muted-foreground">
                              Menace Voice is managed and uses account credits.
                              Speaches is the free, self-hosted provider option;
                              you still cover your own infrastructure. Other BYOK
                              providers may bill usage separately.
                            </div>
                            {modelConfigurationDefaults &&
                              organizationModelConfiguration && (
                                <AIModelConfigurationV2Editor
                                  defaults={modelConfigurationDefaults}
                                  configuration={activeModelConfiguration}
                                  effectiveConfiguration={
                                    agentModelConfiguration
                                      ? null
                                      : organizationModelConfiguration.effective_configuration
                                  }
                                  submitLabel="Apply advanced settings"
                                  onSave={applyAdvancedModelConfiguration}
                                />
                              )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </>
                  ) : (
                    <div className="rounded-xl border border-border/70 bg-background/25 p-5">
                      <p className="text-sm font-medium">
                        Configure a voice provider first
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Your organization does not have a complete voice model
                        setup yet.
                      </p>
                      <Button asChild variant="outline" size="sm" className="mt-4">
                        <Link href="/model-configurations">Configure models</Link>
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-7">
                  {selectedTemplateOption &&
                    getTemplateToolSummary(selectedTemplateOption) && (
                    <div className="flex flex-col gap-3 rounded-xl border border-cta/30 bg-cta/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          Recommended for {selectedTemplateOption.label}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          Built-in tools such as{" "}
                          {selectedTemplateOption.recommendedBuiltinToolCategories
                            ?.map(getBuiltinToolShortName)
                            .join(", ") || "End Call"}{" "}
                          are attached automatically when you create the agent.
                          {unconnectedRecommendedReadyMcpPresets.length
                            ? ` Add ${joinNames(
                                unconnectedRecommendedReadyMcpPresets.map(
                                  getMcpPresetShortName,
                                ),
                              )} in one click.`
                            : ""}
                          {recommendedAuthMcpPresets.length
                            ? ` Connect ${joinNames(
                                recommendedAuthMcpPresets.map(
                                  getMcpPresetShortName,
                                ),
                              )} with an API key.`
                            : ""}
                          {selectedTemplateOption.recommendedHttpTemplateIds
                            ?.length
                            ? ` Paste a URL to add ${joinNames(
                                selectedTemplateOption.recommendedHttpTemplateIds.map(
                                  (templateId) =>
                                    HTTP_TEMPLATE_BY_ID[templateId]?.name ??
                                    templateId,
                                ),
                              )}.`
                            : ""}
                        </p>
                      </div>
                      {unconnectedRecommendedReadyMcpPresets.length ? (
                        <Button
                          type="button"
                          variant="outline"
                          className="shrink-0"
                          onClick={() => void addRecommendedMcpServers()}
                          disabled={isAddingMcp || mcpToolsLoading}
                        >
                          <Plus className="h-4 w-4" />
                          Add recommended MCP servers
                        </Button>
                      ) : null}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Ready to use</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        These hosted MCP servers work without an API key.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {readyMcpPresets.map((preset) => (
                        <McpPresetButton
                          key={preset.id}
                          preset={preset}
                          isConnected={mcpServers.some(
                            (server) => server.url === preset.url,
                          )}
                          isRecommended={Boolean(
                            selectedTemplateOption?.recommendedMcpPresetIds?.includes(
                              preset.id,
                            ),
                          )}
                          isSelected={false}
                          disabled={isAddingMcp || mcpToolsLoading}
                          onSelect={() => handleSelectMcpPreset(preset)}
                        />
                      ))}
                    </div>
                    {mcpToolsLoading && (
                      <p className="text-xs text-muted-foreground">
                        Checking your saved MCP servers...
                      </p>
                    )}
                    {mcpToolsError && (
                      <p className="text-xs text-amber-300">
                        {mcpToolsError} You can still add a new server below.
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Needs an API key</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Save a Bearer token credential, then connect. Discovery
                        will fail until the key is present.
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {authMcpPresets.map((preset) => (
                        <McpPresetButton
                          key={preset.id}
                          preset={preset}
                          isConnected={mcpServers.some(
                            (server) => server.url === preset.url,
                          )}
                          isRecommended={Boolean(
                            selectedTemplateOption?.recommendedMcpPresetIds?.includes(
                              preset.id,
                            ),
                          )}
                          isSelected={authPresetId === preset.id}
                          disabled={isAddingMcp || mcpToolsLoading}
                          onSelect={() => handleSelectMcpPreset(preset)}
                        />
                      ))}
                    </div>
                    {selectedAuthPreset && (
                      <div className="rounded-xl border border-cta/30 bg-cta/5 p-4 sm:p-5">
                        <p className="font-medium">
                          Connect {selectedAuthPreset.name}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {selectedAuthPreset.authHint ??
                            "Use a Bearer token credential for this server."}
                        </p>
                        <div className="mt-4 space-y-4">
                          <CredentialSelector
                            value={presetCredentialUuid}
                            onChange={setPresetCredentialUuid}
                            label="Credential"
                            description="Required before this MCP server can be discovered."
                          />
                          {mcpError && (
                            <p className="text-sm text-red-300">{mcpError}</p>
                          )}
                          <div className="flex flex-wrap gap-2">
                            <Button
                              type="button"
                              onClick={() =>
                                void addMcpServer(selectedAuthPreset)
                              }
                              disabled={
                                isAddingMcp || !presetCredentialUuid
                              }
                            >
                              <Plus className="h-4 w-4" />
                              {isAddingMcp
                                ? "Connecting..."
                                : `Connect ${getMcpPresetShortName(selectedAuthPreset)}`}
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              onClick={() => {
                                setAuthPresetId(null);
                                setPresetCredentialUuid("");
                                setMcpError(null);
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border border-border/70 bg-background/25 p-4 sm:p-5">
                    <div className="mb-5 flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Call your own APIs</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          Add a webhook, record lookup, or lead capture endpoint
                          the agent can call during the conversation.
                        </p>
                      </div>
                    </div>
                    {selectedTemplateOption?.recommendedHttpTemplateIds
                      ?.length ? (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {selectedTemplateOption.recommendedHttpTemplateIds.map(
                          (templateId) => {
                            const template = HTTP_TEMPLATE_BY_ID[templateId];
                            if (!template) return null;
                            const isActive = httpTemplateId === templateId;
                            return (
                              <button
                                key={templateId}
                                type="button"
                                onClick={() => setHttpTemplateId(templateId)}
                                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                                  isActive
                                    ? "border-cta/40 bg-cta/10 text-cta"
                                    : "border-border/70 bg-background/40 text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {template.name}
                              </button>
                            );
                          },
                        )}
                      </div>
                    ) : null}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="http-template">Template</Label>
                        <Select
                          value={httpTemplateId}
                          onValueChange={(value) =>
                            setHttpTemplateId(value as HttpTemplateId)
                          }
                        >
                          <SelectTrigger
                            id="http-template"
                            className="bg-background/35"
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {HTTP_TEMPLATES.map((template) => (
                              <SelectItem key={template.id} value={template.id}>
                                {template.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="http-url">API URL</Label>
                        <Input
                          id="http-url"
                          value={httpUrl}
                          onChange={(event) => setHttpUrl(event.target.value)}
                          placeholder={
                            selectedHttpTemplate?.urlPlaceholder ??
                            "https://api.example.com/endpoint"
                          }
                          className="bg-background/35"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <p className="text-sm text-muted-foreground">
                          {selectedHttpTemplate?.description} Uses{" "}
                          {selectedHttpTemplate?.method} with{" "}
                          {selectedHttpTemplate?.parameters
                            .map((parameter) => parameter.name)
                            .join(", ")}
                          .
                        </p>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <CredentialSelector
                          value={httpCredentialUuid}
                          onChange={setHttpCredentialUuid}
                          label="Authentication"
                          description="Optional credentials for this HTTP API."
                        />
                      </div>
                    </div>
                    {httpError && (
                      <p className="mt-4 text-sm text-red-300">{httpError}</p>
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-5"
                      onClick={() => void addHttpTool()}
                      disabled={isAddingHttp}
                    >
                      <Plus className="h-4 w-4" />
                      {isAddingHttp ? "Saving API..." : "Add HTTP API"}
                    </Button>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-background/25 p-4 sm:p-5">
                    <div className="mb-5 flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta">
                        <Puzzle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Connect a custom MCP server
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          Bring your own tools for customer records, scheduling,
                          internal search, or anything else your agent needs.
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="mcp-name">Server name</Label>
                        <Input
                          id="mcp-name"
                          value={mcpName}
                          onChange={(event) => setMcpName(event.target.value)}
                          placeholder="e.g. CRM tools"
                          className="bg-background/35"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mcp-url">Server URL</Label>
                        <Input
                          id="mcp-url"
                          value={mcpUrl}
                          onChange={(event) => setMcpUrl(event.target.value)}
                          placeholder="https://your-server.com/mcp"
                          className="bg-background/35"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="mcp-description">
                          What can it do?{" "}
                          <span className="font-normal text-muted-foreground">
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="mcp-description"
                          value={mcpDescription}
                          onChange={(event) =>
                            setMcpDescription(event.target.value)
                          }
                          placeholder="Look up customers and update lead status"
                          className="bg-background/35"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <CredentialSelector
                          value={mcpCredentialUuid}
                          onChange={setMcpCredentialUuid}
                          label="Authentication"
                          description="Optional credentials for this MCP server."
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="mcp-tools">
                          Limit exposed tools{" "}
                          <span className="font-normal text-muted-foreground">
                            (optional, comma separated)
                          </span>
                        </Label>
                        <Input
                          id="mcp-tools"
                          value={mcpToolsFilter}
                          onChange={(event) =>
                            setMcpToolsFilter(event.target.value)
                          }
                          placeholder="search_customer, update_lead"
                          className="bg-background/35"
                        />
                      </div>
                    </div>
                    {mcpError && !selectedAuthPreset && (
                      <p className="mt-4 text-sm text-red-300">{mcpError}</p>
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-5"
                      onClick={() => void addMcpServer()}
                      disabled={isAddingMcp}
                    >
                      <Plus className="h-4 w-4" />
                      {isAddingMcp ? "Saving server..." : "Add custom server"}
                    </Button>
                  </div>

                  {(mcpServers.length > 0 || httpTools.length > 0) && (
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">
                          Connected for this agent
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          These reusable tools will be attached to every
                          conversational node in the new agent.
                        </p>
                      </div>
                      <div className="space-y-2">
                        {mcpServers.map((server) => (
                          <div
                            key={server.toolUuid}
                            className={`flex items-center gap-3 rounded-xl border p-4 ${server.discoveryStatus === "ready" ? "border-cta/30 bg-cta/5" : "border-amber-500/30 bg-amber-500/5"}`}
                          >
                            <ToolLogo
                              tool={{
                                category: "mcp",
                                name: server.name,
                                definition: { type: "mcp", config: { url: server.url } },
                                icon_color: null,
                              }}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium">
                                {server.name}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {server.url}
                                {server.discoveryStatus === "ready"
                                  ? ` · ${server.discoveredToolCount} tools found`
                                  : " · no tools discovered yet"}
                              </p>
                            </div>
                            {server.discoveryStatus === "ready" ? (
                              <Check className="h-4 w-4 shrink-0 text-cta" />
                            ) : (
                              <span className="shrink-0 text-xs text-amber-300">
                                Needs attention
                              </span>
                            )}
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
                              aria-label={`Remove ${server.name}`}
                              onClick={() => removeMcpServer(server.toolUuid)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        {httpTools.map((tool) => (
                          <div
                            key={tool.toolUuid}
                            className="flex items-center gap-3 rounded-xl border border-cta/30 bg-cta/5 p-4"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                              <Globe className="h-4 w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium">
                                {tool.name}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {tool.url}
                              </p>
                            </div>
                            <Check className="h-4 w-4 shrink-0 text-cta" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
                              aria-label={`Remove ${tool.name}`}
                              onClick={() => removeHttpTool(tool.toolUuid)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {step === 5 && (
                <div className="space-y-5">
                  <section aria-label="Job brief to create" className="rounded-xl border border-cta/40 bg-cta/5 p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h2 className="font-semibold">Job brief used to create your agent</h2>
                      <Button type="button" variant="outline" size="sm" disabled={isCreating} onClick={() => setStep(0)}>Edit brief</Button>
                    </div>
                    <p className="whitespace-pre-wrap break-words text-sm leading-7">{activityDescription.trim()}</p>
                    <p className="mt-3 text-xs text-muted-foreground">This exact brief is submitted with your settings below. Suggested stages come from {selectedTemplateOption?.label ?? "Custom"}; Custom lets the brief determine its own stages.</p>
                  </section>
                  <div className="grid gap-3 lg:grid-cols-2">
                    <div className="rounded-xl border border-border/70 bg-background/25 p-4 sm:p-5">
                      <div className="mb-4 flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">Look up the caller first</p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            Optional. Before the greeting, we POST the caller and
                            called numbers to your API and merge the JSON into
                            the first turn.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="pre-call-url">Lookup URL</Label>
                          <Input
                            id="pre-call-url"
                            value={preCallFetchUrl}
                            onChange={(event) =>
                              setPreCallFetchUrl(event.target.value)
                            }
                            placeholder="https://api.example.com/customer-lookup"
                            className="bg-background/35"
                          />
                        </div>
                        <CredentialSelector
                          value={preCallFetchCredentialUuid}
                          onChange={setPreCallFetchCredentialUuid}
                          label="Authentication"
                          description="Optional credential for the lookup request."
                        />
                      </div>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-background/25 p-4 sm:p-5">
                      <div className="mb-4 flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cta/10 text-cta">
                          <Link2 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Send results when the call ends
                          </p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            Optional. Adds a webhook node that POSTs the recap,
                            disposition, and recording after hangup.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="post-call-url">Webhook URL</Label>
                          <Input
                            id="post-call-url"
                            value={postCallWebhookUrl}
                            onChange={(event) =>
                              setPostCallWebhookUrl(event.target.value)
                            }
                            placeholder="https://hooks.example.com/voice-summary"
                            className="bg-background/35"
                          />
                        </div>
                        <CredentialSelector
                          value={postCallWebhookCredentialUuid}
                          onChange={setPostCallWebhookCredentialUuid}
                          label="Authentication"
                          description="Optional credential for the hangup webhook."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-border/70 bg-background/25 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Purpose
                      </p>
                      <p className="mt-2 font-medium">
                        {selectedTemplateOption?.label ?? "Custom agent"}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {useCase}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-background/25 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Identity
                      </p>
                      <p className="mt-2 font-medium">{agentName}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {callType} · {getLanguageLabel(language)}
                      </p>
                      {voiceSelection && (
                        <p className="mt-1 truncate text-sm text-muted-foreground">
                          {getVoiceProviderLabel(voiceSelection.provider)} ·{" "}
                          {voiceSelection.voice}
                        </p>
                      )}
                    </div>
                    <div className="rounded-xl border border-border/70 bg-background/25 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Knowledge
                      </p>
                      <p className="mt-2 font-medium">
                        {selectedDocumentUuids.length
                          ? `${selectedDocumentUuids.length} document${selectedDocumentUuids.length === 1 ? "" : "s"} connected`
                          : "No documents connected"}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You can add more in the editor.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-background/25 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Connections
                      </p>
                      <p className="mt-2 font-medium">
                        {mcpServers.length || httpTools.length
                          ? [
                              mcpServers.length
                                ? `${mcpServers.length} MCP server${mcpServers.length === 1 ? "" : "s"}`
                                : null,
                              httpTools.length
                                ? `${httpTools.length} HTTP API${httpTools.length === 1 ? "" : "s"}`
                                : null,
                            ]
                              .filter(Boolean)
                              .join(" · ")
                          : "No extra connections"}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Built-in tools from the template are added automatically.
                        {preCallFetchUrl.trim() || postCallWebhookUrl.trim()
                          ? ` ${[
                              preCallFetchUrl.trim() ? "caller lookup" : null,
                              postCallWebhookUrl.trim()
                                ? "hangup webhook"
                                : null,
                            ]
                              .filter(Boolean)
                              .join(" and ")} will be configured on create.`
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-cta/30 bg-cta/5 p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cta text-cta-foreground">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">
                          You’re ready for the first draft
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          We’ll generate the workflow, connect the resources you
                          selected, and take you straight to the editor to test
                          it.
                        </p>
                      </div>
                    </div>
                  </div>
                  {error && <p className="text-sm text-red-300">{error}</p>}
                </div>
              )}
            </CardContent>

            <div className="flex flex-col-reverse gap-3 border-t border-border/60 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <Button
                type="button"
                variant="ghost"
                onClick={() =>
                  setStep((current) =>
                    current === 0 ? 0 : ((current - 1) as StepIndex),
                  )
                }
                disabled={step === 0 || isCreating}
                className="justify-start text-muted-foreground hover:text-foreground sm:px-0"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div className="flex items-center justify-end gap-3">
                {step > 0 && step < 5 && step !== 3 && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() =>
                      setStep((current) => (current + 1) as StepIndex)
                    }
                    disabled={isCreating}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Skip for now
                  </Button>
                )}
                {step < 5 ? (
                  <Button
                    type="button"
                    onClick={() =>
                      setStep((current) => (current + 1) as StepIndex)
                    }
                    disabled={!canContinue || isCreating || Boolean(pendingTemplate)}
                    className="h-11 px-5"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={() => void createAgent()}
                    disabled={isCreating}
                    className="h-11 min-w-36 px-5"
                  >
                    {isCreating ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        Create agent <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </Card>

          <aside className="lg:pt-2">
            <Card className="card-weave lg:sticky lg:top-24">
              <CardHeader className="px-5 pb-4 pt-5">
                <CardTitle className="text-lg">Your build</CardTitle>
                <CardDescription>
                  Shape the essentials, then refine the details in the editor.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pb-6">
                <div className="mb-6 h-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-cta transition-all duration-300"
                    style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
                <ol className="space-y-1">
                  {STEPS.map((stepLabel, index) => {
                    const isCurrent = index === step;
                    const isComplete = index < step;
                    return (
                      <li
                        key={stepLabel}
                        className="flex items-center gap-3 py-2.5"
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-colors ${isCurrent ? "border-cta bg-cta text-cta-foreground" : isComplete ? "border-cta/50 bg-cta/10 text-cta" : "border-border/80 text-muted-foreground"}`}
                        >
                          {isComplete ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <span
                          className={`text-sm ${isCurrent ? "font-medium text-foreground" : "text-muted-foreground"}`}
                        >
                          {stepLabel}
                        </span>
                      </li>
                    );
                  })}
                </ol>
                <div className="mt-6 border-t border-border/60 pt-5 text-xs leading-5 text-muted-foreground">
                  Optional steps can be finished later from your agent editor.
                  Voice is saved with the agent you create.
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
