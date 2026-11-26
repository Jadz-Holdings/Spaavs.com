import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How human drivers use the SPAAVS Mobile App, and how autonomous fleets use the SPAAVS Fleet Hub.",
};

const driverSteps = [
  [
    "Discover",
    "Find parking with the SPAAVS Mobile App. SPAAVS intelligent parking infrastructure provides real-time parking availability and information about vehicle services offered at participating facilities.",
  ],
  [
    "Reserve or Book — Optional",
    "Reserve a parking space, schedule a vehicle service appointment, or combine both in a single visit. Drivers may also arrive without a reservation, subject to availability.",
  ],
  [
    "Arrive & Access",
    "Upon arrival, SPAAVS identifies the vehicle and coordinates facility access based on applicable entry requirements, parking availability and any existing reservation.",
  ],
  [
    "Navigate & Park",
    "The SPAAVS Mobile App leverages integrated LiDAR, camera infrastructure and indoor mapping technology to provide real-time, step-by-step navigation to an assigned parking space or service bay, even in underground and multilevel facilities where conventional GPS is unreliable.",
  ],
  [
    "Access Vehicle Services",
    "Request available charging, detailing, inspections and other vehicle services directly at participating facilities or through the SPAAVS Mobile App. Customers can monitor the progress and status of their requested services through the app.",
  ],
  [
    "Locate & Depart",
    "Locate your parked vehicle, review parking and service charges, complete payment and receive departure guidance where available.",
  ],
];

const fleetSteps = [
  [
    "Coordinate",
    "Fleet operators use the SPAAVS Fleet Hub to coordinate parking, charging and vehicle readiness services according to their operational requirements.",
  ],
  [
    "Identify & Access",
    "SPAAVS intelligent infrastructure identifies approaching vehicles, verifies authorized access and coordinates entry into participating autonomous-ready facilities.",
  ],
  [
    "Assign & Navigate",
    "SPAAVS assigns an available parking space, charging station or service bay and provides facility navigation information through authorized vehicle integrations.",
  ],
  [
    "Park & Service",
    "Vehicles access Overnight Fleet Bases or Rapid Turnaround Hubs for parking, charging, detailing, inspections and other available vehicle readiness services.",
  ],
  [
    "Monitor & Confirm Readiness",
    "Fleet operators receive real-time updates on vehicle location, charging progress, service completion and operational readiness through the SPAAVS Fleet Hub.",
  ],
  [
    "Return to Operations",
    "Once requested services are completed, SPAAVS communicates vehicle readiness and coordinates facility departure, allowing the fleet operator to return the vehicle to commercial operations.",
  ],
];

function Steps({
  title,
  steps,
}: {
  title: string;
  steps: string[][];
}) {
  return (
    <div>
      <h2 className="font-display text-2xl text-[var(--ink)] md:text-3xl">
        {title}
      </h2>
      <ol className="mt-5 space-y-0">
        {steps.map(([name, body], index) => (
          <li
            key={name}
            className="grid gap-1 border-t border-[var(--border)] py-4 md:grid-cols-[4.5rem_1fr] md:items-start md:gap-3"
          >
            <span className="font-display text-sm text-[var(--tiffany)]">
              Step {index + 1}
            </span>
            <div>
              <h3 className="text-lg text-[var(--ink)]">{name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                {body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How It Works"
        title="Drivers and Fleets"
        description="Human-driven vehicles use the SPAAVS Mobile App. Autonomous fleets use the SPAAVS Fleet Hub."
      />
      <p className="mb-8 text-sm leading-relaxed text-[var(--ink-muted)]">
        Use the SPAAVS Mobile App only when it is safe to do so. Do not
        manually operate a mobile device while driving. Hands-free voice
        assistance in the{" "}
        <Link
          href="/mobile-app"
          className="text-[var(--ink)] underline decoration-[var(--tiffany)] underline-offset-4"
        >
          SPAAVS Mobile App
        </Link>{" "}
        is designed to reduce that manual interaction. It does not remove the
        driver’s responsibility for safe driving.
      </p>
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
        <Steps title="Human-Driven Vehicles" steps={driverSteps} />
        <Steps title="Autonomous Fleets" steps={fleetSteps} />
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/facility-partners">Become a Facility Partner</ButtonLink>
        <ButtonLink href="/solutions" variant="secondary">
          Review Solutions
        </ButtonLink>
      </div>
    </Section>
  );
}
