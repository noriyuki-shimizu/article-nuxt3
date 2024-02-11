<script setup lang="ts">
import { usePageApiStore, usePageUiStore } from '@/store/page/articles/qiita'
import type { QiitaArticleViewModel } from '@/store/page/articles/qiita'

/** Page API Store */
const pageApiStore = usePageApiStore()

/** Page UI Store */
const pageUiStore = usePageUiStore()

/** Qiita 記事一覧データ */
const articles = computed<QiitaArticleViewModel[]>((oldValue) => {
  const newValue = pageApiStore.articles.value || []
  if (!LangUtil.isUndefined(oldValue) && oldValue[0].id === newValue[0].id) {
    return oldValue
  }
  return newValue
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
  <UiPartsDataDisplayInfiniteScrollList :items="articles" :height="'calc(100vh - (60px + 64px + 56px + 6px))'" :on-load="onLoad">
    <template #emptyDescription>
      <span v-once>記事情報が見つかりませんでした。。。</span>
    </template>
    <template #record="{ item }">
      <PageContentsArticlesQiitaListItem :class="$style['list__item']" :article="item" />
    </template>
  </UiPartsDataDisplayInfiniteScrollList>
</template>

<style module lang="scss">
@use './style.scss';
</style>
