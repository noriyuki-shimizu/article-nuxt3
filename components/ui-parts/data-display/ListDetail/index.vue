<template>
  <div :class="$style['list-detail']">
    <header
      v-if="$slots.header"
      :class="$style['list-detail__header']"
    >
      <slot name="header" />
    </header>
    <h2
      v-if="$slots.title"
      :class="$style['list-detail__title']"
    >
      <slot name="title" />
    </h2>
    <div
      v-if="$slots.description"
      :class="$style['list-detail__description-wrapper']"
    >
      <p :class="$style['list-detail__description']">
        <slot name="description" />
      </p>
    </div>
    <footer
      v-if="$slots.footer"
      :class="$style['list-detail__footer']"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
