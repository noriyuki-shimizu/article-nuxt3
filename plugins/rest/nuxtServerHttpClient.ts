import type { AppFetchResponse, FetchResponse } from 'ofetch'
import {
  convertAppFetchResponse,
  createCommonFetchOption,
  generateRequestHashKey,
  getCacheValue
} from '@/functions/business/http/rest'
import type { FetchRawParameters } from '@/types/core/http'

/** Nuxt Server API 用の fetch 関数定義 */
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      nuxtServerHttpClient: async <T = object>(
        request: FetchRawParameters<T>[0],
        options?: FetchRawParameters<T>[1]
      ): Promise<AppFetchResponse<T>> => {
        const fetchOption = createCommonFetchOption(options)

        if (options?.isCache) {
          const requestHashKey = await generateRequestHashKey(request)

          return nuxtApp.runWithContext(() => {
            return getCacheValue<T>(requestHashKey, $fetch, { request, options: fetchOption })
          })
        }

        const response = await $fetch.raw<T>(request, fetchOption)
        return convertAppFetchResponse(response as FetchResponse<T>)
      }
    }
  }
})
