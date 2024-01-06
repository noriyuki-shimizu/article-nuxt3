<script setup lang="ts">
import Container from '@/components/page-contents/articles/Container/index.vue'
import { usePageApiStore } from '@/store/page/articles'
import { useCommonSearchUiStore } from '@/store/common/search'

definePageMeta({
  layout: 'desktop-articles',
  middleware: [
    ({ query }) => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      const queryValue = RouteUtil.convertLocationQueryToValue(query)
      if ('q' in queryValue) {
        const commonSearchUiStore = useCommonSearchUiStore()
        commonSearchUiStore.setSearchKeyword(queryValue.q)
      }
    },
    async () => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      try {
        const commonSearchUiStore = useCommonSearchUiStore()
        const pageApiStore = usePageApiStore()
        await pageApiStore.fetchArticles(commonSearchUiStore.searchKeyword.value || '')
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
