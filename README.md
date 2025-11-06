# Playwright Project — Saucedemo Tests

This repository contains Playwright tests for the Saucedemo demo site (https://www.saucedemo.com/). The tests use Playwright Test with a Page Object pattern (pages and locators), and generate Allure results for reporting.

## Install
Open a terminal (cmd.exe) at the repository root and run:

```cmd
npm install
npx playwright install
```

`npm install` installs dev dependencies declared in `package.json` (including `@playwright/test` and `allure-playwright`). `npx playwright install` downloads the browser binaries required by Playwright.

## Available test scripts
The project `package.json` includes three convenience scripts for running specific specs in headed mode:
- `npm run Q1` — runs `tests/specs/loginAccount.spec.js` (headed)
- `npm run Q2` — runs `tests/specs/successfulOrder.spec.js` (headed)
- `npm run Q3` — runs `tests/specs/loginAccountglitch.spec.js` (headed)

You can run them from cmd.exe like:

```cmd
npm run Q1
```

You can also add a combined script to `package.json` to run all tests and automatically generate & open an Allure report. Add the following under the `scripts` section in `package.json`:

```json
"full-test": "npx playwright test --headed && npx allure generate allure-results --clean -o allure-report && npx allure open allure-report"
```

Run it from cmd.exe like:

```cmd
npm run full-test
```

## Running tests (general)
Run all tests (parallel as configured) in headless mode:

```cmd
npx playwright test
```

Run tests in headed mode:

```cmd
npx playwright test --headed
```
## Allure reporting
This project is configured to use the `allure-playwright` reporter and will produce results under the `allure-results` folder.
### Installation
```cmd
npm install --save-dev @playwright/test allure-playwright
```
add this in playwright.config.js
```cmd
reporter: [
    ['list'], // Playwright's built-in reporter
    ['allure-playwright', ({
      detail: true,
      outputFolder: 'allure-results', // Folder for Allure results
      suiteTitle: true,
    })],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://www.saucedemo.com/',
    video: 'retain-on-failure', // or 'on' for all tests, 'off', 'first-retry'
    screenshot: 'only-on-failure', // or 'on', 'off'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
```
Generate an Allure HTML report from the results and open it locally:

```cmd
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```



## Contact / Author
Author: Raiyan Nasim

---