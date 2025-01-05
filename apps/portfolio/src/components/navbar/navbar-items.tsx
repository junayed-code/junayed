import { motion, type Variants } from "framer-motion";
import config from "@/config";

const listVariants: Variants = {
  end: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  start: {
    y: -8,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

type NavItemsProps = {
  className?: string;
  onClick?(): void;
};

const NavbarItems = ({ className, onClick }: NavItemsProps) => {
  return (
    <motion.ul
      animate="end"
      initial="start"
      className={className}
      variants={listVariants}
    >
      {config.navItems.map(item => (
        <motion.li key={item.path} variants={itemVariants} onClick={onClick}>
          <a href={item.path} className="hover:text-primary">
            {item.text}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavbarItems;
