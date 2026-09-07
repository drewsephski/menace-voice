import { act, fireEvent, render, screen } from '@testing-library/react';
import { Position } from '@xyflow/react';
import type { ComponentProps, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { WorkflowProvider } from '@/app/workflow/[workflowId]/contexts/WorkflowContext';
import { useWorkflowStore } from '@/app/workflow/[workflowId]/stores/workflowStore';
import type { DeleteConfirmationDialog } from '@/components/DeleteConfirmationDialog';
import type { FlowEdge } from '@/components/flow/types';
import type { Button } from '@/components/ui/button';

import CustomEdge from './CustomEdge';

const mocks = vi.hoisted(() => ({
    setNodes: vi.fn(), saveWorkflow: vi.fn(),
    confirm: undefined as ComponentProps<typeof DeleteConfirmationDialog>['onConfirm'] | undefined,
    save: undefined as ComponentProps<typeof Button>['onClick'],
}));
vi.mock('@xyflow/react', async importOriginal => ({
    ...await importOriginal<typeof import('@xyflow/react')>(),
    BaseEdge: () => null,
    EdgeLabelRenderer: ({ children }: PropsWithChildren) => createPortal(children, document.body),
    useReactFlow: () => ({ getEdges: () => useWorkflowStore.getState().edges, setNodes: mocks.setNodes }),
}));
vi.mock('@/components/DeleteConfirmationDialog', () => ({
    DeleteConfirmationDialog: ({ open, onConfirm }: ComponentProps<typeof DeleteConfirmationDialog>) => {
        mocks.confirm = onConfirm;
        return open ? createPortal(<button onClick={onConfirm}>Confirm deletion</button>, document.body) : null;
    },
}));
vi.mock('@/components/ui/button', async importOriginal => {
    const actual = await importOriginal<typeof import('@/components/ui/button')>();
    return { ...actual, Button: (props: ComponentProps<typeof Button>) => {
        if (props.children === 'Save') mocks.save = props.onClick;
        return <actual.Button {...props} />;
    } };
});

const edge: FlowEdge = { id: 'edge', source: '1', target: '2', data: { label: 'Original', condition: 'Ready' } };
function view(readOnly: boolean) {
    return <WorkflowProvider value={{ readOnly, saveWorkflow: mocks.saveWorkflow, recordings: [] }}>
        <svg><CustomEdge id="edge" source="1" target="2" sourceX={0} sourceY={0} targetX={100} targetY={100}
            sourcePosition={Position.Right} targetPosition={Position.Left} data={edge.data!} selected /></svg>
    </WorkflowProvider>;
}
beforeEach(() => {
    vi.clearAllMocks();
    mocks.save = undefined;
    useWorkflowStore.getState().clearStore();
    useWorkflowStore.getState().initializeWorkflow(1, 'Draft', [], [edge]);
});

describe('historical edge protection', () => {
    it('hides edit/delete controls and blocks deletion under a read-only WorkflowProvider', () => {
        render(view(true));
        const before = useWorkflowStore.getState();
        expect(screen.queryByRole('button', { name: 'Delete connection' })).toBeNull();
        expect(screen.queryByRole('button', { name: 'Edit connection' })).toBeNull();
        fireEvent.doubleClick(screen.getByText('Original'));
        expect(screen.queryByRole('dialog')).toBeNull();
        act(() => mocks.confirm?.());
        expect(useWorkflowStore.getState().edges).toBe(before.edges);
        expect(useWorkflowStore.getState().history).toBe(before.history);
        expect(useWorkflowStore.getState().isDirty).toBe(false);
    });

    it('dismisses confirmation and guards a retained deletion callback after switching to history', () => {
        const { rerender } = render(view(false));
        fireEvent.click(screen.getByRole('button', { name: 'Delete connection' }));
        expect(screen.getByRole('button', { name: 'Confirm deletion' })).toBeTruthy();
        const confirm = mocks.confirm;
        rerender(view(true));
        expect(screen.queryByRole('button', { name: 'Confirm deletion' })).toBeNull();
        act(() => confirm?.());
        expect(useWorkflowStore.getState().edges).toEqual([edge]);
        expect(useWorkflowStore.getState().history).toHaveLength(1);
    });

    it('closes editing and guards a retained save callback after switching to history', async () => {
        const { rerender } = render(view(false));
        fireEvent.click(screen.getByRole('button', { name: 'Edit connection' }));
        fireEvent.change(screen.getByDisplayValue('Original'), { target: { value: 'Changed' } });
        const save = mocks.save;
        expect(save).toBeTypeOf('function');
        rerender(view(true));
        expect(screen.queryByRole('dialog')).toBeNull();
        await act(async () => save?.({} as Parameters<NonNullable<typeof save>>[0]));
        expect(useWorkflowStore.getState().edges).toEqual([edge]);
        expect(useWorkflowStore.getState().history).toHaveLength(1);
        expect(mocks.saveWorkflow).not.toHaveBeenCalled();
    });

    it('still saves and deletes editable edges with undo support', async () => {
        render(view(false));
        fireEvent.click(screen.getByRole('button', { name: 'Edit connection' }));
        fireEvent.change(screen.getByDisplayValue('Original'), { target: { value: 'Changed' } });
        await act(async () => fireEvent.click(screen.getByRole('button', { name: 'Save' })));
        expect(useWorkflowStore.getState().edges[0].data?.label).toBe('Changed');
        expect(mocks.saveWorkflow).toHaveBeenCalledOnce();
        fireEvent.click(screen.getByRole('button', { name: 'Delete connection' }));
        fireEvent.click(screen.getByRole('button', { name: 'Confirm deletion' }));
        expect(useWorkflowStore.getState().edges).toEqual([]);
        act(() => useWorkflowStore.getState().undo());
        expect(useWorkflowStore.getState().edges[0].data?.label).toBe('Changed');
    });
});
