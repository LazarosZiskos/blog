import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-center gap-2 pb-10">
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

        <p className="text-center">
          Thank you for reading my blog! Hope you had a great time!
        </p>
        <div>
          <ul className="flex gap-4 pt-2">
            <li className="w-[30px]">
              <Link
                href="https://github.com/LazarosZiskos"
                target="blank"
                className="hover:scale-110 dark:invert"
              >
                <img src="/github-sign.png" alt="github" />
              </Link>
            </li>
            <li className="w-[30px]">
              <Link
                href="https://www.linkedin.com/in/lazaros-ziskos/"
                target="blank"
                className="hover:scale-110 dark:invert"
              >
                <img src="/linkedin.png" alt="linkedIn" />
              </Link>
            </li>
            <li className="w-[30px]">
              <Link
                href="https://www.facebook.com/lazaros.ziskos"
                target="blank"
                className="hover:scale-110 dark:invert"
              >
                <img src="/facebook.png" alt="facebook" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-400">
          © 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
