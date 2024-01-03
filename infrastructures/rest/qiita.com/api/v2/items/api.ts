import type { AppFetchResponse } from 'ofetch'
import type { QiitaArticleRequestQuery, QiitaArticleResponse } from './types'

export const getRequest = (query?: QiitaArticleRequestQuery): Promise<AppFetchResponse<QiitaArticleResponse>> => {
  const { $qiitaHttpClient } = useNuxtApp()
  return $qiitaHttpClient<QiitaArticleResponse>('https://qiita.com/api/v2/items', {
    query
  })
}
