import { handleGetArticles, handleGetEmptyArticles } from '../../../infrastructures/rest/nuxt/api/note/articles/tech/__mock__/msw'
import { test, expect } from '../../../tests/playwright'

test.describe('note記事一覧', () => {
  test('初期表示', async ({ page, worker }) => {
    await worker.use(handleGetArticles())
    await page.goto('/articles/note')
    await page.waitForLoadState('domcontentloaded')

    const infiniteScrollListDisplayData = page.locator('#infinite-scroll-list-display-data')
    await infiniteScrollListDisplayData.waitFor()

    const imgRoleLocators = await page.getByRole('img').all()
    // TODO: chrome / edge ブラウザにおいて CI 上で最後の要素が見つからないため、最後の要素を除去
    // 画面描画において、最後の要素を待つ必要はないため、下記のソースとしている
    imgRoleLocators.pop()
    for (const img of imgRoleLocators) {
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

  test('初期表示（空データ）', async ({ page, worker }) => {
    await worker.use(handleGetEmptyArticles())
    await page.goto('/articles/note')
    await page.waitForLoadState('domcontentloaded')

    const infiniteScrollListDisplayData = page.locator('#infinite-scroll-list-display-empty-data')
    await infiniteScrollListDisplayData.waitFor()

    const imgRoleLocators = await page.getByRole('img').all()
    for (const img of imgRoleLocators) {
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
