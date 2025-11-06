import loginPage from "../pages/login"; 
import { test, expect } from "@playwright/test";
test.describe.configure({ mode:"serial" });
test.describe("Q1 Login to the account ", () => {
    let login,page,context;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        login = new loginPage(page);
        await page.goto("/");
    });

    test("Unsuccessful login", async () => {
        await login.enterUsername("locked_out_user");
        await login.enterPassword("secret_sauce");
        await login.clickLogin();
    });
    test("Verify the error message", async () => {
        const errorMessage = await login.loginLocator.errorMessage.innerText();
        expect(errorMessage).toContain("Epic sadface: Sorry, this user has been locked out.");
    });
});