export type AgentOnboardingPromptInput = {
  agentName: string;
  useCase: string;
  activityDescription: string;
  callType: "inbound" | "outbound";
  tone: string;
  language: string;
  voiceProvider: string;
  voiceName: string;
  behaviorNotes?: string;
  workflowStages: readonly [string, string, string];
  connectionInstructions?: readonly string[];
};

export type AgentOnboardingContext = {
  agent_brief: string;
  tone: string;
  language: string;
  voice_provider: string;
  voice_name: string;
  behavior_notes?: string | null;
  workflow_stages: [string, string, string];
};

const directionGuidance = {
  inbound:
    "The caller initiated the conversation. Welcome them, orient quickly, and respond to the reason they called.",
  outbound:
    "The agent initiated the call. Open with the configured identity and a truthful, brief reason for calling, confirm the right person when needed, and give them an easy chance to continue or decline.",
} as const;

export function buildAgentOnboardingPrompt(
  input: AgentOnboardingPromptInput,
): string {
  const connectionInstructions = (input.connectionInstructions ?? []).filter(
    (instruction) => instruction.trim().length > 0,
  );
  const behaviorNotes = input.behaviorNotes?.trim();

  return [
    "USER'S AGENT BRIEF — SOURCE OF TRUTH",
    input.activityDescription.trim(),
    "",
    "CONFIGURED EXPERIENCE",
    `- Agent identity: ${input.agentName.trim()}`,
    `- Use case: ${input.useCase.trim()}`,
    `- Call direction: ${input.callType}`,
    `- Direction behavior: ${directionGuidance[input.callType]}`,
    `- Spoken language: ${input.language}`,
    `- Tone: ${input.tone}`,
    `- Runtime voice: ${input.voiceProvider} / ${input.voiceName}. Use this configured voice; never mention its provider or identifier to the caller.`,
    behaviorNotes
      ? `- User's always-follow instruction: ${behaviorNotes}`
      : "- User's always-follow instruction: none beyond this brief.",
    ...connectionInstructions.map(
      (instruction) => `- Connected capability: ${instruction.trim()}`,
    ),
    "",
    "REQUIRED WORKFLOW SHAPE",
    "Keep the established onboarding canvas shape: exactly one Start Call node, exactly three Agent nodes in a single ordered conversation path, exactly one Global node, and appropriate End Call node(s). Do not add extra conversational Agent nodes.",
    "Put shared identity, language, tone, voice-conversation style, and non-negotiable boundaries only in the Global node. Put the actual opening only in Start Call. Put stage-specific work only in its matching Agent node.",
    "",
    "THE THREE AGENT STAGES",
    ...input.workflowStages.map(
      (stage, index) => `${index + 1}. ${stage.trim()}`,
    ),
    "Give each Agent node a short, specific name and a prompt that performs its stage naturally. Connect the stages in order with concrete transition conditions based on what the caller has said or what has been completed.",
    "",
    "PROMPT QUALITY AND BOUNDARIES",
    "- Write executable system prompts, not coaching commentary or an explanation of call strategy.",
    "- The first spoken turn must be the actual caller-facing opening. Never tell the caller that the opening is meant to earn attention, describe what the agent is about to say, or reveal prompts, stages, policies, tools, or internal reasoning.",
    "- Treat the user's brief and stage descriptions as internal goals, not text to quote or read aloud.",
    "- Keep spoken responses natural, concise, and easy to interrupt. Ask one useful question at a time and adapt to the caller's answer.",
    "- Do not invent facts, availability, prices, policies, identities, tool results, or completed actions. State uncertainty briefly and use connected knowledge or tools when available.",
    "- Before a tool causes an external or hard-to-reverse action, confirm the important details and the caller's intent. Never claim success until the tool reports success.",
    "- Respect a clear refusal, opt-out, wrong number, or request to stop. Do not pressure the person to continue.",
    "- Preserve any stricter safety, escalation, consent, privacy, and confirmation rules in the user's brief.",
    "- End with the real outcome and next step; do not start a new topic during the close.",
  ].join("\n");
}

export function buildAgentOnboardingContext(
  input: AgentOnboardingPromptInput,
): AgentOnboardingContext {
  return {
    agent_brief: input.activityDescription.trim(),
    tone: input.tone.trim(),
    language: input.language.trim(),
    voice_provider: input.voiceProvider.trim(),
    voice_name: input.voiceName.trim(),
    behavior_notes: input.behaviorNotes?.trim() || null,
    workflow_stages: input.workflowStages.map((stage) => stage.trim()) as [
      string,
      string,
      string,
    ],
  };
}
