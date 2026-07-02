import { test, expect } from './pageObjects/testOptions';
import { SmartTableUserFactory } from '../tests/factories/smartTableUserFactory';

test.describe('Smart Table Tests', () => {
  test('Add new user to Smart Table', { tag: '@regression' }, async ({ pm }) => {
    const user = SmartTableUserFactory.create();

    await test.step('Open smart table page', async () => {
      await pm.navigateTo().openSmartTable();
    });

    await test.step('Create new user entry', async () => {
      await pm.onSmartTablesPage().createUser(user);
    });

    await test.step('Verify new row has been added with user data', async () => {
      const createdRow = await pm.onSmartTablesPage().getRowByEmail(user.email);
      await expect(createdRow).toBeVisible();
      await expect(createdRow).toBeVisible();
      await expect(createdRow).toContainText(user.id);
      await expect(createdRow).toContainText(user.firstName);
      await expect(createdRow).toContainText(user.lastName);
      await expect(createdRow).toContainText(user.username);
      await expect(createdRow).toContainText(user.email);
      await expect(createdRow).toContainText(user.age);
    });
  });
});
