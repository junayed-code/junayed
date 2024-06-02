import Hero from "@components/sections/hero";
import Contact from "@components/sections/contact";
import Experience from "@components/sections/experience";
import ProjectsSection from "@components/sections/projects";

// After every 30 minutes, this page will be revalidated again.
export const revalidate = 1800;

export default async function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
