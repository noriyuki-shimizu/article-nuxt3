import type { AppFetchResponse } from 'ofetch'
import type { ZennArticleRequestQuery, ZennArticleResponse } from './types'

/**
 * 上記の関数は、「/api/zenn/articles」エンドポイントに対して GET リクエストを作成し、AppFetchResponse<ZennArticleResponse> に解決される
 * Promise を返す TypeScript 関数です。
 * @param {ZennArticleRequestQuery} [query] - 「クエリ」パラメータは、リクエスト URL に含まれるクエリ
 * パラメータを表すオプションのオブジェクトです。これには、クエリ パラメーターとして URL に追加されるキーと値のペアを含めることができます。
 * @returns タイプ `AppFetchResponse<ZennArticleResponse>` のオブジェクトに解決される Promise。
 */
export const getRequest = (query?: ZennArticleRequestQuery): Promise<AppFetchResponse<ZennArticleResponse>> => {
  const { $nuxtServerHttpClient } = useNuxtApp()
  return $nuxtServerHttpClient<ZennArticleResponse>('/api/zenn/articles', {
    query
  })
}
