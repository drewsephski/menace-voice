"use client";

import type { CurrentUser, Team } from "@stackframe/stack";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { reloadApp } from "@/lib/browserReload";
import logger from "@/lib/logger";

function isStackCurrentUser(user: unknown): user is CurrentUser {
  return (
    typeof user === "object" &&
    user !== null &&
    "useTeams" in user &&
    "setSelectedTeam" in user &&
    "createTeam" in user
  );
}

function defaultTeamName(user: CurrentUser): string {
  const displayName = user.displayName?.trim();
  if (displayName) {
    return `${displayName}'s team`;
  }
  const emailLocal = user.primaryEmail?.split("@")[0]?.trim();
  if (emailLocal) {
    return `${emailLocal}'s team`;
  }
  return "My team";
}

export function NoTeamDialog() {
  const pathname = usePathname();
  const { provider, user, loading } = useAuth();

  if (
    loading ||
    provider !== "stack" ||
    !isStackCurrentUser(user) ||
    user.selectedTeam ||
    pathname.startsWith("/handler") ||
    pathname.startsWith("/auth")
  ) {
    return null;
  }

  return <NoTeamDialogContent user={user} />;
}

function NoTeamDialogContent({ user }: { user: CurrentUser }) {
  const teams = user.useTeams();
  const [name, setName] = useState(() => defaultTeamName(user));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSelect(team: Team) {
    setSaving(true);
    setError(null);
    try {
      await user.setSelectedTeam(team);
      reloadApp();
    } catch (err) {
      logger.error("Failed to select Stack team", err);
      setError("Could not select this team. Please try again.");
      setSaving(false);
    }
  }

  async function handleCreate() {
    const displayName = name.trim();
    if (!displayName) {
      setError("Enter a team name to continue.");
      return;
    }

    setSaving(true);
    setError(null);
    try {
      const team = await user.createTeam({ displayName });
      await user.setSelectedTeam(team);
      reloadApp();
    } catch (err) {
      logger.error("Failed to create Stack team", err);
      setError("Could not create a team. Please try again.");
      setSaving(false);
    }
  }

  const hasTeams = teams.length > 0;

  return (
    <AlertDialog open>
      <AlertDialogContent
        onEscapeKeyDown={(event) => event.preventDefault()}
        deferPointerDownOutside
      >
        <AlertDialogHeader>
          <AlertDialogTitle>
            {hasTeams ? "Choose a team" : "Create a team"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {hasTeams
              ? "Select a team to continue. Workflows, calls, and settings are scoped to a team."
              : "You are not in a team yet. Create one to start building voice agents."}
          </AlertDialogDescription>
        </AlertDialogHeader>

        {hasTeams ? (
          <ul className="flex max-h-60 flex-col gap-2 overflow-y-auto">
            {teams.map((team) => (
              <li key={team.id}>
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto w-full justify-start py-3"
                  disabled={saving}
                  onClick={() => {
                    void handleSelect(team);
                  }}
                >
                  {team.displayName || "Untitled team"}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="new-team-name">Team name</Label>
            <Input
              id="new-team-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={saving}
              autoComplete="organization"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  void handleCreate();
                }
              }}
            />
          </div>
        )}

        {error ? (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}

        <AlertDialogFooter>
          {hasTeams ? null : (
            <Button
              type="button"
              disabled={saving}
              onClick={() => {
                void handleCreate();
              }}
            >
              {saving ? "Creating..." : "Create team"}
            </Button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
