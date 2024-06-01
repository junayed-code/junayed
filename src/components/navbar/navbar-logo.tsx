import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import logoImage from "@/images/logo.svg";

function NavbarLogo() {
  return (
    <Link href="/">
      <motion.div
        transition={{
          delay: 0.9,
          duration: 0.3,
          ease: [0, 0.8, 0.2, 0.6],
          scale: {
            type: "spring",
            stiffness: 100,
            damping: 5,
          },
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          src={logoImage}
          alt="Logo image"
          width={42}
          height={42}
          priority
        />
      </motion.div>
    </Link>
  );
}

export default NavbarLogo;
