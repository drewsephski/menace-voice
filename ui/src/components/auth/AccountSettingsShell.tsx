"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface AccountSettingsShellProps {
  children: ReactNode;
}

export function AccountSettingsShell({ children }: AccountSettingsShellProps) {
  return (
    <div className="account-settings-shell flex min-h-full flex-col">
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border/60 bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="-ml-2 gap-2 text-muted-foreground hover:text-foreground"
        >
          <Link href="/overview" aria-label="Back to dashboard">
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>
        </Button>
      </header>
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
