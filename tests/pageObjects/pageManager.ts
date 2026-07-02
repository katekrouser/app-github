import { Page } from '@playwright/test';
import { SmartTablePage } from './smartTablePage';
import { FormLayoutsPage } from './formLayoutsPage';
import { NavigationPage } from './navigationPage';

export class PageManager {
  private readonly page: Page;
  private readonly smartTablePage: SmartTablePage;
  private readonly formLayoutsPage: FormLayoutsPage;
  private readonly navigationPage: NavigationPage;

  constructor(page: Page) {
    this.page = page;
    this.smartTablePage = new SmartTablePage(this.page);
    this.formLayoutsPage = new FormLayoutsPage(this.page);
    this.navigationPage = new NavigationPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  onSmartTablesPage() {
    return this.smartTablePage;
  }

  onFormLayoutsPage() {
    return this.formLayoutsPage;
  }
}
