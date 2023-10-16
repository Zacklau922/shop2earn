import React from "react";
import { NavbarClient } from "@/app/components/navbar/NavbarClient";
import Navbartabs from "@/app/components/navbar/NavbarTabs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container flex max-w-md flex-col overflow-hidden rounded-3xl border-1 border-gray-100 bg-slate-100 shadow-2xl supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
      <NavbarClient />
      <div className="flex-1 overflow-auto scrollbar-hide">{children}</div>
      <Navbartabs />
    </main>
  );
};

export default Layout;
