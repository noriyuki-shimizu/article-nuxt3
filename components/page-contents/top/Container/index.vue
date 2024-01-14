<template>
  <div :class="$style['top-container']">
    <div :class="$style['body']">
      <h1 :class="$style['body__title']">
        技術記事閲覧サイト
      </h1>
      <ul :class="$style['body__link-list']">
        <li :class="$style['body__link-item']">
          <NuxtLink to="/articles/zenn" prefetch>
            Zenn Tech の記事一覧を見る
          </NuxtLink>
        </li>
        <li :class="$style['body__link-item']">
          <NuxtLink to="/articles/qiita" prefetch>
            Qiita の記事一覧を見る
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
