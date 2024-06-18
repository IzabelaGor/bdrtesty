import { expect, type Page } from "@playwright/test";
import * as dootenv from 'dotenv'
dootenv.config()

export class LoginPage {
    protected page: Page 

    constructor(page: Page) {
        this.page = page;
    }
    async loginToPanel(){
        await this.page.getByLabel('E-mail:').fill(process.env.LOGIN!);
        await this.page.getByLabel('Hasło:').fill(process.env.PASSWORD!);
        await this.page.getByRole('button', { name: 'Zaloguj się' }).click();
    }
    async checkPassLogin(){
        await expect(this.page.getByText('Witaj Izabela GORGOŃ')).toBeVisible();
    }
}