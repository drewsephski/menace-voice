import { describe, expect, it } from "vitest";

import { detailFromError } from "./apiError";

describe("detailFromError", () => {
    it("extracts workflow publication validation errors", () => {
        expect(detailFromError({ detail: {
            is_valid: false,
            errors: [
                { kind: "node", id: "start", field: "prompt", message: "Add a prompt to Start Call" },
                { kind: "edge", id: "edge-1", field: "target", message: "Connect the destination node" },
            ],
        } })).toBe("Add a prompt to Start Call\nConnect the destination node");
    });

    it.each([
        ["Unavailable", "Unavailable"],
        [{ detail: "Permission denied" }, "Permission denied"],
        [{ detail: [{ msg: "Field required", loc: ["body", "name"] }] }, "Field required"],
        [{ detail: [{ model: "Voice", message: "API key required" }] }, "Voice: API key required"],
        [{ detail: ["Invalid graph", null, { msg: "Start node required" }] }, "Invalid graph\nStart node required"],
    ])("preserves existing error formats for %j", (error, expected) => {
        expect(detailFromError(error)).toBe(expected);
    });

    it.each([
        undefined, null, {}, { detail: [] },
        { detail: { errors: [] } },
        { detail: { errors: "not an array" } },
        { detail: { errors: [null, 12, {}, { message: {} }] } },
    ])("falls back for an unusable error shape %j", error => {
        expect(detailFromError(error, "Try again")).toBe("Try again");
    });
});
