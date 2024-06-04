// @ts-check
const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
test.describe("Test case block for TC-1", () => {
    test.describe.configure({mode: "serial"})
  test.use({
    geolocation: { longitude: 0.7139558, latitude: 0.548533 },
    colorScheme: 'light',
  });
  test(
    "Login to Lambdatest Portal",
    {
      tag: "@smoke",
      annotation: {
        type: "Lambatest portal",
        description: "learning from documentation",
      },
    },
    async ({ page }) => {
      const pomanager = new POManager(page);
      const login_page = pomanager.getLoginPage();
      await login_page.goTo();
      await login_page.LoginToPortal();
      await login_page.getSessionStorage();
    }
  );
});

test.describe("Test case block for TC-2", () => {
    test.use({
      geolocation: { longitude: 0.7139558, latitude: 0.548533 },
      colorScheme: 'dark',
      storageState: 'storageState.json'
    });
    test(
      "Login to Lambdatest Portal Yet another test case",
      {
        tag: "@smoke",
        annotation: {
          type: "Lambatest portal",
          description: "learning from documentation",
        },
      },
      async ({ page }) => {
        const pomanager = new POManager(page);
        const login_page = pomanager.getLoginPage();
        await login_page.goToUrl('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        // await page.pause();
      }
    );
  });
