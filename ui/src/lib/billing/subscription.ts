import { client } from "@/client/client.gen";

export interface SubscriptionLimits {
  max_workflows: number;
  telephony_enabled: boolean;
  campaigns_enabled: boolean;
  max_concurrent_calls: number;
}

export interface SubscriptionPlan {
  id: "starter" | "pro";
  name: string;
  price_usd: number;
  description: string;
  features: string[];
  limits: SubscriptionLimits;
}

export interface SubscriptionStatus {
  stripe_enabled: boolean;
  plan: string;
  status: string | null;
  is_active: boolean;
  has_billing_account: boolean;
  trial_ends_at: string | null;
  current_period_end: string | null;
  limits: SubscriptionLimits;
  usage: { workflows: number };
  plans: SubscriptionPlan[];
}

export async function fetchSubscriptionStatus(): Promise<SubscriptionStatus> {
  const response = await client.get<SubscriptionStatus>({
    url: "/api/v1/organizations/billing/subscription",
  });
  if (response.error || !response.data) {
    throw new Error("Failed to load subscription status");
  }
  return response.data;
}

export async function startSubscriptionCheckout(plan: "starter" | "pro"): Promise<string> {
  const response = await client.post<{ checkout_url: string }>({
    url: "/api/v1/organizations/billing/subscription/checkout",
    body: { plan },
  });
  if (response.error || !response.data?.checkout_url) {
    throw new Error("Failed to start checkout");
  }
  return response.data.checkout_url;
}

export async function openSubscriptionPortal(): Promise<string> {
  const response = await client.post<{ portal_url: string }>({
    url: "/api/v1/organizations/billing/subscription/portal",
  });
  if (response.error || !response.data?.portal_url) {
    throw new Error("Failed to open billing portal");
  }
  return response.data.portal_url;
}
