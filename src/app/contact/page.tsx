import type { Metadata } from "next";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ContactForm } from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with SPAAVS about facility partnerships, fleet services, EV charging, vehicle services, and connected mobility opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Contact"
          title="Connect With SPAAVS"
          description="Interested in becoming a facility partner, exploring fleet services, integrating vehicle-service solutions, or discussing connected mobility opportunities? SPAAVS welcomes inquiries from parking operators, property owners, technology providers, commercial fleets, and strategic partners."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6 border border-[var(--border)] p-6">
            <div>
              <h2 className="font-display text-xl text-[var(--ink)]">
                {siteConfig.legalName}
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                A {siteConfig.parent} business
              </p>
            </div>
            <p className="text-sm text-[var(--ink-muted)]">
              Phone:{" "}
              <a
                className="text-[var(--ink)] hover:text-[var(--accent)]"
                href={siteConfig.contact.phoneHref}
              >
                {siteConfig.contact.phone}
              </a>
            </p>
            <p className="text-sm text-[var(--ink-muted)]">
              Email:{" "}
              <a
                className="text-[var(--ink)] hover:text-[var(--accent)]"
                href={siteConfig.contact.emailHref}
              >
                {siteConfig.contact.email}
              </a>
            </p>
            <div className="text-sm leading-relaxed text-[var(--ink-muted)]">
              <p className="mb-1 text-[var(--ink)]">Mailing address</p>
              {siteConfig.contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="mt-2 text-xs">{siteConfig.contact.addressNote}</p>
            </div>

            <div className="space-y-3 border-t border-[var(--border)] pt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Contact actions
              </p>
              <div className="flex flex-wrap gap-2">
                <ButtonLink href={siteConfig.contact.emailHref} size="sm">
                  Email SPAAVS
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.contact.phoneHref}
                  variant="secondary"
                  size="sm"
                >
                  Call SPAAVS
                </ButtonLink>
                <ButtonLink
                  href="/facility-partners"
                  variant="secondary"
                  size="sm"
                >
                  Become a Facility Partner
                </ButtonLink>
              </div>
              <div>
                <p className="mb-2 text-sm text-[var(--ink-muted)]">
                  Follow {siteConfig.handle}
                </p>
                <SocialLinks />
              </div>
              <ButtonLink
                href="https://www.youtube.com/@spaavs"
                variant="ghost"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch SPAAVS on YouTube
              </ButtonLink>
            </div>
          </aside>

          <div className="border border-[var(--border)] p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl text-[var(--ink)]">
              Send an Inquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
