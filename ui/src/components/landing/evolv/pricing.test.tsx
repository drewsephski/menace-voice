import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SubscriptionPlanCards } from "@/components/billing/SubscriptionPlanCards";
import { PUBLIC_SUBSCRIPTION_PLANS } from "@/lib/billing/plans";

describe("Pricing", () => {
  it("reuses the billing plan cards with landing-page actions", () => {
    render(
      <SubscriptionPlanCards
        actionHref="/auth/signup"
        plans={PUBLIC_SUBSCRIPTION_PLANS}
      />,
    );

    expect(screen.getByRole("heading", { name: "Free" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Starter" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Pro" })).toBeTruthy();

    for (const label of ["Free plan", "Subscribe to Starter", "Subscribe to Pro"]) {
      const action = screen.getByRole("link", { name: label });
      expect(action.getAttribute("href")).toBe("/auth/signup");
      expect(action.closest(".card-weave")).toBeTruthy();
    }
  });
});
