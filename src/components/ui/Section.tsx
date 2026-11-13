import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "default",
  paddingClass = "py-10 md:py-14",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "soft" | "contrast";
  /** Replaces the default vertical padding on the inner container. */
  paddingClass?: string;
}) {
  const toneClass =
    tone === "soft"
      ? "bg-[var(--surface-soft)]"
      : tone === "contrast"
        ? "bg-[var(--surface-contrast)] text-[var(--ink-on-contrast)]"
        : "bg-[var(--bg)]";

  return (
    <section id={id} className={`relative ${toneClass} ${className}`}>
      <div
        className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${paddingClass}`}
      >
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
  layout = "stack",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** `split` places the description beside the title on desktop. */
  layout?: "stack" | "split";
}) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "";
  const eyebrowEl = eyebrow ? (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
      {eyebrow}
    </p>
  ) : null;
  const titleEl = (
    <h2
      className={`font-display leading-tight text-[var(--ink)] ${
        layout === "split"
          ? "text-3xl md:text-4xl"
          : "text-3xl md:text-4xl lg:text-[2.75rem]"
      }`}
    >
      {title}
    </h2>
  );
  const descriptionEl = description ? (
    <p className="text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
      {description}
    </p>
  ) : null;

  if (layout === "split") {
    return (
      <div className={`mb-6 md:mb-8 ${alignClass}`}>
        {eyebrowEl}
        <div className="mt-2.5 flex flex-col gap-4 md:mt-3 md:flex-row md:items-start md:gap-10">
          <div className="md:max-w-xl md:shrink-0">{titleEl}</div>
          {descriptionEl}
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-6 flex max-w-3xl flex-col gap-2.5 md:mb-8 md:gap-3 ${alignClass}`}>
      {eyebrowEl}
      {titleEl}
      {descriptionEl ? <div className="max-w-2xl">{descriptionEl}</div> : null}
    </div>
  );
}
