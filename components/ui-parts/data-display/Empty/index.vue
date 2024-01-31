<script setup lang="ts">
import EmptyIconSvg from '@/assets/svg/empty.svg?component'
</script>

<template>
  <div :class="$style['empty']">
    <slot name="image">
      <EmptyIconSvg />
    </slot>
    <span :class="$style['empty__description']">
      <slot name="description">No data</slot>
    </span>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
