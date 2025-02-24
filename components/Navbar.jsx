import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container py-10">
      <div className="flex justify-evenly">
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
        <div>
          <button>Theme changer</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
