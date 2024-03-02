import camelcaseKeys from 'camelcase-keys'
import type { AppFetchResponse, FetchResponse } from 'ofetch'
import snakecaseKeys from 'snakecase-keys'
import type { FetchRawParameters } from '@/types/core/http'

/**
 * タプル配列のヘッダーを受け取り、それをレコードオブジェクトに変換する
 * @param {[string, string][]} arrayHeaders - タプル配列のヘッダー
 * @returns 変換されたレコードオブジェクト
 */
const convertArrayHeadersToRecord = (
  arrayHeaders: [string, string][]
): Record<string, string> => {
  return arrayHeaders.reduce<Record<string, string>>((a, c) => {
    const [key, value] = c
    return Object.assign(a, { [key]: value })
  }, {})
}

/**
 * リクエストボディが Record 形式のオブジェクトであるか
 * @param body リクエストボディ
 * @returns 判定結果
 */
const isRequestBodyRecordObject = (
  body?: BodyInit | Record<string, any> | null
): body is Record<string, unknown> => {
  return !(
    LangUtil.isNil(body)
    || LangUtil.isString(body)
    || body instanceof ReadableStream
    || body instanceof Blob
    || body instanceof ArrayBuffer
    || ArrayBuffer.isView(body)
    || body instanceof FormData
    || body instanceof URLSearchParams
  )
}

/**
 * Headers オブジェクトをレコードオブジェクトに変換
 * @param {HeadersInit} [headers] - fetch options のヘッダーオブジェクト
 * @returns 変換されたレコードオブジェクト
 */
const convertHeaderToRecord = (
  headers?: HeadersInit
): Record<string, string> => {
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
 * フェッチリクエストを行うための共通のオプションのセットを作成
 * @param [options] - Fetch Option
 * @returns 共通のオプションのセット
 */
export const createCommonFetchOption = <T = unknown>(
  options?: FetchRawParameters<T>[1]
): FetchRawParameters<T>[1] => {
  return {
    ...options,
    onRequest(context) {
      const { params, query, body } = context.options

      if (!LangUtil.isUndefined(params)) {
        context.options.params = snakecaseKeys(params, { deep: true })
      }
      if (!LangUtil.isUndefined(query)) {
        context.options.query = snakecaseKeys(query, { deep: true })
      }
      if (isRequestBodyRecordObject(body)) {
        context.options.body = snakecaseKeys(body, { deep: true })
      }
    },
    onResponse(context) {
      context.response._data = camelcaseKeys(context.response._data, {
        deep: true
      })
    }
  }
}

/**
 * http client で取得されたレスポンスを Client Front が扱うレスポンスデータに変換
 *
 * @param response http client で取得されたレスポンスデータ
 * @returns Client Front が扱うレスポンスデータ
 */
export const convertAppFetchResponse = <T>(
  response: FetchResponse<T>
): AppFetchResponse<T> => {
  return {
    _data: response._data,
    headers: convertHeaderToRecord(response.headers),
    status: response.status,
    statusText: response.statusText
  }
}
