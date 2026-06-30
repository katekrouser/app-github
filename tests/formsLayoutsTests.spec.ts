import { test, expect } from './page-objects.ts/test-options' 
import { faker } from '@faker-js/faker'

test('Fill Inline form with fake input data', { tag: '@regression' }, async ({page, pm}) => {
  const fullName = faker.person.fullName()
  const emailPrefix = fullName.toLowerCase().replace(/\s+/g, '')
  const userEmail = `${emailPrefix}qaauto@test.com`

  await page.goto('/')
  await pm.navigateTo().openFormLayouts()
  await pm.onFormLayoutsPage().fillInlineForm(fullName, userEmail)
  await expect(pm.onFormLayoutsPage().nameInput).toHaveValue(fullName)
  await expect(pm.onFormLayoutsPage().emailInput).toHaveValue(userEmail)
  await expect(pm.onFormLayoutsPage().checkbox).toBeChecked()
})
