import { ExternalLink } from "lucide-react";

import type { TelephonyProviderMetadata } from "@/client/types.gen";
import { cn } from "@/lib/utils";

interface ProviderSetupResourcesProps {
  provider: TelephonyProviderMetadata;
  className?: string;
}

export function ProviderSetupResources({
  provider,
  className,
}: ProviderSetupResourcesProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-x-4 gap-y-2",
        className,
      )}
    >
      {provider.estimated_phone_number_price && (
        <span className="text-[11px] leading-4 text-muted-foreground">
          Est. number cost: {provider.estimated_phone_number_price}
        </span>
      )}
      <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium">
        {provider.docs_url && (
          <a
            href={provider.docs_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            Setup guide <ExternalLink className="size-3" />
          </a>
        )}
        {provider.phone_number_url && (
          <a
            href={provider.phone_number_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline"
          >
            Get a number <ExternalLink className="size-3" />
          </a>
        )}
        {provider.pricing_url && (
          <a
            href={provider.pricing_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline"
          >
            Pricing <ExternalLink className="size-3" />
          </a>
        )}
      </span>
    </div>
  );
}
