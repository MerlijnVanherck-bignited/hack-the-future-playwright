import { test, expect, Page } from '@playwright/test';

test('', async ({ page }) => {
  await page.goto('https://hackthefuture.bignited.be');

  await page.locator('#action-button').click();

  await page.waitForLoadState('load', { timeout: 30000 });

  await page.locator('body').click();
  
  await skipTransition(page);

  await page.waitForURL('**/information');

  await page.reload();

  await page.locator('#name').fill('Merlijn');

  await page.locator('#age').fill('20');

  await page.locator('#species').selectOption('reaper');

  await page.locator('#planet').fill('Earth');

  await page.locator('#planet').press('Enter');

  await skipTransition(page);

  await page.waitForURL('**/collect-code');
  
  await expect(page.locator('.victim > img')).toBeVisible();
  await page.locator('.victim > img').click({ position: { x: 325, y: 310 }, force: true, timeout: 60000 });

  
  await expect(page.locator('.murder')).toBeVisible();
  const code = await page.locator('.murder').textContent();

  console.log(code);
});

const skipTransition = async (page: Page) => {
  await page.waitForURL('**/transition/**');
  await page.locator('.ski-button').click({ force: true });
}
  