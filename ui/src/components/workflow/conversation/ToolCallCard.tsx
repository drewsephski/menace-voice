"use client";

import { Brain, ChevronRight, Wrench } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

import { formatConversationValue } from "./utils";

interface ToolCallCardProps {
    functionName: string;
    status: "running" | "completed";
    argumentsValue?: unknown;
    resultValue?: unknown;
    reasoningDurationMs?: number;
}

export function ToolCallCard({
    functionName,
    status,
    argumentsValue,
    resultValue,
    reasoningDurationMs,
}: ToolCallCardProps) {
    const [open, setOpen] = useState(false);
    const hasArguments = argumentsValue !== undefined;
    const hasResult = resultValue !== undefined;
    const hasDetails = hasArguments || hasResult;

    return (
        <div className="flex justify-center">
            <div className="flex w-full max-w-full min-w-0 flex-col gap-1">
                {reasoningDurationMs !== undefined ? (
                    <div className="flex items-center justify-center gap-1.5 text-[11px] leading-4 text-muted-foreground">
                        <Brain className="h-3 w-3 shrink-0" />
                        <span className="font-medium">Reasoning Delay:</span>
                        <span>{Math.round(reasoningDurationMs)}ms</span>
                    </div>
                ) : null}
                <Collapsible
                    open={hasDetails ? open : false}
                    onOpenChange={hasDetails ? setOpen : undefined}
                    className="min-w-0 rounded-xl border border-amber-500/20 bg-amber-500/10"
                >
                    <div className="flex min-w-0 items-start gap-2 px-2.5 py-2 text-xs">
                        <Wrench className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="min-w-0 break-all font-mono text-[11px] leading-4 text-amber-700 dark:text-amber-400">
                                    {functionName}()
                                </span>
                                <Badge
                                    variant="outline"
                                    className={cn(
                                        "h-4.5 shrink-0 px-1.5 text-[9px] uppercase tracking-[0.12em]",
                                        status === "running"
                                            ? "border-amber-400/60 text-amber-700 dark:text-amber-300"
                                            : "border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
                                    )}
                                >
                                    {status === "running" ? "Running" : "Completed"}
                                </Badge>
                            </div>
                            {hasDetails ? (
                                <div className="mt-1.5">
                                    <CollapsibleTrigger asChild>
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-1 text-[11px] leading-4 text-muted-foreground hover:text-foreground"
                                        >
                                            <ChevronRight
                                                className={cn(
                                                    "h-3 w-3 transition-transform",
                                                    open && "rotate-90",
                                                )}
                                            />
                                            Details
                                        </button>
                                    </CollapsibleTrigger>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {hasDetails ? (
                        <CollapsibleContent className="min-w-0 border-t border-amber-500/20 px-2.5 py-2">
                            <div className="min-w-0 space-y-2.5">
                                {hasArguments ? (
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                                            Arguments
                                        </p>
                                        <pre className="max-w-full overflow-hidden whitespace-pre-wrap break-words rounded-lg bg-background/70 p-2 text-[11px] leading-4 text-foreground [overflow-wrap:anywhere]">
                                            {formatConversationValue(argumentsValue)}
                                        </pre>
                                    </div>
                                ) : null}
                                {hasResult ? (
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                                            Result
                                        </p>
                                        <pre className="max-w-full overflow-hidden whitespace-pre-wrap break-words rounded-lg bg-background/70 p-2 text-[11px] leading-4 text-foreground [overflow-wrap:anywhere]">
                                            {formatConversationValue(resultValue)}
                                        </pre>
                                    </div>
                                ) : null}
                            </div>
                        </CollapsibleContent>
                    ) : null}
                </Collapsible>
            </div>
        </div>
    );
}
