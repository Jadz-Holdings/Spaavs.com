import type { Metadata } from "next";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Facility Partners",
  description:
    "Join the SPAAVS Four-Tier Facility Development Model. Facilities can start at the appropriate capability level and upgrade as demand warrants.",
};

const tiers = [
  {
    title: "Tier 1 — SPAAVS Connected",
    body: "Parking discovery, reservations, digital payments, inventory coordination and facility reporting.",
  },
  {
    title: "Tier 2 — SPAAVS Smart Services",
    body: "Real-time parking availability, integrated vehicle identification, indoor navigation, charging, detailing and inspection services.",
  },
  {
    title: "Tier 3 — SPAAVS Autonomous Ready",
    body: "Compatible autonomous vehicle access, physical tracking, authorized navigation integration, fleet staging and charging.",
  },
  {
    title: "Tier 4 — SPAAVS Mobility Hub",
    body: "Overnight Fleet Bases, Rapid Turnaround Hubs, charging, detailing, inspections, maintenance coordination and fleet readiness.",
  },
];

const progression = [
  "Tier 1 uses existing compatible infrastructure.",
  "Tier 2 adds Integrated LiDAR and Camera Infrastructure.",
  "Tier 3 adds authorized fleet integration.",
  "Tier 4 adds fleet servicing and charging.",
];

export default function FacilityPartnersPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Facility Partners"
          title="Bring Your Facility Into Intelligent Mobility Infrastructure"
          description="SPAAVS partners with parking operators and property owners to retrofit existing garages, lots, shopping centers, residential communities, and commercial properties."
        />
        <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
          Facilities can join at the appropriate tier and upgrade as demand
          warrants. These are capability levels, not certifications.
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeader
          title="Four-Tier Facility Development Model"
          description="Each tier adds capability. A facility does not need to begin at Tier 4."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.title}
              className="border border-[var(--border)] bg-[var(--bg)] p-5"
            >
              <h3 className="font-display text-xl text-[var(--ink)]">
                {tier.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                {tier.body}
              </p>
            </article>
          ))}
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {progression.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <ButtonLink href="#partnership-inquiry">
            Become a Facility Partner
          </ButtonLink>
        </div>
      </Section>

      <Section id="partnership-inquiry">
        <SectionHeader
          title="Partnership Inquiry"
          description="Tell us about your facility. Submissions are routed to the SPAAVS business contact workflow."
        />
        <div className="max-w-3xl border border-[var(--border)] bg-[var(--bg)] p-5 md:p-6">
          <PartnerForm />
        </div>
      </Section>
    </>
  );
}
