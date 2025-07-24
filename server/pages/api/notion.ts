// pages/api/notion.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pageId } = req.query;

  if (typeof pageId !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing pageId' });
  }

  try {
    const data = await notion.getPage(pageId);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
}
