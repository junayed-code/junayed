"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/**@type {import('framer-motion').Variants} */
const variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visiable: {
    opacity: 1,
    y: 0,
  },
};

/** @type {import('framer-motion').Transition} */
const transition = {
  duration: 0.5,
};

function Reveal({ children }) {
  const ref = useRef();
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visiable");
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
