"use client";

import type React from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visiable: {
    opacity: 1,
    y: 0,

    transition: {
      opacity: { duration: 0.95 },
      y: { duration: 0.85 },
      ease: "easeIn",
    },
  },
};

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visiable"
      viewport={{ once: true, margin: "0px 0px 80px 0px" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
