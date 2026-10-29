import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Planned SPAAVS solutions spanning smart parking, connected driver experience, EV charging coordination, vehicle services, unified billing, and fleet services.",
};

const solutions = [
  {
    title: "Smart Parking & Reservations",
    body: "SPAAVS aims to simplify parking discovery and reservations by helping drivers identify participating parking locations, review availability, select services, and manage digital transactions.",
  },
  {
    title: "Connected Driver Experience",
    body: "The planned SPAAVS mobile experience should support convenient, safety-conscious interactions. A driver approaching a destination may use approved hands-free interactions or operate the application while safely parked. Where technically supported and authorized, Bluetooth and other compatible technologies may help facilitate identification or access-related workflows. Drivers should not manually operate mobile devices while driving.",
  },
  {
    title: "EV Charging Coordination",
    body: "Integrate eligible charging providers and participating charging facilities into the SPAAVS ecosystem. Planned capabilities may include charging discovery, service availability, scheduling, and coordinated billing.",
  },
  {
    title: "Vehicle-Service Marketplace",
    body: "Enable qualified providers to offer eligible services at participating facilities, including vehicle cleaning, detailing, inspections, maintenance coordination, EV charging services, fleet readiness services, and other approved vehicle services.",
  },
  {
    title: "Unified Payments & Billing",
    body: "Develop a streamlined transaction experience that can support parking, eligible vehicle services, charging, invoices, receipts, and future fleet accounts. Live payments are not enabled on this corporate site.",
  },
  {
    title: "Fleet Services",
    body: "Explore enterprise capabilities for commercial fleet operators, including parking coordination, service scheduling, charging, reporting, and compatible fleet integrations.",
  },
];

export default function SolutionsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Solutions"
        title="Planned Platform Solutions"
        description="SPAAVS is designing an integrated commercial and technology platform. Capabilities below are planned and subject to validation, partnership readiness, and phased deployment."
      />
      <div className="space-y-5">
        {solutions.map((solution, index) => (
          <article
            key={solution.title}
            className="border border-[var(--border)] p-6 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--tiffany)]">
              {String(index + 1).padStart(2, "0")} · Planned Capability
            </p>
            <h2 className="mt-3 font-display text-2xl text-[var(--ink)]">
              {solution.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
              {solution.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/how-it-works">See How It Works</ButtonLink>
      </div>
    </Section>
  );
}
