<script setup lang="ts">
import LayoutHeader from '@/components/layout-contents/LayoutHeader/index.vue'
import LayoutFooter from '@/components/layout-contents/LayoutFooter/index.vue'
</script>

<template>
  <div :class="$style['layout-container']">
    <LayoutHeader :class="$style['layout-container__header']" />
    <main :class="$style['layout-container__main']">
      <slot />
    </main>
    <LayoutFooter :class="$style['layout-container__footer']" />
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
</style>
