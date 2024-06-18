import { Page } from "@playwright/test";
import { MenuPage } from "./menuPage";
import {LoginPage } from "./LoginPage";
import {JustPage } from "./justPage";



export class Ecomm {
    private readonly page: Page
    private readonly MenuPage: MenuPage 
    private readonly LoginPage: LoginPage
    private readonly JustPage: JustPage



    constructor(page: Page){
        this.page =  page
        this.MenuPage = new MenuPage(this.page)
        this.LoginPage = new LoginPage(this.page)
        this.JustPage = new JustPage(this.page)

    
    }

    menu(){
        return this.MenuPage
    }
    login(){
        return this.LoginPage
    }
    justpage(){
        return this.JustPage
    }
}