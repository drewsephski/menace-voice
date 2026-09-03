import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  inverse = false,
  mark = false,
}: {
  className?: string;
  inverse?: boolean;
  mark?: boolean;
}) {
  if (mark) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/menace-mark.png"
        alt="Menace Voice"
        className={cn(
          "w-auto select-none dark:brightness-0 dark:invert",
          className,
        )}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label="Menace Voice"
      className={cn(
        "inline-flex items-center gap-2",
        inverse ? "text-zinc-50" : "text-foreground",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/menace-mark.png"
        alt=""
        className={cn(
          "h-full w-auto select-none",
          inverse ? "brightness-0 invert" : "dark:brightness-0 dark:invert",
        )}
      />
      <span className="text-[0.92em] font-semibold tracking-[-0.04em]">
        Menace Voice
      </span>
    </span>
  );
}
