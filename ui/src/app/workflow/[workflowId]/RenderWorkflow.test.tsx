import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { ComponentProps, PropsWithChildren } from "react";
import { toast } from "sonner";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { WorkflowVersionResponse } from "@/client/types.gen";

import type { VersionHistoryPanel } from "./components/VersionHistoryPanel";
import type { WorkflowEditorHeader } from "./components/WorkflowEditorHeader";
import type { WorkflowTesterPanel } from "./components/WorkflowTesterPanel";
import RenderWorkflow from "./RenderWorkflow";
import { useWorkflowStore } from "./stores/workflowStore";

const mocks = vi.hoisted(() => ({
    createDraft: vi.fn(), getVersions: vi.fn(), setNodes: vi.fn(), setEdges: vi.fn(), setIsDirty: vi.fn(),
    retryResources: vi.fn(), resourcesLoading: false, resourceErrors: [] as string[],
}));
vi.mock("@/client", () => ({
    createWorkflowDraftApiV1WorkflowWorkflowIdCreateDraftPost: mocks.createDraft,
    getWorkflowVersionsApiV1WorkflowWorkflowIdVersionsGet: mocks.getVersions,
}));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("sonner", () => ({ toast: { error: vi.fn(), success: vi.fn() } }));
vi.mock("@xyflow/react/dist/style.css", () => ({}));
vi.mock("@xyflow/react", () => ({
    ReactFlow: ({ children, nodesDraggable }: PropsWithChildren<{ nodesDraggable: boolean }>) => <div data-testid="canvas" data-editable={nodesDraggable}>{children}</div>,
    Panel: ({ children }: PropsWithChildren) => <div>{children}</div>,
    Background: () => null,
    BackgroundVariant: { Dots: "dots" },
}));
vi.mock("@/components/flow/renderer", () => ({ useNodeSpecs: () => ({ specs: [] }) }));
vi.mock("@/context/OnboardingContext", () => ({ useOnboarding: () => ({ hasCompletedAction: () => true }) }));
vi.mock("@/components/lead-forms/HireExpertNudge", () => ({ HireExpertNudge: () => null }));
vi.mock("@/components/flow/AddNodePanel", () => ({ default: () => null }));
vi.mock("@/components/flow/edges/CustomEdge", () => ({ default: () => null }));
vi.mock("@/components/flow/nodes/GenericNode", () => ({ GenericNode: () => null }));
vi.mock("./components/PhoneCallDialog", () => ({ PhoneCallDialog: () => null }));
vi.mock("./components/WorkflowLayoutController", () => ({ WorkflowLayoutController: () => null }));
vi.mock("./components/WorkflowVersionDiffDialog", () => ({ WorkflowVersionDiffDialog: () => null }));
vi.mock("./components/WorkflowTesterPanel", () => ({
    WorkflowTesterPanel: ({ isVisible }: ComponentProps<typeof WorkflowTesterPanel>) => <div data-testid="tester" data-visible={isVisible} />,
}));
vi.mock("./components/WorkflowEditorHeader", () => ({
    WorkflowEditorHeader: ({ onHistoryClick, onBackToDraft, activeVersionLabel, hasDraft, onTestAgentClick }: ComponentProps<typeof WorkflowEditorHeader>) => <header>
        <span data-testid="version">{activeVersionLabel}</span>
        <span data-testid="has-draft">{String(hasDraft)}</span>
        <button onClick={onHistoryClick}>History</button>
        <button onClick={onBackToDraft}>Back to Draft</button>
        <button onClick={onTestAgentClick}>Test agent</button>
    </header>,
}));
vi.mock("./components/VersionHistoryPanel", () => ({
    VersionHistoryPanel: ({ versions, isOpen, onSelectVersion, onLoadMore, onCompareVersion }: ComponentProps<typeof VersionHistoryPanel>) => isOpen ? <div>
        {versions.map(version => <div key={version.id}>
            <button onClick={() => onSelectVersion(version)}>Select v{version.version_number}</button>
            <button onClick={() => onCompareVersion(version)}>Compare v{version.version_number}</button>
        </div>)}
        <button onClick={onLoadMore}>Load more</button>
    </div> : null,
}));
vi.mock("./hooks/useWorkflowResources", () => ({ useWorkflowResources: () => ({
    documents: [], tools: [], recordings: [], setTools: vi.fn(),
    loading: mocks.resourcesLoading, errors: mocks.resourceErrors, retry: mocks.retryResources,
}) }));
vi.mock("./hooks/useWorkflowState", () => ({ useWorkflowState: () => ({
    rfInstance: { current: null }, nodes: [], edges: [], workflowName: "Agent", isDirty: false,
    workflowValidationErrors: [], templateContextVariables: {}, setNodes: mocks.setNodes,
    setEdges: mocks.setEdges, setIsDirty: mocks.setIsDirty, setIsAddNodePanelOpen: vi.fn(),
    handleNodeSelect: vi.fn(), saveWorkflow: vi.fn(), saveWorkflowConfigurations: vi.fn(),
    onConnect: vi.fn(), onEdgesChange: vi.fn(), onNodesChange: vi.fn(), onDelete: vi.fn(),
}) }));

