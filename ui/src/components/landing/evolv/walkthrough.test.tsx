import { act, fireEvent, render, screen, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Walkthrough } from "./walkthrough";

vi.mock("framer-motion", async (importOriginal) => ({
  ...await importOriginal<typeof import("framer-motion")>(),
  useInView: () => true,
}));

vi.mock("@xyflow/react", () => ({
  Background: () => null,
  Handle: () => null,
  Position: { Left: "left", Right: "right" },
  ReactFlow: () => null,
  useNodesState: (nodes: unknown[]) => [nodes, vi.fn(), vi.fn()],
}));

vi.mock("./walkthrough.module.css", () => ({ default: {} }));
vi.mock("./walkthrough-cursor.module.css", () => ({ default: {} }));
vi.mock("./walkthrough-demo.module.css", () => ({ default: {} }));
vi.mock("./walkthrough-template-demo.module.css", () => ({ default: {} }));
vi.mock("./primitives", () => ({
  SectionLabel: ({ children }: { children: ReactNode }) => children,
}));

let motion: EventTarget & { matches: boolean };

function advance(milliseconds: number) {
  act(() => vi.advanceTimersByTime(milliseconds));
}

function progress(tab: HTMLElement) {
  return Number(tab.style.getPropertyValue("--walkthrough-progress"));
}

beforeEach(() => {
  vi.useFakeTimers();
  motion = Object.assign(new EventTarget(), { matches: false, addListener: vi.fn(), removeListener: vi.fn() });
  vi.stubGlobal("matchMedia", vi.fn(() => motion));
  vi.spyOn(document, "hidden", "get").mockReturnValue(false);
});

