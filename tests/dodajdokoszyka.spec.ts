import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
ecomm = new Ecomm(page); 

})
test('Dodanie do koszyka', async ({ page }) => {
  // given
  await ecomm.justpage().goToPage();
  //when
  await page.locator('a').filter({ hasText: 'Grejpfrut z bergamotką' }).click();
  await page.getByRole('button', { name: 'Do koszyka' }).click();
  await page.getByText('Pomyślnie dodano do koszyka:').click();
  //then
  await expect(page.getByText('Złóż zamówienie')).toBeVisible();
});