import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'
import type { NitroFetchRequest, $Fetch } from 'nitropack'
import type { AppFetchResponse, FetchResponse } from 'ofetch'
import { SHORT_HASH_LENGTH } from '@/constants/common/hash'
import type { FetchRawParameters } from '@/types/core/http'

/**
 * リクエストボディが Record 形式のオブジェクトであるか
 * @param body リクエストボディ
 * @returns 判定結果
 */
const isRequestBodyRecordObject = (body?: BodyInit | Record<string, any> | null): body is Record<string, unknown> => {
  return !(
    LangUtil.isNil(body) ||
    LangUtil.isString(body) ||
    body instanceof ReadableStream ||
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    ArrayBuffer.isView(body) ||
    body instanceof FormData ||
    body instanceof URLSearchParams
  )
}

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
 * Client API でのヘッダー取得
 * @returns ヘッダー情報
 */
const getCommonApiHeader = (): HeadersInit => {
  const headers: HeadersInit = {}

  if (process.server) {
    const requestHeaders = useRequestHeaders([
      'user-agent',
      'x-forwarded-for',
      'x-forwarded-port',
      'x-forwarded-proto'
    ])
    Object.assign(headers, requestHeaders)
  }

  return headers
}

/**
 * フェッチリクエストを行うための共通のオプションのセットを作成
 * @param [options] - Fetch Option
 * @returns 共通のオプションのセット
 */
export const createCommonFetchOption = <T = unknown>(options?: FetchRawParameters<T>[1]): FetchRawParameters<T>[1] => {
  return {
    ...options,
    headers: {
      ...convertHeaderToRecord(options?.headers),
      ...getCommonApiHeader()
    },
    onRequest (context) {
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
    onResponse (context) {
      context.response._data = camelcaseKeys(context.response._data, { deep: true })
    }
  }
}

/**
 * キャッシュされた値を取得する
 * @description
 * キャッシュされた値があればそちら取得し、ない場合はフェッチして、レスポンスをキャッシュする
 * @param cacheKey - キャッシュキー
 * @param fetch - fetch オブジェクト
 * @param fetchRequest - fetch を行う際の request と options
 * @returns Client Front が扱うレスポンスデータ
 */
export const getCacheValue = async <T = unknown>(
  cacheKey: string,
  fetch: $Fetch,
  fetchRequest: { request: FetchRawParameters<T>[0]; options: FetchRawParameters<T>[1] }
): Promise<AppFetchResponse<T>> => {
  const { request, options } = fetchRequest

  const cached = useState<AppFetchResponse<T> | null>(cacheKey, () => {
    return null
  })

  if (LangUtil.isNull(cached.value)) {
    const response = await fetch.raw<T>(request, options)
    cached.value = convertAppFetchResponse(response as FetchResponse<T>)
  }

  return cached.value
}

/**
 * 指定されたリクエストのURLからハッシュキーを生成
 *
 * @param request リクエストのURLまたはリクエストオブジェクト
 * @returns リクエストURLから派生したハッシュキー
 */
export const generateRequestHashKey = async (
  request: NitroFetchRequest
): Promise<string> => {
  const requestUrl = LangUtil.isString(request) ? request : request.url
  const hash = await CryptoUtil.calculateSHA256Hash(requestUrl)
  return hash.slice(0, SHORT_HASH_LENGTH)
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
    headers: convertArrayHeadersToRecord(Array.from(response.headers.entries())),
    status: response.status,
    statusText: response.statusText
  }
}
