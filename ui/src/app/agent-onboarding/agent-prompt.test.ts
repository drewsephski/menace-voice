import { describe, expect, it } from "vitest";

import {
  type AgentOnboardingPromptInput,
  buildAgentOnboardingContext,
  buildAgentOnboardingPrompt,
} from "./agent-prompt";

const baseInput: AgentOnboardingPromptInput = {
  agentName: "Maya",
  useCase: "Appointment scheduling",
  activityDescription:
    "Book a haircut after checking the caller's preferred day and stylist.",
  callType: "outbound",
  tone: "warm and helpful",
  language: "English (US)",
  voiceProvider: "Menace Voice",
  voiceName: "ember",
  behaviorNotes: "Keep every answer under two sentences.",
  workflowStages: [
    "Confirm the right person and why the appointment is needed.",
    "Check the calendar and agree on an available time.",
    "Read back the booking details and close.",
  ],
};

describe("agent onboarding prompt", () => {
  it("keeps the user's configuration explicit and plans a task-specific layout", () => {
    const prompt = buildAgentOnboardingPrompt(baseInput);

    expect(prompt).toContain("Agent identity: Maya");
    expect(prompt).toContain("Call direction: outbound");
    expect(prompt).toContain("Spoken language: English (US)");
    expect(prompt).toContain("Tone: warm and helpful");
    expect(prompt).toContain("Runtime voice: Menace Voice / ember");
    expect(prompt).toContain("one to eight task-specific Agent nodes");
    expect(prompt).toContain("Template suggestions are starting points");
    expect(prompt).toContain("exactly one Global node");
    expect(prompt).toContain(baseInput.workflowStages[1]);
  });

  it("lets a custom brief determine its own stages without generic defaults", () => {
    const input = { ...baseInput, workflowStages: [] };
    expect(buildAgentOnboardingContext(input).workflow_stages).toEqual([]);
    expect(buildAgentOnboardingPrompt(input)).toContain("Derive the stages");
    expect(buildAgentOnboardingPrompt(input)).not.toContain("exactly three");
  });

  it("preserves a variable number of nonempty template suggestions", () => {
    const workflowStages = [" Assess need ", "", "Check eligibility", "Find availability", "Confirm booking"];
    expect(buildAgentOnboardingContext({ ...baseInput, workflowStages }).workflow_stages)
      .toEqual(["Assess need", "Check eligibility", "Find availability", "Confirm booking"]);
  });

  it("prevents internal opening strategy from becoming spoken copy", () => {
    const prompt = buildAgentOnboardingPrompt({
      ...baseInput,
      activityDescription:
        "Make a silly prank call to me about my suspiciously organized sock drawer.",
    });

    expect(prompt).toContain("actual caller-facing opening");
    expect(prompt).toContain("Never tell the caller");
    expect(prompt).toContain("internal goals, not text to quote");
    expect(prompt).toContain("Respect a clear refusal");
  });

  it("builds the structured context used to harden generated node prompts", () => {
    expect(buildAgentOnboardingContext(baseInput)).toEqual({
      agent_brief: baseInput.activityDescription,
      tone: "warm and helpful",
      language: "English (US)",
      voice_provider: "Menace Voice",
      voice_name: "ember",
      behavior_notes: "Keep every answer under two sentences.",
      workflow_stages: [...baseInput.workflowStages],
    });
  });
});
