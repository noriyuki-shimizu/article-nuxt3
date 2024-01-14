<script setup lang="ts">
import BookIconSvg from '@/assets/svg/book-icon.svg?component'
import SearchForm from '@/components/projects/SearchForm/index.vue'
</script>

<template>
  <header :class="$style['header']">
    <NuxtLink to="/" :class="$style['header__link']">
      <BookIconSvg :class="$style['header__icon']" />
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
