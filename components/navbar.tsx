"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const MotionNavbarItem = motion(NavbarItem);

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <NextUINavbar 
      maxWidth="xl" 
      position="sticky"
      className="bg-white/70 backdrop-blur-md border-b border-slate-100 z-50"
      height="5rem"
    >
      <NavbarContent className="basis-1/5 sm:basis-1/3" justify="start">
        <NavbarBrand as="li" className="gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/logo.png"
                alt="Adidev Tours And Travels"
                width={100}
                height={80}
                className="object-contain"
              />
            </motion.div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-2/3" justify="end">
        {navigationItems.map((item, index) => (
          <MotionNavbarItem 
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              color="foreground"
              href={item.href}
              className={`relative font-medium text-base group ${
                isActive(item.href) 
                  ? "text-[#fe5041]" 
                  : "text-[#202b71] hover:text-[#fe5041]"
              } px-4`}
            >
              {item.name}
              <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#fe5041] transition-transform duration-200 ease-out ${
                isActive(item.href) 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
          </MotionNavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle className="text-[#202b71]" />
      </NavbarContent>

      <NavbarMenu className="bg-white/70 backdrop-blur-md pt-6">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <NavbarMenuItem>
              <Link
                color="foreground"
                className={`w-full text-xl font-medium ${
                  isActive(item.href)
                    ? "text-[#fe5041]"
                    : "text-[#202b71] hover:text-[#fe5041]"
                }`}
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          </motion.div>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
