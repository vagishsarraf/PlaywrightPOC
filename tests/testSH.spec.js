// @ts-check
const { test, expect, chromium } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
test.describe("Test case block for TC-1", () => {
  test(
    "Login to Selectors Hub Portal",
    async ({ }) => {
      const browser = await chromium.launch({slowMo:100})
      const page = await browser.newPage();
      const pomanager = new POManager(page);
      const sh_page = pomanager.getSelectorsHub();
      await sh_page.goTo();
      await sh_page.fillformTextboxes();
      await sh_page.sortColumns("OS");
    }
  );
});
