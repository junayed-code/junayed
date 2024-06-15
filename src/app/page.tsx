import Hero from "@components/sections/hero";
import Contact from "@components/sections/contact";
import Projects from "@components/sections/projects";
import Experience from "@components/sections/experience";

// After every 30 minutes, this page will be revalidated again.
export const revalidate = 1800;

export default async function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
