import type { Metadata } from "next";
import { IosAppFrame } from "@/components/brand/IosAppFrame";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "SPAAVS Mobile App",
  description:
    "The SPAAVS Mobile App is designed to help drivers find parking, navigate participating facilities, and coordinate vehicle services with less need to handle the phone.",
};

const sections = [
  {
    title: "Your hands-free parking assistant",
    body: "Ask for parking near a destination, compare participating facilities, request charging or detailing, reserve a space, or check service status using natural language. The assistant is designed to coordinate an authorized request in the background, without the driver moving through multiple screens. Reservations and service appointments are optional. Services may also be requested directly at participating facilities.",
  },
  {
    title: "Predictive intelligence for a smoother journey",
    body: "Real-time facility data and historical occupancy patterns are designed to support parking recommendations and arrival-time availability estimates. With permission, the assistant can use preferences, destination, and supported calendar or vehicle information to anticipate parking and charging needs. Predictions are estimates, not guaranteed availability.",
  },
  {
    title: "Indoor navigation beyond conventional GPS",
    body: "Facility-based LiDAR, cameras, and indoor mapping support step-by-step guidance to an assigned space or service bay. Route guidance is designed to follow verified facility conditions, not directions invented by the model. Spoken guidance helps reduce the need to look at the screen. The phone does not need its own LiDAR.",
  },
  {
    title: "Service coordination and vehicle retrieval",
    body: "Request available charging, detailing, and inspections, follow service progress, locate a parked vehicle, and receive departure guidance. Where supported, the assistant can speak a short update on charging completion, parking expiry, and service readiness. Complex choices, payment setup, and distracting notifications wait until the vehicle is parked.",
  },
];

const requests = [
  "Find parking near my destination with EV charging.",
  "Reserve an available space for my arrival.",
  "Request detailing while I am parked.",
  "Is my vehicle finished charging?",
  "Where is my parked vehicle?",
];

export default function MobileAppPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="SPAAVS Mobile App"
              title="Intelligent parking. Less distraction."
              description="The SPAAVS Mobile App is designed to help drivers find parking, navigate participating facilities, and coordinate vehicle services with less need to interact with their phones. Voice assistance and predictive intelligence are designed to simplify the journey from discovery to departure."
            />
            <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
              Hands-free interaction is designed to reduce manual phone use. It
              does not eliminate distraction, and drivers remain responsible
              for safe driving. The app assists the driver. It does not drive
              the vehicle.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/how-it-works">See the driver journey</ButtonLink>
              <ButtonLink href="/solutions" variant="secondary">
                Review Solutions
              </ButtonLink>
            </div>
          </div>
          <IosAppFrame />
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--border)] bg-[var(--bg)] p-5"
            >
              <h2 className="font-display text-xl text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Designed with driver safety in mind"
          description="Hands-free interaction and predictive assistance are designed to reduce manual phone interaction and unnecessary decisions while driving. Spoken responses stay brief. Complex choices, payment setup, and distracting notifications wait until the vehicle is safely parked."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-[var(--ink)]">
              Example voice requests
            </h2>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-[var(--ink-muted)]">
              {requests.map((request) => (
                <li key={request} className="border-t border-[var(--border)] py-2">
                  “{request}”
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-[var(--ink)]">
              A request carried through in the background
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              The assistant is designed to understand the request, check
              availability with the SPAAVS Mobility Hub, and ask before any
              charge is made. It speaks a result only after the platform has
              confirmed it. A paid or consequential request waits for the
              driver’s explicit authorization. If the facility data is missing
              or out of date, the app says so.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
