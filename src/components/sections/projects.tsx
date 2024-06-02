import Section from "@components/section";
import Projects from "@components/projects";

export default async function ProjectsSection() {
  return (
    <Section id="projects">
      <h2 className="text-3xl sm:text-4xl text-slate-100 font-bold font-secondary text-center mb-4">
        what i've accomplished
      </h2>
      <p className="max-w-2xl mx-auto sm:text-lg text-center">
        These are some of my completed projects, with more to come in the
        future.
      </p>
      <Projects />
    </Section>
  );
}
