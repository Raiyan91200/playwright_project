import loginPage from "../pages/login";
import { test, expect } from "@playwright/test";
import mainpage from "../pages/mainpage";

test.describe.configure({ mode:"serial" });
test.describe("Login with glitch user account  ", () => {
    let login, main, page, context;
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
        await page.pause();
        await main.clickfilterDropdown();
        await main.selectFilterZtoA();
    });
    test("Add to cart 1st 3 item",async () =>{
        await main.clickAddToCartBtn(1);
        await main.clickAddToCartBtn(2);
        await main.clickAddToCartBtn(3);
    })
});