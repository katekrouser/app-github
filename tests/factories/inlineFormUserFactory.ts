import { faker } from "@faker-js/faker";
import { InlineFormUser } from "../models/inlineFormUser";

export class InlineFormUserFactory {
    static create(overrides: Partial<InlineFormUser> = {}): InlineFormUser {
        const fullName = faker.person.fullName();
        const emailPrefix = fullName.toLowerCase().replace(/\s+/g, "");

        return {
            fullName,
            email: `${emailPrefix}qaauto@test.com`,
            ...overrides,
        };
    }
}