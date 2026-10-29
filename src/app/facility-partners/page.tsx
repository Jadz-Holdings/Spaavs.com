import type { Metadata } from "next";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Facility Partners",
  description:
    "Explore SPAAVS partnership opportunities for parking operators and property owners. Proposed four-tier facility development model.",
};

const opportunities = [
  "Parking discovery and reservations",
  "Facility inventory coordination",
  "Digital transaction management",
  "EV charging integration",
  "Vehicle-service marketplace participation",
  "Fleet-oriented parking services",
  "Operational reporting",
  "Technology integrations",
  "Future autonomous-ready capabilities",
];

const tiers = [
  {
    title: "Tier 1 — SPAAVS Connected",
    body: "Parking discovery, reservations, digital transactions, and basic facility reporting.",
  },
  {
    title: "Tier 2 — SPAAVS Smart Services",
    body: "Connected parking with eligible charging, cleaning, inspections, and other coordinated vehicle services.",
  },
  {
    title: "Tier 3 — SPAAVS Autonomous Ready",
    body: "Facilities with validated capabilities for compatible autonomous vehicle access, staging, charging, and fleet workflows.",
  },
  {
    title: "Tier 4 — SPAAVS Mobility Hub",
    body: "Advanced locations supporting integrated parking, vehicle services, fleet operations, and multiple mobility technologies.",
  },
];

export default function FacilityPartnersPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Facility Partners"
          title="Transform Your Parking Facility Into a Connected Mobility Asset"
          description="SPAAVS aims to work with existing parking facility operators, commercial property owners, shopping centers, residential communities, and fleet-oriented facilities to create new service and technology opportunities."
        />
        <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
          Our strategy is designed to connect existing infrastructure with
          digital parking, vehicle services, charging, and future mobility
          capabilities.
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeader title="Partnership Opportunities" />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          title="Four-Tier Facility Development Model"
          description="A proposed framework for phased facility capability. These are not existing certifications or currently deployed facility ratings."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.title}
              className="border border-[var(--border)] p-6"
            >
              <h3 className="font-display text-xl text-[var(--ink)]">
                {tier.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                {tier.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="#partnership-inquiry">
            Become a Facility Partner
          </ButtonLink>
        </div>
      </Section>

      <Section id="partnership-inquiry" tone="soft">
        <SectionHeader
          title="Partnership Inquiry"
          description="Tell us about your facility. Submissions are routed to the SPAAVS business contact workflow."
        />
        <div className="max-w-3xl border border-[var(--border)] bg-[var(--bg)] p-6 md:p-8">
          <PartnerForm />
        </div>
      </Section>
    </>
  );
}
