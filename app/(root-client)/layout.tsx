import { Navbar } from "@/components/navbar";
import React from "react";
import Navbartabs from "@/components/navbartabs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto max-w-7xl grow px-6">
      <Navbar />
      {children}
      <Navbartabs />
    </main>
  );
};

export default Layout;
