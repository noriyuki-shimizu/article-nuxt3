<script setup lang="ts">
import type { Props } from './types'
import HeartIconSvg from '@/assets/svg/heart-icon.svg?component'

/** Props */
const props = defineProps<Props>()
</script>

<template>
  <UiPartsDataDisplayListRecord
    :link-bridge="{ to: `https://zenn.dev${props.article.path}`, target: '_blank', ariaLabel: `${props.article.title}へ遷移` }"
  >
    <template #leftAside>
      <span :class="$style['list-item__large_text']">{{ props.article.emoji }}</span>
    </template>
    <UiPartsDataDisplayListDetail>
      <template #header>
        <NuxtImg
          :alt="props.article.userName"
          :src="props.article.userAvatarUrl"
          :class="$style['list-item__img']"
          ismap
          decoding="auto"
          loading="lazy"
          height="32"
          width="32"
          sizes="32px"
        />
        <div :class="$style['list-item__description']">
          <NuxtLink :to="`https://zenn.dev/${props.article.userName}`" :class="$style['list-item__link']" target="_blank">
            {{ props.article.userName }}
            <template v-if="!LangUtil.isEmpty(props.article.userName)">
              ({{ props.article.userDisplayName }})
            </template>
          </NuxtLink>
          <span :class="$style['list-item__sub-text']">作成日: {{ props.article.publishedAt }}</span>
        </div>
      </template>
      <template #title>
        <h2 :class="$style['list-item__title']">
          {{ props.article.title }}
        </h2>
      </template>
      <template #footer>
        <div :class="$style['list-item__number']">
          <HeartIconSvg :class="$style['list-item__icon']" />
          <span :class="$style['list-item__number-text']">{{ props.article.likedCount.toLocaleString() }}</span>
        </div>
      </template>
    </UiPartsDataDisplayListDetail>
  </UiPartsDataDisplayListRecord>
</template>

<style module lang="scss">
@use './style.scss';
</style>
