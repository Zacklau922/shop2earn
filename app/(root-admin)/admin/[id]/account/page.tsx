import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies as getCookies } from "next/headers";
import { Database } from "@/types/supabase";
import AccountFormAdmin from "@/app/components/auth/AccountFormAdmin";

export default async function Account() {
  // Wrap the cookies in a function
  const cookies = () => getCookies();

  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AccountFormAdmin session={session} />;
}
