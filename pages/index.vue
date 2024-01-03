<script setup lang="ts">
import SearchIconSvg from '@/assets/svg/search-icon.svg?component'
</script>

<template>
  <div :class="$style['top-container']">
    <div :class="$style['body']">
      <h1 :class="$style['body__title']">
        技術記事閲覧サイト
      </h1>
      <ul :class="$style['body__link-list']">
        <li :class="$style['body__link-item']">
          Zenn の記事一覧を見る（現在は閲覧できません）
        </li>
        <li :class="$style['body__link-item']">
          <NuxtLink to="/articles" prefetch>
            Qiita の記事一覧を見る
          </NuxtLink>
        </li>
      </ul>
      <form :class="[$style['body__search-form'], $style['search-form']]">
        <input type="text" placeholder="キーワード検索" :class="$style['search-form__input']">
        <button type="submit" :class="$style['search-form__button']">
          <SearchIconSvg />
        </button>
      </form>
    </div>
  </div>
</template>

<style module lang="scss">
.top-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.body {
  &__title {
    margin: 16px 0;
  }

  &__link-list {
    padding-top: 8px;
    padding-left: 20px;
  }

  &__link-item {
    margin: 8px 0;
  }

  &__search-form {
    width: 100%;
    margin-top: 24px;
  }
}

.search-form {
  position: relative;

  &__input {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  &__button {
    position: absolute;
    right: 0;
    width: 40px;
    height: 100%;
    color: var(--vt-c-white);
    cursor: pointer;
    background-color: var(--vt-c-mariner);
    border-radius: 0 8px 8px 0;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
