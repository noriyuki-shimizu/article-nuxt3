import type { AppFetchResponse } from 'ofetch'
import type { NoteTechArticleRequestQuery, NoteTechArticleResponse } from './types'
import http from '@/server/infrastructures/rest/note.com/http'

/**
 * 関数 `getRequest` は、オプションのクエリ パラメーターを使用して指定された URL に GET リクエストを送信し、応答データに解決される Promise を返します。
 * @param {NoteTechArticleRequestQuery} [query] - 「query」パラメータは、API
 * リクエストの追加パラメータを含むオプションのオブジェクトです。これには、`page`、`limit`、`sort` などのプロパティを含めることができます。これらのパラメーターは、API
 * からの応答をカスタマイズするために使用されます。
 * @returns `AppFetchResponse<NoteTechArticleResponse>` 型のオブジェクトに解決される Promise。
 */
export const getRequest = (query?: NoteTechArticleRequestQuery): Promise<AppFetchResponse<NoteTechArticleResponse>> => {
  return http<NoteTechArticleResponse>('https://note.com/api/v1/categories/tech', {
    query: {
      ...query,
      noteIntroOnly: true
    }
  })
}
