// Notion.tsx

import React, { useEffect, useState } from "react";

import { NotionAPI } from "notion-client";
import { NotionPage } from "./notion/renderer";

const rootPageId = "236c49f9d7d68093bf74d168004afcc3";

const Notion = () => {
  const [recordMap, setRecordMap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notion = new NotionAPI();
        const data = await notion.getPage(rootPageId);
        setRecordMap(data);
      } catch (err) {
        setError("Failed to fetch Notion page: " + err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!recordMap) return <p>Loading Notion content...</p>;

  return <NotionPage recordMap={recordMap} rootPageId={rootPageId} />;
};

export default Notion;
