"use client";

import React from "react";

import NavbarLogo from "./navbar-logo";
import NavbarItems from "./navbar-items";
import NavbarHeader from "./navbar-header";

import { cn } from "@/utils";
import styles from "./styles.module.scss";

export default function Navbar() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setOpenMenu((prev) => {
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
    <NavbarHeader>
      <nav className="flex items-center justify-between px-5 py-4 md:max-w-4xl lg:max-w-[1110px] mx-auto">
        <div>
          <NavbarLogo />
        </div>

        <div>
          {/* Nav menu toggle button */}
          <NavbarToggleButton
            onClick={handleToggleMenu}
            className={cn(isOpenMenu && `sm:pr-[17px] ${styles.open}`)}
          />

          <NavbarOverlay
            className={cn(
              !isOpenMenu && "invisible opacity-0 pointer-events-none"
            )}
          />

          {/* Nav desktop menu items */}
          <NavbarItems className="hidden md:flex items-center gap-7 font-medium" />

          {/* Nav mobile menu items */}
          <NavbarItems
            onClick={handleToggleMenu}
            className={cn(
              "md:hidden fixed top-0 right-0 h-screen w-80 bg-slate-900 flex flex-col items-center gap-7 font-medium p-6 pt-28  z-20 duration-200",
              isOpenMenu ? "translate-x-0" : "translate-x-full"
            )}
          />
        </div>
      </nav>
    </NavbarHeader>
  );
}

type NavbarToggleButtonProps = React.HTMLAttributes<HTMLDivElement>;
const NavbarToggleButton = ({
  className,
  ...props
}: NavbarToggleButtonProps) => {
  return (
    <div className={cn("md:!hidden z-40", styles.berger, className)} {...props}>
      <span></span>
      <span></span>
    </div>
  );
};

const NavbarOverlay = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-screen bg-slate-900/70",
        className
      )}
    />
  );
};
