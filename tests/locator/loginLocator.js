export default class loginLocator {
    constructor(page) {
        this.page = page;
        this.emailInput = this.page.locator('//input[@id="user-name"]');
        this.passwordInput = this.page.locator('//input[@id="password"]');
        this.loginButton = this.page.locator('//input[@id="login-button"]');
        this.errorMessage = this.page.locator('//h3[@data-test="error"]');
    }
}
