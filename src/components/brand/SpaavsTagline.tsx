import { siteConfig } from "@/lib/site";

type SpaavsTaglineProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  align?: "left" | "center";
  /** When true, uses periods in accessible text and Tiffany dots visually. */
  asHeading?: boolean;
};

const sizeClass: Record<NonNullable<SpaavsTaglineProps["size"]>, string> = {
  sm: "text-[0.65rem] sm:text-xs tracking-[0.18em]",
  md: "text-xs sm:text-sm tracking-[0.2em]",
  lg: "text-sm sm:text-base tracking-[0.22em]",
  hero: "text-sm sm:text-base md:text-lg tracking-[0.18em] sm:tracking-[0.22em]",
};

/**
 * Corporate tagline rendered independently from the SPAAVS wordmark.
 * Wording and Tiffany separators match the approved lockup file.
 */
export function SpaavsTagline({
  className = "",
  size = "md",
  align = "center",
  asHeading = false,
}: SpaavsTaglineProps) {
  const parts = siteConfig.taglineParts;
  const alignClass = align === "center" ? "justify-center text-center" : "justify-start text-left";
  const Comp = asHeading ? "h1" : "p";

  return (
    <Comp
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-sans font-light text-[var(--ink)] ${sizeClass[size]} ${alignClass} ${className}`}
      aria-label={siteConfig.tagline}
    >
      {parts.map((part, index) => (
        <span key={part} className="inline-flex items-center gap-x-2">
          {index > 0 && (
            <span
              className="inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--tiffany)]"
              aria-hidden="true"
            />
          )}
          <span>{part}</span>
        </span>
      ))}
    </Comp>
  );
}
