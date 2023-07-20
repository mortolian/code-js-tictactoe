// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('./');
    await expect(page).toHaveTitle(/TicTacToe/);
});

test('click the new game button', async({ page }) => {
    await page.goto('./');
    await page.locator('#block-0').click();
    await page.locator('#block-4').click();
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

test('X Player Wins', async({ page }) => {
    await page.goto('./');
    await page.locator('#block-0').click();
    await page.locator('#block-4').click();
    await page.locator('#block-1').click();
    await page.locator('#block-5').click();
    await page.locator('#block-2').click();
    await expect(page.locator('#outcome')).toHaveText(/The WINNER is player X/);
});

test('O Player Wins', async({ page }) => {
    await page.goto('./');
    await page.locator('#block-0').click();
    await page.locator('#block-4').click();
    await page.locator('#block-1').click();
    await page.locator('#block-2').click();
    await page.locator('#block-7').click();
    await page.locator('#block-6').click();
    await expect(page.locator('#outcome')).toHaveText(/The WINNER is player O/);
});

test('Game ends in a draw', async({ page }) => {
    await page.goto('./');
    await page.locator('#block-0').click();
    await page.locator('#block-4').click();
    await page.locator('#block-1').click();
    await page.locator('#block-2').click();
    await page.locator('#block-6').click();
    await page.locator('#block-3').click();
    await page.locator('#block-5').click();
    await page.locator('#block-8').click();
    await page.locator('#block-7').click();
    await expect(page.locator('#outcome')).toHaveText(/This game is a DRAW!/);
});

test('Game has a winner even when 9 games are played', async({ page }) => {
    await page.goto('./');
    await page.locator('#block-0').click();
    await page.locator('#block-4').click();
    await page.locator('#block-3').click();
    await page.locator('#block-6').click();
    await page.locator('#block-7').click();
    await page.locator('#block-5').click();
    await page.locator('#block-1').click();
    await page.locator('#block-8').click();
    await page.locator('#block-2').click();
    await expect(page.locator('#outcome')).toHaveText(/The WINNER is player X/);
});

test('Check that the player turn indicator changes correctly.', async({ page }) => {
    await page.goto('./');
    await expect(page.locator('#x-player')).toHaveClass(/selected/);
    await page.locator('#block-0').click();
    await expect(page.locator('#o-player')).toHaveClass(/selected/);
    await page.locator('#block-1').click();
    await expect(page.locator('#x-player')).toHaveClass(/selected/);
});

test('Test if the GitHub link in the footer works', async ({ page }) => {
    await page.goto('./');
    const pagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Code Available on GitHub.' }).click();
    const githubPage = await pagePromise;
    console.log(await githubPage.title());
});