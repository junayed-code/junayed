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
      <div className="bg-rectangle-50 before:bg-gradient-overlay md:bg-rectangle-100 absolute top-0 -z-[1] h-full w-full before:absolute before:top-0 before:h-full before:w-full after:absolute after:top-0 after:h-full after:w-full after:backdrop-blur-[0.145px]" />

      {/* Section container */}
      <Container className="text-center">
        <motion.samp
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="font-secondary text-primary block text-xl font-semibold"
        >
          Hi there, my name is
        </motion.samp>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="font-secondary xs:mb-3 mb-2 text-neutral-100"
        >
          <strong>Junayed Akbor</strong>
        </motion.h1>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="font-primary mb-5 font-medium text-neutral-200"
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
