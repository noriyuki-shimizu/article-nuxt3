import viteSvgLoader from 'vite-svg-loader'

/** 本番モードか */
const isProduction = process.env.NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: !process.env.VRT,
  nitro: {
    plugins: ['plugins/runtime-hook/index.ts']
  },
  runtimeConfig: {
    public: {
      pageBaseUrl: '',
      qiitaAccessToken: '',
      logLevel: isProduction ? 3 : 5,
      isProduction
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      }
    }
  },
  plugins: [
    '@/plugins/rest/nuxtServerHttpClient.ts',
    '@/plugins/rest/qiitaHttpClient.ts'
  ],
  modules: ['@nuxt/image', '@vueuse/nuxt'],
  imports: {
    dirs: [
      'composables/*/index.{ts,js,mjs,mts}',
      'utils/*/index.{ts,js,mjs,mts}'
    ]
  },
  css: ['ress', '@/assets/style/_index.scss'],
  vite: {
    plugins: [viteSvgLoader()]
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      include: ['../types/lib/index.d.ts'],
      exclude: ['../test/**', '../**/*.spec.ts']
    }
  }
})
