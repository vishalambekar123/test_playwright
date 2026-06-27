// utility/AllureUtility.js
// Utility for Allure screenshot attachment

const { allure } = require('allure-playwright');

async function attachScreenshot(page, name = 'Failure Screenshot') {
  const screenshot = await page.screenshot({ fullPage: true });
  await allure.attach(name, screenshot, 'image/png');
}

module.exports = { attachScreenshot };
