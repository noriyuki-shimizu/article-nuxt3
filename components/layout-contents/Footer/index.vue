<script setup lang="ts">
import GitHubIconSvg from '@/assets/svg/github-icon.svg?component'
</script>

<template>
  <footer :class="$style['footer']">
    <span>@ 2024 Noriyuki Shimizu</span>
    <NuxtLink :class="$style['footer__link']" to="https://github.com/noriyuki-shimizu/article-nuxt3" target="_blank">
      <GitHubIconSvg :class="$style['footer__icon']" />
      <span :class="$style['footer__link-text']">GitHub</span>
    </NuxtLink>
  </footer>
</template>

<style module lang="scss">
@use './style.scss';
</style>
