import type {
  NotionDatabaseObjectResponse,
  NotionPageObjectResponse,
} from "./response";

type Result = NotionPageObjectResponse | NotionDatabaseObjectResponse;

class NotionResults<Item extends Result = Result> extends Array<Item> {}

export default NotionResults;
