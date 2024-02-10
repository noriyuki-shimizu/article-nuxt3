<script setup lang="ts">
import BookIconSvg from '@/assets/svg/book-icon.svg?component'

prerenderRoutes(['/articles/zenn', '/articles/qiita'])
</script>

<template>
  <div :class="$style['top-container']">
    <h1 :class="$style['top-container__title']">
      <BookIconSvg :class="$style['top-container__title-icon']" />
      <span :class="$style['top-container__title-text']">技術記事閲覧サイト</span>
    </h1>
    <ul :class="$style['top-container__link-list']">
      <li :class="$style['top-container__link-item']">
        <NuxtLink to="/articles/zenn" prefetch>
          Zenn Tech の記事一覧を見る
        </NuxtLink>
      </li>
      <li :class="$style['top-container__link-item']">
        <NuxtLink to="/articles/qiita" prefetch>
          Qiita の記事一覧を見る
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
