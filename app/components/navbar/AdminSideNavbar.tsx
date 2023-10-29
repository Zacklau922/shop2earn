"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../types/supabase";
import {
  LayoutDashboardIcon,
  MailOpenIcon,
  PercentIcon,
  Settings2Icon,
  TagIcon,
  UserIcon,
} from "lucide-react";

const AdminSideNavbar = () => {
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
    <div className="hidden h-screen w-60 flex-col bg-white shadow-lg lg:flex">
      <div className="flex h-full flex-col justify-between">
        <div>
          {/* Branding */}
          <div className="px-4 py-6 text-xl">
            <p className="font-bold text-inherit">Shop2Earn</p>
          </div>

          {/* Menu Items */}
          <div>
            <Link
              className={`flex items-center gap-2 px-5 py-2 ${
                currentPath.includes("/dashboard")
                  ? "text-blue-500"
                  : "text-slate-400"
              }`}
              href={`/admin/${username}/dashboard`}
              passHref
            >
              <LayoutDashboardIcon size={18} />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>

            <Link
              className={`flex items-center gap-2 px-5 py-2  ${
                currentPath.includes("/order")
                  ? "text-blue-500"
                  : "text-slate-400"
              }`}
              href={`/admin/${username}/order`}
              passHref
            >
              {/* <ListOrderedIcon size={18} /> */}
              <MailOpenIcon size={18} />
              <span className="text-sm font-medium">Orders</span>
            </Link>

            <Link
              className={`flex items-center gap-2 px-5 py-2  ${
                currentPath.includes("/product")
                  ? "text-blue-500"
                  : "text-slate-400"
              }`}
              href={`/admin/${username}/product`}
              passHref
            >
              {/* <ListOrderedIcon size={18} /> */}
              <TagIcon size={18} />
              <span className="text-sm font-medium">Product</span>
            </Link>

            <Link
              className={`flex items-center gap-2 px-5 py-3 ${
                currentPath.includes("/customer")
                  ? "text-blue-500"
                  : "text-slate-400"
              }`}
              href={`/admin/${username}/customer`}
              passHref
            >
              <UserIcon size={18} />
              <span className="text-sm font-medium">Customer</span>
            </Link>

            <Link
              className={`flex items-center gap-2 px-5 py-3 ${
                currentPath.includes("/marketing")
                  ? "text-blue-500"
                  : "text-slate-400"
              }`}
              href={`/admin/${username}/marketing`}
              passHref
            >
              <PercentIcon size={18} />
              <span className="text-sm font-medium">Marketing</span>
            </Link>

            <Link
              className={`flex items-center gap-2 px-5 py-3 ${
                currentPath.includes("/account")
                  ? "text-blue-500"
                  : "text-slate-400"
              }`}
              href={`/admin/${username}/account`}
              passHref
            >
              <Settings2Icon size={18} />
              <span className="text-sm font-medium">Account</span>
            </Link>
          </div>
        </div>
        {/* Bottom Section, e.g. Log Out */}
        <div className="p-4">
          <Link
            href="#"
            className="flex items-center rounded-2xl border-1 p-4 hover:bg-gray-100"
          >
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSideNavbar;
