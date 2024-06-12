const WIKI_ENDPOINT = "https://en.wikipedia.org/w/api.php";
const WIKI_PARAMS = new URLSearchParams({
  format: "json",
  action: "query",
  prop: "extracts",
  explaintext: "1",
  exsectionformat: "plain",
  exsentences: "3",
  formatversion: "2",
});

async function getInfoFromWikipedia(title: string): Promise<string> {
  WIKI_PARAMS.set("titles", title);
  const input = `${WIKI_ENDPOINT}?${WIKI_PARAMS.toString()}`;

  const res = await fetch(input);
  const result = await res.json();
  return result?.query?.pages?.[0].extract;
}

export { getInfoFromWikipedia };
