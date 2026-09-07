'use client';

import { FileText, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import {
    getAgentSetupApiV1WorkflowWorkflowIdAgentSetupGet,
    previewAgentApiV1WorkflowWorkflowIdAgentPreviewPost,
    updateWorkflowApiV1WorkflowWorkflowIdPut,
} from '@/client';
import type { OnboardingSetup } from '@/client/types.gen';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { detailFromError } from '@/lib/apiError';

import { useWorkflowStore } from '../stores/workflowStore';

type Preview = {
    workflow_definition: Record<string, unknown>;
    agent_setup: OnboardingSetup;
};

type PreviewNode = { id: string; name: string; prompt: string };

function previewNodes(definition: Record<string, unknown>): PreviewNode[] {
    if (!Array.isArray(definition.nodes)) return [];
    return definition.nodes.flatMap((node: unknown) => {
        if (!node || typeof node !== 'object' || !('data' in node) || !('id' in node)) return [];
        const data = node.data;
        if (typeof node.id !== 'string' || !data || typeof data !== 'object' || !('prompt' in data) || typeof data.prompt !== 'string') return [];
        return [{ id: node.id, name: 'name' in data && typeof data.name === 'string' ? data.name : node.id, prompt: data.prompt }];
    });
}

function canvasSnapshot() {
    const state = useWorkflowStore.getState();
    return JSON.stringify([state.workflowId, state.workflowName, state.nodes, state.edges, state.workflowConfigurations]);
}

export function AgentBriefEditor({ workflowId, readOnly = false }: { workflowId: number; readOnly?: boolean }) {
    const isDirty = useWorkflowStore(state => state.isDirty);
    const [open, setOpen] = useState(false);
    const [setup, setSetup] = useState<OnboardingSetup | null>(null);
    const [source, setSource] = useState<'saved' | 'legacy' | 'missing'>('missing');
    const [preview, setPreview] = useState<Preview | null>(null);
    const [phase, setPhase] = useState<'idle' | 'loading' | 'generating' | 'applying'>('idle');
    const [error, setError] = useState<string | null>(null);
    const request = useRef<AbortController | null>(null);
    const busy = useRef(false);
    const previewSnapshot = useRef<string | null>(null);
    const currentWorkflow = useRef(workflowId);
    currentWorkflow.current = workflowId;

    useEffect(() => {
        request.current?.abort();
        busy.current = false;
        setOpen(false);
        setPreview(null);
        setPhase('idle');
        return () => request.current?.abort();
    }, [workflowId, readOnly]);

    const changeOpen = async (nextOpen: boolean) => {
        if (phase === 'applying') return;
        request.current?.abort();
        busy.current = false;
        setOpen(nextOpen);
        setPreview(null);
        setError(null);
        setSetup(null);
        if (!nextOpen) {
            setPhase('idle');
            return;
        }
        const controller = new AbortController();
        request.current = controller;
        setPhase('loading');
        try {
            const response = await getAgentSetupApiV1WorkflowWorkflowIdAgentSetupGet({ path: { workflow_id: workflowId }, signal: controller.signal });
            if (controller.signal.aborted || currentWorkflow.current !== workflowId) return;
            if (response.error || !response.data) throw new Error(detailFromError(response.error, 'Could not load the agent brief. Close this dialog and try again.'));
            setSource(response.data.source);
            setSetup(response.data.setup ?? {
                agent_name: useWorkflowStore.getState().workflowName,
                use_case: 'Custom agent',
                agent_brief: '',
                tone: 'Helpful and clear',
                language: 'Follow caller language',
                call_type: 'inbound',
                behavior_notes: null,
                voice_provider: 'configured',
                voice_name: 'Configured voice',
                workflow_stages: [],
            });
        } catch (cause) {
            if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : 'Could not load the agent brief.');
        } finally {
            if (!controller.signal.aborted) setPhase('idle');
        }
    };

    const updateSetup = (changes: Partial<OnboardingSetup>) => {
        setSetup(current => current ? { ...current, ...changes, ...('agent_brief' in changes || 'use_case' in changes ? { workflow_stages: [] } : {}) } : current);
        setPreview(null);
        previewSnapshot.current = null;
        setError(null);
    };

    const cleanCanvas = () => {
        const state = useWorkflowStore.getState();
        if (readOnly || state.workflowId !== workflowId) {
            setError('The active workflow changed. Reopen Agent brief on the current draft.');
            return false;
        }
        if (state.isDirty) {
            setError('Save your canvas changes first, then generate a new preview.');
            return false;
        }
        return true;
    };

    const generate = async () => {
        if (!setup || busy.current || !cleanCanvas()) return;
        busy.current = true;
        const controller = new AbortController();
        request.current = controller;
        const snapshot = canvasSnapshot();
        setPhase('generating');
        setError(null);
        setPreview(null);
        try {
            const response = await previewAgentApiV1WorkflowWorkflowIdAgentPreviewPost({ path: { workflow_id: workflowId }, body: setup, signal: controller.signal });
            if (controller.signal.aborted || currentWorkflow.current !== workflowId) return;
            if (response.error || !response.data) throw new Error(detailFromError(response.error, 'Could not generate a preview. Your current draft is unchanged.'));
            if (!cleanCanvas() || canvasSnapshot() !== snapshot) throw new Error('The canvas changed during generation. Save it and generate a new preview.');
            previewSnapshot.current = snapshot;
            setPreview(response.data);
        } catch (cause) {
            if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : 'Could not generate a preview. Your current draft is unchanged.');
        } finally {
            if (!controller.signal.aborted) {
                busy.current = false;
                setPhase('idle');
            }
        }
    };

    const apply = async () => {
        if (!preview || busy.current || !cleanCanvas()) return;
        if (previewSnapshot.current !== canvasSnapshot()) {
            setPreview(null);
            setError('The canvas or settings changed. Generate a new preview before applying.');
            return;
        }
        busy.current = true;
        setPhase('applying');
        setError(null);
        try {
            const response = await updateWorkflowApiV1WorkflowWorkflowIdPut({
                path: { workflow_id: workflowId },
                body: {
                    name: preview.agent_setup.agent_name,
                    workflow_definition: preview.workflow_definition,
                    workflow_configurations: { ...useWorkflowStore.getState().workflowConfigurations, agent_setup: preview.agent_setup },
                },
            });
            if (response.error || !response.data) throw new Error(detailFromError(response.error, 'Could not apply this draft. Please try again.'));
            if (currentWorkflow.current === workflowId && useWorkflowStore.getState().workflowId === workflowId) window.location.reload();
        } catch (cause) {
            if (currentWorkflow.current === workflowId) setError(cause instanceof Error ? cause.message : 'Could not apply this draft.');
        } finally {
            busy.current = false;
            setPhase('idle');
        }
    };

    if (readOnly) return null;
    const formDisabled = phase !== 'idle';
    const valid = setup && [setup.agent_name, setup.use_case, setup.agent_brief, setup.tone, setup.language].every(value => value.trim());

    return <>
        <div className="flex shrink-0 items-center gap-3 border-b px-4 py-2">
            <Button variant="outline" size="sm" onClick={() => void changeOpen(true)}><FileText className="mr-2 h-4 w-4" />Agent brief</Button>
            <span className="text-xs text-muted-foreground">Review the instructions behind this agent or preview a rebuilt draft.</span>
        </div>
        <Dialog open={open} onOpenChange={nextOpen => void changeOpen(nextOpen)}>
            <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-3xl" onEscapeKeyDown={event => { if (phase === 'applying') event.preventDefault(); }} onInteractOutside={event => event.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Agent brief</DialogTitle>
                    <DialogDescription>Review what this agent should do. Generate a preview before replacing the conversational nodes in your current draft. Connected launch settings are preserved. Your published version stays unchanged.</DialogDescription>
                </DialogHeader>
                {phase === 'loading' && <p role="status">Loading agent brief…</p>}
                {error && <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm">{error}</p>}
                {isDirty && <p className="rounded-md bg-muted p-3 text-sm">Save your canvas changes first, then generate a new preview.</p>}
                {setup && <>
                    {source === 'legacy' && <p className="rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-sm">This older agent has no saved setup. We recovered this brief from its Global instructions. Review and correct it before generating; it may differ from the template you intended.</p>}
                    {source === 'missing' && <p className="rounded-md bg-muted p-3 text-sm">This agent has no recoverable brief. Describe the intended job below and review the defaults. Its configured voice will be kept.</p>}
                    <fieldset disabled={formDisabled} className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1"><Label htmlFor="agent-brief-name">Agent name</Label><Input id="agent-brief-name" value={setup.agent_name} maxLength={255} onChange={event => updateSetup({ agent_name: event.target.value })} /></div>
                        <div className="space-y-1"><Label htmlFor="agent-brief-purpose">Use case</Label><Input id="agent-brief-purpose" value={setup.use_case} onChange={event => updateSetup({ use_case: event.target.value })} /></div>
                        <div className="space-y-1 sm:col-span-2"><Label htmlFor="agent-brief-job">What should this agent do?</Label><Textarea id="agent-brief-job" value={setup.agent_brief} maxLength={8000} rows={7} onChange={event => updateSetup({ agent_brief: event.target.value })} /><p className="text-xs text-muted-foreground">Describe the caller, goal, information to collect, boundaries, and when to hand off or end the call.</p></div>
                        <div className="space-y-1"><Label htmlFor="agent-brief-tone">Tone</Label><Input id="agent-brief-tone" value={setup.tone} maxLength={100} onChange={event => updateSetup({ tone: event.target.value })} /></div>
                        <div className="space-y-1"><Label htmlFor="agent-brief-language">Language</Label><Input id="agent-brief-language" value={setup.language} maxLength={100} onChange={event => updateSetup({ language: event.target.value })} /></div>
                        <div className="space-y-1"><Label htmlFor="agent-brief-direction">Call direction</Label><select id="agent-brief-direction" className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm" value={setup.call_type} onChange={event => updateSetup({ call_type: event.target.value === 'outbound' ? 'outbound' : 'inbound' })}><option value="inbound">Inbound</option><option value="outbound">Outbound</option></select></div>
                        <div className="space-y-1 sm:col-span-2"><Label htmlFor="agent-brief-behavior">Additional behavior</Label><Textarea id="agent-brief-behavior" value={setup.behavior_notes ?? ''} maxLength={4000} rows={3} onChange={event => updateSetup({ behavior_notes: event.target.value || null })} /></div>
                    </fieldset>
                    {preview && <section aria-label="Generated draft preview" className="space-y-3 border-t pt-4">
                        <h3 className="font-semibold">Generated draft preview</h3>
                        <p className="text-sm text-muted-foreground">Review the shared instructions and each stage below. Nothing changes until you apply this draft.</p>
                        {previewNodes(preview.workflow_definition).map(node => <details key={node.id} className="rounded-md border p-3"><summary className="cursor-pointer font-medium">{node.name}</summary><p className="mt-3 whitespace-pre-wrap break-words text-sm">{node.prompt}</p></details>)}
                    </section>}
                </>}
                <DialogFooter className="gap-2">
                    <Button variant="outline" disabled={phase === 'applying'} onClick={() => void changeOpen(false)}>Cancel</Button>
                    {preview && <Button variant="outline" disabled={formDisabled} onClick={() => { setPreview(null); previewSnapshot.current = null; }}>Discard preview</Button>}
                    {preview ? <Button disabled={formDisabled || isDirty} onClick={() => void apply()}>{phase === 'applying' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Apply draft</Button> : <Button disabled={!valid || formDisabled || isDirty} onClick={() => void generate()}>{phase === 'generating' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{phase === 'generating' ? 'Generating preview…' : 'Generate preview'}</Button>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>;
}
