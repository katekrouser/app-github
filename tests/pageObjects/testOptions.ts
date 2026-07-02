import { test as base, expect } from '@playwright/test';
import { PageManager } from './pageManager';

type TestFixtures = {
  pm: PageManager;
};

export const test = base.extend<TestFixtures>({
  pm: async ({ page }, use) => {
    const pageManager = new PageManager(page);

    await base.step(
      'Open base URL',
      async () => {
        await pageManager.navigateTo().open();
      },
      { box: true },
    );

    // Make the initialized PageManager available to the test.
    await use(pageManager);
  },
});

export { expect };
