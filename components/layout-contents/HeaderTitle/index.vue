<script setup lang="ts">
import BookIconSvg from '@/assets/svg/book-icon.svg?component'

prerenderRoutes(['/'])
</script>

<template>
  <NuxtLink
    to="/"
    :class="$style['header-title']"
  >
    <BookIconSvg :class="$style['header-title__icon']" />
    <h3 :class="$style['header-title__link-text']">
      技術記事閲覧サイト
    </h3>
  </NuxtLink>
</template>

<style module lang="scss">
@use './style.scss';
</style>
