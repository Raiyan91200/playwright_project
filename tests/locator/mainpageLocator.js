export default class mainpageLocator {
    constructor(page) {
        const index = 0;
        this.page = page;
        this.hamburgerMenu = this.page.locator('//button[@id="react-burger-menu-btn"]');
        this.resetBtn = this.page.locator('//a[@id="reset_sidebar_link"]');
        //this.addToCartBtn = this.page.locator(`//div[@data-test="inventory-list"]//div[@data-test="inventory-item"][${index}]//button[text()="Add to cart"]`);
        this.cartBtn = this.page.locator('//a[@data-test="shopping-cart-link"]');
        this.checkoutBtn = this.page.locator('//button[@id="checkout"]');
        this.firstNameInput = this.page.locator('//input[@id="first-name"]');
        this.lastNameInput = this.page.locator('//input[@id="last-name"]');
        this.postalCodeInput = this.page.locator('//input[@id="postal-code"]');
        this.continueBtn = this.page.locator('//input[@id="continue"]');
        this.finishBtn = this.page.locator('//button[@id="finish"]');
        this.orderConfirmationMessage = this.page.locator('//h2[@class="complete-header"]');
        this.logoutBtn = this.page.locator('//a[@id="logout_sidebar_link"]');
        this.filterDropdown = this.page.locator('//select[@data-test="product-sort-container"]');
        //this.selectZtoAOption = this.page.locator('//option[@value="za"]');
        
    }

    
   
}
