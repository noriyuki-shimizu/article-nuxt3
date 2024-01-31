<script setup lang="ts">
import ListItem from '../ListItem/index.vue'
import InfiniteScrollList from '@/components/ui-parts/data-display/InfiniteScrollList/index.vue'
import { usePageApiStore, usePageUiStore } from '@/store/page/articles/qiita'
import type { QiitaArticleViewModel } from '@/store/page/articles/qiita'

/** Page API Store */
const pageApiStore = usePageApiStore()

/** Page UI Store */
const pageUiStore = usePageUiStore()

/** Qiita 記事一覧データ */
const articles = computed<QiitaArticleViewModel[]>(() => {
  return pageApiStore.articles.value || []
})

/**
 * Infinite Scroll での読み込み中の処理
 * @param page ページ番号
 * @returns 読み込み完了フラグ
 */
const onLoad = async (page: number) => {
  const beforeArticles = articles.value
  const searchKeyword = pageUiStore.searchKeyword.value || ''
  await pageApiStore.moreFetchArticles(searchKeyword, page)
  return beforeArticles.length === articles.value?.length
}
</script>

<template>
  <InfiniteScrollList :items="articles" :height="'calc(100vh - (60px + 64px + 56px + 6px))'" :on-load="onLoad">
    <template #emptyDescription>
      記事情報が見つかりませんでした。。。
    </template>
    <template #record="{ item }">
      <ListItem :class="$style['list__item']" :article="item" />
    </template>
  </InfiniteScrollList>
</template>

<style module lang="scss">
@use './style.scss';
</style>
