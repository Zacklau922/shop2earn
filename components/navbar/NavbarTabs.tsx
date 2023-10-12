"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import {
  HomeIcon,
  DocumentIcon,
  OrderIcon,
  RewardIcon,
  AccountIcon,
} from "@/components/Icons";

const Navbartabs: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Tabs
        aria-label="Options"
        color="primary"
        size="lg"
        radius="lg"
        variant="solid"
        classNames={{
          cursor: "w-full max-w-md mx-auto",
          tab: "flex-1 text-center py-2",
        }}
      >
        <Tab
          key="home"
          title={
            <Link href="/home" passHref>
              <div className="flex cursor-pointer flex-col items-center px-2">
                <HomeIcon />
                <span className="text-xs font-medium">Home</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="menu"
          title={
            <Link href="/menu" passHref>
              <div className="flex cursor-pointer flex-col items-center px-2">
                <DocumentIcon />
                <span className="text-xs font-medium">Menu</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="order"
          title={
            <Link href="/order" passHref>
              <div className="flex cursor-pointer flex-col items-center px-2">
                <OrderIcon />
                <span className="text-xs font-medium">Order</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="reward"
          title={
            <Link href="/reward" passHref>
              <div className="flex cursor-pointer flex-col items-center px-2">
                <RewardIcon size={20} />
                <span className="text-xs font-medium">Reward</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="account"
          title={
            <Link href="/account" passHref>
              <div className="flex cursor-pointer flex-col items-center px-2">
                <AccountIcon size={20} />
                <span className="text-xs font-medium">Account</span>
              </div>
            </Link>
          }
        />
      </Tabs>
    </div>
  );
};

export default Navbartabs;
