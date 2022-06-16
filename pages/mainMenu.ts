import {WebPage} from "./webPage";
import {BrowserContext, Locator, Page} from '@playwright/test';

export class MainMenu extends WebPage {
  readonly burgerMenu: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page, context?: BrowserContext) {
    super(page);
    this.burgerMenu = page.locator('[id="react-burger-menu-btn"]');
    this.logoutButton = page.locator('[id="logout_sidebar_link"]');
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutButton.click();
  }
}
