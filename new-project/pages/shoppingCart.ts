import {WebPage} from "./webPage";
import { Locator, Page } from '@playwright/test';

export class ShoppingCart extends WebPage {
  readonly firstItem: Locator;

  constructor(page: Page) {
    super(page);
    this.firstItem = page.locator('[id="item_1_title_link"] [class="inventory_item_name"]');
  }
}
