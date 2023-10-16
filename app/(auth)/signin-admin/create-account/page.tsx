import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import AccountFormAdmin from "@/app/components/auth/AccountFormAdmin";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log(session);

  return <AccountFormAdmin session={session} />;
}
