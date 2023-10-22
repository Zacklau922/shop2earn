import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    const response = await supabase.auth.exchangeCodeForSession(code);

    if (response.error) {
      // Handle the error as you see fit
      return NextResponse.redirect(new URL(`/error`, req.url));
    }

    const user = response.data?.user;
    if (!user) {
      // Handle missing user data
      return NextResponse.redirect(new URL(`/error`, req.url));
    }

    // Fetch the profile's username and id based on the user ID
    const { data, error: profileError } = await supabase
      .from("profiles")
      .select("username, id")
      .eq("id", user.id)
      .single();

    if (profileError || !data) {
      // Handle the error or missing data as you see fit
      return NextResponse.redirect(new URL(`/error`, req.url));
    }

    // Use the username if available, otherwise use the id
    const redirectTo = data.username || data.id;

    return NextResponse.redirect(
      new URL(`/app/${redirectTo}/account`, req.url)
    );
  }

  // Handle the case where there's no code in the query parameters
  return NextResponse.redirect(new URL(`/error`, req.url));
}
