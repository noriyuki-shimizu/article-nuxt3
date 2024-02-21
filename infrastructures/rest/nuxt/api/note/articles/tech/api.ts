import type { AppFetchResponse } from 'ofetch'
import type { NoteTechArticleRequestQuery, NoteTechArticleResponse } from './types'

/**
 * この TypeScript 関数「getRequest」は、Nuxt.js サーバー HTTP クライアントを使用して、オプションのクエリ パラメーターを含む技術記事を取得するリクエストを送信します。
 * @param {NoteTechArticleRequestQuery} [query] -
 * 「getRequest」関数の「query」パラメータは、タイプ「NoteTechArticleRequestQuery」のオプションのパラメータです。このパラメータは、技術記事を取得するための
 * API リクエストに必要な追加のクエリ パラメータを渡すために使用されます。
 * @returns Promise が返され、NoteTechArticleResponse を含む AppFetchResponse に解決されます。
 */
export const getRequest = (query?: NoteTechArticleRequestQuery): Promise<AppFetchResponse<NoteTechArticleResponse>> => {
  const { $nuxtServerHttpClient } = useNuxtApp()
  return $nuxtServerHttpClient<NoteTechArticleResponse>('/api/note/articles/tech', {
    query
  })
}
