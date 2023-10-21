"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/app/components/primitives";
import { SunFilledIcon } from "@/app/components/icons";

export default function Home() {
  return (
    <section className="my-auto flex flex-col items-center justify-center gap-4 px-4 py-8">
      <div className="inline-block max-w-lg justify-center text-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>Store that customer will</h1>
        <h1 className={title({ color: "violet" })}>&nbsp;fall in love</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful & Modern Web App for Every Business
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          as={NextLink}
          href={"/signin-admin"}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          <SunFilledIcon size={20} />
          Sign Up Now
          <SunFilledIcon size={20} />
        </Link>
      </div>
    </section>
  );
}
