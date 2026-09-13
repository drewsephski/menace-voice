import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { TelemetrySection } from "./TelemetrySection";

const { remove, success, error } = vi.hoisted(() => ({ remove: vi.fn(), success: vi.fn(), error: vi.fn() }));
vi.mock("@/lib/auth", () => ({ useAuth: () => ({ user: { id: "test-user" }, loading: false }) }));
vi.mock("sonner", () => ({ toast: { success, error } }));
vi.mock("@/client/sdk.gen", () => ({
    getLangfuseCredentialsApiV1OrganizationsLangfuseCredentialsGet: vi.fn().mockResolvedValue({
        data: { configured: true, host: "https://telemetry.test", public_key: "test-public", secret_key: "masked", project_id: "test-project" },
    }),
    saveLangfuseCredentialsApiV1OrganizationsLangfuseCredentialsPost: vi.fn(),
    deleteLangfuseCredentialsApiV1OrganizationsLangfuseCredentialsDelete: remove,
}));

describe("telemetry deletion", () => {
    it("preserves credentials and dialog after HTTP failure and supports retry", async () => {
        remove.mockResolvedValueOnce({ error: { detail: "Removal unavailable" } }).mockResolvedValueOnce({ data: undefined });
        render(<TelemetrySection />);
        fireEvent.click(await screen.findByRole("button", { name: "Remove" }));
        fireEvent.click(screen.getByRole("button", { name: "Remove credentials" }));
        await waitFor(() => expect(error).toHaveBeenCalledWith("Removal unavailable"));
        expect(success).not.toHaveBeenCalled();
        expect(screen.getByDisplayValue("https://telemetry.test")).toBeTruthy();
        fireEvent.click(screen.getByRole("button", { name: "Remove credentials" }));
        await waitFor(() => expect(success).toHaveBeenCalledWith("Telemetry credentials removed"));
        expect(screen.queryByDisplayValue("https://telemetry.test")).toBeNull();
        expect(screen.queryByRole("button", { name: "Remove credentials" })).toBeNull();
    });
});
