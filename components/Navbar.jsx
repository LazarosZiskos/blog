"use client";
import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { ThemeChanger } from "./ThemeChanger";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="py-5">
      <div className="flex justify-around items-center text-center space-x-[100px] container">
        <div className="">
          <a href="/">
            <h1 className="font-bold text-xs sm:text-sm md:text-2xl md:tracking-wide uppercase">
              Lazaros's <span className="text-primary">Blog</span>
            </h1>
          </a>
        </div>
        <div>
          <ul className="space-x-5 font-semibold py-2 px-2 hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={
                  pathname === link.href ? "bg-[#F2F2F6] rounded-sm" : ""
                }
              >
                <li className="py-2 px-2 hover:bg-[#F2F2F6] rounded-sm leading-[19px] transition-all ease-out duration-500">
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* <div className=" justify-end hidden md:block">
          <ThemeChanger />
        </div> */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
