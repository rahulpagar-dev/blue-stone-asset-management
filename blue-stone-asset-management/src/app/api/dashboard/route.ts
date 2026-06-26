import { NextRequest, NextResponse } from "next/server";
import { getUserFromSession, getDashboardPayload } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("bsam-session")?.value;
  const user = getUserFromSession(token);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(getDashboardPayload(user));
}
