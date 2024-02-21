/**
 * ランタイムフックプラグイン
 */
export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()

  // リクエスト前にフックされる
  nitroApp.hooks.hook('beforeResponse', (event) => {
    if (event.path.startsWith('/api/')) {
      event.node.res
        .setHeader('Access-Control-Allow-Origin', config.public.pageBaseUrl)
        .setHeader('Access-Control-Allow-Methods', '*')
      return
    }
    if (
      event.path.includes('/img/') &&
      (event.path.includes('.png') || event.path.includes('.jpeg'))
    ) {
      event.node.res.setHeader('Cache-Control', 'max-age=31536000')
    }
  })

  // SSR 時にフックされる
  nitroApp.hooks.hook('render:response', (_, { event }) => {
    event.node.res.setHeader('X-Frame-Options', 'DENY')
  })
})
