/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import ActionCard from "@/app/components/cards/ActionCard";
import Hero from "@/app/components/image/Hero";
import React from "react";

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="flex -translate-y-[10%] flex-col gap-2">
        <ActionCard />
      </div>
    </div>
  );
};

export default Page;
