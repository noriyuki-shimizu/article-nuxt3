<script setup lang="ts">
import Container from '@/components/page-contents/articles/Container/index.vue'
import { usePageApiStore } from '@/store/page/articles'

definePageMeta({
  layout: 'desktop-articles',
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
          return abortNavigation(nuxtError)
        })
      }
    }
  ]
})

useSeoMeta({
  title: '技術記事一覧',
  description: '技術に関する記事を一覧で閲覧できます。'
})
</script>

<template>
  <Container />
</template>
