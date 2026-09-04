"use client";

import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { SubscriptionPlan } from "@/lib/billing/subscription";
import { cn } from "@/lib/utils";

type PaidSubscriptionPlanId = Exclude<SubscriptionPlan["id"], "free">;

interface SubscriptionPlanCardsProps {
  plans: SubscriptionPlan[];
  actionHref?: string;
  busyPlan?: string | null;
  className?: string;
  currentPlan?: string | null;
  onSelectPlan?: (plan: PaidSubscriptionPlanId) => void;
}

export function SubscriptionPlanCards({
  plans,
  actionHref,
  busyPlan = null,
  className,
  currentPlan = null,
  onSelectPlan,
}: SubscriptionPlanCardsProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3", className)}>
      {plans.map((plan) => {
        const isCurrent = currentPlan === plan.id;
        const checkoutPlan = plan.id === "free" ? null : plan.id;
        const actionLabel = isCurrent
          ? "Current plan"
          : plan.id === "free"
            ? "Free plan"
            : `Subscribe to ${plan.name}`;
        const actionClassName = cn(
          "w-full",
          plan.id === "pro" && "bg-cta text-cta-foreground hover:bg-cta/90",
        );
        const actionVariant = plan.id === "pro" && !isCurrent ? "default" : "outline";

        return (
          <Card
            key={plan.id}
            className={cn(
              "relative",
              plan.id === "pro" && "border-cta/40 shadow-sm",
            )}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-2xl font-semibold">
                  ${plan.price_usd}
                  <span className="text-sm font-normal text-muted-foreground">/mo</span>
                </p>
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {actionHref && !isCurrent ? (
                <Button asChild className={actionClassName} variant={actionVariant}>
                  <a href={actionHref}>{actionLabel}</a>
                </Button>
              ) : (
                <Button
                  className={actionClassName}
                  variant={actionVariant}
                  disabled={isCurrent || !checkoutPlan || busyPlan !== null || !onSelectPlan}
                  onClick={checkoutPlan ? () => onSelectPlan?.(checkoutPlan) : undefined}
                >
                  {busyPlan === plan.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Redirecting…
                    </>
                  ) : (
                    actionLabel
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
