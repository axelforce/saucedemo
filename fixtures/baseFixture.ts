import {Fixtures, test as base} from '@playwright/test';

export const test = base.extend<Fixtures>({
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },
});
