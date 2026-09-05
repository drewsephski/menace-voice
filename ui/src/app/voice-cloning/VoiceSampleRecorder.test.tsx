import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

import { VoiceSampleRecorder } from "./VoiceSampleRecorder";

const stopTrack = vi.fn();
const media = { getTracks: () => [{ stop: stopTrack }] };
const getUserMedia = vi.fn();

class RecorderMock {
  static isTypeSupported() { return true; }
  state = "inactive";
  mimeType = "audio/webm";
  ondataavailable?: (event: { data: Blob }) => void;
  onstop?: () => void;
  onerror?: () => void;
  start() { this.state = "recording"; }
  stop() {
    this.state = "inactive";
    this.ondataavailable?.({ data: new Blob(["sample"], { type: this.mimeType }) });
    this.onstop?.();
  }
}

beforeEach(() => {
  vi.resetAllMocks();
  vi.stubGlobal("MediaRecorder", RecorderMock);
  Object.defineProperty(navigator, "mediaDevices", { configurable: true, value: { getUserMedia } });
  URL.createObjectURL = vi.fn(() => "blob:sample");
  URL.revokeObjectURL = vi.fn();
});
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });

it("releases microphone tracks and returns a file when recording stops", async () => {
  getUserMedia.mockResolvedValue(media);
  const changed = vi.fn();
  const { unmount } = render(<VoiceSampleRecorder disabled={false} onChange={changed} />);
  fireEvent.click(screen.getByRole("button", { name: "Record my voice" }));
  const stop = await screen.findByRole("button", { name: /Stop recording/ });
  fireEvent.click(stop);
  await screen.findByLabelText("Your original voice recording");
  expect(changed.mock.calls.at(-1)?.[0]).toBeInstanceOf(File);
  expect(stopTrack).toHaveBeenCalled();
  unmount();
  expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:sample");
});

it("releases a microphone granted after the component has unmounted", async () => {
  let grant: (value: typeof media) => void = () => {};
  getUserMedia.mockReturnValue(new Promise((resolve) => { grant = resolve; }));
  const changed = vi.fn();
  const { unmount } = render(<VoiceSampleRecorder disabled={false} onChange={changed} />);
  fireEvent.click(screen.getByRole("button", { name: "Record my voice" }));
  unmount();
  await act(async () => grant(media));
  await waitFor(() => expect(stopTrack).toHaveBeenCalled());
  expect(changed).not.toHaveBeenCalled();
});

it("offers upload when microphone permission is denied", async () => {
  getUserMedia.mockRejectedValue(new Error("Permission denied"));
  render(<VoiceSampleRecorder disabled={false} onChange={vi.fn()} />);
  fireEvent.click(screen.getByRole("button", { name: "Record my voice" }));
  expect((await screen.findByRole("alert")).textContent).toContain("upload a recording");
  expect((screen.getByRole("button", { name: "Upload audio" }) as HTMLButtonElement).disabled).toBe(false);
});
