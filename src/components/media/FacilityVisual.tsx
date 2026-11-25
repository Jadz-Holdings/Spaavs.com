import Image from "next/image";

/**
 * Facility photograph sized to the card. The frame reserves the photo's
 * intrinsic ratio so the signage is not cropped and the page does not jump.
 */
export function FacilityVisual({
  src,
  label,
  width,
  height,
}: {
  src: string;
  label: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className="relative w-full overflow-hidden bg-[var(--surface-soft)]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={label}
        width={width}
        height={height}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
