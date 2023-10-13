import React from "react";
import Navbartabs from "@/components/navbar/NavbarTabs";
import { NavbarClient } from "@/components/navbar/NavbarClient";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container relative flex min-h-[100svh] max-w-md flex-col overflow-hidden rounded-3xl border-1 border-gray-100 py-3 shadow-xl scrollbar-hide">
      <NavbarClient />
      <div className="flex-1 overflow-auto scrollbar-hide">
        {children}
        {children}
        {children}
        {children}
      </div>
      <Navbartabs />
    </main>
  );
};

export default Layout;
