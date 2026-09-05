"use client";

import { Mic, Square, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

interface Props {
  disabled: boolean;
  onChange: (file: File | null) => void;
}

export function VoiceSampleRecorder({ disabled, onChange }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const recorder = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const mounted = useRef(true);
  const [recording, setRecording] = useState(false);
  const [starting, setStarting] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [sample, setSample] = useState<File | null>(null);
  const [url, setUrl] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (recorder.current?.state === "recording") recorder.current.stop();
      stream.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (!sample) { setUrl(undefined); return; }
    const next = URL.createObjectURL(sample);
    setUrl(next);
    return () => URL.revokeObjectURL(next);
  }, [sample]);

  useEffect(() => {
    if (!recording) return;
    const startedAt = Date.now();
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      setSeconds(elapsed);
      if (elapsed >= 175 && recorder.current?.state === "recording") recorder.current.stop();
    }, 250);
    return () => clearInterval(timer);
  }, [recording]);

  function selectSample(file: File | null) {
    setError(undefined);
    if (file && file.size > 20 * 1024 * 1024) {
      setError("Choose an audio file smaller than 20 MB.");
      return;
    }
    setSample(file);
    onChange(file);
  }

  async function start() {
    setError(undefined);
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setError("Recording is unavailable in this browser. Upload an audio file instead.");
      return;
    }
    setStarting(true);
    try {
      const media = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!mounted.current) { media.getTracks().forEach((track) => track.stop()); return; }
      stream.current = media;
      const mimeType = ["audio/webm;codecs=opus", "audio/mp4", "audio/webm"].find((type) => MediaRecorder.isTypeSupported(type));
      const next = new MediaRecorder(media, mimeType ? { mimeType } : undefined);
      recorder.current = next;
      const chunks: Blob[] = [];
      next.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data); };
      next.onstop = () => {
        media.getTracks().forEach((track) => track.stop());
        if (!mounted.current) return;
        setRecording(false);
        const type = next.mimeType || "audio/webm";
        selectSample(new File(chunks, `my-voice.${type.includes("mp4") ? "m4a" : "webm"}`, { type }));
      };
      next.onerror = () => {
        media.getTracks().forEach((track) => track.stop());
        if (mounted.current) { setError("Recording failed. Please try again or upload a file."); setRecording(false); }
      };
      selectSample(null);
      next.start(1000);
      setSeconds(0);
      setRecording(true);
    } catch {
      stream.current?.getTracks().forEach((track) => track.stop());
      if (mounted.current) setError("Microphone access was not available. Allow microphone access or upload a recording.");
    } finally {
      if (mounted.current) setStarting(false);
    }
  }

  return <div className="space-y-3">
    <div className="flex flex-wrap items-center gap-3">
      {recording ? <Button type="button" variant="destructive" onClick={() => recorder.current?.stop()}><Square className="mr-2 h-4 w-4" />Stop recording · {seconds}s</Button>
        : <Button type="button" variant="outline" disabled={disabled || starting} onClick={start}><Mic className="mr-2 h-4 w-4" />{starting ? "Connecting microphone…" : "Record my voice"}</Button>}
      <Button type="button" variant="outline" disabled={disabled || recording || starting} onClick={() => input.current?.click()}><Upload className="mr-2 h-4 w-4" />Upload audio</Button>
      <input ref={input} type="file" accept="audio/*,.mp3,.wav,.m4a,.webm,.ogg,.flac" className="hidden" onChange={(event) => { selectSample(event.target.files?.[0] ?? null); event.target.value = ""; }} />
    </div>
    {recording && <p className="text-sm text-muted-foreground" role="status">Speak naturally for 1–2 minutes. At least 30 seconds is required.</p>}
    {sample && <p className="break-all text-sm text-muted-foreground">{sample.name} · {(sample.size / 1024 / 1024).toFixed(1)} MB</p>}
    {url && <audio controls src={url} className="w-full" aria-label="Your original voice recording" />}
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
  </div>;
}
