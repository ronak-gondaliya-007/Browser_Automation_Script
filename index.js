const { chromium } = require("playwright");

(async () => {
  try {
    var browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://cms.imentor.org/");
    await page
      .getByPlaceholder("john@gmail.com")
      .fill("dhaval01pla@yopmail.com");
    await page.getByPlaceholder("********").fill("Admin@123");
    await page.getByRole("button").click();
    setInterval(async () => {
      await page.getByText('Reporting', { exact: true }).click();
      await page.getByText('Pairs', { exact: true }).click();
    }, 10000);
  } catch (error) {
    await browser.close();
    console.log("Error :::::::::: ", error);
  }
})();
