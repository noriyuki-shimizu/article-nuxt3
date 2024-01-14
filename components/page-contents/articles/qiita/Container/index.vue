<script setup lang="ts">
import ListItem from '../ListItem/index.vue'
import Empty from '@/components/ui-parts/data-display/Empty/index.vue'
import { usePageApiStore } from '@/store/page/articles/qiita'

/** Page API Store */
const pageApiStore = usePageApiStore()

/** Qiita 記事一覧データ */
const articles = pageApiStore.articles
</script>

<template>
  <div :class="$style['articles-container']">
    <div :class="[$style['articles-container__body'], $style['body']]">
      <h1 :class="$style['body__title']">
        Qiita 記事一覧
      </h1>
      <section :class="$style['body__list']">
        <template v-if="LangUtil.isNull(articles) || LangUtil.isEmpty(articles)">
          <Empty />
        </template>
        <template v-else>
          <template v-for="article in articles" :key="article.id">
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
