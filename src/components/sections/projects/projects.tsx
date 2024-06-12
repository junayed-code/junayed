import { getProjects } from "@db/notion";
import Project from "@components/project";
import ScrollParallax from "@components/animate/scroll-parallax";

async function Projects() {
  // Get only 5 projects from the notion and
  // sort them in ascending order according to the index number.
  const projects = await getProjects({
    page_size: 5,
    sorts: [{ property: "index", direction: "ascending" }],
  });

  return (
    <ScrollParallax>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ScrollParallax>
  );
}

export default Projects;
