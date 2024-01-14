import type { AppFetchResponse, FetchResponse } from 'ofetch'
import type { FetchRawParameters } from '@/types/core/http'

/**
 * http client で取得されたレスポンスをアプリケーションが扱うレスポンスデータに変換
 *
 * @param response http client で取得されたレスポンスデータ
 * @returns アプリケーションが扱うレスポンスデータ
 */
export const convertAppFetchResponse = <T>(
  response: FetchResponse<T>
): AppFetchResponse<T> => {
  const headers: Record<string, string> = Array.from(response.headers.entries()).reduce((a, c) => {
    const [key, value] = c
    return Object.assign(a, { [key]: value })
  }, {})
  return {
    _data: response._data,
    headers,
    status: response.status,
    statusText: response.statusText
  }
}

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
  const response = await $fetch.raw<T>(request, options) as FetchResponse<T>
  return convertAppFetchResponse(response)
}
