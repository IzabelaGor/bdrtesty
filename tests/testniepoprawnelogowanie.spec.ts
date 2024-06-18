import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
ecomm = new Ecomm(page); 

})

test('Niepoprawne logowanie do systemu', async ({ page }) => {
// given
  await ecomm.menu().goToLogin();
  // when
  await page.getByLabel('E-mail:').click();
  await page.getByLabel('E-mail:').fill('scentsofhomee@gmail.com');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('Wodawoda123');
  await page.getByRole('button', { name: 'Zaloguj się' }).click();
  //then
  await expect(page.getByText('Niepoprawne dane logowania.')).toBeVisible();
});