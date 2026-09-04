"use client";

import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  MoreHorizontal,
  Phone,
  PhoneCall,
  Plus,
  Settings2,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import {
  deletePhoneNumberApiV1OrganizationsTelephonyConfigsConfigIdPhoneNumbersPhoneNumberIdDelete,
  getTelephonyConfigurationByIdApiV1OrganizationsTelephonyConfigsConfigIdGet,
  listPhoneNumbersApiV1OrganizationsTelephonyConfigsConfigIdPhoneNumbersGet,
  listTelephonyConfigurationsApiV1OrganizationsTelephonyConfigsGet,
} from "@/client/sdk.gen";
import type {
  PhoneNumberResponse,
  TelephonyConfigurationDetail,
  TelephonyConfigurationListItem,
} from "@/client/types.gen";
import { DeleteConfirmationDialog } from "@/components/DeleteConfirmationDialog";
import { PhoneNumberDialog } from "@/components/telephony/PhoneNumberDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useTelephonyConfigWarnings } from "@/context/TelephonyConfigWarningsContext";
import { detailFromError } from "@/lib/apiError";
import { useAuth } from "@/lib/auth";

type PhoneNumberWithConnection = PhoneNumberResponse & {
  connection: TelephonyConfigurationListItem;
};

function providerLabel(provider: string) {
  return provider.charAt(0).toUpperCase() + provider.slice(1);
}

