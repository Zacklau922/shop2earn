"use client";

import React from "react";
import { Card, Image } from "@nextui-org/react";

const HomeCard = () => {
  return (
    <>
      <Card
        isPressable
        className="mx-auto flex h-[200px] w-11/12 max-w-2xl items-center justify-around overflow-hidden rounded-xl bg-white shadow-card"
      >
        <Image
          isBlurred
          shadow="none"
          loading="eager"
          radius="none"
          src="/11.jpg"
          alt="NextUI Album Cover"
          className=" h-full w-full object-cover"
        />
      </Card>
      <Card
        isPressable
        className="mx-auto flex h-[200px] w-11/12 max-w-2xl items-center justify-around overflow-hidden rounded-xl bg-white shadow-card"
      >
        <Image
          isBlurred
          shadow="none"
          loading="eager"
          radius="none"
          src="/9.jpg"
          alt="NextUI Album Cover"
          className=" h-full w-full object-cover"
        />
      </Card>
    </>
  );
};

export default HomeCard;
