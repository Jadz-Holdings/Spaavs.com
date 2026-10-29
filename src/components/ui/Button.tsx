import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary:
    "border-[var(--accent-border)] bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-fg)] hover:border-[var(--btn-hover-border)]",
  secondary:
    "border-[var(--border)] bg-transparent text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--ink)]",
  ghost:
    "border-transparent bg-transparent text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-transparent",
};

const sizeClass: Record<Size, string> = {
  sm: "px-3.5 py-2 text-xs tracking-[0.08em]",
  md: "px-5 py-2.5 text-sm tracking-[0.1em]",
  lg: "px-6 py-3 text-sm tracking-[0.12em]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md border transition-colors duration-300 ease-out uppercase font-medium disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <button
      className={`${base} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
