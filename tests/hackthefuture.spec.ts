import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('Hack the Future', () => {
  test('', async ({ page }) => {
    await page.goto('https://hackthefuture.bignited.be');
    
  });
});
