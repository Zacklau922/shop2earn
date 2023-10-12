import React from "react";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex max-h-10 flex-col items-center justify-center gap-4 py-8">
      <div className="inline-block max-w-lg justify-center text-center">
        {children}
      </div>
    </section>
  );
}
