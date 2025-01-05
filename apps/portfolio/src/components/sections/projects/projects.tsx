import type { Modals } from "@/types";
import { notion } from "@lib/notion";
import Project from "@components/project";

async function Projects() {
  const { results: projects } = await notion.db.query("projects", {
    page_size: 6,
    sorts: [{ property: "index", direction: "ascending" }],
  });

  return (
    <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(var(--min),1fr))] justify-center gap-6 [--min:340px] xs:[--min:360px]">
      {projects?.map(({ id, properties }, i) => (
        <Project index={i} key={id} project={properties as Modals.Project} />
      ))}
    </div>
  );
}

export default Projects;
