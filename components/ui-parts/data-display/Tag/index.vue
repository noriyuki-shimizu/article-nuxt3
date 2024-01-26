<script setup lang="ts">
import type { Props } from './types'

/** Props */
const props = withDefaults(defineProps<Props>(), {
  color: 'normal',
  border: true
})
</script>

<template>
  <span :class="[$style['tag'], $style[`tag--color-${props.color}`], { 'tag--border': props.border }]">
    <slot />
  </span>
</template>

<style module lang="scss">
@use './style.scss';
</style>
