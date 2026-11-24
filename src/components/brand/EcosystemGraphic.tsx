"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const ALT =
  "Diagram of the SPAAVS digital platform. SPAAVS Mobile App, SPAAVS Mobile Hub, and SPAAVS Fleet API connect SPAAVS Smart Parking Facilities and SPAAVS Autonomous-ready Facilities, including Overnight Fleet Bases and Rapid Turnaround Hubs, with charging, detailing, inspection, and maintenance.";

type Motion = "playing" | "paused" | "reduced";

/**
 * Animated ecosystem diagram.
 * The still poster is the reduced-motion state, the pause state, and the
 * fallback if the animation cannot load. Dimensions stay reserved either way.
 */
export function EcosystemGraphic() {
  const imageId = useId();
  const captionId = useId();
  const userChoice = useRef<"play" | "pause" | null>(null);
  const [motion, setMotion] = useState<Motion>("reduced");
  const [gifOk, setGifOk] = useState(true);
  const [posterOk, setPosterOk] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (userChoice.current === "play") setMotion("playing");
      else if (userChoice.current === "pause") setMotion("paused");
      else setMotion(media.matches ? "reduced" : "playing");
    };
    const frame = requestAnimationFrame(apply);
    media.addEventListener("change", apply);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", apply);
    };
  }, []);

  const playing = motion === "playing" && gifOk;

  function toggle() {
    const next = playing ? "pause" : "play";
    userChoice.current = next;
    setMotion(next === "play" ? "playing" : "paused");
  }

  return (
    <figure className="mx-auto w-full max-w-3xl" aria-labelledby={captionId}>
      <div
        id={imageId}
        className="relative w-full overflow-hidden border border-[var(--border)] bg-[var(--surface-soft)]"
        style={{ aspectRatio: "360 / 265" }}
      >
        {playing ? (
          <Image
            src="/brand/spaavs-ecosystem.gif"
            alt={ALT}
            width={360}
            height={265}
            unoptimized
            className="absolute inset-0 h-full w-full object-contain"
            onError={() => setGifOk(false)}
          />
        ) : posterOk ? (
          <Image
            src="/brand/spaavs-ecosystem-poster.png"
            alt={ALT}
            width={360}
            height={266}
            className="absolute inset-0 h-full w-full object-contain"
            onError={() => setPosterOk(false)}
          />
        ) : (
          <div role="img" aria-label={ALT} className="chrome-panel absolute inset-0" />
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          aria-pressed={!playing}
          aria-controls={imageId}
          onClick={toggle}
        >
          {playing ? "Pause animation" : "Play animation"}
        </Button>
      </div>
      <figcaption
        id={captionId}
        className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]"
      >
        Conceptual illustration of Intelligent Mobility Infrastructure. Vehicle
        imagery, including the Tesla Cybercab, is illustrative. It is not a
        partnership, a supplier agreement, or a compatibility claim.
      </figcaption>
    </figure>
  );
}
