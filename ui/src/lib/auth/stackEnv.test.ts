import { afterEach, describe, expect, test, vi } from "vitest";

import { getStackApiUrl, getStackSecretServerKey } from "./stackEnv";

describe("stackEnv", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  test("prefers HEXCLAVE_SECRET_SERVER_KEY over an empty STACK alias", () => {
    vi.stubEnv("HEXCLAVE_SECRET_SERVER_KEY", "ssk_hexclave");
    vi.stubEnv("STACK_SECRET_SERVER_KEY", "   ");
    expect(getStackSecretServerKey()).toBe("ssk_hexclave");
  });

  test("falls back to STACK_SECRET_SERVER_KEY", () => {
    vi.stubEnv("HEXCLAVE_SECRET_SERVER_KEY", "");
    vi.stubEnv("STACK_SECRET_SERVER_KEY", "ssk_stack");
    expect(getStackSecretServerKey()).toBe("ssk_stack");
  });

  test("returns undefined when both secrets are blank", () => {
    vi.stubEnv("HEXCLAVE_SECRET_SERVER_KEY", "");
    vi.stubEnv("STACK_SECRET_SERVER_KEY", "");
    expect(getStackSecretServerKey()).toBeUndefined();
  });

  test("reads HEXCLAVE_API_URL", () => {
    vi.stubEnv("HEXCLAVE_API_URL", "https://api.hexclave.com");
    expect(getStackApiUrl()).toBe("https://api.hexclave.com");
  });
});
