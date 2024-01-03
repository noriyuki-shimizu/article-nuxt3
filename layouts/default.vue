<script setup lang="ts">
import GitHubIconSvg from '@/assets/svg/github-icon.svg?component'
</script>

<template>
  <div :class="$style['layout-container']">
    <main :class="$style['layout-container__main']">
      <slot />
    </main>
    <footer :class="[$style['layout-container__footer'], $style['footer']]">
      <span>@ 2024 Noriyuki Shimizu</span>
      <NuxtLink :class="$style['footer__link']" to="https://github.com/noriyuki-shimizu" target="_blank">
        <GitHubIconSvg :class="$style['footer__icon']" />
        <span :class="$style['footer__link-text']">GitHub</span>
      </NuxtLink>
    </footer>
  </div>
</template>

<style module lang="scss">
.layout-container {
    position: relative;
    padding: 24px 24px 72px;

    &__footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
}

.footer {
    display: flex;
    justify-content: center;
    padding: 24px;
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
