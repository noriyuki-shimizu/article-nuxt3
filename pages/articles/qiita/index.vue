<script setup lang="ts">
import { getKeyword } from '@/functions/business/qiita-article/query'
import { usePageApiStore, usePageUiStore } from '@/store/page/articles/qiita'

/** Runtime Config */
const config = useRuntimeConfig()

/** Route */
const route = useRoute()

/** API Store */
const pageApiStore = usePageApiStore()

/** UI Store */
const pageUiStore = usePageUiStore()

definePageMeta({
  layout: 'desktop-articles-qiita',
  key (route) {
    return route.fullPath
  }
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

/** Async Data Result */
const { error: errorRef } = await useAsyncData(async () => {
  const { query } = route
  pageUiStore.setSearchKeyword(getKeyword(query))

  try {
    const pageApiStore = usePageApiStore()
    pageApiStore.setArticleRequestData(getKeyword(query))
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

await preloadComponents('PageContentsArticlesQiitaContainer')
</script>

<template>
  <PageContentsArticlesQiitaContainer />
</template>
