import { act, fireEvent, renderHook, waitFor } from '@testing-library/react';
import type { ReactFlowInstance } from '@xyflow/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { NodeSpec, WorkflowError } from '@/client/types.gen';
import type { FlowEdge, FlowNode } from '@/components/flow/types';

import { useWorkflowStore } from '../stores/workflowStore';
import { hasNodeOverlaps } from '../utils/layoutNodes';
import { useWorkflowState } from './useWorkflowState';

const mocks = vi.hoisted(() => ({
  update: vi.fn(), run: vi.fn(), validate: vi.fn(), defaults: vi.fn(),
  push: vi.fn(), capture: vi.fn(), error: vi.fn(), nodeSpecs: vi.fn(),
}));
vi.mock('@/client', () => ({
  updateWorkflowApiV1WorkflowWorkflowIdPut: mocks.update,
  createWorkflowRunApiV1WorkflowWorkflowIdRunsPost: mocks.run,
  validateWorkflowApiV1WorkflowWorkflowIdValidatePost: mocks.validate,
  getDefaultConfigurationsApiV1UserConfigurationsDefaultsGet: mocks.defaults,
}));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: mocks.push }) }));
vi.mock('posthog-js', () => ({ default: { capture: mocks.capture } }));
vi.mock('sonner', () => ({ toast: { error: mocks.error } }));
vi.mock('@/lib/logger', () => ({ default: { error: vi.fn(), warn: vi.fn(), info: vi.fn() } }));
vi.mock('@/components/flow/renderer', () => ({ useNodeSpecs: mocks.nodeSpecs }));

