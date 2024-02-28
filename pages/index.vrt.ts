import { test, expect } from '../tests/playwright'

test.describe('トップページ', () => {
  test('初期表示', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    for (const img of await page.getByRole('img').all()) {
      const tagName = await img.evaluate(el => {
        return el.tagName
      })
      if (tagName !== 'svg') {
        await expect(img).toHaveJSProperty('complete', true)
        await expect(img).not.toHaveJSProperty('naturalWidth', 0)
      }
    }

    await expect(page).toHaveScreenshot()
  })
})

test.afterEach(async ({ page }) => {
  await page.close()
})
