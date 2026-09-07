import {
    applyEdgeChanges,
    applyNodeChanges,
    EdgeChange,
    NodeChange,
    OnConnect,
    OnEdgesChange,
    OnNodesChange,
    ReactFlowInstance,
} from "@xyflow/react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { useWorkflowStore } from "@/app/workflow/[workflowId]/stores/workflowStore";
import {
    createWorkflowRunApiV1WorkflowWorkflowIdRunsPost,
    getDefaultConfigurationsApiV1UserConfigurationsDefaultsGet,
    updateWorkflowApiV1WorkflowWorkflowIdPut,
    validateWorkflowApiV1WorkflowWorkflowIdValidatePost
} from "@/client";
import {
    CallDispositionOption,
    NodeSpec,
    TextChatInactivityTimeoutConstraints,
    WidgetTexts,
    WorkflowError,
} from "@/client/types.gen";
import { useNodeSpecs } from "@/components/flow/renderer";
import { buildNewNode } from "@/components/flow/renderer/buildNewNode";
import { FlowEdge, FlowNode, NodeType } from "@/components/flow/types";
import { PostHogEvent } from "@/constants/posthog-events";
import { detailFromError } from "@/lib/apiError";
import logger from '@/lib/logger';
import { getRandomId } from "@/lib/utils";
import {
    resolveWorkflowConfigurations,
    type WorkflowConfigurationDefaults,
    type WorkflowConfigurations,
} from "@/types/workflow-configurations";

import { placeNodeWithoutOverlap } from '../utils/layoutNodes';

// Pull a WorkflowError[] out of any validate-shaped payload — works whether
// the body is the raw `{ is_valid, errors }` (validate success-with-errors)
// or wrapped as `{ detail: { is_valid, errors } }` (HTTPException body for
// validate's 422 and save's 409). Returns [] for any other shape so callers
// can tell "no structured errors in this response" from "valid".
function extractWorkflowErrors(payload: unknown): WorkflowError[] {
    if (!payload || typeof payload !== "object") return [];
    const p = payload as {
        is_valid?: boolean;
        errors?: WorkflowError[];
        detail?: { is_valid?: boolean; errors?: WorkflowError[] } | string;
    };
    if (p.is_valid === false && p.errors) return p.errors;
    if (typeof p.detail === "object" && p.detail?.errors) return p.detail.errors;
    return [];
}

// Look up the spec default for `allow_interrupt`. Used as a load-time
// fallback for older saved workflows whose nodes lack the field.
function specAllowInterrupt(
    type: string,
    bySpecName: Map<string, NodeSpec>,
): boolean | undefined {
    const prop = bySpecName.get(type)?.properties.find((p) => p.name === "allow_interrupt");
    return prop?.default as boolean | undefined;
}

interface UseWorkflowStateProps {
    initialWorkflowName: string;
    workflowId: number;
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
    user: { id: string; email?: string } | null;
    readOnly?: boolean;
}

