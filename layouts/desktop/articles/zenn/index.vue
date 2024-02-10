<script setup lang="ts">
await preloadComponents(['LayoutContentsHeaderSimple', 'LayoutContentsFooter'])
</script>

<template>
  <div :class="$style['layout-container']">
    <LayoutContentsHeaderSimple :class="$style['layout-container__header']" />
    <main :class="$style['layout-container__main']">
      <slot />
    </main>
    <LayoutContentsFooter :class="$style['layout-container__footer']" />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
