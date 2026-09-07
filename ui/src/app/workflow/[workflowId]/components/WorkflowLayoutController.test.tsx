import { act, render, waitFor } from '@testing-library/react';
import { useCallback } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { FlowNode } from '@/components/flow/types';

import { useWorkflowStore } from '../stores/workflowStore';
import { hasNodeOverlaps } from '../utils/layoutNodes';
import { WorkflowLayoutController } from './WorkflowLayoutController';

const mocks = vi.hoisted(() => ({ initialized: true, fitView: vi.fn(), onLayout: vi.fn() }));
vi.mock('@xyflow/react', () => ({
  useNodesInitialized: () => mocks.initialized,
  useReactFlow: () => ({ fitView: mocks.fitView }),
}));

function createNode(id: string, x: number): FlowNode {
  return { id, type: 'agentNode', position: { x, y: 80 }, data: { name: id } };
}

// Exercise the controlled ReactFlow → layout callback → store → React loop.
function EditorLayout({ layoutRequest = 0 }: { layoutRequest?: number }) {
  const nodes = useWorkflowStore(state => state.nodes);
  const edges = useWorkflowStore(state => state.edges);
  const onLayout = useCallback((layoutedNodes: FlowNode[], requested: boolean) => {
    mocks.onLayout(layoutedNodes, requested);
    useWorkflowStore.getState().setNodes(
      layoutedNodes,
      requested ? layoutedNodes.map(node => ({
        id: node.id, type: 'position', position: node.position, dragging: false,
      })) : undefined,
    );
    useWorkflowStore.getState().setIsDirty(true);
  }, []);
  return <WorkflowLayoutController nodes={nodes} edges={edges} layoutRequest={layoutRequest} onLayout={onLayout} />;
}

beforeEach(() => {
  vi.clearAllMocks();
  mocks.initialized = true;
  useWorkflowStore.getState().clearStore();
  useWorkflowStore.getState().initializeWorkflow(1, 'Draft', [
    createNode('1', 80), createNode('2', 500), createNode('3', 920),
  ], []);
});

describe('workflow automatic layout history', () => {
  it('preserves redo when undo restores unmeasured nodes that need collision repair', async () => {
    const initialNodes = useWorkflowStore.getState().nodes;
    expect(hasNodeOverlaps(initialNodes)).toBe(true);
    render(<EditorLayout />);
    await waitFor(() => expect(hasNodeOverlaps(useWorkflowStore.getState().nodes)).toBe(false));
    expect(useWorkflowStore.getState().history).toHaveLength(1);
    expect(mocks.onLayout).toHaveBeenLastCalledWith(expect.any(Array), false);

    act(() => useWorkflowStore.getState().addNode(createNode('4', 2000)));
    expect(useWorkflowStore.getState().historyIndex).toBe(1);
    act(() => useWorkflowStore.getState().undo());
    await waitFor(() => expect(hasNodeOverlaps(useWorkflowStore.getState().nodes)).toBe(false));

    expect(useWorkflowStore.getState().nodes).toHaveLength(3);
    expect(useWorkflowStore.getState().historyIndex).toBe(0);
    expect(useWorkflowStore.getState().history).toHaveLength(2);
    expect(useWorkflowStore.getState().canRedo()).toBe(true);
    expect(useWorkflowStore.getState().isDirty).toBe(true);
    expect(mocks.onLayout).toHaveBeenCalledTimes(2);
    expect(mocks.onLayout.mock.calls.every(([, requested]) => requested === false)).toBe(true);

    act(() => useWorkflowStore.getState().redo());
    expect(useWorkflowStore.getState().nodes.map(node => node.id)).toEqual(['1', '2', '3', '4']);
    expect(useWorkflowStore.getState().historyIndex).toBe(1);
    expect(hasNodeOverlaps(useWorkflowStore.getState().nodes)).toBe(false);
  });

  it('creates exactly one history checkpoint for an explicit Tidy request', async () => {
    const { rerender } = render(<EditorLayout />);
    await waitFor(() => expect(hasNodeOverlaps(useWorkflowStore.getState().nodes)).toBe(false));
    const beforeTidy = useWorkflowStore.getState().nodes;
    mocks.onLayout.mockClear();

    rerender(<EditorLayout layoutRequest={1} />);
    await waitFor(() => expect(mocks.onLayout).toHaveBeenCalledOnce());
    expect(mocks.onLayout).toHaveBeenCalledWith(expect.any(Array), true);
    expect(useWorkflowStore.getState().history).toHaveLength(2);
    expect(useWorkflowStore.getState().historyIndex).toBe(1);
    expect(useWorkflowStore.getState().isDirty).toBe(true);
    act(() => useWorkflowStore.getState().undo());
    await waitFor(() => expect(hasNodeOverlaps(useWorkflowStore.getState().nodes)).toBe(false));
    expect(useWorkflowStore.getState().nodes).toEqual(beforeTidy);
    expect(useWorkflowStore.getState().canRedo()).toBe(true);
  });

  it('waits for measurements and drag completion before applying layout', async () => {
    mocks.initialized = false;
    const { rerender } = render(<EditorLayout />);
    expect(mocks.onLayout).not.toHaveBeenCalled();
    act(() => useWorkflowStore.getState().setNodes(useWorkflowStore.getState().nodes.map(node => ({ ...node, dragging: true }))));
    mocks.initialized = true;
    rerender(<EditorLayout />);
    expect(mocks.onLayout).not.toHaveBeenCalled();
    act(() => useWorkflowStore.getState().setNodes(useWorkflowStore.getState().nodes.map(node => ({ ...node, dragging: false }))));
    await waitFor(() => expect(mocks.onLayout).toHaveBeenCalledOnce());
    expect(mocks.onLayout).toHaveBeenCalledWith(expect.any(Array), false);
  });
});
