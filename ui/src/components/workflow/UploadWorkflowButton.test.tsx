import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { UploadWorkflowButton } from "./UploadWorkflowButton";

const mocks = vi.hoisted(() => ({ create: vi.fn(), token: vi.fn(), push: vi.fn() }));
vi.mock("@/client/sdk.gen", () => ({ createWorkflowApiV1WorkflowCreateDefinitionPost: mocks.create }));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: mocks.push }) }));
vi.mock("@/lib/auth", () => ({ useAuth: () => ({ user: { id: "user" }, getAccessToken: mocks.token }) }));
vi.mock("@/lib/logger", () => ({ default: { error: vi.fn() } }));

const file = { name: "workflow.json", text: async () => JSON.stringify({ name: "Agent", workflow_definition: { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } } }) };
function upload() {
    fireEvent.change(screen.getByLabelText("Workflow JSON file"), { target: { files: [file] } });
}
function setup() {
    render(<UploadWorkflowButton />);
    fireEvent.click(screen.getByRole("button", { name: "Upload Agent Definition" }));
}

describe("workflow upload", () => {
    beforeEach(() => { vi.clearAllMocks(); mocks.token.mockResolvedValue("token"); });

    it("surfaces a resolved HTTP error and recovers for retry", async () => {
        mocks.create.mockResolvedValueOnce({ error: { detail: "Invalid start node" } }).mockResolvedValueOnce({ data: { id: 9 } });
        setup(); upload();
        expect(await screen.findByRole("alert")).toHaveProperty("textContent", "Invalid start node");
        expect(mocks.push).not.toHaveBeenCalled();
        await waitFor(() => expect(screen.getByRole<HTMLButtonElement>("button", { name: "Select File" }).disabled).toBe(false));
        upload();
        await waitFor(() => expect(mocks.push).toHaveBeenCalledWith("/workflow/9"));
    });

    it("reports an expired session", async () => {
        mocks.token.mockResolvedValue(null);
        setup(); upload();
        expect(await screen.findByRole("alert")).toHaveProperty("textContent", "Your session has expired. Sign in and try again.");
        expect(mocks.create).not.toHaveBeenCalled();
    });

    it("rejects missing returned IDs", async () => {
        mocks.create.mockResolvedValue({ data: {} });
        setup(); upload();
        expect((await screen.findByRole("alert")).textContent).toContain("valid workflow");
        expect(mocks.push).not.toHaveBeenCalled();
    });

    it("blocks repeated uploads until the first request completes", async () => {
        let finish!: (value: { data: { id: number } }) => void;
        mocks.create.mockReturnValue(new Promise(resolve => { finish = resolve; }));
        setup(); upload(); upload();
        await waitFor(() => expect(mocks.create).toHaveBeenCalledOnce());
        await act(async () => finish({ data: { id: 9 } }));
        expect(mocks.push).toHaveBeenCalledOnce();
    });
});
