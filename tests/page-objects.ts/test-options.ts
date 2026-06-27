import { test as base } from '@playwright/test';
import { PageManager } from './pageManager';

type PageManagerFixture = {
  pm: PageManager;
};

export const test = base.extend<PageManagerFixture>({
  pm: async ({ page }, use) => {
    const pageManager = new PageManager(page);
    await use(pageManager);
    console.log('Test run is finished');
  },
});

export { expect } from '@playwright/test';
