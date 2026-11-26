import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Intelligent mobility infrastructure for existing parking facilities. See every vehicle, manage the visit, and coordinate parking, charging, and fleet readiness.",
};

const technology = [
  {
    title: "Integrated LiDAR and Camera Infrastructure",
    body: "As vehicles arrive, cameras and LiDAR systems installed at the facility send real-time data to the SPAAVS Mobility Hub. The hub knows which parking spaces are open and relays that information to each driver through the SPAAVS Mobile App, and to each autonomous vehicle through an API. Drivers and autonomous fleets can be guided to an available space, including through underground and multilevel garages where GPS stops working.",
  },
  {
    title: "Intelligent Facility Access",
    body: "A driver who reserved ahead is recognized on arrival and matched to that visit. Drivers may also arrive without a reservation when space is available and the facility allows it.",
  },
  {
    title: "Real-Time Facility Intelligence",
    body: "Operators see the garage as it operates: open spaces, vehicle movement, and how the facility is being used. That live picture keeps access, services, and fleet staging in step.",
  },
  {
    title: "Autonomous Mobility Integration",
    body: "An autonomous vehicle still drives itself. SPAAVS takes care of the stop: entry, an assigned bay, charging, and getting the vehicle ready to return to service.",
  },
];

const platform = [
  {
    title: "SPAAVS Mobile App",
    body: "Find a garage, see which services are offered, and choose whether to reserve parking, book a service, or both. Or simply arrive. The app is designed to take a hands-free voice request while driving, so the driver does not have to handle the phone. Inside, it leads you to your space and lets you follow a service until it is finished.",
  },
  {
    title: "SPAAVS Fleet Hub",
    body: "Commercial fleet operators use the SPAAVS Fleet Hub website to subscribe to SPAAVS services, pay for those services, and manage their autonomous vehicles. Every facility includes a SPAAVS Fleet Center, staffed by people on site.",
  },
  {
    title: "EV Charging and Vehicle Services",
    body: "A stop can be more than a parking space. Participating garages can charge a vehicle, detail it, inspect it, or arrange maintenance before it leaves.",
  },
  {
    title: "Digital Payments",
    body: "Parking and eligible services can be paid for as part of the same visit.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Solutions"
          title="Technology and Infrastructure"
          description="SPAAVS is designing Intelligent Mobility Infrastructure for existing parking facilities."
        />
        <div>
          {technology.map((item, index) => (
            <article
              key={item.title}
              className="border-t border-[var(--border)] py-5 md:py-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--tiffany)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          title="Platform Services"
          description="The SPAAVS Mobility Hub is the platform for the driver, the garage, the service provider, and the fleet."
        />
        <div>
          {platform.map((item) => (
            <article
              key={item.title}
              className="border-t border-[var(--border)] py-5 md:py-6"
            >
              <h2 className="font-display text-2xl text-[var(--ink)]">
                {item.title}
              </h2>
              <p className="mt-2.5 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href="/how-it-works">See How It Works</ButtonLink>
        </div>
      </Section>
    </>
  );
}
