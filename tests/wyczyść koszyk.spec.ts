import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
ecomm = new Ecomm(page); 

})
test('Wyczyść koszyk', async ({ page }) => {
  // given
  await ecomm.justpage().goToPage();
  //when
  await page.locator('a').filter({ hasText: 'Grejpfrut z bergamotką' }).click();
  await page.getByRole('button', { name: 'Do koszyka' }).click();
  await page.getByRole('link', { name: 'Złóż zamówienie' }).click();
  await page.getByRole('link', { name: '(1)' }).click();
  await page.getByRole('link', { name: 'Usuń produkt z koszyka' }).click();
  //then
  await expect(page.getByText('Produkt usunięty z koszyka.')).toBeVisible();
  await expect(page.getByText('Twój koszyk jest pusty.')).toBeVisible();
  
});