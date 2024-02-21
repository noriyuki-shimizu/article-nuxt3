<script setup lang="ts">
import { usePageApiStore } from '@/store/page/articles/note'
import type { NoteArticleViewModel } from '@/store/page/articles/note'

/** Page API Store */
const pageApiStore = usePageApiStore()

/** Qiita 記事一覧データ */
const articles = computed<NoteArticleViewModel[]>((oldValue) => {
  const newValue = pageApiStore.articles.value || []
  if (!LangUtil.isUndefined(oldValue) && oldValue.length === newValue.length && oldValue[0].id === newValue[0].id) {
    return oldValue
  }
  return newValue
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
  <!-- <pre>{{ articles }}</pre> -->
  <UiPartsDataDisplayInfiniteScrollList
    :items="articles"
    :height="'calc(100vh - (60px + 64px + 56px + 6px))'"
    :on-load="onLoad"
    :class="$style['note-list']"
  >
    <template #emptyDescription>
      <span v-once>記事情報が見つかりませんでした。。。</span>
    </template>
    <template #record="{ item }">
      <PageContentsArticlesNoteListItem
        :class="$style['note-list__item']"
        :article="item"
      />
    </template>
  </UiPartsDataDisplayInfiniteScrollList>
</template>

<style module lang="scss">
@use './style.scss';
</style>
