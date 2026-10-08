import { NextResponse } from "next/server";
// Lead intake. Validates input and is ready for storage.
// To store in Firestore later: add firebase-admin (server only), write to `leads`, and keep creds in env vars.
const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid" }, { status: 400 }); }
  const name = clean(b.name, 100), phone = clean(b.phone, 30), email = clean(b.email, 120);
  if (!name || !/^[+\d][\d\s-]{6,}$/.test(phone) || (email && !/^\S+@\S+\.\S+$/.test(email))) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  const lead = { name, phone, email, municipality: clean(b.municipality), tariffPerKwh: Number(b.tariffPerKwh) || 0, usedNationalAverage: b.usedNationalAverage === true, monthlyBill: Number(b.monthlyBill) || 0, targetOffset: Number(b.targetOffset) || 0, calculatorResult: b.calculatorResult ?? null, createdAt: new Date().toISOString() };
  console.log("[lead]", lead); // TODO: persist (Firestore) + rate limit
  return NextResponse.json({ ok: true });
}
