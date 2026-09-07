import '@xyflow/react/dist/style.css';

import {
    Background,
    BackgroundVariant,
    Panel,
    ReactFlow,
} from "@xyflow/react";
import { BrushCleaning, Maximize2, Minus, Plus, Settings } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

import { createWorkflowDraftApiV1WorkflowWorkflowIdCreateDraftPost, getWorkflowVersionsApiV1WorkflowWorkflowIdVersionsGet } from '@/client';
import type { ToolResponse, WorkflowVersionResponse } from '@/client/types.gen';
import { useNodeSpecs } from "@/components/flow/renderer";
import { FlowEdge, FlowNode, NodeType } from "@/components/flow/types";
import { HireExpertNudge } from "@/components/lead-forms/HireExpertNudge";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useOnboarding } from '@/context/OnboardingContext';
import { detailFromError } from '@/lib/apiError';
import { WorkflowConfigurations } from '@/types/workflow-configurations';

import AddNodePanel from "../../../components/flow/AddNodePanel";
import CustomEdge from "../../../components/flow/edges/CustomEdge";
import { GenericNode } from "../../../components/flow/nodes/GenericNode";
import { AgentBriefEditor } from './components/AgentBriefEditor';
import { PhoneCallDialog } from './components/PhoneCallDialog';
import { VersionHistoryPanel } from './components/VersionHistoryPanel';
import type { WorkflowRuntimeNodeTransition } from './components/workflow-tester/types';
import { WorkflowEditorHeader } from "./components/WorkflowEditorHeader";
import { WorkflowLayoutController } from './components/WorkflowLayoutController';
import { WorkflowTesterPanel } from './components/WorkflowTesterPanel';
import { WorkflowVersionDiffDialog } from './components/WorkflowVersionDiffDialog';
import { WorkflowProvider } from "./contexts/WorkflowContext";
import { useWorkflowResources } from "./hooks/useWorkflowResources";
import { useWorkflowState } from "./hooks/useWorkflowState";
import { useWorkflowStore } from "./stores/workflowStore";

const edgeTypes = {
    custom: CustomEdge,
};

const VERSIONS_PAGE_SIZE = 10;

interface RenderWorkflowProps {
    initialWorkflowName: string;
    workflowId: number;
    workflowUuid?: string;
    initialTotalRuns?: number | null;
    openTesterOnLoad?: boolean;
    initialFlow?: {
        nodes: FlowNode[];
        edges: FlowEdge[];
        viewport: {
            x: number;
            y: number;
            zoom: number;
        };
    };
    initialTemplateContextVariables?: Record<string, string>;
    initialWorkflowConfigurations?: WorkflowConfigurations;
    initialVersionNumber?: number | null;
    initialVersionStatus?: string | null;
    user: { id: string; email?: string };
}

