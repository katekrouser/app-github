import { test, expect } from './pageObjects/testOptions';
import { InlineFormUserFactory } from '../tests/factories/inlineFormUserFactory';

test.describe('Form Layouts and Tables Tests', () => {
  test('Fill Inline form with fake input data', { tag: '@regression' }, async ({ pm }) => {
    const inlineFormUser = InlineFormUserFactory.create();

    await test.step('Open form layouts page', async () => {
      await pm.navigateTo().openFormLayouts();
    });

    await test.step('Fill Inline form with generated user data', async () => {
      await pm.onFormLayoutsPage().fillInlineForm(inlineFormUser.fullName, inlineFormUser.email);
    });

    await test.step('Verify form fields contain correct user data and checkbox is checked', async () => {
      const formPage = pm.onFormLayoutsPage();

      await expect.soft(formPage.nameInput).toHaveValue(inlineFormUser.fullName);
      await expect.soft(formPage.emailInput).toHaveValue(inlineFormUser.email);
      await expect.soft(formPage.checkbox).toBeChecked();
    });
  });
});
