import viteSvgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    plugins: ['plugins/runtime-hook/index.ts']
  },
  runtimeConfig: {
    public: {
      pageBaseUrl: '',
      qiitaAccessToken: '',
      logLevel: process.env.NODE_ENV === 'production' ? 3 : 5
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      }
    }
  },
  plugins: ['~/plugins/rest/index.ts'],
  modules: ['@nuxt/image'],
  imports: {
    dirs: [
      'composables/*/index.{ts,js,mjs,mts}',
      'utils/*/index.{ts,js,mjs,mts}'
    ]
  },
  css: ['ress', '~/assets/style/index.scss'],
  vite: {
    plugins: [viteSvgLoader()]
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      include: ['../types/lib/index.d.ts'],
      exclude: ['../test/**', '../**/*.spec.ts']
    }
  },
  components: false
})
