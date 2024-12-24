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
import { useState } from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Desktop Header
  const DesktopHeader = () => (
    <NextUINavbar 
      maxWidth="xl" 
      position="sticky" 
      className="z-50 hidden lg:flex"
    >
      <NavbarContent>
        <NavbarBrand>
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

      <NavbarContent className="gap-4" justify="end">
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
      </NavbarContent>
    </NextUINavbar>
  );

  // Mobile Header
  const MobileHeader = () => (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white overflow-x-hidden">
      <div className="w-screen">
        <NextUINavbar 
          maxWidth="xl"
          position="static"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="h-[72px] min-h-[72px]"
        >
          <NavbarContent className="h-[72px] min-h-[72px]">
            <NavbarBrand>
              <NextLink href="/" className="flex items-center gap-1">
                <Image
                  src="/images/logo.png"
                  alt="Adidev Tours And Travels"
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </NextLink>
            </NavbarBrand>
            <div className="flex items-center gap-4 ml-auto">
              <a 
                href="tel:9437077773"
                className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Now</span>
              </a>
              <NavbarMenuToggle 
                className="text-default-500"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </div>
          </NavbarContent>

          <NavbarMenu className="pt-6 top-[72px]">
            {siteConfig.navItems.map((item) => (
              <NavbarMenuItem key={item.href}>
                <NextLink
                  href={item.href}
                  className={clsx(
                    "w-full flex items-center py-3 px-4 rounded-xl transition-colors",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{item.label}</span>
                </NextLink>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
              <div className="px-4 py-6 border-t mt-4">
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <p className="font-medium text-gray-900">Contact Us</p>
                  <a href="tel:9437077773" className="hover:text-primary">
                    +91 9437077773
                  </a>
                  <a href="mailto:adidevtourstravels@gmail.com" className="hover:text-primary">
                    adidevtourstravels@gmail.com
                  </a>
                </div>
              </div>
            </NavbarMenuItem>
          </NavbarMenu>
        </NextUINavbar>
      </div>
    </div>
  );

  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div className="pt-[72px] lg:pt-0" /> {/* Padding for fixed header, only on mobile */}
    </>
  );
}
