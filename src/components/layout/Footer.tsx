import Link from "next/link";
import { SpaavsLogo } from "@/components/brand/SpaavsLogo";
import { SpaavsTagline } from "@/components/brand/SpaavsTagline";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { siteConfig } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/settings", label: "Theme Settings" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-16">
        <div className="space-y-5">
          <SpaavsLogo height={34} />
          <p className="text-sm text-[var(--ink-muted)]">
            {siteConfig.descriptor}
          </p>
          <SpaavsTagline size="sm" align="left" />
          <p className="text-sm text-[var(--ink-muted)]">
            A {siteConfig.parent} business
          </p>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tiffany)]" />
            {siteConfig.status}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)]">
            Navigate
          </p>
          <ul className="space-y-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--ink)]">
            Contact
          </p>
          <p className="text-sm text-[var(--ink-muted)]">
            Phone:{" "}
            <a
              href={siteConfig.contact.phoneHref}
              className="text-[var(--ink)] hover:text-[var(--accent)]"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
          <p className="text-sm text-[var(--ink-muted)]">
            Email:{" "}
            <a
              href={siteConfig.contact.emailHref}
              className="text-[var(--ink)] hover:text-[var(--accent)]"
            >
              {siteConfig.contact.email}
            </a>
          </p>
          <div className="text-sm leading-relaxed text-[var(--ink-muted)]">
            <p>Mailing address:</p>
            {siteConfig.contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="mt-2 text-xs opacity-80">
              {siteConfig.contact.addressNote}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Follow {siteConfig.handle}
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-[var(--ink-muted)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} SPAAVS. A {siteConfig.parent} business.
          </p>
          <p>Connected parking and mobility infrastructure — in development.</p>
        </div>
      </div>
    </footer>
  );
}
