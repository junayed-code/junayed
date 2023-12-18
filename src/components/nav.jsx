"use client";

import Image from "next/image";
import Link from "next/link";
import logoImage from "@/images/logo.svg";
import { useState } from "react";

export default function Nav() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(prev => {
      if (!prev) {
        document.body.classList.add("sm:pr-[17px]");
        document.documentElement.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("sm:pr-[17px]");
        document.documentElement.classList.remove("overflow-hidden");
      }
      return !prev;
    });
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-xl z-50">
      <nav className="flex items-center justify-between px-5 py-4 md:max-w-4xl lg:max-w-[1110px] mx-auto">
        <div>
          <Link href="/">
            <Image
              src={logoImage}
              alt="Logo image"
              width={42}
              height={42}
              priority
            />
          </Link>
        </div>

        <div>
          {/* Nav manu toggle button */}
          <div
            onClick={handleToggleMenu}
            className={"nav-barger md:hidden z-40".concat(
              isOpenMenu ? " open sm:pr-[17px]" : ""
            )}
          >
            <span></span>
            <span></span>
          </div>

          <div
            className={"absolute inset-0 w-full h-screen bg-slate-900/70".concat(
              !isOpenMenu ? " invisible opacity-0 pointer-events-none" : ""
            )}
          ></div>

          {/* Nav manu items */}
          <ul
            className={"fixed top-0 right-0 h-screen md:h-auto w-80 md:w-auto bg-slate-900 md:bg-transparent md:static flex flex-col md:flex-row items-center gap-7 font-medium p-6 pt-28 md:pt-0 md:p-0 z-20 md:translate-x-0 duration-200".concat(
              isOpenMenu ? " translate-x-0" : " translate-x-full"
            )}
          >
            <li>
              <Link
                onClick={handleToggleMenu}
                href="#experience"
                className="hover:text-emerald-400"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                onClick={handleToggleMenu}
                href="#projects"
                className="hover:text-emerald-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={handleToggleMenu}
                href="#contact"
                className="hover:text-emerald-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={handleToggleMenu}
                href="/resume.pdf"
                target="_blank"
                className="inline-block text-emerald-400 border border-emerald-400 px-3 py-1 hover:shadow-[2.5px_2.5px_rgb(52,211,153)] hover:-translate-x-0.5 hover:-translate-y-0.5 duration-200"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
