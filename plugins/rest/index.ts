import type { AppFetchResponse } from 'ofetch'
import { createFetchOptionWithInterceptors, generateRequestHashKey, convertAppFetchResponse } from './utils'
import type { FetchRawParameters } from '@/types/core/http'

/** Rest API 用の fetch 関数定義 */
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  return {
    provide: {
      zennHttpClient: async <T = object>(
        request: FetchRawParameters<T>[0],
        options?: FetchRawParameters<T>[1]
      ): Promise<AppFetchResponse<T>> => {
        const fetchOption = createFetchOptionWithInterceptors(options)

        if (options?.isCache) {
          const requestHashKey = await generateRequestHashKey(request)

          return nuxtApp.runWithContext(async () => {
            const cached = useState<AppFetchResponse<T> | null>(requestHashKey, () => null)

            if (LangUtil.isNull(cached.value)) {
              const response = await $fetch.raw<T>(request, fetchOption)
              cached.value = convertAppFetchResponse(response)
            }

            return cached.value
          })
        }

        const response = await $fetch.raw<T>(request, fetchOption)
        return convertAppFetchResponse(response)
      },
      qiitaHttpClient: async <T = object>(
        request: FetchRawParameters<T>[0],
        options?: FetchRawParameters<T>[1]
      ): Promise<AppFetchResponse<T>> => {
        const fetchOption = createFetchOptionWithInterceptors({
          onRequest (context) {
            const { headers } = context.options
            context.options.headers = {
              ...headers,
              Authorization: `Bearer ${config.public.qiitaAccessToken}`
            }
          }
        })

        if (options?.isCache) {
          const requestHashKey = await generateRequestHashKey(request)

          return nuxtApp.runWithContext(async () => {
            const cached = useState<AppFetchResponse<T> | null>(requestHashKey, () => null)

            if (LangUtil.isNull(cached.value)) {
              const response = await $fetch.raw<T>(request, fetchOption)
              cached.value = convertAppFetchResponse(response)
            }

            return cached.value
          })
        }

        const response = await $fetch.raw<T>(request, fetchOption)
        return convertAppFetchResponse(response)
      }
    }
  }
})
