import React from "react";
import Navbartabs from "@/components/navbar/NavbarTabs";
import { NavbarClient } from "@/components/navbar/NavbarClient";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container flex min-h-[100svh] max-w-sm flex-col rounded-3xl border-1 border-gray-100 shadow-xl">
      <NavbarClient />
      <div className="flex-1 overflow-auto">{children}</div>
      <Navbartabs />
    </main>
  );
};

export default Layout;
