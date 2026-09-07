import { useCallback, useEffect, useState } from 'react';

import { listDocumentsApiV1KnowledgeBaseDocumentsGet, listRecordingsApiV1WorkflowRecordingsGet, listToolsApiV1ToolsGet } from '@/client';
import type { DocumentResponseSchema, RecordingResponseSchema, ToolResponse } from '@/client/types.gen';
import { detailFromError } from '@/lib/apiError';
import { useAuth } from '@/lib/auth';

export function useWorkflowResources(workflowId: number) {
    const { user, loading: authLoading } = useAuth();
    const [documents, setDocuments] = useState<DocumentResponseSchema[]>();
    const [tools, setTools] = useState<ToolResponse[]>();
    const [recordings, setRecordings] = useState<RecordingResponseSchema[]>([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<string[]>([]);
    const [attempt, setAttempt] = useState(0);
    const retry = useCallback(() => setAttempt(value => value + 1), []);

    useEffect(() => {
        if (authLoading) return;
        if (!user) {
            setLoading(false);
            setErrors(['Your session has ended. Sign in again to load workflow resources.']);
            setDocuments(undefined);
            setTools(undefined);
            setRecordings([]);
            return;
        }
        let cancelled = false;
        setLoading(true);
        setErrors([]);
        setDocuments(undefined);
        setTools(undefined);
        setRecordings([]);

        const fetchResources = async () => {
            const results = await Promise.allSettled([
                listDocumentsApiV1KnowledgeBaseDocumentsGet({ query: { limit: 100 } }),
                listToolsApiV1ToolsGet({}),
                listRecordingsApiV1WorkflowRecordingsGet({ query: {} }),
            ]);
            if (cancelled) return;
            const failures: string[] = [];
            const [documentResult, toolResult, recordingResult] = results;
            if (documentResult.status === 'fulfilled' && !documentResult.value.error && documentResult.value.data) {
                setDocuments(documentResult.value.data.documents);
            } else {
                failures.push(detailFromError(documentResult.status === 'fulfilled' ? documentResult.value.error : undefined, 'Could not load documents.'));
            }
            if (toolResult.status === 'fulfilled' && !toolResult.value.error && toolResult.value.data) {
                setTools(toolResult.value.data);
            } else {
                failures.push(detailFromError(toolResult.status === 'fulfilled' ? toolResult.value.error : undefined, 'Could not load tools.'));
            }
            if (recordingResult.status === 'fulfilled' && !recordingResult.value.error && recordingResult.value.data) {
                setRecordings(recordingResult.value.data.recordings);
            } else if (!(recordingResult.status === 'fulfilled' && [404, 501].includes(recordingResult.value.response?.status ?? 0))) {
                // Older deployments may intentionally omit the recordings API.
                failures.push(detailFromError(recordingResult.status === 'fulfilled' ? recordingResult.value.error : undefined, 'Could not load recordings.'));
            }
            setErrors(failures);
            setLoading(false);
        };
        void fetchResources();
        return () => { cancelled = true; };
    }, [authLoading, user, workflowId, attempt]);

    return { documents, tools, recordings, setTools, loading, errors, retry };
}
