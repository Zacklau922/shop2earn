import { Navbar } from "@/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
