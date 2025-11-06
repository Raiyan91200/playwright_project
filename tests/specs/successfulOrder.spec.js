import loginPage from "../pages/login";
import mainpage from "../pages/mainpage";
import UniqueRandomGenerator from "../utils/utils";
import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });
test.describe("Q2 Add to cart and checkout then logout Make a Happy Path", () => {
    let login, main, page, context;
    let generator = new UniqueRandomGenerator(1, 6);
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        login = new loginPage(page);
        main = new mainpage(page);
        await page.goto("/");
    });
    test("login to the Account using standard_user and password", async () => {
        await login.enterUsername("standard_user");
        await login.enterPassword("secret_sauce");
        await login.clickLogin();
    });
    test("Reset App State", async () => {
        await main.clickHamburgerMenu();
        await main.clickResetBtn();
    });
    test("Add items to cart", async () => {
        await main.clickAddToCartBtn(generator.getUniqueRandom());
        await main.clickAddToCartBtn(generator.getUniqueRandom());
        await main.clickAddToCartBtn(generator.getUniqueRandom());
    });

    test("Checkout", async () => {
        await main.clickCartBtn();
        await main.clickCheckoutBtn();
        await main.enterFirstName("Raiyan");
        await main.enterLastName("Nasim");
        await main.enterPostalCode("1216");
        await main.clickContinueBtn();
        await main.clickFinishBtn();
    });

    test("Logout", async () => {
        await main.clickHamburgerMenu();
        await main.clickLogoutBtn();
    });
});
