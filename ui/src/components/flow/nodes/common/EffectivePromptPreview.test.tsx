import { render, screen, within } from "@testing-library/react";
import { type Node, useNodes } from "@xyflow/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { EffectivePromptPreview } from "./EffectivePromptPreview";

vi.mock("@xyflow/react", () => ({ useNodes: vi.fn() }));

const globalNode: Node = {
    id: "global",
    type: "globalNode",
    position: { x: 0, y: 0 },
    data: { prompt: "You are Maya. Speak Spanish. Call {{ customer.name }}." },
};

describe("effective prompt preview", () => {
    beforeEach(() => {
        vi.mocked(useNodes).mockReturnValue([globalNode]);
    });

    it("shows inherited instructions before the local task and identifies unresolved variables", () => {
        render(<EffectivePromptPreview values={{ prompt: "Check the calendar.", add_global_prompt: true }} />);
        const inherited = screen.getByRole("region", { name: "Inherited global instructions", hidden: true });
        const local = screen.getByRole("region", { name: "Local node instructions", hidden: true });
        expect(within(inherited).getByText(globalNode.data.prompt as string)).toBeTruthy();
        expect(within(local).getByText("Check the calendar.")).toBeTruthy();
        expect(inherited.compareDocumentPosition(local) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        expect(screen.getByText(/These placeholders are left unresolved/).textContent).toContain("{{ customer.name }}");
    });

    it("excludes global instructions and their variables when inheritance is disabled", () => {
        render(<EffectivePromptPreview values={{ prompt: "A local task.", add_global_prompt: false }} />);
        expect(screen.getByText("Global inheritance is off for this node.")).toBeTruthy();
        expect(screen.queryByText(globalNode.data.prompt as string)).toBeNull();
        expect(screen.queryByText("Template variables")).toBeNull();
    });

    it("reports a missing global node instead of implying shared instructions exist", () => {
        vi.mocked(useNodes).mockReturnValue([]);
        render(<EffectivePromptPreview values={{ prompt: "A local task." }} />);
        expect(screen.getByText(/this workflow has no Global node/)).toBeTruthy();
    });

    it("reflects unsaved prompt, resource, and inheritance changes", () => {
        const { rerender } = render(<EffectivePromptPreview values={{ prompt: "Old task." }} />);
        rerender(<EffectivePromptPreview values={{
            prompt: "Confirm {{ appointment.time }}.",
            add_global_prompt: false,
            tool_uuids: ["calendar"],
            document_uuids: ["hours", "services"],
        }} />);
        expect(screen.queryByText("Old task.")).toBeNull();
        expect(screen.getByText("Confirm {{ appointment.time }}.")).toBeTruthy();
        expect(screen.queryByText(globalNode.data.prompt as string)).toBeNull();
        expect(screen.getByText(/This node has 1 selected tool connection and 2 attached documents/)).toBeTruthy();
        expect(screen.getByText(/not an exact live call prompt/)).toBeTruthy();
    });
});
