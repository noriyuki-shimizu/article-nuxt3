<script setup lang="ts"></script>

<template>
  <div :class="$style['qiita-articles-container']">
    <h1
      v-once
      :class="$style['qiita-articles-container__title']"
    >
      <NuxtImg
        alt="Note Com Icon"
        src="/img/qiita-icon.png"
        :ismap="false"
        decoding="auto"
        height="48"
        width="48"
        sizes="48px"
      />
      <span :class="$style['qiita-articles-container__title-text']">Qiita 記事一覧</span>
    </h1>
    <PageContentsArticlesQiitaList />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
