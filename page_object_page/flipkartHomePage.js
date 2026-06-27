// page_object_page/flipkartHomePage.js
// Page Object Model for Flipkart homepage (www.flipkart.com)

class FlipkartHomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Login button (mouse hover target)
    this.loginButton = page.locator('span').filter({ hasText: 'Login' }).first(); // Main login button (may need to update selector if Flipkart changes UI)
    // Fields visible after hovering on login
    this.myProfile = page.getByRole('link', { name: 'My Profile' });
    this.flipkartPlusZone = page.getByRole('link', { name: 'Flipkart Plus Zone' });
    this.orders = page.getByRole('link', { name: 'Orders' });
    this.wishlist = page.getByRole('link', { name: 'Wishlist' });
    this.rewards = page.getByRole('link', { name: 'Rewards' });
    this.giftCards = page.getByRole('link', { name: 'Gift Cards' });
  }

  async goto() {
    await this.page.goto('https://www.flipkart.com/');
  }

  async hoverLoginButton() {
    await this.loginButton.hover();
  }

  async clickMyProfile() {
    await this.myProfile.click();
  }

  async clickFlipkartPlusZone() {
    await this.flipkartPlusZone.click();
  }

  async clickOrders() {
    await this.orders.click();
  }

  async clickWishlist() {
    await this.wishlist.click();
  }

  async clickRewards() {
    await this.rewards.click();
  }

  async clickGiftCards() {
    await this.giftCards.click();
  }
}

module.exports = { FlipkartHomePage };
