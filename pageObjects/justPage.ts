import { Expect, type Page } from "@playwright/test";

export class JustPage {
    protected page: Page 

    constructor(page: Page) {
        this.page = page;
    }
    protected async goTojustPage(){
        await this.page.goto('https://scentsofhome.pl/');
        await this.page.getByRole('button', { name: 'Zaakceptuj wszystkie' }).click();
    }
    public async goToPage(){
        await this.goTojustPage();
    }
}