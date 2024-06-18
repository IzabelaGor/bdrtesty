import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
ecomm = new Ecomm(page); 

})
test('Wyszukanie produktu z nazwą szarlotka', async ({ page }) => {
  // given
  await ecomm.justpage().goToPage();
  // when
  await page.getByPlaceholder('Szukaj').fill('szarlotka');
  await page.getByRole('button', { name: '' }).click();
  //then
  await expect(page.getByText('Nie znaleziono produktów speł')).toBeVisible();

});