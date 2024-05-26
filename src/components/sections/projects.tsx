import Section from "@components/section";
import projects from "@/data/projects";
import ProjectCard from "@components/project-card";
import ScrollParallax from "@components/animate/scroll-parallax";

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl sm:text-4xl text-slate-100 font-bold font-secondary text-center mb-4">
        what i've accomplished
      </h2>
      <p className="max-w-2xl mx-auto sm:text-lg text-center">
        These are some of my completed projects, with more to come in the
        future.
      </p>

      <ScrollParallax>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ScrollParallax>
    </Section>
  );
}
