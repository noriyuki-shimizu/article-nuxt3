<script setup lang="ts">
/** Runtime Config */
const config = useRuntimeConfig()

definePageMeta({
  layout: 'desktop-top'
})

useSeoMeta({
  title: '技術記事閲覧サイト',
  description: '技術に関する記事を一覧で閲覧できるサイトです。'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: config.public.pageBaseUrl
    }
  ]
})

await preloadComponents('PageContentsTopContainer')
</script>

<template>
  <PageContentsTopContainer />
</template>
