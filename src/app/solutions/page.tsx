import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "SPAAVS technology and infrastructure: Integrated LiDAR and Camera Infrastructure, intelligent facility access, real-time facility intelligence, and autonomous mobility integration.",
};

const technology = [
  {
    title: "Integrated LiDAR and Camera Infrastructure",
    body: "Intelligent vehicle detection, license plate recognition, physical tracking, real-time parking availability, and indoor navigation. Detection supports the facility view. A license plate alone is not authorization.",
  },
  {
    title: "Intelligent Facility Access",
    body: "SPAAVS verifies the reservation and authorized credentials before entry. A license plate alone is not authorization.",
  },
  {
    title: "Real-Time Facility Intelligence",
    body: "Parking availability, vehicle movement, and utilization for participating facilities.",
  },
  {
    title: "Autonomous Mobility Integration",
    body: "Compatible vehicles connect through authorized fleet interfaces. The vehicle manufacturer controls driving. SPAAVS coordinates access, the assigned bay, and facility services.",
  },
];

const platform = [
  {
    title: "SPAAVS Mobile App",
    body: "Human drivers discover and reserve parking, verify access on arrival, follow an indoor route to an assigned available bay, request eligible services, pay, and exit.",
  },
  {
    title: "SPAAVS Mobile Hub",
    body: "SaaS technology and APIs connect fleet systems to the SPAAVS Mobile Hub for authorized access, an assigned bay, charging, and readiness services. The vehicle controls its own motion.",
  },
  {
    title: "EV Charging and Vehicle Services",
    body: "Participating facilities can offer charging, detailing, inspections, and maintenance coordination alongside parking.",
  },
  {
    title: "Digital Payments",
    body: "Eligible parking and service payments are part of the planned platform.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Solutions"
          title="Technology and Infrastructure"
          description="SPAAVS is designing Intelligent Mobility Infrastructure for existing parking facilities. The capabilities below are in development."
        />
        <div>
          {technology.map((item, index) => (
            <article
              key={item.title}
              className="border-t border-[var(--border)] py-5 md:py-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--tiffany)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          title="Platform Services"
          description="Software that connects drivers, facilities, vehicle services, and fleets."
        />
        <div>
          {platform.map((item) => (
            <article
              key={item.title}
              className="border-t border-[var(--border)] py-5 md:py-6"
            >
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href="/how-it-works">See How It Works</ButtonLink>
        </div>
      </Section>
    </>
  );
}
