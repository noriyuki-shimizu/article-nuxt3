<script setup lang="ts">
import List from '../List/index.vue'
</script>

<template>
  <div :class="$style['articles-container']">
    <h1 :class="$style['articles-container__title']">
      Qiita 記事一覧
    </h1>
    <List />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
