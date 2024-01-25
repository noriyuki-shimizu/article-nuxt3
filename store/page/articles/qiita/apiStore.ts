import type { ApiState, QiitaArticleViewModel } from './types'
import { convertApiResponseToViewModel } from '@/functions/business/qiita-article/convert'
import { getRequest as getQiitaArticlesRequest } from '@/infrastructures/rest/qiita.com/api/v2/items'

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
    },
    /**
     * 関数 `moreFetchArticles` は、キーワードとページ番号に基づいて Qiita API から記事を取得し、取得した記事を状態内の既存の記事に追加します。
     * @param {string} keyword -
     * 「keyword」パラメータは、記事のフィルタリングに使用する検索語またはキーワードを表す文字列です。これは、タイトルに基づいて記事をクエリするために使用されます。
     * @param {number} page - `page`
     * パラメータは、取得する結果のページ番号を指定するために使用されます。これは記事のページ分割に使用され、結果の特定のページを取得できるようになります。
     */
    async moreFetchArticles (keyword: string, page: number): Promise<void> {
      const response = await getQiitaArticlesRequest({ sort: 'created', page, query: `title:${keyword}` })
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
