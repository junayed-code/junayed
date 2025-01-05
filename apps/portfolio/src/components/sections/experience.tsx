import Skills from "@components/skills";
import Section from "@components/section";
import Container from "@components/container";

import { notion } from "@lib/notion";
import { getInfoFromWikipedia } from "@lib/wikipedia";

export default async function Experience() {
  const { results } = await notion.db.query("skills", {
    page_size: 15,
    sorts: [{ property: "index", direction: "ascending" }],
  });
  const skills = await Promise.all(
    results.map(async ({ id, properties }) => {
      const info = await getInfoFromWikipedia(properties.wikipedia);
      return { id, info, ...properties };
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
        <Skills skills={skills as any[]} />
      </Container>
    </Section>
  );
}
