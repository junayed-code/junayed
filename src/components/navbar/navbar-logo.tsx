import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import logoImage from "@/images/logo.svg";

function NavbarLogo() {
  return (
    <Link href="/">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
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
