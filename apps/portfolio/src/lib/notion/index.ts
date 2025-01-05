import { NotionClient } from "./notion-client";

const {
  NOTION_SECRET,
  NOTION_PROJECTS_DB_ID,
  NOTION_SECTIONS_DB_ID,
  NOTION_SKILLS_DB_ID,
} = process.env as {
  [key: string]: string;
};

export const notion = new NotionClient({
  client: { auth: NOTION_SECRET },
  entries: [
    {
      type: "database",
      name: "skills",
      database_id: NOTION_SKILLS_DB_ID,
    },
    {
      type: "database",
      name: "sections",
      database_id: NOTION_SECTIONS_DB_ID,
    },
    {
      type: "database",
      name: "projects",
      database_id: NOTION_PROJECTS_DB_ID,
    },
  ],
});
