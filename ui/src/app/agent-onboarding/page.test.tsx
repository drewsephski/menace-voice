import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import AgentOnboardingPage from "./page";

const mocks = vi.hoisted(() => ({
  user: { id: "test-user" },
  getAccessToken: vi.fn().mockResolvedValue("test-token"),
  create: vi.fn(),
}));
vi.mock("@/lib/auth", () => ({ useAuth: () => ({ user: mocks.user, loading: false, getAccessToken: mocks.getAccessToken }) }));
vi.mock("@/client/sdk.gen", () => ({
  createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost: mocks.create,
  listDocumentsApiV1KnowledgeBaseDocumentsGet: vi.fn().mockResolvedValue({ data: { documents: [] } }),
  listToolsApiV1ToolsGet: vi.fn().mockResolvedValue({ data: [] }),
  getModelConfigurationV2DefaultsApiV1OrganizationsModelConfigurationsV2DefaultsGet: vi.fn().mockResolvedValue({ data: { dograh: { allow_custom_input: false } } }),
  getModelConfigurationV2ApiV1OrganizationsModelConfigurationsV2Get: vi.fn().mockResolvedValue({ data: { configuration: { mode: "dograh", dograh: { voice: "ember", language: "en-US" } } } }),
}));
vi.mock("@/app/files/DocumentUpload", () => ({ default: () => null }));
vi.mock("@/components/AIModelConfigurationV2Editor", () => ({ AIModelConfigurationV2Editor: () => null }));
vi.mock("@/components/http/credential-selector", () => ({ CredentialSelector: () => null }));
vi.mock("@/components/VoiceSelectorModal", () => ({ VoiceSelectorModal: ({ onChange }: { onChange: (value: string) => void }) => <button onClick={() => onChange("ember")}>Choose test voice</button> }));

beforeEach(() => {
  vi.clearAllMocks();
  mocks.create.mockResolvedValue({ data: { id: 87 } });
});

async function reachReview() {
  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  fireEvent.click(screen.getByRole("button", { name: "Skip for now" }));
  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  fireEvent.click(await screen.findByRole("button", { name: "Choose test voice" }));
  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  fireEvent.click(screen.getByRole("button", { name: "Skip for now" }));
}

describe("guided agent brief provenance", () => {
  it("submits Technical documentation after selecting the booking template and shows the exact brief in review", async () => {
    render(<AgentOnboardingPage />);
    fireEvent.click(screen.getByRole("button", { name: /Appointment coordinator/ }));
    const bookingBrief = (screen.getByLabelText("Describe the job") as HTMLTextAreaElement).value;
    fireEvent.click(screen.getByRole("button", { name: /Technical documentation/ }));
    const technicalBrief = (screen.getByLabelText("Describe the job") as HTMLTextAreaElement).value;
    expect(technicalBrief).toContain("Help developers understand modern libraries");
    expect(technicalBrief).not.toBe(bookingBrief);
    await reachReview();
    expect(within(screen.getByRole("region", { name: "Job brief to create" })).getByText(technicalBrief)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Create agent" }));
    await waitFor(() => expect(mocks.create).toHaveBeenCalledOnce());
    const { body } = mocks.create.mock.calls[0][0];
    expect(body.template_id).toBe("technical-docs");
    expect(body.use_case).toBe("Technical documentation assistant");
    expect(body.onboarding_context.agent_brief).toBe(technicalBrief);
    expect(body.activity_description).not.toContain(bookingBrief);
    expect(body.onboarding_context.workflow_stages[0]).toContain("Clarify the library");
    expect((await screen.findByRole("link", { name: "Open and test agent" })).getAttribute("href")).toBe("/workflow/87?onboarding=web_call");
  });

  it("submits edited template text as Custom without stale booking hints and prevents duplicate requests", async () => {
    mocks.create.mockReturnValue(new Promise(() => {}));
    render(<AgentOnboardingPage />);
    fireEvent.click(screen.getByRole("button", { name: /Appointment coordinator/ }));
    const brief = "Explain TypeScript compiler errors using the connected documentation.";
    fireEvent.change(screen.getByLabelText("Describe the job"), { target: { value: brief } });
    await reachReview();
    const createButton = screen.getByRole("button", { name: "Create agent" });
    fireEvent.click(createButton);
    fireEvent.click(createButton);
    await waitFor(() => expect(mocks.create).toHaveBeenCalledOnce());
    const { body } = mocks.create.mock.calls[0][0];
    expect(body.template_id).toBeNull();
    expect(body.use_case).toBe("Custom voice agent");
    expect(body.onboarding_context.agent_brief).toBe(brief);
    expect(body.onboarding_context.workflow_stages).toHaveLength(3);
  });

  it("preserves typed text until a template replacement is explicitly chosen", () => {
    render(<AgentOnboardingPage />);
    const brief = "My specific technical documentation request.";
    fireEvent.change(screen.getByLabelText("Describe the job"), { target: { value: brief } });
    fireEvent.click(screen.getByRole("button", { name: /Technical documentation/ }));
    expect((screen.getByLabelText("Describe the job") as HTMLTextAreaElement).value).toBe(brief);
    fireEvent.click(screen.getByRole("button", { name: "Keep my brief" }));
    expect((screen.getByLabelText("Describe the job") as HTMLTextAreaElement).value).toBe(brief);
    fireEvent.click(screen.getByRole("button", { name: /Technical documentation/ }));
    fireEvent.click(screen.getByRole("button", { name: "Replace brief" }));
    expect((screen.getByLabelText("Describe the job") as HTMLTextAreaElement).value).toContain("Help developers understand modern libraries");
  });
});
