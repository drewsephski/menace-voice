"use client";

import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getPilotReviewApiV1WorkflowWorkflowIdPilotReviewGet } from "@/client/sdk.gen";
import type { PilotReviewPage, PilotRunReview } from "@/client/types.gen";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

export function PilotReview({ workflowId }: { workflowId: number }) {
    const { isAuthenticated, user } = useAuth();
    const [cursors, setCursors] = useState<(number | undefined)[]>([undefined]);
    const [revision, setRevision] = useState(0);
    const [page, setPage] = useState<PilotReviewPage | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const beforeId = cursors[cursors.length - 1];

    useEffect(() => {
        if (!isAuthenticated) {
            setPage(null);
            return;
        }
        const controller = new AbortController();
        setLoading(true);
        setError(false);
        setPage(null);
        getPilotReviewApiV1WorkflowWorkflowIdPilotReviewGet({
            path: { workflow_id: workflowId },
            query: { limit: 25, ...(beforeId ? { before_id: beforeId } : {}) },
            signal: controller.signal,
        }).then((response) => {
            if (controller.signal.aborted) return;
            if (response.error || !response.data) throw new Error("Review unavailable");
            setPage(response.data);
        }).catch(() => {
            if (!controller.signal.aborted) setError(true);
        }).finally(() => {
            if (!controller.signal.aborted) setLoading(false);
        });
        return () => controller.abort();
    }, [workflowId, beforeId, revision, isAuthenticated, user?.id]);

    return (
        <section className="mx-auto w-full max-w-6xl space-y-6 p-4 md:p-8" aria-labelledby="pilot-review-title">
            <Link href={`/workflow/${workflowId}/runs`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All runs
            </Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                    <h1 id="pilot-review-title" className="text-2xl font-semibold tracking-tight">Pilot outcome review</h1>
                    <p className="max-w-2xl text-sm text-muted-foreground">Review recorded outcomes and webhook attempts across phone, web, and chat runs. Open a run to inspect its conversation and supporting details.</p>
                </div>
                <Button variant="outline" disabled={loading} onClick={() => { setCursors([undefined]); setRevision((value) => value + 1); }}>
                    <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" /> Refresh
                </Button>
            </div>
            <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
                Outcomes are recorded classifications. Webhook acceptance does not confirm downstream delivery or human receipt. Authoritative currency costs and human receipt are not recorded for these runs.
            </div>
            {loading && <p role="status" className="py-8 text-center text-muted-foreground">Loading recorded runs…</p>}
            {!loading && error && <div role="alert" className="rounded-lg border p-6"><p>Could not load pilot review.</p><Button variant="outline" className="mt-3" onClick={() => setRevision((value) => value + 1)}>Try again</Button></div>}
            {!loading && !error && page?.runs.length === 0 && <p className="rounded-lg border p-8 text-center text-muted-foreground">No recorded runs on this page.</p>}
            {!loading && !error && page && (
                <div className="space-y-4">
                    {page.runs.map((run) => <RunCard key={run.run_id} run={run} />)}
                    <nav aria-label="Pilot review pagination" className="flex items-center justify-between gap-4 pt-2">
                        <Button variant="outline" disabled={cursors.length === 1} onClick={() => setCursors((current) => current.slice(0, -1))}><ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Newer runs</Button>
                        <span className="text-sm text-muted-foreground">Page {cursors.length}</span>
                        <Button variant="outline" disabled={page.next_before_id == null} onClick={() => { const next = page.next_before_id; if (next != null) setCursors((current) => [...current, next]); }}>Older runs <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Button>
                    </nav>
                </div>
            )}
        </section>
    );
}

function RunCard({ run }: { run: PilotRunReview }) {
    const { accepted = 0, queued = 0, failed = 0 } = run.webhooks ?? {};
    const hasWebhooks = accepted + queued + failed > 0;
    return (
        <article className="rounded-lg border bg-card p-4 md:p-5" aria-labelledby={`run-${run.run_id}`}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <Link id={`run-${run.run_id}`} href={`/workflow/${run.workflow_id}/run/${run.run_id}`} className="font-medium underline-offset-4 hover:underline">Run #{run.run_id}</Link>
                    <p className="mt-1 text-xs text-muted-foreground"><time dateTime={run.created_at}>{new Date(run.created_at).toLocaleString()}</time></p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{run.is_completed ? "Completed" : run.state.replaceAll("_", " ")}</Badge>
                    <Badge variant="outline">{run.mode}</Badge>
                    {run.error_recorded && <Badge variant="destructive">Error recorded</Badge>}
                    {failed > 0 && <Badge variant="destructive">Webhook failed</Badge>}
                </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <Evidence label="Recorded outcome" value={run.disposition ?? "Not recorded"} />
                <Evidence label="Call status" value={run.call_status?.replaceAll("_", " ") ?? "Not recorded"} />
                <Evidence label="Transfer evidence" value={run.transfer === "recorded_transfer" ? "Transfer recorded" : "Not recorded"} />
                <Evidence label="Webhook attempts" value={hasWebhooks ? `${accepted} accepted · ${queued} queued · ${failed} failed` : "No attempts recorded"} />
                <Evidence label="Human receipt" value="Not recorded" />
                <Evidence label="Actual cost" value="Not recorded" />
                <Evidence label="Call duration" value={run.duration_seconds === null ? "Not recorded" : `${run.duration_seconds.toLocaleString()} seconds`} />
                <Evidence label="Recorded token usage" value={run.recorded_token_usage === null ? "Not recorded" : run.recorded_token_usage.toLocaleString()} />
            </dl>
        </article>
    );
}

function Evidence({ label, value }: { label: string; value: string }) {
    return <div><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-1 break-words">{value}</dd></div>;
}
