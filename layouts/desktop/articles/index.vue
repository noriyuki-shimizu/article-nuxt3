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
@use './style.scss';
</style>
