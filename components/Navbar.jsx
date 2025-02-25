"use client";
import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { ThemeChanger } from "./ThemeChanger";

const Navbar = () => {
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
          <ul className="flex space-x-20 font-semibold">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <li>{link.title}</li>
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
