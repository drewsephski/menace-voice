import { useCallback, useEffect, useRef, useState } from "react";

import { getSignedUrlApiV1S3SignedUrlGet } from "@/client/sdk.gen";

/** Plays one audio preview at a time, including while its signed URL loads. */
export function useAudioPlayback() {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const selectedIdRef = useRef<string | null>(null);
    const generationRef = useRef(0);

    const release = useCallback(() => {
        generationRef.current += 1;
        selectedIdRef.current = null;
        if (audioRef.current) {
            audioRef.current.onended = null;
            audioRef.current.pause();
            audioRef.current = null;
        }
    }, []);

    const stop = useCallback(() => {
        release();
        setPlayingId(null);
    }, [release]);

    useEffect(() => release, [release]);

    const toggle = useCallback(
        async (id: string, storageKey: string, storageBackend?: string) => {
            if (selectedIdRef.current === id) {
                stop();
                return;
            }

            stop();
            selectedIdRef.current = id;
            const generation = generationRef.current;

            try {
                const result = await getSignedUrlApiV1S3SignedUrlGet({
                    query: { key: storageKey, storage_backend: storageBackend },
                });
                if (generation !== generationRef.current) return;
                if (result.error || !result.data?.url) {
                    throw new Error("Failed to get audio URL");
                }

                const audio = new Audio(result.data.url);
                audio.onended = () => {
                    if (generation === generationRef.current) stop();
                };
                audioRef.current = audio;
                setPlayingId(id);
                await audio.play();
            } catch (error) {
                // A stopped preview can reject play() after another has started.
                if (generation !== generationRef.current) return;
                stop();
                throw error;
            }
        },
        [stop],
    );

    return { playingId, toggle, stop } as const;
}
