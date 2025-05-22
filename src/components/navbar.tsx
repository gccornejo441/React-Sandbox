import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, HeartFilledIcon, SearchIcon } from "@/components/icons";
import { FC } from "react";

export const Logo: FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 138.36 56.467"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("w-auto h-8 md:h-10", className)}
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Logo"
  >
    <path
      d="M713.48 134.684c0-70.243-64.097-134.34-134.328-134.34h-88.257l-54.036 112.383h136.145c11.418 0 21.07 9.664 21.07 21.074 0 11.418-9.652 21.07-21.07 21.07h-42.149c-71.996 0-129.058 57.07-129.058 129.067 0 71.996 57.062 129.066 129.058 129.066h180.391V300.621H536.125a15.74 15.74 0 0 1-15.809-15.805 15.74 15.74 0 0 1 15.809-15.804h43.027c75.5 0 134.328-58.824 134.328-134.328m135.184 165.937v-43.902h130.828V151.363H848.664V.343h-121.16v412.661h263.394V300.621ZM243.895 112.91l29.785 74.449 29.781-74.449ZM71.742.344h129.946l17.554 41.27h108.875L345.68.343h129.941L273.68 423.539zm39.75 112.566L55.75 0 0 112.91Zm906.148 282.004h1.78c1 0 4.05.106 4.05 3.57 0 3.571-2.79 3.625-4.31 3.625h-1.52zm6.51-10.605-6.14 8.98h-.37v-8.98h-1.79v19.425h3.26c4.14 0 6.19-1.421 6.19-5.304 0-3.254-2.15-4.301-3.36-4.774-1.21-.422-1.94-.367-1.94-.367l6.25-8.98zm-4.46 26.875c-8.93 0-16.22-7.45-16.22-16.477 0-9.031 7.34-16.434 16.22-16.434 8.86 0 16.22 7.403 16.22 16.434 0 9.027-7.31 16.477-16.22 16.477m0 1.578c9.97 0 17.99-8.086 17.99-18.055 0-9.922-8.02-18.008-17.99-18.008s-18.01 8.086-18.01 18.008c0 9.969 8.04 18.055 18.01 18.055"
      fill="currentColor"

      transform="matrix(.13333 0 0 -.13333 0 56.467)"
    />
  </svg>
);
export const Navbar = () => {
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
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo className="h-8 w-auto sm:h-10 text-[var(--color-secondary-light)] dark:text-white" />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
