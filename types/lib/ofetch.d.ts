import type { FetchResponse } from 'ofetch'

declare module 'ofetch' {
  /** レスポンスパラメータ */
  interface AppFetchResponse<T> {
    /** ボディ */
    _data: FetchResponse<T>['_data']
    /** ヘッダー */
    headers: Record<string, string>
    /** HTTP Status */
    status: FetchResponse<T>['status']
    /** HTTP Status Text */
    statusText: FetchResponse<T>['statusText']
  }
}

export {}
