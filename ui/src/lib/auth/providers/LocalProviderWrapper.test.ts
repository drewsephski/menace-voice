import { describe, expect, it } from "vitest";

import { isPublicPath } from "@/middleware";

import { isPublicAuthPath } from "./LocalProviderWrapper";

describe("isPublicAuthPath", () => {
  it.each(["/", "/auth/login", "/auth/signup", "/embed", "/embed/widget.js", "/docs", "/docs/getting-started", "/pilot", "/handler/sign-in", "/after-sign-in"])(
    "keeps %s available without a local session",
    (pathname) => {
      expect(isPublicAuthPath(pathname)).toBe(true);
    },
  );

  it.each(["/workflow", "/settings", "/authentic", "/embed-admin", "/pilot-admin"])(
    "still protects %s",
    (pathname) => {
      expect(isPublicAuthPath(pathname)).toBe(false);
    },
  );

  it.each(["/handler/sign-in", "/after-sign-in"])("keeps Stack handler routes public in middleware: %s", (pathname) => {
    expect(isPublicPath(pathname)).toBe(true);
  });

  it("matches the middleware public route allowlist for /pilot", () => {
    expect(isPublicPath("/pilot")).toBe(true);
  });

  it.each(["/pilot/details", "/pilot-admin"])("does not expose unapproved pilot paths through middleware: %s", (pathname) => {
    expect(isPublicPath(pathname)).toBe(false);
  });

  it.each(["/pilot"])("matches the local auth public route allowlist for %s", (pathname) => {
    expect(isPublicAuthPath(pathname)).toBe(true);
  });

  it.each(["/pilot/details", "/pilot-admin"])("does not expose unapproved pilot paths through local auth: %s", (pathname) => {
    expect(isPublicAuthPath(pathname)).toBe(false);
  });

});