const archived: WorkflowVersionResponse = {
    id: 1, version_number: 1, status: "archived", created_at: "2026-09-01T00:00:00Z",
    workflow_json: { nodes: [{ id: "old-start" }], edges: [] },
};
const published: WorkflowVersionResponse = { ...archived, id: 2, version_number: 2, status: "published" };
const draft: WorkflowVersionResponse = {
    ...published, id: 3, version_number: 3, status: "draft",
    workflow_json: { nodes: [{ id: "draft-start" }], edges: [{ id: "draft-edge" }] },
};
function setup() {
    return render(<RenderWorkflow initialWorkflowName="Agent" workflowId={7} initialVersionNumber={2} initialVersionStatus="published" user={{ id: "user" }} />);
}
async function viewHistory() {
    setup();
    fireEvent.click(screen.getByRole("button", { name: "History" }));
    fireEvent.click(await screen.findByRole("button", { name: "Select v1" }));
    expect(screen.getByTestId("version").textContent).toBe("v1");
    expect(screen.getByTestId("canvas").getAttribute("data-editable")).toBe("false");
    mocks.setNodes.mockClear(); mocks.setEdges.mockClear(); mocks.setIsDirty.mockClear();
}

describe("returning from historical workflow versions", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        useWorkflowStore.getState().clearStore();
        mocks.resourcesLoading = false; mocks.resourceErrors = [];
        mocks.getVersions.mockResolvedValue({ data: [published, archived] });
    });

    it("keeps the graph and version unchanged when draft creation resolves an HTTP error", async () => {
        mocks.createDraft.mockResolvedValue({ error: { detail: [{ msg: "Published version unavailable" }] } });
        await viewHistory();
        fireEvent.click(screen.getByRole("button", { name: "Back to Draft" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Published version unavailable"));
        expect(mocks.setNodes).not.toHaveBeenCalled(); expect(mocks.setEdges).not.toHaveBeenCalled();
        expect(mocks.setIsDirty).not.toHaveBeenCalled();
        expect(useWorkflowStore.getState().nodes).toEqual(archived.workflow_json.nodes);
        expect(screen.getByTestId("version").textContent).toBe("v1");
        expect(screen.getByTestId("has-draft").textContent).toBe("false");
        expect(screen.getByTestId("canvas").getAttribute("data-editable")).toBe("false");
        expect(mocks.getVersions).toHaveBeenCalledOnce();
    });

    it.each([undefined, 0, -1, 1.5, "3"])("does not apply a draft with invalid ID %s", async id => {
        mocks.createDraft.mockResolvedValue({ data: { ...draft, id } });
        await viewHistory();
        fireEvent.click(screen.getByRole("button", { name: "Back to Draft" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("The server did not return a draft. Please try again."));
        expect(mocks.setNodes).not.toHaveBeenCalled(); expect(mocks.setEdges).not.toHaveBeenCalled();
        expect(useWorkflowStore.getState().nodes).toEqual(archived.workflow_json.nodes);
        expect(screen.getByTestId("version").textContent).toBe("v1");
    });

    it("loads the confirmed draft through application state and refreshes version history", async () => {
        await viewHistory();
        mocks.createDraft.mockResolvedValue({ data: draft });
        mocks.getVersions.mockResolvedValue({ data: [draft, published, archived] });
        fireEvent.click(screen.getByRole("button", { name: "Back to Draft" }));
        await waitFor(() => expect(screen.getByTestId("version").textContent).toBe("v3 (Draft)"));
        expect(mocks.createDraft).toHaveBeenCalledWith({ path: { workflow_id: 7 } });
        expect(useWorkflowStore.getState().nodes).toEqual(draft.workflow_json.nodes);
        expect(useWorkflowStore.getState().edges).toEqual(draft.workflow_json.edges);
        expect(useWorkflowStore.getState().isDirty).toBe(false);
        expect(screen.getByTestId("canvas").getAttribute("data-editable")).toBe("true");
    });

    it("locks repeated draft requests and recovers after a rejected request", async () => {
        let fail!: (reason: Error) => void;
        mocks.createDraft.mockReturnValueOnce(new Promise((_, reject) => { fail = reject; }));
        await viewHistory();
        const button = screen.getByRole("button", { name: "Back to Draft" });
        fireEvent.click(button); fireEvent.click(button);
        expect(mocks.createDraft).toHaveBeenCalledOnce();
        await act(async () => fail(new Error("Network unavailable")));
        expect(toast.error).toHaveBeenCalledWith("Network unavailable");
        mocks.createDraft.mockResolvedValue({ data: draft });
        mocks.getVersions.mockResolvedValue({ data: [draft, published, archived] });
        fireEvent.click(button);
        await waitFor(() => expect(screen.getByTestId("version").textContent).toBe("v3 (Draft)"));
        expect(mocks.createDraft).toHaveBeenCalledTimes(2);
    });

    it("restores an existing draft without another mutation", async () => {
        mocks.getVersions.mockResolvedValue({ data: [draft, published, archived] });
        await viewHistory();
        fireEvent.click(screen.getByRole("button", { name: "Back to Draft" }));
        expect(mocks.createDraft).not.toHaveBeenCalled();
        expect(useWorkflowStore.getState().nodes).toEqual(draft.workflow_json.nodes);
        expect(screen.getByTestId("version").textContent).toBe("v3 (Draft)");
    });

    it("preserves the oldest selected graph, label, and read-only state when a comparison refresh drops it from the first page", async () => {
        const history = Array.from({ length: 12 }, (_, index) => ({
            ...archived, id: 12 - index, version_number: 12 - index,
            status: index === 0 ? "draft" : "archived",
        }));
        mocks.getVersions
            .mockResolvedValueOnce({ data: history.slice(0, 11) })
            .mockResolvedValueOnce({ data: history.slice(10) })
            .mockResolvedValueOnce({ data: [history[9], history[10]] })
            .mockResolvedValueOnce({ data: history.slice(0, 11) });
        setup();
        fireEvent.click(screen.getByRole("button", { name: "History" }));
        await screen.findByRole("button", { name: "Select v12" });
        fireEvent.click(screen.getByRole("button", { name: "Load more" }));
        fireEvent.click(await screen.findByRole("button", { name: "Select v1" }));
        const graph = useWorkflowStore.getState().nodes;
        fireEvent.click(screen.getByRole("button", { name: "History" }));
        fireEvent.click(screen.getByRole("button", { name: "Compare v2" }));
        await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Version history changed. Please try the comparison again."));
        expect(screen.queryByRole("button", { name: "Select v1" })).toBeNull();
        expect(screen.getByTestId("canvas").getAttribute("data-editable")).toBe("false");
        expect(screen.getByTestId("version").textContent).toBe("v1");
        expect(useWorkflowStore.getState().nodes).toBe(graph);
    });

    it("defaults an unrecognized selected version to read-only", async () => {
        mocks.getVersions.mockResolvedValue({ data: [published, { ...archived, status: "unknown" }] });
        await viewHistory();
    });

    it("resets undo and redo when switching graphs so draft undo cannot restore history", async () => {
        mocks.getVersions.mockResolvedValue({ data: [draft, published, archived] });
        await viewHistory();
        act(() => useWorkflowStore.getState().setWorkflowName("Historical mutation"));
        expect(useWorkflowStore.getState().canUndo()).toBe(true);
        fireEvent.click(screen.getByRole("button", { name: "Back to Draft" }));
        const state = useWorkflowStore.getState();
        expect(state.history).toHaveLength(1);
        expect(state.canUndo()).toBe(false);
        expect(state.canRedo()).toBe(false);
        act(() => { state.undo(); state.redo(); });
        expect(useWorkflowStore.getState().nodes).toEqual(draft.workflow_json.nodes);
        act(() => useWorkflowStore.getState().setWorkflowName("Draft edit"));
        act(() => useWorkflowStore.getState().undo());
        expect(useWorkflowStore.getState().nodes).toEqual(draft.workflow_json.nodes);
        expect(useWorkflowStore.getState().edges).toEqual(draft.workflow_json.edges);
    });

    it("distinguishes initial resource loading from an actionable local error", () => {
        mocks.resourcesLoading = true;
        const loading = setup();
        expect(screen.getByRole("status").textContent).toContain("Loading workflow resources");
        expect(screen.queryByRole("alert")).toBeNull();
        loading.unmount();
        mocks.resourcesLoading = false; mocks.resourceErrors = ["Tools are unavailable."];
        setup();
        expect(screen.getByRole("alert").textContent).toContain("Tools are unavailable.");
        fireEvent.click(screen.getByRole("button", { name: "Retry" }));
        expect(mocks.retryResources).toHaveBeenCalledOnce();
    });

    it("opens the tester sheet below the desktop breakpoint", () => {
        Object.defineProperty(window, "innerWidth", { configurable: true, value: 375 });
        setup();
        fireEvent.click(screen.getByRole("button", { name: "Test agent" }));
        expect(screen.getByRole("dialog")).toBeTruthy();
        expect(screen.getAllByTestId("tester").some(tester => tester.getAttribute("data-visible") === "true")).toBe(true);
    });
});
