import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy policy for the SPAAVS corporate website.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Draft for review. This is not final counsel-approved legal advice."
      />
      <div className="prose-spaavs max-w-3xl space-y-6 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
        <p>
          This corporate website is operated by SPAAVS, a {siteConfig.parent}{" "}
          business. The site provides information about a platform that is{" "}
          {siteConfig.status.toLowerCase()}.
        </p>
        <p>
          When you submit an inquiry form, we collect the information you
          provide (such as name, company, email, phone, location, and message)
          to respond to your request and evaluate partnership or media
          opportunities.
        </p>
        <p>
          We do not sell personal information. Inquiry data may be processed
          using future email or CRM systems once configured. Unconfigured
          integrations are not represented as active.
        </p>
        <p>
          This website does not collect live consumer payment credentials and
          does not process parking or service payments.
        </p>
        <p>
          You may contact us at{" "}
          <a
            className="text-[var(--ink)] hover:text-[var(--accent)]"
            href={siteConfig.contact.emailHref}
          >
            {siteConfig.contact.email}
          </a>{" "}
          or {siteConfig.contact.phone} for privacy-related requests.
        </p>
        <p>
          Mailing address: {siteConfig.contact.addressLines.join(", ")}.{" "}
          {siteConfig.contact.addressNote}
        </p>
      </div>
    </Section>
  );
}
