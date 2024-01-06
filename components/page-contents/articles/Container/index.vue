<script setup lang="ts">
import ListItem from '../ListItem/index.vue'
import { usePageApiStore } from '@/store/page/articles'

/** Page API Store */
const pageApiStore = usePageApiStore()

/** Qiita 記事一覧データ */
const qiitaArticles = pageApiStore.qiitaArticles
</script>

<template>
  <div :class="$style['articles-container']">
    <div :class="[$style['articles-container__body'], $style['body']]">
      <h1 :class="$style['body__title']">
        技術記事一覧
      </h1>
      <section :class="$style['body__list']">
        <template v-if="LangUtil.isNull(qiitaArticles) || LangUtil.isEmpty(qiitaArticles)">
          <span>記事情報が見つかりませんでした。。。</span>
        </template>
        <template v-else>
          <template v-for="article in qiitaArticles" :key="article.id">
            <ListItem :article="article" :class="$style['body__list-item']" />
          </template>
        </template>
      </section>
    </div>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
