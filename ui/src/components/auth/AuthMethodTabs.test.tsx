import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { animate, useReducedMotion } from "framer-motion";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AuthMethodTabs } from "./AuthMethodTabs";

vi.mock("./auth-method-tabs.module.css", () => ({
  default: { host: "host", list: "list", highlight: "highlight", expanding: "expanding" },
}));

vi.mock("framer-motion", async (importOriginal) => ({
  ...await importOriginal<typeof import("framer-motion")>(),
  animate: vi.fn(() => ({ stop: vi.fn() })),
  useReducedMotion: vi.fn(() => false),
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(useReducedMotion).mockReturnValue(false);
  vi.stubGlobal("ResizeObserver", class {
    observe() {}
    disconnect() {}
  });
});

function FormTabs() {
  return (
    <AuthMethodTabs>
      <Tabs defaultValue="magic-link">
        <TabsList>
          <TabsTrigger value="magic-link">Email</TabsTrigger>
          <TabsTrigger value="password">Email &amp; Password</TabsTrigger>
        </TabsList>
        <TabsContent value="magic-link"><input aria-label="Email" /></TabsContent>
        <TabsContent value="password">
          <input aria-label="Email" />
          <input aria-label="Password" type="password" />
        </TabsContent>
      </Tabs>
    </AuthMethodTabs>
  );
}

describe("AuthMethodTabs", () => {
  it("enhances the native method tabs and animates only the container height", async () => {
    render(<FormTabs />);
    const list = screen.getByRole("tablist");
    await waitFor(() => expect(list.querySelector('span[aria-hidden="true"]')).not.toBeNull());
    expect(screen.getAllByRole("tab").map((tab) => tab.textContent)).toEqual(["Email", "Email & Password"]);
    fireEvent.mouseDown(screen.getByRole("tab", { name: "Email & Password" }), { button: 0, ctrlKey: false });
    await waitFor(() => expect(animate).toHaveBeenCalledTimes(1));
    expect(vi.mocked(animate).mock.calls[0][1]).toEqual({ height: [0, 0] });
    expect(screen.getByLabelText("Password")).toBeTruthy();
    expect(screen.getAllByRole("textbox", { name: "Email" })).toHaveLength(1);
    expect(screen.getByRole("tab", { name: "Email & Password" }).getAttribute("aria-selected")).toBe("true");
  });

  it("keeps native form switching with reduced motion", async () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    render(<FormTabs />);
    fireEvent.mouseDown(screen.getByRole("tab", { name: "Email & Password" }), { button: 0, ctrlKey: false });
    await waitFor(() => expect(screen.getByLabelText("Password")).toBeTruthy());
    expect(animate).not.toHaveBeenCalled();
  });

  it("leaves forms without method tabs alone", () => {
    const { container } = render(<AuthMethodTabs><input aria-label="Email" /></AuthMethodTabs>);
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull();
    expect(animate).not.toHaveBeenCalled();
  });
});
