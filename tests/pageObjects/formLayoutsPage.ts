import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class FormLayoutsPage extends BasePage {
  private readonly inlineFormContainer: Locator;
  private readonly _nameInput: Locator;
  private readonly _emailInput: Locator;
  private readonly _checkbox: Locator;
  private readonly submitBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.inlineFormContainer = this.page.locator('nb-card', {
      hasText: 'Inline form',
    });
    this._nameInput = this.inlineFormContainer.getByPlaceholder('Jane Doe');
    this._emailInput = this.inlineFormContainer.getByPlaceholder('Email');
    this._checkbox = this.inlineFormContainer.locator('.custom-checkbox');
    this.submitBtn = this.inlineFormContainer.getByRole('button', {
      name: 'Submit',
      exact: true,
    });
  }

  get nameInput(): Locator {
    return this._nameInput;
  }

  get emailInput(): Locator {
    return this._emailInput;
  }

  get checkbox(): Locator {
    return this._checkbox;
  }

  async fillName(fullName: string) {
    await this.nameInput.fill(fullName);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async checkRememberMe() {
    const checkedState = await this._checkbox.getAttribute('class');
    if (checkedState?.includes('checked') == false) {
      await this._checkbox.check();
    }
  }

  /**
   * Fills and submits the Inline Form.
   * @param fullName User full name
   * @param email User email
   */
  async fillInlineForm(fullName: string, email: string) {
    await this.fillName(fullName);
    await this.fillEmail(email);
    await this.checkRememberMe();
    await this.submitBtn.click();
  }
}
