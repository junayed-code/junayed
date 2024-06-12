"use client";

import React from "react";

import { cn } from "@/utils";
import { useScrollDirection } from "@hooks/useScrollDirection";

type NavbarHeaderProps = React.HTMLAttributes<HTMLElement>;

function NavbarHeader({ className, ...props }: NavbarHeaderProps) {
  const scrollDirection = useScrollDirection({ threshold: 50 });
  const isDown = scrollDirection === "down";

  return (
    <header
      {...props}
      className={cn(
        "fixed left-0 top-0 z-50 w-full backdrop-blur-xl transition-transform duration-200",
        isDown ? "-translate-y-full" : "translate-y-0",
        className,
      )}
    />
  );
}

export default NavbarHeader;
