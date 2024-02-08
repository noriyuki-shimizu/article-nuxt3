import type { ApiState, ZennArticleViewModel } from './types'
import { convertApiResponseToViewModel } from '@/functions/business/zenn-article/convert'
import { getRequest as getZennArticlesRequest } from '@/infrastructures/rest/nuxt/api/zenn/articles'

/**
 * Zenn Tech 記事一覧ページにおける Page API Store
 * @returns Page API Store
 */
export const usePageApiStore = () => {
  const _state = useState<ApiState>('page-api-articles-zenn-store', () => {
    return {
      articles: null
    }
  })

  const getters = {
    articles: computed<ZennArticleViewModel[] | null>(() => {
      return _state.value.articles
    })
  }

  const actions = {
    /**
     * 記事一覧を取得し、レスポンスデータをView Modelに変換する
     */
    async fetchArticles (): Promise<void> {
      const response = await getZennArticlesRequest({ category: 'tech', order: 'latest', page: 1 })

      _state.value.articles = convertApiResponseToViewModel(response._data)
    },
    /**
     * 関数 `moreFetchArticles` は、Zenn API から追加の記事をフェッチし、状態内の既存の記事リストに追加します。
     * @param {number} page - `page`
     * パラメータは、取得する記事のページ番号を表す数値です。これは記事のページ分割に使用され、さまざまなページから記事をフェッチできるようになります。
     */
    async moreFetchArticles (page: number): Promise<void> {
      const response = await getZennArticlesRequest({ category: 'tech', order: 'latest', page })
      const currentArticles = _state.value.articles || []
      const responseArticles = convertApiResponseToViewModel(response._data) || []
      _state.value.articles = [...currentArticles, ...responseArticles]
    }
  }

  return {
    ...getters,
    ...actions
  } as const
}
