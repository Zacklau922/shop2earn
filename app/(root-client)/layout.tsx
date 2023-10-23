import React from "react";
import MobileNavbar from "../components/navbar/MobileNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col overflow-auto scrollbar-hide">
        <div className="mx-auto">{children}</div>
      </div>

      <MobileNavbar />
    </>
  );
};

export default Layout;
