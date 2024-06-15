import { getProjects } from "@/db/notion";
import Project from "@components/project";

async function Projects() {
  const projects = await getProjects({
    page_size: 6,
    sorts: [{ property: "index", direction: "ascending" }],
  });

  return (
    <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(var(--min),1fr))] justify-center gap-6 [--min:340px] xs:[--min:360px]">
      {projects.map((project, i) => (
        <Project key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}

export default Projects;
