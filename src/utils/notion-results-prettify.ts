import type { Notion } from "@/types";

export const notionResultsPrettify = async (notionResults: Notion.Results) => {
  const results = notionResults.map((result) => {
    const propertiesEntries = Object.entries(result.properties).map(
      ([key, value]) => {
        const v = captureValue(value);
        return [key, v];
      }
    );
    const properties = {
      id: result.id,
      ...Object.fromEntries(propertiesEntries),
    };
    return properties;
  });
  return results;
};

const captureValue = (value: Notion.DatabasePropertyConfig) => {
  switch (value.type) {
    case "title":
      const title = value.title as any;
      return title[0]?.plain_text;
    case "rich_text":
      const rich_text = value.rich_text as any;
      return rich_text[0]?.plain_text;
    case "date":
      const { start, end } = value.date ?? {};
      return start || end;
    case "multi_select":
      const multi_select = value.multi_select as any;
      return multi_select.map((v: any) => v?.name);
    case "files":
      const files = value.files as any;
      return files?.map?.((f: any) => ({ name: f.name, ...f[f.type] }));
    case "url":
      return value.url;
    default:
      return value;
  }
};
