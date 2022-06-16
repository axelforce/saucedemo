import {test as base} from '@playwright/test';
import {LoginPage} from "../pages/loginPage";
import {ProductsPage} from "../pages/productsPage";
import {ShoppingCart} from "../pages/shoppingCart";
import {MainMenu} from "../pages/mainMenu";

type ixsFixtures = {
  loginPage: LoginPage;
  productPage: ProductsPage;
  shoppingCart: ShoppingCart;
  mainMenu: MainMenu;
}

export const test = base.extend<ixsFixtures>({
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL);
    await use(page);
  },

  loginPage: async ({ page, context }, use) => {
    await use(new LoginPage(page, context));
  },

  productPage: async ({ page, context }, use) => {
    await use(new ProductsPage(page, context));
  },

  shoppingCart: async ({ page, context }, use) => {
    await use(new ShoppingCart(page, context));
  },

  mainMenu: async ({ page, context }, use) => {
    await use(new MainMenu(page, context));
  }
});