function RenderWorkflow({
    initialWorkflowName,
    workflowId,
    workflowUuid,
    initialTotalRuns,
    openTesterOnLoad = false,
    initialFlow,
    initialTemplateContextVariables,
    initialWorkflowConfigurations,
    initialVersionNumber,
    initialVersionStatus,
    user,
}: RenderWorkflowProps) {
    const router = useRouter();
    const { specs } = useNodeSpecs();
    const { hasCompletedAction } = useOnboarding();
    const [isPhoneCallDialogOpen, setIsPhoneCallDialogOpen] = useState(false);
    const [isVersionPanelOpen, setIsVersionPanelOpen] = useState(false);
    const [isTesterRailOpen, setIsTesterRailOpen] = useState(true);
    const [isTesterSheetOpen, setIsTesterSheetOpen] = useState(false);
    const [isDesktopViewport, setIsDesktopViewport] = useState(false);
    const [versions, setVersions] = useState<WorkflowVersionResponse[]>([]);
    const [versionsLoading, setVersionsLoading] = useState(false);
    const [versionsLoadingMore, setVersionsLoadingMore] = useState(false);
    const [versionsHasMore, setVersionsHasMore] = useState(false);
    const [activeVersion, setActiveVersion] = useState<WorkflowVersionResponse | null>(null);
    const activeVersionId = activeVersion?.id ?? null;
    const loadVersionGraph = useWorkflowStore(state => state.loadVersionGraph);
    const [comparingVersionId, setComparingVersionId] = useState<number | null>(null);
    const [versionDiffPair, setVersionDiffPair] = useState<{
        previousVersion: WorkflowVersionResponse;
        selectedVersion: WorkflowVersionResponse;
    } | null>(null);
    const hasAutoOpenedTester = useRef(false);
    // Version info that updates immediately from the GET/save/publish responses.
    const [currentVersionNumber, setCurrentVersionNumber] = useState<number | null>(initialVersionNumber ?? null);
    const [currentVersionStatus, setCurrentVersionStatus] = useState<string | null>(initialVersionStatus ?? null);
    const versionsFetched = useRef(false);
    const { documents, tools, recordings, setTools, loading: resourcesLoading, errors: resourceErrors, retry: retryResources } = useWorkflowResources(workflowId);
    const creatingDraft = useRef(false);
    const [layoutRequest, setLayoutRequest] = useState(0);
    const [activeRuntimeNodeId, setActiveRuntimeNodeId] = useState<string | null>(null);

    const hasDraft = currentVersionStatus === "draft";

    // Selection outlives the paginated cache. Only the known current draft or
    // published version is editable; an unrecognized selection stays read-only.
    const isViewingHistoricalVersion = activeVersion !== null && (
        activeVersion.version_number !== currentVersionNumber ||
        activeVersion.status !== currentVersionStatus ||
        !["draft", "published"].includes(activeVersion.status)
    );

    const {
        rfInstance,
        nodes,
        edges,
        isAddNodePanelOpen,
        workflowName,
        isDirty,
        workflowValidationErrors,
        templateContextVariables,
        setNodes,
        setIsDirty,
        setIsAddNodePanelOpen,
        handleNodeSelect,
        saveWorkflow,
        workflowConfigurations,
        saveWorkflowConfigurations,
        onConnect,
        onEdgesChange,
        onNodesChange,
        onDelete,
    } = useWorkflowState({
        initialWorkflowName,
        workflowId,
        initialFlow,
        initialTemplateContextVariables,
        initialWorkflowConfigurations,
        user,
        readOnly: isViewingHistoricalVersion,
    });

    // Single generic component for every node type. Seed with core node types
    // so the initial render is stable before specs load, then merge in any
    // spec-defined or already-present node types so plugin integrations like
    // Tuner render without extra React registrations.
    const nodeTypes = useMemo(() => {
        const typeNames = new Set<string>([
            ...Object.values(NodeType),
            ...specs.map((spec) => spec.name),
            ...nodes.map((node) => node.type),
            ...(initialFlow?.nodes ?? []).map((node) => node.type),
        ]);
        return Object.fromEntries(
            Array.from(typeNames).map((typeName) => [typeName, GenericNode]),
        );
    }, [initialFlow?.nodes, nodes, specs]);


    // Fetch the first page of workflow versions, optionally forcing a refresh.
    // Pagination keeps the panel snappy when a workflow has accumulated a long
    // history — `workflow_json` is shipped per row, so loading hundreds at once
    // is expensive on the wire.
    const fetchVersions = useCallback(async (
        force = false,
        preserveActiveVersion = false,
    ) => {
        if (versionsFetched.current && !force) return;
        setVersionsLoading(true);
        try {
            const response = await getWorkflowVersionsApiV1WorkflowWorkflowIdVersionsGet({
                path: { workflow_id: workflowId },
                // Fetch one extra row so `hasMore` is exact. This also lets the
                // history panel reliably hide Compare on v1.
                query: { limit: VERSIONS_PAGE_SIZE + 1, offset: 0 },
            });
            if (response.error) {
                toast.error(detailFromError(response.error, "Failed to load version history"));
                return;
            }
            const data = response.data;
            if (data) {
                const page = data.slice(0, VERSIONS_PAGE_SIZE);
                setVersions(page);
                setVersionsHasMore(data.length > VERSIONS_PAGE_SIZE);
                // Set active version to draft if exists, else published.
                // Both live on the newest page so the first fetch always sees them.
                const current = page.find((v) => v.status === "draft") ?? page.find((v) => v.status === "published");
                if (current) {
                    setActiveVersion((existing) => (
                        preserveActiveVersion && existing !== null
                            ? page.find(version => version.id === existing.id) ?? existing
                            : current
                    ));
                    setCurrentVersionNumber(current.version_number);
                    setCurrentVersionStatus(current.status);
                }
                versionsFetched.current = true;
            }
        } catch {
            toast.error("Failed to load version history. Please try again.");
        } finally {
            setVersionsLoading(false);
        }
    }, [workflowId]);

    const handleLoadMoreVersions = useCallback(async () => {
        if (versionsLoadingMore || !versionsHasMore) return;
        setVersionsLoadingMore(true);
        try {
            const response = await getWorkflowVersionsApiV1WorkflowWorkflowIdVersionsGet({
                path: { workflow_id: workflowId },
                query: { limit: VERSIONS_PAGE_SIZE + 1, offset: versions.length },
            });
            if (response.error) {
                toast.error(detailFromError(response.error, "Failed to load more versions"));
                return;
            }
            const data = response.data;
            if (data) {
                setVersions((prev) => [...prev, ...data.slice(0, VERSIONS_PAGE_SIZE)]);
                setVersionsHasMore(data.length > VERSIONS_PAGE_SIZE);
            }
        } catch {
            toast.error("Failed to load more versions. Please try again.");
        } finally {
            setVersionsLoadingMore(false);
        }
    }, [workflowId, versions.length, versionsLoadingMore, versionsHasMore]);

    const handleOpenVersionPanel = useCallback(() => {
        setIsVersionPanelOpen(true);
        void fetchVersions();
    }, [fetchVersions]);

    const handleCompareVersion = useCallback(async (version: WorkflowVersionResponse) => {
        if (comparingVersionId !== null) return;

        const selectedIndex = versions.findIndex((candidate) => candidate.id === version.id);
        if (selectedIndex < 0) {
            toast.error("That workflow version is no longer in the history list");
            return;
        }

        setComparingVersionId(version.id);
        try {
            // Fetch the selected row and the row immediately below it afresh.
            // The offset also handles comparisons that cross a pagination boundary.
            const response = await getWorkflowVersionsApiV1WorkflowWorkflowIdVersionsGet({
                path: { workflow_id: workflowId },
                query: { limit: 2, offset: selectedIndex },
            });
            if (response.error) {
                toast.error(detailFromError(response.error, "Failed to compare workflow versions"));
                return;
            }

            const pair = response.data;
            const selectedVersion = pair?.[0];
            const previousVersion = pair?.[1];

            // A new draft may have been inserted since the panel opened, shifting
            // every offset. Refresh instead of showing a mismatched comparison.
            if (!selectedVersion || selectedVersion.id !== version.id) {
                await fetchVersions(true, true);
                toast.error("Version history changed. Please try the comparison again.");
                return;
            }
            if (
                !previousVersion ||
                previousVersion.version_number >= selectedVersion.version_number
            ) {
                toast.error(`v${selectedVersion.version_number} has no previous version`);
                return;
            }

            // Keep the panel's cached copies in sync with the fresh pair so they
            // remain current when the dialog closes and history reopens.
            setVersions((currentVersions) => currentVersions.map((currentVersion) => (
                pair?.find((freshVersion) => freshVersion.id === currentVersion.id)
                ?? currentVersion
            )));
            setVersionDiffPair({ previousVersion, selectedVersion });
            setIsVersionPanelOpen(false);
        } catch {
            toast.error("Failed to compare workflow versions");
        } finally {
            setComparingVersionId(null);
        }
    }, [comparingVersionId, fetchVersions, versions, workflowId]);

    const handleVersionDiffOpenChange = useCallback((open: boolean) => {
        if (open) return;
        setVersionDiffPair(null);
        setIsVersionPanelOpen(true);
    }, []);

    const handleSelectVersion = useCallback((version: WorkflowVersionResponse) => {
        setActiveVersion(version);
        const wfJson = version.workflow_json;
        const flowNodes = (wfJson.nodes ?? []) as FlowNode[];
        const flowEdges = (wfJson.edges ?? []) as FlowEdge[];

        // Update the Zustand store directly instead of rfInstance.current.setNodes().
        // This keeps data flow unidirectional (store → props → ReactFlow) and avoids
        // xyflow's d3 event handlers interfering with React's event delegation.
        // The key={activeVersionId} on <ReactFlow> forces a clean remount.
        // Undo/redo belongs to this graph, never to a previously viewed version.
        loadVersionGraph(flowNodes, flowEdges);
        setIsVersionPanelOpen(false);
    }, [loadVersionGraph]);


    useEffect(() => {
        if (!isViewingHistoricalVersion) {
            return;
        }
        setActiveRuntimeNodeId(null);
    }, [isViewingHistoricalVersion]);

    // Return to the draft version, creating one from published if needed
    const handleBackToDraft = useCallback(async () => {
        const existingDraft = versions.find((v) => v.status === "draft");
        if (existingDraft) {
            handleSelectVersion(existingDraft);
            return;
        }

        if (creatingDraft.current) return;
        creatingDraft.current = true;
        try {
            const response = await createWorkflowDraftApiV1WorkflowWorkflowIdCreateDraftPost({
                path: { workflow_id: workflowId },
            });
            if (response.error) throw new Error(detailFromError(response.error, "Could not return to draft"));
            const draft = response.data;
            if (!draft || !Number.isInteger(draft.id) || draft.id <= 0) {
                throw new Error("The server did not return a draft. Please try again.");
            }
            setCurrentVersionNumber(draft.version_number);
            setCurrentVersionStatus(draft.status);
            handleSelectVersion(draft);
            await fetchVersions(true);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Could not return to draft. Please try again.");
        } finally {
            creatingDraft.current = false;
        }
    }, [versions, handleSelectVersion, workflowId, fetchVersions]);

    // After a successful publish, refresh the version list and update status
    const handlePublished = useCallback(() => {
        setCurrentVersionStatus("published");
        fetchVersions(true);
    }, [fetchVersions]);

    const activeVersionLabel = useMemo(() => {
        if (activeVersion) {
            const statusSuffix = activeVersion.status === "draft" ? " (Draft)" : activeVersion.status === "published" ? " (Published)" : "";
            return `v${activeVersion.version_number}${statusSuffix}`;
        }
        // Otherwise use the immediately-available version info from save responses
        if (currentVersionNumber != null) {
            const statusSuffix = currentVersionStatus === "draft" ? " (Draft)" : currentVersionStatus === "published" ? " (Published)" : "";
            return `v${currentVersionNumber}${statusSuffix}`;
        }
        return undefined;
    }, [activeVersion, currentVersionNumber, currentVersionStatus]);

    const testerDisabledReason = useMemo(() => {
        if (isViewingHistoricalVersion) {
            return "Return to the draft before starting a new test session.";
        }
        if (isDirty) {
            return "Save the latest draft before testing so the session uses the workflow you are looking at.";
        }
        if (workflowValidationErrors.length > 0) {
            return "Resolve the current validation errors before starting another test.";
        }
        return null;
    }, [isDirty, isViewingHistoricalVersion, workflowValidationErrors.length]);

    const handleOpenTester = useCallback(() => {
        if (window.innerWidth >= 1280) {
            setIsTesterRailOpen(true);
            return;
        }
        setIsTesterSheetOpen(true);
    }, []);

    const shouldShowWebCallOnboarding = useMemo(() => {
        return (initialTotalRuns ?? 0) === 0 && !hasCompletedAction('web_call_started');
    }, [hasCompletedAction, initialTotalRuns]);

    useEffect(() => {
        const syncViewport = () => {
            setIsDesktopViewport(window.innerWidth >= 1280);
        };

        syncViewport();
        window.addEventListener('resize', syncViewport);
        return () => window.removeEventListener('resize', syncViewport);
    }, []);

    useEffect(() => {
        if (hasAutoOpenedTester.current || !openTesterOnLoad || !shouldShowWebCallOnboarding || testerDisabledReason) {
            return;
        }

        handleOpenTester();
        hasAutoOpenedTester.current = true;
    }, [handleOpenTester, openTesterOnLoad, shouldShowWebCallOnboarding, testerDisabledReason]);

    // Memoize defaultEdgeOptions to prevent unnecessary re-renders
    const defaultEdgeOptions = useMemo(() => ({
        animated: true,
        type: "custom"
    }), []);

    const displayNodes = useMemo(
        () =>
            nodes.map((node) =>
                node.id === activeRuntimeNodeId
                    ? {
                          ...node,
                          data: {
                              ...node.data,
                              runtime_active: true,
                          },
                      }
                    : node,
            ),
        [activeRuntimeNodeId, nodes],
    );

    const handleRuntimeNodeTransition = useCallback(
        (transition: WorkflowRuntimeNodeTransition) => {
            const nodeId = transition.nodeId;
            const instance = rfInstance.current;
            if (!nodeId || !instance) {
                return;
            }

            setActiveRuntimeNodeId(nodeId);

            if (!instance.viewportInitialized) {
                return;
            }

            void instance.fitView({
                nodes: [{ id: nodeId }],
                duration: 350,
                padding: 0.45,
                maxZoom: 0.9,
            });
        },
        [rfInstance],
    );

    const handleLayout = useCallback((layoutedNodes: FlowNode[], requested: boolean) => {
        setNodes(layoutedNodes, isViewingHistoricalVersion || !requested ? undefined : layoutedNodes.map(node => ({
            id: node.id,
            type: 'position' as const,
            position: node.position,
            dragging: false,
        })));
        if (!isViewingHistoricalVersion) setIsDirty(true);
    }, [setNodes, setIsDirty, isViewingHistoricalVersion]);

    // Guard saveWorkflow so it's a no-op when viewing a historical version.
    // Uses the save response to immediately update version label and hasDraft.
    const guardedSaveWorkflow = useCallback(async (updateWorkflowDefinition?: boolean) => {
        if (isViewingHistoricalVersion) return;
        const result = await saveWorkflow(updateWorkflowDefinition);
        if (result) {
            // If the versions list has been fetched (user interacted with versioning
            // or published), refresh it so that activeVersionId points to the correct
            // version.  This is critical when a save creates a new draft from a
            // published version: without refreshing, activeVersionId would still
            // point to the old published version, causing isViewingHistoricalVersion
            // to incorrectly return true and lock the editor into read-only mode.
            if (versionsFetched.current) {
                await fetchVersions(true);
            } else {
                if (result.versionNumber != null) setCurrentVersionNumber(result.versionNumber);
                if (result.versionStatus) setCurrentVersionStatus(result.versionStatus);
            }
        }
    }, [saveWorkflow, isViewingHistoricalVersion, fetchVersions]);

    const renameWorkflow = useCallback(async (newName: string) => {
        // The header doesn't render the pencil until the page has mounted with
        // initial data, so workflowConfigurations is non-null by the time this
        // runs. Throw rather than silently sending fallback workflow configurations,
        // which would overwrite the saved server-side config.
        if (!workflowConfigurations) {
            throw new Error("Workflow configurations not loaded");
        }
        await saveWorkflowConfigurations(workflowConfigurations, newName);
    }, [saveWorkflowConfigurations, workflowConfigurations]);

    const updateTool = useCallback(
        (toolUuid: string, updater: (tool: ToolResponse) => ToolResponse) => {
            setTools((prev) =>
                prev?.map((tool) =>
                    tool.tool_uuid === toolUuid ? updater(tool) : tool,
                ),
            );
        },
        [setTools],
    );

    // Memoize the context value to prevent unnecessary re-renders
    const workflowContextValue = useMemo(() => ({
        saveWorkflow: guardedSaveWorkflow,
        documents,
        tools,
        updateTool,
        recordings,
        readOnly: isViewingHistoricalVersion,
    }), [
        guardedSaveWorkflow,
        documents,
        tools,
        updateTool,
        recordings,
        isViewingHistoricalVersion,
    ]);

    return (
        <WorkflowProvider value={workflowContextValue}>
            <div className="flex h-dvh w-full min-w-0 flex-col overflow-hidden">
                <HireExpertNudge workflowId={workflowId} />
                {/* New Workflow Editor Header */}
                <WorkflowEditorHeader
                    workflowName={workflowName}
                    isDirty={isDirty}
                    workflowValidationErrors={workflowValidationErrors}
                    rfInstance={rfInstance}
                    workflowId={workflowId}
                    workflowUuid={workflowUuid}
                    saveWorkflow={guardedSaveWorkflow}
                    user={user}
                    onPhoneCallClick={() => setIsPhoneCallDialogOpen(true)}
                    onTestAgentClick={handleOpenTester}
                    onHistoryClick={handleOpenVersionPanel}
                    activeVersionLabel={activeVersionLabel}
                    isViewingHistoricalVersion={isViewingHistoricalVersion}
                    onBackToDraft={handleBackToDraft}
                    hasDraft={hasDraft}
                    onPublished={handlePublished}
                    renameWorkflow={renameWorkflow}
                />

                <AgentBriefEditor workflowId={workflowId} readOnly={isViewingHistoricalVersion} />

                {workflowConfigurations?.voice_clone_id && !isViewingHistoricalVersion ? (
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-muted/40 px-4 py-2 text-sm">
                        <span>This agent uses your cloned voice. Model voice settings are overridden.</span>
                        <Link className="font-medium underline" href="/voice-cloning">Manage cloned voice</Link>
                    </div>
                ) : null}

                {resourcesLoading ? (
                    <div role="status" className="shrink-0 px-3 py-1 text-xs text-muted-foreground">Loading workflow resources…</div>
                ) : resourceErrors.length > 0 ? (
                    <div role="alert" className="flex shrink-0 items-center gap-2 border-b px-3 py-1 text-xs">
                        <span className="min-w-0 flex-1 break-words">Some workflow resources could not load. {resourceErrors.join(' ')}</span>
                        <Button size="sm" variant="ghost" className="h-10 shrink-0" onClick={retryResources}>Retry</Button>
                    </div>
                ) : null}

                {/* Workflow Canvas */}
                <div className="flex-1 min-h-0">
                    <div className="flex h-full min-w-0">
                        <div className="relative min-w-0 flex-1">
                            <ReactFlow
                                key={activeVersionId ?? 'current'}
                                nodes={displayNodes}
                                edges={edges}
                                onNodesChange={onNodesChange}
                                onEdgesChange={onEdgesChange}
                                onDelete={onDelete}
                                nodeTypes={nodeTypes}
                                edgeTypes={edgeTypes}
                                onConnect={isViewingHistoricalVersion ? undefined : onConnect}
                                minZoom={0.2}
                                onInit={(instance) => {
                                    rfInstance.current = instance;
                                }}
                                defaultEdgeOptions={defaultEdgeOptions}
                                defaultViewport={initialFlow?.viewport}
                                nodesDraggable={!isViewingHistoricalVersion}
                                nodesConnectable={!isViewingHistoricalVersion}
                                edgesReconnectable={!isViewingHistoricalVersion}
                                zoomOnDoubleClick={false}
                                deleteKeyCode={isViewingHistoricalVersion ? null : "Backspace"}
                            >
                                <WorkflowLayoutController
                                    nodes={nodes}
                                    edges={edges}
                                    layoutRequest={layoutRequest}
                                    onLayout={handleLayout}
                                />
                                <Background
                                    variant={BackgroundVariant.Dots}
                                    gap={16}
                                    size={1}
                                    color="#94a3b8"
                                />

                                {/* Top-right controls - vertical layout (hidden when viewing history) */}
                                {!isViewingHistoricalVersion && (
                                    <Panel position="top-right">
                                        <TooltipProvider>
                                            <div className="flex flex-col gap-2">
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button
                                                            variant="default"
                                                            size="icon"
                                                            aria-label="Add node"
                                                            onClick={() => setIsAddNodePanelOpen(true)}
                                                            className="h-10 w-10 shadow-md hover:shadow-lg"
                                                        >
                                                            <Plus className="h-4 w-4" />
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="left">
                                                        <p>Add node</p>
                                                    </TooltipContent>
                                                </Tooltip>

                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            aria-label="Workflow settings"
                                                            onClick={() => router.push(`/workflow/${workflowId}/settings`)}
                                                            className="h-10 w-10 bg-white shadow-sm hover:shadow-md"
                                                        >
                                                            <Settings className="h-4 w-4" />
                                                        </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="left">
                                                        <p>Workflow settings</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </div>
                                        </TooltipProvider>
                                    </Panel>
                                )}
                            </ReactFlow>

                            {/* Bottom-left controls - horizontal layout with custom buttons */}
                            <div className="absolute bottom-4 left-3 z-10 flex gap-2 sm:bottom-12 sm:left-8">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                aria-label="Zoom in"
                                                onClick={() => rfInstance.current?.zoomIn()}
                                                className="bg-white shadow-sm hover:shadow-md h-10 w-10 sm:h-8 sm:w-8"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">
                                            <p>Zoom in</p>
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                aria-label="Zoom out"
                                                onClick={() => rfInstance.current?.zoomOut()}
                                                className="bg-white shadow-sm hover:shadow-md h-10 w-10 sm:h-8 sm:w-8"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">
                                            <p>Zoom out</p>
                                        </TooltipContent>
                                    </Tooltip>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                aria-label="Fit view"
                                                onClick={() => rfInstance.current?.fitView()}
                                                className="bg-white shadow-sm hover:shadow-md h-10 w-10 sm:h-8 sm:w-8"
                                            >
                                                <Maximize2 className="h-4 w-4" />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">
                                            <p>Fit view</p>
                                        </TooltipContent>
                                    </Tooltip>

                                    {!isViewingHistoricalVersion && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    aria-label="Tidy up nodes"
                                                    onClick={() => setLayoutRequest(request => request + 1)}
                                                    className="bg-white shadow-sm hover:shadow-md h-10 w-10 sm:h-8 sm:w-8"
                                                >
                                                    <BrushCleaning className="h-4 w-4" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent side="top">
                                                <p>Tidy Up</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                </TooltipProvider>
                            </div>
                        </div>

                        {isTesterRailOpen && (
                            <aside className="hidden h-full w-[400px] shrink-0 border-l border-border xl:block">
                                <WorkflowTesterPanel
                                    workflowId={workflowId}
                                    initialContextVariables={templateContextVariables}
                                    disabled={testerDisabledReason !== null}
                                    disabledReason={testerDisabledReason}
                                    showWebCallOnboarding={shouldShowWebCallOnboarding}
                                    isVisible={isDesktopViewport}
                                    onClose={() => setIsTesterRailOpen(false)}
                                    onRuntimeNodeTransition={handleRuntimeNodeTransition}
                                />
                            </aside>
                        )}
                    </div>

                    <Sheet open={isTesterSheetOpen} onOpenChange={setIsTesterSheetOpen}>
                        <SheetContent side="right" className="w-full max-w-none p-0 sm:max-w-xl xl:hidden">
                            <SheetTitle className="sr-only">Test agent</SheetTitle>
                            <WorkflowTesterPanel
                                workflowId={workflowId}
                                initialContextVariables={templateContextVariables}
                                disabled={testerDisabledReason !== null}
                                disabledReason={testerDisabledReason}
                                showWebCallOnboarding={shouldShowWebCallOnboarding}
                                isVisible={isTesterSheetOpen}
                                onRuntimeNodeTransition={handleRuntimeNodeTransition}
                            />
                        </SheetContent>
                    </Sheet>
                </div>

                <AddNodePanel
                    isOpen={isAddNodePanelOpen}
                    onNodeSelect={handleNodeSelect}
                    onClose={() => setIsAddNodePanelOpen(false)}
                    nodes={nodes}
                />

                <VersionHistoryPanel
                    isOpen={isVersionPanelOpen}
                    onClose={() => setIsVersionPanelOpen(false)}
                    versions={versions}
                    loading={versionsLoading}
                    activeVersionId={activeVersionId}
                    onSelectVersion={handleSelectVersion}
                    onCompareVersion={handleCompareVersion}
                    comparingVersionId={comparingVersionId}
                    hasMore={versionsHasMore}
                    loadingMore={versionsLoadingMore}
                    onLoadMore={handleLoadMoreVersions}
                />

                {versionDiffPair && (
                    <WorkflowVersionDiffDialog
                        open
                        onOpenChange={handleVersionDiffOpenChange}
                        previousVersion={versionDiffPair.previousVersion}
                        selectedVersion={versionDiffPair.selectedVersion}
                    />
                )}

                <PhoneCallDialog
                    open={isPhoneCallDialogOpen}
                    onOpenChange={setIsPhoneCallDialogOpen}
                    workflowId={workflowId}
                    user={user}
                />
            </div>
        </WorkflowProvider>
    );
}

// Memoize the component to prevent unnecessary re-renders when parent re-renders
export default React.memo(RenderWorkflow, (prevProps, nextProps) => {
    // Only re-render if these specific props change
    return (
        prevProps.workflowId === nextProps.workflowId &&
        prevProps.initialWorkflowName === nextProps.initialWorkflowName &&
        prevProps.user.id === nextProps.user.id
        // Note: We intentionally don't compare initialFlow, initialTemplateContextVariables,
        // or initialWorkflowConfigurations because they're only used for initialization
    );
});
