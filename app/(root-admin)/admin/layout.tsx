import AdminMobileNavbar from "@/app/components/navbar/AdminMobileNavbar";
import AdminNavbar from "@/app/components/navbar/AdminNavbar";
import AdminSideNavbar from "@/app/components/navbar/AdminSideNavbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminNavbar />
      <div className="flex flex-1">
        <AdminSideNavbar />
        <main className="flex-1">{children}</main>
      </div>
      <AdminMobileNavbar />
    </div>
  );
};

export default Layout;
