"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { createVoiceCloneApiV1VoiceClonesPost } from "@/client/sdk.gen";
import type { VoiceCloneResponse } from "@/client/types.gen";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { detailFromError } from "@/lib/apiError";

import { VoiceSampleRecorder } from "./VoiceSampleRecorder";

export function CloneVoiceForm({
  onCreated,
}: {
  onCreated: (clone: VoiceCloneResponse) => void;
}) {
  const [name, setName] = useState("My voice");
  const [sample, setSample] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>();

  async function create(event: React.FormEvent) {
    event.preventDefault();
    if (!sample || !consent || busy) return;
    setBusy(true);
    setError(undefined);
    try {
      const response = await createVoiceCloneApiV1VoiceClonesPost({
        body: { name: name.trim(), consent, sample },
      });
      if (response.error || !response.data) {
        setError(
          detailFromError(response.error, "Could not create your voice."),
        );
        return;
      }
      onCreated(response.data);
    } catch {
      setError(
        "Could not reach the server. Check your voice library before retrying.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={create} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="clone-name">Voice name</Label>
        <Input
          id="clone-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={80}
          required
          disabled={busy}
        />
      </div>
      <VoiceSampleRecorder disabled={busy} onChange={setSample} />
      <details className="rounded-lg border bg-muted/30 p-4 text-sm">
        <summary className="cursor-pointer font-medium">
          Need something to read?
        </summary>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Hi, thanks for calling. I’m glad you reached out. I’m not able to come
          to the phone right now, but my assistant can help take a message and
          make sure I get back to you. Could you tell me your name and the best
          number to reach you? What would you like help with today? If you have
          a preferred time for a callback, please let me know. I want to make
          sure I have the details right before we finish. Thanks for your
          patience, and I look forward to speaking with you soon.
        </p>
        <p className="mt-3 text-muted-foreground">
          Continue by talking about your day until you have 1–2 minutes. Use
          your normal tone, without music or other speakers.
        </p>
      </details>
      <div className="flex items-start gap-3">
        <Checkbox
          id="clone-consent"
          checked={consent}
          onCheckedChange={(value) => setConsent(value === true)}
          disabled={busy}
        />
        <Label
          htmlFor="clone-consent"
          className="text-sm font-normal leading-relaxed"
        >
          This recording is my own voice. I consent to sending it to ElevenLabs
          to create a voice clone and using that clone for AI-assisted calls.
        </Label>
      </div>
      <p className="text-xs text-muted-foreground">
        30 seconds–3 minutes · Up to 20 MB. Menace Voice does not retain the
        uploaded sample; ElevenLabs processes and stores it with your clone.
      </p>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
      <Button
        type="submit"
        disabled={busy || !sample || !consent || !name.trim()}
      >
        {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {busy ? "Creating your voice…" : "Create my voice clone"}
      </Button>
    </form>
  );
}
