import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { DocsChat } from "./DocsChat";

vi.mock("./chat.module.css", () => ({ default: {} }));

function Chat() { const [open, setOpen] = useState(false); return <DocsChat currentSlug="overview" open={open} onOpenChange={setOpen} />; }

function streamResponse() {
 const events = [{ type: "delta", text: "Read [MCP](/docs#mcp-bridge) or [external](https://example.com)." }, { type: "sources", sources: [{ title: "MCP bridge", href: "/docs#mcp-bridge" }] }, { type: "done" }];
 return new Response(events.map((event) => JSON.stringify(event)).join("\n") + "\n");
}

beforeEach(() => { Element.prototype.scrollTo = vi.fn(); });
afterEach(() => { vi.unstubAllGlobals(); });

describe("Docs chat", () => {
  it("opens with focus, sends a question, and renders only valid documentation links", async () => {
    const fetchMock = vi.fn().mockResolvedValue(streamResponse());
    vi.stubGlobal("fetch", fetchMock);
    render(<Chat />);
    fireEvent.click(screen.getByRole("button", { name: "Talk to our agent" }));
    expect(document.activeElement).toBe(screen.getByLabelText("Your question"));
    fireEvent.click(screen.getByText("How does the MCP bridge work?"));
    await screen.findByText("Read", { exact: false });
    expect(fetchMock.mock.calls[0][0]).toBe("/api/docs/chat");
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.messages).toEqual([{ role: "user", content: "How does the MCP bridge work?" }]);
    expect(screen.getByRole("link", { name: "MCP" }).getAttribute("href")).toBe("/docs#mcp-bridge");
    expect(screen.queryByRole("link", { name: "external" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Close chat" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  });

  it("preserves the question for retry when the backend fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(Response.json({ detail: "Please try again." }, { status: 503 })));
    render(<Chat />);
    fireEvent.click(screen.getByRole("button", { name: "Talk to our agent" }));
    fireEvent.click(screen.getByText("How does the MCP bridge work?"));
    expect((await screen.findByRole("alert")).textContent).toBe("Please try again.");
    expect((screen.getByLabelText("Your question") as HTMLTextAreaElement).value).toBe("How does the MCP bridge work?");
    expect((screen.getByRole("button", { name: "Send question" }) as HTMLButtonElement).disabled).toBe(false);
  });
});
