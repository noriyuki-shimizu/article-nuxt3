<script setup lang="ts">
import LayoutHeaderSearch from '@/components/layout-contents/LayoutHeaderSearch/index.vue'
import LayoutFooter from '@/components/layout-contents/LayoutFooter/index.vue'
</script>

<template>
  <div :class="$style['layout-container']">
    <LayoutHeaderSearch :class="$style['layout-container__header']" />
    <main :class="$style['layout-container__main']">
      <slot />
    </main>
    <LayoutFooter :class="$style['layout-container__footer']" />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
