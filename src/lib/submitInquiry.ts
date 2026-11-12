import { siteConfig } from "@/lib/site";

export type InquiryMailbox = "info" | "sales";

function resolveDestination(mailbox: InquiryMailbox = "info"): string {
  return mailbox === "sales"
    ? siteConfig.contact.salesEmail
    : siteConfig.contact.email;
}

/**
 * Inquiry delivery for static Firebase Hosting via FormSubmit.
 * - General / media inquiries → info@spaavs.com
 * - Product, service, and partnership inquiries → sales@spaavs.com
 */
export async function submitInquiry(
  payload: Record<string, unknown>,
  subject: string,
  mailbox: InquiryMailbox = "info",
): Promise<void> {
  const destination = resolveDestination(mailbox);
  const res = await fetch(`https://formsubmit.co/ajax/${destination}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      _subject: subject,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!res.ok) {
    throw new Error(`Inquiry submit failed (${res.status})`);
  }
}

export function mailboxForInquiryCategory(category: string): InquiryMailbox {
  return (siteConfig.salesInquiryCategories as readonly string[]).includes(
    category,
  )
    ? "sales"
    : "info";
}
