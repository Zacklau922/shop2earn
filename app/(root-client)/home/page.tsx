import { title } from "@/components/primitives";
import Usercard from "@/components/cards/UserCard";

import React from "react";

const Page = () => {
  return (
    <>
      <h1 className={title()}></h1>
      <Usercard />
    </>
  );
};

export default Page;
