import type { ApiState, NoteArticleViewModel } from './types'
import { convertApiResponseToViewModel } from '@/functions/business/note-article/convert'
import { getRequest as getNoteArticlesRequest } from '@/infrastructures/rest/nuxt/api/note/articles/tech'

/**
 * note Tech 記事一覧ページにおける Page API Store
 * @returns Page API Store
 */
export const usePageApiStore = () => {
  /** State */
  const _state = useState<ApiState>('page-api-articles-note-store', () => {
    return {
      articles: null
    }
  })

  /** Getter */
  const getters = {
    /** Note の記事情報データ */
    articles: computed<NoteArticleViewModel[] | null>((oldValue) => {
      const newValue = _state.value.articles
      if (LangUtil.isNull(newValue)) {
        return null
      }
      if (!LangUtil.isNil(oldValue) && oldValue.length === newValue.length && oldValue[0].id === newValue[0].id) {
        return oldValue
      }
      return newValue
    })
  }

  /** Action */
  const actions = {
    /**
     * `async fetchArticles` 関数は、サーバーから記事をフェッチする非同期リクエストを作成します。パラメータ `{ sort: 'new', page: 1 }` を指定して
     * `getNoteArticlesRequest` 関数を呼び出し、記事を取得します。応答を受信すると、`convertApiResponseToViewModel` 関数を使用して応答データを
     * View Model に変換し、それを `_state.value.articles` に割り当てます。この関数は、技術ノートの記事ページの初期の記事セットを取得する役割を果たします。
     */
    async fetchArticles(): Promise<void> {
      const response = await getNoteArticlesRequest({ sort: 'new', page: 1 })

      _state.value.articles = convertApiResponseToViewModel(response._data)
    },
    /**
     * この関数は、サーバーからさらに記事を取得し、その状態の既存の記事リストに追加します。
     * @param {number} page -
     * 「moreFetchArticles」関数の「page」パラメータは、フェッチする記事のページ番号を指定するために使用されます。このパラメータは結果のページ分割に役立ち、サーバーから記事の特定のページを取得できるようになります。
     */
    async moreFetchArticles(page: number): Promise<void> {
      const response = await getNoteArticlesRequest({ sort: 'new', page })
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
