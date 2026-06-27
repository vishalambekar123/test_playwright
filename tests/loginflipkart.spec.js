// tests/loginflipkart.spec.js
// Test case for Flipkart login with invalid mobile number

const { test, expect } = require('@playwright/test');
const { FlipkartHomePage } = require('../page_object_page/flipkartHomePage');
const { FlipkartLoginPage } = require('../page_object_page/flipkartLoginPage');

test('loginflipkart', async ({ page }) => {
  const homePage = new FlipkartHomePage(page);
  const loginPage = new FlipkartLoginPage(page);

  try {
    await homePage.goto();
    await homePage.hoverLoginButton();
    await homePage.loginButton.click();

    // Enter 8-digit mobile number (invalid)
    await loginPage.enterMobileNumber('12345678');
    await loginPage.clickRequestOtp();

    // Capture error message
    const errorMsg = await loginPage.getErrorMsg();
    console.log('Error Message:', errorMsg);
    await expect(loginPage.errorMsg).toBeVisible();
  } catch (error) {
    await page.screenshot({ path: 'loginflipkart_failure.png', fullPage: true });
    throw error;
  }
});
