"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Database } from "../../../types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  PercentIcon,
  Settings2Icon,
  UserIcon,
} from "lucide-react";
import { Separator } from "@/app/components/ui/separator";
import { usePathname } from "next/navigation";

const AdminMobileNavbar = () => {
  const [username, setUsername] = useState<string | null>(null);
  const supabase = createClientComponentClient<Database>();
  const currentPath = usePathname();

  useEffect(() => {
    async function fetchUsername() {
      const { data } = await supabase.auth.getSession();

      if (data && data.session) {
        const { user } = data.session;

        if (user) {
          const profile = await supabase
            .from("profiles")
            .select("username")
            .eq("id", user.id)
            .single();

          if (profile.data) {
            setUsername(profile.data.username);
          }
        }
      }
    }

    fetchUsername();
  }, [supabase]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-10 mx-auto max-w-2xl bg-white lg:hidden">
      <Separator orientation="horizontal" />

      <div className="flex">
        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 active:bg-white sm:px-10 md:px-14 ${
            currentPath.includes("/dashboard")
              ? "text-blue-500"
              : "text-slate-400"
          }`}
          href={`/admin/${username}/dashboard`}
          passHref
        >
          <LayoutDashboardIcon />
          <span className="text-xs font-medium">Dashboard</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/order") ? "text-blue-500" : "text-slate-400"
          }`}
          href={`/admin/${username}/order`}
          passHref
        >
          <ListOrderedIcon />
          <span className="text-xs font-medium">Order</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/customer")
              ? "text-blue-500"
              : "text-slate-400"
          }`}
          href={`/admin/${username}/customer`}
          passHref
        >
          <UserIcon />
          <span className="text-xs font-medium">Customer</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/marketing")
              ? "text-blue-500"
              : "text-slate-400"
          }`}
          href={`/admin/${username}/marketing`}
          passHref
        >
          <PercentIcon />
          <span className="text-xs font-medium">Marketing</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center px-5 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/account")
              ? "text-blue-500"
              : "text-slate-400"
          }`}
          href={`/admin/${username}/account`}
          passHref
        >
          <Settings2Icon />
          <span className="text-xs font-medium">Account</span>
        </Link>
      </div>
      <Separator orientation="horizontal" />
    </div>
  );
};

export default AdminMobileNavbar;
