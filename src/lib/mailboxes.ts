export type MailboxId = "info" | "sales";

/** XOR+base64 tokens — never store plaintext mailbox addresses in shipped HTML. */
const TOKENS: Record<MailboxId, string> = {
  info: "MgYT7c/v2deipq7ElGt8",
  sales: "KAkZ5/zc2saisauZ2Wd+cw==",
};

const XOR_KEY = 91;

export function mailboxAddress(id: MailboxId): string {
  const binary = atob(TOKENS[id]);
  return Array.from(binary, (ch, i) =>
    String.fromCharCode(ch.charCodeAt(0) ^ ((XOR_KEY + i * 13) % 256)),
  ).join("");
}

export function mailboxHref(id: MailboxId): string {
  return `mailto:${mailboxAddress(id)}`;
}
