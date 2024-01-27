<template>
  <div :class="$style['list-detail']">
    <header :class="$style['list-detail__header']">
      <slot name="header" />
    </header>
    <h2 :class="$style['list-detail__title']">
      <slot name="title" />
    </h2>
    <footer :class="$style['list-detail__footer']">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
