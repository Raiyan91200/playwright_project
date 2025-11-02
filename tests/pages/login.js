import loginLocator from "../locator/loginLocator";

export default class loginPage {
    constructor(page) {
        this.page = page;
        this.loginLocator = new loginLocator(page);
    }
    async enterUsername(username) {
        await this.loginLocator.emailInput.fill(username);
    }
    async enterPassword(password) {
        await this.loginLocator.passwordInput.fill(password);
    }
    async clickLogin() {
        await this.loginLocator.loginButton.click();
    }
}