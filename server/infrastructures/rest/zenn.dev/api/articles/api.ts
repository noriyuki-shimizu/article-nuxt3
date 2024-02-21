import type { AppFetchResponse } from 'ofetch'
import type { ZennArticleRequestQuery, ZennArticleResponse } from './types'
import http from '@/server/infrastructures/rest/http'

/**
 * 関数 `getRequest` は、オプションのクエリ パラメーターを使用して、記事を取得するための GET リクエストを Zenn API に送信します。
 * @param {ZennArticleRequestQuery} [query] - 「クエリ」パラメータは、リクエスト URL に含まれるクエリ
 * パラメータを表すオプションのオブジェクトです。これには、`page`、`per_page`、`tag`、`user` などのプロパティを含めることができます。これらのクエリ パラメーターは、API
 * によって返された記事のフィルタリングやページネーションに使用できます。
 * @returns タイプ `AppFetchResponse<ZennArticleResponse>` のオブジェクトに解決される Promise。
 */
export const getRequest = (
  query?: ZennArticleRequestQuery
): Promise<AppFetchResponse<ZennArticleResponse>> => {
  return http<ZennArticleResponse>('https://zenn.dev/api/articles', {
    query
  })
}
