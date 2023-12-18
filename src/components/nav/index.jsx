"use client";

import Image from "next/image";
import Link from "next/link";
import logoImage from "@/images/logo.svg";
import NavItems from "./navItems";

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

          {/* Nav desktom menu items */}
          <NavItems className="hidden md:flex items-center gap-7 font-medium" />
          {/* Nav mobile manu items */}
          <NavItems
            className={"md:hidden fixed top-0 right-0 h-screen w-80 bg-slate-900 flex flex-col items-center gap-7 font-medium p-6 pt-28  z-20 duration-200".concat(
              isOpenMenu ? " translate-x-0" : " translate-x-full"
            )}
            onClick={handleToggleMenu}
          />
        </div>
      </nav>
    </header>
  );
}
