import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { name, image, live, description, technologies } = project;

  return (
    <Link
      href={live}
      target="_blank"
      className="block w-full max-w-md sm:max-w-xl rounded-lg overflow-hidden shadow-[0px_0px_80px_-25px_rgba(255,255,255,0.2)] group"
    >
      <figure className="relative">
        <Image src={image} alt={name} priority />

        <figcaption className="absolute inset-0 grid content-end bg-slate-800/60 text-slate-100 p-5 sm:translate-y-full sm:group-hover:translate-y-0 duration-300">
          <h3 className="text-xl sm:text-2xl font-bold font-secondary mb-1">
            {name}
          </h3>
          <p className="text-sm sm:text-base">{description}</p>
          <div className="mt-3 sm:mt-4 flex gap-2 flex-wrap">
            {technologies?.map(tech => (
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full md:max-w-4xl lg:max-w-[1110px] mx-auto py-16 md:py-20 px-5"
    >
      <h2 className="text-3xl sm:text-4xl text-slate-100 font-bold text-center mb-4">
        what i've accomplished
      </h2>
      <p className="max-w-2xl mx-auto sm:text-lg text-center">
        These are some of my completed projects, with more to come in the
        future.
      </p>

      <div className="mt-12 grid lg:grid-cols-2 justify-items-center gap-6">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
