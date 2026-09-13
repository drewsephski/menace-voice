import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, expect, it, vi } from "vitest";

import { SavedScenarios } from "./SavedScenarios";
import type { TextChatSession } from "./types";

const { get, put, post, remove } = vi.hoisted(() => ({ get: vi.fn(), put: vi.fn(), post: vi.fn(), remove: vi.fn() }));
vi.mock("@/client/sdk.gen", () => ({
    listTextScenariosApiV1WorkflowWorkflowIdTextChatScenariosGet: get,
    saveTextScenarioApiV1WorkflowWorkflowIdTextChatScenariosRunIdPut: put,
    deleteTextScenarioApiV1WorkflowWorkflowIdTextChatScenariosRunIdDelete: remove,
    replayTextScenarioApiV1WorkflowWorkflowIdTextChatScenariosRunIdReplayPost: post,
}));
beforeEach(() => {
    get.mockReset().mockResolvedValue({ data: [{ source_run_id: 7, name: "Help request", messages: ["help"] }] });
    put.mockReset().mockResolvedValue({ data: {} });
    post.mockReset();
    remove.mockReset().mockResolvedValue({ data: undefined });
});

it("saves a completed conversation with explicit assertions", async () => {
    render(<SavedScenarios workflowId={42} disabled={false} session={{ workflow_run_id: 7, is_completed: true } as TextChatSession} />);
    fireEvent.click(screen.getByText("Saved conversation regressions"));
    fireEvent.change(screen.getByLabelText("Scenario name"), { target: { value: "Help request" } });
    fireEvent.change(screen.getByLabelText("Expected reply text"), { target: { value: "Welcome" } });
    fireEvent.click(screen.getByText("Save this conversation"));
    await waitFor(() => expect(put).toHaveBeenCalledWith(expect.objectContaining({ path: { workflow_id: 42, run_id: 7 }, body: { name: "Help request", assertions: { reply_contains: ["Welcome"], node_ids: [] } } })));
});

it("renders replay checks and preserves server errors", async () => {
    post.mockResolvedValueOnce({ error: { detail: "Regression replay does not execute tools" } }).mockResolvedValueOnce({ data: { workflow_run_id: 8, definition_id: 5, passed: false, checks: [{ passed: false, description: "Visited node end" }], turns: [] } });
    render(<SavedScenarios workflowId={42} disabled={false} />);
    fireEvent.click(screen.getByText("Saved conversation regressions"));
    const replay = await screen.findByText("Replay");
    fireEvent.click(replay);
    expect(await screen.findByRole("alert")).toHaveProperty("textContent", "Regression replay does not execute tools");
    fireEvent.click(replay);
    expect(await screen.findByText("Failed · run 8 · definition 5")).toBeTruthy();
    expect(screen.getByText("✗ Visited node end")).toBeTruthy();
});
