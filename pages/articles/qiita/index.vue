<script setup lang="ts">
import { ENABLE_QUERY_KEY } from '@/constants/business/route/query'
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
      const queryValue = RouteUtil.convertLocationQueryToValue(query, ENABLE_QUERY_KEY)
      pageUiStore.setSearchKeyword('q' in queryValue ? queryValue.q : null)
    },
    async () => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      try {
        const pageUiStore = usePageUiStore()
        const pageApiStore = usePageApiStore()
        await pageApiStore.fetchArticles(pageUiStore.searchKeyword.value || '')
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
