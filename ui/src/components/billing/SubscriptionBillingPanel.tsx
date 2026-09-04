"use client";

import { CreditCard, Loader2, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

import { SubscriptionPlanCards } from "@/components/billing/SubscriptionPlanCards";
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
        <div className="grid gap-4 md:grid-cols-3">
          <Skeleton className="h-80 rounded-lg" />
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

  const currentPlan = status.has_active_subscription ? status.plan : "free";
  const isAccessTrial = !status.has_active_subscription && status.status === "trialing";
  const statusBadgeVariant = status.has_active_subscription ? "default" : "secondary";
  const currentPlanLimits = status.plans.find((plan) => plan.id === currentPlan)?.limits
    ?? status.limits;
  const workflowUsagePercent = currentPlanLimits.max_workflows > 0
    ? Math.min(100, Math.round((status.usage.workflows / currentPlanLimits.max_workflows) * 100))
    : 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div className="space-y-1">
            <CardDescription>Current plan</CardDescription>
            <CardTitle className="flex flex-wrap items-center gap-2 text-3xl">
              <Sparkles className="h-6 w-6 text-muted-foreground" />
              {formatPlanLabel(currentPlan)}
              <Badge variant={statusBadgeVariant}>
                {isAccessTrial
                  ? "Starter trial access"
                  : status.has_active_subscription
                    ? status.status ?? "active"
                    : "current"}
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {status.trial_ends_at && isAccessTrial
                ? `Starter trial access ends ${formatDate(status.trial_ends_at)}`
                : status.trial_ends_at && status.status === "trialing"
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
                {status.usage.workflows} / {currentPlanLimits.max_workflows}
              </span>
            </div>
            <Progress value={workflowUsagePercent} />
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">
              {currentPlanLimits.telephony_enabled ? "Telephony included" : "No telephony"}
            </Badge>
            <Badge variant="outline">
              {currentPlanLimits.campaigns_enabled ? "Campaigns included" : "No campaigns"}
            </Badge>
            <Badge variant="outline">
              {currentPlanLimits.max_concurrent_calls} concurrent calls
            </Badge>
          </div>
        </CardContent>
      </Card>

      <SubscriptionPlanCards
        busyPlan={busyPlan}
        currentPlan={currentPlan}
        onSelectPlan={handleCheckout}
        plans={status.plans}
      />
    </div>
  );
}
