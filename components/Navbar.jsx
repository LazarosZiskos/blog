"use client";
import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { ThemeChanger } from "./ThemeChanger";

const Navbar = () => {
  return (
    <nav className="container py-10">
      <div className="flex justify-evenly items-center text-center">
        <div>
          <h1 className="text-primary font-bold text-2xl tracking-wider">
            Lazaros' Blog
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10 font-semibold">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        <ThemeChanger />
      </div>
    </nav>
  );
};

export default Navbar;
