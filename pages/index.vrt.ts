import { test, expect } from '@playwright/test'

test.describe('トップページ', () => {
  test('初期表示', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveScreenshot()
  })
})

test.afterEach(async ({ page }) => {
  await page.close()
})
