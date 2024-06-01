import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

import { Button } from "@ui/button";

import config from "@/config";

const variants: Variants = {
  start: {
    y: 8,
    opacity: 0,
    rotate: -15,
    transformOrigin: "center left",
  },
  end: {
    y: 0,
    rotate: 0,
    opacity: 1,
  },
};

const transition: Transition = { duration: 0.4, ease: "easeOut" };

type NavItemsProps = {
  className?: string;
  onClick?(): void;
};

const NavbarItems = ({ className, onClick }: NavItemsProps) => {
  return (
    <ul className={className}>
      {config.navItems.map((item, i) => (
        <motion.li
          key={item.path}
          variants={variants}
          onClick={onClick}
          initial="start"
          animate="end"
          transition={{ ...transition, delay: 0.15 * i }}
        >
          <a href={item.path} className="hover:text-primary">
            {item.text}
          </a>
        </motion.li>
      ))}
      <motion.li
        variants={variants}
        initial="start"
        animate="end"
        transition={{ ...transition, delay: 0.45 }}
      >
        <Button asChild>
          <Link onClick={onClick} href="/resume.pdf" target="_blank">
            Resume
          </Link>
        </Button>
      </motion.li>
    </ul>
  );
};

export default NavbarItems;
