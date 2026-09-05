import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { CloneVoiceForm } from "./CloneVoiceForm";
import { VoiceCloneAgents } from "./VoiceCloneAgents";
import { VoiceCloneCard } from "./VoiceCloneCard";

const sdk = vi.hoisted(() => ({ create: vi.fn(), preview: vi.fn(), remove: vi.fn(), assign: vi.fn() }));
vi.mock("@/client/sdk.gen", () => ({
  createVoiceCloneApiV1VoiceClonesPost: sdk.create,
  previewVoiceCloneApiV1VoiceClonesCloneIdPreviewPost: sdk.preview,
  deleteVoiceCloneApiV1VoiceClonesCloneIdDelete: sdk.remove,
  assignVoiceCloneApiV1VoiceClonesAgentsWorkflowIdPut: sdk.assign,
}));
vi.mock("./VoiceSampleRecorder", () => ({ VoiceSampleRecorder: ({ onChange }: { onChange: (file: File) => void }) => <button type="button" onClick={() => onChange(new File(["sample"], "voice.wav", { type: "audio/wav" }))}>Choose sample</button> }));
const clone = { id: "clone-1", name: "My voice", status: "ready" as const, created_at: "2026-09-05T00:00:00Z" };

beforeEach(() => { vi.resetAllMocks(); URL.createObjectURL = vi.fn(() => "blob:preview"); URL.revokeObjectURL = vi.fn(); });

describe("voice cloning", () => {
  it("requires a sample and explicit consent before creation", async () => {
    sdk.create.mockResolvedValue({ data: clone });
    const created = vi.fn();
    render(<CloneVoiceForm onCreated={created} />);
    const submit = screen.getByRole("button", { name: "Create my voice clone" });
    expect((submit as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByText("Choose sample"));
    expect((submit as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(submit);
    await waitFor(() => expect(created).toHaveBeenCalledWith(clone));
    expect(sdk.create.mock.calls[0][0].body.consent).toBe(true);
  });

  it("renders API validation errors without claiming creation succeeded", async () => {
    sdk.create.mockResolvedValue({ error: { detail: [{ loc: ["body", "sample"], msg: "Recording too short", type: "value_error" }] } });
    const created = vi.fn();
    render(<CloneVoiceForm onCreated={created} />);
    fireEvent.click(screen.getByText("Choose sample"));
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: "Create my voice clone" }));
    expect((await screen.findByRole("alert")).textContent).toContain("Recording too short");
    expect(created).not.toHaveBeenCalled();
  });

  it("previews through the authenticated SDK and revokes audio on unmount", async () => {
    sdk.preview.mockResolvedValue({ data: new Blob(["audio"], { type: "audio/mpeg" }) });
    const { unmount } = render(<VoiceCloneCard clone={clone} onChanged={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "Generate preview" }));
    await screen.findByLabelText("My voice preview");
    expect(sdk.preview.mock.calls[0][0]).toMatchObject({ path: { clone_id: "clone-1" }, parseAs: "blob" });
    unmount();
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:preview");
  });

  it("requires deletion confirmation and surfaces assignment conflicts", async () => {
    sdk.remove.mockResolvedValue({ error: { detail: "Remove this voice from agent drafts first." } });
    const changed = vi.fn();
    render(<VoiceCloneCard clone={clone} onChanged={changed} />);
    fireEvent.click(screen.getByRole("button", { name: "Delete My voice" }));
    expect(sdk.remove).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Delete voice" }));
    expect((await screen.findByRole("alert")).textContent).toContain("Remove this voice");
    expect(changed).not.toHaveBeenCalled();
  });

  it("shows the difference between draft and published voices", () => {
    render(<VoiceCloneAgents agents={[{ id: 4, name: "My assistant", voice_clone_id: clone.id, published_voice_clone_id: null }]} clones={[clone]} onChanged={vi.fn()} />);
    expect(screen.getByText("Voice change is awaiting publication.")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Test & publish" }).getAttribute("href")).toBe("/workflow/4");
  });
});
