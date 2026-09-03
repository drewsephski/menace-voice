import { describe, expect, it } from "vitest";

import { isPublicAuthPath } from "./LocalProviderWrapper";

describe("isPublicAuthPath", () => {
  it.each(["/", "/auth/login", "/auth/signup", "/embed", "/embed/widget.js", "/docs", "/docs/getting-started"])(
    "keeps %s available without a local session",
    (pathname) => {
      expect(isPublicAuthPath(pathname)).toBe(true);
    },
  );

  it.each(["/workflow", "/settings", "/authentic", "/embed-admin"])(
    "still protects %s",
    (pathname) => {
      expect(isPublicAuthPath(pathname)).toBe(false);
    },
  );
});
