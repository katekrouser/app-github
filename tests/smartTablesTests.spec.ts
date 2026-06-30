import { test, expect } from './page-objects.ts/test-options'
import { faker } from '@faker-js/faker'

test('Add new user to Smart Table',{ tag: '@regression' }, async ({ page, pm }) => {

    const user = {
        id: faker.number.int({ min: 100, max: 999 }).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 65 }).toString(),
    }

    await page.goto('/')
    await pm.navigateTo().openSmartTable()
    await pm.onSmartTablesPage().createUser(user)
    const createdRow = await pm.onSmartTablesPage().getRowByEmail(user.email)

    await expect(createdRow).toBeVisible()
    await expect(createdRow).toContainText(user.id)
    await expect(createdRow).toContainText(user.firstName)
    await expect(createdRow).toContainText(user.lastName)
    await expect(createdRow).toContainText(user.username)
    await expect(createdRow).toContainText(user.email)
    await expect(createdRow).toContainText(user.age)
})