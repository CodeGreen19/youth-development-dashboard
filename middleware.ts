import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(req: NextRequest, even: NextFetchEvent) {
  const token = req.cookies.get("branch_token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/branch/:path*"],
};
