import Link from "next/link";
import { EcosystemGraphic } from "@/components/brand/EcosystemGraphic";
import { SpaavsTagline } from "@/components/brand/SpaavsTagline";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

const audiences = [
  {
    title: "Drivers",
    body: "Discover and reserve parking in the SPAAVS Mobile App, verify access on arrival, and receive an indoor route to an assigned available bay. Voice assistance is designed to reduce manual phone use while driving.",
  },
  {
    title: "Parking Facility Operators",
    body: "Join the Four-Tier Facility Development Model at the appropriate capability level and upgrade as demand warrants.",
  },
  {
    title: "Vehicle-Service Providers",
    body: "Offer eligible charging, detailing, inspection, and maintenance coordination at participating facilities.",
  },
  {
    title: "Fleet & Mobility Operators",
    body: "Fleet operators use the SPAAVS Fleet Hub to coordinate authorized access, an assigned bay, charging, and readiness services. The vehicle controls its own motion.",
  },
];

const capabilities = [
  {
    title: "SPAAVS Smart Parking Facilities",
    body: "Parking discovery, reservations, digital payments, inventory coordination, and facility reporting.",
  },
  {
    title: "Integrated LiDAR and Camera Infrastructure",
    body: "Intelligent vehicle detection, license plate recognition, physical tracking, real-time parking availability, and indoor navigation.",
  },
  {
    title: "Vehicle Services",
    body: "Charging, detailing, inspections, and maintenance coordination at participating facilities.",
  },
  {
    title: "Intelligent Facility Access",
    body: "Entry is confirmed with the reservation and authorized credentials, and the arriving vehicle is matched to that visit.",
  },
  {
    title: "SPAAVS Fleet Hub",
    body: "Fleet coordination for authorized access, assigned bays, charging, and vehicle readiness.",
  },
  {
    title: "SPAAVS Autonomous-ready Facilities",
    body: "Authorized fleet interfaces for compatible vehicles. The manufacturer controls driving.",
  },
];

const layers = [
  "SPAAVS Mobile App",
  "SPAAVS AI Intelligence Layer",
  "Integrated LiDAR and Camera Infrastructure",
  "Intelligent Facility Access",
  "Real-Time Facility Intelligence",
  "SPAAVS Fleet Hub",
  "Autonomous Mobility Integration",
];

