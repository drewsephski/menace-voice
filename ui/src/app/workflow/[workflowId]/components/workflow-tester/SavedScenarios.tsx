"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
    deleteTextScenarioApiV1WorkflowWorkflowIdTextChatScenariosRunIdDelete as deleteScenario,
    listTextScenariosApiV1WorkflowWorkflowIdTextChatScenariosGet as listScenarios,
    replayTextScenarioApiV1WorkflowWorkflowIdTextChatScenariosRunIdReplayPost as replayScenario,
    saveTextScenarioApiV1WorkflowWorkflowIdTextChatScenariosRunIdPut as saveScenario,
} from "@/client/sdk.gen";
import type { SavedScenario, ScenarioReplayResult } from "@/client/types.gen";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { TextChatSession } from "./types";
import { extractSdkErrorMessage } from "./utils";

function messageText(value: unknown): string {
    return value && typeof value === "object" && "text" in value && typeof value.text === "string" ? value.text : "";
}

interface SavedScenariosProps {
    workflowId: number;
    session?: TextChatSession | null;
    disabled: boolean;
}

export function SavedScenarios({ workflowId, session, disabled }: SavedScenariosProps) {
    const [scenarios, setScenarios] = useState<SavedScenario[]>([]);
    const [name, setName] = useState("");
    const [replyContains, setReplyContains] = useState("");
    const [nodeIds, setNodeIds] = useState("");
    const [useDraft, setUseDraft] = useState(true);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<ScenarioReplayResult | null>(null);
    const controller = useRef<AbortController | null>(null);
    const refresh = useCallback(async (signal?: AbortSignal) => {
        const response = await listScenarios({ path: { workflow_id: workflowId }, signal });
        if (signal?.aborted) return;
        if (response.error || !response.data) throw new Error(extractSdkErrorMessage(response.error, "Could not load saved scenarios"));
        setScenarios(response.data);
    }, [workflowId]);
    useEffect(() => {
        const abort = new AbortController();
        setScenarios([]);
        setBusy(false);
        setName("");
        setReplyContains("");
        setNodeIds("");
        setResult(null);
        setError(null);
        void refresh(abort.signal).catch((err: unknown) => {
            if (!abort.signal.aborted) setError(err instanceof Error ? err.message : "Could not load scenarios");
        });
        return () => { abort.abort(); controller.current?.abort(); };
    }, [refresh]);
    const act = async (action: "save" | "delete" | "replay", id: number) => {
        if (busy) return;
        setBusy(true);
        setError(null);
        const abort = new AbortController();
        controller.current = abort;
        try {
            const path = { workflow_id: workflowId, run_id: id };
            if (action === "save") {
                const response = await saveScenario({
                    path,
                    signal: abort.signal,
                    body: {
                        name,
                        assertions: {
                            reply_contains: replyContains.trim() ? [replyContains.trim()] : [],
                            node_ids: nodeIds.split(",").map(value => value.trim()).filter(Boolean),
                        },
                    },
                });
                if (response.error || !response.data) throw new Error(extractSdkErrorMessage(response.error, "Could not save scenario"));
                setName("");
            } else if (action === "delete") {
                const response = await deleteScenario({ path, signal: abort.signal });
                if (response.error) throw new Error(extractSdkErrorMessage(response.error, "Could not delete scenario"));
            } else {
                setResult(null);
                const response = await replayScenario({ path, signal: abort.signal, body: { use_draft: useDraft } });
                if (response.error || !response.data) throw new Error(extractSdkErrorMessage(response.error, "Could not replay scenario"));
                if (!abort.signal.aborted) setResult(response.data);
            }
            if (!abort.signal.aborted) await refresh(abort.signal);
        } catch (err) {
            if (!abort.signal.aborted) setError(err instanceof Error ? err.message : "Scenario action failed");
        } finally {
            if (!abort.signal.aborted) setBusy(false);
        }
    };
    return (
        <details className="shrink-0 rounded-md border p-3 text-sm">
            <summary className="cursor-pointer font-medium">Saved conversation regressions</summary>
            <div className="mt-3 max-h-80 space-y-3 overflow-y-auto">
                <p className="text-xs text-muted-foreground">Replay up to 20 saved messages against a snapshot of the current draft or published version. Conversation-only workflows are supported; tools, pre-call fetch, and integration nodes are rejected. Completion integrations are skipped. Model usage applies. Text checks do not validate audio.</p>
                {session?.is_completed ? <div className="space-y-2">
                    <Input aria-label="Scenario name" placeholder="Scenario name" maxLength={100} value={name} onChange={event => setName(event.target.value)} />
                    <Input aria-label="Expected reply text" placeholder="Expected reply contains (optional)" maxLength={500} value={replyContains} onChange={event => setReplyContains(event.target.value)} />
                    <Input aria-label="Expected node IDs" placeholder="Expected node IDs, comma separated (optional)" value={nodeIds} onChange={event => setNodeIds(event.target.value)} />
                    <Button size="sm" variant="outline" disabled={disabled || busy || !name.trim()} onClick={() => void act("save", session.workflow_run_id)}>Save this conversation</Button>
                </div> : <p className="text-xs text-muted-foreground">End a conversation to save its completed user messages. One scenario is stored per conversation and follows its retention policy.</p>}
                <label className="flex items-center gap-2 text-xs"><input type="checkbox" checked={useDraft} disabled={busy} onChange={event => setUseDraft(event.target.checked)} /> Replay current draft (uncheck for published)</label>
                {scenarios.length === 0 ? <p className="text-xs text-muted-foreground">No saved scenarios. {session?.is_completed ? "Name this completed conversation above to save your first scenario." : "Start a text conversation, then end and save it here."}</p> : scenarios.map(scenario => <div key={scenario.source_run_id} className="flex items-center gap-2">
                    <span className="min-w-0 flex-1 truncate">{scenario.name} <span className="text-muted-foreground">({scenario.messages.length} messages)</span></span>
                    <Button size="sm" variant="outline" disabled={disabled || busy} onClick={() => void act("replay", scenario.source_run_id)}>Replay</Button>
                    <Button size="sm" variant="ghost" disabled={disabled || busy} aria-label={`Delete ${scenario.name}`} onClick={() => void act("delete", scenario.source_run_id)}>Delete</Button>
                </div>)}
                {busy && <p role="status" className="text-xs">Working… replay can take up to three minutes.</p>}
                {error && <p role="alert" className="text-xs text-destructive">{error}</p>}
                {result && <div className="space-y-2" aria-live="polite">
                    <p className="font-medium">{result.passed ? "Passed" : "Failed"} · run {result.workflow_run_id} · definition {result.definition_id}</p>
                    {result.error && <p className="text-destructive">{result.error}</p>}
                    <ul className="space-y-1 text-xs">{result.checks.map((check, index) => <li key={index}>{check.passed ? "✓" : "✗"} {check.description}</li>)}</ul>
                    <details><summary className="cursor-pointer text-xs">Replay transcript</summary><ol className="mt-2 space-y-2 text-xs">{result.turns.map((turn, index) => <li key={index}>{messageText(turn.user_message) && <p><strong>User:</strong> {messageText(turn.user_message)}</p>}{messageText(turn.assistant_message) && <p><strong>Agent:</strong> {messageText(turn.assistant_message)}</p>}</li>)}</ol></details>
                </div>}
            </div>
        </details>
    );
}
