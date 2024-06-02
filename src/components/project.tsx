import type { Modals } from "@/types";
import React from "react";
import Image from "next/image";

type ProjectProps = { project: Modals.Project };

const Project = ({ project }: ProjectProps) => {
  const { name, image, live, description, technologies } = project;
  const [img1] = image;

  const imgProps: React.ComponentPropsWithoutRef<typeof Image> = {
    src: img1.url,
    alt: name,
    width: 1200,
    height: 675,
    priority: true,
    ...(img1.blurUrl
      ? { placeholder: "blur", blurDataURL: img1.blurUrl }
      : undefined),
  };

  return (
    <a
      href={live}
      target="_blank"
      className="block w-full shrink-0 max-w-md sm:max-w-xl rounded-lg overflow-hidden group"
    >
      <figure className="relative">
        <Image className="aspect-video" {...imgProps} />

        <figcaption className="absolute inset-0 grid content-end bg-slate-800/60 text-slate-100 p-5 sm:translate-y-full sm:group-hover:translate-y-0 duration-300">
          <h3 className="text-xl sm:text-2xl font-bold font-secondary mb-1">
            {name}
          </h3>
          <p className="text-sm sm:text-base">{description}</p>
          <div className="mt-3 sm:mt-4 flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-3xl bg-emerald-100 text-emerald-600 text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </figcaption>
      </figure>
    </a>
  );
};

export default Project;
