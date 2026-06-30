import { test, expect } from './page-objects/test-options'
import { faker } from '@faker-js/faker'

    const user = {
        id: faker.number.int({ min: 100, max: 999 }).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 65 }).toString(),
    }

test.describe('Smart Table Tests', () => {

    test('Add new user to Smart Table',{ tag: '@regression' }, async ({ page, pm }) => {

        await test.step('Open smart table page', async () => {
            await pm.navigateTo().openSmartTable()
        });

        await test.step('Create new user entry', async () => {
            await pm.onSmartTablesPage().createUser(user)
        });

        await test.step('Verify new row has been added with user data', async () => {
            const createdRow = await pm.onSmartTablesPage().getRowByEmail(user.email)
            await expect(createdRow).toBeVisible()
            await expect(createdRow).toBeVisible()
            await expect(createdRow).toContainText(user.id)
            await expect(createdRow).toContainText(user.firstName)
            await expect(createdRow).toContainText(user.lastName)
            await expect(createdRow).toContainText(user.username)
            await expect(createdRow).toContainText(user.email)
            await expect(createdRow).toContainText(user.age)
        })
    })
})