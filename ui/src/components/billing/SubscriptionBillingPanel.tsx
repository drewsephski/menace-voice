"use client";

import { Check, CreditCard, Loader2, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchSubscriptionStatus,
  openSubscriptionPortal,
  startSubscriptionCheckout,
  type SubscriptionStatus,
} from "@/lib/billing/subscription";
import { cn } from "@/lib/utils";

const formatPlanLabel = (plan: string) => plan.charAt(0).toUpperCase() + plan.slice(1);

const formatDate = (value: string | null) => {
  if (!value) return null;
  return new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export function SubscriptionBillingPanel() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [busyPlan, setBusyPlan] = useState<string | null>(null);
  const [portalBusy, setPortalBusy] = useState(false);

  const loadStatus = useCallback(async () => {
    setLoading(true);
    try {
      setStatus(await fetchSubscriptionStatus());
    } catch {
      toast.error("Failed to load subscription details");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStatus();
  }, [loadStatus]);

  useEffect(() => {
    if (searchParams.get("checkout") === "success") {
      loadStatus();
    }
  }, [searchParams, loadStatus]);

  const handleCheckout = async (plan: "starter" | "pro") => {
    setBusyPlan(plan);
    try {
      const url = await startSubscriptionCheckout(plan);
      window.location.href = url;
    } catch {
      toast.error("Could not start checkout. Check Stripe configuration.");
      setBusyPlan(null);
    }
  };

  const handlePortal = async () => {
    setPortalBusy(true);
    try {
      const url = await openSubscriptionPortal();
      window.location.href = url;
    } catch {
      toast.error("Could not open billing portal");
      setPortalBusy(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-36 rounded-lg" />
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-80 rounded-lg" />
          <Skeleton className="h-80 rounded-lg" />
        </div>
      </div>
    );
  }

  if (!status) {
    return (
      <Card>
        <CardContent className="py-10 text-center text-muted-foreground">
          Subscription details are unavailable.
        </CardContent>
      </Card>
    );
  }

  const workflowUsagePercent = status.limits.max_workflows > 0
    ? Math.min(100, Math.round((status.usage.workflows / status.limits.max_workflows) * 100))
    : 0;

  const statusBadgeVariant = status.is_active ? "default" : "secondary";

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div className="space-y-1">
            <CardDescription>Current plan</CardDescription>
            <CardTitle className="flex flex-wrap items-center gap-2 text-3xl">
              <Sparkles className="h-6 w-6 text-muted-foreground" />
              {formatPlanLabel(status.plan)}
              <Badge variant={statusBadgeVariant}>{status.status ?? "inactive"}</Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {status.trial_ends_at && status.status === "trialing"
                ? `Trial ends ${formatDate(status.trial_ends_at)}`
                : status.current_period_end
                  ? `Renews ${formatDate(status.current_period_end)}`
                  : "Subscribe to unlock production features"}
            </p>
          </div>
          {status.has_billing_account && (
            <Button variant="outline" onClick={handlePortal} disabled={portalBusy}>
              {portalBusy ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <CreditCard className="mr-2 h-4 w-4" />
              )}
              Manage billing
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>Agents</span>
              <span className="text-muted-foreground">
                {status.usage.workflows} / {status.limits.max_workflows}
              </span>
            </div>
            <Progress value={workflowUsagePercent} />
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">
              {status.limits.telephony_enabled ? "Telephony included" : "No telephony"}
            </Badge>
            <Badge variant="outline">
              {status.limits.campaigns_enabled ? "Campaigns included" : "No campaigns"}
            </Badge>
            <Badge variant="outline">
              {status.limits.max_concurrent_calls} concurrent calls
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {status.plans.map((plan) => {
          const isCurrent = status.plan === plan.id && status.is_active;
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
                <Button
                  className={cn(
                    "w-full",
                    plan.id === "pro" && "bg-cta text-cta-foreground hover:bg-cta/90",
                  )}
                  variant={plan.id === "pro" ? "default" : "outline"}
                  disabled={isCurrent || busyPlan !== null}
                  onClick={() => handleCheckout(plan.id)}
                >
                  {busyPlan === plan.id ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Redirecting…
                    </>
                  ) : isCurrent ? (
                    "Current plan"
                  ) : (
                    `Subscribe to ${plan.name}`
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
