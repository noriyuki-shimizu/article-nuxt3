<script setup lang="ts"></script>

<template>
  <div :class="$style['zenn-articles-container']">
    <h1
      v-once
      :class="$style['zenn-articles-container__title']"
    >
      <NuxtImg
        alt="Note Com Icon"
        src="/img/zenn-icon.jpg"
        :ismap="false"
        decoding="auto"
        height="48"
        width="48"
        sizes="48px"
      />
      <span :class="$style['zenn-articles-container__title-text']">Zenn Tech 記事一覧</span>
    </h1>
    <PageContentsArticlesZennList />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
