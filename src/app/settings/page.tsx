"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { themes, type ThemeId } from "@/lib/site";
import { useTheme } from "@/lib/theme";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <Section>
      <SectionHeader
        eyebrow="Settings"
        title="Theme Settings"
        description="Choose a premium chrome theme. The SPAAVS wordmark keeps its Tiffany Blue/Green dots in every theme."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {themes.map((option) => {
          const active = theme === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setTheme(option.id as ThemeId)}
              className={`border p-5 text-left transition ${
                active
                  ? "border-[var(--accent-border)] bg-[var(--surface-soft)]"
                  : "border-[var(--border)] hover:border-[var(--accent-border)]"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                {active ? "Active" : "Select"}
              </p>
              <h2 className="mt-3 font-display text-xl text-[var(--ink)]">
                {option.label}
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
