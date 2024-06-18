import { Expect, type Page } from "@playwright/test";

export class MenuPage {
    protected page: Page 

    constructor(page: Page) {
        this.page = page;
    }
    protected async goToMenu(menuLabel: string){
        await this.page.goto('https://scentsofhome.pl/');
        await this.page.getByRole('button', { name: 'Zaakceptuj wszystkie' }).click();
        await this.page.getByRole('link', { name: 'Zaloguj się' }).click();  
    }
    public async goToLogin(){
        await this.goToMenu('Zaloguj się');
    }
}