describe("walkthrough interactions", () => {
  it("immediately streams the receptionist after returning from a paused demo", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Design the call flow/ }));
    fireEvent.focus(screen.getByRole("button", { name: "Step through" }));
    expect(screen.getByRole("button", { name: "Resume walkthrough" })).toBeTruthy();
    fireEvent.click(screen.getByRole("tab", { name: /Start with a template/ }));
    const stream = screen.getByLabelText("Receptionist agent draft").querySelector("p [aria-hidden]");
    advance(150);
    expect(stream?.textContent).toContain("Hi");
    advance(2000);
    expect(stream?.textContent).toBe("“Hi, thanks for calling. How can I help you today?”");
    expect(screen.getByRole("button", { name: "Resume walkthrough" })).toBeTruthy();
  });

  it("streams the selected greeting and restarts cleanly when another template is clicked", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("button", { name: /Support desk/ }));
    const draft = screen.getByLabelText("Support desk agent draft");
    const stream = draft.querySelector("p [aria-hidden]");
    expect(stream?.textContent).toBe("");
    advance(500);
    expect(stream?.textContent).toContain("Hi, you’re");
    expect(stream?.textContent).not.toContain("What can I help");
    fireEvent.click(screen.getByRole("button", { name: /ReceptionistWelcome/ }));
    const nextStream = screen.getByLabelText("Receptionist agent draft").querySelector("p [aria-hidden]");
    expect(nextStream?.textContent).toBe("");
    advance(2500);
    expect(nextStream?.textContent).toBe("“Hi, thanks for calling. How can I help you today?”");
    fireEvent.click(screen.getByRole("button", { name: /ReceptionistWelcome/ }));
    expect(screen.getByLabelText("Receptionist agent draft").querySelector("p [aria-hidden]")?.textContent).toBe("");
  });

  it("starts with an agent template, updates the draft, and continues to the builder", () => {
    render(<Walkthrough />);
    expect(screen.getAllByRole("tab").map((tab) => tab.textContent)).toEqual([
      "01Start with a template", "02Design the call flow", "03Ground every answer",
      "04Review every outcome", "05Improve in production",
    ]);
    expect(screen.getByRole("tab", { name: /Start with a template/ }).getAttribute("aria-selected")).toBe("true");
    expect(screen.queryByRole("button", { name: "Inspect call from Maya Brooks" })).toBeNull();
    expect(screen.getByLabelText("Receptionist agent draft")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Support desk/ }));
    expect(screen.getByLabelText("Support desk agent draft")).toBeTruthy();
    expect(screen.getByText("Understand the caller’s question")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Next: design the call flow" }));
    const builder = screen.getByRole("tab", { name: /Design the call flow/ });
    expect(builder.getAttribute("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(builder);
    expect(screen.getByRole("button", { name: "Step through" })).toBeTruthy();
  });

  it("filters call records and opens the selected caller's details", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Review every outcome/ }));
    fireEvent.click(screen.getByRole("button", { name: "Transfer" }));
    expect(screen.queryByRole("button", { name: "Inspect call from Maya Brooks" })).toBeNull();
    const firstTab = screen.getByRole("tab", { name: /Review every outcome/ });
    const caller = screen.getByRole("button", { name: "Inspect call from Sam Kim" });
    act(() => caller.focus());
    fireEvent.click(caller);
    const toast = screen.getByRole("status");
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.getByRole("tabpanel").contains(toast)).toBe(true);
    expect(within(toast).getByText("Sam Kim · CALL-2403")).toBeTruthy();
    expect(within(toast).getByText("Specialist handoff with conversation summary")).toBeTruthy();
    expect(document.activeElement).toBe(caller);
    fireEvent.click(screen.getByRole("button", { name: "Dismiss demo notification" }));
    expect(screen.queryByRole("status")).toBeNull();
    advance(15000);
    expect(firstTab.getAttribute("aria-selected")).toBe("true");
    expect(document.activeElement).toBe(caller);
  });

  it("reverses visible call order without losing the active filter", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Review every outcome/ }));
    fireEvent.click(screen.getByRole("button", { name: "Completed" }));
    fireEvent.click(screen.getByRole("button", { name: "Reverse call order" }));
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(6);
    expect(within(rows[1]).getByRole("button", { name: "Inspect call from Casey Morgan" })).toBeTruthy();
  });

  it("dismisses toasts after eight seconds and pauses dismissal while reading", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Review every outcome/ }));
    fireEvent.pointerDown(screen.getByRole("button", { name: "Inspect call from Maya Brooks" }));
    fireEvent.click(screen.getByRole("button", { name: "Inspect call from Maya Brooks" }));
    advance(7900);
    const toast = screen.getByRole("complementary", { name: "Demo notification" });
    fireEvent.mouseEnter(toast);
    advance(10000);
    expect(screen.getByRole("status")).toBeTruthy();
    fireEvent.mouseLeave(toast);
    advance(8100);
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("clears the previous tab's toast when switching demos", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Review every outcome/ }));
    fireEvent.click(screen.getByRole("button", { name: "Inspect call from Maya Brooks" }));
    expect(screen.getByRole("status")).toBeTruthy();
    fireEvent.click(screen.getByRole("tab", { name: /Ground every answer/ }));
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("steps through the workflow and resets the selected node", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Design the call flow/ }));
    fireEvent.click(screen.getByRole("button", { name: "Step through" }));
    expect(screen.getByText("1 / 4 · Answer")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Next step" }));
    expect(screen.getByText("2 / 4 · Qualify")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Reset call flow" }));
    expect(screen.getByRole("button", { name: "Step through" })).toBeTruthy();
    expect(within(screen.getByRole("button", { name: "Inspect selected node" })).getByText("Qualify")).toBeTruthy();
  });

  it("shows the tool result behind an agent response", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Ground every answer/ }));
    fireEvent.click(screen.getByRole("button", { name: /lookup_order/ }));
    expect(within(screen.getByRole("status")).getByText("order_id: 4521")).toBeTruthy();
    expect(within(screen.getByRole("status")).getByText("240ms")).toBeTruthy();
  });

  it("switches metric periods, selects an alert, and marks it reviewed", () => {
    render(<Walkthrough />);
    fireEvent.click(screen.getByRole("tab", { name: /Improve in production/ }));
    fireEvent.click(screen.getByRole("button", { name: "7d" }));
    expect(within(screen.getByRole("button", { name: "Inspect Calls" })).getByText("8,736")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Transfer rate above target/ }));
    expect(screen.getByText("Transfers reached 8.4% against a 7% target.")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Mark reviewed" }));
    expect(screen.getByRole("button", { name: "Reviewed" }).hasAttribute("disabled")).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: /Campaign batch completed/ }));
    expect(screen.getByRole("button", { name: "Mark reviewed" }).hasAttribute("disabled")).toBe(false);
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("walkthrough playback", () => {
  it("fills the underline before advancing to the next slide", () => {
    render(<Walkthrough />);
    const first = screen.getByRole("tab", { name: /Start with a template/ });
    advance(7000);
    expect(progress(first)).toBeCloseTo(0.5, 1);
    expect(first.getAttribute("aria-selected")).toBe("true");
    advance(7100);
    expect(screen.getByRole("tab", { name: /Design the call flow/ })
      .getAttribute("aria-selected")).toBe("true");
  });

  it("freezes progress while paused and resumes the remaining time", () => {
    render(<Walkthrough />);
    const first = screen.getByRole("tab", { name: /Start with a template/ });
    advance(2500);
    fireEvent.click(screen.getByRole("button", { name: "Pause walkthrough" }));
    const pausedProgress = progress(first);
    advance(10000);
    expect(progress(first)).toBe(pausedProgress);
    expect(first.getAttribute("aria-selected")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "Resume walkthrough" }));
    advance(2000);
    expect(first.getAttribute("aria-selected")).toBe("true");
    expect(progress(first)).toBeGreaterThan(pausedProgress);
    advance(10000);
    expect(first.getAttribute("aria-selected")).toBe("false");
  });

  it("restarts the timer when selecting a slide with the keyboard", () => {
    render(<Walkthrough />);
    advance(5000);
    fireEvent.keyDown(screen.getByRole("tab", { name: /Start with a template/ }), { key: "End" });
    const last = screen.getByRole("tab", { name: /Improve in production/ });
    expect(last.getAttribute("aria-selected")).toBe("true");
    expect(progress(last)).toBe(0);
    expect(document.activeElement).toBe(last);
    advance(2000);
    expect(last.getAttribute("aria-selected")).toBe("true");
    advance(12100);
    expect(screen.getByRole("tab", { name: /Start with a template/ })
      .getAttribute("aria-selected")).toBe("true");
  });

  it("suspends in a hidden tab and respects reduced motion", () => {
    render(<Walkthrough />);
    const first = screen.getByRole("tab", { name: /Start with a template/ });
    advance(2000);
    vi.spyOn(document, "hidden", "get").mockReturnValue(true);
    act(() => document.dispatchEvent(new Event("visibilitychange")));
    const hiddenProgress = progress(first);
    advance(10000);
    expect(progress(first)).toBe(hiddenProgress);
    vi.spyOn(document, "hidden", "get").mockReturnValue(false);
    motion.matches = true;
    act(() => motion.dispatchEvent(new Event("change")));
    expect(progress(first)).toBe(1);
    advance(10000);
    expect(first.getAttribute("aria-selected")).toBe("true");
    motion.matches = false;
    act(() => motion.dispatchEvent(new Event("change")));
    advance(12100);
    expect(first.getAttribute("aria-selected")).toBe("false");
  });
});
