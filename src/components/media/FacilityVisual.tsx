/**
 * Neutral branded stand-in for a facility photograph.
 * Inline SVG so the frame cannot render as a broken image.
 */
export function FacilityVisual({
  label,
  variant = "base",
}: {
  label: string;
  variant?: "base" | "hub";
}) {
  const bays = variant === "hub" ? [280, 680, 1080] : [360, 760, 1160];

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 1600 900"
      className="aspect-video h-auto w-full border border-[var(--border)] bg-[var(--surface-soft)]"
    >
      <title>{label}</title>
      <rect width="1600" height="900" fill="var(--surface-soft)" />
      <rect
        x="96"
        y="128"
        width="1408"
        height="644"
        fill="none"
        stroke="var(--tiffany)"
        strokeWidth="3"
      />
      <path
        d="M96 470h1408"
        fill="none"
        stroke="var(--border)"
        strokeWidth="2"
      />
      {bays.map((x) => (
        <g key={x}>
          <rect
            x={x}
            y="520"
            width="220"
            height="96"
            rx="8"
            fill="none"
            stroke="var(--ink)"
            strokeOpacity="0.28"
            strokeWidth="3"
          />
          <circle cx={x + 48} cy="640" r="14" fill="var(--tiffany)" fillOpacity="0.85" />
          <circle cx={x + 172} cy="640" r="14" fill="var(--tiffany)" fillOpacity="0.85" />
        </g>
      ))}
      <path
        d="M180 300h420M180 348h280"
        fill="none"
        stroke="var(--tiffany)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
