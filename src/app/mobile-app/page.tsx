import type { Metadata } from "next";
import { IosAppFrame } from "@/components/brand/IosAppFrame";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "SPAAVS Mobile App",
  description:
    "AI in the SPAAVS Mobile App accepts a hands-free service request so a driver can keep both hands on the wheel and both eyes on the road.",
};

const aiUses = [
  {
    title: "Hands-free service request",
    body: "The driver speaks the request. Charging, detailing, an inspection, or maintenance can be added to the visit without looking at or holding the phone.",
  },
  {
    title: "Spoken indoor guidance",
    body: "Cameras and LiDAR at the facility tell the SPAAVS Mobility Hub which space is open. The app speaks the route through the garage, where GPS stops working. The phone does not need its own LiDAR.",
  },
  {
    title: "A visit announced on arrival",
    body: "The app tells the driver the vehicle has been matched to the visit. Entry is still confirmed with the reservation and authorized credentials.",
  },
  {
    title: "The screen waits until the car is parked",
    body: "Bay, charging, service progress, and payment stay on the screen for when the vehicle is stopped. A request can also be made at the facility, or booked ahead.",
  },
  {
    title: "A facility chosen before the trip",
    body: "Before the driver sets off, the app can suggest a participating facility with an open space and the service they asked for. Reservations remain optional.",
  },
];

export default function MobileAppPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="SPAAVS Mobile App"
              title="Hands-free help while the driver stays on the road"
              description="AI in the SPAAVS Mobile App accepts a service request by voice, so the driver can keep both hands on the wheel and both eyes on the road."
            />
            <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
              Use the app only when it is safe to do so. The hands-free request
              is there so the driver does not manually operate the phone while
              driving. Services stay optional, and a driver may also request
              them at the facility.
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
        <SectionHeader
          title="How AI improves the drive"
          description="The app assists the driver. It does not drive the vehicle. The manufacturer of an autonomous vehicle remains in control of driving."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {aiUses.map((item) => (
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
    </>
  );
}
