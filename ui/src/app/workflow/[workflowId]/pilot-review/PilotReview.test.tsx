import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { PilotRunReview } from "@/client/types.gen";

import { PilotReview } from "./PilotReview";

const { get, auth } = vi.hoisted(() => ({
    get: vi.fn(),
    auth: { isAuthenticated: true, user: { id: "reviewer" } },
}));

vi.mock("@/client/sdk.gen", () => ({ getPilotReviewApiV1WorkflowWorkflowIdPilotReviewGet: get }));
vi.mock("@/lib/auth", () => ({ useAuth: () => auth }));

function run(overrides: Partial<PilotRunReview> = {}): PilotRunReview {
    return {
        run_id: 8,
        workflow_id: 3,
        created_at: "2026-09-01T12:00:00Z",
        state: "completed",
        mode: "twilio",
        is_completed: true,
        disposition: "callback_requested",
        call_status: "transfer_call",
        error_recorded: false,
        transfer: "recorded_transfer",
        duration_seconds: 0,
        recorded_token_usage: 12,
        actual_cost: "not_recorded",
        webhooks: { queued: 1, accepted: 2, failed: 1, human_receipt: "not_recorded" },
        ...overrides,
    };
}

describe("PilotReview", () => {
    beforeEach(() => {
        get.mockReset();
        auth.isAuthenticated = true;
    });

    it("shows real evidence separately from receipt and actual cost, with run details link", async () => {
        get.mockResolvedValue({ data: { runs: [run()], next_before_id: null } });
        render(<PilotReview workflowId={3} />);
        expect((await screen.findByRole("link", { name: "Run #8" })).getAttribute("href")).toBe("/workflow/3/run/8");
        expect(screen.getByText("2 accepted · 1 queued · 1 failed")).toBeTruthy();
        expect(screen.getByText("Transfer recorded")).toBeTruthy();
        expect(screen.getByText("0 seconds")).toBeTruthy();
        expect(screen.getByText("twilio")).toBeTruthy();
        for (const label of ["Human receipt", "Actual cost"]) {
            const evidence = screen.getByText(label).parentElement!;
            expect(within(evidence).getByText("Not recorded")).toBeTruthy();
        }
        expect(screen.queryByText(/\$/)).toBeNull();
        expect(screen.getByText(/does not confirm downstream delivery or human receipt/)).toBeTruthy();
    });

    it("does not imply missing evidence is success and labels chat mode", async () => {
        get.mockResolvedValue({ data: { runs: [run({
            mode: "textchat", disposition: null, transfer: "not_recorded", call_status: null,
            duration_seconds: null, recorded_token_usage: null,
            webhooks: { queued: 0, accepted: 0, failed: 0, human_receipt: "not_recorded" },
        })], next_before_id: null } });
        render(<PilotReview workflowId={3} />);
        expect(await screen.findByText("No attempts recorded")).toBeTruthy();
        expect(screen.getByText("textchat")).toBeTruthy();
        expect(screen.queryByText("Transfer recorded")).toBeNull();
        expect(screen.queryByText("0 seconds")).toBeNull();
    });

    it("uses bounded cursor pagination and refreshes the newest page", async () => {
        get.mockResolvedValueOnce({ data: { runs: [run()], next_before_id: 8 } });
        get.mockResolvedValueOnce({ data: { runs: [run({ run_id: 7 })], next_before_id: null } });
        get.mockResolvedValue({ data: { runs: [run()], next_before_id: 8 } });
        render(<PilotReview workflowId={3} />);
        await screen.findByRole("link", { name: "Run #8" });
        fireEvent.click(screen.getByRole("button", { name: "Older runs" }));
        await screen.findByRole("link", { name: "Run #7" });
        expect(get.mock.calls[1][0].query).toEqual({ limit: 25, before_id: 8 });
        expect((screen.getByRole("button", { name: "Older runs" }) as HTMLButtonElement).disabled).toBe(true);
        fireEvent.click(screen.getByRole("button", { name: "Refresh" }));
        await screen.findByRole("link", { name: "Run #8" });
        expect(get.mock.calls[2][0].query).toEqual({ limit: 25 });
        expect(screen.getByText("Page 1")).toBeTruthy();
    });

    it("reports an error and supports retry without inventing data", async () => {
        get.mockResolvedValueOnce({ error: { detail: "unavailable" } });
        get.mockResolvedValueOnce({ data: { runs: [], next_before_id: null } });
        render(<PilotReview workflowId={3} />);
        expect(await screen.findByRole("alert")).toBeTruthy();
        expect(screen.queryByRole("link", { name: "Run #8" })).toBeNull();
        fireEvent.click(screen.getByRole("button", { name: "Try again" }));
        expect(await screen.findByText("No recorded runs on this page.")).toBeTruthy();
    });

    it("cancels old requests when the workflow changes so stale evidence cannot render", async () => {
        let resolveOld!: (value: unknown) => void;
        get.mockImplementationOnce(() => new Promise((resolve) => { resolveOld = resolve; }));
        get.mockResolvedValueOnce({ data: { runs: [run({ run_id: 10, workflow_id: 4 })], next_before_id: null } });
        const { rerender } = render(<PilotReview workflowId={3} />);
        rerender(<PilotReview workflowId={4} />);
        expect(get.mock.calls[0][0].signal.aborted).toBe(true);
        await screen.findByRole("link", { name: "Run #10" });
        resolveOld({ data: { runs: [run()], next_before_id: null } });
        await waitFor(() => expect(screen.queryByRole("link", { name: "Run #8" })).toBeNull());
    });

    it("does not request evidence before authentication", () => {
        auth.isAuthenticated = false;
        render(<PilotReview workflowId={3} />);
        expect(get).not.toHaveBeenCalled();
    });
});
