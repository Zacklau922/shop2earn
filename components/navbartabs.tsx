"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";

const Navbartabs: React.FC = () => {
  return (
    <div className="fixed bottom-0 z-50 flex w-full items-center justify-center pb-3 pr-12 sm:hidden">
      <div className="flex flex-wrap gap-4">
        <Tabs
          aria-label="Options"
          color="primary"
          radius="full"
          variant="bordered"
          classNames={{
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-4",
          }}
        >
          <Tab
            key="home"
            title={
              <Link href="/home" passHref>
                <div className="flex cursor-pointer items-center space-x-2">
                  {/* <GalleryIcon/> */}
                  <span>Home</span>
                </div>
              </Link>
            }
          />
          <Tab
            key="menu"
            title={
              <Link href="/docs" passHref>
                <div className="flex cursor-pointer items-center space-x-2">
                  {/* <GalleryIcon/> */}
                  <span>Menu</span>
                </div>
              </Link>
            }
          />
          <Tab
            key="order"
            title={
              <Link href="/docs" passHref>
                <div className="flex cursor-pointer items-center space-x-2">
                  {/* <GalleryIcon/> */}
                  <span>Order</span>
                </div>
              </Link>
            }
          />
          <Tab
            key="reward"
            title={
              <Link href="/docs" passHref>
                <div className="flex cursor-pointer items-center space-x-2">
                  {/* <GalleryIcon/> */}
                  <span>Reward</span>
                </div>
              </Link>
            }
          />
          <Tab
            key="account"
            title={
              <Link href="/docs" passHref>
                <div className="flex cursor-pointer items-center space-x-2">
                  {/* <GalleryIcon/> */}
                  <span>Account</span>
                </div>
              </Link>
            }
          />
        </Tabs>
      </div>
    </div>
  );
};

export default Navbartabs;
