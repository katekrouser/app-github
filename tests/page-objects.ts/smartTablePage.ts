import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    age: string;
}

export class SmartTablePage extends HelperBase {

    private readonly smartTableContainer: Locator;

    // Table actions
    private readonly addButton: Locator;

    // Filters
    private readonly idFilterInput: Locator;
    private readonly firstNameFilterInput: Locator;
    private readonly lastNameFilterInput: Locator;
    private readonly usernameFilterInput: Locator;
    private readonly emailFilterInput: Locator;
    private readonly ageFilterInput: Locator;

    // Create row
    private readonly createRow: Locator;
    private readonly _idInput: Locator;
    private readonly _firstNameInput: Locator;
    private readonly _lastNameInput: Locator;
    private readonly _usernameInput: Locator;
    private readonly _emailInput: Locator;
    private readonly _ageInput: Locator;

    private readonly createButton: Locator;
    private readonly cancelCreateButton: Locator;

    // Table rows
    private readonly tableRows: Locator;

    constructor(page: Page) {
        super(page);

        this.smartTableContainer = this.page.locator(
            "nb-card",
            { hasText: "Smart Table" }
        );

        this.addButton = this.smartTableContainer.locator(
            ".ng2-smart-action-add-add"
        );

        // Filters
        this.idFilterInput =
            this.smartTableContainer.locator("thead").getByPlaceholder("ID");

        this.firstNameFilterInput =
            this.smartTableContainer.locator("thead").getByPlaceholder("First Name");

        this.lastNameFilterInput =
            this.smartTableContainer.locator("thead").getByPlaceholder("Last Name");

        this.usernameFilterInput =
            this.smartTableContainer.locator("thead").getByPlaceholder("Username");

        this.emailFilterInput =
            this.smartTableContainer.locator("thead").getByPlaceholder("E-mail");

        this.ageFilterInput =
            this.smartTableContainer.locator("thead").getByPlaceholder("Age");

        // Create form row
        this.createRow = this.smartTableContainer.locator(
            "tr[ng2-st-thead-form-row]"
        );

        this._idInput = this.createRow.getByPlaceholder("ID");
        this._firstNameInput = this.createRow.getByPlaceholder("First Name");
        this._lastNameInput = this.createRow.getByPlaceholder("Last Name");
        this._usernameInput = this.createRow.getByPlaceholder("Username");
        this._emailInput = this.createRow.getByPlaceholder("E-mail");
        this._ageInput = this.createRow.getByPlaceholder("Age");

        this.createButton = this.createRow.locator(
            ".ng2-smart-action-add-create"
        );

        this.cancelCreateButton = this.createRow.locator(
            ".ng2-smart-action-add-cancel"
        );

        this.tableRows = this.smartTableContainer.locator(
            "tbody tr.ng2-smart-row"
        );
    }

    get idInput(): Locator {
        return this._idInput;
    }

    get firstNameInput(): Locator {
        return this._firstNameInput;
    }

    get lastNameInput(): Locator {
        return this._lastNameInput;
    }

    get usernameInput(): Locator {
        return this._usernameInput;
    }

    get emailInput(): Locator {
        return this._emailInput;
    }

    get ageInput(): Locator {
        return this._ageInput;
    }

    async clickAddRecord() {
        await this.addButton.click();
    }

    async fillId(id: string) {
        await this.idInput.fill(id);
    }

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async fillUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillAge(age: string) {
        await this.ageInput.fill(age);
    }

    async fillCreateUserForm(user: UserData) {
        await this.fillId(user.id);
        await this.fillFirstName(user.firstName);
        await this.fillLastName(user.lastName);
        await this.fillUsername(user.username);
        await this.fillEmail(user.email);
        await this.fillAge(user.age);
    }

    async saveUser() {
        await this.createButton.click();
    }

    async cancelUserCreation() {
        await this.cancelCreateButton.click();
    }

    async createUser(user: UserData) {
        await this.clickAddRecord();
        await this.fillCreateUserForm(user);
        await this.saveUser();
    }

    async filterByEmail(email: string) {
        await this.emailFilterInput.fill(email);
    }

    async filterByFirstName(firstName: string) {
        await this.firstNameFilterInput.fill(firstName);
    }

    async getRowByEmail(email: string): Promise<Locator> {
        return this.tableRows.filter({
            hasText: email,
        });
    }

    async clickEditForRow(email: string) {
        const row = await this.getRowByEmail(email);
        await row.locator(".ng2-smart-action-edit-edit").click();
    }

    async clickDeleteForRow(email: string) {
        const row = await this.getRowByEmail(email);
        await row.locator(".ng2-smart-action-delete-delete").click();
    }
}