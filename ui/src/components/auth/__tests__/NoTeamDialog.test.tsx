import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthUser } from "@/lib/auth";
import {
  AuthContext,
  type AuthContextType,
} from "@/lib/auth/providers/AuthProvider";

import { NoTeamDialog } from "../NoTeamDialog";

const reloadAppMock = vi.hoisted(() => vi.fn());

vi.mock("@/lib/browserReload", () => ({
  reloadApp: reloadAppMock,
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/workflow",
}));

const TEAM_ONE = { id: "team-1", displayName: "Acme" };

function makeStackUser(overrides: {
  selectedTeam?: { id: string; displayName: string } | null;
  teams?: Array<{ id: string; displayName: string }>;
  createTeam?: ReturnType<typeof vi.fn>;
  setSelectedTeam?: ReturnType<typeof vi.fn>;
} = {}) {
  const teams = overrides.teams ?? [];
  return {
    id: "user-1",
    displayName: "Ada",
    primaryEmail: "ada@example.com",
    selectedTeam: overrides.selectedTeam === undefined ? null : overrides.selectedTeam,
    useTeams: () => React.useMemo(() => teams, []),
    setSelectedTeam: overrides.setSelectedTeam ?? vi.fn(async () => undefined),
    createTeam:
      overrides.createTeam ??
      vi.fn(async ({ displayName }: { displayName: string }) => ({
        id: "team-new",
        displayName,
      })),
  };
}

function renderDialog(user: ReturnType<typeof makeStackUser> | null, provider = "stack") {
  const value: AuthContextType = {
    user: user as AuthUser | null,
    isAuthenticated: !!user,
    loading: false,
    getAccessToken: async () => "token",
    redirectToLogin: () => undefined,
    logout: async () => undefined,
    provider,
  };

  return render(
    <AuthContext.Provider value={value}>
      <NoTeamDialog />
    </AuthContext.Provider>,
  );
}

describe("NoTeamDialog", () => {
  beforeEach(() => {
    reloadAppMock.mockReset();
  });

  it("does not render when a team is already selected", () => {
    renderDialog(makeStackUser({ selectedTeam: TEAM_ONE }));
    expect(screen.queryByRole("alertdialog")).toBeNull();
  });

  it("does not render for local auth", () => {
    renderDialog(null, "local");
    expect(screen.queryByRole("alertdialog")).toBeNull();
  });

  it("lets a user without teams create one", async () => {
    const createTeam = vi.fn(async ({ displayName }: { displayName: string }) => ({
      id: "team-new",
      displayName,
    }));
    const setSelectedTeam = vi.fn(async () => undefined);

    renderDialog(makeStackUser({ createTeam, setSelectedTeam, teams: [] }));

    expect(screen.getByRole("alertdialog")).toBeTruthy();
    expect(screen.getByText("Create a team")).toBeTruthy();

    fireEvent.change(screen.getByLabelText("Team name"), {
      target: { value: "Voice ops" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Create team" }));

    expect(createTeam).toHaveBeenCalledWith({ displayName: "Voice ops" });
    await waitFor(() => {
      expect(setSelectedTeam).toHaveBeenCalledWith({
        id: "team-new",
        displayName: "Voice ops",
      });
    });
    expect(reloadAppMock).toHaveBeenCalled();
  });

  it("lets a user with teams pick one", async () => {
    const setSelectedTeam = vi.fn(async () => undefined);

    renderDialog(
      makeStackUser({
        setSelectedTeam,
        teams: [TEAM_ONE],
      }),
    );

    expect(screen.getByText("Choose a team")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Acme" }));

    await waitFor(() => {
      expect(setSelectedTeam).toHaveBeenCalledWith(TEAM_ONE);
    });
    expect(reloadAppMock).toHaveBeenCalled();
  });
});
