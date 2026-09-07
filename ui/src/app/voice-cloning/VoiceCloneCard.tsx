"use client";

import { AudioLines, Loader2, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import {
  deleteVoiceCloneApiV1VoiceClonesCloneIdDelete,
  previewVoiceCloneApiV1VoiceClonesCloneIdPreviewPost,
} from "@/client/sdk.gen";
import type { VoiceCloneResponse } from "@/client/types.gen";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { detailFromError } from "@/lib/apiError";

export function VoiceCloneCard({
  clone,
  onChanged,
}: {
  clone: VoiceCloneResponse;
  onChanged: () => void;
}) {
  const [text, setText] = useState(
    "Hi, you’ve reached my AI assistant. I can take a message while I’m away. How can I help?",
  );
  const [audio, setAudio] = useState<Blob>();
  const [url, setUrl] = useState<string>();
  const [busy, setBusy] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!audio) return;
    const next = URL.createObjectURL(audio);
    setUrl(next);
    return () => URL.revokeObjectURL(next);
  }, [audio]);

  async function preview() {
    setBusy(true);
    setError(undefined);
    try {
      const response =
        await previewVoiceCloneApiV1VoiceClonesCloneIdPreviewPost({
          path: { clone_id: clone.id },
          body: { text },
          parseAs: "blob",
        });
      if (response.error || !response.data) {
        setError(
          detailFromError(response.error, "Could not preview this voice."),
        );
        return;
      }
      if (!(response.data instanceof Blob)) {
        setError("The server did not return playable audio.");
        return;
      }
      setAudio(response.data);
      if (clone.status === "verification_required") onChanged();
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    setBusy(true);
    setError(undefined);
    try {
      const response = await deleteVoiceCloneApiV1VoiceClonesCloneIdDelete({
        path: { clone_id: clone.id },
      });
      if (response.error) {
        setError(
          detailFromError(response.error, "Could not delete this voice."),
        );
        return;
      }
      onChanged();
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="flex min-w-0 items-center gap-2 text-lg">
            <AudioLines className="h-5 w-5 shrink-0" />
            <span className="break-words">{clone.name}</span>
          </CardTitle>
          <Badge variant={clone.status === "ready" ? "secondary" : "outline"}>
            {clone.status === "ready"
              ? "Ready"
              : clone.status === "deleting"
                ? "Deletion pending"
                : "Verify voice"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {clone.status === "verification_required" && (
          <p className="text-sm text-muted-foreground">
            Complete voice verification in the{" "}
            <a
              className="underline"
              href="https://elevenlabs.io/app/voice-lab"
              target="_blank"
              rel="noreferrer"
            >
              ElevenLabs account
            </a>
            {" "}used to create this clone, then generate a preview to confirm
            your voice is ready. If your administrator provides voice cloning,
            contact them to arrange verification in the connected account.
          </p>
        )}
        <div className="space-y-2">
          <Label htmlFor={`preview-${clone.id}`}>Hear your clone</Label>
          <Textarea
            id={`preview-${clone.id}`}
            value={text}
            onChange={(event) => setText(event.target.value)}
            maxLength={500}
            disabled={busy}
            rows={3}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            disabled={busy || !text.trim() || clone.status === "deleting"}
            onClick={preview}
          >
            {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Generate
            preview
          </Button>
          <Button
            variant="ghost"
            aria-label={`Delete ${clone.name}`}
            disabled={busy}
            onClick={() => setConfirmDelete(true)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        {url && (
          <audio
            controls
            src={url}
            className="w-full"
            aria-label={`${clone.name} preview`}
          />
        )}
        {confirmDelete && (
          <div className="space-y-3 rounded-lg border border-destructive/30 p-3">
            <p className="text-sm">
              Delete this clone and its samples from ElevenLabs? You’ll need a
              new recording to recreate it.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="destructive"
                disabled={busy}
                onClick={remove}
              >
                Delete voice
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={busy}
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
