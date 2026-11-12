import Image from "next/image";

type SpaavsLogoProps = {
  className?: string;
  /** Visual height in pixels for the raster wordmark. */
  height?: number;
  /** Optional responsive height override via CSS (e.g. h-7 md:h-8). */
  heightClassName?: string;
  priority?: boolean;
  variant?: "full" | "compact";
};

/**
 * Official SPAAVS wordmark only.
 * Does not include the corporate tagline — use <SpaavsTagline /> separately.
 */
export function SpaavsLogo({
  className = "",
  height = 36,
  heightClassName,
  priority = false,
  variant = "full",
}: SpaavsLogoProps) {
  const aspect = 1903 / 258;
  const width = Math.round(height * aspect);
  const src =
    variant === "compact"
      ? "/brand/spaavs-wordmark-clean.png"
      : "/brand/spaavs-wordmark-clean.png";

  return (
    <span className={className || "inline-flex items-center"}>
      <Image
        src={src}
        alt="SPAAVS"
        width={width}
        height={height}
        priority={priority}
        className={`w-auto select-none ${heightClassName ?? ""}`}
        style={heightClassName ? { width: "auto" } : { height, width: "auto" }}
      />
    </span>
  );
}

/** Compact mark for favicon-like placements (AA with Tiffany dots). */
export function SpaavsMark({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/brand/spaavs-icon-transparent.png"
      alt="SPAAVS"
      width={size}
      height={size}
      className={className}
    />
  );
}
