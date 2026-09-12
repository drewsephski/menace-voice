import { cn } from "@/lib/utils";

const BRAND_MARK_SRC = "/menace-mark.png";

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
        src={BRAND_MARK_SRC}
        alt="Menace Voice"
        className={cn("h-[1em] w-auto shrink-0 select-none", className)}
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
        src={BRAND_MARK_SRC}
        alt=""
        className="h-full w-auto shrink-0 select-none"
      />
      <span className="text-[0.92em] font-semibold tracking-[-0.04em]">
        Menace Voice
      </span>
    </span>
  );
}
