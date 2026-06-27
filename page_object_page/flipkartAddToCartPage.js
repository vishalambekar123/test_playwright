
class FlipkartAddToCartPage {
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
}