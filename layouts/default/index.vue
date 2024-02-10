<script setup lang="ts"></script>

<template>
  <div :class="$style['layout-container']">
    <main :class="$style['layout-container__main']">
      <slot />
    </main>
    <LayoutContentsFooter :class="$style['layout-container__footer']" />
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
