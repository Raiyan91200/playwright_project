import loginPage from "../pages/login";
import { test, expect } from "@playwright/test";
import mainpage from "../pages/mainpage";

test.describe.configure({ mode:"serial" });
test.describe("Q3 Login with glitch user account  ", () => {
    let login, main, page, context, name1, name2, name3, price1, price2, price3, taxText, totalText;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        login = new loginPage(page);
        main = new mainpage(page);
        await page.goto("/");
    });

    test("Successful login", async () => {
        await login.enterUsername("performance_glitch_user");
        await login.enterPassword("secret_sauce");
        await login.clickLogin();
    });
    test("Test Reset State", async () => {
        await main.clickHamburgerMenu();
        await main.clickResetBtn();
    });
    test("Verify Filter Z to A", async () => {
        await main.clickfilterDropdown();
        await main.selectFilterZtoA();
    });
    test("Add to cart 1st 3 item",async () =>{
        await main.clickAddToCartBtn(1);
        await main.clickAddToCartBtn(2);
        await main.clickAddToCartBtn(3);
        await main.clickCartBtn();
    })
    
    test("Checkout", async () => {
        await main.clickCheckoutBtn();
        await main.enterFirstName("Raiyan");
        await main.enterLastName("Nasim");
        await main.enterPostalCode("1216");
        await main.clickContinueBtn();
    });
    test("verify the item name ", async () => {
        name1 = await main.getproductName(1);
        name2 = await main.getproductName(2);
        name3 = await main.getproductName(3);
    });
    test("verify items in the cart item name", async () => {
        expect(name1).toBe('Test.allTheThings() T-Shirt (Red)');
        expect(name2).toBe('Sauce Labs Onesie');
        expect(name3).toBe('Sauce Labs Fleece Jacket');
      });
    test("verify the price", async () => {
        var price1= await main.getTheprice(1);
        var ammount1= parseFloat(price1.replace('$',''));
        var price2= await main.getTheprice(2);
        var ammount2= parseFloat(price2.replace('$',''));
        var price3= await main.getTheprice(3);
        var ammount3= parseFloat(price3.replace('$',''));
        var taxText= await main.gettax();
        var taxAmount= parseFloat(taxText.replace('Tax: $',''));
        var total= ammount1 + ammount2 + ammount3 + taxAmount;
        var totalText= await main.gettotal();
        var totalAmount= parseFloat(totalText.replace('Total: $',''));
        test.expect(total).toBeCloseTo(totalAmount,2);
        await main.clickFinishBtn();

    });
    test("Confirm message verify", async () => {
        const confirmationMessage = await main.getOrderConfirmationMessage();
        expect(confirmationMessage).toBe("Thank you for your order!");
    });
    test("Test Reset State Again", async () => {
        await main.clickHamburgerMenu();
        await main.clickResetBtn();
    });
    test("Logout", async () => {
        
        await main.clickLogoutBtn();
    });
});