import { handlers } from '../../../infrastructures/rest/qiita.com/api/v2/items/__mock__/msw'
import { test, expect } from '../../../tests/playwright'

test.describe('Qiita記事一覧', () => {
  test('初期表示', async ({ page, worker }) => {
    await worker.use(...handlers)
    await page.goto('/articles/qiita')
    await page.waitForLoadState('domcontentloaded')

    const infiniteScrollListDisplayData = page.locator('#infinite-scroll-list-display-data')
    await infiniteScrollListDisplayData.waitFor()

    await expect(page).toHaveScreenshot()
  })
})

test.afterEach(async ({ page }) => {
  await page.close()
})
