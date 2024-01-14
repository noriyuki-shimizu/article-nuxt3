import camelcaseKeys from 'camelcase-keys'
import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'
import type { FetchResponse, AppFetchResponse } from 'ofetch'
import { SHORT_HASH_LENGTH } from './constants'

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
 * Rest Client のオプションを生成
 * Rest Client における interceptor を定義
 *
 * @param options 指定の Rest Client のオプション
 * @returns 生成された Rest Client のオプション
 */
export const createFetchOptionWithInterceptors = <
  T extends NitroFetchRequest = NitroFetchRequest
>(
    options?: NitroFetchOptions<T>
  ): NitroFetchOptions<T> => {
  return {
    ...options,
    onRequest (context) {
      options?.onRequest?.call(this, context)

      const { headers } = context.options
      const commonApiHeader = getCommonApiHeader()
      if (!LangUtil.isEmpty(commonApiHeader)) {
        context.options.headers = { ...headers, ...commonApiHeader }
      }
    },
    onRequestError (context) {
      options?.onRequestError?.call(this, context)
    },
    onResponse (context) {
      options?.onResponse?.call(this, context)
      context.response._data = camelcaseKeys(context.response._data, {
        deep: true
      })
    },
    onResponseError (context) {
      options?.onResponseError?.call(this, context)
    }
  }
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
