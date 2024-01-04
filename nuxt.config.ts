import viteSvgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      qiitaAccessToken: ''
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
  imports: {
    dirs: ['composables/*/index.{ts,js,mjs,mts}', 'utils/*/index.{ts,js,mjs,mts}']
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
  }
})
