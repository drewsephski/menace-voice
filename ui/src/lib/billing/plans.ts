import type { SubscriptionPlan } from "./subscription";

export const PUBLIC_SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Free",
    price_usd: 0,
    description: "For building and testing your first voice agent.",
    features: [
      "1 voice agent",
      "Visual agent builder",
      "WebRTC testing",
      "Bring your own AI provider keys",
    ],
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
    features: [
      "10 voice agents",
      "Telephony (inbound & outbound)",
      "5 concurrent calls",
      "WebRTC testing",
      "Email support",
    ],
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
    features: [
      "50 voice agents",
      "Telephony (inbound & outbound)",
      "Outbound campaigns",
      "20 concurrent calls",
      "Priority support",
    ],
    limits: {
      max_workflows: 50,
      telephony_enabled: true,
      campaigns_enabled: true,
      max_concurrent_calls: 20,
    },
  },
];
