import type { Notion, Modals } from "@/types";

import { notion } from "@lib/notion";
import { notionResultsPrettify } from "@utils/notion-results-prettify";

const { NOTION_PROJECTS_DB_ID } = process.env as { [key: string]: string };

export async function getProjects(
  args?: Notion.DatabaseQueryParameters
): Promise<Modals.Project[]> {
  const database = await notion.databases.query({
    database_id: NOTION_PROJECTS_DB_ID,
    ...args,
  });
  return notionResultsPrettify(database.results as Notion.Results);
}
