import type { AppFetchResponse } from 'ofetch'
import type { ZennArticleRequestQuery, ZennArticleResponse } from './types'

/**
 * 上記の関数は、提供されたクエリ パラメーターを使用して記事を取得するために Zenn API に GET リクエストを行う TypeScript 関数です。
 * @param {ZennArticleRequestQuery} [query] - 「クエリ」パラメータは、リクエスト URL に含まれるクエリ
 * パラメータを表すオプションのオブジェクトです。これには、`page`、`per_page`、`tag`、`username` などのプロパティを含めることができます。これらのクエリ
 * パラメーターは、API リクエストの結果をフィルタリングまたはページネーションするために使用できます。
 * @returns タイプ `AppFetchResponse<ZennArticleResponse>` のオブジェクトに解決される Promise。
 */
export const getRequest = (query?: ZennArticleRequestQuery): Promise<AppFetchResponse<ZennArticleResponse>> => {
  const { $zennHttpClient } = useNuxtApp()
  return $zennHttpClient<ZennArticleResponse>('https://zenn.dev/api/articles', {
    query
  })
}
