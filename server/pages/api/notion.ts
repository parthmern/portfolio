// pages/api/notion.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI({
  apiBaseUrl:
    process.env.NOTION_API_BASE_URL ||
    'https://brazen-pantry-a23.notion.site/api/v3',
});

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normalizeMap(map: unknown): unknown {
  if (!isRecord(map)) {
    return map;
  }

  return Object.fromEntries(
    Object.entries(map).map(([id, entry]) => {
      if (!isRecord(entry) || !isRecord(entry.value)) {
        return [id, entry];
      }

      const boxedValue = entry.value;
      if ('role' in boxedValue && 'value' in boxedValue) {
        return [id, { ...entry, value: boxedValue.value }];
      }

      return [id, entry];
    })
  );
}

function normalizeRecordMap(data: unknown): unknown {
  if (!isRecord(data)) {
    return data;
  }

  const normalized = { ...data };
  for (const key of ['block', 'collection', 'collection_view', 'notion_user']) {
    if (key in normalized) {
      normalized[key] = normalizeMap(normalized[key]);
    }
  }

  return normalized;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { pageId } = req.query;

  if (typeof pageId !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing pageId' });
  }

  try {
    const data = await notion.getPage(pageId);
    res.status(200).json(normalizeRecordMap(data));
  } catch (error: unknown) {
    const response =
      typeof error === 'object' && error !== null && 'response' in error
        ? error.response
        : undefined;
    const statusCode =
      typeof response === 'object' &&
      response !== null &&
      'statusCode' in response &&
      typeof response.statusCode === 'number'
        ? response.statusCode
        : undefined;

    res.status(502).json({
      error:
        statusCode === 403
          ? "Notion's unofficial API was blocked with 403. A public page can still be blocked by Notion's Cloudflare layer."
          : 'Unable to fetch the Notion page.',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
