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
    expect(response.headers.get("location")).toBe("/overview");
  });

  it("does not expose the container bind address behind a reverse proxy", () => {
    const response = GET(
      new NextRequest("https://0.0.0.0:3010/after-sign-in", {
        headers: {
          "x-forwarded-host": "voice.menaceui.com",
          "x-forwarded-proto": "https",
        },
      }),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("/overview");
  });
});
