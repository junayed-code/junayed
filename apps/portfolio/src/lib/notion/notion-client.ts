import type {
  NotionClientOption,
  NotionDatabaseEntry,
  NotionPageEntry,
  QueryDatabaseParameters,
} from "./types";
import { Client } from "@notionhq/client";
import { NotionQueryDatabaseResponse } from "./response";

class NotionClient<PNames extends string, DBNames extends string> {
  db: NotionDatabaseClient<DBNames>;
  page: NotionPageClient<PNames>;

  constructor(options: NotionClientOption<PNames, DBNames>) {
    const client = new Client(options.client);

    const pages = options.entries.filter(
      (entry): entry is NotionPageEntry<PNames> => entry.type === "page",
    );
    const databases = options.entries.filter(
      (entry): entry is NotionDatabaseEntry<DBNames> =>
        entry.type === "database",
    );

    this.db = new NotionDatabaseClient(client, databases);
    this.page = new NotionPageClient(client, pages);
  }
}

class NotionDatabaseClient<DBNames extends string> {
  #client: Client;
  #databases: Array<NotionDatabaseEntry<DBNames>>;

  constructor(client: Client, databases: NotionDatabaseEntry<DBNames>[]) {
    this.#client = client;
    this.#databases = databases;
  }

  #getEntry(name: string) {
    return this.#databases.find(
      db => db.name === name,
    ) as NotionDatabaseEntry<DBNames>;
  }

  async query(name: DBNames, args?: QueryDatabaseParameters) {
    const entry = this.#getEntry(name);
    const response = await this.#client.databases.query({
      database_id: entry?.database_id,
      ...args,
    });
    return new NotionQueryDatabaseResponse(response);
  }
}

class NotionPageClient<PNames extends string> {
  #client: Client;
  #pages: Array<NotionPageEntry<PNames>>;

  constructor(client: Client, pages: NotionPageEntry<PNames>[]) {
    this.#client = client;
    this.#pages = pages;
  }
}

export { NotionClient };
