import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="m-auto flex max-w-7xl flex-col rounded-xl border-1 shadow-lg">
      {children}
    </main>
  );
};

export default Layout;
