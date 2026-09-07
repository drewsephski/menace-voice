import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

import { UnsavedChangesProvider } from "@/context/UnsavedChangesContext";
import { resolveWorkflowConfigurations, type WorkflowConfigurations } from "@/types/workflow-configurations";

import { ClonedVoiceSection } from "./ClonedVoiceSection";

const mocks = vi.hoisted(() => ({ list: vi.fn(), user: { id: "user-1" }, loading: false }));
vi.mock("@/client/sdk.gen", () => ({ listVoiceClonesApiV1VoiceClonesGet: mocks.list }));
vi.mock("@/lib/auth", () => ({ useAuth: () => ({ user: mocks.user, loading: mocks.loading }) }));

const voice = { id: "clone-1", name: "My voice", status: "ready", created_at: "2026-09-07T00:00:00Z" };

beforeEach(() => {
    vi.resetAllMocks();
    mocks.loading = false;
    mocks.list.mockResolvedValue({ data: [voice, { ...voice, id: "pending", name: "Pending voice", status: "verification_required" }] });
    vi.stubGlobal("ResizeObserver", class { observe() {} unobserve() {} disconnect() {} });
    Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => vi.unstubAllGlobals());

function Harness({ save, initial }: { save: (config: WorkflowConfigurations, name: string) => Promise<void>; initial?: Partial<WorkflowConfigurations> }) {
    const [config, setConfig] = useState(resolveWorkflowConfigurations({ dictionary: "keep me", ...initial }));
    return <UnsavedChangesProvider><ClonedVoiceSection workflowConfigurations={config} workflowName="My agent" onSave={async (next, name) => {
        await save(next, name);
        setConfig(next);
    }} /></UnsavedChangesProvider>;
}

async function choose(name: string) {
    const select = screen.getByRole("combobox", { name: "Voice" });
    await waitFor(() => expect(select.hasAttribute("disabled")).toBe(false));
    fireEvent.keyDown(select, { key: " " });
    fireEvent.click(await screen.findByRole("option", { name }));
}

it("saves the clone with the rest of the agent configuration and explains publication", async () => {
    const save = vi.fn().mockResolvedValue(undefined);
    render(<Harness save={save} />);
    await choose("My voice");
    fireEvent.click(screen.getByRole("button", { name: "Save Voice" }));
    await screen.findByText("Voice saved to draft. Test and publish the agent to use it on live calls.");
    expect(save).toHaveBeenCalledWith(expect.objectContaining({ voice_clone_id: "clone-1", dictionary: "keep me" }), "My agent");
});

it("lets users remove an unavailable clone without deleting other settings", async () => {
    const save = vi.fn().mockResolvedValue(undefined);
    render(<Harness save={save} initial={{ voice_clone_id: "missing" }} />);
    await choose("Use model voice");
    fireEvent.click(screen.getByRole("button", { name: "Save Voice" }));
    await waitFor(() => expect(save).toHaveBeenCalledOnce());
    expect(save.mock.calls[0][0]).not.toHaveProperty("voice_clone_id");
    expect(save.mock.calls[0][0].dictionary).toBe("keep me");
});

it("does not offer an unverified voice as a selectable option", async () => {
    render(<Harness save={vi.fn()} />);
    const select = screen.getByRole("combobox", { name: "Voice" });
    await waitFor(() => expect(select.hasAttribute("disabled")).toBe(false));
    fireEvent.keyDown(select, { key: " " });
    const pending = await screen.findByRole("option", { name: "Pending voice · Verification required" });
    expect(pending.getAttribute("aria-disabled")).toBe("true");
});

it("surfaces a failed save without showing publication success", async () => {
    render(<Harness save={vi.fn().mockRejectedValue(new Error("This voice is not ready."))} />);
    await choose("My voice");
    fireEvent.click(screen.getByRole("button", { name: "Save Voice" }));
    expect((await screen.findByRole("alert")).textContent).toContain("This voice is not ready.");
    expect(screen.queryByText(/Voice saved to draft/)).toBeNull();
});

it("waits for authentication and allows retry after a loading error", async () => {
    mocks.loading = true;
    mocks.list.mockResolvedValueOnce({ error: { detail: "Connection failed" } });
    const view = render(<Harness save={vi.fn()} />);
    expect(mocks.list).not.toHaveBeenCalled();
    mocks.loading = false;
    view.rerender(<Harness save={vi.fn()} />);
    expect((await screen.findByRole("alert")).textContent).toContain("Connection failed");
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
    await choose("My voice");
});
