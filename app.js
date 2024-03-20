const { chromium } = require("playwright");

const time = 1000; //execute after 5 min
const breakTime = 1000; //execute after 5 min

setTimeout(() => {
  (async () => {
    // Launch a browser in headful mode (visible)
    const browser = await chromium.launch({ headless: false });

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    try {
      // Navigate to your website
      await page.goto("https://hrms.superworks.com");
      const usernameInput = page.locator('input[name="identifier"]');
      await usernameInput.fill("ronak.gondaliya@artoon.in");
      const passwordInput = page.locator('input[name="password"]');
      await passwordInput.fill("Ro#524#@");
      await page.getByRole("button", { name: "Login" }).click();
      await page.waitForSelector("#root"); // Check for dashboard title
      await page.getByRole("button", { name: "BREAK" }).click();
      const ReasonInput = page.getByPlaceholder(" ", { exact: true });
      await ReasonInput.fill("Lunch");
      await page.getByRole("button", { name: "Submit" }).click();
      // Wait for the dropdown to appear
      await page.getByLabel("Select activity").fill('Coding');
      //   setInterval(async() => {
      //       await page.getByRole("button", { name: "CLOCK IN" }).click();
      //   }, breakTime);
    } catch (error) {
      console.error("Error occurred:", error);
      // Close the browser in case of an error
      await browser.close();
    }

    setTimeout(async () => {
      await browser.close();
    }, 1000);
  })();
}, time);
