import { siteConfig } from "@/lib/site";

/**
 * Inquiry delivery for static Firebase Hosting.
 * Routes to FormSubmit → info@jadzholdings.com until App Hosting / CRM is live.
 */
export async function submitInquiry(
  payload: Record<string, unknown>,
  subject: string,
): Promise<void> {
  const res = await fetch(
    `https://formsubmit.co/ajax/${siteConfig.contact.email}`,
    {
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
    },
  );

  if (!res.ok) {
    throw new Error(`Inquiry submit failed (${res.status})`);
  }
}
