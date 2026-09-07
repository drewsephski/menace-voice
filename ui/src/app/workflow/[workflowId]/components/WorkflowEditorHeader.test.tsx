import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { ComponentProps } from "react";
import { toast } from "sonner";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { WorkflowEditorHeader } from "./WorkflowEditorHeader";

const mocks = vi.hoisted(() => ({ publish: vi.fn(), duplicate: vi.fn(), push: vi.fn() }));
vi.mock("@/client/sdk.gen", () => ({
    publishWorkflowApiV1WorkflowWorkflowIdPublishPost: mocks.publish,
    duplicateWorkflowEndpointApiV1WorkflowWorkflowIdDuplicatePost: mocks.duplicate,
}));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: mocks.push }) }));
vi.mock("@/components/ui/sidebar", () => ({ useSidebar: () => ({ toggleSidebar: vi.fn() }) }));
vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

function setup(overrides: Partial<ComponentProps<typeof WorkflowEditorHeader>> = {}) {
    const props: ComponentProps<typeof WorkflowEditorHeader> = {
        workflowName: "Test agent", isDirty: false, workflowValidationErrors: [],
        rfInstance: { current: null }, workflowId: 7, saveWorkflow: vi.fn(), user: { id: "user" },
        onPhoneCallClick: vi.fn(), onTestAgentClick: vi.fn(), onHistoryClick: vi.fn(),
        isViewingHistoricalVersion: false, onBackToDraft: vi.fn(), hasDraft: true,
        onPublished: vi.fn(), renameWorkflow: vi.fn(), ...overrides,
    };
    render(<WorkflowEditorHeader {...props} />);
    return props;
}

function openActions() {
    fireEvent.pointerDown(screen.getByRole("button", { name: "Workflow actions" }), { button: 0, ctrlKey: false });
}

describe("workflow mutations", () => {
    beforeEach(() => vi.clearAllMocks());

    it("surfaces a resolved publish HTTP error without success or publication", async () => {
        mocks.publish.mockResolvedValue({ error: { detail: [{ msg: "Fix the start node" }] } });
        const props = setup();
        fireEvent.click(screen.getByRole("button", { name: "Publish" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Fix the start node"));
        expect(toast.success).not.toHaveBeenCalled();
        expect(props.onPublished).not.toHaveBeenCalled();
        expect(screen.getByRole<HTMLButtonElement>("button", { name: "Publish" }).disabled).toBe(false);
    });

    it("surfaces the actual workflow-validation publish response without claiming success", async () => {
        mocks.publish.mockResolvedValue({ error: { detail: {
            is_valid: false,
            errors: [{ kind: "node", id: "start", field: "prompt", message: "Add a prompt to Start Call" }],
        } } });
        const props = setup();
        fireEvent.click(screen.getByRole("button", { name: "Publish" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Add a prompt to Start Call"));
        expect(toast.success).not.toHaveBeenCalled();
        expect(props.onPublished).not.toHaveBeenCalled();
        expect(screen.getByRole<HTMLButtonElement>("button", { name: "Publish" }).disabled).toBe(false);
    });

    it("confirms successful publication once and blocks repeated clicks while pending", async () => {
        let finish!: (value: { data: unknown }) => void;
        mocks.publish.mockReturnValue(new Promise(resolve => { finish = resolve; }));
        const props = setup();
        const button = screen.getByRole("button", { name: "Publish" });
        fireEvent.click(button);
        fireEvent.click(button);
        expect(mocks.publish).toHaveBeenCalledOnce();
        expect(toast.success).not.toHaveBeenCalled();
        await act(async () => finish({ data: { version: 2 } }));
        expect(props.onPublished).toHaveBeenCalledOnce();
        expect(toast.success).toHaveBeenCalledWith("Workflow published successfully");
    });

    it("recovers from a rejected publish request and allows retry", async () => {
        mocks.publish.mockRejectedValueOnce(new Error("Network unavailable")).mockResolvedValueOnce({ data: {} });
        const props = setup();
        fireEvent.click(screen.getByRole("button", { name: "Publish" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Network unavailable"));
        fireEvent.click(screen.getByRole("button", { name: "Publish" }));
        await waitFor(() => expect(props.onPublished).toHaveBeenCalledOnce());
    });

    it("does not navigate or show success when duplicate resolves an HTTP error", async () => {
        mocks.duplicate.mockResolvedValue({ error: { detail: "Workflow no longer exists" } });
        setup(); openActions();
        fireEvent.click(await screen.findByRole("menuitem", { name: "Duplicate Workflow" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Workflow no longer exists"));
        expect(mocks.push).not.toHaveBeenCalled();
        expect(toast.success).not.toHaveBeenCalled();
    });

    it.each([undefined, 0, -1, 1.5, "12"])("rejects invalid duplicated workflow ID %s", async id => {
        mocks.duplicate.mockResolvedValue({ data: { id } });
        setup(); openActions();
        fireEvent.click(await screen.findByRole("menuitem", { name: "Duplicate Workflow" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith(expect.stringContaining("valid duplicated workflow")));
        expect(mocks.push).not.toHaveBeenCalled();
        expect(toast.success).not.toHaveBeenCalled();
    });

    it("navigates after confirmed duplication", async () => {
        mocks.duplicate.mockResolvedValue({ data: { id: 12 } });
        setup(); openActions();
        fireEvent.click(await screen.findByRole("menuitem", { name: "Duplicate Workflow" }));
        await waitFor(() => expect(mocks.push).toHaveBeenCalledWith("/workflow/12"));
        expect(toast.success).toHaveBeenCalledWith("Workflow duplicated successfully");
    });

    it("preserves a server rename error and the editable name for retry", async () => {
        const renameWorkflow = vi.fn().mockRejectedValueOnce(new Error("An agent with that name already exists")).mockResolvedValueOnce(undefined);
        setup({ renameWorkflow });
        fireEvent.click(screen.getByRole("button", { name: "Rename workflow" }));
        fireEvent.change(screen.getByRole("textbox", { name: "Workflow name" }), { target: { value: "New name" } });
        fireEvent.keyDown(screen.getByRole("textbox", { name: "Workflow name" }), { key: "Enter" });
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("An agent with that name already exists"));
        const input = screen.getByRole<HTMLInputElement>("textbox", { name: "Workflow name" });
        expect(input.value).toBe("New name");
        expect(input.disabled).toBe(false);
        fireEvent.keyDown(input, { key: "Enter" });
        await waitFor(() => expect(screen.queryByRole("textbox", { name: "Workflow name" })).toBeNull());
        expect(renameWorkflow).toHaveBeenCalledTimes(2);
    });

    it("restores save after rejection", async () => {
        const saveWorkflow = vi.fn().mockRejectedValue(new Error("Save failed"));
        setup({ isDirty: true, saveWorkflow });
        fireEvent.click(screen.getByRole("button", { name: "Save" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Save failed"));
        expect(screen.getByRole<HTMLButtonElement>("button", { name: "Save" }).disabled).toBe(false);
    });
});
