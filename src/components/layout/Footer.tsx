import Link from "next/link";
import { siteConfig } from "@/lib/site";

/** Static copyright year — avoids prerender Date() under Cache Components. */
const COPYRIGHT_YEAR = 2026;

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {COPYRIGHT_YEAR} SPAAVS. A {siteConfig.parent} business.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
