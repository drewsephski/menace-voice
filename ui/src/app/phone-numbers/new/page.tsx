"use client";

import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Phone,
  Radio,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import {
  createPhoneNumberApiV1OrganizationsTelephonyConfigsConfigIdPhoneNumbersPost,
  createTelephonyConfigurationApiV1OrganizationsTelephonyConfigsPost,
  getTelephonyProvidersMetadataApiV1OrganizationsTelephonyProvidersMetadataGet,
  getWorkflowsSummaryApiV1WorkflowSummaryGet,
  listTelephonyConfigurationsApiV1OrganizationsTelephonyConfigsGet,
} from "@/client/sdk.gen";
import type {
  TelephonyConfigurationCreateRequest,
  TelephonyConfigurationListItem,
  TelephonyProviderMetadata,
} from "@/client/types.gen";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { detailFromError } from "@/lib/apiError";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

type TelephonyConfigPayload = TelephonyConfigurationCreateRequest["config"];
type FieldValue = string | number | boolean | undefined;
type FieldValues = Record<string, FieldValue>;
type ConnectionChoice = `existing:${number}` | `new:${string}`;

const STEPS = ["Provider", "Connect", "Number", "Agent"] as const;
const NO_WORKFLOW = "__none__";
const ADDRESS_FORMAT_STRIP_RE = /[\s\-()]/g;
const ADDRESS_E164_RE = /^\+\d{8,15}$/;
const ADDRESS_BARE_DIGITS_RE = /^\d{8,15}$/;

function validateAddress(rawAddress: string, countryCode: string): string | null {
  const trimmed = rawAddress.trim();
  if (!trimmed) return "Enter the phone number you want to connect.";
  if (/^sips?:/i.test(trimmed)) return null;
  const stripped = trimmed.replace(ADDRESS_FORMAT_STRIP_RE, "");
  if (ADDRESS_E164_RE.test(stripped)) return null;
  if (ADDRESS_BARE_DIGITS_RE.test(stripped) && !countryCode.trim()) {
    return "Include the country code, for example +1 415 555 1234.";
  }
  return "Enter a complete phone number with country code, for example +1 415 555 1234.";
}

function nestValues(values: FieldValues): Record<string, unknown> {
  const nested: Record<string, unknown> = {};
  for (const [path, value] of Object.entries(values)) {
    if (value === undefined || value === "") continue;
    const parts = path.split(".");
    let current = nested;
    for (const part of parts.slice(0, -1)) {
      const child = current[part];
      if (!child || typeof child !== "object" || Array.isArray(child)) {
        current[part] = {};
      }
      current = current[part] as Record<string, unknown>;
    }
    current[parts[parts.length - 1]] = value;
  }
  return nested;
}

function providerLabel(provider: string) {
  return provider.charAt(0).toUpperCase() + provider.slice(1);
}

