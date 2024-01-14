import { useLogger } from 'nuxt/kit'

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()
  const logger = useLogger()

  // アプリケーションエラーの発生時にフックされる
  nitroApp.hooks.hook('error', (error, { event }) => {
    logger.error(`[path: ${event?.path || 'none'}] Application error:`, error)
  })

  // リクエスト前にフックされる
  nitroApp.hooks.hook('beforeResponse', (event) => {
    if (event.path.startsWith('/api/')) {
      event.node.res
        .setHeader('Access-Control-Allow-Origin', config.public.pageBaseUrl)
        .setHeader('Access-Control-Allow-Methods', '*')
    }
  })
})
