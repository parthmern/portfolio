import React, { useEffect, useState } from "react";
import { NotionPage } from "../notion/renderer";

const rootPageId = "236c49f9d7d68093bf74d168004afcc3";

const KafkaNotes = () => {
  const [recordMap, setRecordMap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://portfolio-mu-nine-81.vercel.app/api/notion?pageId=236c49f9d7d68093bf74d168004afcc3");
        data = await data.json();
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

export default KafkaNotes;