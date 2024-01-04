import type { Dayjs, ConfigType } from 'dayjs'
import type { FetchRawParameters } from 'nitropack'
import type { AppFetchResponse } from 'ofetch'

declare module '#app' {
  interface NuxtApp {
    /** Zenn API 用の Http Client 関数 */
    $zennHttpClient: <T = object>(
      request: FetchRawParameters<T>[0],
      options?: FetchRawParameters<T>[1]
    ) => Promise<AppFetchResponse<T>>
    /** Qiita API 用の Http Client 関数 */
    $qiitaHttpClient: <T = object>(
      request: FetchRawParameters<T>[0],
      options?: FetchRawParameters<T>[1]
    ) => Promise<AppFetchResponse<T>>
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /** Zenn API 用の Http Client 関数 */
    $zennHttpClient: <T = object>(
      request: FetchRawParameters<T>[0],
      options?: FetchRawParameters<T>[1]
    ) => Promise<AppFetchResponse<T>>
    /** Qiita API 用の Http Client 関数 */
    $qiitaHttpClient: <T = object>(
      request: FetchRawParameters<T>[0],
      options?: FetchRawParameters<T>[1]
    ) => Promise<AppFetchResponse<T>>
  }
}

export {}
