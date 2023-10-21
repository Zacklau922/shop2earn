"use client";
import { Image } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import React from "react";

const Hero = () => {
  return (
    <ScrollShadow
      isEnabled
      hideScrollBar
      offset={-100}
      className="w-full max-w-2xl overflow-hidden"
    >
      <Image
        isBlurred
        shadow="none"
        loading="eager"
        radius="none"
        sizes="lg"
        src="/10.jpg"
        alt="NextUI Album Cover"
        className=" w-full max-w-2xl "
      />
    </ScrollShadow>
  );
};

export default Hero;
