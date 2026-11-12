"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import {
  mailboxForInquiryCategory,
  submitInquiry,
} from "@/lib/submitInquiry";

const field =
  "w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)]";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website") || "").trim()) {
      setStatus("success");
      setMessage("Thank you. Your inquiry has been received.");
      form.reset();
      return;
    }

    const category = String(data.get("category") || "").trim();
    const mailbox = mailboxForInquiryCategory(category);
    const fallbackEmail =
      mailbox === "sales"
        ? siteConfig.contact.salesEmail
        : siteConfig.contact.email;

    try {
      await submitInquiry(
        {
          fullName: data.get("fullName"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          category,
          location: data.get("location"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
        },
        `SPAAVS contact inquiry — ${category || "General"}`,
        mailbox,
      );

      setStatus("success");
      setMessage(
        "Thank you. Your inquiry has been received and will be routed to the SPAAVS team.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `We could not send your inquiry right now. Please email ${fallbackEmail} or try again.`,
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Full name</span>
          <input className={field} name="fullName" required autoComplete="name" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Company name</span>
          <input className={field} name="company" autoComplete="organization" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Email address</span>
          <input
            className={field}
            type="email"
            name="email"
            required
            autoComplete="email"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Phone number</span>
          <input className={field} type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">
            Inquiry category
          </span>
          <select className={field} name="category" required defaultValue="">
            <option value="" disabled>
              Select a category
            </option>
            {siteConfig.inquiryCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Location</span>
          <input className={field} name="location" />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block text-[var(--ink-muted)]">Message</span>
        <textarea className={field} name="message" rows={5} required />
      </label>

      <label className="flex items-start gap-3 text-sm text-[var(--ink-muted)]">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 accent-[var(--tiffany)]"
        />
        <span>
          I agree to be contacted about this inquiry and understand SPAAVS is in
          development.
        </span>
      </label>

      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Inquiry"}
      </Button>

      {message ? (
        <p
          role="status"
          className={`text-sm ${status === "error" ? "text-red-700" : "text-[var(--tiffany-dark)]"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
