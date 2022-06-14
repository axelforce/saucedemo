import {WebPage} from "./webPage";
import { Locator, Page } from '@playwright/test';

export class ProductsPage extends WebPage {
  readonly dropdownMenu: Locator;
  readonly logoutButton: Locator;
  readonly shoppingCartButton: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdownMenu = page.locator('[id="react-burger-menu-btn"]');
    this.logoutButton = page.locator('[id="logout_sidebar_link"]');
    this.shoppingCartButton = page.locator('[id="shopping_cart_container"]');
    this.addToCartButton = page.locator('[class="btn btn_primary btn_small btn_inventory"]')
  }

  async logout() {
    await this.dropdownMenu.click();
    await this.logoutButton.click();
  }

  async findSpecialItemForCart(itemName) {
    await this.page.locator(`text="${itemName}"`).click();
  }
}
