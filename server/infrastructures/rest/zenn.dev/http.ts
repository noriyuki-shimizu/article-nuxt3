import type { AppFetchResponse, FetchResponse } from 'ofetch'
import type { FetchRawParameters } from '@/types/core/http'
import { convertAppFetchResponse } from '@/server/functions/business/http/rest'

/**
 * Zenn API 用の fetch 関数
 * @see $fetch.raw
 * @param request - Fetch request
 * @param options - Fetch options
 * @returns アプリケーションが扱うレスポンスデータ
 */
export default async <T = object>(
  request: FetchRawParameters<T>[0],
  options?: FetchRawParameters<T>[1]
): Promise<AppFetchResponse<T>> => {
  const response = await $fetch.raw<T>(request, options)
  return convertAppFetchResponse(response as FetchResponse<T>)
}
