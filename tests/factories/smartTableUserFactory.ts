import { faker } from "@faker-js/faker";
import { SmartTableUser } from "../models/smartTableUser";

export class SmartTableUserFactory {
    static create(overrides: Partial<SmartTableUser> = {}): SmartTableUser {

        return {
            id: faker.number.int({ min: 100, max: 999 }).toString(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            username: faker.internet.username(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 65 }).toString(),

            ...overrides,
        };
    }
}