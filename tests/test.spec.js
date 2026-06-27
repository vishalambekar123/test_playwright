import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from './playwrightHomePage';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});