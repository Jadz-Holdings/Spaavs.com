import type { Metadata } from "next";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Media & Updates",
  description:
    "Updates on SPAAVS intelligent parking, vehicle services, and autonomous mobility.",
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
  "Videos",
];

export default function MediaPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Media"
          title="SPAAVS Media & Updates"
          description="News and videos on intelligent parking, vehicle services, and autonomous mobility."
        />
        <div className="flex flex-wrap items-center gap-3">
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
        <SectionHeader title="Topics" />
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
          title="Updates"
          description="Official updates will appear here as they are published."
        />
        <div className="border border-[var(--border)] px-5 py-10 text-center md:py-12">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink-muted)]">
            No updates yet
          </p>
          <p className="mx-auto mt-2.5 max-w-lg text-sm leading-relaxed text-[var(--ink-muted)]">
            Follow @spaavs for company announcements.
          </p>
        </div>
      </Section>
    </>
  );
}
