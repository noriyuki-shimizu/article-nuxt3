import type { AppFetchResponse } from 'ofetch'
import type { ZennArticleRequestQuery, ZennArticleResponse } from './types'

export const getRequest = (query?: ZennArticleRequestQuery): Promise<AppFetchResponse<ZennArticleResponse>> => {
  const { $zennHttpClient } = useNuxtApp()
  return $zennHttpClient<ZennArticleResponse>('https://zenn.dev/api/articles', {
    query
  })
}
