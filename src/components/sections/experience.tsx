import Skills from "@components/skills";
import Section from "@components/section";
import Container from "@components/container";

import { getInfoFromWikipedia } from "@/lib/wikipedia";
import config from "@/config";

export default async function Experience() {
  const skills = await Promise.all(
    config.skills.map(async skill => {
      const info = await getInfoFromWikipedia(skill.wikiTitle);
      return { ...skill, info };
    }),
  );

  return (
    <Section id="experience">
      <Container>
        <h2 className="text-center">
          <span className="text-primary-500">experience</span> of my dev journey
        </h2>
        <p className="mx-auto max-w-2xl text-center sm:text-lg">
          I have gained skills with various technological tools throughout my
          journey as a developer. Through these skills, I have gained a
          competitive edge and the ability to work efficiently.
        </p>
        <Skills skills={skills} />
      </Container>
    </Section>
  );
}
