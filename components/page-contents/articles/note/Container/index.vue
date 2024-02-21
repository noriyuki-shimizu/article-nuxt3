<script setup lang="ts"></script>

<template>
  <div :class="$style['note-articles-container']">
    <h1
      v-once
      :class="$style['note-articles-container__title']"
    >
      <NuxtImg
        alt="Note Com Icon"
        src="/img/note-com-icon.jpg"
        :ismap="false"
        decoding="auto"
        height="48"
        width="48"
        sizes="48px"
      />
      <span :class="$style['note-articles-container__title-text']">note Tech 記事一覧</span>
    </h1>
    <PageContentsArticlesNoteList />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
