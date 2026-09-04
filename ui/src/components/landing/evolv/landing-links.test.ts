import { describe, expect, test } from "vitest";

import { getLandingNavigation } from "./landing-links";

describe("getLandingNavigation", () => {
  test("sends stack installs to the Stack handler", () => {
    const navigation = getLandingNavigation("stack", true);
    expect(navigation.signIn).toBe("/handler/sign-in");
    expect(navigation.startBuilding).toBe("/handler/sign-up");
  });

  test("keeps local email/password routes when signup is enabled", () => {
    const navigation = getLandingNavigation("local", true);
    expect(navigation.signIn).toBe("/auth/login");
    expect(navigation.startBuilding).toBe("/auth/signup");
  });

  test("hides signup when the backend disables it", () => {
    expect(getLandingNavigation("stack", false).startBuilding).toBe(
      "/handler/sign-in",
    );
    expect(getLandingNavigation("local", false).startBuilding).toBe(
      "/auth/login",
    );
  });
});
