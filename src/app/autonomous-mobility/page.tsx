import type { Metadata } from "next";
import { FacilityVisual } from "@/components/media/FacilityVisual";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Autonomous Mobility",
  description:
    "Overnight Fleet Bases and Rapid Turnaround Hubs for authorized autonomous fleets. The vehicle manufacturer controls driving.",
};

const hubs = [
  {
    title: "Overnight Fleet Bases",
    label:
      "Conceptual view of an Overnight Fleet Base with charging stalls, a service desk, and vehicles staged for the next operating cycle.",
    src: "/facilities/overnight-fleet-base.webp",
    body: "Long-duration parking, overnight charging, vehicle detailing, inspections, and preparation for the next operating cycle.",
  },
  {
    title: "Rapid Turnaround Hubs",
    label:
      "Conceptual view of a Rapid Turnaround Hub with stations to charge, clean, inspect, and prepare a vehicle between trips.",
    src: "/facilities/rapid-turnaround-hub.webp",
    body: "Short-duration parking, rapid charging, cleaning, inspections, and vehicle readiness services between commercial trips.",
  },
];

const focus = [
  "Authorized autonomous vehicle access",
  "Physical tracking",
  "Fleet staging",
  "Charging",
  "Detailing and inspections",
  "Maintenance coordination",
  "SPAAVS Fleet API",
  "Assigned bays",
  "Fleet readiness",
];

export default function AutonomousMobilityPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Autonomous Mobility"
        title="SPAAVS Autonomous-ready Facilities"
        description="SPAAVS Autonomous-ready Facilities and SPAAVS Mobility Hubs are planned capability levels for fleets. They are not certifications."
      />
      <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
        Compatible vehicles use authorized fleet interfaces. The manufacturer
        controls driving. SPAAVS coordinates access, the assigned bay, charging,
        and readiness services.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {hubs.map((hub) => (
          <article
            key={hub.title}
            className="overflow-hidden border border-[var(--border)]"
          >
            <FacilityVisual
              src={hub.src}
              label={hub.label}
              width={1200}
              height={735}
            />
            <div className="p-4">
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {hub.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                {hub.body}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 max-w-3xl text-xs leading-relaxed text-[var(--ink-muted)]">
        Conceptual illustrations of Overnight Fleet Bases and Rapid Turnaround
        Hubs. Vehicle imagery, including Tesla and Waymo vehicles, is
        illustrative. It is not a partnership, a supplier agreement, or a
        compatibility claim.
      </p>

      <div className="mt-8">
        <h2 className="font-display text-2xl text-[var(--ink)]">
          Development Focus
        </h2>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] px-4 py-2.5 text-sm text-[var(--ink)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
        SPAAVS does not operate autonomous vehicles. The manufacturer controls
        driving. Facility tiers are capability levels, not certifications.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <ButtonLink href="/contact">Explore Mobility Partnerships</ButtonLink>
        <ButtonLink href="/facility-partners" variant="secondary">
          Facility Partnerships
        </ButtonLink>
      </div>
    </Section>
  );
}
