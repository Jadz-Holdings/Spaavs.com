import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Autonomous Mobility",
  description:
    "SPAAVS is exploring how connected parking facilities can support emerging autonomous mobility requirements through partnerships and validated technology capabilities.",
};

const focus = [
  "Autonomous vehicle facility access",
  "Compatible vehicle identification",
  "Fleet staging",
  "EV charging coordination",
  "Vehicle servicing and readiness",
  "Facility-to-fleet integration",
  "Operational reporting",
  "Autonomous parking and valet integrations where validated",
  "Future mobility hub operations",
];

export default function AutonomousMobilityPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Autonomous Mobility"
        title="Preparing Parking Infrastructure for Autonomous Mobility"
        description="As autonomous transportation evolves, parking facilities may become important infrastructure for vehicle staging, charging, servicing, and fleet readiness."
      />
      <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
        SPAAVS is exploring how connected parking facilities can support
        emerging autonomous mobility requirements through software integration,
        facility partnerships, and validated technology capabilities.
      </p>

      <div className="mt-12">
        <h2 className="font-display text-2xl text-[var(--ink)]">
          Development Focus
        </h2>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          Forward-looking opportunities · subject to validation
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] px-4 py-3 text-sm text-[var(--ink)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
        SPAAVS does not claim to currently operate autonomous vehicles,
        certified autonomous facilities, or production autonomous integrations.
        Autonomous mobility is a longer-term expansion path built on connected
        parking and facility partnerships.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/contact">Explore Mobility Partnerships</ButtonLink>
        <ButtonLink href="/facility-partners" variant="secondary">
          Facility Partnerships
        </ButtonLink>
      </div>
    </Section>
  );
}
