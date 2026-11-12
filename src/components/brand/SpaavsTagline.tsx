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
  hero: "text-[0.95rem] leading-relaxed sm:text-xl md:text-2xl tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.18em]",
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

  const gapClass =
    size === "hero" ? "gap-x-2.5 gap-y-2 sm:gap-x-3 sm:gap-y-2.5" : "gap-x-2 gap-y-1";
  const dotClass =
    size === "hero"
      ? "h-1.5 w-1.5 sm:h-2 sm:w-2"
      : "h-1 w-1";

  return (
    <Comp
      className={`flex flex-wrap items-center font-sans font-light text-[var(--ink)] ${gapClass} ${sizeClass[size]} ${alignClass} ${className}`}
      aria-label={siteConfig.tagline}
    >
      {parts.map((part, index) => (
        <span key={part} className="inline-flex items-center gap-x-2.5 sm:gap-x-3">
          {index > 0 && (
            <span
              className={`inline-block shrink-0 rounded-full bg-[var(--tiffany)] ${dotClass}`}
              aria-hidden="true"
            />
          )}
          <span>{part}</span>
        </span>
      ))}
    </Comp>
  );
}
