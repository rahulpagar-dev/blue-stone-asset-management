import { NextResponse } from "next/server";
import { verifyUser, createSession } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "").trim();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const user = verifyUser(email, password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = createSession(user);
  const response = NextResponse.json({ success: true, user: { firstName: user.firstName, email: user.email } });

  response.cookies.set("bsam-session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
