import config from "@/config";
import Link from "next/link";
import { motion } from "framer-motion";

/**@type {import("framer-motion").Variants} */
const variants = {
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

/**@type {import("framer-motion").Transition} */
const transition = { duration: 0.4, ease: "easeOut" };

const NavItems = ({ className, onClick }) => {
  return (
    <ul className={className}>
      {config.navItems.map((item, i) => (
        <motion.li
          key={item.path}
          variants={variants}
          initial="start"
          animate="end"
          transition={{ ...transition, delay: 0.15 * i }}
        >
          <Link
            onClick={onClick}
            href={item.path}
            className="hover:text-emerald-400"
          >
            {item.text}
          </Link>
        </motion.li>
      ))}
      <motion.li
        variants={variants}
        initial="start"
        animate="end"
        transition={{ ...transition, delay: 0.45 }}
      >
        <Link
          onClick={onClick}
          href="/resume.pdf"
          target="_blank"
          className="inline-block text-emerald-400 border border-emerald-400 px-3 py-1 hover:shadow-[2.5px_2.5px_rgb(52,211,153)] hover:-translate-x-0.5 hover:-translate-y-0.5 duration-200"
        >
          Resume
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavItems;
