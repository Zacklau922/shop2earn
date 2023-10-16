import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="m-auto max-w-7xl">{children}</main>;
};

export default Layout;
