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
  await page.locator('.victim > img').click({ position: { x: 198, y: 192 }, force: true, timeout: 60000 });

  await expect(page.locator('.murder')).toBeVisible();
  const code = await page.locator('.murder').textContent();

  await page.locator('body').click();
  
  await page.locator('.ski-button').click();

  await skipTransition(page);

  await page.waitForURL('**/gate');

  await page.locator('#numpad').click()

  await page.waitForTimeout(1000)

  for (const number of code!) {
    await page.locator(`//*[@id="${number}"]`).click()
  }

  await page.locator('#enter').click()

  await expect(page.locator('#back-button')).toBeVisible()

  await page.locator('body').press('ArrowUp')

  await skipTransition(page);

  await page.locator('#inputField').fill('Merlijn')
  await page.locator('.input').click()

  await page.locator('#inputField').fill('Earth')
  await page.locator('.input').click()

  await page.locator('button').getByText('Yes').click();

  await page.locator('button').getByText('I think so?').click();

  await page.locator('.next').locator('button').click()
  await page.locator('.next').locator('button').click()
  await page.locator('.next').locator('button').click()

  await page.locator('button').getByText('I think so').click();
  
  await skipTransition(page);
});

const skipTransition = async (page: Page) => {
  await page.waitForURL('**/transition/**');
  await page.locator('.ski-button').click({ force: true });
}
  