export default function PhoneNumbersPage() {
  const { user, getAccessToken, loading: authLoading } = useAuth();
  const {
    telnyxMissingWebhookPublicKeyCount,
    vonageMissingSignatureSecretCount,
  } = useTelephonyConfigWarnings();
  const [numbers, setNumbers] = useState<PhoneNumberWithConnection[]>([]);
  const [loading, setLoading] = useState(true);
  const [editTarget, setEditTarget] = useState<PhoneNumberWithConnection | null>(null);
  const [editConnection, setEditConnection] =
    useState<TelephonyConfigurationDetail | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] =
    useState<PhoneNumberWithConnection | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const warningCount =
    telnyxMissingWebhookPublicKeyCount + vonageMissingSignatureSecretCount;

  const fetchNumbers = useCallback(async () => {
    if (authLoading || !user) return;
    setLoading(true);
    try {
      const token = await getAccessToken();
      const configResponse =
        await listTelephonyConfigurationsApiV1OrganizationsTelephonyConfigsGet({
          headers: { Authorization: `Bearer ${token}` },
        });
      if (configResponse.error) {
        throw new Error(
          detailFromError(configResponse.error, "Failed to load phone numbers"),
        );
      }

      const connections = configResponse.data?.configurations ?? [];
      const numberResponses = await Promise.all(
        connections.map(async (connection) => {
          const response =
            await listPhoneNumbersApiV1OrganizationsTelephonyConfigsConfigIdPhoneNumbersGet(
              {
                headers: { Authorization: `Bearer ${token}` },
                path: { config_id: connection.id },
              },
            );
          if (response.error) {
            throw new Error(
              detailFromError(response.error, "Failed to load phone numbers"),
            );
          }
          return (response.data?.phone_numbers ?? []).map((number) => ({
            ...number,
            connection,
          }));
        }),
      );
      setNumbers(numberResponses.flat());
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to load phone numbers",
      );
    } finally {
      setLoading(false);
    }
  }, [authLoading, getAccessToken, user]);

  useEffect(() => {
    void fetchNumbers();
  }, [fetchNumbers]);

  const openEditor = async (number: PhoneNumberWithConnection) => {
    try {
      const token = await getAccessToken();
      const response =
        await getTelephonyConfigurationByIdApiV1OrganizationsTelephonyConfigsConfigIdGet(
          {
            headers: { Authorization: `Bearer ${token}` },
            path: { config_id: number.connection.id },
          },
        );
      if (response.error) {
        throw new Error(
          detailFromError(response.error, "Failed to load phone number settings"),
        );
      }
      setEditTarget(number);
      setEditConnection(response.data ?? null);
      setEditOpen(true);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to load phone number settings",
      );
    }
  };

  const deleteNumber = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const token = await getAccessToken();
      const response =
        await deletePhoneNumberApiV1OrganizationsTelephonyConfigsConfigIdPhoneNumbersPhoneNumberIdDelete(
          {
            headers: { Authorization: `Bearer ${token}` },
            path: {
              config_id: deleteTarget.connection.id,
              phone_number_id: deleteTarget.id,
            },
          },
        );
      if (response.error) {
        throw new Error(
          detailFromError(response.error, "Failed to delete phone number"),
        );
      }
      toast.success("Phone number deleted");
      setDeleteTarget(null);
      await fetchNumbers();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete phone number",
      );
    } finally {
      setIsDeleting(false);
    }
  };

  const activeCount = useMemo(
    () => numbers.filter((number) => number.is_active).length,
    [numbers],
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/20 via-background to-background">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="flex size-7 items-center justify-center rounded-full border bg-background">
                <Phone className="size-3.5" />
              </span>
              Calls and routing
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Phone numbers
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Give each number a clear job. Connect it to an agent for incoming
              calls, or use it as caller ID when your agents call out.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 shadow-sm">
            <Link href="/phone-numbers/new">
              <Plus className="size-4" />
              Add phone number
            </Link>
          </Button>
        </header>

        {warningCount > 0 && (
          <div className="mb-6 flex flex-col gap-3 rounded-xl border border-amber-300/70 bg-amber-50/80 p-4 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100 sm:flex-row sm:items-center">
            <AlertTriangle className="size-5 shrink-0" />
            <p className="flex-1 text-sm">
              {warningCount === 1
                ? "One phone connection needs attention before calls can be received reliably."
                : `${warningCount} phone connections need attention before calls can be received reliably.`}
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/telephony-configurations">Review connections</Link>
            </Button>
          </div>
        )}

        {loading ? (
          <div className="grid gap-4">
            <Skeleton className="h-36 w-full rounded-2xl" />
            <Skeleton className="h-36 w-full rounded-2xl" />
          </div>
        ) : numbers.length === 0 ? (
          <Card className="overflow-hidden rounded-2xl border-dashed bg-background/80 shadow-none">
            <CardContent className="flex min-h-[390px] flex-col items-center justify-center px-6 py-14 text-center">
              <div className="relative mb-7 flex size-24 items-center justify-center rounded-full border bg-muted/40">
                <div className="absolute inset-3 rounded-full border border-dashed border-muted-foreground/30" />
                <PhoneCall className="size-9 text-foreground" />
                <span className="absolute -right-1 top-2 flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <Plus className="size-4" />
                </span>
              </div>
              <CardTitle className="text-2xl">Give your agent a number</CardTitle>
              <CardDescription className="mt-3 max-w-md text-sm leading-6">
                Add a number you own, connect your carrier, and choose which agent
                answers. The setup guide checks each part with you.
              </CardDescription>
              <Button asChild size="lg" className="mt-7">
                <Link href="/phone-numbers/new">
                  <Plus className="size-4" />
                  Add your first number
                </Link>
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                You will need a phone number and your carrier account details.
              </p>
            </CardContent>
          </Card>
        ) : (
          <section aria-label="Your phone numbers">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {numbers.length} {numbers.length === 1 ? "number" : "numbers"} ·{" "}
                {activeCount} active
              </p>
              <Button asChild variant="ghost" size="sm">
                <Link href="/telephony-configurations">
                  <Settings2 className="size-4" />
                  Provider connections
                </Link>
              </Button>
            </div>
            <div className="grid gap-4">
              {numbers.map((number) => (
                <Card
                  key={`${number.connection.id}-${number.id}`}
                  className="group rounded-2xl bg-background/90 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
                    <div className="flex min-w-0 flex-1 items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/40">
                        <Phone className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="truncate text-lg font-semibold tracking-tight">
                            {number.address}
                          </h2>
                          <Badge variant={number.is_active ? "secondary" : "outline"}>
                            {number.is_active ? "Active" : "Paused"}
                          </Badge>
                          {number.is_default_caller_id && (
                            <Badge variant="outline">Default caller ID</Badge>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {number.label || `${providerLabel(number.connection.provider)} number`}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                          <span className="inline-flex items-center gap-1.5 rounded-md border bg-muted/30 px-2.5 py-1.5 text-muted-foreground">
                            <PhoneCall className="size-3.5" />
                            Incoming calls
                          </span>
                          <ArrowRight className="size-3.5 text-muted-foreground" />
                          <span
                            className={
                              number.inbound_workflow_name
                                ? "inline-flex items-center gap-1.5 font-medium"
                                : "inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400"
                            }
                          >
                            {number.inbound_workflow_name ? (
                              <CheckCircle2 className="size-3.5 text-emerald-600" />
                            ) : (
                              <AlertTriangle className="size-3.5" />
                            )}
                            {number.inbound_workflow_name || "No agent assigned"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <Button variant="outline" onClick={() => void openEditor(number)}>
                        <Bot className="size-4" />
                        {number.inbound_workflow_name ? "Change agent" : "Assign agent"}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="More phone number actions">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/telephony-configurations/${number.connection.id}`}>
                              <Settings2 className="size-4" />
                              Connection settings
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onSelect={() => setDeleteTarget(number)}
                          >
                            <Trash2 className="size-4" />
                            Delete number
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>

      {editTarget && editConnection && (
        <PhoneNumberDialog
          open={editOpen}
          onOpenChange={setEditOpen}
          configId={editConnection.id}
          trunks={editConnection.trunks ?? []}
          existing={editTarget}
          onSaved={() => void fetchNumbers()}
        />
      )}

      <DeleteConfirmationDialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        title="Delete phone number?"
        description={
          <>
            {deleteTarget?.address} will no longer place or receive calls through
            Menace Voice. This does not cancel the number with your carrier.
          </>
        }
        onConfirm={deleteNumber}
        isDeleting={isDeleting}
      />
    </div>
  );
}
