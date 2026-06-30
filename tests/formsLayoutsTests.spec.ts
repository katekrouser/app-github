import { test, expect } from './page-objects/test-options' 
import { faker } from '@faker-js/faker'

test.describe('Form Layouts and Tables Tests', () => {

  test('Fill Inline form with fake input data', { tag: '@regression' }, async ({ pm }) => {
    const fullName = faker.person.fullName()
    const emailPrefix = fullName.toLowerCase().replace(/\s+/g, '')
    const userEmail = `${emailPrefix}qaauto@test.com`

    await test.step('Open form layouts page', async () => {
      await pm.navigateTo().openFormLayouts()
    })

    await test.step('Fill Inline form with generated user data', async () => {
      await pm.onFormLayoutsPage().fillInlineForm(fullName, userEmail)
    })

    await test.step('Verify form fields contain correct user data and checkbox is checked', async () => {
      const formPage = pm.onFormLayoutsPage()
      
      await expect.soft(formPage.nameInput).toHaveValue(fullName)
      await expect.soft(formPage.emailInput).toHaveValue(userEmail)
      await expect.soft(formPage.checkbox).toBeChecked()
    })
  })
})
