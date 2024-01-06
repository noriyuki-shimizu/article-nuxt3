<script setup lang="ts">
import InputSearch from '@/components/ui-parts/data-entry/input/InputSearch/index.vue'

const searchText = ref<string>('')
</script>

<template>
  <header :class="$style['header']">
    <NuxtLink to="/" :class="$style['header__link']">
      <NuxtImg alt="main-icon" src="/img/main-icon.png" width="24" height="24" />
      <h3 :class="$style['header__link-text']">
        技術記事閲覧サイト
      </h3>
    </NuxtLink>
    <InputSearch v-model="searchText" size="small" />
  </header>
</template>

<style module lang="scss">
@use './style.scss';
</style>
