<script setup lang="ts">
import BookIconSvg from '@/assets/svg/book-icon.svg?component'

prerenderRoutes(['/articles/zenn', '/articles/qiita', '/articles/note'])
</script>

<template>
  <div :class="$style['top-container']">
    <h1 :class="$style['top-container__title']">
      <BookIconSvg :class="$style['top-container__title-icon']" />
      <span :class="$style['top-container__title-text']">技術記事閲覧サイト</span>
    </h1>
    <ul :class="$style['top-container__link-list']">
      <li :class="$style['top-container__link-item']">
        <NuxtLink
          to="/articles/zenn"
          :class="$style['top-container__link']"
          prefetch
        >
          <NuxtImg
            alt="Zenn Icon"
            src="/img/zenn-icon.jpg"
            :ismap="false"
            decoding="auto"
            height="32"
            width="32"
            sizes="32px"
          />
          <span :class="$style['top-container__link-text']">Zenn Tech の記事一覧を見る</span>
        </NuxtLink>
      </li>
      <li :class="$style['top-container__link-item']">
        <NuxtLink
          to="/articles/qiita"
          :class="$style['top-container__link']"
          prefetch
        >
          <NuxtImg
            alt="Qiita Icon"
            src="/img/qiita-icon.png"
            :ismap="false"
            decoding="auto"
            height="32"
            width="32"
            sizes="32px"
          />
          <span :class="$style['top-container__link-text']">Qiita の記事一覧を見る</span>
        </NuxtLink>
      </li>
      <li :class="$style['top-container__link-item']">
        <NuxtLink
          to="/articles/note"
          :class="$style['top-container__link']"
          prefetch
        >
          <NuxtImg
            alt="Note Com Icon"
            src="/img/note-com-icon.jpg"
            :ismap="false"
            decoding="auto"
            height="32"
            width="32"
            sizes="32px"
          />
          <span :class="$style['top-container__link-text']">note Tech の記事一覧を見る</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
