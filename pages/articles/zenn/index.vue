<script setup lang="ts">
import Container from '@/components/page-contents/articles/zenn/Container/index.vue'
import { usePageApiStore } from '@/store/page/articles/zenn'
import { useCommonSearchUiStore } from '@/store/common/search'

definePageMeta({
  layout: 'desktop-articles-zenn',
  key (route) {
    return route.fullPath
  },
  middleware: [
    ({ query }) => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      const commonSearchUiStore = useCommonSearchUiStore()
      const queryValue = RouteUtil.convertLocationQueryToValue(query)
      commonSearchUiStore.setSearchKeyword('q' in queryValue ? queryValue.q : null)
    },
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
  title: 'Zenn Tech 記事一覧',
  description: 'Zenn Tech に関する記事を一覧で閲覧できます。'
})
</script>

<template>
  <Container />
</template>
