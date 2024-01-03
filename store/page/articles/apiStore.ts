import type { ApiState, QiitaArticleViewModel, ZennArticleViewModel } from './types'
import { getRequest as getQiitaArticlesRequest } from '@/infrastructures/rest/qiita.com/api/v2/items'
import { convertApiResponseToViewModel } from '@/functions/business/qiita-article/convert'

/**
 * 記事一覧ページにおける Page API Store
 * @returns Page API Store
 */
export const usePageApiStore = () => {
  const _state = useState<ApiState>('page-api-articles-store', () => {
    return {
      zennArticles: null,
      qiitaArticles: null
    }
  })

  const getters = {
    zennArticles: computed<ZennArticleViewModel[] | null>(() => {
      return _state.value.zennArticles
    }),
    qiitaArticles: computed<QiitaArticleViewModel[] | null>(() => {
      return _state.value.qiitaArticles
    })
  }

  const actions = {
    async fetchArticles () {
      const response = await getQiitaArticlesRequest({ sort: 'updated', page: 1 })
      _state.value.qiitaArticles = convertApiResponseToViewModel(response._data)
    }
  }

  return {
    ...getters,
    ...actions
  } as const
}
