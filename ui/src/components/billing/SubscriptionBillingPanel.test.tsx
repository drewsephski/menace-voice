import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { SubscriptionStatus } from "@/lib/billing/subscription";

import { SubscriptionBillingPanel } from "./SubscriptionBillingPanel";

const mocks = vi.hoisted(() => ({
  fetchSubscriptionStatus: vi.fn(),
  searchParams: new URLSearchParams(),
}));

vi.mock("next/navigation", () => ({
  useSearchParams: () => mocks.searchParams,
}));

vi.mock("sonner", () => ({
  toast: { error: vi.fn() },
}));

vi.mock("@/lib/billing/subscription", () => ({
  fetchSubscriptionStatus: mocks.fetchSubscriptionStatus,
  openSubscriptionPortal: vi.fn(),
  startSubscriptionCheckout: vi.fn(),
}));

const plans: SubscriptionStatus["plans"] = [
  {
    id: "free",
    name: "Free",
    price_usd: 0,
    description: "For building and testing your first voice agent.",
    features: ["1 voice agent", "WebRTC testing"],
    limits: {
      max_workflows: 1,
      telephony_enabled: false,
      campaigns_enabled: false,
      max_concurrent_calls: 1,
    },
  },
  {
    id: "starter",
    name: "Starter",
    price_usd: 49,
    description: "For teams shipping their first production voice agents.",
    features: ["10 voice agents", "Telephony"],
    limits: {
      max_workflows: 10,
      telephony_enabled: true,
      campaigns_enabled: false,
      max_concurrent_calls: 5,
    },
  },
  {
    id: "pro",
    name: "Pro",
    price_usd: 149,
    description: "For growing teams running campaigns at scale.",
    features: ["50 voice agents", "Outbound campaigns"],
    limits: {
      max_workflows: 50,
      telephony_enabled: true,
      campaigns_enabled: true,
      max_concurrent_calls: 20,
    },
  },
];

const trialStatus: SubscriptionStatus = {
  stripe_enabled: true,
  plan: "starter",
  status: "trialing",
  is_active: true,
  has_active_subscription: false,
  has_billing_account: false,
  trial_ends_at: "2026-09-18T00:00:00Z",
  current_period_end: null,
  limits: plans[1].limits,
  usage: { workflows: 1 },
  plans,
};

describe("SubscriptionBillingPanel", () => {
  beforeEach(() => {
    mocks.fetchSubscriptionStatus.mockReset();
  });

  it("marks Free as current before the organization subscribes", async () => {
    mocks.fetchSubscriptionStatus.mockResolvedValue(trialStatus);

    render(<SubscriptionBillingPanel />);

    const currentPlanButton = await screen.findByRole("button", {
      name: "Current plan",
    });
    expect(currentPlanButton.closest(".card-weave")?.textContent).toContain("Free");
    expect(
      screen.getByRole("button", { name: "Subscribe to Starter" }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: /Free Starter trial access/ })).toBeTruthy();
    expect(screen.getByText("1 / 1")).toBeTruthy();
  });

  it("marks the paid plan as current after a subscription is active", async () => {
    mocks.fetchSubscriptionStatus.mockResolvedValue({
      ...trialStatus,
      plan: "pro",
      status: "active",
      has_active_subscription: true,
      has_billing_account: true,
      trial_ends_at: null,
      current_period_end: "2026-10-04T00:00:00Z",
      limits: plans[2].limits,
    });

    render(<SubscriptionBillingPanel />);

    const currentPlanButton = await screen.findByRole("button", {
      name: "Current plan",
    });
    expect(currentPlanButton.closest(".card-weave")?.textContent).toContain("Pro");
    expect(currentPlanButton.className).toContain("dark:text-foreground");
    expect(screen.getByRole("button", { name: "Free plan" })).toBeTruthy();
  });
});
