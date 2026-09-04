export type DocsStreamEvent =
  | { type: "delta"; text: string }
  | { type: "sources"; sources: { title: string; href: string }[] }
  | { type: "done" }
  | { type: "error"; message: string };

export async function* readDocsStream(response: Response): AsyncGenerator<DocsStreamEvent> {
  const reader = response.body?.getReader();
  if (!reader) throw new Error("The reply stream is unavailable.");
  const decoder = new TextDecoder();
  let buffer = "";
  let finished = false;
  try {
    while (!finished) {
      const { done, value } = await reader.read();
      buffer += decoder.decode(value, { stream: !done });
      if (buffer.length > 64000) throw new Error("The reply exceeded its size limit.");
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      if (done && buffer.trim()) { lines.push(buffer); buffer = ""; }
      for (const line of lines) {
        if (!line.trim()) continue;
        const event = JSON.parse(line) as DocsStreamEvent;
        if (event.type === "error") throw new Error(event.message);
        if (event.type === "done") finished = true;
        yield event;
      }
      if (done) break;
    }
    if (!finished) throw new Error("The reply was interrupted. Please try again.");
  } finally {
    await reader.cancel();
    reader.releaseLock();
  }
}
