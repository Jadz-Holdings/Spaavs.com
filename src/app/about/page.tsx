import type { Metadata } from "next";
import Link from "next/link";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About SPAAVS",
  description:
    "SPAAVS, a Jadz Holdings LLC business, is a real-time parking facility technology and management company for human-driven vehicles, autonomous fleets, and integrated vehicle services.",
};

export default function AboutPage() {
  return (
    <>
      <Section paddingClass="pt-10 pb-0 md:pt-14 md:pb-0">
        <SectionHeader
          eyebrow="About SPAAVS"
          title="Intelligent Mobility Infrastructure"
          description="SPAAVS is a real-time parking facility technology and management company designed to support human-driven vehicles, autonomous fleets, and integrated vehicle services."
        />
        <p className="mb-6 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          The{" "}
          <Link
            href="/mobile-app"
            className="text-[var(--ink)] underline decoration-[var(--tiffany)] underline-offset-4"
          >
            SPAAVS Mobile App
          </Link>{" "}
          is designed to reduce manual phone use with hands-free voice
          assistance and predictive parking help. Drivers remain responsible
          for safe driving.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            SPAAVS is a business within the {siteConfig.parent} portfolio. It
            equips existing parking garages, shopping centers, residential
            facilities, and commercial properties with real-time space
            visibility, facility access, and indoor guidance where GPS stops
            working.
          </p>
          <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            The SPAAVS Mobile App, SPAAVS Fleet Hub, and the SPAAVS Mobility
            Hub connect SPAAVS Smart Parking Facilities and SPAAVS
            Autonomous-ready Facilities. Facilities offer parking together with
            charging, detailing, inspections, and maintenance. Commercial fleet
            operators use the SPAAVS Fleet Hub to subscribe, pay, and manage
            their autonomous vehicles, with a staffed SPAAVS Fleet Center on
            site.
          </p>
        </div>
      </Section>

      <Section tone="soft" paddingClass="pt-6 pb-10 md:pt-8 md:pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              body: "Modernize existing parking infrastructure so facilities, vehicles, services, and mobility operators can work through one intelligent platform.",
            },
            {
              title: "Our Vision",
              body: "A network of SPAAVS Smart Parking Facilities and SPAAVS Autonomous-ready Facilities serving today's drivers and autonomous fleets.",
            },
            {
              title: "Our Approach",
              body: "Facilities join the Four-Tier Facility Development Model at the appropriate tier and upgrade as demand warrants. These are capability levels, not certifications.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="border border-[var(--border)] bg-[var(--bg)] p-5"
            >
              <h2 className="font-display text-xl text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Official Profiles"
          description={`Connect with ${siteConfig.handle} on YouTube, Instagram, Facebook, TikTok, X, and LinkedIn.`}
        />
        <SocialLinks />
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Contact SPAAVS</ButtonLink>
          <ButtonLink href="/facility-partners" variant="secondary">
            Partnership Opportunities
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
