"use client";
import React, { useState, useEffect } from "react";
import { Link } from "@nextui-org/link";
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
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";

export default function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
    <>
      {/* Top Navigation Bar */}
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        height={`5rem`}
        isBlurred
        className="lg:hidden"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">Shop2Earn</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="default" href="#" variant="flat">
              Log In / Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <Link
            className={`flex items-center gap-3 p-2 hover:rounded-2xl hover:bg-slate-100 ${
              currentPath.includes("/dashboard")
                ? "text-blue-500"
                : "text-slate-400"
            }`}
            href={`/admin/${username}/dashboard`}
          >
            <LayoutDashboardIcon size={18} />
            <span className="text-lg font-medium">Dashboard</span>
          </Link>

          <Link
            className={`flex items-center gap-3 p-2 hover:rounded-2xl hover:bg-slate-100 ${
              currentPath.includes("/order")
                ? "text-blue-500"
                : "text-slate-400"
            }`}
            href={`/admin/${username}/order`}
          >
            {/* <ListOrderedIcon size={18} /> */}
            <MailOpenIcon size={18} />
            <span className="text-lg font-medium">Orders</span>
          </Link>

          <Link
            className={`flex items-center gap-3 p-2 hover:rounded-2xl hover:bg-slate-100 ${
              currentPath.includes("/product")
                ? "text-blue-500"
                : "text-slate-400"
            }`}
            href={`/admin/${username}/product`}
          >
            {/* <ListOrderedIcon size={18} /> */}
            <TagIcon size={18} />
            <span className="text-lg font-medium">Product</span>
          </Link>

          <Link
            className={`flex items-center gap-3 p-2 hover:rounded-2xl hover:bg-slate-100 ${
              currentPath.includes("/customer")
                ? "text-blue-500"
                : "text-slate-400"
            }`}
            href={`/admin/${username}/customer`}
          >
            <UserIcon size={18} />
            <span className="text-lg font-medium">Customer</span>
          </Link>

          <Link
            className={`flex items-center gap-3 p-2 hover:rounded-2xl hover:bg-slate-100 ${
              currentPath.includes("/marketing")
                ? "text-blue-500"
                : "text-slate-400"
            }`}
            href={`/admin/${username}/marketing`}
          >
            <PercentIcon size={18} />
            <span className="text-lg font-medium">Marketing</span>
          </Link>

          <Link
            className={`flex items-center gap-3 p-2 hover:rounded-2xl hover:bg-slate-100 ${
              currentPath.includes("/account")
                ? "text-blue-500"
                : "text-slate-400"
            }`}
            href={`/admin/${username}/account`}
          >
            <Settings2Icon size={18} />
            <span className="text-lg font-medium">Account</span>
          </Link>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
