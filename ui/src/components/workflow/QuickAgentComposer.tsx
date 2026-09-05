"use client";

import { ArrowUp, CalendarDays, Loader2, PhoneIncoming, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useId, useRef, useState } from "react";

import {
  buildAgentOnboardingContext,
  buildAgentOnboardingPrompt,
} from "@/app/agent-onboarding/agent-prompt";
import {
  getAgentVoiceSelection,
  getVoiceProviderLabel,
} from "@/app/agent-onboarding/voice-configuration";
import {
  createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost,
  getModelConfigurationV2ApiV1OrganizationsModelConfigurationsV2Get,
} from "@/client/sdk.gen";
import type { OrganizationAiModelConfigurationV2 } from "@/client/types.gen";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { detailFromError } from "@/lib/apiError";
import { useAuth } from "@/lib/auth";

const EXAMPLES = [
  { label: "Receptionist", icon: PhoneIncoming, callType: "inbound", brief: "A friendly receptionist for my business. Answer common questions, collect the caller’s name and reason for calling, and take a message for the right person." },
  { label: "Qualify leads", icon: Users, callType: "outbound", brief: "A helpful sales assistant who calls new leads, asks about their needs and timeline, and collects details for a follow-up with our team." },
  { label: "Bookings", icon: CalendarDays, callType: "inbound", brief: "A warm assistant who helps callers request an appointment. Collect their preferred date, service, and contact details, then explain that our team will confirm availability." },
] as const;

export function QuickAgentComposer() {
  const router = useRouter();
  const { user, loading, getAccessToken, redirectToLogin } = useAuth();
  const [description, setDescription] = useState("");
  const [callType, setCallType] = useState<"inbound" | "outbound">("inbound");
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitting = useRef(false);
  const descriptionId = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!loading && !user) redirectToLogin();
  }, [loading, redirectToLogin, user]);

  const createAgent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const brief = description.trim();
    if (submitting.current || loading || !user || !brief) return;
    submitting.current = true;
    setIsCreating(true);
    setError(null);

    try {
      const accessToken = await getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      const configurationResult =
        await getModelConfigurationV2ApiV1OrganizationsModelConfigurationsV2Get({ headers });
      if (configurationResult.error || !configurationResult.data) {
        throw new Error(detailFromError(configurationResult.error, "Could not load your workspace voice. Please try again."));
      }
      const voice = getAgentVoiceSelection(
        configurationResult.data.configuration as OrganizationAiModelConfigurationV2 | null,
      );
      if (!voice) {
        throw new Error("Your workspace needs a voice configuration. Choose one in guided setup, then create your agent.");
      }

      const input = {
        agentName: "Use the identity in the brief, or choose a suitable agent name",
        useCase: "Custom voice agent based on the user's brief",
        activityDescription: brief,
        callType,
        tone: "natural and helpful; follow any tone specified in the brief",
        language: voice.language || "English",
        voiceProvider: getVoiceProviderLabel(voice.provider),
        voiceName: voice.voice,
        behaviorNotes: "Follow the identity, spoken language, and behavior requested in the brief. Only use capabilities actually connected to this agent; collect details for follow-up when a required tool is unavailable.",
        workflowStages: [
          "Establish the caller's intent and collect the initial context needed for the job described in the brief.",
          "Carry out the core job in the brief, gathering missing details and using only available knowledge and connected tools.",
          "Confirm the actual outcome and agreed next steps, then close the conversation naturally.",
        ],
      } as const;
      const response = await createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost({
        headers,
        body: {
          call_type: callType,
          use_case: input.useCase,
          activity_description: buildAgentOnboardingPrompt(input),
          onboarding_context: buildAgentOnboardingContext(input),
        },
      });
      if (response.error || !response.data) {
        throw new Error(detailFromError(response.error, "Your agent could not be created. Please try again."));
      }

      router.push(`/workflow/${response.data.id}?onboarding=web_call`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your agent could not be created. Please try again.");
      submitting.current = false;
      setIsCreating(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="flex min-h-36 items-center justify-center gap-2 text-sm text-muted-foreground" role="status">
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        Preparing quick setup…
      </div>
    );
  }

  return (
        <form onSubmit={createAgent} aria-label="Quick agent setup" aria-busy={isCreating}>
          <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-background/80 shadow-sm transition-[border-color,box-shadow] focus-within:border-cta/50 focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--cta)_8%,transparent)] dark:bg-background/40">
            <label htmlFor={descriptionId} className="sr-only">Describe your agent</label>
            <Textarea
              id={descriptionId}
              ref={textareaRef}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && (event.metaKey || event.ctrlKey) && !event.nativeEvent.isComposing) {
                  event.preventDefault();
                  event.currentTarget.form?.requestSubmit();
                }
              }}
              placeholder="A friendly receptionist for my business who answers questions, takes messages, and arranges callbacks…"
              aria-describedby={`${descriptionId}-defaults`}
              required
              maxLength={8000}
              disabled={isCreating}
              className="min-h-36 w-full resize-y rounded-none border-0 bg-transparent p-4 text-base leading-7 shadow-none placeholder:text-muted-foreground/80 focus-visible:ring-0 dark:bg-transparent sm:p-5 md:text-base"
            />
            <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-border/60 bg-muted/20 p-3 sm:px-4">
              <fieldset disabled={isCreating} className="relative grid min-w-0 grid-cols-2 gap-1 rounded-lg border border-border/50 bg-muted/50 p-1 sm:w-fit">
                <legend className="sr-only">Call direction</legend>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-1 left-1 rounded-md bg-background shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  style={{
                    width: "calc((100% - 0.75rem) / 2)",
                    transform: callType === "inbound" ? "translateX(0)" : "translateX(calc(100% + 0.25rem))",
                  }}
                />
                {(["inbound", "outbound"] as const).map((direction) => (
                  <label key={direction} className="relative min-w-0 cursor-pointer">
                    <input type="radio" name="call-direction" value={direction} checked={callType === direction} onChange={() => setCallType(direction)} className="peer sr-only" />
                    <span className="flex min-h-9 items-center justify-center rounded-md px-2 text-xs font-medium capitalize text-muted-foreground transition-colors peer-checked:text-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-disabled:cursor-default sm:px-4">
                      {direction}
                    </span>
                  </label>
                ))}
              </fieldset>
              <Button type="submit" size="icon" title={isCreating ? "Creating agent" : "Create agent"} disabled={isCreating || !description.trim()} className="size-11 rounded-xl bg-cta text-cta-foreground shadow-sm shadow-cta/15 hover:bg-cta/90 disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100 sm:w-auto sm:px-4">
                <span className="sr-only sm:not-sr-only">{isCreating ? "Creating…" : "Create agent"}</span>
                {isCreating ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <ArrowUp className="size-4" aria-hidden="true" />}
              </Button>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2" aria-label="Example agent descriptions">
            {EXAMPLES.map((example) => (
              <button key={example.label} type="button" disabled={isCreating} onClick={() => {
                setDescription(example.brief);
                setCallType(example.callType);
                textareaRef.current?.focus();
              }} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border/70 bg-background/40 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50">
                <example.icon className="size-3.5 shrink-0" aria-hidden="true" />
                {example.label}
              </button>
            ))}
          </div>
          {error && <p role="alert" className="mt-3 text-sm text-destructive">{error}</p>}
          <p id={`${descriptionId}-defaults`} role="status" className="mt-4 text-xs leading-5 text-muted-foreground">
            {isCreating
              ? "Building your agent and connecting its conversation. This may take a moment."
              : "Uses your workspace voice. You can edit everything."}
          </p>
        </form>

  );
}
