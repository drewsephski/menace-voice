import { describe, expect, it } from "vitest";

import type { OrganizationAiModelConfigurationV2 } from "@/client/types.gen";

import {
  getAgentVoiceSelection,
  updateAgentVoiceSelection,
} from "./voice-configuration";

describe("agent onboarding voice configuration", () => {
  it("updates a managed voice without mutating the organization configuration", () => {
    const configuration: OrganizationAiModelConfigurationV2 = {
      version: 2,
      mode: "dograh",
      dograh: {
        api_key: "********key",
        voice: "first-voice",
        speed: 1,
        language: "multi",
      },
    };

    const updated = updateAgentVoiceSelection(
      configuration,
      "recommended-voice",
      "en-US",
    );

    expect(getAgentVoiceSelection(updated)).toEqual({
      provider: "dograh",
      model: "default",
      voice: "recommended-voice",
      language: "en-US",
    });
    expect(configuration.dograh?.voice).toBe("first-voice");
    expect(configuration.dograh?.language).toBe("multi");
  });

  it("updates the voice and transcription language in a pipeline override", () => {
    const configuration = {
      version: 2,
      mode: "byok",
      byok: {
        mode: "pipeline",
        pipeline: {
          llm: { provider: "openai", api_key: "key", model: "gpt-4.1" },
          tts: {
            provider: "cartesia",
            api_key: "key",
            model: "sonic-3",
            voice: "old-voice",
            language: "en",
          },
          stt: {
            provider: "deepgram",
            api_key: "key",
            model: "nova-3-general",
            language: "en",
          },
        },
      },
    } as OrganizationAiModelConfigurationV2;

    const updated = updateAgentVoiceSelection(
      configuration,
      "new-voice",
      "es",
    );

    expect(getAgentVoiceSelection(updated)).toMatchObject({
      provider: "cartesia",
      model: "sonic-3",
      voice: "new-voice",
      language: "es",
    });
  });
});