export default function NewPhoneNumberPage() {
  const router = useRouter();
  const { user, getAccessToken, loading: authLoading } = useAuth();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [connections, setConnections] = useState<TelephonyConfigurationListItem[]>([]);
  const [providers, setProviders] = useState<TelephonyProviderMetadata[]>([]);
  const [workflows, setWorkflows] = useState<{ id: number; name: string }[]>([]);
  const [choice, setChoice] = useState<ConnectionChoice | "">("");
  const [connectionName, setConnectionName] = useState("");
  const [credentialValues, setCredentialValues] = useState<FieldValues>({});
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const [label, setLabel] = useState("");
  const [workflowId, setWorkflowId] = useState(NO_WORKFLOW);
  const [addressTouched, setAddressTouched] = useState(false);
  const [createdConnectionId, setCreatedConnectionId] = useState<number | null>(null);

  useEffect(() => {
    if (authLoading || !user) return;
    let cancelled = false;
    void (async () => {
      try {
        const token = await getAccessToken();
        const [connectionResponse, providerResponse, workflowResponse] =
          await Promise.all([
            listTelephonyConfigurationsApiV1OrganizationsTelephonyConfigsGet({
              headers: { Authorization: `Bearer ${token}` },
            }),
            getTelephonyProvidersMetadataApiV1OrganizationsTelephonyProvidersMetadataGet({
              headers: { Authorization: `Bearer ${token}` },
            }),
            getWorkflowsSummaryApiV1WorkflowSummaryGet({
              headers: { Authorization: `Bearer ${token}` },
              query: { status: "active" },
            }),
          ]);
        if (connectionResponse.error) {
          throw new Error(detailFromError(connectionResponse.error));
        }
        if (providerResponse.error) {
          throw new Error(detailFromError(providerResponse.error));
        }
        if (workflowResponse.error) {
          throw new Error(detailFromError(workflowResponse.error));
        }
        if (cancelled) return;
        const connectionItems = connectionResponse.data?.configurations;
        const providerItems = providerResponse.data?.providers;
        const workflowItems = workflowResponse.data;
        const availableConnections = Array.isArray(connectionItems)
          ? connectionItems.filter((item) => !item.inactive)
          : [];
        const availableProviders = Array.isArray(providerItems) ? providerItems : [];
        setConnections(availableConnections);
        setProviders(availableProviders);
        setWorkflows(
          (Array.isArray(workflowItems) ? workflowItems : []).map((workflow) => ({
            id: workflow.id,
            name: workflow.name,
          })),
        );
        const defaultConnection =
          availableConnections.find((item) => item.is_default_outbound) ??
          availableConnections[0];
        if (defaultConnection) {
          setChoice(`existing:${defaultConnection.id}`);
        } else if (availableProviders[0]) {
          setChoice(`new:${availableProviders[0].provider}`);
          setConnectionName(`${availableProviders[0].display_name} connection`);
        }
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to start phone setup",
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [authLoading, getAccessToken, user]);

  const selectedConnectionId = choice.startsWith("existing:")
    ? Number(choice.slice("existing:".length))
    : null;
  const selectedProviderName = choice.startsWith("new:")
    ? choice.slice("new:".length)
    : null;
  const selectedConnection = connections.find(
    (connection) => connection.id === selectedConnectionId,
  );
  const selectedProvider = providers.find(
    (provider) => provider.provider === selectedProviderName,
  );
  const visibleFields = useMemo(
    () =>
      (Array.isArray(selectedProvider?.fields) ? selectedProvider.fields : []).filter(
        (field) =>
          field.name !== "from_numbers" &&
          field.type !== "readonly" &&
          (!field.visible_when ||
            credentialValues[field.visible_when.field] === field.visible_when.equals),
      ) ?? [],
    [credentialValues, selectedProvider],
  );
  const requiredCredentialsComplete = visibleFields.every(
    (field) =>
      !field.required ||
      credentialValues[field.name] === true ||
      (credentialValues[field.name] !== undefined &&
        credentialValues[field.name] !== ""),
  );
  const addressError = validateAddress(address, countryCode);
  const selectedWorkflow = workflows.find(
    (workflow) => String(workflow.id) === workflowId,
  );

  const chooseNewProvider = (provider: TelephonyProviderMetadata) => {
    setCreatedConnectionId(null);
    setChoice(`new:${provider.provider}`);
    setConnectionName(`${provider.display_name} connection`);
    setCredentialValues({});
  };

  const canContinue =
    step === 0
      ? !!choice
      : step === 1
        ? !!selectedConnection ||
          (!!selectedProvider && !!connectionName.trim() && requiredCredentialsComplete)
        : step === 2
          ? !addressError
          : true;

  const savePhoneNumber = async () => {
    if (addressError) {
      setAddressTouched(true);
      setStep(2);
      return;
    }
    setSubmitting(true);
    try {
      const token = await getAccessToken();
      let connectionId = createdConnectionId ?? selectedConnectionId;

      if (!connectionId && selectedProvider) {
        const configPayload = {
          provider: selectedProvider.provider,
          ...nestValues(credentialValues),
        } as unknown as TelephonyConfigPayload;
        const response =
          await createTelephonyConfigurationApiV1OrganizationsTelephonyConfigsPost({
            headers: { Authorization: `Bearer ${token}` },
            body: {
              name: connectionName.trim(),
              is_default_outbound: connections.length === 0,
              config: configPayload,
            },
          });
        if (response.error || !response.data) {
          throw new Error(
            detailFromError(response.error, "Could not connect your phone provider"),
          );
        }
        connectionId = response.data.id;
        setCreatedConnectionId(connectionId);
      }

      if (!connectionId) throw new Error("Choose a phone provider to continue");

      const response =
        await createPhoneNumberApiV1OrganizationsTelephonyConfigsConfigIdPhoneNumbersPost(
          {
            headers: { Authorization: `Bearer ${token}` },
            path: { config_id: connectionId },
            body: {
              address: address.trim(),
              country_code: countryCode || undefined,
              label: label.trim() || undefined,
              is_active: true,
              is_default_caller_id:
                !selectedConnection || selectedConnection.phone_number_count === 0,
              inbound_workflow_id:
                workflowId === NO_WORKFLOW ? undefined : Number(workflowId),
            },
          },
        );
      if (response.error) {
        throw new Error(
          detailFromError(response.error, "Could not add your phone number"),
        );
      }
      if (response.data?.provider_sync && !response.data.provider_sync.ok) {
        toast.warning(
          response.data.provider_sync.message ??
            "The number was saved, but your carrier still needs attention.",
        );
      } else {
        toast.success("Phone number is ready");
      }
      router.push("/phone-numbers");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not add your phone number",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const updateCredential = (fieldName: string, value: FieldValue) => {
    setCredentialValues((current) => ({ ...current, [fieldName]: value }));
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/20 via-background to-background">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:py-10">
        <Button asChild variant="ghost" className="mb-5 -ml-3 text-muted-foreground">
          <Link href="/phone-numbers">
            <ArrowLeft className="size-4" />
            Phone numbers
          </Link>
        </Button>

        <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:pt-2">
            <div className="mb-5">
              <p className="text-sm font-medium">Add a phone number</p>
              <p className="mt-1 text-xs text-muted-foreground">
                About 3 minutes
              </p>
            </div>
            <Progress value={((step + 1) / STEPS.length) * 100} className="mb-5 h-1" />
            <ol className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-1">
              {STEPS.map((label, index) => (
                <li key={label}>
                  <button
                    type="button"
                    disabled={index > step}
                    onClick={() => index < step && setStep(index)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs transition-colors lg:text-sm",
                      index === step && "bg-muted font-medium text-foreground",
                      index < step && "text-foreground hover:bg-muted/60",
                      index > step && "cursor-default text-muted-foreground/50",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px]",
                        index < step && "border-primary bg-primary text-primary-foreground",
                        index === step && "border-foreground",
                      )}
                    >
                      {index < step ? <Check className="size-3" /> : index + 1}
                    </span>
                    <span className="hidden lg:inline">{label}</span>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <Card className="rounded-2xl bg-background/95 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              {step === 0 && (
                <div>
                  <div className="mb-7">
                    <p className="text-sm font-medium text-muted-foreground">Step 1 of 4</p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                      Where is your number hosted?
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Reuse a connection you already set up, or connect the carrier
                      that owns your number.
                    </p>
                  </div>

                  {connections.length > 0 && (
                    <div className="mb-7 space-y-3">
                      <Label>Connected providers</Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {connections.map((connection) => {
                          const value: ConnectionChoice = `existing:${connection.id}`;
                          const selected = choice === value;
                          return (
                            <button
                              key={connection.id}
                              type="button"
                              onClick={() => {
                                setCreatedConnectionId(null);
                                setChoice(value);
                              }}
                              className={cn(
                                "flex items-start gap-3 rounded-xl border p-4 text-left transition-colors hover:bg-muted/40",
                                selected && "border-primary bg-primary/5 ring-1 ring-primary",
                              )}
                            >
                              <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-muted">
                                <Radio className="size-4" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-sm font-medium">
                                  {connection.name}
                                </span>
                                <span className="mt-1 block text-xs text-muted-foreground">
                                  {providerLabel(connection.provider)} ·{" "}
                                  {connection.phone_number_count ?? 0} numbers
                                </span>
                              </span>
                              {selected && <CheckCircle2 className="size-4 text-primary" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <Label>{connections.length > 0 ? "Connect another provider" : "Phone provider"}</Label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {providers.map((provider) => {
                        const selected = choice === `new:${provider.provider}`;
                        return (
                          <button
                            key={provider.provider}
                            type="button"
                            onClick={() => chooseNewProvider(provider)}
                            className={cn(
                              "flex items-center gap-3 rounded-xl border p-4 text-left transition-colors hover:bg-muted/40",
                              selected && "border-primary bg-primary/5 ring-1 ring-primary",
                            )}
                          >
                            <span className="flex size-9 items-center justify-center rounded-lg border bg-background text-sm font-semibold uppercase">
                              {provider.display_name.slice(0, 1)}
                            </span>
                            <span className="flex-1 text-sm font-medium">
                              {provider.display_name}
                            </span>
                            {selected && <CheckCircle2 className="size-4 text-primary" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <div className="mb-7">
                    <p className="text-sm font-medium text-muted-foreground">Step 2 of 4</p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                      {selectedConnection ? "Connection ready" : `Connect ${selectedProvider?.display_name ?? "provider"}`}
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {selectedConnection
                        ? "We already have the carrier details needed for this number."
                        : "These details let Menace Voice place and receive calls through your carrier."}
                    </p>
                  </div>

                  {selectedConnection ? (
                    <div className="flex items-start gap-4 rounded-xl border bg-emerald-50/60 p-5 dark:bg-emerald-950/20">
                      <span className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                        <ShieldCheck className="size-5" />
                      </span>
                      <div>
                        <p className="font-medium">{selectedConnection.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Connected to {providerLabel(selectedConnection.provider)}.
                          You can update credentials later in connection settings.
                        </p>
                      </div>
                    </div>
                  ) : selectedProvider ? (
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="connection-name">Connection name</Label>
                        <Input
                          id="connection-name"
                          value={connectionName}
                          onChange={(event) => setConnectionName(event.target.value)}
                          placeholder="Main phone account"
                        />
                        <p className="text-xs text-muted-foreground">
                          Only your team sees this name.
                        </p>
                      </div>

                      <div className="border-t pt-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <Label>Carrier account details</Label>
                          {selectedProvider.docs_url && (
                            <a
                              href={selectedProvider.docs_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                            >
                              Where to find these <ExternalLink className="size-3" />
                            </a>
                          )}
                        </div>
                        <div className="space-y-4">
                          {visibleFields.map((field) => (
                            <div key={field.name} className="space-y-2">
                              <Label htmlFor={`provider-${field.name}`}>
                                {field.label}
                                {!field.required && (
                                  <span className="ml-1 font-normal text-muted-foreground">
                                    (optional)
                                  </span>
                                )}
                              </Label>
                              <ProviderField
                                field={field}
                                value={credentialValues[field.name]}
                                onChange={(value) => updateCredential(field.name, value)}
                              />
                              {field.description && (
                                <p className="text-xs leading-5 text-muted-foreground">
                                  {field.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="mb-7">
                    <p className="text-sm font-medium text-muted-foreground">Step 3 of 4</p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                      Add your phone number
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Use the number exactly as it appears in your carrier account.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone-number">Phone number</Label>
                      <Input
                        id="phone-number"
                        autoFocus
                        inputMode="tel"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        onBlur={() => setAddressTouched(true)}
                        placeholder="+1 415 555 1234"
                        aria-invalid={addressTouched && !!addressError}
                        className="h-12 text-base"
                      />
                      {addressTouched && addressError ? (
                        <p className="flex items-center gap-1.5 text-xs text-destructive">
                          <AlertCircle className="size-3.5" />
                          {addressError}
                        </p>
                      ) : (
                        <p className="text-xs text-muted-foreground">
                          Include the country code so calls route correctly.
                        </p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          maxLength={2}
                          value={countryCode}
                          onChange={(event) =>
                            setCountryCode(event.target.value.toUpperCase())
                          }
                          placeholder="US"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="number-label">Label (optional)</Label>
                        <Input
                          id="number-label"
                          value={label}
                          onChange={(event) => setLabel(event.target.value)}
                          placeholder="Main office"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl border bg-muted/30 p-4">
                      <p className="text-sm font-medium">Need a new number?</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Buy a number from {selectedConnection ? providerLabel(selectedConnection.provider) : selectedProvider?.display_name ?? "your provider"}, then return here to connect it. Menace Voice does not purchase or cancel carrier numbers.
                      </p>
                      {selectedProvider?.docs_url && (
                        <a
                          href={selectedProvider.docs_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                        >
                          Open setup guide <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="mb-7">
                    <p className="text-sm font-medium text-muted-foreground">Step 4 of 4</p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                      Who should answer?
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Assign an active agent now, or keep this number for outgoing calls only.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="agent">Agent for incoming calls</Label>
                      <Select value={workflowId} onValueChange={setWorkflowId}>
                        <SelectTrigger id="agent" className="h-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={NO_WORKFLOW}>
                            Outgoing calls only
                          </SelectItem>
                          {workflows.map((workflow) => (
                            <SelectItem key={workflow.id} value={String(workflow.id)}>
                              {workflow.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {workflows.length === 0 && (
                        <p className="text-xs text-muted-foreground">
                          No active agents yet. You can finish this number, then{" "}
                          <Link href="/agent-onboarding" className="font-medium text-primary hover:underline">
                            create an agent
                          </Link>
                          .
                        </p>
                      )}
                    </div>

                    <div className="rounded-2xl border bg-muted/20 p-5">
                      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Call routing preview
                      </p>
                      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border bg-background p-3">
                          <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                            <Phone className="size-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{address}</p>
                            <p className="truncate text-xs text-muted-foreground">
                              {label || "New phone number"}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="mx-auto size-4 rotate-90 text-muted-foreground sm:rotate-0" />
                        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border bg-background p-3">
                          <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                            <Bot className="size-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">
                              {selectedWorkflow?.name || "Outgoing calls only"}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                              {selectedWorkflow ? "Answers incoming calls" : "No inbound agent"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-emerald-50/70 p-4 text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-100">
                      <ShieldCheck className="mt-0.5 size-4 shrink-0" />
                      <p className="text-xs leading-5">
                        Your carrier credentials are encrypted. Saving this setup does
                        not change ownership or billing for the number.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between border-t pt-5">
                <Button
                  variant="ghost"
                  onClick={() => (step === 0 ? router.push("/phone-numbers") : setStep(step - 1))}
                  disabled={submitting}
                >
                  <ArrowLeft className="size-4" />
                  {step === 0 ? "Cancel" : "Back"}
                </Button>
                {step < STEPS.length - 1 ? (
                  <Button
                    onClick={() => {
                      if (step === 2) setAddressTouched(true);
                      if (canContinue) setStep(step + 1);
                    }}
                    disabled={!canContinue}
                  >
                    Continue
                    <ArrowRight className="size-4" />
                  </Button>
                ) : (
                  <Button onClick={() => void savePhoneNumber()} disabled={submitting}>
                    {submitting ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Check className="size-4" />
                    )}
                    {submitting ? "Connecting..." : "Finish setup"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ProviderField({
  field,
  value,
  onChange,
}: {
  field: TelephonyProviderMetadata["fields"][number];
  value: FieldValue;
  onChange: (value: FieldValue) => void;
}) {
  const id = `provider-${field.name}`;
  if (field.type === "textarea") {
    return (
      <Textarea
        id={id}
        value={(value as string) ?? ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={field.placeholder ?? ""}
        rows={5}
        className="resize-y font-mono text-xs"
      />
    );
  }
  if (field.type === "number") {
    return (
      <Input
        id={id}
        type="number"
        value={(value as number | string | undefined) ?? ""}
        onChange={(event) =>
          onChange(event.target.value === "" ? undefined : Number(event.target.value))
        }
        placeholder={field.placeholder ?? ""}
      />
    );
  }
  if (field.type === "boolean") {
    return (
      <div className="flex items-center justify-between rounded-lg border p-3">
        <span className="text-sm text-muted-foreground">
          {value ? "Enabled" : "Disabled"}
        </span>
        <Switch id={id} checked={Boolean(value)} onCheckedChange={onChange} />
      </div>
    );
  }
  if (field.type === "select") {
    return (
      <Select
        value={value === undefined ? "__unset__" : String(value)}
        onValueChange={(next) => onChange(next === "__unset__" ? undefined : next)}
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder={field.placeholder || "Choose an option"} />
        </SelectTrigger>
        <SelectContent>
          {!field.required && <SelectItem value="__unset__">Not configured</SelectItem>}
          {(field.options ?? []).map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
  return (
    <Input
      id={id}
      type={field.type === "password" || field.sensitive ? "password" : "text"}
      value={(value as string) ?? ""}
      onChange={(event) => onChange(event.target.value)}
      placeholder={field.placeholder ?? ""}
      autoComplete={field.sensitive ? "new-password" : undefined}
    />
  );
}
