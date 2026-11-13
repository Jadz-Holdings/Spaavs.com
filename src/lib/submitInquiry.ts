import { siteConfig } from "@/lib/site";
import { mailboxAddress, type MailboxId } from "@/lib/mailboxes";

export type InquiryMailbox = MailboxId;

/**
 * Inquiry delivery for static Firebase Hosting via FormSubmit.
 * Destination mailboxes are decoded at request time, not rendered in HTML.
 */
export async function submitInquiry(
  payload: Record<string, unknown>,
  subject: string,
  mailbox: InquiryMailbox = "info",
): Promise<void> {
  const destination = mailboxAddress(mailbox);
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
