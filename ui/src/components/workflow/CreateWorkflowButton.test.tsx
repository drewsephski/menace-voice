import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ComponentProps, ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { NodeSpec } from '@/client/types.gen';

import { CreateWorkflowButton } from './CreateWorkflowButton';

const mocks = vi.hoisted(() => ({
    push: vi.fn(),
    token: vi.fn(),
    catalog: vi.fn(),
    create: vi.fn(),
    error: vi.fn(),
    auth: { user: { id: 'user' } as { id: string } | null, loading: false },
}));

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: mocks.push }) }));
vi.mock('@/lib/auth', () => ({ useAuth: () => ({ ...mocks.auth, getAccessToken: mocks.token }) }));
vi.mock('@/client/sdk.gen', () => ({
    listNodeTypesApiV1NodeTypesGet: mocks.catalog,
    createWorkflowApiV1WorkflowCreateDefinitionPost: mocks.create,
}));
vi.mock('sonner', () => ({ toast: { error: mocks.error } }));
vi.mock('@/lib/logger', () => ({ default: { error: vi.fn() } }));
vi.mock('@/components/ui/dropdown-menu', () => ({
    DropdownMenu: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    DropdownMenuContent: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    DropdownMenuTrigger: ({ children }: { children: ReactNode }) => <>{children}</>,
    DropdownMenuItem: (props: ComponentProps<'button'>) => <button {...props} />,
}));

const startSpec: NodeSpec = {
    name: 'startCall', display_name: 'Start Call', description: '', category: 'call_node', icon: 'Play',
    properties: [
        { name: 'name', type: 'string', display_name: 'Name', description: '', default: 'Start Call' },
        { name: 'allow_interrupt', type: 'boolean', display_name: '', description: '', default: false },
        { name: 'add_global_prompt', type: 'boolean', display_name: '', description: '', default: true },
        { name: 'prompt', type: 'mention_textarea', display_name: '', description: '', default: null },
    ],
};

beforeEach(() => {
    vi.resetAllMocks();
    mocks.auth = { user: { id: 'user' }, loading: false };
    mocks.token.mockResolvedValue('token');
    mocks.catalog.mockResolvedValue({ data: { node_types: [startSpec] } });
    mocks.create.mockResolvedValue({ data: { id: 42 } });
});

const createBlank = () => fireEvent.click(screen.getByRole('button', { name: /Blank Canvas/ }));

describe('Blank workflow creation', () => {
    it('builds the minimal draft from the current backend defaults and navigates on success', async () => {
        render(<CreateWorkflowButton />);
        createBlank();
        await waitFor(() => expect(mocks.push).toHaveBeenCalledWith('/workflow/42'));
        expect(mocks.catalog).toHaveBeenCalledWith({ headers: { Authorization: 'Bearer token' } });
        expect(mocks.create.mock.calls[0][0]).toMatchObject({
            headers: { Authorization: 'Bearer token' },
            body: { workflow_definition: {
                nodes: [{ type: 'startCall', data: { name: 'Start Call', allow_interrupt: false, add_global_prompt: true, is_start: true } }],
                edges: [],
            } },
        });
        expect(mocks.create.mock.calls[0][0].body.workflow_definition.nodes).toHaveLength(1);
        expect(mocks.create.mock.calls[0][0].body.workflow_definition.nodes[0].data).not.toHaveProperty('prompt');
        expect(mocks.error).not.toHaveBeenCalled();
    });

    it('surfaces resolved HTTP errors, never navigates, and permits retry', async () => {
        mocks.create.mockResolvedValueOnce({ error: { detail: [{ msg: 'Agent limit reached' }] } });
        render(<CreateWorkflowButton />);
        createBlank();
        await waitFor(() => expect(mocks.error).toHaveBeenCalledWith('Agent limit reached'));
        expect(mocks.push).not.toHaveBeenCalled();
        expect((screen.getByRole('button', { name: /Create Agent/ }) as HTMLButtonElement).disabled).toBe(false);
        createBlank();
        await waitFor(() => expect(mocks.push).toHaveBeenCalledWith('/workflow/42'));
    });

    it.each([undefined, 0, -1, 1.5, '42', Number.MAX_SAFE_INTEGER + 1])('rejects an invalid returned ID: %s', async (id) => {
        mocks.create.mockResolvedValue({ data: { id } });
        render(<CreateWorkflowButton />);
        createBlank();
        await waitFor(() => expect(mocks.error).toHaveBeenCalledWith(expect.stringContaining('valid agent ID')));
        expect(mocks.push).not.toHaveBeenCalled();
    });

    it('does not create with missing defaults or a failed catalog request', async () => {
        mocks.catalog.mockResolvedValueOnce({ error: { detail: 'Defaults unavailable' } });
        render(<CreateWorkflowButton />);
        createBlank();
        await waitFor(() => expect(mocks.error).toHaveBeenCalledWith('Defaults unavailable'));
        mocks.catalog.mockResolvedValueOnce({ data: { node_types: [] } });
        createBlank();
        await waitFor(() => expect(mocks.error).toHaveBeenCalledWith('Agent defaults are unavailable. Please try again.'));
        expect(mocks.create).not.toHaveBeenCalled();
    });

    it('surfaces missing user and expired token failures without API writes', async () => {
        mocks.auth.user = null;
        const { rerender } = render(<CreateWorkflowButton />);
        createBlank();
        expect(mocks.error).toHaveBeenCalledWith('Please sign in before creating an agent.');
        mocks.auth.user = { id: 'user' };
        mocks.token.mockResolvedValue('');
        rerender(<CreateWorkflowButton />);
        createBlank();
        await waitFor(() => expect(mocks.error).toHaveBeenCalledWith(expect.stringContaining('session has expired')));
        expect(mocks.catalog).not.toHaveBeenCalled();
        expect(mocks.create).not.toHaveBeenCalled();
    });

    it('restores the action after token acquisition rejects', async () => {
        mocks.token.mockRejectedValueOnce(new Error('Sign in again to continue.'));
        render(<CreateWorkflowButton />);
        createBlank();
        await waitFor(() => expect(mocks.error).toHaveBeenCalledWith('Sign in again to continue.'));
        createBlank();
        await waitFor(() => expect(mocks.push).toHaveBeenCalledWith('/workflow/42'));
    });

    it('blocks repeated clicks synchronously while token acquisition is pending', async () => {
        let resolveToken!: (token: string) => void;
        mocks.token.mockReturnValue(new Promise<string>((resolve) => { resolveToken = resolve; }));
        render(<CreateWorkflowButton />);
        act(() => { createBlank(); createBlank(); });
        expect(mocks.token).toHaveBeenCalledTimes(1);
        expect((screen.getByRole('button', { name: /Creating/ }) as HTMLButtonElement).disabled).toBe(true);
        await act(async () => resolveToken('token'));
        await waitFor(() => expect(mocks.create).toHaveBeenCalledTimes(1));
    });
});
