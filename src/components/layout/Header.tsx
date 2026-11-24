"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SpaavsLogo } from "@/components/brand/SpaavsLogo";
import { SocialLinks } from "@/components/brand/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)/0.92] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <Link
            href="/"
            className="inline-flex min-w-0 shrink items-center"
            aria-label="SPAAVS home"
          >
            <SpaavsLogo
              height={32}
              priority
              className="inline-flex items-center"
              heightClassName="h-7 md:h-8"
            />
          </Link>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <SocialLinks size="sm" nowrap />
            <ButtonLink href="/facility-partners" size="sm">
              Become a Partner
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--ink)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <nav
          className="hidden flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] py-3 lg:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.72rem] uppercase tracking-[0.1em] transition-colors ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--ink)] hover:text-[var(--accent)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[var(--border)] bg-[var(--bg)] md:max-h-[calc(100dvh-4.25rem)] lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
          aria-label="Mobile"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-sm uppercase tracking-[0.12em] text-[var(--ink)] hover:bg-[var(--surface-soft)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-[var(--border)] pt-4">
            <ButtonLink href="/facility-partners">Become a Partner</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              Explore SPAAVS
            </ButtonLink>
            <SocialLinks />
          </div>
        </nav>
      </div>
    </header>
  );
}