const commercial = [
  "Parking transaction fees",
  "Vehicle-service marketplace commissions",
  "EV charging coordination",
  "Fleet parking and readiness services",
  "SPAAVS Fleet Hub",
  "Commercial facility partnerships",
  "Autonomous mobility services as facilities upgrade",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 chrome-panel" aria-hidden />
        <div className="hero-grid absolute inset-0 opacity-70" aria-hidden />
        <div
          className="absolute inset-y-0 right-0 hidden w-[55%] bg-[url('/brand/hero-mobility.svg')] bg-cover bg-center md:block"
          style={{ maskImage: "linear-gradient(90deg, transparent, black 28%)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ backgroundImage: "var(--hero-veil)" }}
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-6xl flex-col px-5 pt-8 pb-10 sm:pt-10 sm:pb-12 md:px-8 md:pt-12 md:pb-14">
          <div className="max-w-3xl space-y-5 sm:space-y-7">
            <div className="reveal space-y-4 sm:space-y-5">
              <SpaavsTagline size="hero" align="left" asHeading />
              <div className="h-px w-16 bg-[var(--tiffany)] accent-line sm:w-24" />
            </div>
            <div className="reveal reveal-delay-1 space-y-3 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] sm:space-y-4 sm:text-lg">
              <p>
                SPAAVS is developing intelligent parking infrastructure designed
                to support human-driven vehicles, autonomous fleets, and
                integrated vehicle services.
              </p>
              <p>
                SPAAVS is a {siteConfig.parent} business. The strategy retrofits
                existing parking garages and facilities, connecting drivers,
                fleets, and vehicle services through Intelligent Mobility
                Infrastructure.
              </p>
            </div>
            <div className="reveal reveal-delay-2 flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:pt-0">
              <ButtonLink href="/about" size="lg">
                Explore SPAAVS
              </ButtonLink>
              <ButtonLink href="/facility-partners" variant="secondary" size="lg">
                Become a Facility Partner
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section paddingClass="pt-10 pb-0 md:pt-14 md:pb-0">
        <SectionHeader
          eyebrow="Infrastructure"
          title="Beyond Traditional Parking"
        />
        <div className="space-y-4 text-base leading-relaxed text-[var(--ink-muted)] md:space-y-5 md:text-lg">
          <p>
            Most garages and parking facilities provide only parking spaces,
            charging stations, or both. Beyond those conventional services, an
            existing facility can also support autonomous access, including
            unattended entry and exit, basic vehicle maintenance, and fleet
            readiness, without new garage construction.
          </p>
          <p>
            Partnering with SPAAVS lets a facility integrate fully with the
            SPAAVS Mobility Hub, in phases.
          </p>
          <p>
            Parking operators and property owners may join the SPAAVS network
            of connected facilities at the appropriate tier and upgrade as
            demand warrants.
          </p>
          <p>
            A vehicle from a fleet that subscribes to SPAAVS services may use
            another facility on the network when circumstances require it,
            typically in an emergency, such as when a reserved space is
            unavailable.
          </p>
          <p>
            Each facility includes a staffed SPAAVS Fleet Center. The center
            can check tire pressure and add air, complete a 360-degree visual
            inspection, provide basic lubrication when required, top off
            windshield-washer fluid, provide a car wash, and detail the
            interior.
          </p>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Ecosystem"
          title="One Connected Mobility Ecosystem"
          description="SPAAVS Mobile App, SPAAVS Fleet Hub, and the SPAAVS Mobility Hub link SPAAVS Smart Parking Facilities and SPAAVS Autonomous-ready Facilities."
        />
        <EcosystemGraphic />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--border)] bg-[var(--bg)] p-5 transition duration-300 hover:border-[var(--accent-border)]"
            >
              <h3 className="font-display text-xl text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Planned Capabilities"
          title="Core Platform Capabilities"
          description="Development-stage capabilities for Intelligent Mobility Infrastructure."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group border border-[var(--border)] p-5 transition duration-300 hover:border-[var(--accent-border)]"
            >
              <div className="mb-3 h-px w-10 bg-[var(--tiffany)] transition-all duration-300 group-hover:w-16" />
              <h3 className="font-display text-lg text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Business Model"
          title="Unlocking More Value From Existing Parking Infrastructure"
          description="The initial commercial opportunity is conventional parking, vehicle services, and facility partnerships. Autonomous mobility is a later expansion as facilities upgrade."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {commercial.map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--ink)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-relaxed text-[var(--ink-muted)]">
          Revenue is planned from eligible parking transactions, marketplace
          commissions, charging coordination, and fleet readiness services.
          Pricing is not published while the platform remains in development.
        </p>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Technology"
          title="Connected Infrastructure. Intelligent Operations."
          description="Planned layers of Intelligent Mobility Infrastructure. These capabilities are in development."
        />
        <div className="grid gap-3">
          {layers.map((layer, index) => (
            <div
              key={layer}
              className="flex items-center gap-4 border border-[var(--border)] px-4 py-4 md:px-6"
            >
              <span className="font-display text-sm text-[var(--tiffany)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm md:text-base">{layer}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <ButtonLink href="/solutions" variant="secondary">
            Explore Planned Solutions
          </ButtonLink>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="YouTube"
          title="Discover the Future of Mobility"
          description="Follow SPAAVS on YouTube for intelligent parking, vehicle services, EV charging, and autonomous mobility."
        />
        <ButtonLink
          href="https://www.youtube.com/@spaavs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch SPAAVS on YouTube
        </ButtonLink>
        <div className="mt-6 border border-[var(--border)] bg-[var(--bg)] p-6">
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 border border-[var(--border)] bg-[var(--surface-soft)] px-6 text-center">
              <span className="h-2 w-2 rounded-full bg-[var(--tiffany)]" />
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink)]">
                YouTube · {siteConfig.handle}
              </p>
              <p className="text-sm text-[var(--ink-muted)]">
                Official videos will appear here as they are published.
              </p>
            </div>
          </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Connect
            </p>
            <h2 className="font-display text-3xl text-[var(--ink)] md:text-4xl">
              Follow {siteConfig.handle}
            </h2>
            <p className="mt-4 text-base text-[var(--ink-muted)]">
              YouTube, Instagram, Facebook, TikTok, X, and LinkedIn.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Connect With SPAAVS</ButtonLink>
          <ButtonLink href="/facility-partners" variant="secondary">
            Become a Partner
          </ButtonLink>
          <Link
            href="/settings"
            className="self-center text-sm text-[var(--ink-muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
          >
            Theme settings
          </Link>
        </div>
      </Section>
    </>
  );
}
