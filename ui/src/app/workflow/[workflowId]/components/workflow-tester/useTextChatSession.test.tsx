import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useTextChatSession } from "./useTextChatSession";

const { create, append, rewind, toastError } = vi.hoisted(() => ({ create: vi.fn(), append: vi.fn(), rewind: vi.fn(), toastError: vi.fn() }));
vi.mock("@/client/sdk.gen", () => ({
    createTextChatSessionApiV1WorkflowWorkflowIdTextChatSessionsPost: create,
    appendTextChatMessageApiV1WorkflowWorkflowIdTextChatSessionsRunIdMessagesPost: append,
    endTextChatSessionApiV1WorkflowWorkflowIdTextChatSessionsRunIdEndPost: vi.fn(),
    rewindTextChatSessionApiV1WorkflowWorkflowIdTextChatSessionsRunIdRewindPost: rewind,
}));
vi.mock("sonner", () => ({ toast: { error: toastError } }));
const response = { data: { workflow_run_id: 1, is_completed: false, revision: 1, session_data: { turns: [] }, checkpoint: {} } };

beforeEach(() => {
    create.mockReset().mockResolvedValue(response);
    append.mockReset();
    rewind.mockReset().mockResolvedValue(response);
    toastError.mockReset();
});

async function start() {
    const hook = renderHook(() => useTextChatSession({ workflowId: 1, ready: true, disabled: false }));
    act(() => hook.result.current.startSession());
    await waitFor(() => expect(hook.result.current.session).not.toBeNull());
    act(() => hook.result.current.setDraft("First message"));
    return hook;
}

describe("chat composer pending draft", () => {
    it.each(["Next message", "First message"])("preserves newly entered draft %s after a pending response", async (next) => {
        let resolve!: (value: typeof response) => void;
        append.mockImplementation(() => new Promise(done => { resolve = done; }));
        const { result } = await start();
        let pending!: Promise<void>;
        act(() => { pending = result.current.submitComposer(); });
        act(() => { result.current.setDraft(""); result.current.setDraft(next); });
        await act(async () => { resolve(response); await pending; });
        expect(result.current.draft).toBe(next);
        expect(result.current.sendingMessage).toBe(false);
    });

    it("clears an unchanged draft only after success", async () => {
        append.mockResolvedValue(response);
        const { result } = await start();
        await act(async () => { await result.current.submitComposer(); });
        expect(result.current.draft).toBe("");
    });

    it("retains failed text and allows retry", async () => {
        append.mockResolvedValueOnce({ error: { detail: "Please retry" } }).mockResolvedValueOnce(response);
        const { result } = await start();
        await act(async () => { await result.current.submitComposer(); });
        expect(result.current.draft).toBe("First message");
        expect(toastError).toHaveBeenCalledWith("Please retry");
        await act(async () => { await result.current.submitComposer(); });
        expect(result.current.draft).toBe("");
    });

    it("keeps the edited draft when append fails after rewind removed its original turn", async () => {
        const turn = { id: "turn-1", status: "completed", created_at: "2026-09-13", user_message: { text: "Original", created_at: "2026-09-13" }, assistant_message: null, events: [], usage: {} };
        create.mockResolvedValue({ data: { ...response.data, session_data: { turns: [turn] } } });
        append.mockResolvedValue({ error: { detail: "Please retry" } });
        const { result } = await start();
        act(() => result.current.startEditingTurn(result.current.turns[0]));
        act(() => result.current.setDraft("Edited message"));
        await act(async () => { await result.current.submitComposer(); });
        expect(result.current.draft).toBe("Edited message");
        expect(result.current.editingTurnId).toBeNull();
        append.mockResolvedValue(response);
        await act(async () => { await result.current.submitComposer(); });
        expect(rewind).toHaveBeenCalledOnce();
        expect(result.current.draft).toBe("");
    });

    it("prevents duplicate synchronous submissions", async () => {
        let resolve!: (value: typeof response) => void;
        append.mockImplementation(() => new Promise(done => { resolve = done; }));
        const { result } = await start();
        let pending!: Promise<void>;
        act(() => { pending = result.current.submitComposer(); void result.current.submitComposer(); });
        expect(append).toHaveBeenCalledOnce();
        await act(async () => { resolve(response); await pending; });
    });
});
