import { handleGetArticles, handleGetEmptyArticles } from '../../../infrastructures/rest/qiita.com/api/v2/items/__mock__/msw'
import { test, expect } from '../../../tests/playwright'

test.describe('Qiita記事一覧', () => {
  test('初期表示', async ({ page, worker }) => {
    await worker.use(handleGetArticles())
    await page.goto('/articles/qiita')
    await page.waitForLoadState('domcontentloaded')

    const infiniteScrollListDisplayData = page.locator('#infinite-scroll-list-display-data')
    await infiniteScrollListDisplayData.waitFor()

    for (const img of await page.getByRole('img').all()) {
      const tagName = await img.evaluate(el => el.tagName)
      if (tagName !== 'svg') {
        await expect(img).toHaveJSProperty('complete', true)
        await expect(img).not.toHaveJSProperty('naturalWidth', 0)
      }
    }

    await expect(page).toHaveScreenshot()
  })

  test('初期表示（空データ）', async ({ page, worker }) => {
    await worker.use(handleGetEmptyArticles())
    await page.goto('/articles/qiita')
    await page.waitForLoadState('domcontentloaded')

    const infiniteScrollListDisplayData = page.locator('#infinite-scroll-list-display-empty-data')
    await infiniteScrollListDisplayData.waitFor()

    for (const img of await page.getByRole('img').all()) {
      const tagName = await img.evaluate(el => el.tagName)
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
