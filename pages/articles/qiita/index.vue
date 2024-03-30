<script setup lang="ts">
import { getKeyword } from '@/functions/business/qiita-article/query'
import { usePageApiStore, usePageUiStore } from '@/store/page/articles/qiita'

/** Runtime Config */
const config = useRuntimeConfig()

/** API Store */
const pageApiStore = usePageApiStore()

definePageMeta({
  layout: 'desktop-articles-qiita',
  key (route) {
    return route.fullPath
  },
  middleware: [
    ({ query }) => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      const pageUiStore = usePageUiStore()
      pageUiStore.setSearchKeyword(getKeyword(query))
    },
    async ({ query }) => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      try {
        const pageApiStore = usePageApiStore()
        pageApiStore.setArticleRequestData(getKeyword(query))
        await pageApiStore.fetchArticles()
      } catch (err) {
        return nuxtApp.runWithContext(() => {
          const nuxtError = ErrorUtil.convertNuxtError(err)
          return abortNavigation({ ...nuxtError, fatal: true })
        })
      }
    }
  ]
})

useSeoMeta({
  title: 'Qiita 記事一覧',
  description: 'Qiita に関する記事を一覧で閲覧できます。'
})

useHead(() => {
  const articles = pageApiStore.articles.value
  if (LangUtil.isEmpty(articles)) {
    return {
      meta: [{ name: 'robots', content: 'noindex' }]
    }
  }
  return {
    link: [
      {
        rel: 'canonical',
        href: `${config.public.pageBaseUrl}/articles/qiita`
      }
    ]
  }
})

await preloadComponents('PageContentsArticlesQiitaContainer')
</script>

<template>
  <PageContentsArticlesQiitaContainer />
</template>
