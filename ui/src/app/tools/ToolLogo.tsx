import Image from "next/image";

import {
  getHttpTemplateForTool,
  getMcpPresetForTool,
} from "@/app/agent-onboarding/connection-catalog";
import type { ToolResponse } from "@/client/types.gen";
import { cn } from "@/lib/utils";

import {
  getCategoryConfig,
  renderToolIcon,
  type ToolCategory,
} from "./config";

export function ToolLogo({
  tool,
  className,
  size = "md",
}: {
  tool: Pick<ToolResponse, "category" | "name" | "definition" | "icon_color">;
  className?: string;
  size?: "sm" | "md";
}) {
  const compact = size === "sm";
  const preset = getMcpPresetForTool(tool);
  if (preset?.logoUrl) {
    const logoUrl = (!compact && preset.wordmarkUrl) || preset.logoUrl;
    const isWordmark = !compact && Boolean(preset.wordmarkUrl);

    return (
      <div
        className={cn(
          "flex h-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/60 shadow-sm",
          isWordmark ? "w-16 bg-white px-1.5" : "w-10",
          !isWordmark &&
            (preset.logoOnWhite === false ? "bg-background" : "bg-white"),
          compact && "h-6 w-6 rounded",
          className,
        )}
        title={`${preset.name} logo`}
      >
        <Image
          src={logoUrl}
          alt=""
          aria-hidden
          width={isWordmark ? 128 : 40}
          height={isWordmark ? 28 : 40}
          className={cn(
            "object-contain",
            isWordmark ? "max-h-7 w-full" : compact ? "h-5 w-5" : "h-8 w-8",
          )}
        />
      </div>
    );
  }

  const httpTemplate = getHttpTemplateForTool(tool);
  if (httpTemplate) {
    const Icon = httpTemplate.icon;
    return (
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 shadow-sm",
          compact && "h-6 w-6 rounded",
          className,
        )}
        style={{
          backgroundColor: `${httpTemplate.iconColor}1f`,
          color: httpTemplate.iconColor,
        }}
        title={httpTemplate.name}
      >
        <Icon className={compact ? "h-3 w-3" : "h-5 w-5"} aria-hidden />
      </div>
    );
  }

  const category = getCategoryConfig(tool.category as ToolCategory);
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
        compact && "h-6 w-6 rounded",
        className,
      )}
      style={{
        backgroundColor: tool.icon_color || category?.iconColor || "#3B82F6",
      }}
      title={category?.label ?? "Tool"}
    >
      {renderToolIcon(tool.category, compact ? "h-3 w-3 text-white" : "h-5 w-5 text-white")}
    </div>
  );
}
