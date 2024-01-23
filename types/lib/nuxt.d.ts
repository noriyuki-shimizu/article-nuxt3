import type { Dayjs, ConfigType } from 'dayjs'
import type { AppFetchResponse } from 'ofetch'
import type { FetchRawParameters } from '@/types/core/http'

declare module '#app' {
  interface NuxtApp {
    /** Nuxt Server API 用の Http Client 関数 */
    $nuxtServerHttpClient: <T = object>(
      request: FetchRawParameters<T>[0],
      options?: FetchRawParameters<T>[1]
    ) => Promise<AppFetchResponse<T>>
    /** Qiita API 用の Http Client 関数 */
    $qiitaHttpClient: <T = object>(
      request: FetchRawParameters<T, string>[0],
      options?: FetchRawParameters<T, string>[1]
    ) => Promise<AppFetchResponse<T>>
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    /** Nuxt Server API 用の Http Client 関数 */
    $nuxtServerHttpClient: <T = object>(
      request: FetchRawParameters<T>[0],
      options?: FetchRawParameters<T>[1]
    ) => Promise<AppFetchResponse<T>>
    /** Qiita API 用の Http Client 関数 */
    $qiitaHttpClient: <T = object>(
      request: FetchRawParameters<T, string>[0],
      options?: FetchRawParameters<T, string>[1]
    ) => Promise<AppFetchResponse<T>>
  }
}

export {}
