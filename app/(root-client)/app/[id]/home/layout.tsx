import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen flex-col items-center">
      <div className="inline-block justify-center text-center">{children}</div>
    </section>
  );
}
