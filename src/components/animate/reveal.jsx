"use client";

import { motion } from "framer-motion";

/**@type {import('framer-motion').Variants} */
const variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visiable: {
    opacity: 1,
    y: 0,

    transition: {
      opacity: { duration: 0.75, ease: "easeIn" },
      y: { duration: 0.65 },
    },
  },
};

function Reveal({ children }) {
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
