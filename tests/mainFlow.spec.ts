import {expect} from '@playwright/test';
import {test} from '../fixtures/baseFixture'
import {LoginPage} from "../pages/loginPage";
import {ProductsPage} from "../pages/productsPage";
import {ShoppingCart} from "../pages/shoppingCart";
import {userForLogin} from "../testData/dataForTests";

test.describe('Main Test Flow', () => {
  let loginPage: LoginPage;
  let productPage: ProductsPage;
  let shoppingCart: ShoppingCart;

  const boltTShirtName = 'Sauce Labs Bolt T-Shirt';

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductsPage(page);
    shoppingCart = new ShoppingCart(page);
  });

  test('Success login flow', async ({ page }) => {
    await loginPage.login(userForLogin.username, userForLogin.password);

    await expect(productPage.shoppingCartButton).toBeVisible();
  });

  test('Logout flow', async ({ page }) => {
    await loginPage.login(userForLogin.username, userForLogin.password);
    await productPage.logout();

    await expect(loginPage.loginContainer).toBeVisible();
  });

  test('Adding product to Cart', async ({ page }) => {
    await loginPage.login(userForLogin.username, userForLogin.password);
    await productPage.findSpecialItemForCart(boltTShirtName);
    await productPage.addToCartButton.click();
    await productPage.shoppingCartButton.click();

    await expect(shoppingCart.firstItem).toHaveText(boltTShirtName);
  });
});
