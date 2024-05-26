import Hero from "@components/sections/hero";
import Projects from "@components/sections/projects";
import Experience from "@components/sections/experience";
import Contact from "@components/sections/contact";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
