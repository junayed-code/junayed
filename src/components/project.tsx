"use client";

import React from "react";
import Image from "next/image";
import type { Modals } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import { type Variants, motion, useInView } from "framer-motion";

type ProjectProps = { project: Modals.Project; index: number };

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 * i, duration: 0.4, ease: "backOut" },
  }),
};

const Project = ({ project, index }: ProjectProps) => {
  const projectRef = React.useRef<HTMLDivElement>(null);
  const isView = useInView(projectRef, { once: true, amount: 0.1 });

  const { name, image, live, description, technologies, github } = project;
  const imgProps: React.ComponentPropsWithoutRef<typeof Image> = {
    src: image.url,
    alt: name,
    width: 1200,
    height: 675,
    priority: true,
    ...(image.blurUrl
      ? { placeholder: "blur", blurDataURL: image.blurUrl }
      : undefined),
  };

  return (
    <motion.div
      custom={index}
      ref={projectRef}
      variants={variants}
      initial="hidden"
      animate={isView ? "visible" : false}
      className="w-full rounded-lg bg-gradient-to-r from-primary-200/[0.4] to-primary-200/[0.2] p-5 backdrop-blur-sm duration-150 lg:hover:shadow-lg"
    >
      <figure className="overflow-hidden rounded-lg">
        <Image className="aspect-video" {...imgProps} />
      </figure>

      <div className="pt-6">
        <h3 className="text-primary-900">{name}</h3>
        <p className="mb-4 text-primary-800">{description}</p>
        <Technologies technologies={technologies} />

        {/* Live and source code links */}
        <div className="flex items-center justify-end gap-4">
          <a
            href={github}
            target="_blank"
            className="duration-200"
            aria-label="GitHub source code page"
          >
            <Github
              size={22}
              className="text-primary-800 hover:text-primary-700"
            />
          </a>
          <a
            href={live}
            target="_blank"
            className="duration-200"
            aria-label={`${name}'s live view`}
          >
            <ExternalLink className="text-primary-800 hover:text-primary-700" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

type TechnologiesProps = {
  technologies: string[];
};

const Technologies = ({ technologies }: TechnologiesProps) => {
  return (
    <div className="mb-3 flex flex-grow flex-wrap items-center gap-x-2 gap-y-2">
      {technologies.map(tech => (
        <span
          key={tech + Math.random()}
          className="cursor-default select-none rounded-full bg-primary-300 px-2 py-0.5 text-sm text-primary-900"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default Project;
