<script setup lang="ts">
import SearchForm from '@/components/projects/SearchForm/index.vue'
</script>

<template>
  <header :class="$style['header']">
    <NuxtLink to="/" :class="$style['header__link']">
      <NuxtImg alt="main-icon" src="/img/main-icon.png" width="24" height="24" />
      <h3 :class="$style['header__link-text']">
        技術記事閲覧サイト
      </h3>
    </NuxtLink>
    <SearchForm size="small" />
  </header>
</template>

<style module lang="scss">
@use './style.scss';
</style>
