<script setup lang="ts">
import Container from '@/components/page-contents/articles/qiita/Container/index.vue'
import { usePageApiStore } from '@/store/page/articles/qiita'
import { useCommonSearchUiStore } from '@/store/common/search'

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
  title: 'Qiita 記事一覧',
  description: 'Qiita に関する記事を一覧で閲覧できます。'
})
</script>

<template>
  <Container />
</template>
