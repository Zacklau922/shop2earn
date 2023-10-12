import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 z-50 flex w-full max-w-screen-xl items-center justify-center pb-6">
      <Tabs defaultValue="Home" className="w-[420px]">
        <TabsList className="">
          <TabsTrigger value="home">
            <Link href={"/home"}>Home</Link>
          </TabsTrigger>

          <TabsTrigger value="menu">
            <Link href={"/menu"}>Menu</Link>
          </TabsTrigger>

          <TabsTrigger value="order">
            <Link href={"/order"}>Order</Link>
          </TabsTrigger>

          <TabsTrigger value="reward">
            <Link href={"/reward"}>Reward</Link>
          </TabsTrigger>

          <TabsTrigger value="account">
            <Link href={"/account"}>Account</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MobileNavbar;
