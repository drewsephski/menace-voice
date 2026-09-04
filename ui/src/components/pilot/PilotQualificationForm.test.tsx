import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import posthog from "posthog-js";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { PostHogEvent } from "@/constants/posthog-events";

import { PILOT_OFFER_TERMS, PILOT_SAFETY_LIMITATION } from "./PilotOffer";
import { PilotQualificationForm } from "./PilotQualificationForm";

const mocks = vi.hoisted(() => ({
  postLeadToService: vi.fn(),
}));

vi.mock("posthog-js", () => ({ default: { capture: vi.fn() } }));

vi.mock("@/components/lead-forms/CaptchaChallenge", () => ({
  CaptchaChallenge: ({ onVerified }: { onVerified: () => void }) => (
    <button type="button" onClick={onVerified}>Confirm & submit</button>
  ),
}));

vi.mock("@/components/lead-forms/onboardingServiceClient", () => ({
  postLeadToService: mocks.postLeadToService,
}));

vi.mock("@/components/lead-forms/PhoneField", () => ({
  PhoneField: ({ id, onChange, value }: { id: string; onChange: (value: string) => void; value: string }) => (
    <input id={id} onChange={(event) => onChange(event.target.value)} value={value} />
  ),
}));

function selectOption(label: string, option: string) {
  fireEvent.click(screen.getByRole("combobox", { name: label }));
  fireEvent.click(screen.getByRole("option", { name: option }));
}

function completeForm() {
  fireEvent.change(screen.getByLabelText("Company"), { target: { value: "Northside HVAC" } });
  fireEvent.change(screen.getByLabelText("Contact name"), { target: { value: "Jordan Lee" } });
  fireEvent.change(screen.getByLabelText("Work email"), { target: { value: "jordan@northside.example" } });
  fireEvent.change(screen.getByLabelText("Phone"), { target: { value: "+13125550142" } });
  fireEvent.change(screen.getByLabelText("Service area"), { target: { value: "Chicago suburbs" } });
  selectOption("Team size", "6–15 people");
  selectOption("After-hours handling", "Voicemail");
  selectOption("Approximate monthly call volume", "0–5k calls");
  selectOption("Current carrier", "Telnyx");
}

function requestSubmission() {
  fireEvent.click(within(screen.getByRole("form", { name: "Pilot qualification" })).getByRole("button", { name: "Request pilot qualification" }));
  fireEvent.click(screen.getByRole("button", { name: "Confirm & submit" }));
}

describe("PilotQualificationForm", () => {
  beforeEach(() => {
    mocks.postLeadToService.mockReset();
    vi.mocked(posthog.capture).mockClear();
  });

  it("retains qualification fields when the lead service times out and emits attempted but not submitted", async () => {
    mocks.postLeadToService.mockResolvedValue(null);
    render(<PilotQualificationForm />);

    completeForm();
    requestSubmission();

    await waitFor(() => expect(mocks.postLeadToService).toHaveBeenCalledOnce());
    expect((screen.getByLabelText("Company") as HTMLInputElement).value).toBe("Northside HVAC");
    expect(screen.getByText("We could not send your qualification.")).toBeTruthy();
    expect(posthog.capture).toHaveBeenCalledWith(PostHogEvent.PILOT_QUALIFICATION_SUBMISSION_ATTEMPTED, { source: "pilot" });
    expect(posthog.capture).not.toHaveBeenCalledWith(PostHogEvent.PILOT_QUALIFICATION_SUBMITTED, expect.anything());
  });

  it("uses the existing hire-expert endpoint contract and records submitted once only after { ok: true }", async () => {
    mocks.postLeadToService.mockResolvedValue({ ok: true });
    render(<PilotQualificationForm />);

    completeForm();
    requestSubmission();

    await waitFor(() => expect(screen.getByText("We received your qualification.")).toBeTruthy());
    expect(mocks.postLeadToService).toHaveBeenCalledWith("hire_expert", expect.objectContaining({
      source: "pilot",
      name: "Jordan Lee",
      company: "Northside HVAC",
      email: "jordan@northside.example",
      phone: "+13125550142",
      volume: "0-5k",
    }));
    expect(posthog.capture).toHaveBeenCalledTimes(4);
    expect(posthog.capture).toHaveBeenLastCalledWith(PostHogEvent.PILOT_QUALIFICATION_SUBMITTED, { source: "pilot" });
  });

  it("treats malformed lead-service responses as rejected and preserves the qualification", async () => {
    mocks.postLeadToService.mockResolvedValue({ ok: "yes" });
    render(<PilotQualificationForm />);

    completeForm();
    requestSubmission();

    await waitFor(() => expect(screen.getByText("We could not send your qualification.")).toBeTruthy());
    expect((screen.getByLabelText("Company") as HTMLInputElement).value).toBe("Northside HVAC");
    expect(posthog.capture).not.toHaveBeenCalledWith(PostHogEvent.PILOT_QUALIFICATION_SUBMITTED, expect.anything());
  });

  it("renders every exact offer term and safety limitation without prohibited promises", () => {
    render(<PilotQualificationForm />);

    for (const term of PILOT_OFFER_TERMS) expect(screen.getByText(term)).toBeTruthy();
    expect(screen.getByText(PILOT_SAFETY_LIMITATION)).toBeTruthy();
    expect(screen.queryByText(/guarantee a technician/i)).toBeNull();
    expect(screen.queryByText(/emergency response/i)).toBeNull();
  });
});
