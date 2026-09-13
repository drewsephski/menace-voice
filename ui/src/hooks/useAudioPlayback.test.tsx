import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useAudioPlayback } from "./useAudioPlayback";

const { signedUrl } = vi.hoisted(() => ({ signedUrl: vi.fn() }));
vi.mock("@/client/sdk.gen", () => ({ getSignedUrlApiV1S3SignedUrlGet: signedUrl }));

function deferred<T>() {
    let resolve!: (value: T) => void;
    const promise = new Promise<T>((done) => { resolve = done; });
    return { promise, resolve };
}

class AudioMock {
    static instances: AudioMock[] = [];
    onended: (() => void) | null = null;
    pause = vi.fn();
    play = vi.fn<() => Promise<void>>().mockResolvedValue();
    constructor(readonly src: string) { AudioMock.instances.push(this); }
}

beforeEach(() => {
    signedUrl.mockReset().mockResolvedValue({ data: { url: "https://storage.test/audio" } });
    AudioMock.instances = [];
    vi.stubGlobal("Audio", AudioMock);
});

describe("useAudioPlayback", () => {
    it("ignores an older signed URL that resolves after the latest selection", async () => {
        const oldUrl = deferred<{ data: { url: string } }>();
        signedUrl.mockReturnValueOnce(oldUrl.promise);
        const { result } = renderHook(useAudioPlayback);
        let oldToggle!: Promise<void>;
        act(() => { oldToggle = result.current.toggle("old", "old.wav"); });
        await act(async () => { await result.current.toggle("new", "new.wav"); });
        await act(async () => { oldUrl.resolve({ data: { url: "old" } }); await oldToggle; });
        expect(AudioMock.instances).toHaveLength(1);
        expect(result.current.playingId).toBe("new");
    });

    it.each(["stop", "toggle", "unmount"])("cancels a pending preview on %s", async (action) => {
        const url = deferred<{ data: { url: string } }>();
        signedUrl.mockReturnValueOnce(url.promise);
        const { result, unmount } = renderHook(useAudioPlayback);
        let pending!: Promise<void>;
        act(() => { pending = result.current.toggle("clip", "clip.wav"); });
        act(() => {
            if (action === "stop") result.current.stop();
            else if (action === "toggle") void result.current.toggle("clip", "clip.wav");
            else unmount();
        });
        await act(async () => { url.resolve({ data: { url: "late" } }); await pending; });
        expect(AudioMock.instances).toHaveLength(0);
    });

    it("pauses and detaches the active audio when unmounted", async () => {
        const { result, unmount } = renderHook(useAudioPlayback);
        await act(async () => { await result.current.toggle("clip", "clip.wav"); });
        unmount();
        expect(AudioMock.instances[0].pause).toHaveBeenCalledOnce();
        expect(AudioMock.instances[0].onended).toBeNull();
    });

    it("does not let an old ended callback stop a newer audio", async () => {
        const { result } = renderHook(useAudioPlayback);
        await act(async () => { await result.current.toggle("old", "old.wav"); });
        const ended = AudioMock.instances[0].onended!;
        await act(async () => { await result.current.toggle("new", "new.wav"); });
        act(() => ended());
        expect(result.current.playingId).toBe("new");
        expect(AudioMock.instances[1].pause).not.toHaveBeenCalled();
    });

    it("cleans up when play rejects and allows retry", async () => {
        vi.stubGlobal("Audio", class extends AudioMock {
            play = vi.fn<() => Promise<void>>().mockRejectedValue(new Error("Playback denied"));
        });
        const { result } = renderHook(useAudioPlayback);
        await act(async () => { await expect(result.current.toggle("clip", "clip.wav")).rejects.toThrow("Playback denied"); });
        expect(result.current.playingId).toBeNull();
        expect(AudioMock.instances[0].pause).toHaveBeenCalledOnce();
        vi.stubGlobal("Audio", AudioMock);
        await act(async () => { await result.current.toggle("clip", "clip.wav"); });
        expect(result.current.playingId).toBe("clip");
    });
});
