"use client";

import { AudioLines } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { listVoiceClonesApiV1VoiceClonesGet } from "@/client/sdk.gen";
import type { VoiceCloneResponse } from "@/client/types.gen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUnsavedChanges } from "@/context/UnsavedChangesContext";
import { detailFromError } from "@/lib/apiError";
import { useAuth } from "@/lib/auth";
import type { WorkflowConfigurations } from "@/types/workflow-configurations";

interface Props {
    workflowConfigurations: WorkflowConfigurations;
    workflowName: string;
    onSave: (configurations: WorkflowConfigurations, name: string) => Promise<void>;
}

export function ClonedVoiceSection({ workflowConfigurations, workflowName, onSave }: Props) {
    const { user, loading: authLoading } = useAuth();
    const savedVoice = typeof workflowConfigurations.voice_clone_id === "string"
        ? workflowConfigurations.voice_clone_id : "default";
    const [selected, setSelected] = useState(savedVoice);
    const [clones, setClones] = useState<VoiceCloneResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState<string>();
    const [saveError, setSaveError] = useState<string>();
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const isDirty = selected !== savedVoice;
    useUnsavedChanges("voice", isDirty);

    useEffect(() => setSelected(savedVoice), [savedVoice]);

    useEffect(() => {
        if (authLoading || !user) return;
        let active = true;
        setLoading(true);
        setLoadError(undefined);
        async function load() {
            try {
                const result = await listVoiceClonesApiV1VoiceClonesGet();
                if (!active) return;
                if (result.error) {
                    setLoadError(detailFromError(result.error, "Could not load cloned voices."));
                    return;
                }
                setClones(result.data ?? []);
            } catch {
                if (active) setLoadError("Could not load cloned voices. Please try again.");
            } finally {
                if (active) setLoading(false);
            }
        }
        void load();
        return () => { active = false; };
    }, [authLoading, user, refresh]);

    const save = useCallback(async () => {
        setSaving(true);
        setSaveError(undefined);
        setSaved(false);
        const next = { ...workflowConfigurations };
        if (selected === "default") delete next.voice_clone_id;
        else next.voice_clone_id = selected;
        try {
            await onSave(next, workflowName);
            setSaved(true);
        } catch (error) {
            setSaveError(error instanceof Error ? error.message : "Could not save the agent voice.");
        } finally {
            setSaving(false);
        }
    }, [onSave, selected, workflowConfigurations, workflowName]);

    const selectionReady = selected === "default" || clones.some(
        (clone) => clone.id === selected && clone.status === "ready",
    );

    return (
        <Card id="voice" className="scroll-mt-20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                    <AudioLines className="h-4 w-4" /> Agent Voice
                </CardTitle>
                <CardDescription>
                    Use your own voice for browser and phone calls. A cloned voice replaces
                    the model’s selected voice and requires a pipeline agent.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="workflow-cloned-voice">Voice</Label>
                    <Select value={selected} disabled={loading || saving} onValueChange={(value) => {
                        setSelected(value);
                        setSaved(false);
                        setSaveError(undefined);
                    }}>
                        <SelectTrigger id="workflow-cloned-voice" className="w-full min-w-0 [&>span]:truncate">
                            <SelectValue placeholder="Choose a voice" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="default">Use model voice</SelectItem>
                            {selected !== "default" && !clones.some((clone) => clone.id === selected) && (
                                <SelectItem value={selected} disabled>Unavailable cloned voice</SelectItem>
                            )}
                            {clones.map((clone) => (
                                <SelectItem key={clone.id} value={clone.id} disabled={clone.status !== "ready"}>
                                    {clone.name}{clone.status === "verification_required" ? " · Verification required" : clone.status !== "ready" ? " · Unavailable" : ""}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                {loading && <p role="status" className="text-sm text-muted-foreground">Loading cloned voices…</p>}
                {loadError && <div role="alert" className="text-sm text-destructive">
                    {loadError} <Button variant="link" onClick={() => setRefresh((value) => value + 1)}>Retry</Button>
                </div>}
                <p className="text-sm text-muted-foreground">
                    <Link className="font-medium underline" href="/voice-cloning">Clone my voice or preview existing voices</Link>
                </p>
                {saveError && <p role="alert" className="text-sm text-destructive">{saveError}</p>}
                {saved && <p role="status" className="text-sm text-muted-foreground">Voice saved to draft. Test and publish the agent to use it on live calls.</p>}
            </CardContent>
            <CardFooter className="border-t pt-6">
                <Button onClick={save} disabled={saving || loading || !isDirty || !selectionReady}>
                    {saving ? "Saving…" : "Save Voice"}
                </Button>
            </CardFooter>
        </Card>
    );
}
