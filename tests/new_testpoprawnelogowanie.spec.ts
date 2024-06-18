import { test, expect } from '@playwright/test';
import { Ecomm } from '../pageObjects/ecomm';

let ecomm: Ecomm

test.beforeEach(async ({ page }) => {
ecomm = new Ecomm(page); 

})

test('Poprawne logowanie do systemu', async ({ page }) => {
// given
  await ecomm.menu().goToLogin();
  // when
  await ecomm.login().loginToPanel();
  //then
  await ecomm.login().checkPassLogin();
});