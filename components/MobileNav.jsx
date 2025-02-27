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
import { ThemeChanger } from "./ThemeChanger";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>

        <SheetContent className="bg-white">
          <SheetTitle className="font-bold text-black">
            <SheetClose asChild>
              <Link href="/">Lazaros' Blog</Link>
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
            {/* <SheetClose asChild>
              <div className="w-full mx-auto mt-[40px]">
                <ThemeChanger />
              </div>
            </SheetClose> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
