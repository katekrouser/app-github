import { Page, Locator } from "@playwright/test";
import { BasePage } from "./basePage";

export class NavigationPage extends BasePage {
 
    readonly page: Page
    readonly smartTableMenuItem: Locator
    readonly formLayouts: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.smartTableMenuItem = page.getByTitle('Smart Table')
        this.formLayouts = page.getByTitle('Form Layouts')
    }

    async openSmartTable() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click() 
    }

    async openFormLayouts() {
        await this.selectGroupMenuItem('Forms')
        await this.formLayouts.click()
    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == "false") {
            await groupMenuItem.click()
        }
    }
}