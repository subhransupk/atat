"use client";

import { usePathname } from "next/navigation";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="z-50">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="/images/logo.png"
              alt="Adidev Tours And Travels"
              width={100}
              height={80}
              className="object-contain"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex basis-1/5 sm:basis-full" justify="end">
        <ul className="flex gap-4 justify-end">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "relative flex items-center gap-2 p-2 text-default-600 hover:text-primary transition-colors",
                  isActive(item.href) && "text-primary"
                )}
                href={item.href}
              >
                <span>{item.label}</span>
                <div
                  className={clsx(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                    isActive(item.href) ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
              className={clsx(
                "w-full text-default-600 hover:text-primary transition-colors",
                isActive(item.href) && "text-primary"
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
