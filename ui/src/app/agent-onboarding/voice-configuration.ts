import type { OrganizationAiModelConfigurationV2 } from "@/client/types.gen";

export type AgentVoiceSelection = {
  provider: string;
  model?: string;
  voice: string;
  language?: string;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function stringValue(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

export function getAgentVoiceSelection(
  configuration: OrganizationAiModelConfigurationV2 | null | undefined,
): AgentVoiceSelection | null {
  const root = asRecord(configuration);
  if (!root) return null;

  if (root.mode === "dograh") {
    const dograh = asRecord(root.dograh);
    if (!dograh) return null;
    return {
      provider: "dograh",
      model: "default",
      voice: stringValue(dograh.voice) ?? "default",
      language: stringValue(dograh.language),
    };
  }

  const byok = asRecord(root.byok);
  if (!byok) return null;

  if (byok.mode === "pipeline") {
    const pipeline = asRecord(byok.pipeline);
    const tts = asRecord(pipeline?.tts);
    const stt = asRecord(pipeline?.stt);
    const provider = stringValue(tts?.provider);
    const voice = stringValue(tts?.voice);
    if (!provider || !voice) return null;
    return {
      provider,
      model: stringValue(tts?.model),
      voice,
      language: stringValue(tts?.language) ?? stringValue(stt?.language),
    };
  }

  const realtime = asRecord(asRecord(byok.realtime)?.realtime);
  const provider = stringValue(realtime?.provider);
  const voice = stringValue(realtime?.voice);
  if (!provider || !voice) return null;
  return {
    provider,
    model: stringValue(realtime?.model),
    voice,
    language: stringValue(realtime?.language),
  };
}

export function updateAgentVoiceSelection(
  configuration: OrganizationAiModelConfigurationV2,
  voice: string,
  language?: string,
): OrganizationAiModelConfigurationV2 {
  const next = structuredClone(configuration);
  const root = asRecord(next);
  if (!root) throw new Error("Model configuration is unavailable.");

  if (root.mode === "dograh") {
    const dograh = asRecord(root.dograh);
    if (!dograh) throw new Error("Managed voice configuration is unavailable.");
    dograh.voice = voice;
    if (language) dograh.language = language;
    return next;
  }

  const byok = asRecord(root.byok);
  if (!byok) throw new Error("Custom model configuration is unavailable.");

  if (byok.mode === "pipeline") {
    const pipeline = asRecord(byok.pipeline);
    const tts = asRecord(pipeline?.tts);
    const stt = asRecord(pipeline?.stt);
    if (!tts) throw new Error("Voice provider configuration is unavailable.");
    tts.voice = voice;
    if (language && "language" in tts) tts.language = language;
    if (language && stt && "language" in stt) stt.language = language;
    return next;
  }

  const realtime = asRecord(asRecord(byok.realtime)?.realtime);
  if (!realtime) throw new Error("Realtime voice configuration is unavailable.");
  realtime.voice = voice;
  if (language && "language" in realtime) realtime.language = language;
  return next;
}

export function getVoiceProviderLabel(provider: string): string {
  const labels: Record<string, string> = {
    azure_realtime: "Azure OpenAI Realtime",
    azure_speech: "Azure Speech",
    cartesia: "Cartesia",
    deepgram: "Deepgram",
    dograh: "Menace Voice",
    elevenlabs: "ElevenLabs",
    google_realtime: "Google Gemini Live",
    google_vertex_realtime: "Google Vertex Live",
    grok_realtime: "Grok Voice Agent",
    inworld: "Inworld",
    lmnt: "LMNT",
    minimax: "MiniMax",
    openai: "OpenAI",
    openai_realtime: "OpenAI Realtime",
    rime: "Rime",
    sarvam: "Sarvam",
    smallest: "Smallest AI",
    speaches: "Speaches",
    ultravox_realtime: "Ultravox",
    xai: "xAI",
  };
  return labels[provider] ?? provider;
}

export function isCatalogVoiceProvider(provider: string): boolean {
  return [
    "cartesia",
    "deepgram",
    "dograh",
    "elevenlabs",
    "rime",
    "sarvam",
  ].includes(provider);
}
