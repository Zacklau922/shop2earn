import React from "react";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen flex-col items-center p-3">
      <div className="m-auto inline-block justify-center text-center">
        {children}
      </div>
    </section>
  );
}
