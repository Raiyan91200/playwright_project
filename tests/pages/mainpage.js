import loginLocator from "../locator/loginLocator";
import mainpageLocator from "../locator/mainpageLocator";

export default class mainpage {
    constructor(page) {
        this.page = page;
        this.mainpageLocator = new mainpageLocator(page);
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
    async clickHamburgerMenu() {
        await this.mainpageLocator.hamburgerMenu.click();
    }
    async clickResetBtn() {
        await this.mainpageLocator.resetBtn.click();
    }
    async clickAddToCartBtn(index) {
        return this.page.locator(`//div[@data-test="inventory-list"]//div[@data-test="inventory-item"][${index}]//button[text()="Add to cart"]`).click(); // i could not find a way to use the locator from mainpageLocator.js here
    }
    async getproductName(index) {
        // use Playwright's innerText() (async)
        return await this.page.locator(`//div[@data-test="cart-list"]//div[@data-test="inventory-item"][${index}]//div[@data-test="inventory-item-name"]`).innerText();
      }
    async getTheprice(index) {
        return this.page.locator(`//div[@data-test="cart-list"]//div[@data-test="inventory-item"][${index}]//div[@data-test="inventory-item-price"]`).innerText();
    }
    async gettax(){
        return this.page.locator('//div[@data-test="tax-label"]').innerText();
    }
    async gettotal(){
        return this.page.locator('//div[@data-test="total-label"]').innerText();
    }
    async clickfilterDropdown() {
        await this.mainpageLocator.filterDropdown.click();
    }
    async selectFilterZtoA() {
        await this.mainpageLocator.filterDropdown.selectOption('za');
    }
    async clickCartBtn() {
        await this.mainpageLocator.cartBtn.click();
    }
    async clickCheckoutBtn() {
        await this.mainpageLocator.checkoutBtn.click();
    }
    async enterFirstName(firstName) {
        await this.mainpageLocator.firstNameInput.fill(firstName);
    }
    async enterLastName(lastName) {
        await this.mainpageLocator.lastNameInput.fill(lastName);
    }
    async enterPostalCode(postalCode) {
        await this.mainpageLocator.postalCodeInput.fill(postalCode);
    }
    async clickContinueBtn() {
        await this.mainpageLocator.continueBtn.click();
    }
    async clickFinishBtn() {
        await this.mainpageLocator.finishBtn.click();
    }
    async getOrderConfirmationMessage() {
        return await this.mainpageLocator.orderConfirmationMessage.innerText();
    }
    async clickLogoutBtn() {
        await this.mainpageLocator.logoutBtn.click();
    }

}