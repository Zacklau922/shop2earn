"use client";
import Loading from "@/app/components/loading";
import React, { useState, useEffect } from "react";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch or some async operation
    // You can replace this with an actual API call or data fetching logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // This will simulate a 1-second loading time. Adjust as needed.

    // Clean up the timeout if the component is unmounted before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex h-screen flex-col items-center p-3">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="inline-block justify-center text-center">
          {children}
        </div>
      )}
    </section>
  );
}
