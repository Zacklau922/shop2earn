import React from "react";

export default function RewardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen flex-col items-center p-3">
      <div className="inline-block justify-center text-center">{children}</div>
    </section>
  );
}
