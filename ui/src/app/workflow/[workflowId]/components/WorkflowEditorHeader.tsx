"use client";

import { ReactFlowInstance } from "@xyflow/react";
import { AlertCircle, ArrowLeft, Bot, Clipboard, Copy, Download, Eye, History, LoaderCircle, Menu, MoreVertical, Pencil, Phone, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";

import {
    duplicateWorkflowEndpointApiV1WorkflowWorkflowIdDuplicatePost,
    publishWorkflowApiV1WorkflowWorkflowIdPublishPost,
} from "@/client/sdk.gen";
import { WorkflowError } from "@/client/types.gen";
import { FlowEdge, FlowNode } from "@/components/flow/types";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useSidebar } from "@/components/ui/sidebar";
import { detailFromError } from "@/lib/apiError";
import { copyTextToClipboard } from "@/lib/clipboard";

interface WorkflowEditorHeaderProps {
    workflowName: string;
    isDirty: boolean;
    workflowValidationErrors: WorkflowError[];
    rfInstance: React.RefObject<ReactFlowInstance<FlowNode, FlowEdge> | null>;
    workflowId: number;
    workflowUuid?: string;
    saveWorkflow: (updateWorkflowDefinition?: boolean) => Promise<void>;
    user: { id: string; email?: string };
    onPhoneCallClick: () => void;
    onTestAgentClick: () => void;
    onHistoryClick: () => void;
    activeVersionLabel?: string;
    isViewingHistoricalVersion: boolean;
    onBackToDraft: () => void;
    hasDraft: boolean;
    onPublished: () => void;
    renameWorkflow: (newName: string) => Promise<void>;
}

