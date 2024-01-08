<script setup lang="ts">
import type { Props } from './types'
import LoadingIconSvg from '@/assets/svg/loading-icon.svg?component'

/** Props */
const props = withDefaults(defineProps<Props>(), {
  size: 'default'
})
</script>

<template>
  <LoadingIconSvg :class="[$style['spinner'], $style[`spinner--${props.size}`]]" />
</template>

<style module lang="scss">
@use './style.scss';
</style>
