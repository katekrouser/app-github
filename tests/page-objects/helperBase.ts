import { expect, Page, Locator } from "@playwright/test";

export class HelperBase {
    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
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

    async clickWhenVisible(locator: Locator) {
        await expect(locator).toBeVisible();
        await locator.click();
    }
}

