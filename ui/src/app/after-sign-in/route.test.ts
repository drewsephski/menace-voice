// @vitest-environment node
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

import { GET } from "./route";

describe("GET /after-sign-in", () => {
  it("always redirects a completed sign-in to overview", () => {
    const response = GET(
      new NextRequest("https://voice.menaceui.com/after-sign-in"),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "https://voice.menaceui.com/overview",
    );
  });
});