export const useWorkflowState = ({
    initialWorkflowName,
    workflowId,
    initialFlow,
    initialTemplateContextVariables,
    initialWorkflowConfigurations,
    user,
    readOnly = false,
}: UseWorkflowStateProps) => {
    const router = useRouter();
    const rfInstance = useRef<ReactFlowInstance<FlowNode, FlowEdge> | null>(null);
    const readOnlyRef = useRef(readOnly);
    readOnlyRef.current = readOnly;
    const saveInFlight = useRef(false);
    const runInFlight = useRef(false);
    const [workflowConfigurationDefaults, setWorkflowConfigurationDefaults] =
        useState<WorkflowConfigurationDefaults | null>(null);
    const [defaultCallDispositions, setDefaultCallDispositions] =
        useState<CallDispositionOption[]>([]);
    const [textChatInactivityTimeoutConstraints, setTextChatInactivityTimeoutConstraints] =
        useState<TextChatInactivityTimeoutConstraints | null>(null);
    const [widgetTextDefaults, setWidgetTextDefaults] = useState<WidgetTexts | null>(null);
    const [workflowConfigurationDefaultsLoaded, setWorkflowConfigurationDefaultsLoaded] =
        useState(false);

    // Spec catalog. Workflow init waits on this to populate defaults; node
    // creation looks up per-type schemas through it.
    const { specs, bySpecName, loading: specsLoading } = useNodeSpecs();

    // Get state and actions from the store
    const {
        nodes,
        edges,
        workflowName,
        isDirty,
        isAddNodePanelOpen,
        workflowValidationErrors,
        templateContextVariables,
        workflowConfigurations,
        initializeWorkflow,
        commitDeletion,
        setNodes,
        setEdges,
        addNode,
        addEdge,
        setWorkflowName,
        setIsDirty,
        setIsAddNodePanelOpen,
        setWorkflowValidationErrors,
        setTemplateContextVariables,
        setWorkflowConfigurations,
        setDictionary,
        dictionary,
        clearValidationErrors,
        markNodeAsInvalid,
        markEdgeAsInvalid,
        setRfInstance,
    } = useWorkflowStore();

    // Get undo/redo functions from the store
    const undo = useCallback(() => {
        if (!readOnlyRef.current) useWorkflowStore.getState().undo();
    }, []);
    const redo = useCallback(() => {
        if (!readOnlyRef.current) useWorkflowStore.getState().redo();
    }, []);
    const canUndo = useWorkflowStore((state) => state.canUndo());
    const canRedo = useWorkflowStore((state) => state.canRedo());

    useEffect(() => {
        let cancelled = false;

        const loadWorkflowConfigurationDefaults = async () => {
            try {
                const response = await getDefaultConfigurationsApiV1UserConfigurationsDefaultsGet();
                if (cancelled) return;

                if (response.error || !response.data?.workflow_configurations) {
                    logger.error(
                        `Failed to load workflow configuration defaults: ${JSON.stringify(response.error)}`,
                    );
                    setWorkflowConfigurationDefaults(null);
                    setDefaultCallDispositions([]);
                    setTextChatInactivityTimeoutConstraints(null);
                    setWidgetTextDefaults(null);
                } else {
                    setWorkflowConfigurationDefaults(response.data.workflow_configurations);
                    setDefaultCallDispositions(
                        response.data.default_call_dispositions ?? [],
                    );
                    setTextChatInactivityTimeoutConstraints(
                        response.data.text_chat_inactivity_timeout_constraints,
                    );
                    setWidgetTextDefaults(response.data.widget_text_defaults);
                }
            } catch (error) {
                if (cancelled) return;
                logger.error(`Failed to load workflow configuration defaults: ${error}`);
                setWorkflowConfigurationDefaults(null);
                setDefaultCallDispositions([]);
                setTextChatInactivityTimeoutConstraints(null);
                setWidgetTextDefaults(null);
            } finally {
                if (!cancelled) {
                    setWorkflowConfigurationDefaultsLoaded(true);
                }
            }
        };

        loadWorkflowConfigurationDefaults();

        return () => {
            cancelled = true;
        };
    }, []);

    // Initialize workflow on mount. Waits for the spec catalog so defaults
    // (allow_interrupt, prompt placeholders, etc.) come from one source.
    useEffect(() => {
        if (specsLoading || !workflowConfigurationDefaultsLoaded) return;

        const startSpec = bySpecName.get(NodeType.START_CALL);
        const fallbackStartNodes: FlowNode[] = startSpec
            ? [buildNewNode(NodeType.START_CALL, { x: 200, y: 200 }, [], startSpec)]
            : [];

        const initialNodes = initialFlow?.nodes?.length
            ? initialFlow.nodes.map((node) => {
                const fallbackAllowInterrupt = specAllowInterrupt(node.type, bySpecName) ?? false;
                return {
                    ...node,
                    data: {
                        ...node.data,
                        invalid: false,
                        allow_interrupt:
                            node.data.allow_interrupt !== undefined
                                ? node.data.allow_interrupt
                                : fallbackAllowInterrupt,
                    },
                };
            })
            : fallbackStartNodes;

        const resolvedInitialWorkflowConfigurations = resolveWorkflowConfigurations(
            initialWorkflowConfigurations,
            workflowConfigurationDefaults,
        );

        initializeWorkflow(
            workflowId,
            initialWorkflowName,
            initialNodes,
            initialFlow?.edges ?? [],
            initialTemplateContextVariables,
            resolvedInitialWorkflowConfigurations,
            resolvedInitialWorkflowConfigurations.dictionary ?? ''
        );
    }, [workflowId, initialWorkflowName, initialFlow?.nodes, initialFlow?.edges, initialTemplateContextVariables, initialWorkflowConfigurations, initializeWorkflow, specsLoading, bySpecName, workflowConfigurationDefaultsLoaded, workflowConfigurationDefaults]);

    // Set up keyboard shortcuts for undo/redo
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Check if we're in an input field
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                return;
            }

            // Undo: Cmd/Ctrl + Z
            if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
                e.preventDefault();
                if (canUndo) {
                    undo();
                }
            }
            // Redo: Cmd/Ctrl + Shift + Z or Cmd/Ctrl + Y
            else if (
                ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'z') ||
                ((e.metaKey || e.ctrlKey) && e.key === 'y')
            ) {
                e.preventDefault();
                if (canRedo) {
                    redo();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [undo, redo, canUndo, canRedo]);

    const handleNodeSelect = useCallback((nodeType: string) => {
        if (readOnlyRef.current || !rfInstance.current) return;

        const position = rfInstance.current.screenToFlowPosition({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });

        const spec = bySpecName.get(nodeType);
        if (!spec) {
            logger.warn({ nodeType }, "No spec registered for node type — cannot add");
            return;
        }
        const currentNodes = useWorkflowStore.getState().nodes;
        const newNode = {
            ...buildNewNode(nodeType, position, currentNodes, spec),
            selected: true, // Mark the new node as selected
        };
        addNode(placeNodeWithoutOverlap(newNode, currentNodes));
        posthog.capture(PostHogEvent.WORKFLOW_NODE_ADDED, {
            node_type: nodeType,
            workflow_id: workflowId,
        });
        setIsAddNodePanelOpen(false);
    }, [addNode, setIsAddNodePanelOpen, workflowId, bySpecName]);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (readOnlyRef.current) return;
        setWorkflowName(e.target.value);
        setIsDirty(true);
    };

    // Replace the canvas's validation state with `errors`. Always clears any
    // prior invalid markers first, so passing [] is the "workflow is now
    // valid" path.
    const applyWorkflowErrors = useCallback(
        (errors: WorkflowError[]) => {
            clearValidationErrors();
            errors.forEach((error) => {
                if (error.kind === "node" && error.id) {
                    markNodeAsInvalid(error.id, error.message);
                } else if (error.kind === "edge" && error.id) {
                    markEdgeAsInvalid(error.id, error.message);
                }
            });
            setWorkflowValidationErrors(errors);
        },
        [
            clearValidationErrors,
            markNodeAsInvalid,
            markEdgeAsInvalid,
            setWorkflowValidationErrors,
        ],
    );

    // Validate workflow function
    const validateWorkflow = useCallback(async () => {
        if (readOnlyRef.current || !user?.id) return;
        try {
            const response = await validateWorkflowApiV1WorkflowWorkflowIdValidatePost({
                path: {
                    workflow_id: workflowId,
                },
            });
            if (readOnlyRef.current) return;
            const errors = extractWorkflowErrors(response.error ?? response.data);
            if (response.error && errors.length === 0) {
                toast.error(detailFromError(response.error, "Unable to validate workflow. Reload the editor to retry."));
                return;
            }
            if (!response.error && !response.data) {
                toast.error("The server did not confirm workflow validation. Reload the editor to retry.");
                return;
            }
            applyWorkflowErrors(errors);
        } catch (error: unknown) {
            logger.error(`Unexpected validation error: ${error}`);
            toast.error("Unable to validate workflow. Check your connection and reload the editor to retry.");
        }
    }, [workflowId, user, applyWorkflowErrors]);

    // Save workflow function. Returns version info from the API response.
    const saveWorkflow = useCallback(async (updateWorkflowDefinition: boolean = true): Promise<{ versionNumber?: number; versionStatus?: string } | undefined> => {
        if (readOnlyRef.current || saveInFlight.current) return;
        if (!user?.id) {
            toast.error("Sign in again to save your workflow.");
            return;
        }
        if (!rfInstance.current) {
            toast.error("The workflow editor is still loading. Try saving again shortly.");
            return;
        }
        // Read nodes/edges from the Zustand store (synchronously up-to-date)
        // and viewport from the ReactFlow instance to build the flow object.
        // This avoids a race condition where rfInstance.toObject() may return
        // stale node data if React hasn't re-rendered yet after a store update.
        const { nodes: currentNodes, edges: currentEdges, workflowName: currentName } = useWorkflowStore.getState();
        const nodeTypeCounts = new Map<string, number>();
        currentNodes.forEach((node) => {
            nodeTypeCounts.set(node.type, (nodeTypeCounts.get(node.type) ?? 0) + 1);
        });
        const maxInstanceViolation = specs.find((spec) => {
            const maxInstances = spec.graph_constraints?.max_instances;
            return (
                maxInstances !== undefined &&
                maxInstances !== null &&
                (nodeTypeCounts.get(spec.name) ?? 0) > maxInstances
            );
        });
        if (maxInstanceViolation) {
            toast.error(
                `${maxInstanceViolation.display_name} limit reached. Remove the extra node before saving.`,
            );
            return;
        }
        const viewport = rfInstance.current.getViewport();
        const flow = { nodes: currentNodes, edges: currentEdges, viewport };
        let result: { versionNumber?: number; versionStatus?: string } | undefined;
        let saveSucceeded = false;
        saveInFlight.current = true;
        try {
            const response = await updateWorkflowApiV1WorkflowWorkflowIdPut({
                path: {
                    workflow_id: workflowId,
                },
                body: {
                    name: currentName,
                    workflow_definition: updateWorkflowDefinition ? flow : null,
                },
            });
            if (response.error) {
                // Backend rejected the save (e.g. 409 trigger-path conflict).
                // When it carries structured WorkflowError items, reuse the
                // validate pipeline so the offending node/edge gets
                // highlighted in-canvas. We only apply when there are
                // structured errors — a non-structured failure (network,
                // 500) shouldn't wipe the existing validation state.
                const workflowErrors = extractWorkflowErrors(response.error);
                if (workflowErrors.length > 0) {
                    applyWorkflowErrors(workflowErrors);
                }
                logger.error(`Error saving workflow: ${JSON.stringify(response.error)}`);
                toast.error(detailFromError(response.error, "Failed to save workflow. Please try again."));
            } else if (!response.data) {
                toast.error("The server did not confirm the save. Please try again.");
            } else {
                const latestState = useWorkflowStore.getState();
                if (!readOnlyRef.current && latestState.nodes === currentNodes && latestState.edges === currentEdges && latestState.workflowName === currentName) {
                    // Reload server state into the canvas — the backend may
                    // have mutated the definition (e.g. minted a missing
                    // trigger_path) and is the source of truth post-save.
                    // Passing no `changes` arg skips history/dirty tracking.
                    const wf = response.data.workflow_definition as
                        | { nodes?: FlowNode[]; edges?: FlowEdge[] }
                        | undefined;
                    if (wf?.nodes) setNodes(wf.nodes);
                    if (wf?.edges) setEdges(wf.edges);
                    setIsDirty(false);
                }
                result = {
                    versionNumber: response.data.version_number ?? undefined,
                    versionStatus: response.data.version_status ?? undefined,
                };
                saveSucceeded = true;
            }
        } catch (error) {
            logger.error(`Error saving workflow: ${error}`);
            toast.error(error instanceof Error ? error.message : "Failed to save workflow. Please try again.");
        } finally {
            saveInFlight.current = false;
        }

        // Only run validate after a successful save — when save failed we've
        // already populated the validation state from the error response and
        // re-running validate would clear those errors (validate reads the
        // unchanged DB state, which won't surface the user's pending issue).
        if (saveSucceeded) {
            await validateWorkflow();
        }
        return result;
    }, [
        workflowId,
        setIsDirty,
        setNodes,
        setEdges,
        user,
        validateWorkflow,
        applyWorkflowErrors,
        specs,
    ]);

    // Set up keyboard shortcut for save (Cmd/Ctrl + S)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 's') {
                e.preventDefault();
                if (useWorkflowStore.getState().isDirty) {
                    saveWorkflow();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [saveWorkflow]);

    const onConnect: OnConnect = useCallback((connection) => {
        if (readOnlyRef.current) return;
        const currentEdges = useWorkflowStore.getState().edges;
        const id = `${connection.source}-${connection.target}`;
        if (currentEdges.some(edge => edge.id === id)) return;
        addEdge({
            ...connection,
            id,
            data: {
                label: '',
                condition: ''
            }
        });
    }, [addEdge]);

    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => {
            if (readOnlyRef.current) {
                changes = changes.filter(change => change.type === 'select');
                if (changes.length === 0) return;
            }
            const currentEdges = useWorkflowStore.getState().edges;
            const newEdges = applyEdgeChanges(changes, currentEdges) as FlowEdge[];
            // Cast changes to FlowEdge type - safe because setEdges only uses the type field
            // to determine history tracking, not the actual item data
            setEdges(newEdges, changes as EdgeChange<FlowEdge>[]);
        },
        [setEdges],
    );

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => {
            if (readOnlyRef.current) {
                changes = changes.filter(change => change.type === 'select' || change.type === 'dimensions');
                if (changes.length === 0) return;
            }
            const currentNodes = useWorkflowStore.getState().nodes;
            let newNodes = applyNodeChanges(changes, currentNodes) as FlowNode[];
            // Resolve movement before committing so the canvas and undo history
            // receive the same collision-free positions.
            const movedIds = new Set(changes.flatMap(change => {
                if (change.type === 'add') return [change.item.id];
                if (change.type === 'position') return [change.id];
                return [];
            }));
            const placed = newNodes.filter(node => !movedIds.has(node.id));
            newNodes = newNodes.map(node => {
                if (!movedIds.has(node.id)) return node;
                const positioned = placeNodeWithoutOverlap(node, placed);
                placed.push(positioned);
                return positioned;
            });
            // Cast changes to FlowNode type - safe because setNodes only uses the type field
            // to determine history tracking, not the actual item data
            setNodes(newNodes, changes as NodeChange<FlowNode>[]);
        },
        [setNodes],
    );

    const onDelete = useCallback(() => {
        if (readOnlyRef.current) return;
        commitDeletion();
    }, [commitDeletion]);

    const onRun = async (mode: string) => {
        if (readOnlyRef.current || runInFlight.current) return;
        if (!user?.id) {
            toast.error("Sign in again to start a workflow run.");
            return;
        }
        runInFlight.current = true;
        try {
            const response = await createWorkflowRunApiV1WorkflowWorkflowIdRunsPost({
                path: { workflow_id: workflowId },
                body: { mode, name: `WR-${getRandomId()}` },
            });
            if (response.error) {
                throw new Error(detailFromError(response.error, "Failed to start workflow run. Please try again."));
            }
            const runId = response.data?.id;
            if (!Number.isInteger(runId) || !runId || runId < 1) {
                throw new Error("The server did not return a valid workflow run. Please try again.");
            }
            if (!readOnlyRef.current) router.push(`/workflow/${workflowId}/run/${runId}`);
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to start workflow run. Please try again.");
        } finally {
            runInFlight.current = false;
        }
    };

    // Save template context variables
    const saveTemplateContextVariables = useCallback(async (variables: Record<string, string>) => {
        if (readOnlyRef.current) throw new Error("Return to the draft before editing this workflow.");
        if (!user?.id) return;
        try {
            const response = await updateWorkflowApiV1WorkflowWorkflowIdPut({
                path: {
                    workflow_id: workflowId,
                },
                body: {
                    name: workflowName,
                    workflow_definition: null,
                    template_context_variables: variables,
                },
            });
            if (response.error) {
                throw new Error(
                    detailFromError(response.error, "Failed to save template variables"),
                );
            }
            if (readOnlyRef.current) return;
            setTemplateContextVariables(variables);
            logger.info('Template context variables saved successfully');
        } catch (error) {
            logger.error(`Error saving template context variables: ${error}`);
            throw error;
        }
    }, [workflowId, workflowName, user, setTemplateContextVariables]);

    // Save workflow configurations
    const saveWorkflowConfigurations = useCallback(async (configurations: WorkflowConfigurations, newWorkflowName: string) => {
        if (readOnlyRef.current) throw new Error("Return to the draft before editing this workflow.");
        if (!user?.id) return;
        // Preserve the current dictionary when saving other configurations
        const currentDictionary = useWorkflowStore.getState().dictionary;
        const configurationsWithDictionary: WorkflowConfigurations = { ...configurations, dictionary: currentDictionary };
        try {
            const response = await updateWorkflowApiV1WorkflowWorkflowIdPut({
                path: {
                    workflow_id: workflowId,
                },
                body: {
                    name: newWorkflowName,
                    workflow_definition: null,
                    workflow_configurations: configurationsWithDictionary as Record<string, unknown>,
                },
            });

            if (response.error) {
                const detail = (response.error as { detail?: unknown }).detail;
                let msg = 'Failed to save workflow configurations';
                if (typeof detail === 'string') {
                    msg = detail;
                } else if (Array.isArray(detail)) {
                    msg = detail
                        .map((e: { model?: string; message?: string; msg?: string }) =>
                            e.model && e.message ? `${e.model}: ${e.message}` : (e.msg || JSON.stringify(e))
                        )
                        .join('\n');
                }
                throw new Error(msg);
            }

            if (readOnlyRef.current) return;
            const savedConfigurations = resolveWorkflowConfigurations(
                response.data?.workflow_configurations
                    ? (response.data.workflow_configurations as Partial<WorkflowConfigurations>)
                    : configurationsWithDictionary,
                workflowConfigurationDefaults,
            );
            setWorkflowConfigurations(savedConfigurations);
            // Set name directly in the store to avoid setWorkflowName which marks isDirty: true
            useWorkflowStore.setState({ workflowName: newWorkflowName });
            logger.info('Workflow configurations saved successfully');
        } catch (error) {
            logger.error(`Error saving workflow configurations: ${error}`);
            throw error;
        }
    }, [workflowId, user, setWorkflowConfigurations, workflowConfigurationDefaults]);

    // Save dictionary
    const saveDictionary = useCallback(async (newDictionary: string) => {
        if (readOnlyRef.current) throw new Error("Return to the draft before editing this workflow.");
        if (!user) return;
        const currentConfigurations =
            useWorkflowStore.getState().workflowConfigurations
            ?? resolveWorkflowConfigurations(null, workflowConfigurationDefaults);
        const updatedConfigurations: WorkflowConfigurations = { ...currentConfigurations, dictionary: newDictionary };
        try {
            const response = await updateWorkflowApiV1WorkflowWorkflowIdPut({
                path: {
                    workflow_id: workflowId,
                },
                body: {
                    name: workflowName,
                    workflow_definition: null,
                    workflow_configurations: updatedConfigurations as Record<string, unknown>,
                },
            });
            if (response.error) {
                throw new Error(detailFromError(response.error, "Failed to save dictionary"));
            }
            if (readOnlyRef.current) return;
            setDictionary(newDictionary);
            setWorkflowConfigurations(updatedConfigurations);
        } catch (error) {
            logger.error(`Error saving dictionary: ${error}`);
            throw error;
        }
    }, [workflowId, workflowName, user, setDictionary, setWorkflowConfigurations, workflowConfigurationDefaults]);

    // Update rfInstance when it changes
    useEffect(() => {
        if (rfInstance.current) {
            setRfInstance(rfInstance.current);
        }
    }, [setRfInstance]);

    // Validate workflow on mount
    useEffect(() => {
        validateWorkflow();
    }, [validateWorkflow]);

    return {
        rfInstance,
        nodes,
        edges,
        isAddNodePanelOpen,
        workflowName,
        isDirty,
        workflowValidationErrors,
        templateContextVariables,
        workflowConfigurations,
        defaultCallDispositions,
        textChatInactivityTimeoutConstraints,
        widgetTextDefaults,
        dictionary,
        setNodes,
        setEdges,
        setIsDirty,
        setIsAddNodePanelOpen,
        handleNodeSelect,
        handleNameChange,
        saveWorkflow,
        onConnect,
        onEdgesChange,
        onNodesChange,
        onDelete,
        onRun,
        saveTemplateContextVariables,
        saveWorkflowConfigurations,
        saveDictionary,
        // Export undo/redo state
        undo,
        redo,
        canUndo: !readOnly && canUndo,
        canRedo: !readOnly && canRedo,
    };
};
