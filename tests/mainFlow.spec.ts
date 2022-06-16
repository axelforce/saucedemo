import {expect} from '@playwright/test';
import {test} from '../fixtures/baseFixture'
import {userForLogin} from "../testData/dataForTests";

test.describe('Main Test Flow', () => {

  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.login(userForLogin.username, userForLogin.password);
  });

  test('Success login flow', async ({ page, productPage }) => {
    await expect(productPage.shoppingCartButton).toBeVisible();
  });

  test('Logout flow', async ({ page, mainMenu, loginPage }) => {
    await mainMenu.logout();

    await expect(loginPage.loginContainer).not.toBeVisible();
  });

  test('Adding product to Cart', async ({ page, productPage, shoppingCart }) => {
    await productPage.opeProductDetailsByName('Sauce Labs Bolt T-Shirt');
    await productPage.addToCartButton.click();
    await productPage.shoppingCartButton.click();

    await expect(shoppingCart.firstItem).toHaveText('Sauce Labs Bolt T-Shirt');
  });
});
