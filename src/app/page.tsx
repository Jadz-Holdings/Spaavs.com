import Link from "next/link";
import { SpaavsLogo } from "@/components/brand/SpaavsLogo";
import { SpaavsTagline } from "@/components/brand/SpaavsTagline";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteConfig } from "@/lib/site";

const audiences = [
  {
    title: "Drivers",
    body: "Discover parking, reserve eligible spaces, access participating vehicle services, and manage transactions through a streamlined digital experience.",
  },
  {
    title: "Parking Facility Operators",
    body: "Improve facility utilization, manage digital parking transactions, coordinate services, and explore new revenue opportunities.",
  },
  {
    title: "Vehicle-Service Providers",
    body: "Connect with participating parking facilities to provide eligible charging, cleaning, inspections, maintenance coordination, and other vehicle services.",
  },
  {
    title: "Fleet & Mobility Operators",
    body: "Explore coordinated parking, charging, servicing, vehicle readiness, reporting, and future autonomous mobility integrations.",
  },
];

const capabilities = [
  {
    title: "Smart Parking",
    body: "Parking discovery, availability information, reservations, and digital access workflows.",
  },
  {
    title: "EV Charging",
    body: "Charging discovery, availability coordination, and integration with compatible charging infrastructure.",
  },
  {
    title: "Vehicle Services",
    body: "A marketplace for selected cleaning, inspection, maintenance coordination, and vehicle-care services.",
  },
  {
    title: "Unified Billing",
    body: "A planned platform for parking transactions, eligible services, charging, and fleet-related billing.",
  },
  {
    title: "Facility & Fleet Integrations",
    body: "Connected facility systems, operational reporting, enterprise interfaces, and fleet-oriented workflows.",
  },
  {
    title: "Autonomous Infrastructure",
    body: "A phased roadmap for validated autonomous-ready parking locations and compatible mobility integrations.",
  },
];

const layers = [
  "Consumer Experience Layer",
  "Facility Integration Layer",
  "Vehicle-Service Layer",
  "Transaction Layer",
  "Fleet Integration Layer",
  "Autonomous Mobility Layer",
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

        <div className="relative mx-auto flex min-h-[calc(100vh-4.25rem)] max-w-6xl flex-col justify-center px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl space-y-8">
            <StatusBadge className="reveal" />
            <div className="reveal reveal-delay-1 space-y-5">
              <SpaavsLogo height={56} priority className="sm:hidden" />
              <SpaavsLogo height={72} priority className="hidden sm:inline-flex" />
              <SpaavsTagline size="hero" align="left" asHeading />
            </div>
            <div className="reveal reveal-delay-2 h-px w-24 bg-[var(--tiffany)] accent-line" />
            <div className="reveal reveal-delay-2 space-y-4 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
              <p>
                SPAAVS is developing a connected parking and mobility
                infrastructure platform designed to transform existing parking
                facilities into intelligent, revenue-generating service
                locations.
              </p>
              <p>
                By connecting drivers, parking operators, vehicle-service
                providers, and commercial fleets, SPAAVS aims to create a unified
                digital ecosystem for parking, vehicle services, and
                next-generation mobility.
              </p>
            </div>
            <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
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

      <Section>
        <SectionHeader
          eyebrow="Infrastructure"
          title="Beyond Traditional Parking."
          description="Parking facilities represent more than places to store vehicles. They are existing infrastructure assets with the potential to support digital transactions, charging, vehicle services, fleet operations, and emerging mobility technologies."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            SPAAVS aims to unlock this potential by connecting traditional
            parking facilities with intelligent software, service providers, and
            future autonomous-ready capabilities.
          </p>
          <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            Through partnerships with existing parking operators and property
            owners, SPAAVS intends to create new commercial opportunities while
            improving the convenience and utility of parking infrastructure.
          </p>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader
          eyebrow="Ecosystem"
          title="One Connected Mobility Ecosystem"
          description="A planned digital platform connecting the stakeholders that make parking and mobility infrastructure valuable."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--border)] bg-[var(--bg)] p-6 transition duration-300 hover:border-[var(--accent-border)]"
            >
              <h3 className="font-display text-xl text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] md:text-base">
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
          description="Development-stage capabilities designed to extend parking infrastructure into a broader mobility service network."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group border border-[var(--border)] p-6 transition duration-300 hover:border-[var(--accent-border)]"
            >
              <div className="mb-4 h-px w-10 bg-[var(--tiffany)] transition-all duration-300 group-hover:w-16" />
              <h3 className="font-display text-lg text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
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
          description="SPAAVS is developing a business model that extends beyond conventional parking transactions. Autonomous mobility represents a longer-term expansion opportunity rather than a prerequisite for the initial commercial model."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Parking transaction fees",
            "Facility software subscriptions",
            "Vehicle-service marketplace commissions",
            "EV charging coordination",
            "Fleet subscriptions",
            "Enterprise integrations",
            "Commercial facility partnerships",
            "Future autonomous mobility services",
          ].map((item) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--ink)]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
          The company&apos;s initial commercial opportunity centers on
          conventional parking, connected services, and facility partnerships.
          Pricing, volumes, and returns are not published while the platform
          remains in development.
        </p>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Technology"
          title="Connected Infrastructure. Intelligent Operations."
          description="A minimalist view of six planned technology layers. These are conceptual architecture targets—not completed production infrastructure."
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
        <div className="mt-8">
          <ButtonLink href="/solutions" variant="secondary">
            Explore Planned Solutions
          </ButtonLink>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader
              eyebrow="YouTube"
              title="Discover the Future of Mobility"
              description="Follow SPAAVS on YouTube as we explore intelligent parking, connected vehicle services, EV charging, autonomous mobility, and the transformation of traditional parking infrastructure."
            />
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Discover our vision, technology concepts, development updates, and
              the future of connected mobility. Featured videos can be curated
              through the Media & Updates workspace as official content becomes
              available.
            </p>
            <ButtonLink
              href="https://www.youtube.com/@spaavs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch SPAAVS on YouTube
            </ButtonLink>
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg)] p-6">
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 border border-[var(--border)] bg-[var(--surface-soft)] px-6 text-center">
              <span className="h-2 w-2 rounded-full bg-[var(--tiffany)]" />
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink)]">
                YouTube · {siteConfig.handle}
              </p>
              <p className="max-w-sm text-sm text-[var(--ink-muted)]">
                Official videos will be featured here after channel confirmation.
                No placeholder demos are shown.
              </p>
            </div>
            <p className="mt-3 text-xs text-[var(--ink-muted)]">
              Confirm the official YouTube URL for {siteConfig.handle} before
              publication.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Connect
            </p>
            <h2 className="font-display text-3xl text-[var(--ink)] md:text-4xl">
              Follow {siteConfig.handle}
            </h2>
            <p className="mt-4 text-base text-[var(--ink-muted)]">
              Official brand presence across YouTube, Instagram, Facebook,
              TikTok, X, and LinkedIn — subject to account verification.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
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