const spec: NodeSpec = {
  name: 'agentNode', display_name: 'Agent', description: '', category: 'call_node', icon: 'bot',
  properties: [
    { name: 'name', display_name: 'Name', description: '', type: 'string', default: 'Canonical agent' },
    { name: 'prompt', display_name: 'Prompt', description: '', type: 'string', default: 'Current server default' },
  ],
};
const createNode = (id: string): FlowNode => ({
  id, type: 'agentNode', position: { x: 0, y: 0 }, data: { name: id }, selected: true,
});
const initialFlow = { nodes: [createNode('1')], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
const user = { id: 'user-1' };
const props = { initialWorkflowName: 'Initial', workflowId: 1, initialFlow, user };

async function setup() {
  const hook = renderHook(({ readOnly }) => useWorkflowState({ ...props, readOnly }), { initialProps: { readOnly: false } });
  await waitFor(() => expect(useWorkflowStore.getState().workflowId).toBe(1));
  const instance = {
    screenToFlowPosition: vi.fn(() => ({ x: 0, y: 0 })),
    getViewport: vi.fn(() => initialFlow.viewport),
    getNodes: vi.fn(() => []),
    setNodes: vi.fn(), addNodes: vi.fn(), addEdges: vi.fn(), toObject: vi.fn(),
  };
  hook.result.current.rfInstance.current = instance as unknown as ReactFlowInstance<FlowNode, FlowEdge>;
  mocks.validate.mockClear();
  return { ...hook, instance };
}

beforeEach(() => {
  vi.clearAllMocks();
  useWorkflowStore.getState().clearStore();
  mocks.nodeSpecs.mockReturnValue({ specs: [spec], bySpecName: new Map([[spec.name, spec]]), loading: false });
  mocks.defaults.mockResolvedValue({ data: {} });
  mocks.validate.mockResolvedValue({ data: { is_valid: true, errors: [] } });
  mocks.update.mockResolvedValue({ data: { id: 1, version_number: 2, version_status: 'draft' } });
  mocks.run.mockResolvedValue({ data: { id: 12 } });
});

describe('workflow graph writes', () => {
  it('adds from current store state and specs, avoids collisions, and records one selected-node edit', async () => {
    const { result, instance } = await setup();
    act(() => useWorkflowStore.getState().setIsAddNodePanelOpen(true));
    act(() => result.current.handleNodeSelect('agentNode'));

    expect(result.current.nodes).toEqual(useWorkflowStore.getState().nodes);
    expect(result.current.nodes).toHaveLength(2);
    expect(result.current.nodes.map(node => node.selected)).toEqual([false, true]);
    expect(result.current.nodes[1].data).toMatchObject({ name: 'Canonical agent', prompt: 'Current server default' });
    expect(hasNodeOverlaps(result.current.nodes)).toBe(false);
    expect(useWorkflowStore.getState().history).toHaveLength(2);
    expect(result.current.isDirty).toBe(true);
    expect(result.current.isAddNodePanelOpen).toBe(false);
    expect(mocks.capture).toHaveBeenCalledOnce();
    expect(instance.setNodes).not.toHaveBeenCalled();
    expect(instance.addNodes).not.toHaveBeenCalled();
    expect(instance.getNodes).not.toHaveBeenCalled();

    act(() => result.current.undo());
    expect(result.current.nodes.map(node => node.id)).toEqual(['1']);
    act(() => result.current.redo());
    expect(result.current.nodes).toHaveLength(2);
  });

  it('allocates distinct nodes even for consecutive additions before React renders', async () => {
    const { result } = await setup();
    act(() => {
      result.current.handleNodeSelect('agentNode');
      result.current.handleNodeSelect('agentNode');
    });
    expect(new Set(result.current.nodes.map(node => node.id)).size).toBe(3);
    expect(hasNodeOverlaps(result.current.nodes)).toBe(false);
    expect(useWorkflowStore.getState().history).toHaveLength(3);
  });

  it('adds edges through the store with one undo checkpoint and ignores duplicate connections', async () => {
    const { result, instance } = await setup();
    act(() => useWorkflowStore.getState().addNode(createNode('2')));
    const connection = { source: '1', target: '2', sourceHandle: null, targetHandle: null };
    act(() => {
      result.current.onConnect(connection);
      result.current.onConnect(connection);
    });
    expect(result.current.edges).toHaveLength(1);
    expect(instance.addEdges).not.toHaveBeenCalled();
    expect(useWorkflowStore.getState().history).toHaveLength(3);
    act(() => result.current.undo());
    expect(result.current.edges).toEqual([]);
    act(() => result.current.redo());
    expect(result.current.edges[0]).toMatchObject(connection);
  });

  it('saves the exact visible store graph and latest name without consulting ReactFlow graph state', async () => {
    const { result, instance } = await setup();
    let snapshot: ReturnType<typeof useWorkflowStore.getState>;
    await act(async () => {
      result.current.handleNodeSelect('agentNode');
      useWorkflowStore.getState().setWorkflowName('Latest name');
      snapshot = useWorkflowStore.getState();
      await result.current.saveWorkflow();
    });
    expect(mocks.update).toHaveBeenCalledWith({
      path: { workflow_id: 1 },
      body: { name: 'Latest name', workflow_definition: { nodes: snapshot!.nodes, edges: snapshot!.edges, viewport: initialFlow.viewport } },
    });
    expect(result.current.nodes).toMatchObject(snapshot!.nodes);
    expect(result.current.isDirty).toBe(false);
    expect(instance.toObject).not.toHaveBeenCalled();
  });
});

describe('workflow save failures and retries', () => {
  it.each([
    [{ error: { detail: 'Save denied' } }, 'Save denied'],
    [{}, 'The server did not confirm the save. Please try again.'],
  ])('keeps unsaved state on an unsuccessful resolved response', async (response, message) => {
    const { result } = await setup();
    act(() => result.current.handleNodeSelect('agentNode'));
    mocks.update.mockResolvedValueOnce(response);
    await act(async () => { expect(await result.current.saveWorkflow()).toBeUndefined(); });
    expect(mocks.error).toHaveBeenCalledWith(message);
    expect(result.current.isDirty).toBe(true);
    expect(mocks.validate).not.toHaveBeenCalled();
    await act(async () => { expect(await result.current.saveWorkflow()).toEqual({ versionNumber: 2, versionStatus: 'draft' }); });
    expect(result.current.isDirty).toBe(false);
  });

  it('surfaces transport failures and permits retry', async () => {
    const { result } = await setup();
    mocks.update.mockRejectedValueOnce(new Error('Network unavailable'));
    await act(async () => { await result.current.saveWorkflow(); });
    expect(mocks.error).toHaveBeenCalledWith('Network unavailable');
    await act(async () => { await result.current.saveWorkflow(); });
    expect(mocks.update).toHaveBeenCalledTimes(2);
  });

  it('blocks double save and preserves edits made while the save is pending', async () => {
    const { result } = await setup();
    let resolveSave: (value: unknown) => void = () => {};
    mocks.update.mockImplementationOnce(() => new Promise(resolve => { resolveSave = resolve; }));
    let pendingSave: ReturnType<typeof result.current.saveWorkflow>;
    act(() => {
      pendingSave = result.current.saveWorkflow();
      void result.current.saveWorkflow();
      result.current.handleNodeSelect('agentNode');
    });
    expect(mocks.update).toHaveBeenCalledOnce();
    await act(async () => {
      resolveSave({ data: { id: 1, workflow_definition: initialFlow } });
      await pendingSave;
    });
    expect(result.current.nodes).toHaveLength(2);
    expect(result.current.isDirty).toBe(true);
  });
});

describe('workflow run creation', () => {
  it.each([
    { error: { detail: 'Run denied' } }, { data: {} }, { data: { id: -1 } }, { data: { id: '12' } },
  ])('never navigates after a failed or invalid run response', async response => {
    const { result } = await setup();
    mocks.run.mockResolvedValueOnce(response);
    await act(async () => { await result.current.onRun('webrtc'); });
    expect(mocks.push).not.toHaveBeenCalled();
    expect(mocks.error).toHaveBeenCalledOnce();
    await act(async () => { await result.current.onRun('webrtc'); });
    expect(mocks.push).toHaveBeenCalledWith('/workflow/1/run/12');
  });

  it('blocks repeated run submissions until the request settles', async () => {
    const { result } = await setup();
    let resolveRun: (value: unknown) => void = () => {};
    mocks.run.mockImplementationOnce(() => new Promise(resolve => { resolveRun = resolve; }));
    let pendingRun: Promise<void>;
    act(() => {
      pendingRun = result.current.onRun('webrtc');
      void result.current.onRun('webrtc');
    });
    expect(mocks.run).toHaveBeenCalledOnce();
    await act(async () => { resolveRun({ data: { id: 12 } }); await pendingRun; });
    expect(mocks.push).toHaveBeenCalledOnce();
  });
});


describe('workflow validation failure handling', () => {
  const priorError: WorkflowError = { kind: 'node', id: '1', field: 'prompt', message: 'A prompt is required' };

  it.each([
    { error: { detail: 'Validation temporarily unavailable' } },
    {},
  ])('retains prior validation errors when HTTP validation cannot confirm a result', async response => {
    const { result } = await setup();
    act(() => {
      useWorkflowStore.getState().markNodeAsInvalid('1', priorError.message);
      useWorkflowStore.getState().setWorkflowValidationErrors([priorError]);
    });
    mocks.validate.mockResolvedValueOnce(response);
    await act(async () => { await result.current.saveWorkflow(); });
    expect(result.current.workflowValidationErrors).toEqual([priorError]);
    expect(result.current.nodes[0].data).toMatchObject({ invalid: true, validationMessage: priorError.message });
    expect(mocks.error).toHaveBeenCalledOnce();

    await act(async () => { await result.current.saveWorkflow(); });
    expect(result.current.workflowValidationErrors).toEqual([]);
    expect(result.current.nodes[0].data.invalid).toBe(false);
  });

  it('retains prior errors on validation transport failure', async () => {
    const { result } = await setup();
    act(() => useWorkflowStore.getState().setWorkflowValidationErrors([priorError]));
    mocks.validate.mockRejectedValueOnce(new Error('Offline'));
    await act(async () => { await result.current.saveWorkflow(); });
    expect(result.current.workflowValidationErrors).toEqual([priorError]);
    expect(mocks.error).toHaveBeenCalledWith('Unable to validate workflow. Check your connection and reload the editor to retry.');
  });

  it('still applies structured server validation failures after a confirmed save', async () => {
    const { result } = await setup();
    mocks.validate.mockResolvedValueOnce({ error: { detail: { is_valid: false, errors: [priorError] } } });
    await act(async () => { await result.current.saveWorkflow(); });
    expect(result.current.workflowValidationErrors).toEqual([priorError]);
    expect(result.current.nodes[0].data).toMatchObject({ invalid: true, validationMessage: priorError.message });
    expect(result.current.isDirty).toBe(false);
  });
});


describe('historical workflow read-only safety', () => {
  it('blocks keyboard and stale callbacks for undo, redo, save and graph mutations', async () => {
    const { result, rerender } = await setup();
    act(() => {
      result.current.handleNodeSelect('agentNode');
      result.current.handleNodeSelect('agentNode');
      result.current.undo();
    });
    const callbacks = result.current;
    rerender({ readOnly: true });
    const snapshot = useWorkflowStore.getState();
    expect(snapshot.canUndo()).toBe(true);
    expect(snapshot.canRedo()).toBe(true);
    expect(result.current.canUndo).toBe(false);
    expect(result.current.canRedo).toBe(false);

    await act(async () => {
      fireEvent.keyDown(document.body, { key: 'z', ctrlKey: true });
      fireEvent.keyDown(document.body, { key: 'z', metaKey: true, shiftKey: true });
      fireEvent.keyDown(document.body, { key: 'y', ctrlKey: true });
      fireEvent.keyDown(document.body, { key: 's', metaKey: true });
      callbacks.undo();
      callbacks.redo();
      callbacks.handleNodeSelect('agentNode');
      callbacks.onConnect({ source: '1', target: '2', sourceHandle: null, targetHandle: null });
      callbacks.onNodesChange([{ type: 'remove', id: '1' }]);
      callbacks.onNodesChange([{ type: 'position', id: '1', position: { x: 999, y: 999 }, dragging: false }]);
      callbacks.onEdgesChange([{ type: 'remove', id: '1-2' }]);
      callbacks.onDelete();
      await callbacks.saveWorkflow();
      await callbacks.onRun('webrtc');
    });
    expect(useWorkflowStore.getState().nodes).toBe(snapshot.nodes);
    expect(useWorkflowStore.getState().edges).toBe(snapshot.edges);
    expect(useWorkflowStore.getState().history).toBe(snapshot.history);
    expect(useWorkflowStore.getState().historyIndex).toBe(snapshot.historyIndex);
    expect(mocks.update).not.toHaveBeenCalled();
    expect(mocks.run).not.toHaveBeenCalled();

    rerender({ readOnly: false });
    act(() => fireEvent.keyDown(document.body, { key: 'z', ctrlKey: true }));
    expect(result.current.nodes).toHaveLength(1);
    await act(async () => { fireEvent.keyDown(document.body, { key: 's', ctrlKey: true }); });
    expect(mocks.update).toHaveBeenCalledOnce();
  });

  it('allows selection and measurements but filters graph writes from mixed ReactFlow changes', async () => {
    const { result, rerender } = await setup();
    act(() => useWorkflowStore.getState().addEdge({ id: 'edge', source: '1', target: '1', data: { label: '', condition: '' } }));
    act(() => useWorkflowStore.getState().setIsDirty(false));
    rerender({ readOnly: true });
    const history = useWorkflowStore.getState().history;
    await act(async () => {
      result.current.onNodesChange([
        { type: 'select', id: '1', selected: false },
        { type: 'dimensions', id: '1', dimensions: { width: 440, height: 360 } },
        { type: 'position', id: '1', position: { x: 999, y: 999 }, dragging: false },
        { type: 'remove', id: '1' },
      ]);
      result.current.onEdgesChange([
        { type: 'select', id: 'edge', selected: true },
        { type: 'remove', id: 'edge' },
      ]);
    });
    expect(result.current.nodes[0]).toMatchObject({ selected: false, measured: { width: 440, height: 360 }, position: { x: 0, y: 0 } });
    expect(result.current.edges).toHaveLength(1);
    expect(result.current.edges[0]).toMatchObject({ selected: true });
    expect(result.current.isDirty).toBe(false);
    expect(useWorkflowStore.getState().history).toBe(history);
  });

  it('rejects metadata writes from dialogs retained across a version switch', async () => {
    const { result, rerender } = await setup();
    const callbacks = result.current;
    rerender({ readOnly: true });
    await expect(callbacks.saveTemplateContextVariables({ example: 'value' })).rejects.toThrow('Return to the draft');
    await expect(callbacks.saveDictionary('New dictionary')).rejects.toThrow('Return to the draft');
    await expect(callbacks.saveWorkflowConfigurations(callbacks.workflowConfigurations!, 'New name')).rejects.toThrow('Return to the draft');
    expect(mocks.update).not.toHaveBeenCalled();
  });

  it('does not replace a historical graph when an earlier draft save completes', async () => {
    const { result, rerender } = await setup();
    let resolveSave: (value: unknown) => void = () => {};
    mocks.update.mockImplementationOnce(() => new Promise(resolve => { resolveSave = resolve; }));
    let pendingSave: ReturnType<typeof result.current.saveWorkflow>;
    act(() => { pendingSave = result.current.saveWorkflow(); });
    rerender({ readOnly: true });
    const snapshot = useWorkflowStore.getState().nodes;
    await act(async () => {
      resolveSave({ data: { id: 1, workflow_definition: { nodes: [createNode('server-draft')], edges: [] } } });
      await pendingSave;
    });
    expect(result.current.nodes).toBe(snapshot);
    expect(mocks.validate).not.toHaveBeenCalled();
  });
});
