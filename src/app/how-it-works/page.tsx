import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A step-by-step view of the proposed SPAAVS experience for drivers and parking facility operators. Workflows are in development.",
};

const driverSteps = [
  ["Discover", "Find participating parking facilities near a destination."],
  ["Select", "Review available parking options and eligible services."],
  ["Reserve", "Choose a parking space or eligible service where reservations are supported."],
  ["Arrive", "Use supported facility access and identification workflows."],
  ["Access Services", "Request participating charging, cleaning, or vehicle services when available."],
  ["Pay", "Manage eligible transactions through the planned SPAAVS billing experience."],
];

const operatorSteps = [
  ["Connect", "Explore partnership opportunities with SPAAVS."],
  ["Assess", "Evaluate facility infrastructure, technical compatibility, and commercial opportunities."],
  ["Integrate", "Plan appropriate digital parking, service, and facility integrations."],
  ["Expand", "Introduce eligible services in phases based on demand and facility readiness."],
  ["Optimize", "Use available operational reporting and commercial insights to improve performance."],
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
      <p className="mt-2 text-sm text-[var(--ink-muted)]">
        Proposed workflow · in development
      </p>
      <ol className="mt-8 space-y-4">
        {steps.map(([name, body], index) => (
          <li
            key={name}
            className="grid gap-3 border border-[var(--border)] p-5 md:grid-cols-[5rem_1fr] md:items-start"
          >
            <span className="font-display text-sm text-[var(--tiffany)]">
              Step {index + 1}
            </span>
            <div>
              <h3 className="text-lg text-[var(--ink)]">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
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
    <>
      <Section>
        <SectionHeader
          eyebrow="How It Works"
          title="A Proposed Connected Experience"
          description="These workflows describe the intended SPAAVS experience for drivers and facility operators. They are proposed and remain in development."
        />
        <div className="grid gap-14 lg:grid-cols-2">
          <Steps title="For Drivers" steps={driverSteps} />
          <Steps title="For Parking Facility Operators" steps={operatorSteps} />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/facility-partners">Become a Facility Partner</ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            Review Solutions
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
