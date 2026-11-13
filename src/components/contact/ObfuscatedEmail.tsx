"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import {
  mailboxAddress,
  mailboxHref,
  type MailboxId,
} from "@/lib/mailboxes";
import { Button } from "@/components/ui/Button";

function subscribe() {
  return () => {};
}

function useClientMailbox(id: MailboxId) {
  return useSyncExternalStore(
    subscribe,
    () => mailboxAddress(id),
    () => null,
  );
}

export function ObfuscatedEmail({
  mailbox = "info",
  className = "",
}: {
  mailbox?: MailboxId;
  className?: string;
}) {
  const address = useClientMailbox(mailbox);

  if (!address) {
    return (
      <span className={className} aria-label="Email SPAAVS">
        Email SPAAVS
      </span>
    );
  }

  return (
    <a className={className} href={`mailto:${address}`}>
      {address}
    </a>
  );
}

export function ObfuscatedEmailButton({
  mailbox = "info",
  children = "Email SPAAVS",
  size = "sm",
  variant = "primary",
}: {
  mailbox?: MailboxId;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      onClick={() => {
        window.location.href = mailboxHref(mailbox);
      }}
    >
      {children}
    </Button>
  );
}
