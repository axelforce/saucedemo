import {WebPage} from "./webPage";
import {BrowserContext, Locator, Page} from '@playwright/test';

export class ProductsPage extends WebPage {
  readonly shoppingCartButton: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page);
    this.shoppingCartButton = page.locator('[id="shopping_cart_container"]');
    this.addToCartButton = page.locator('[class="btn btn_primary btn_small btn_inventory"]')
  }

  async opeProductDetailsByName(itemName) {
    await this.page.locator(`text="${itemName}"`).click();
  }
}
