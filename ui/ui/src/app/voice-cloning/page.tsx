"use client";

import { AudioLines, Plus } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { listVoiceCloneAgentsApiV1VoiceClonesAgentsGet, listVoiceClonesApiV1VoiceClonesGet, voiceCloneCapabilitiesApiV1VoiceClonesCapabilitiesGet } from "@/client/sdk.gen";
import type { VoiceCloneAgent, VoiceCloneCapabilities, VoiceCloneResponse } from "@/client/types.gen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { detailFromError } from "@/lib/apiError";
import { useAuth } from "@/lib/auth";

import { CloneVoiceForm } from "./CloneVoiceForm";
import { VoiceCloneAgents } from "./VoiceCloneAgents";
import { VoiceCloneCard } from "./VoiceCloneCard";

export default function VoiceCloningPage() {
  const { user, loading: authLoading, redirectToLogin } = useAuth();
  const [clones, setClones] = useState<VoiceCloneResponse[]>([]);
  const [agents, setAgents] = useState<VoiceCloneAgent[]>([]);
  const [capabilities, setCapabilities] = useState<VoiceCloneCapabilities>();
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string>();
  const refresh = useCallback(async () => {
    setError(undefined);
    try {
      const [voices, available, workflows] = await Promise.all([listVoiceClonesApiV1VoiceClonesGet(), voiceCloneCapabilitiesApiV1VoiceClonesCapabilitiesGet(), listVoiceCloneAgentsApiV1VoiceClonesAgentsGet()]);
      const failure = voices.error || available.error || workflows.error;
      if (failure) { setError(detailFromError(failure, "Could not load voice cloning.")); return; }
      setClones(voices.data ?? []); setCapabilities(available.data); setAgents(workflows.data ?? []);
    } catch { setError("Could not reach the server. Please try again."); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { redirectToLogin(); return; }
    void refresh();
  }, [authLoading, user, redirectToLogin, refresh]);

  if (authLoading || !user || loading) return <div className="container mx-auto space-y-6 px-4 py-8"><Skeleton className="h-12 w-64" /><Skeleton className="h-80 w-full" /></div>;

  return <div className="container mx-auto max-w-6xl space-y-8 px-4 py-8">
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"><div><h1 className="text-3xl font-bold tracking-tight">Voice Cloning</h1><p className="mt-2 max-w-2xl text-muted-foreground">Your voice, even when you can’t pick up. Create a voice clone for your AI assistant to answer calls, take messages, and help callers while you’re away.</p></div>{clones.length > 0 && <Button onClick={() => setCreating((value) => !value)} disabled={!capabilities?.available}><Plus className="mr-2 h-4 w-4" />{creating ? "Close form" : "Clone my voice"}</Button>}</div>
    {error && <div role="alert" className="rounded-lg border border-destructive/30 p-4 text-sm text-destructive">{error}<Button className="ml-3" variant="outline" onClick={refresh}>Retry</Button></div>}
    {!capabilities?.available && capabilities && <Card><CardHeader><CardTitle>Connect voice cloning</CardTitle><CardDescription>{capabilities.message}</CardDescription></CardHeader><CardContent><Button asChild><Link href="/model-configurations">Open model settings</Link></Button><p className="mt-3 text-sm text-muted-foreground">ElevenLabs access with Instant Voice Cloning is required. Your connection is used to create the clone, preview it, and speak during calls.</p></CardContent></Card>}
    {(creating || clones.length === 0) && capabilities?.available && <Card><CardHeader><CardTitle className="flex items-center gap-2"><AudioLines className="h-5 w-5" />Create your voice</CardTitle><CardDescription>Record or upload a clean sample. You’ll hear a preview before choosing an agent.</CardDescription></CardHeader><CardContent><CloneVoiceForm onCreated={() => { setCreating(false); void refresh(); }} /></CardContent></Card>}
    {clones.length > 0 && <section aria-label="Your cloned voices" className="grid gap-4 md:grid-cols-2">{clones.map((clone) => <VoiceCloneCard key={clone.id} clone={clone} onChanged={refresh} />)}</section>}
    <Card><CardHeader><CardTitle>Use your voice on calls</CardTitle><CardDescription>Choose a voice for an agent, then test and publish the draft. Your agent keeps its instructions, knowledge, and tools.</CardDescription></CardHeader><CardContent className="space-y-6"><VoiceCloneAgents agents={agents} clones={clones} onChanged={refresh} /><div className="rounded-lg bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground"><p>To answer when you’re unavailable, connect the published agent to a <Link href="/phone-numbers" className="font-medium text-foreground underline">phone number</Link>, then set up forwarding for missed or unanswered calls with your phone carrier.</p><p className="mt-2">Suggested greeting: “Hi, you’ve reached my AI assistant. I’m unavailable right now, but I can take a message.” The clone recreates your voice; your agent’s instructions determine what it says.</p></div></CardContent></Card>
  </div>;
}
