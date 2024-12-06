"use client";

import { motion } from "framer-motion";

import { Button } from "@ui/button";
import Section from "@components/section";
import Container from "@components/container";

import config from "@/config";

export default function Hero() {
  return (
    <Section className="relative flex min-h-screen flex-col justify-center md:py-[calc(7rem+var(--nav-height))] lg:min-h-0 lg:py-[calc(8rem+var(--nav-height))]">
      {/* Rectangular background */}
      <div className="absolute top-0 -z-[1] h-full w-full bg-rectangle-50 before:absolute before:top-0 before:h-full before:w-full before:bg-gradient-overlay after:absolute after:top-0 after:h-full after:w-full after:backdrop-blur-[0.145px] md:bg-rectangle-100" />

      {/* Section container */}
      <Container className="text-center">
        <motion.samp
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="block font-secondary text-xl font-semibold text-primary"
        >
          Hi there, my name is
        </motion.samp>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-2 font-secondary text-neutral-100 xs:mb-3"
        >
          <strong>Junayed Akbor</strong>
        </motion.h1>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-5 font-primary font-medium text-neutral-200"
        >
          <strong>{config.title}</strong>
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mx-auto mb-6 max-w-xl sm:text-lg"
        >
          I specialize in developing responsive, scalable, and pixel-perfect web
          applications using the MERN stack. Proficient in translating design
          concepts into robust and scalable code.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <Button size="xl" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">
              Resume
            </a>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
