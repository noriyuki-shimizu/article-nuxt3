<script setup lang="ts"></script>

<template>
  <div :class="$style['articles-container']">
    <h1 :class="$style['articles-container__title']">
      Zenn Tech 記事一覧
    </h1>
    <PageContentsArticlesZennList />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
