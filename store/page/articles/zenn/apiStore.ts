import type { ApiState, ZennArticleViewModel } from './types'
import { getRequest as getZennArticlesRequest } from '@/infrastructures/rest/nuxt-server/api/zenn/articles'
import { convertApiResponseToViewModel } from '@/functions/business/zenn-article/convert'

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
    }
  }

  return {
    ...getters,
    ...actions
  } as const
}
