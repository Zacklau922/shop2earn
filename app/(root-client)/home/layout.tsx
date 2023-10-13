import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center py-4 ">
      <div className="inline-block max-w-lg justify-center text-center">
        {children}
      </div>
    </section>
  );
}
