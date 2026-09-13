import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { RecordingsDialog } from "@/app/workflow/[workflowId]/components/RecordingsDialog";

import { RecordingsUploadDialog } from "./RecordingsUploadDialog";

const { create, urls, transcribe, list } = vi.hoisted(() => ({ create: vi.fn(), urls: vi.fn(), transcribe: vi.fn(), list: vi.fn() }));
vi.mock("@/client", () => ({
    createRecordingsApiV1WorkflowRecordingsPost: create,
    getUploadUrlsApiV1WorkflowRecordingsUploadUrlPost: urls,
    transcribeAudioApiV1WorkflowRecordingsTranscribePost: transcribe,
    listRecordingsApiV1WorkflowRecordingsGet: list,
    deleteRecordingApiV1WorkflowRecordingsRecordingIdDelete: vi.fn(),
}));
vi.mock("@/context/UserConfigContext", () => ({ useUserConfig: () => ({ userConfig: null }) }));
const stopPlayback = vi.fn();
vi.mock("@/hooks/useAudioPlayback", () => ({ useAudioPlayback: () => ({ playingId: null, toggle: vi.fn(), stop: stopPlayback }) }));
vi.mock("posthog-js", () => ({ default: { capture: vi.fn() } }));

beforeEach(() => {
    create.mockReset().mockResolvedValueOnce({ error: { detail: [{ msg: "Registration unavailable" }] } })
        .mockResolvedValue({ data: { recordings: [] } });
    urls.mockReset().mockResolvedValue({ data: { items: [{ upload_url: "https://storage.test/upload", recording_id: "test-recording", storage_key: "test.wav" }] } });
    transcribe.mockReset().mockResolvedValue({ data: { transcript: "Original transcript" } });
    list.mockReset().mockResolvedValue({ data: { recordings: [] } });
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
});

describe.each(["library", "workflow"])("%s recording registration", (surface) => {
    it("keeps pending files and edited transcript after HTTP failure, then succeeds on retry", async () => {
        const onClose = vi.fn();
        const onComplete = vi.fn();
        render(surface === "library"
            ? <RecordingsUploadDialog open onOpenChange={onClose} onUploadComplete={onComplete} />
            : <RecordingsDialog open onOpenChange={onClose} workflowId={1} onRecordingsChange={onComplete}
                ttsOverrides={{ provider: "test", model: "test", voice: "test" }} />);
        const fileInput = document.querySelector('input[type="file"]')!;
        fireEvent.change(fileInput, { target: { files: [new File(["audio"], "greeting.wav", { type: "audio/wav" })] } });
        const transcript = await screen.findByDisplayValue("Original transcript");
        fireEvent.change(transcript, { target: { value: "Keep my edited transcript" } });
        const completedBeforeUpload = onComplete.mock.calls.length;
        fireEvent.click(screen.getByRole("button", { name: "Upload 1 Recording" }));
        expect(await screen.findByText("Registration unavailable")).toBeTruthy();
        expect(screen.getByDisplayValue("Keep my edited transcript")).toBeTruthy();
        expect(onClose).not.toHaveBeenCalled();
        expect(onComplete).toHaveBeenCalledTimes(completedBeforeUpload);
        fireEvent.click(screen.getByRole("button", { name: "Upload 1 Recording" }));
        await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(completedBeforeUpload + 1));
        expect(create).toHaveBeenCalledTimes(2);
        expect(create.mock.calls[1][0].body.recordings[0].transcript).toBe("Keep my edited transcript");
        expect(screen.queryByDisplayValue("Keep my edited transcript")).toBeNull();
    });
});
