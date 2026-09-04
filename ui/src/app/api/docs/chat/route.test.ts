import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/auth/server", () => ({ getServerAccessToken: vi.fn().mockResolvedValue(null) }));
vi.mock("@/lib/apiClient", () => ({ getServerBackendUrl: () => "http://api:8000" }));

import { POST } from "./route";

afterEach(() => vi.unstubAllGlobals());

describe("docs chat proxy", () => {
  it("uses the incoming host when Next normalizes the request URL", async () => {
    const fetchMock = vi.fn().mockResolvedValue(Response.json({ answer: "Hello" }));
    vi.stubGlobal("fetch", fetchMock);
    const response = await POST(new Request("http://localhost:3000/api/docs/chat", { method: "POST", headers: { origin: "http://127.0.0.1:3000", host: "127.0.0.1:3000" }, body: "{}" }));
    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledOnce();
  });

  it("rejects cross-origin requests before calling the backend", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const response = await POST(new Request("http://localhost:3000/api/docs/chat", { method: "POST", headers: { origin: "https://example.com", host: "localhost:3000" }, body: "{}" }));
    expect(response.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
