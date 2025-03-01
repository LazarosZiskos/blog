"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>

        <SheetContent className="bg-white dark:bg-black">
          <SheetTitle className="font-bold text-black">
            <SheetClose asChild>
              <Link
                href="/"
                className="font-mono font-bold tracking-wide uppercase hover:text-gray-600 dark:hover:text-gray-100 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-10">
                  <h1 className="text-2xl pb-1">Debugging Life</h1>
                  <h3 className="font-mono text-sm text-primary">
                    Code, Family & Coffee
                  </h3>
                </div>
              </Link>
            </SheetClose>
          </SheetTitle>
          <div className="flex flex-col text-center">
            <ul className="space-x-20 font-semibold py-2 px-2 text-center pt-[100px]">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.id}>
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href ? "bg-[#F2F2F6] rounded-sm" : ""
                    }
                  >
                    <li className="py-2 px-2 hover:bg-[#F2F2F6] rounded-sm leading-[19px] transition-all ease-out duration-500">
                      {link.title}
                    </li>
                  </Link>
                </SheetClose>
              ))}
            </ul>
            <SheetClose asChild>
              <div className="flex items-center justify-center mt-10">
                <ThemeToggle />
              </div>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
