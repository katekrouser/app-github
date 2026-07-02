import { expect, Page, Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async reload() {
    await this.page.reload();
  }

  async waitForSpinnerToDisappear() {
    await expect(this.page.locator('.spinner')).toBeHidden();
  }

  async scrollIntoView(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  async waitUntilVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async waitUntilHidden(locator: Locator) {
    await expect(locator).toBeHidden();
  }
}
