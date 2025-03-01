"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="grid grid-cols-3 items-center text-center space-x-[100px] container py-5">
        <div>
          <Link
            href="/"
            className="font-mono font-bold tracking-wide uppercase hover:text-gray-600 dark:hover:text-gray-100 transition-colors"
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl pb-1">Debugging Life |</h1>
              <h3 className="font-mono text-primary">Code, Family & Coffee</h3>
            </div>
          </Link>
        </div>
        <div className="">
          <ul className="space-x-5 font-semibold py-2 px-2 hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={
                  pathname === link.href
                    ? "bg-[#F2F2F6] dark:text-black rounded-sm"
                    : ""
                }
              >
                <li className="py-2 px-2 hover:bg-[#F2F2F6] dark:hover:text-black rounded-sm leading-[19px] transition-all ease-out duration-500">
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="justify-end hidden md:block">
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
