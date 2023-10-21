import React from "react";

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen flex-col items-center py-4">
      <div className="inline-block justify-center text-center">{children}</div>
    </section>
  );
}
