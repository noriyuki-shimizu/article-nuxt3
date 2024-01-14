<template>
  <div :class="$style['list-item']">
    <header :class="$style['list-item__header']">
      <slot name="header" />
    </header>
    <h2 :class="$style['list-item__title']">
      <slot name="title" />
    </h2>
    <footer :class="$style['list-item__footer']">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
