"use client";
import React, { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../types/supabase";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import {
  HomeIcon,
  DocumentIcon,
  OrderIcon,
  RewardIcon,
  AccountIcon,
} from "@/app/components/icons";
import { usePathname } from "next/navigation";
import { TabsTrigger } from "../ui/tabs";

const Navbartabs: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const currentPath = usePathname();
  const segments = currentPath.split("/");
  const tabKey = segments[segments.length - 1]; // This assumes the last segment is the tabKey
  const supabase = createClientComponentClient<Database>();
  useEffect(() => {
    async function fetchUsername() {
      const { data } = await supabase.auth.getSession();

      if (data && data.session) {
        const { user } = data.session;

        if (user) {
          const profile = await supabase
            .from("profiles")
            .select("username")
            .eq("id", user.id)
            .single();

          if (profile.data) {
            setUsername(profile.data.username);
          }
        }
      }
    }

    fetchUsername();
  }, [supabase]);

  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-center rounded-2xl border-1 bg-slate-100 py-2 shadow-sm">
      <Tabs
        selectedKey={tabKey}
        aria-label="Options"
        color="primary"
        size="lg"
        radius="lg"
        variant="solid"
        classNames={{
          cursor: "w-full max-w-md mx-auto ",
          tab: "flex-1 text-center py-2",
        }}
      >
        <Link href={`/app/${username}/home`} passHref>
          <div className="flex-1">
            <TabsTrigger value={tabKey}>
              <div className="flex cursor-pointer flex-col items-center px-0">
                <HomeIcon />
                <span className="text-xs font-medium">Home</span>
              </div>
            </TabsTrigger>
          </div>
        </Link>

        <Link href={`/app/${username}/menu`} passHref>
          <Tab
            key="menu"
            title={
              <div className="flex cursor-pointer flex-col items-center px-0">
                <DocumentIcon />
                <span className="text-xs font-medium">Menu</span>
              </div>
            }
          />
        </Link>
        <Tab
          key="order"
          title={
            <Link href={`/app/${username}/order`} passHref>
              <div className="flex cursor-pointer flex-col items-center px-0">
                <OrderIcon />
                <span className="text-xs font-medium">Order</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="reward"
          title={
            <Link href={`/app/${username}/reward`} passHref>
              <div className="flex cursor-pointer flex-col items-center px-0">
                <RewardIcon size={20} />
                <span className="text-xs font-medium">Reward</span>
              </div>
            </Link>
          }
        />
        <Tab
          key="account"
          title={
            <Link href={`/app/${username}/account`} passHref>
              <div className="flex cursor-pointer flex-col items-center px-0">
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
