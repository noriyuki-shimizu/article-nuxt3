import type { AppFetchResponse, FetchResponse } from 'ofetch'

/**
 * タプル配列のヘッダーを受け取り、それをレコードオブジェクトに変換する
 * @param {[string, string][]} arrayHeaders - タプル配列のヘッダー
 * @returns 変換されたレコードオブジェクト
 */
const convertArrayHeadersToRecord = (arrayHeaders: [string, string][]): Record<string, string> => {
  return arrayHeaders.reduce<Record<string, string>>((a, c) => {
    const [key, value] = c
    return Object.assign(a, { [key]: value })
  }, {})
}

/**
 * Headers オブジェクトをレコードオブジェクトに変換
 * @param {HeadersInit} [headers] - fetch options のヘッダーオブジェクト
 * @returns 変換されたレコードオブジェクト
 */
const convertHeaderToRecord = (headers?: HeadersInit): Record<string, string> => {
  if (LangUtil.isUndefined(headers)) {
    return {}
  }
  if (LangUtil.isArray(headers)) {
    return convertArrayHeadersToRecord(headers)
  }
  if (headers instanceof Headers) {
    return convertArrayHeadersToRecord(Array.from(headers.entries()))
  }
  return headers
}

/**
 * http client で取得されたレスポンスを Client Front が扱うレスポンスデータに変換
 *
 * @param response http client で取得されたレスポンスデータ
 * @returns Client Front が扱うレスポンスデータ
 */
export const convertAppFetchResponse = <T>(response: FetchResponse<T>): AppFetchResponse<T> => {
  return {
    _data: response._data,
    headers: convertHeaderToRecord(response.headers),
    status: response.status,
    statusText: response.statusText
  }
}
