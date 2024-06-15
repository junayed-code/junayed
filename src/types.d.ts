import type * as NAEP from "@notionhq/client/build/src/api-endpoints";

export type ContactFormState = { message?: string; error?: string };

export namespace Modals {
  type ProjectImage = { name: string; url: string; blurUrl?: string };
  type Project = {
    id: string;
    name: string;
    live: string;
    github: string;
    image: ProjectImage[];
    description: string;
    technologies: string[];
  };
}

export namespace Notion {
  type DatabaseQueryParameters = Omit<
    NAEP.QueryDatabaseParameters,
    "database_id"
  >;
  type DatabaseCreateParameters = Omit<NAEP.CreateDatabaseParameters, "parent">;
  type DatabasePropertyConfig = NAEP.DatabasePropertyConfigResponse;

  type ResultTypes =
    | "page-object"
    | "partial-page-object"
    | "partial-database-object"
    | "database-object";

  type Results<T extends ResultTypes = "database-object"> = Array<
    T extends "page-object"
      ? NAEP.PageObjectResponse
      : T extends "partial-page-object"
        ? NAEP.PartialPageObjectResponse
        : T extends "partial-database-object"
          ? NAEP.PartialDatabaseObjectResponse
          : T extends "database-object"
            ? NAEP.DatabaseObjectResponse
            : never
  >;
}
