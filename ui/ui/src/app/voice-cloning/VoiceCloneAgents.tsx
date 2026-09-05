"use client";

import Link from "next/link";
import { useState } from "react";

import { assignVoiceCloneApiV1VoiceClonesAgentsWorkflowIdPut } from "@/client/sdk.gen";
import type { VoiceCloneAgent, VoiceCloneResponse } from "@/client/types.gen";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { detailFromError } from "@/lib/apiError";

export function VoiceCloneAgents({ agents, clones, onChanged }: { agents: VoiceCloneAgent[]; clones: VoiceCloneResponse[]; onChanged: () => void }) {
  const [busy, setBusy] = useState<number>();
  const [error, setError] = useState<string>();
  const [saved, setSaved] = useState<number>();
  async function assign(id: number, value: string) {
    setBusy(id); setError(undefined); setSaved(undefined);
    try {
      const response = await assignVoiceCloneApiV1VoiceClonesAgentsWorkflowIdPut({ path: { workflow_id: id }, body: { voice_clone_id: value === "default" ? null : value } });
      if (response.error) { setError(detailFromError(response.error, "Could not update the agent voice.")); return; }
      setSaved(id); onChanged();
    } catch { setError("Could not reach the server. Please try again."); }
    finally { setBusy(undefined); }
  }
  return <div className="space-y-4">
    {agents.length === 0 && <p className="text-sm text-muted-foreground">Create an agent, then choose your cloned voice here. <Link className="underline" href="/workflow">Go to agents</Link></p>}
    {agents.map((agent) => <div key={agent.id} className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0"><Label htmlFor={`agent-voice-${agent.id}`} className="break-words">{agent.name}</Label><p className="mt-1 text-xs text-muted-foreground">{saved === agent.id ? "Saved to draft. Test and publish to use it on calls." : agent.voice_clone_id !== agent.published_voice_clone_id ? "Voice change is awaiting publication." : agent.published_voice_clone_id ? "Published with a cloned voice." : "Uses the agent’s configured voice."}</p></div>
      <div className="flex flex-col gap-2 sm:flex-row"><Select value={agent.voice_clone_id || "default"} disabled={busy !== undefined} onValueChange={(value) => assign(agent.id, value)}><SelectTrigger id={`agent-voice-${agent.id}`} className="w-full sm:w-52"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="default">Agent’s default voice</SelectItem>{clones.filter((clone) => clone.status === "ready" || clone.id === agent.voice_clone_id).map((clone) => <SelectItem key={clone.id} value={clone.id} disabled={clone.status !== "ready"}>{clone.name}</SelectItem>)}</SelectContent></Select><Button variant="outline" asChild><Link href={`/workflow/${agent.id}`}>Test & publish</Link></Button></div>
    </div>)}
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
  </div>;
}
