"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const field =
  "w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--accent)]";

const interests = [
  "Parking discovery and reservations",
  "Facility inventory coordination",
  "Digital transaction management",
  "EV charging integration",
  "Vehicle-service marketplace",
  "Fleet-oriented parking services",
  "Operational reporting",
  "Technology integrations",
  "Future autonomous-ready capabilities",
];

export function PartnerForm() {
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
      setMessage("Thank you. Your partnership inquiry has been received.");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          facilityLocation: data.get("facilityLocation"),
          facilityType: data.get("facilityType"),
          capacity: data.get("capacity"),
          existingTech: data.get("existingTech"),
          services: data.getAll("services"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setMessage(
        "Thank you. Your facility partnership inquiry has been received.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "We could not send your inquiry right now. Please email info@jadzholdings.com.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Full name</span>
          <input className={field} name="fullName" required />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Company</span>
          <input className={field} name="company" required />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Email</span>
          <input className={field} type="email" name="email" required />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Phone</span>
          <input className={field} type="tel" name="phone" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">
            Facility location
          </span>
          <input className={field} name="facilityLocation" required />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">Facility type</span>
          <select className={field} name="facilityType" required defaultValue="">
            <option value="" disabled>
              Select facility type
            </option>
            {siteConfig.facilityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">
            Approximate parking capacity
          </span>
          <input className={field} name="capacity" />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[var(--ink-muted)]">
            Existing parking technology
          </span>
          <input className={field} name="existingTech" />
        </label>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm text-[var(--ink-muted)]">
          Services of interest
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {interests.map((interest) => (
            <label
              key={interest}
              className="flex items-start gap-2 text-sm text-[var(--ink)]"
            >
              <input
                type="checkbox"
                name="services"
                value={interest}
                className="mt-1 accent-[var(--tiffany)]"
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm">
        <span className="mb-1.5 block text-[var(--ink-muted)]">Message</span>
        <textarea className={field} name="message" rows={4} />
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
        {status === "loading" ? "Sending…" : "Become a Facility Partner"}
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
