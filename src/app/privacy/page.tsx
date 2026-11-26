import type { Metadata } from "next";
import { ObfuscatedEmail } from "@/components/contact/ObfuscatedEmail";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the SPAAVS corporate website.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How this website handles information you submit."
      />
      <div className="prose-spaavs space-y-6 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
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
          We do not sell personal information. Inquiry data is used to respond
          to your request and to evaluate partnership or media opportunities.
        </p>
        <p>
          This website does not collect live consumer payment credentials and
          does not process parking or service payments.
        </p>
        <p>
          You may contact us at{" "}
          <ObfuscatedEmail className="text-[var(--ink)] hover:text-[var(--accent)]" />{" "}
          or {siteConfig.contact.phone} for privacy-related requests.
        </p>
        <p>
          Mailing address: {siteConfig.contact.addressLines.join(", ")}.
        </p>
      </div>
    </Section>
  );
}
