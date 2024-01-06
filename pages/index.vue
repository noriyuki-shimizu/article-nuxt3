<script setup lang="ts">
import Container from '@/components/page-contents/top/Container/index.vue'

definePageMeta({
  layout: 'desktop-top'
})

useSeoMeta({
  title: '技術記事閲覧サイト',
  description: '技術に関する記事を一覧で閲覧できるサイトです。'
})
</script>

<template>
  <Container />
</template>
