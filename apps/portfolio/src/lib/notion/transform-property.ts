import type { NotionPropertyType } from "./types";

const transformProperty = (property: NotionPropertyType) => {
  switch (property.type) {
    case "url": {
      return property.url;
    }

    case "date": {
      const { date } = property;
      return date?.start ?? date?.end;
    }

    case "title": {
      return property.title[0]?.plain_text;
    }

    case "files": {
      const { files } = property;
      const fileExtract = (file: (typeof files)[number]) =>
        file.type === "external"
          ? file.external
          : file.type === "file"
            ? file.file
            : file;

      return files.length === 1
        ? fileExtract(files[0])
        : files.map(fileExtract);
    }

    case "number": {
      return property.number;
    }

    case "select": {
      return property.select?.name;
    }

    case "rich_text": {
      return property.rich_text[0]?.plain_text;
    }

    case "multi_select": {
      return property.multi_select?.map(select => select.name);
    }

    default:
      return property;
  }
};

export { transformProperty };
