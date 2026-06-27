// page_object_page/flipkartLoginPage.js
// Page Object Model for Flipkart Login Page

class FlipkartLoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.mobileInput = page.locator('input.c3Bd2c.yXUQVt'); // Flipkart login mobile input
    this.requestOtpButton = page.getByRole('button', { name: /Request OTP/i });
    this.errorMsg = page.locator('span._2YULOR'); // Error message selector (may need update if UI changes)
  }

  async enterMobileNumber(mobile) {
    await this.mobileInput.fill(mobile);
  }

  async clickRequestOtp() {
    await this.requestOtpButton.click();
  }

  async getErrorMsg() {
    return this.errorMsg.textContent();
  }
}

module.exports = { FlipkartLoginPage };
