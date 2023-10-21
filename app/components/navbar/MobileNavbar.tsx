"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Database } from "../../../types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  GiftIcon,
  HistoryIcon,
  HomeIcon,
  MenuIcon,
  Settings2Icon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [username, setUsername] = useState<string | null>(null);
  const supabase = createClientComponentClient<Database>();
  const currentPath = usePathname();

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
    <div className="mx-auto">
      <Separator orientation="horizontal" />

      <div className="flex">
        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/home") ? "text-blue-500" : "text-slate-400"
          }`}
          href={`/app/${username}/home`}
          passHref
        >
          <HomeIcon />
          <span className="text-xs font-medium">Home</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/menu") ? "text-blue-500" : "text-slate-400"
          }`}
          href={`/app/${username}/menu`}
          passHref
        >
          <MenuIcon />
          <span className="text-xs font-medium">Menu</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/order") ? "text-blue-500" : "text-slate-400"
          }`}
          href={`/app/${username}/order`}
          passHref
        >
          <HistoryIcon />
          <span className="text-xs font-medium">Order</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center border-r-1 px-6 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/reward") ? "text-blue-500" : "text-slate-400"
          }`}
          href={`/app/${username}/reward`}
          passHref
        >
          <GiftIcon />
          <span className="text-xs font-medium">Reward</span>
        </Link>

        <Link
          className={`flex w-1/5 flex-col items-center border-l-1 px-5 py-2 sm:px-10 md:px-14 ${
            currentPath.includes("/account")
              ? "text-blue-500"
              : "text-slate-400"
          }`}
          href={`/app/${username}/account`}
          passHref
        >
          <Settings2Icon />
          <span className="text-xs font-medium">Account</span>
        </Link>
      </div>
      <Separator orientation="horizontal" />
    </div>
  );
};

export default MobileNavbar;

// import React, { useState, useEffect } from "react";
// import { Database } from "../../../types/supabase";
// import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// import Link from "next/link";
// import {
//   GiftIcon,
//   HistoryIcon,
//   HomeIcon,
//   MenuIcon,
//   Settings2Icon,
// } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { Separator } from "@/components/ui/separator";

// const MobileNavbar = () => {
//   const [username, setUsername] = useState<string | null>(null);
//   const currentPath = usePathname();
//   const segments = currentPath.split("/");
//   const tabKey = segments[segments.length - 1]; // This assumes the last segment is the tabKey

//   const supabase = createClientComponentClient<Database>();
//   useEffect(() => {
//     async function fetchUsername() {
//       const { data } = await supabase.auth.getSession();

//       if (data && data.session) {
//         const { user } = data.session;

//         if (user) {
//           const profile = await supabase
//             .from("profiles")
//             .select("username")
//             .eq("id", user.id)
//             .single();

//           if (profile.data) {
//             setUsername(profile.data.username);
//           }
//         }
//       }
//     }

//     fetchUsername();
//   }, [supabase]);
//   return (
//     <div className=" mx-auto items-center justify-center">
//       <Separator orientation="horizontal" />
//       <Tabs defaultValue={tabKey}>
//         <TabsList className="flex items-center justify-center  bg-slate-100 ">
//           <TabsTrigger value="home" className="px-5 py-1 sm:px-10 md:px-14">
//             <Link href={`/app/${username}/home`} passHref>
//               <div className=" flex flex-col items-center">
//                 <HomeIcon />
//                 <span className="text-xs font-medium ">Home</span>
//               </div>
//             </Link>
//           </TabsTrigger>

//           <TabsTrigger value="menu" className="px-6 py-1 sm:px-10 md:px-14">
//             <Link href={`/app/${username}/menu`} passHref>
//               <div className=" flex flex-col items-center">
//                 <MenuIcon />
//                 <span className="text-xs font-medium">Menu</span>
//               </div>
//             </Link>
//           </TabsTrigger>

//           <TabsTrigger value="order" className="px-6 py-1 sm:px-10 md:px-14">
//             <Link href={`/app/${username}/order`} passHref>
//               <div className=" flex flex-col items-center">
//                 <HistoryIcon />
//                 <span className="text-xs font-medium">Order</span>
//               </div>
//             </Link>
//           </TabsTrigger>

//           <TabsTrigger value="reward" className="px-5 py-1 sm:px-10 md:px-14">
//             <Link href={`/app/${username}/reward`} passHref>
//               <div className=" flex flex-col items-center">
//                 <GiftIcon />
//                 <span className="text-xs font-medium">Reward</span>
//               </div>
//             </Link>
//           </TabsTrigger>

//           <TabsTrigger value="account" className="px-4 py-1 sm:px-10 md:px-14">
//             <Link href={`/app/${username}/account`} passHref>
//               <div className=" flex flex-col items-center">
//                 <Settings2Icon />
//                 <span className="text-xs font-medium">Account</span>
//               </div>
//             </Link>
//           </TabsTrigger>
//         </TabsList>
//       </Tabs>
//     </div>
//   );
// };

// export default MobileNavbar;
