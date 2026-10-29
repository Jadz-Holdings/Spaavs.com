import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "soft" | "contrast";
}) {
  const toneClass =
    tone === "soft"
      ? "bg-[var(--surface-soft)]"
      : tone === "contrast"
        ? "bg-[var(--surface-contrast)] text-[var(--ink-on-contrast)]"
        : "bg-[var(--bg)]";

  return (
    <section id={id} className={`relative ${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 md:mb-14 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-[var(--ink)] md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
