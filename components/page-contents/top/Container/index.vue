<script setup lang="ts">
import InputSearch from '@/components/ui-parts/data-entry/input/InputSearch/index.vue'

const searchText = ref<string>('')
</script>

<template>
  <div :class="$style['top-container']">
    <div :class="$style['body']">
      <h1 :class="$style['body__title']">
        技術記事閲覧サイト
      </h1>
      <ul :class="$style['body__link-list']">
        <li :class="$style['body__link-item']">
          Zenn の記事一覧を見る（現在は閲覧できません）
        </li>
        <li :class="$style['body__link-item']">
          <NuxtLink to="/articles" prefetch>
            Qiita の記事一覧を見る
          </NuxtLink>
        </li>
      </ul>
      <form :class="$style['body__search-form']">
        <InputSearch v-model="searchText" />
      </form>
    </div>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
