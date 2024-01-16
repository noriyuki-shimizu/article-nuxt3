import type { AppFetchResponse } from 'ofetch'
import type { QiitaArticleRequestQuery, QiitaArticleResponse } from './types'

/**
 * この関数は、記事を取得するために Qiita API にリクエストを行う getRequest 関数を、オプションのクエリ パラメーターとともにエクスポートします。
 * @param {QiitaArticleRequestQuery} [query] - 「クエリ」パラメータは、リクエスト URL に含まれるクエリ
 * パラメータを表すオプションのオブジェクトです。これには、「page」、「per_page」、「query」、「sort」、「order」などのプロパティを含めることができます。これらのパラメータは、Qiita
 * API の結果をフィルタリングおよびソートするために使用されます。
 * @returns `AppFetchResponse<QiitaArticleResponse>` 型のオブジェクトに解決される Promise。
 */
export const getRequest = (query?: QiitaArticleRequestQuery): Promise<AppFetchResponse<QiitaArticleResponse>> => {
  const { $qiitaHttpClient } = useNuxtApp()
  return $qiitaHttpClient<QiitaArticleResponse>('/api/v2/items', {
    query
  })
}
