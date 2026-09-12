import { beforeEach, describe, expect, it, vi } from "vitest";

import LegacyDocsRoute from "./page";

const redirect = vi.hoisted(() => vi.fn(() => { throw new Error("NEXT_REDIRECT"); }));
vi.mock("next/navigation", () => ({ redirect }));

beforeEach(() => {
  redirect.mockClear();
});

describe("legacy docs redirects", () => {
  it.each([
    ["configurations/inference-providers", "/docs#model-setup"],
    ["configurations/api-keys", "/docs#model-setup"],
    ["getting-started/first-agent", "/docs#first-agent"],
    ["getting-started", "/docs#overview"],
    ["getting-started/index", "/docs#overview"],
    ["configurations/unknown", "/docs"],
    ["toString", "/docs"],
  ])("redirects %s to %s", async (path, destination) => {
    await expect(
      LegacyDocsRoute({ params: Promise.resolve({ slug: path.split("/") }) }),
    ).rejects.toThrow("NEXT_REDIRECT");
    expect(redirect).toHaveBeenCalledExactlyOnceWith(destination);
  });
});
