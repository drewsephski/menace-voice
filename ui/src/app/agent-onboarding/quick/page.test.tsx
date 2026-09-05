import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import OverviewPage from "../../overview/page";
import QuickAgentSetupPage from "./page";

const mocks = vi.hoisted(() => ({
  push: vi.fn(),
  getAccessToken: vi.fn().mockResolvedValue("test-token"),
  redirectToLogin: vi.fn(),
  auth: { user: { id: "test-user" } as { id: string } | null, loading: false },
  configuration: vi.fn(),
  create: vi.fn(),
}));

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: mocks.push }) }));
vi.mock("@/lib/auth", () => ({
  useAuth: () => ({ ...mocks.auth, getAccessToken: mocks.getAccessToken, redirectToLogin: mocks.redirectToLogin }),
}));
vi.mock("@/client/sdk.gen", () => ({
  getModelConfigurationV2ApiV1OrganizationsModelConfigurationsV2Get: mocks.configuration,
  createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost: mocks.create,
}));

beforeEach(() => {
  vi.clearAllMocks();
  mocks.auth = { user: { id: "test-user" }, loading: false };
  mocks.configuration.mockResolvedValue({ data: { configuration: { mode: "dograh", dograh: { voice: "ember", language: "en-US" } } } });
  mocks.create.mockResolvedValue({ data: { id: 42 } });
});

const fillBrief = () => fireEvent.change(screen.getByLabelText("Describe your agent"), {
  target: { value: "  A friendly HVAC receptionist who collects callback details.  " },
});

describe("Quick agent setup", () => {
  it("creates from the overview chatbox while retaining the existing overview sections", async () => {
    render(<OverviewPage />);
    expect(screen.getByText("What would you like your voice agent to do?")).toBeTruthy();
    expect(screen.getByText("Configure Services")).toBeTruthy();
    expect(screen.getByText("Resources")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Start guided setup" })).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Qualify leads" }));
    expect(document.activeElement).toBe(screen.getByLabelText("Describe your agent"));
    fireEvent.click(screen.getByRole("button", { name: "Create agent" }));
    await waitFor(() => expect(mocks.push).toHaveBeenCalledWith("/workflow/42?onboarding=web_call"));
    expect(mocks.create.mock.calls[0][0].body.call_type).toBe("outbound");
  });

  it("creates directly with the brief, workspace voice, and enforced three-stage context", async () => {
    render(<QuickAgentSetupPage />);
    expect((screen.getByRole("button", { name: "Create agent" }) as HTMLButtonElement).disabled).toBe(true);
    fillBrief();
    fireEvent.click(screen.getByRole("radio", { name: "outbound" }));
    fireEvent.click(screen.getByRole("button", { name: "Create agent" }));

    await waitFor(() => expect(mocks.push).toHaveBeenCalledWith("/workflow/42?onboarding=web_call"));
    const request = mocks.create.mock.calls[0][0];
    expect(request.headers.Authorization).toBe("Bearer test-token");
    expect(request.body.call_type).toBe("outbound");
    expect(request.body.name).toBeUndefined();
    expect(request.body.workflow_configurations).toBeUndefined();
    expect(request.body.onboarding_context.agent_brief).toBe("A friendly HVAC receptionist who collects callback details.");
    expect(request.body.onboarding_context.voice_name).toBe("ember");
    expect(request.body.onboarding_context.workflow_stages).toHaveLength(3);
    expect(request.body.activity_description).toContain("exactly one Global node");
    expect(request.body.activity_description).toContain("exactly three Agent nodes");
  });

  it("blocks repeated submits while generation is pending", async () => {
    mocks.create.mockReturnValue(new Promise(() => {}));
    render(<QuickAgentSetupPage />);
    fillBrief();
    const form = screen.getByRole("form", { name: "Quick agent setup" });
    fireEvent.submit(form);
    fireEvent.submit(form);
    await waitFor(() => expect(mocks.create).toHaveBeenCalledTimes(1));
    expect((screen.getByLabelText("Describe your agent") as HTMLTextAreaElement).disabled).toBe(true);
  });

  it("preserves the description and supports retry after an API validation error", async () => {
    mocks.create.mockResolvedValueOnce({ error: { detail: [{ msg: "Generation is unavailable" }] } });
    render(<QuickAgentSetupPage />);
    fillBrief();
    fireEvent.click(screen.getByRole("button", { name: "Create agent" }));
    expect((await screen.findByRole("alert")).textContent).toContain("Generation is unavailable");
    expect((screen.getByLabelText("Describe your agent") as HTMLTextAreaElement).value).toContain("HVAC receptionist");
    expect(mocks.push).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Create agent" }));
    await waitFor(() => expect(mocks.push).toHaveBeenCalledTimes(1));
  });

  it("does not create when workspace voice loading fails", async () => {
    mocks.configuration.mockResolvedValueOnce({ error: { detail: "Voice service unavailable" } });
    render(<QuickAgentSetupPage />);
    fillBrief();
    fireEvent.click(screen.getByRole("button", { name: "Create agent" }));
    expect((await screen.findByRole("alert")).textContent).toBe("Voice service unavailable");
    expect(mocks.create).not.toHaveBeenCalled();
  });

  it("waits for authentication before allowing requests", () => {
    mocks.auth = { user: null, loading: true };
    const { rerender } = render(<QuickAgentSetupPage />);
    expect(screen.queryByRole("form")).toBeNull();
    expect(mocks.configuration).not.toHaveBeenCalled();
    expect(mocks.redirectToLogin).not.toHaveBeenCalled();
    mocks.auth.loading = false;
    rerender(<QuickAgentSetupPage />);
    expect(mocks.redirectToLogin).toHaveBeenCalledOnce();
  });

  it("supports the keyboard shortcut and keeps plain Enter for new lines", async () => {
    render(<QuickAgentSetupPage />);
    fillBrief();
    const textarea = screen.getByLabelText("Describe your agent");
    fireEvent.keyDown(textarea, { key: "Enter" });
    expect(mocks.create).not.toHaveBeenCalled();
    fireEvent.keyDown(textarea, { key: "Enter", ctrlKey: true });
    await waitFor(() => expect(mocks.create).toHaveBeenCalledOnce());
  });
});
