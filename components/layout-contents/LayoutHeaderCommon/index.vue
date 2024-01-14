<template>
  <header :class="$style['header']">
    <slot />
  </header>
</template>

<style module lang="scss">
@use './style.scss';
</style>
