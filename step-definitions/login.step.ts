import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import {expect} from '@playwright/test';
setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;

Given('I navigate to the login page', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000 });
});

When('I enter valid credentials', async function () {
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  console.log("Login submitted");
});

Then('I should see the dashboard', async function () {
  await expect(page.locator('h6')).toHaveText('Dashboard', { timeout: 20000 });
  console.log("Dashboard verified");
  await browser.close();
});