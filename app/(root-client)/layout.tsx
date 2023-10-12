import React from "react";
import Navbartabs from "@/components/navbar/NavbarTabs";
import { NavbarClient } from "@/components/navbar/NavbarClient";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container my-12 flex h-screen max-w-md flex-col rounded-3xl border-0 border-gray-300 shadow-2xl ">
      <NavbarClient />
      <div className="flex-1 overflow-auto">{children}</div>
      <Navbartabs />
    </main>
  );
};

export default Layout;
