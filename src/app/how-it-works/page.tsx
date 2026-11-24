import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How drivers use the SPAAVS Mobile App, and how fleets use SPAAVS Mobile Hub and the SPAAVS Fleet API. Workflows are in development.",
};

const driverSteps = [
  ["Discover", "Find parking with the SPAAVS Mobile App."],
  ["Reserve", "Reserve parking at a participating facility."],
  [
    "Arrive",
    "Verify access on arrival. Entry uses the reservation and authorized credentials. A license plate alone is not authorization.",
  ],
  ["Navigate", "Receive an indoor route to the assigned available bay."],
  ["Request services", "Request eligible charging, detailing, or inspection services."],
  ["Pay and exit", "Pay for eligible parking and services, then exit."],
];

const fleetSteps = [
  [
    "Coordinate",
    "SPAAVS Mobile Hub and the SPAAVS Fleet API coordinate the visit.",
  ],
  ["Authorize", "Authorized access is confirmed before the vehicle enters."],
  ["Assign", "The facility assigns an available bay."],
  [
    "Prepare",
    "Charging and readiness services are coordinated at the bay.",
  ],
  [
    "Drive",
    "The vehicle controls its own motion. The manufacturer controls driving.",
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
        description="Human drivers use the SPAAVS Mobile App. Fleets use SPAAVS Mobile Hub and the SPAAVS Fleet API. These workflows are in development."
      />
      <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
        Use the SPAAVS Mobile App only when it is safe to do so. Do not
        manually operate a mobile device while driving.
      </p>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <Steps title="Human driver" steps={driverSteps} />
        <Steps title="Fleet" steps={fleetSteps} />
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
