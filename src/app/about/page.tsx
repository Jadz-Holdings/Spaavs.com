import type { Metadata } from "next";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About SPAAVS",
  description:
    "SPAAVS is a smart parking and mobility technology venture within the Jadz Holdings LLC business portfolio, developing connected parking infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="About SPAAVS"
          title="Building the Infrastructure for Connected Mobility"
          description="SPAAVS is a smart parking and mobility technology venture within the Jadz Holdings LLC business portfolio."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            The company is developing a connected platform designed to bring
            together parking infrastructure, human drivers, vehicle-service
            providers, commercial fleets, and emerging mobility technologies.
          </p>
          <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            Its strategy centers on partnering with existing parking facilities
            to expand their commercial potential through intelligent digital
            services.
          </p>
        </div>
        <p className="mt-8 border border-[var(--border)] px-5 py-4 text-sm text-[var(--ink)]">
          SPAAVS is part of the {siteConfig.parent} business portfolio.
        </p>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Our Mission",
              body: "To modernize parking infrastructure by connecting facilities, vehicles, services, and mobility operators through intelligent technology.",
            },
            {
              title: "Our Vision",
              body: "To create a scalable network of connected mobility locations serving today's drivers and tomorrow's autonomous transportation systems.",
            },
            {
              title: "Our Approach",
              body: "Work with existing parking garages, shopping centers, residential parking facilities, commercial properties, and other suitable operators—introducing connected services in phases.",
            },
          ].map((item) => (
            <article key={item.title} className="border border-[var(--border)] bg-[var(--bg)] p-6">
              <h2 className="font-display text-xl text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
          By introducing connected services and technology in phases, SPAAVS aims
          to help participating facilities expand their capabilities without
          requiring every location to become a fully autonomous mobility hub.
        </p>
      </Section>

      <Section>
        <SectionHeader
          title="Official Profiles"
          description={`Connect with ${siteConfig.handle} across verified social channels as accounts are confirmed.`}
        />
        <SocialLinks />
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Contact SPAAVS</ButtonLink>
          <ButtonLink href="/facility-partners" variant="secondary">
            Partnership Opportunities
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
