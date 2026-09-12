import { describe, expect, it } from "vitest";

import { isPublicPath } from "@/middleware";

import { isPublicAuthPath } from "./LocalProviderWrapper";

describe("isPublicAuthPath", () => {
  it.each(["/", "/auth/login", "/auth/signup", "/embed", "/embed/widget.js", "/docs", "/docs/getting-started", "/handler/sign-in", "/after-sign-in"])(
    "keeps %s available without a local session",
    (pathname) => {
      expect(isPublicAuthPath(pathname)).toBe(true);
    },
  );

  it.each(["/workflow", "/settings", "/authentic", "/embed-admin", "/pilot", "/pilot-admin"])(
    "still protects %s",
    (pathname) => {
      expect(isPublicAuthPath(pathname)).toBe(false);
    },
  );

  it.each(["/handler/sign-in", "/after-sign-in"])("keeps Stack handler routes public in middleware: %s", (pathname) => {
    expect(isPublicPath(pathname)).toBe(true);
  });

  it.each(["/pilot", "/pilot/details", "/pilot-admin"])("does not expose pilot paths without auth: %s", (pathname) => {
    expect(isPublicPath(pathname)).toBe(false);
    expect(isPublicAuthPath(pathname)).toBe(false);
  });

});
