import React from "react";
import Navbartabs from "@/components/navbar/NavbarTabs";
import { NavbarClient } from "@/components/navbar/NavbarClient";
import MobileNavbar from "@/components/navbar/MobileNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto max-w-7xl grow pb-16">
      <NavbarClient />
      {children}
      {/* <MobileNavbar /> */}
      <Navbartabs />
    </main>
  );
};

export default Layout;
