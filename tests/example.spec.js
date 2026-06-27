// @ts-check
import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from './playwrightHomePage';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  await homePage.goto();
  await homePage.clickGetStarted();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
