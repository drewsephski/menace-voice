import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { OnboardingSetup } from '@/client/types.gen';
import { resolveWorkflowConfigurations } from '@/types/workflow-configurations';

import { useWorkflowStore } from '../stores/workflowStore';
import { AgentBriefEditor } from './AgentBriefEditor';

const api = vi.hoisted(() => ({ get: vi.fn(), preview: vi.fn(), update: vi.fn() }));
vi.mock('@/client', () => ({
    getAgentSetupApiV1WorkflowWorkflowIdAgentSetupGet: api.get,
    previewAgentApiV1WorkflowWorkflowIdAgentPreviewPost: api.preview,
    updateWorkflowApiV1WorkflowWorkflowIdPut: api.update,
}));

const setup: OnboardingSetup = {
    agent_name: 'Documentation helper',
    use_case: 'Technical documentation',
    agent_brief: 'Explain API authentication using the connected documentation.',
    tone: 'Patient',
    language: 'English',
    call_type: 'inbound',
    voice_provider: 'existing-provider',
    voice_name: 'existing-voice',
    workflow_stages: ['Identify question', 'Explain with sources'],
    behavior_notes: 'Never invent endpoints.',
};
const generated = {
    workflow_definition: { nodes: [{ id: 'docs', type: 'agentNode', data: { name: 'Explain API authentication', prompt: 'Use documentation to explain authentication.' } }], edges: [] },
    agent_setup: setup,
};

async function openEditor() {
    render(<AgentBriefEditor workflowId={4} />);
    fireEvent.click(screen.getByRole('button', { name: 'Agent brief' }));
    await screen.findByLabelText('What should this agent do?');
}

async function generatePreview() {
    fireEvent.click(screen.getByRole('button', { name: 'Generate preview' }));
    await screen.findByRole('region', { name: 'Generated draft preview' });
}

function deferred<T>() {
    let resolve!: (value: T) => void;
    const promise = new Promise<T>(done => { resolve = done; });
    return { promise, resolve };
}

