import { NextResponse } from "next/server";

type PartnerPayload = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  facilityLocation?: string;
  facilityType?: string;
  capacity?: string;
  existingTech?: string;
  services?: string[];
  message?: string;
};

export async function POST(request: Request) {
  let body: PartnerPayload;

  try {
    body = (await request.json()) as PartnerPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = String(body.fullName || "").trim();
  const company = String(body.company || "").trim();
  const email = String(body.email || "").trim();
  const facilityLocation = String(body.facilityLocation || "").trim();
  const facilityType = String(body.facilityType || "").trim();

  if (!fullName || !company || !email || !facilityLocation || !facilityType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const inquiry = {
    type: "facility-partner",
    receivedAt: new Date().toISOString(),
    fullName,
    company,
    email,
    phone: String(body.phone || "").trim(),
    facilityLocation,
    facilityType,
    capacity: String(body.capacity || "").trim(),
    existingTech: String(body.existingTech || "").trim(),
    services: Array.isArray(body.services) ? body.services : [],
    message: String(body.message || "").trim(),
  };

  console.info("[spaavs:partner-inquiry]", JSON.stringify(inquiry));

  return NextResponse.json({ ok: true, message: "Partnership inquiry received" });
}
