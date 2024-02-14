<script setup lang="ts">
import type { Props } from './types'
import { createLinkBridge } from './utils'

/** Props */
const props = defineProps<Props>()

/** レコード全体をリンクで囲う際のリンクデータ */
const linkBridge = createLinkBridge(props.linkBridge)
</script>

<template>
  <article :class="$style['list-record']">
    <template v-if="!LangUtil.isNull(linkBridge)">
      <NuxtLink
        :class="$style['list-record__link-bridge']"
        :to="linkBridge.to"
        :target="linkBridge.target"
        :aria-label="linkBridge.ariaLabel"
      />
    </template>
    <div :class="$style['list-record__container']">
      <div
        v-if="$slots.leftAside"
        :class="$style['list-record__left-aside']"
      >
        <slot name="leftAside" />
      </div>
      <slot />
    </div>
  </article>
</template>

<style module lang="scss">
@use './style.scss';
</style>
