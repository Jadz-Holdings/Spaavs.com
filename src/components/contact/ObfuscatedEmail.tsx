"use client";

import type { ReactNode } from "react";
import { mailboxHref, type MailboxId } from "@/lib/mailboxes";
import { Button } from "@/components/ui/Button";

/**
 * Opens the mailbox in the visitor's mail client.
 * The address is decoded only inside the click handler, so it is not written
 * into the HTML, the rendered text, or a mailto href that a crawler can read.
 */
function openMailbox(id: MailboxId) {
  window.location.href = mailboxHref(id);
}

export function ObfuscatedEmail({
  mailbox = "info",
  className = "",
  children = "Email SPAAVS",
}: {
  mailbox?: MailboxId;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`inline cursor-pointer border-0 bg-transparent p-0 text-left underline-offset-4 hover:underline ${className}`}
      onClick={() => openMailbox(mailbox)}
    >
      {children}
    </button>
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
      onClick={() => openMailbox(mailbox)}
    >
      {children}
    </Button>
  );
}
