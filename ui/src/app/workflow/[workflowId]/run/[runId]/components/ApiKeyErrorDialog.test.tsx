import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ApiKeyErrorDialog } from "./ApiKeyErrorDialog";

describe("ApiKeyErrorDialog", () => {
    it("offers an in-place retry for an inconclusive credit check", () => {
        const onRetry = vi.fn();

        render(
            <ApiKeyErrorDialog
                open
                onOpenChange={vi.fn()}
                error="Could not verify Menace Voice credits. Please try again."
                errorCode="quota_check_failed"
                onNavigateToBilling={vi.fn()}
                onNavigateToDevelopers={vi.fn()}
                onNavigateToModelConfig={vi.fn()}
                onRetry={onRetry}
            />
        );

        expect(screen.getByText("Call Service Temporarily Unavailable")).toBeTruthy();
        expect(screen.queryByRole("button", { name: "Go to Model Configurations" })).toBeNull();

        fireEvent.click(screen.getByRole("button", { name: "Try Again" }));
        expect(onRetry).toHaveBeenCalledOnce();
    });
});
