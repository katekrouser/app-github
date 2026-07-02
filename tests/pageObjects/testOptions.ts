import { test as base } from '@playwright/test';
import { PageManager } from './pageManager';

type PageManagerFixture = {
  pm: PageManager;
};

export const test = base.extend<PageManagerFixture>({
  pm: async ({ page }, use) => {
    const pageManager = new PageManager(page);

    /* Automatically navigate to the base URL before each test starts */
    await base.step('Navigate to main page', async () => {
      await page.goto('/');
      await base.expect(page.getByRole('link', { name: 'PW-test' })).toBeVisible();
    }, { box: true });

    /* Pass the initialized pageManager object to the test */
    await use(pageManager);
  },
});

export { expect } from '@playwright/test';
