import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class BasePage extends HelperBase {
    constructor(page: Page) {
        super(page)
    }

     async reload() {
        await this.page.reload();
     }
}