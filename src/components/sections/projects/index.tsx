import Link from "next/link";
import { MoveRight } from "lucide-react";

import Section from "@components/section";
import Container from "@components/container";
import Projects from "./projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-primary-500">
      <Container>
        <h2 className="text-center text-primary-900">
          what i've{" "}
          <span
            className="inline-block bg-primary-900 px-4 py-0.5 text-primary-500"
            style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
          >
            accomplished
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-center text-primary-800 sm:text-lg">
          These are some of my completed projects, with more to come in the
          future.
        </p>

        <Projects />

        <div className="pt-8 sm:px-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-x-2 font-medium text-primary-900 underline hover:text-primary-800"
          >
            <span>See project archive</span>
            <MoveRight
              size={22}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