export const WorkflowEditorHeader = ({
    workflowName,
    isDirty,
    workflowValidationErrors,
    rfInstance,
    saveWorkflow,
    onPhoneCallClick,
    onTestAgentClick,
    onHistoryClick,
    activeVersionLabel,
    isViewingHistoricalVersion,
    onBackToDraft,
    hasDraft,
    onPublished,
    workflowId,
    workflowUuid,
    renameWorkflow,
}: WorkflowEditorHeaderProps) => {
    const router = useRouter();
    const { toggleSidebar } = useSidebar();
    const [savingWorkflow, setSavingWorkflow] = useState(false);
    const [duplicating, setDuplicating] = useState(false);
    const [publishing, setPublishing] = useState(false);
    const savingRef = useRef(false);
    const publishingRef = useRef(false);
    const duplicatingRef = useRef(false);
    // One discriminated-union state instead of (isEditingName, nameDraft,
    // nameError, isRenaming): they're not independent — error and saving are
    // mutually exclusive, and both are meaningless in the display state. The
    // union makes the bad combinations unrepresentable and structurally
    // prevents the Enter→disable-input→blur→re-fire race.
    type RenameState =
        | { kind: "display" }
        | { kind: "editing"; draft: string; error: string | null }
        | { kind: "saving"; draft: string };
    const [rename, setRename] = useState<RenameState>({ kind: "display" });
    const nameInputRef = useRef<HTMLInputElement>(null);
    const renameButtonRef = useRef<HTMLButtonElement>(null);

    const hasValidationErrors = workflowValidationErrors.length > 0;
    const isCallDisabled = isDirty || hasValidationErrors;

    const handleSave = async () => {
        if (savingRef.current) return;
        savingRef.current = true;
        setSavingWorkflow(true);
        try {
            await saveWorkflow();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to save workflow. Please try again.");
        } finally {
            savingRef.current = false;
            setSavingWorkflow(false);
        }
    };

    const handlePublish = async () => {
        if (publishingRef.current) return;
        publishingRef.current = true;
        setPublishing(true);
        try {
            const response = await publishWorkflowApiV1WorkflowWorkflowIdPublishPost({
                path: { workflow_id: workflowId },
            });
            if (response.error) {
                throw new Error(detailFromError(response.error, "Failed to publish workflow. Please try again."));
            }
            toast.success("Workflow published successfully");
            onPublished();
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to publish workflow. Please try again.");
        } finally {
            publishingRef.current = false;
            setPublishing(false);
        }
    };

    const handleBack = () => {
        router.push("/workflow");
    };

    const handleDuplicate = async () => {
        if (duplicatingRef.current) return;
        duplicatingRef.current = true;
        setDuplicating(true);
        try {
            const response = await duplicateWorkflowEndpointApiV1WorkflowWorkflowIdDuplicatePost({
                path: { workflow_id: workflowId },
            });
            if (response.error) {
                throw new Error(detailFromError(response.error, "Failed to duplicate workflow. Please try again."));
            }
            const id = response.data?.id;
            if (typeof id !== "number" || !Number.isSafeInteger(id) || id <= 0) {
                throw new Error("The server did not return a valid duplicated workflow. Please try again.");
            }
            toast.success("Workflow duplicated successfully");
            router.push(`/workflow/${id}`);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to duplicate workflow. Please try again.");
        } finally {
            duplicatingRef.current = false;
            setDuplicating(false);
        }
    };

    const handleCopyAgentUuid = async () => {
        if (!workflowUuid) {
            toast.error("Agent UUID not available");
            return;
        }
        try {
            await copyTextToClipboard(workflowUuid);
            toast.success("Agent UUID copied");
        } catch {
            toast.error("Failed to copy Agent UUID");
        }
    };

    const handleDownloadWorkflow = () => {
        if (!rfInstance.current) return;

        const workflowDefinition = rfInstance.current.toObject();
        const exportData = {
            name: workflowName,
            workflow_definition: workflowDefinition,
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${workflowName}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const enterEditMode = () => {
        setRename({ kind: "editing", draft: workflowName, error: null });
    };

    const exitEditMode = () => {
        setRename({ kind: "display" });
        // Return focus to the pencil button so keyboard users aren't stranded.
        // Defer to next tick so React commits the input unmount first.
        setTimeout(() => renameButtonRef.current?.focus(), 0);
    };

    const attemptSave = async () => {
        // Only "editing" can initiate a save. This also guards against the
        // blur fired when disabling the input transitions us to "saving".
        if (rename.kind !== "editing") return;
        const trimmed = rename.draft.trim();
        if (trimmed.length === 0) {
            setRename({ ...rename, error: "Name cannot be empty" });
            return;
        }
        if (trimmed === workflowName) {
            // No-op: exit cleanly with no API call.
            exitEditMode();
            return;
        }
        setRename({ kind: "saving", draft: rename.draft });
        try {
            await renameWorkflow(trimmed);
            // Success: store update already propagated workflowName. Exit edit mode.
            exitEditMode();
        } catch (error) {
            // Keep the typed value available for retry and restore keyboard focus.
            toast.error(error instanceof Error ? error.message : detailFromError(error, "Failed to rename workflow"));
            setRename({ kind: "editing", draft: trimmed, error: null });
            setTimeout(() => nameInputRef.current?.focus(), 0);
        }
    };

    const handleRenameKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            void attemptSave();
        } else if (event.key === "Escape") {
            event.preventDefault();
            exitEditMode();
        }
    };

    const handleRenameBlur = () => {
        // Ignore the blur fired when the input is disabled during save.
        if (rename.kind !== "editing") return;
        // On blur with empty/whitespace, revert silently to display mode so the user is never trapped.
        if (rename.draft.trim().length === 0) {
            exitEditMode();
            return;
        }
        void attemptSave();
    };

    return (
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-1 w-full min-w-0 min-h-14 px-2 py-1 xl:flex-nowrap xl:px-4 bg-[#1a1a1a] border-b border-[#2a2a2a]">
            {/* Left section: Mobile menu + Back button + Workflow name */}
            <div className="flex min-w-0 flex-1 basis-full items-center gap-1 xl:basis-auto xl:gap-3 xl:mr-2">
                <button
                    onClick={toggleSidebar}
                    className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg hover:bg-[#2a2a2a] transition-colors md:hidden"
                    aria-label="Open menu"
                >
                    <Menu className="w-5 h-5 text-gray-400" />
                </button>
                <button
                    onClick={handleBack}
                    aria-label="Back to agents"
                    className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg hover:bg-[#2a2a2a] transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-gray-400" />
                </button>

                <div className="flex min-w-0 flex-1 items-center gap-1">
                    {rename.kind !== "display" ? (
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                            <Input
                                ref={nameInputRef}
                                value={rename.draft}
                                onChange={(e) => {
                                    // onChange can't fire while disabled (kind === "saving"),
                                    // but the type guard is needed for the discriminated union.
                                    if (rename.kind === "editing") {
                                        setRename({ ...rename, draft: e.target.value, error: null });
                                    }
                                }}
                                onKeyDown={handleRenameKeyDown}
                                onBlur={handleRenameBlur}
                                disabled={rename.kind === "saving"}
                                autoFocus
                                onFocus={(e) => e.currentTarget.select()}
                                aria-label="Workflow name"
                                aria-invalid={rename.kind === "editing" && rename.error !== null}
                                className="h-10 w-full min-w-0 max-w-xs bg-[#2a2a2a] border-[#3a3a3a] text-white text-base font-medium"
                            />
                            {rename.kind === "editing" && rename.error && (
                                <span className="text-xs text-red-500" role="alert">{rename.error}</span>
                            )}
                        </div>
                    ) : (
                        <>
                            <h1 title={workflowName} className="min-w-0 truncate text-base font-medium text-white">
                                {workflowName}
                            </h1>
                            {!isViewingHistoricalVersion && (
                                <button
                                    ref={renameButtonRef}
                                    type="button"
                                    onClick={enterEditMode}
                                    aria-label="Rename workflow"
                                    className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg hover:bg-[#2a2a2a] transition-colors"
                                >
                                    <Pencil className="w-4 h-4 text-gray-400" />
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Right section: Version + status + tester/call actions + save */}
            <div className="flex min-w-0 w-full items-center justify-end gap-1 xl:w-auto xl:shrink-0 xl:gap-2">
                {/* Read-only banner when viewing a historical version */}
                {isViewingHistoricalVersion && (
                    <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-500/30 bg-blue-500/10">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-400">
                            Viewing {activeVersionLabel} - Read only
                        </span>
                    </div>
                )}

                {/* Back to Draft button when viewing history */}
                {isViewingHistoricalVersion && (
                    <Button
                        onClick={onBackToDraft}
                        className="h-10 bg-teal-600 hover:bg-teal-700 text-white px-2 xl:px-4"
                    >
                        Back to Draft
                    </Button>
                )}

                {/* Version history button */}
                <button
                    onClick={onHistoryClick}
                    aria-label="Version history"
                    className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#3a3a3a] hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                >
                    <History className="w-4 h-4 text-gray-400" />
                    {activeVersionLabel && !isViewingHistoricalVersion && (
                        <span className="text-sm text-gray-300">{activeVersionLabel}</span>
                    )}
                </button>

                {/* Unsaved changes indicator (hidden when viewing history) */}
                {isDirty && !isViewingHistoricalVersion && (
                    <div role="status" aria-label="Unsaved changes" title="Unsaved changes" className="flex shrink-0 items-center gap-2 px-2 py-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/10">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="hidden 2xl:inline text-sm text-yellow-500">Unsaved changes</span>
                    </div>
                )}

                {/* Validation errors indicator */}
                {hasValidationErrors && (
                    <Popover>
                        <PopoverTrigger asChild>
                            <button aria-label={`${workflowValidationErrors.length} validation errors`} className="flex h-10 shrink-0 items-center gap-1 px-2 rounded-md border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 transition-colors cursor-pointer">
                                <AlertCircle className="w-4 h-4 text-red-500" />
                                <span className="text-sm text-red-500">
                                    {workflowValidationErrors.length}<span className="hidden 2xl:inline"> {workflowValidationErrors.length === 1 ? "error" : "errors"}</span>
                                </span>
                            </button>
                        </PopoverTrigger>
                        <PopoverContent
                            align="end"
                            className="w-80 max-w-[calc(100vw-1rem)] bg-[#1a1a1a] border-[#3a3a3a] p-0"
                        >
                            <div className="px-4 py-3 border-b border-[#3a3a3a]">
                                <h3 className="text-sm font-medium text-white">Validation Errors</h3>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {workflowValidationErrors.map((error, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-3 border-b border-[#2a2a2a] last:border-b-0"
                                    >
                                        <div className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                {(error.kind === "node" || error.kind === "edge") && error.id && (
                                                    <p className="text-xs text-gray-400 mb-1 break-words">
                                                        {error.kind === "node" ? "Node" : "Edge"}: {error.id}
                                                        {error.field && <span className="text-gray-500"> • {error.field}</span>}
                                                    </p>
                                                )}
                                                <p className="text-sm text-white break-words">
                                                    {error.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                )}

                {/* Publish button (only when on draft with no unsaved changes) */}
                {!isViewingHistoricalVersion && hasDraft && (
                    <Button
                        onClick={handlePublish}
                        disabled={isDirty || publishing || hasValidationErrors}
                        variant="outline"
                        className="hidden xl:inline-flex h-10 border-[#3a3a3a] bg-transparent hover:bg-[#2a2a2a] text-white px-4"
                    >
                        {publishing ? (
                            <>
                                <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                                Publishing...
                            </>
                        ) : (
                            <>
                                <Rocket className="w-4 h-4 mr-2" />
                                Publish
                            </>
                        )}
                    </Button>
                )}

                {!isViewingHistoricalVersion && (
                    <Button
                        variant="outline"
                        className="hidden 2xl:flex items-center gap-2 bg-transparent border-[#3a3a3a] hover:bg-[#2a2a2a] text-white"
                        disabled={isCallDisabled}
                        onClick={onPhoneCallClick}
                    >
                        <Phone className="w-4 h-4" />
                        Phone Call
                    </Button>
                )}

                <Button
                    variant="outline"
                    className="flex h-10 items-center gap-1 px-2 xl:px-3 bg-transparent border-[#3a3a3a] hover:bg-[#2a2a2a] text-white"
                    onClick={onTestAgentClick}
                >
                    <Bot className="w-4 h-4" />
                    <span className="xl:hidden">Test</span><span className="hidden xl:inline">Test Agent</span>
                </Button>

                {/* Save button (only shown when editing the draft) */}
                {!isViewingHistoricalVersion && (
                    <Button
                        onClick={handleSave}
                        disabled={!isDirty || savingWorkflow}
                        className="h-10 bg-teal-600 hover:bg-teal-700 text-white px-2 xl:px-4"
                    >
                        {savingWorkflow ? (
                            <>
                                <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            "Save"
                        )}
                    </Button>
                )}

                {/* More options dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Workflow actions"
                            className="h-10 w-10 shrink-0 text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
                        >
                            <MoreVertical className="w-5 h-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[#1a1a1a] border-[#3a3a3a]">
                        <DropdownMenuItem onClick={onHistoryClick} className="2xl:hidden min-h-10 text-white">
                            <History className="w-4 h-4 mr-2" />
                            Version history{activeVersionLabel ? ` (${activeVersionLabel})` : ""}
                        </DropdownMenuItem>
                        {!isViewingHistoricalVersion && hasDraft && (
                            <DropdownMenuItem onClick={handlePublish} disabled={isDirty || publishing || hasValidationErrors} className="xl:hidden min-h-10 text-white">
                                <Rocket className="w-4 h-4 mr-2" />
                                {publishing ? "Publishing..." : "Publish"}
                            </DropdownMenuItem>
                        )}
                        {!isViewingHistoricalVersion && (
                            <DropdownMenuItem onClick={onPhoneCallClick} disabled={isCallDisabled} className="2xl:hidden min-h-10 text-white">
                                <Phone className="w-4 h-4 mr-2" />Phone Call
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                            onClick={() => router.push(`/workflow/${workflowId}/runs`)}
                            className="text-white hover:bg-[#2a2a2a] cursor-pointer"
                        >
                            <History className="w-4 h-4 mr-2" />
                            View Runs
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={handleDuplicate}
                            disabled={duplicating}
                            className="text-white hover:bg-[#2a2a2a] cursor-pointer"
                        >
                            {duplicating ? (
                                <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                                <Copy className="w-4 h-4 mr-2" />
                            )}
                            {duplicating ? "Duplicating..." : "Duplicate Workflow"}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={handleDownloadWorkflow}
                            className="text-white hover:bg-[#2a2a2a] cursor-pointer"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Workflow
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={handleCopyAgentUuid}
                            disabled={!workflowUuid}
                            className="text-white hover:bg-[#2a2a2a] cursor-pointer"
                        >
                            <Clipboard className="w-4 h-4 mr-2" />
                            Copy Agent UUID
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    );
};
