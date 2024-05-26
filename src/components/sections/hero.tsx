"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import profileImage from "@/images/profile.jpg";
import config from "@/config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full md:max-w-4xl lg:max-w-[1110px] mx-auto py-16 md:py-24 px-5 mt-[74px] flex flex-col md:flex-row gap-y-10 scroll-mt-6"
    >
      <div className="md:w-1/2">
        <motion.samp
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="block text-xl font-semibold font-secondary text-emerald-300"
        >
          Hi, I am
        </motion.samp>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-5xl md:text-[54px] lg:text-6xl font-secondary font-black text-slate-100 mb-3"
        >
          <Link href="/">junayed akbor</Link>
        </motion.h1>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-xl md:text-2xl font-semibold mb-3 sm:mb-5 text-slate-300"
        >
          {config.title}
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="sm:text-lg max-w-xl font-medium"
        >
          I specialize in developing responsive, scalable, and pixel-perfect web
          applications using the MERN Stack. I enjoy exploring new tech, and I'm
          particularly fascinated by AI.
        </motion.p>
      </div>
      <div className="md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.95,
            ease: "easeOut",
            scale: {
              type: "spring",
              damping: 4.25,
              bounce: 6,
            },
          }}
          className="w-fit mx-auto md:mr-0"
        >
          <Image
            src={profileImage}
            alt="Junayed Akbor's image"
            height={350}
            width={350}
            priority
            placeholder="blur"
            className="border-2 border-emerald-400 duration-300 md:hover:shadow-[4px_4px_#34d399] md:hover:-translate-x-1 md:hover:-translate-y-1 cursor-crosshair"
          />
        </motion.div>
      </div>
    </section>
  );
}
