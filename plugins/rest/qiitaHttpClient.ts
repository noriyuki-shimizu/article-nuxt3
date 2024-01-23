import type { AppFetchResponse, FetchResponse } from 'ofetch'
import { createCommonFetchOption, generateRequestHashKey, getCacheValue, convertAppFetchResponse } from '@/functions/business/http/rest'
import type { FetchRawParameters } from '@/types/core/http'

/** Qiita API 用の fetch 関数定義 */
export default defineNuxtPlugin((nuxtApp) => {
  /** Runtime Config */
  const config = useRuntimeConfig()

  /** Qiita Base Fetch Object */
  const baseQiitaFetch = $fetch.create({
    baseURL: 'https://qiita.com'
  })

  return {
    provide: {
      qiitaHttpClient: async <T = object>(
        request: FetchRawParameters<T, string>[0],
        options?: FetchRawParameters<T, string>[1]
      ): Promise<AppFetchResponse<T>> => {
        const commonFetchOption = createCommonFetchOption(options)
        const fetchOption: FetchRawParameters<T, string>[1] = {
          ...commonFetchOption,
          async onRequest (context) {
            await commonFetchOption?.onRequest?.call(this, context)

            const { headers } = context.options
            context.options.headers = {
              ...headers,
              Authorization: `Bearer ${config.public.qiitaAccessToken}`
            }
          }
        }

        if (options?.isCache) {
          const requestHashKey = await generateRequestHashKey(request)

          return nuxtApp.runWithContext(() => {
            return getCacheValue<T>(requestHashKey, baseQiitaFetch, { request, options: fetchOption })
          })
        }

        const response = await baseQiitaFetch.raw<T>(request, fetchOption)
        return convertAppFetchResponse(response as FetchResponse<T>)
      }
    }
  }
})
