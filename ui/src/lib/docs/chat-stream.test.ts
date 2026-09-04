import { describe, expect, it } from "vitest";

import { readDocsStream } from "./chat-stream";

async function collect(response: Response) {
  const events = [];
  for await (const event of readDocsStream(response)) events.push(event);
  return events;
}

describe("chat stream", () => {
  it("parses JSON and multibyte text split across transport chunks", async () => {
    const bytes = new TextEncoder().encode('{"type":"delta","text":"Hello 👋"}\n{"type":"done"}\n');
    const response = new Response(new ReadableStream({ start(controller) { for (const byte of bytes) controller.enqueue(Uint8Array.of(byte)); controller.close(); } }));
    expect(await collect(response)).toEqual([{ type: "delta", text: "Hello 👋" }, { type: "done" }]);
  });
  it("does not report a truncated stream as complete", async () => {
    await expect(collect(new Response('{"type":"delta","text":"partial"}\n'))).rejects.toThrow("interrupted");
  });
  it("surfaces a provider failure during a reply", async () => {
    await expect(collect(new Response('{"type":"error","message":"Try again."}\n'))).rejects.toThrow("Try again.");
  });
});
