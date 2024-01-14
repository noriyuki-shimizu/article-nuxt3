import type { ApiState, QiitaArticleViewModel } from './types'
import { getRequest as getQiitaArticlesRequest } from '@/infrastructures/rest/qiita.com/api/v2/items'
import { convertApiResponseToViewModel } from '@/functions/business/qiita-article/convert'

/**
 * Qiita 記事一覧ページにおける Page API Store
 * @returns Page API Store
 */
export const usePageApiStore = () => {
  const _state = useState<ApiState>('page-api-articles-qiita-store', () => {
    return {
      articles: null
    }
  })

  const getters = {
    articles: computed<QiitaArticleViewModel[] | null>(() => {
      return _state.value.articles
    })
  }

  const actions = {
    /**
     * 記事一覧を取得し、レスポンスデータをView Modelに変換する
     * @param {string} [keyword] -
     * 「keyword」パラメータは、記事のフィルタリングに使用する検索語またはキーワードを表す文字列です。これはオプションのパラメーターであるため、キーワードが指定されていない場合、関数はフィルターをかけずにすべての記事を取得します。
     */
    async fetchArticles (keyword: string): Promise<void> {
      const response = await getQiitaArticlesRequest({ sort: 'created', page: 1, query: `title:${keyword}` })

      _state.value.articles = convertApiResponseToViewModel(response._data)
    }
  }

  return {
    ...getters,
    ...actions
  } as const
}
