import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";
import NextLink from "next/link";
import { Logo } from "@/app/components/icons";

export const NavbarClient = () => {
  return (
    <NextUINavbar
      maxWidth="sm"
      position="sticky"
      className="mx-auto max-w-4xl rounded-2xl bg-slate-100 shadow-lg"
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
