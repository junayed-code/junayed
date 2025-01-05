"use client";

import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/utils";
import styles from "./styles.module.scss";

type NavbarToggleButtonProps = {
  onClick: () => void;
  className?: string;
};

const NavbarToggleButton = ({
  className,
  onClick,
}: NavbarToggleButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn("z-40 md:!hidden", styles.berger, className)}
      onClick={onClick}
    >
      <span></span>
      <span></span>
    </motion.div>
  );
};

export default NavbarToggleButton;
