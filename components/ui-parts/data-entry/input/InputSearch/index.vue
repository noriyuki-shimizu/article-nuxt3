<script setup lang="ts">
import type { Props } from './types'
import SearchIconSvg from '@/assets/svg/search-icon.svg?component'

/** Props */
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'キーワード検索'
})

/** 入力値 */
const model = defineModel({ required: true })
</script>

<template>
  <div :class="$style['input-search']">
    <input v-model="model" type="text" :placeholder="props.placeholder" :class="$style['input-search__input']">
    <button type="submit" title="search" :class="$style['input-search__button']">
      <SearchIconSvg />
    </button>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
