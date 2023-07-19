// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('./');
    await expect(page).toHaveTitle(/TicTacToe/);
});

test('click the new game button', async({ page }) => {
    await page.goto('./');
    await page.getByText('New Game').click();
    await expect(page.locator('#block-0')).toBeEmpty();
    await expect(page.locator('#block-1')).toBeEmpty();
    await expect(page.locator('#block-2')).toBeEmpty();
    await expect(page.locator('#block-3')).toBeEmpty();
    await expect(page.locator('#block-4')).toBeEmpty();
    await expect(page.locator('#block-5')).toBeEmpty();
    await expect(page.locator('#block-6')).toBeEmpty();
    await expect(page.locator('#block-7')).toBeEmpty();
    await expect(page.locator('#block-8')).toBeEmpty();
});