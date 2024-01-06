<script setup lang="ts">
import GitHubIconSvg from '@/assets/svg/github-icon.svg?component'
import InputSearch from '@/components/ui-parts/data-entry/input/InputSearch/index.vue'

const searchText = ref<string>('')
</script>

<template>
  <div :class="$style['layout-container']">
    <header :class="[$style['layout-container__header'], $style['header']]">
      <NuxtLink to="/" :class="$style['header__link']">
        <NuxtImg alt="main-icon" src="/img/main-icon.png" width="24" height="24" />
        <h3 :class="$style['header__link-text']">
          技術記事閲覧サイト
        </h3>
      </NuxtLink>
      <InputSearch v-model="searchText" size="small" />
    </header>
    <main :class="$style['layout-container__main']">
      <slot />
    </main>
    <footer :class="[$style['layout-container__footer'], $style['footer']]">
      <span>@ 2024 Noriyuki Shimizu</span>
      <NuxtLink :class="$style['footer__link']" to="https://github.com/noriyuki-shimizu/article-nuxt3" target="_blank">
        <GitHubIconSvg :class="$style['footer__icon']" />
        <span :class="$style['footer__link-text']">GitHub</span>
      </NuxtLink>
    </footer>
  </div>
</template>

<style module lang="scss">
.layout-container {
    position: relative;
    padding: 66px 24px 56px;

    &__header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
    }

    &__main {
      z-index: 1;
    }

    &__footer {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
      width: 100%;
    }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: var(--color-background);

  &__link {
    display: flex;
    align-items: center;
    color: var(--color-text);

    &:visited {
      color: var(--color-text);
    }
  }

  &__link-text {
    padding-left: 8px;
  }
}

.footer {
    display: flex;
    justify-content: center;
    padding: 16px;
    background-color: var(--color-background);

    &__link {
      display: flex;
      align-items: center;
      margin-left: 24px;
    }

    &__link-text {
      margin-left: 8px;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
}
</style>
