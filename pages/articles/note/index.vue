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
  }
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

/** Async Data Result */
const { error: errorRef } = await useAsyncData(async () => {
  try {
    await pageApiStore.fetchArticles()
  } catch (err) {
    throw ErrorUtil.convertNuxtError(err)
  }
  return {}
})

/** Async Data Error */
const error = unref(errorRef)
if (!LangUtil.isNull(error)) {
  throw error
}

await preloadComponents('PageContentsArticlesNoteContainer')
</script>

<template>
  <PageContentsArticlesNoteContainer />
</template>
