"use client";
import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { ThemeChanger } from "./ThemeChanger";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="py-5">
      <div className="flex justify-evenly items-center text-center">
        <div>
          <a href="/">
            <h1 className="font-bold text-2xl tracking-wide uppercase">
              Lazaros' Blog
            </h1>
          </a>
        </div>
        <div>
          <ul className="flex space-x-20 font-semibold py-2 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={pathname === link.href && "bg-[#F2F2F6] rounded-sm"}
              >
                <li className="py-2 px-2 hover:bg-[#F2F2F6] rounded-sm leading-[19px] transition-all ease-out duration-500">
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex justify-end">
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
