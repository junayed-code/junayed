import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