describe('AgentBriefEditor', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        useWorkflowStore.getState().initializeWorkflow(4, 'Documentation helper', [], []);
        api.get.mockResolvedValue({ data: { setup, source: 'saved' } });
        api.preview.mockResolvedValue({ data: generated });
        api.update.mockResolvedValue({ data: { id: 4 } });
    });

    it('identifies a recovered legacy brief and keeps preview generation separate from saving', async () => {
        api.get.mockResolvedValue({ data: { setup, source: 'legacy' } });
        await openEditor();
        expect(screen.getByText(/recovered this brief from its Global instructions/)).toBeTruthy();
        fireEvent.change(screen.getByLabelText('What should this agent do?'), { target: { value: 'Explain SDK setup using technical documentation.' } });
        await generatePreview();
        expect(api.preview.mock.calls[0][0].body).toEqual({ ...setup, agent_brief: 'Explain SDK setup using technical documentation.', workflow_stages: [] });
        expect(screen.getByText('Use documentation to explain authentication.')).toBeTruthy();
        expect(api.update).not.toHaveBeenCalled();
        fireEvent.click(screen.getByRole('button', { name: 'Discard preview' }));
        expect(screen.queryByRole('region', { name: 'Generated draft preview' })).toBeNull();
        expect(api.update).not.toHaveBeenCalled();
    });

    it('invalidates a preview when the reviewed brief changes', async () => {
        await openEditor();
        await generatePreview();
        fireEvent.change(screen.getByLabelText('Tone'), { target: { value: 'Concise' } });
        expect(screen.queryByRole('button', { name: 'Apply draft' })).toBeNull();
        expect(screen.getByRole('button', { name: 'Generate preview' })).toBeTruthy();
    });

    it('blocks generation while there are unsaved canvas changes', async () => {
        useWorkflowStore.getState().setIsDirty(true);
        await openEditor();
        expect(screen.getByText('Save your canvas changes first, then generate a new preview.')).toBeTruthy();
        fireEvent.click(screen.getByRole('button', { name: 'Generate preview' }));
        expect(api.preview).not.toHaveBeenCalled();
    });

    it('applies the reviewed graph and setup while retaining current settings', async () => {
        useWorkflowStore.setState({ workflowConfigurations: { ...resolveWorkflowConfigurations(), custom_setting: 'retain' } });
        const reloadWarning = vi.spyOn(console, 'error').mockImplementation(() => undefined);
        await openEditor();
        await generatePreview();
        fireEvent.click(screen.getByRole('button', { name: 'Apply draft' }));
        await waitFor(() => expect(api.update).toHaveBeenCalledOnce());
        expect(api.update.mock.calls[0][0]).toEqual({ path: { workflow_id: 4 }, body: {
            name: setup.agent_name,
            workflow_definition: generated.workflow_definition,
            workflow_configurations: expect.objectContaining({ custom_setting: 'retain', agent_setup: setup }),
        } });
        reloadWarning.mockRestore();
    });

    it('rejects applying a preview after the saved graph changes', async () => {
        await openEditor();
        await generatePreview();
        act(() => useWorkflowStore.setState({ workflowName: 'Changed elsewhere', isDirty: false }));
        fireEvent.click(screen.getByRole('button', { name: 'Apply draft' }));
        expect(screen.getByRole('alert').textContent).toContain('canvas or settings changed');
        expect(api.update).not.toHaveBeenCalled();
    });

    it('shows server errors without applying or losing the editable brief', async () => {
        api.preview.mockResolvedValue({ error: { detail: 'This workflow has unsupported manual integrations.' } });
        await openEditor();
        fireEvent.click(screen.getByRole('button', { name: 'Generate preview' }));
        expect((await screen.findByRole('alert')).textContent).toContain('unsupported manual integrations');
        expect(screen.getByDisplayValue(setup.agent_brief)).toBeTruthy();
        expect(api.update).not.toHaveBeenCalled();
    });

    it('freezes inputs, ignores duplicate generation and discards a cancelled response', async () => {
        const pending = deferred<{ data: typeof generated }>();
        api.preview.mockReturnValue(pending.promise);
        await openEditor();
        fireEvent.click(screen.getByRole('button', { name: 'Generate preview' }));
        fireEvent.click(screen.getByRole('button', { name: 'Generating preview…' }));
        expect(api.preview).toHaveBeenCalledOnce();
        expect(screen.getByLabelText('Tone').closest('fieldset')?.disabled).toBe(true);
        fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
        expect(api.preview.mock.calls[0][0].signal.aborted).toBe(true);
        await act(async () => pending.resolve({ data: generated }));
        fireEvent.click(screen.getByRole('button', { name: 'Agent brief' }));
        await screen.findByLabelText('What should this agent do?');
        expect(screen.queryByRole('button', { name: 'Apply draft' })).toBeNull();
        expect(api.update).not.toHaveBeenCalled();
    });

    it('discards an in-flight result when navigating to a different workflow', async () => {
        const pending = deferred<{ data: typeof generated }>();
        api.preview.mockReturnValue(pending.promise);
        const view = render(<AgentBriefEditor workflowId={4} />);
        fireEvent.click(screen.getByRole('button', { name: 'Agent brief' }));
        await screen.findByLabelText('What should this agent do?');
        fireEvent.click(screen.getByRole('button', { name: 'Generate preview' }));
        view.rerender(<AgentBriefEditor workflowId={5} />);
        await act(async () => pending.resolve({ data: generated }));
        expect(screen.queryByRole('dialog')).toBeNull();
        expect(api.update).not.toHaveBeenCalled();
    });

    it('hides the editor for historical versions', () => {
        render(<AgentBriefEditor workflowId={4} readOnly />);
        expect(screen.queryByRole('button', { name: 'Agent brief' })).toBeNull();
        expect(api.get).not.toHaveBeenCalled();
    });
});
