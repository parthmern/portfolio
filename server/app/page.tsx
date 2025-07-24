

import { notion } from "@/notion";

const rootPageId = "236c49f9d7d68093bf74d168004afcc3"; // add your root page id


async function getData(rootPageId:string) {
  return await notion.getPage(rootPageId);
}
export default async function Home() {
  const data = await getData(rootPageId);

  return (
    // <NotionPage recordMap={data} rootPageId={rootPageId} />
    <p>please donot missuse @parthmern github</p>
  );
}
