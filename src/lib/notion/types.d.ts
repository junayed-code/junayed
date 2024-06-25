import type { ClientOptions } from "@notionhq/client/build/src/Client";
import type * as NotionEndpoint from "@notionhq/client/build/src/api-endpoints";

export type * from "@notionhq/client";
export type * from "@notionhq/client/build/src/api-endpoints";

export type NotionListResponses =
  | NotionEndpoint.QueryDatabaseResponse
  | NotionEndpoint.ListDatabasesResponse;

export type NotionObjectResponses =
  | NotionEndpoint.PageObjectResponse
  | NotionEndpoint.DatabaseObjectResponse;
export type NotionResponses = NotionListResponses | NotionObjectResponses;

export type NotionCover = NotionEndpoint.PageObjectResponse["cover"];
export type NotionIcon = NotionEndpoint.PageObjectResponse["icon"];

export type QueryDatabaseParameters = Omit<
  NotionEndpoint.QueryDatabaseParameters,
  "database_id"
>;
export type NotionPropertyType =
  NotionEndpoint.PageObjectResponse["properties"][string];

export type NotionObject = "list" | "page" | "block" | "database";
export type NotionResponseType =
  | "page"
  | "block"
  | "database"
  | "page_or_database";

export type NotionClientOption<PNames, DBNames> = {
  client: ClientOptions;
  entries: NotionEntry<PNames, DBNames>[];
};

export type NotionPageEntry<PNames> = {
  type: "page";
  name: PNames;
  page_id: string;
};
export type NotionDatabaseEntry<DBNames> = {
  type: "database";
  name: DBNames;
  database_id: string;
};
export type NotionEntry<PNames, DBNames> =
  | NotionPageEntry<PNames>
  | NotionDatabaseEntry<DBNames>;
