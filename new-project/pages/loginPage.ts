import {WebPage} from "./webPage";
import { Locator, Page } from '@playwright/test';

export class LoginPage extends WebPage {
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly loginContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.loginContainer = page.locator('[id="login_button_container"]');
  }

  async login(userName, password) {
    await this.userNameField.fill(userName);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
