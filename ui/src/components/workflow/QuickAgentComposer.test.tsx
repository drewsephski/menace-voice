import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { QuickAgentComposer } from "./QuickAgentComposer";

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

const BRIEF = "A friendly HVAC receptionist who collects callback details.";

beforeEach(() => {
  vi.clearAllMocks();
  mocks.auth = { user: { id: "test-user" }, loading: false };
  mocks.configuration.mockResolvedValue({
    data: { configuration: { mode: "dograh", dograh: { voice: "ember", language: "en-US" } } },
  });
  mocks.create.mockResolvedValue({ data: { id: 42 } });
});

function fillBrief(brief = BRIEF) {
  fireEvent.change(screen.getByLabelText("Describe your agent"), { target: { value: brief } });
}

function submitComposer() {
  fireEvent.click(screen.getByRole("button", { name: "Create agent" }));
}

describe("QuickAgentComposer setup recovery", () => {
  it("shows model configuration action without creating when workspace voice is missing", async () => {
    mocks.configuration.mockResolvedValueOnce({ data: { configuration: null } });
    render(<QuickAgentComposer />);
    fillBrief();
    fireEvent.click(screen.getByRole("radio", { name: "outbound" }));
    submitComposer();

    const alert = await screen.findByRole("alert");
    expect(alert.textContent).toContain("Connect a voice provider in model settings");
    const configLink = screen.getByRole("link", { name: "Configure voice in new tab" });
    expect(configLink.getAttribute("href")).toBe("/model-configurations");
    expect(configLink.getAttribute("target")).toBe("_blank");
    expect(mocks.create).not.toHaveBeenCalled();
    expect((screen.getByLabelText("Describe your agent") as HTMLTextAreaElement).value).toBe(BRIEF);
    expect((screen.getByRole("radio", { name: "outbound" }) as HTMLInputElement).checked).toBe(true);
  });

  it("distinguishes API failures from missing configuration and allows retry", async () => {
    mocks.configuration.mockResolvedValueOnce({ error: { detail: "Voice service unavailable" } });
    render(<QuickAgentComposer />);
    fillBrief();
    submitComposer();

    const apiAlert = await screen.findByRole("alert");
    expect(apiAlert.textContent).toBe("Voice service unavailable");
    expect(screen.queryByRole("link", { name: "Configure voice in new tab" })).toBeNull();
    expect(mocks.create).not.toHaveBeenCalled();

    submitComposer();
    await waitFor(() => expect(mocks.push).toHaveBeenCalledWith("/workflow/42?onboarding=web_call"));
    expect((screen.getByLabelText("Describe your agent") as HTMLTextAreaElement).value).toBe(BRIEF);
  });

  it("preserves the brief and call direction after configuring voice, then creates on retry", async () => {
    mocks.configuration
      .mockResolvedValueOnce({ data: { configuration: { mode: "byok", byok: { mode: "pipeline", pipeline: { tts: { provider: "cartesia" } } } } } })
      .mockResolvedValueOnce({ data: { configuration: { mode: "dograh", dograh: { voice: "ember", language: "en-US" } } } });
    render(<QuickAgentComposer />);
    fillBrief();
    fireEvent.click(screen.getByRole("radio", { name: "outbound" }));
    submitComposer();

    await screen.findByRole("link", { name: "Configure voice in new tab" });
    expect(mocks.create).not.toHaveBeenCalled();

    submitComposer();
    await waitFor(() => expect(mocks.push).toHaveBeenCalledWith("/workflow/42?onboarding=web_call"));
    expect(mocks.create).toHaveBeenCalledOnce();
    expect(mocks.create.mock.calls[0][0].body.call_type).toBe("outbound");
    expect(mocks.create.mock.calls[0][0].body.onboarding_context.agent_brief).toBe(BRIEF);
    expect((screen.getByLabelText("Describe your agent") as HTMLTextAreaElement).value).toBe(BRIEF);
    expect((screen.getByRole("radio", { name: "outbound" }) as HTMLInputElement).checked).toBe(true);
  });

  it("blocks repeated submits while creation is pending", async () => {
    mocks.create.mockReturnValue(new Promise(() => {}));
    render(<QuickAgentComposer />);
    fillBrief();
    const form = screen.getByRole("form", { name: "Quick agent setup" });
    act(() => {
      fireEvent.submit(form);
      fireEvent.submit(form);
    });
    await waitFor(() => expect(mocks.create).toHaveBeenCalledTimes(1));
    expect((screen.getByLabelText("Describe your agent") as HTMLTextAreaElement).disabled).toBe(true);
  });

  it("blocks repeated submits after successful create while navigation is pending", async () => {
    render(<QuickAgentComposer />);
    fillBrief();
    const form = screen.getByRole("form", { name: "Quick agent setup" });
    fireEvent.submit(form);
    await waitFor(() => expect(mocks.push).toHaveBeenCalledWith("/workflow/42?onboarding=web_call"));
    expect(mocks.create).toHaveBeenCalledTimes(1);

    fireEvent.submit(form);
    expect(mocks.create).toHaveBeenCalledTimes(1);
    expect((screen.getByLabelText("Describe your agent") as HTMLTextAreaElement).disabled).toBe(true);
    expect((screen.getByRole("button", { name: "Creating…" }) as HTMLButtonElement).disabled).toBe(true);
  });
});
