import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-center gap-2">
        <div>
          <h1 className="font-bold text-2xl tracking-wide uppercase">
            Lazaros' Blog
          </h1>
        </div>
        <p>Thank you for reading my blog! Hope you had a great time!</p>
        <div>
          <ul className="flex gap-4 pt-2">
            <li className="w-[30px]">
              <button className="hover:scale-110">
                <img src="/github-sign.png" alt="github" />
              </button>
            </li>
            <li className="w-[30px]">
              <button className="hover:scale-110">
                <img src="/linkedin.png" alt="linkedIn" />
              </button>
            </li>
            <li className="w-[30px]">
              <button className="hover:scale-110">
                <img src="/facebook.png" alt="facebook" />
              </button>
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-400">© 2025 All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
