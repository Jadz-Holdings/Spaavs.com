import type { Metadata } from "next";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Media & Updates",
  description:
    "Explore the SPAAVS vision for intelligent parking, connected mobility, vehicle services, and autonomous infrastructure.",
};

const categories = [
  "Company Updates",
  "SPAAVS Technology",
  "Smart Parking",
  "EV Charging",
  "Vehicle Services",
  "Fleet Mobility",
  "Autonomous Infrastructure",
  "Partner Announcements",
  "Video Demonstrations",
];

export default function MediaPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Media"
          title="SPAAVS Media & Updates"
          description="Explore the SPAAVS vision for intelligent parking, connected mobility, vehicle services, and autonomous infrastructure. Follow our development journey through videos, technology concepts, project updates, and announcements."
        />
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            href="https://www.youtube.com/@spaavs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch SPAAVS on YouTube
          </ButtonLink>
          <SocialLinks />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          title="Content Categories"
          description="Editorial categories for future CMS-managed updates. No invented articles, demonstrations, or partnership announcements are published here."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li
              key={category}
              className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm"
            >
              {category}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          title="Featured Updates"
          description="Official updates will appear here as they are approved for publication."
        />
        <div className="border border-dashed border-[var(--border)] px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-muted)]">
            No published updates yet
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--ink-muted)]">
            This space is ready for company announcements, technology concepts,
            and verified video features. Until content is approved, follow
            @spaavs on official channels.
          </p>
        </div>
      </Section>
    </>
  );
}
