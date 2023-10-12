"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/Primitives";
import { CameraIcon, GithubIcon, SunFilledIcon } from "@/components/Icons";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          <SunFilledIcon size={20} />
          Documentation
        </Link>

        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>

        <Button color="success" endContent={<CameraIcon />}>
          Take a photo
        </Button>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Sign Up For Free Now <Code color="primary">Be First</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
