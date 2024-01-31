<script setup lang="ts">
import ListItem from '../ListItem/index.vue'
import InfiniteScrollList from '@/components/ui-parts/data-display/InfiniteScrollList/index.vue'
import { usePageApiStore } from '@/store/page/articles/zenn'
import type { ZennArticleViewModel } from '@/store/page/articles/zenn'

/** Page API Store */
const pageApiStore = usePageApiStore()

/** Qiita 記事一覧データ */
const articles = computed<ZennArticleViewModel[]>(() => {
  return pageApiStore.articles.value || []
})

/**
 * Infinite Scroll での読み込み中の処理
 * @param page ページ番号
 * @returns 読み込み完了フラグ
 */
const onLoad = async (page: number): Promise<boolean> => {
  const beforeArticles = articles.value
  await pageApiStore.moreFetchArticles(page)
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
