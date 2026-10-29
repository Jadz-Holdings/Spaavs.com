import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Draft terms of use for the SPAAVS corporate website.",
};

export default function TermsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="Draft for review. This is not final counsel-approved legal advice."
      />
      <div className="max-w-3xl space-y-6 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
        <p>
          By using this website, you agree to these draft terms. The site
          provides general corporate information about SPAAVS and planned
          platform capabilities.
        </p>
        <p>
          SPAAVS is {siteConfig.status.toLowerCase()}. Descriptions of
          solutions, workflows, facility tiers, and autonomous mobility
          capabilities are forward-looking and may change. Nothing on this site
          constitutes an offer of services, a partnership commitment, or a
          guarantee of availability.
        </p>
        <p>
          All SPAAVS branding, including the wordmark and Tiffany accent marks,
          is proprietary. You may not copy or misuse brand assets without
          permission.
        </p>
        <p>
          Content is provided without warranties of completeness or fitness for
          a particular purpose. To the fullest extent permitted by law,{" "}
          {siteConfig.parent} and SPAAVS disclaim liability for damages arising
          from use of this informational site.
        </p>
        <p>
          Questions:{" "}
          <a
            className="text-[var(--ink)] hover:text-[var(--accent)]"
            href={siteConfig.contact.emailHref}
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
