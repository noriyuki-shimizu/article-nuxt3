<script setup lang="ts">
import { usePageApiStore } from '@/store/page/articles/note'

/** Runtime Config */
const config = useRuntimeConfig()

/** API Store */
const pageApiStore = usePageApiStore()

definePageMeta({
  layout: 'desktop-articles-note',
  key (route) {
    return route.fullPath
  },
  middleware: [
    async () => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      try {
        const pageApiStore = usePageApiStore()
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
  title: 'note Tech 記事一覧',
  description: 'note Tech に関する記事を一覧で閲覧できます。'
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
        href: `${config.public.pageBaseUrl}/articles/note`
      }
    ]
  }
})

await preloadComponents('PageContentsArticlesNoteContainer')
</script>

<template>
  <PageContentsArticlesNoteContainer />
</template>
