import { title } from "@/app/components/primitives";
import Usercard from "@/app/components/cards/UserCard";

import React from "react";

const Page = () => {
  return (
    <>
      <h1 className={title()}>Good Morning!</h1>
      <Usercard />
    </>
  );
};

export default Page;
