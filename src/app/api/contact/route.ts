import { NextResponse } from "next/server";

type ContactPayload = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  category?: string;
  location?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const category = String(body.category || "").trim();

  if (!fullName || !email || !message || !category || !body.consent) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // CRM / email integration readiness — capture structured payload without
  // representing unconfigured integrations as active.
  const inquiry = {
    type: "contact",
    receivedAt: new Date().toISOString(),
    fullName,
    company: String(body.company || "").trim(),
    email,
    phone: String(body.phone || "").trim(),
    category,
    location: String(body.location || "").trim(),
    message,
  };

  console.info("[spaavs:inquiry]", JSON.stringify(inquiry));

  return NextResponse.json({
    ok: true,
    message: "Inquiry received",
  });
}
