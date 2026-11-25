/**
 * Neutral branded stand-in for a facility photograph.
 * The drawing fills the 16:9 frame so the image uses the card width.
 * Inline SVG so the frame cannot render as a broken image.
 */
export function FacilityVisual({
  label,
  variant = "base",
}: {
  label: string;
  variant?: "base" | "hub";
}) {
  const stalls = variant === "hub" ? 5 : 4;
  const stallWidth = 1600 / stalls;

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 1600 900"
      className="aspect-video h-auto w-full bg-[var(--surface-soft)]"
    >
      <title>{label}</title>
      <rect width="1600" height="900" fill="var(--surface-soft)" />
      <rect width="1600" height="72" fill="var(--tiffany)" fillOpacity="0.16" />
      <path
        d="M0 220h1600M0 430h1600"
        fill="none"
        stroke="var(--tiffany)"
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      {Array.from({ length: stalls }, (_, index) => {
        const x = index * stallWidth;
        return (
          <g key={x}>
            <path
              d={`M${x} 72v828`}
              fill="none"
              stroke="var(--border)"
              strokeWidth="3"
            />
            <rect
              x={x + stallWidth * 0.12}
              y="500"
              width={stallWidth * 0.76}
              height="250"
              rx="16"
              fill="none"
              stroke="var(--ink)"
              strokeOpacity="0.35"
              strokeWidth="4"
            />
            <circle
              cx={x + stallWidth * 0.28}
              cy="790"
              r="22"
              fill="var(--tiffany)"
            />
            <circle
              cx={x + stallWidth * 0.72}
              cy="790"
              r="22"
              fill="var(--tiffany)"
            />
          </g>
        );
      })}
    </svg>
  );
}
