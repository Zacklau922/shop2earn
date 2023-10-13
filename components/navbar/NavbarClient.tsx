import {
  Navbar as NextUINavbar,
  NavbarContent,
  // NavbarItem,
} from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
// import { Link } from "@nextui-org/link";
// import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { Logo } from "@/components/icons";

export const NavbarClient = () => {
  return (
    <NextUINavbar
      maxWidth="sm"
      position="sticky"
      className="mt-2 rounded-2xl border-2 bg-slate-100 py-1 shadow-xl"
    >
      <NavbarContent
        className="basis-1/5 sm:flex sm:basis-full"
        justify="start"
      >
        <NextLink className="flex items-center" href="/">
          <Logo />
          <p className="font-bold text-inherit">Happy Store</p>
        </NextLink>
      </NavbarContent>

      {/* <NavbarContent className="basis-1/5 sm:flex sm:basis-full" justify="end">
        <NavbarItem className="md:flex">
          <Button
            isExternal
            as={Link}
            href={siteConfig.links.discord}
            variant="flat"
          >
            3
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </NextUINavbar>
  );
};
