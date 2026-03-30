import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const TARGETS = ['Alisvolatprop12', 'otaku__yuta'];
const STORAGE_STATE_PATH = path.resolve('storage-state.json');

async function createBrowserContext() {
  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome',
  });

  try {
    const context = await browser.newContext(
      await fileExists(STORAGE_STATE_PATH)
        ? { storageState: STORAGE_STATE_PATH }
        : {},
    );

    return { browser, context };
  } catch (error) {
    await browser.close();
    throw error;
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectPosts(page, handle) {
  await page.goto(`https://x.com/${handle}/with_replies`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);

  const posts = await page.locator('article').evaluateAll((articles) =>
    articles.slice(0, 5).map((article) => {
      const text = article.innerText || '';
      const timeEl = article.querySelector('time');
      const linkEl = article.querySelector('a[href*="/status/"]');

      return {
        text: text.trim(),
        posted_at: timeEl?.getAttribute('datetime') ?? null,
        url: linkEl?.getAttribute('href') ?? null,
      };
    }),
  );

  return posts.filter((post) => post.text);
}

async function runCollect() {
  const { browser, context } = await createBrowserContext();
  const page = await context.newPage();

  const results = {};
  for (const handle of TARGETS) {
    try {
      results[handle] = await collectPosts(page, handle);
      console.log(`collected ${results[handle].length} posts from @${handle}`);
    } catch (error) {
      results[handle] = { error: String(error) };
      console.error(`failed to collect @${handle}:`, error);
    }
  }

  await context.storageState({ path: STORAGE_STATE_PATH });
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

async function main() {
  const command = process.argv[2] ?? 'help';

  if (command === 'collect') {
    await runCollect();
    return;
  }

  if (command === 'summarize') {
    console.log('summarize not implemented yet');
    return;
  }

  console.log('Usage: node src/index.js [collect|summarize]');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
