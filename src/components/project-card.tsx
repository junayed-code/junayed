import type { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = { project: Project };

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, image, live, description, technologies } = project;

  return (
    <Link
      href={live}
      target="_blank"
      className="block w-full shrink-0 max-w-md sm:max-w-xl rounded-lg overflow-hidden group"
    >
      <figure className="relative">
        <Image src={image} alt={name} priority placeholder="blur" />

        <figcaption className="absolute inset-0 grid content-end bg-slate-800/60 text-slate-100 p-5 sm:translate-y-full sm:group-hover:translate-y-0 duration-300">
          <h3 className="text-xl sm:text-2xl font-bold font-secondary mb-1">
            {name}
          </h3>
          <p className="text-sm sm:text-base">{description}</p>
          <div className="mt-3 sm:mt-4 flex gap-2 flex-wrap">
            {technologies?.map((tech) => (
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
    </Link>
  );
};

export default ProjectCard;
