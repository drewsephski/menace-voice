import { act, renderHook } from '@testing-library/react';
import { type ReactNode, useState } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';

import { WorkflowProvider } from '@/app/workflow/[workflowId]/contexts/WorkflowContext';
import { useWorkflowStore } from '@/app/workflow/[workflowId]/stores/workflowStore';
import type { FlowNode } from '@/components/flow/types';

import { useNodeHandlers } from './useNodeHandlers';

const initialNode: FlowNode = {
  id: '1', type: 'agentNode', position: { x: 0, y: 0 },
  data: { name: 'Agent', prompt: 'Original', tool_uuids: ['tool-a'] },
};

beforeEach(() => {
  useWorkflowStore.getState().clearStore();
  useWorkflowStore.getState().initializeWorkflow(1, 'Draft', [initialNode], []);
});

function setup(readOnly = false) {
  let setReadOnly: (next: boolean) => void = () => {};
  function Wrapper({ children }: { children: ReactNode }) {
    const [currentReadOnly, updateReadOnly] = useState(readOnly);
    setReadOnly = updateReadOnly;
    return <WorkflowProvider value={{ readOnly: currentReadOnly, saveWorkflow: async () => {} }}>{children}</WorkflowProvider>;
  }
  const hook = renderHook(() => useNodeHandlers({ id: '1', additionalData: { is_start: true } }), { wrapper: Wrapper });
  return { ...hook, setReadOnly: (next: boolean) => act(() => setReadOnly(next)) };
}

describe('node mutation handlers', () => {
  it('merges into synchronous current node data and preserves required additional data', () => {
    const { result } = setup();
    const savedCallback = result.current.handleSaveNodeData;
    act(() => {
      useWorkflowStore.getState().updateNode('1', { data: { ...initialNode.data, tool_uuids: ['tool-b'], document_uuids: ['doc-a'] } });
      savedCallback({ name: 'Updated', prompt: 'New prompt', is_start: false });
    });
    expect(useWorkflowStore.getState().nodes[0].data).toEqual({
      name: 'Updated', prompt: 'New prompt', tool_uuids: ['tool-b'], document_uuids: ['doc-a'], is_start: true,
    });
    expect(useWorkflowStore.getState().isDirty).toBe(true);
    expect(useWorkflowStore.getState().history).toHaveLength(3);
  });

  it('deletes the node and attached edges in one undoable operation', () => {
    const { result } = setup();
    const edge = { id: 'edge', source: '1', target: '2', data: { condition: '', label: '' } };
    useWorkflowStore.getState().initializeWorkflow(1, 'Draft', [initialNode, { ...initialNode, id: '2' }], [edge]);
    act(() => result.current.handleDeleteNode());
    expect(useWorkflowStore.getState().nodes.map(node => node.id)).toEqual(['2']);
    expect(useWorkflowStore.getState().edges).toEqual([]);
    expect(useWorkflowStore.getState().history).toHaveLength(2);
    act(() => result.current.handleDeleteNode());
    expect(useWorkflowStore.getState().history).toHaveLength(2);
    act(() => useWorkflowStore.getState().undo());
    expect(useWorkflowStore.getState().nodes).toHaveLength(2);
    expect(useWorkflowStore.getState().edges).toEqual([edge]);
  });

  it('blocks data and deletion writes in a historical view', () => {
    const { result } = setup(true);
    const before = useWorkflowStore.getState();
    act(() => {
      result.current.handleSaveNodeData({ name: 'Changed', tool_uuids: [] });
      result.current.handleDeleteNode();
    });
    expect(useWorkflowStore.getState().nodes).toBe(before.nodes);
    expect(useWorkflowStore.getState().history).toBe(before.history);
    expect(useWorkflowStore.getState().isDirty).toBe(false);
  });

  it('blocks retained cleanup and delete callbacks after switching to history and recovers on draft', () => {
    const { result, setReadOnly } = setup();
    const callbacks = result.current;
    setReadOnly(true);
    act(() => {
      callbacks.handleSaveNodeData({ name: 'Agent', tool_uuids: [] });
      callbacks.handleDeleteNode();
    });
    expect(useWorkflowStore.getState().nodes).toEqual([initialNode]);
    expect(useWorkflowStore.getState().history).toHaveLength(1);
    setReadOnly(false);
    act(() => callbacks.handleSaveNodeData({ name: 'Draft edit' }));
    expect(useWorkflowStore.getState().nodes[0].data.name).toBe('Draft edit');
    act(() => callbacks.handleDeleteNode());
    expect(useWorkflowStore.getState().nodes).toEqual([]);
  });

  it('preserves editing when used without an optional workflow context', () => {
    const { result } = renderHook(() => useNodeHandlers({ id: '1' }));
    act(() => result.current.handleSaveNodeData({ name: 'Updated' }));
    expect(useWorkflowStore.getState().nodes[0].data.name).toBe('Updated');
  });
});
