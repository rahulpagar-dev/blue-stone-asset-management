import { NextResponse } from "next/server";
import { findUserByEmail } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? "").trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const user = findUserByEmail(email);

  if (!user) {
    // Do not disclose whether the user exists.
    return NextResponse.json({ success: true, message: "If the email exists, password reset instructions have been sent." });
  }

  return NextResponse.json({ success: true, message: "If the email exists, password reset instructions have been sent." });
}
