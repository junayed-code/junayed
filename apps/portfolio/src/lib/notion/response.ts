import type {
  NotionIcon,
  NotionCover,
  NotionObject,
  NotionResponses,
  NotionResponseType,
  QueryDatabaseResponse,
  NotionObjectResponses,
  NotionListResponses,
} from "./types";
import NotionResults from "./NotionResults";
import { transformProperty } from "./transform-property";

class NotionResponse {
  object: NotionObject;
  constructor(response: NotionResponses) {
    this.object = response.object;
  }
}

/* Notion object type responses */

class NotionObjectResponse extends NotionResponse {
  id: string;
  url: string;
  parent: any;
  icon: NotionIcon;
  cover: NotionCover;
  created_time: string;
  properties: Record<string, any>;

  constructor(response: NotionObjectResponses) {
    super(response);
    this.id = response.id;
    this.url = response.url;
    this.icon = response.icon;
    this.cover = response.cover;
    this.parent = response.parent;
    this.created_time = response.created_time;
    this.properties = response.properties;
    this.#transformProperties();
  }

  #transformProperties() {
    this.properties = Object.fromEntries(
      Object.entries(this.properties).map(([key, value]) => [
        key,
        transformProperty(value),
      ]),
    );
  }
}

class NotionPageObjectResponse extends NotionObjectResponse {}

class NotionDatabaseObjectResponse extends NotionObjectResponse {}

/* Notion list type responses */

class NotionListResponse extends NotionResponse {
  type: NotionResponseType;
  has_more: boolean;
  next_cursor: string | null;
  results: NotionResults = [];

  constructor(response: NotionListResponses) {
    super(response);
    this.type = response.type;
    this.has_more = response.has_more;
    this.next_cursor = response.next_cursor;
  }
}

class NotionQueryDatabaseResponse extends NotionListResponse {
  constructor(response: QueryDatabaseResponse) {
    super(response);

    const results = response.results.map(
      res => new NotionPageObjectResponse(res as any),
    );
    this.results = new NotionResults(...results);
  }
}

export {
  NotionPageObjectResponse,
  NotionQueryDatabaseResponse,
  NotionDatabaseObjectResponse,
};
