import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Check for routes starting with /admin/
    if (req.nextUrl.pathname.startsWith("/app")) {
      return NextResponse.redirect(new URL("/signin-client", req.url));
    }

    // Check for routes starting with /admin/
    if (req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/signin-admin", req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/app/:path*", "/admin/:path*"],
};
