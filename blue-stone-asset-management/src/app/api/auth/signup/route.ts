import { NextResponse } from "next/server";
import { findUserByEmail, createUser, createSession } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "").trim();

  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (findUserByEmail(email)) {
    return NextResponse.json({ error: "A user with this email already exists." }, { status: 409 });
  }

  const user = createUser(firstName, lastName, email, password);
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
