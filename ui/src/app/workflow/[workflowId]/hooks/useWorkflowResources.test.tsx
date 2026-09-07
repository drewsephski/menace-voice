import { act, renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useWorkflowResources } from './useWorkflowResources';

const mocks = vi.hoisted(() => ({
    documents: vi.fn(), tools: vi.fn(), recordings: vi.fn(),
    auth: { user: { id: 'test' }, loading: false },
}));
vi.mock('@/client', () => ({
    listDocumentsApiV1KnowledgeBaseDocumentsGet: mocks.documents,
    listToolsApiV1ToolsGet: mocks.tools,
    listRecordingsApiV1WorkflowRecordingsGet: mocks.recordings,
}));
vi.mock('@/lib/auth', () => ({ useAuth: () => mocks.auth }));

beforeEach(() => {
    vi.clearAllMocks();
    mocks.auth.loading = false;
    mocks.documents.mockResolvedValue({ data: { documents: [] } });
    mocks.tools.mockResolvedValue({ data: [] });
    mocks.recordings.mockResolvedValue({ data: { recordings: [] } });
});

describe('workflow resource loading', () => {
    it('waits for auth and distinguishes loading from successfully empty collections', async () => {
        mocks.auth.loading = true;
        const { result, rerender } = renderHook(() => useWorkflowResources(1));
        expect(result.current.loading).toBe(true);
        expect(result.current.documents).toBeUndefined();
        expect(mocks.documents).not.toHaveBeenCalled();
        mocks.auth.loading = false;
        rerender();
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.documents).toEqual([]);
        expect(result.current.tools).toEqual([]);
        expect(result.current.errors).toEqual([]);
    });

    it('surfaces resolved errors without discarding other successful resources and retries', async () => {
        mocks.documents.mockResolvedValueOnce({ error: { detail: [{ msg: 'Documents unavailable' }] } });
        const { result } = renderHook(() => useWorkflowResources(1));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.errors).toEqual(['Documents unavailable']);
        expect(result.current.documents).toBeUndefined();
        expect(result.current.tools).toEqual([]);
        act(() => result.current.retry());
        await waitFor(() => expect(result.current.documents).toEqual([]));
        expect(result.current.errors).toEqual([]);
    });

    it.each([404, 501])('keeps recordings optional for unavailable endpoint %s', async status => {
        mocks.recordings.mockResolvedValue({ error: { detail: 'Unavailable' }, response: { status } });
        const { result } = renderHook(() => useWorkflowResources(1));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.recordings).toEqual([]);
        expect(result.current.errors).toEqual([]);
    });

    it('reports actual recording failures and independently settles network errors', async () => {
        mocks.documents.mockRejectedValue(new Error('offline'));
        mocks.tools.mockResolvedValue({ error: { detail: 'Tool access denied' } });
        mocks.recordings.mockResolvedValue({ error: { detail: 'Recording server failed' }, response: { status: 500 } });
        const { result } = renderHook(() => useWorkflowResources(1));
        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.errors).toEqual(['Could not load documents.', 'Tool access denied', 'Recording server failed']);
    });

    it('ignores stale responses when the workflow changes', async () => {
        let finish!: (value: unknown) => void;
        mocks.documents.mockReturnValueOnce(new Promise(resolve => { finish = resolve; }));
        const { result, rerender } = renderHook(({ id }) => useWorkflowResources(id), { initialProps: { id: 1 } });
        rerender({ id: 2 });
        await waitFor(() => expect(result.current.loading).toBe(false));
        await act(async () => finish({ error: { detail: 'Stale failure' } }));
        expect(result.current.errors).toEqual([]);
        expect(result.current.documents).toEqual([]);
    });
});
