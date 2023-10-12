import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/Theme-switch";
import { SearchIcon, Logo, GithubIcon } from "@/components/Icons";

export const NavbarClient = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-default-400 pointer-events-none shrink-0 text-base" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="md" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Shop Name</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:flex sm:basis-full" justify="end">
        <NavbarItem className="md:flex">
          <Button
            isExternal
            as={Link}
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
