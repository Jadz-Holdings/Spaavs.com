import { siteConfig } from "@/lib/site";

export function StatusBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border border-[var(--accent-border)] bg-[var(--surface-soft)] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)] ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--tiffany)]" aria-hidden />
      {siteConfig.status}
    </span>
  );
}
