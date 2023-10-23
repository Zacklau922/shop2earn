/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import ActionCard from "@/app/components/cards/ActionCard";
import HomeCard from "@/app/components/cards/HomeCard";
import MiniUserCard from "@/app/components/cards/MiniUserCard";
import Hero from "@/app/components/image/Hero";
import React from "react";

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="flex -translate-y-[10%] flex-col gap-2">
        <ActionCard />

        <MiniUserCard />

        <HomeCard />

        <HomeCard />
      </div>
    </div>
  );
};

export default Page;
