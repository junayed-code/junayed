"use client";

import React from "react";

import NavbarLogo from "./navbar-logo";
import NavbarItems from "./navbar-items";
import NavbarHeader from "./navbar-header";
import NavbarToggleButton from "./navbar-toggle-button"; 
import Container from "@components/container";

import { cn } from "@/utils";
import styles from "./styles.module.scss";

export default function Navbar() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

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
    <NavbarHeader>
      <Container
        asChild
        className="flex h-[var(--nav-height)] items-center justify-between py-4"
      >
        <nav>
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
                !isOpenMenu && "pointer-events-none invisible opacity-0",
              )}
            />

            {/* Nav desktop menu items */}
            <NavbarItems className="hidden items-center gap-7 font-medium md:flex" />

            {/* Nav mobile menu items */}
            <NavbarItems
              onClick={handleToggleMenu}
              className={cn(
                "fixed right-0 top-0 z-20 flex h-screen w-80 flex-col items-center gap-7 bg-primary-950 p-6 pt-28 font-medium duration-200 md:hidden",
                isOpenMenu ? "translate-x-0" : "translate-x-full",
              )}
            />
          </div>
        </nav>
      </Container>
    </NavbarHeader>
  );
}

const NavbarOverlay = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-screen w-full bg-primary-950/70",
        className,
      )}
    />
  );
};
