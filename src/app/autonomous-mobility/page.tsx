import type { Metadata } from "next";
import { FacilityVisual } from "@/components/media/FacilityVisual";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Autonomous Mobility",
  description:
    "SPAAVS is developing autonomous-ready parking facilities and mobility hubs for autonomous ride-hailing, including robotaxis. Intelligent infrastructure and coordinated facility services complement vehicle manufacturers and fleet operators.",
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
  "SPAAVS Fleet Hub",
  "Assigned bays",
  "Fleet readiness",
];

export default function AutonomousMobilityPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Autonomous Mobility"
        title="Intelligent Infrastructure for Autonomous Mobility"
      />
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
        <p>
          SPAAVS is developing a network of autonomous-ready parking facilities
          and mobility hubs designed around the operational needs of autonomous
          ride hailing taxis (including robotaxis).
        </p>
        <p>
          Our infrastructure is designed to streamline fleet operations, reduce
          vehicle downtime and maximize operational readiness through two
          complementary facility models.
        </p>
      </div>

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
        SPAAVS provides intelligent infrastructure and coordinated facility
        services that complement the autonomous driving capabilities of vehicle
        manufacturers and fleet operators. The SPAAVS Four-Tier Facility
        Development Model provides a structured pathway for parking facilities
        to progressively enhance their technological capabilities, expand
        service offerings and support evolving mobility demands.
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
