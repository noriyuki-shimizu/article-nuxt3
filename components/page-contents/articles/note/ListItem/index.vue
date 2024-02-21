<script setup lang="ts">
import type { Props } from './types'
import HeartIconSvg from '@/assets/svg/heart-icon.svg?component'
import YenIconSvg from '@/assets/svg/yen-icon.svg?component'

/** Props */
const props = defineProps<Props>()

/**
 * 金額に関する文字列を返す
 * @returns 金額に関する文字列
 */
const getPriceString = (): string => {
  return props.article.price === 0 ? '無料' : props.article.price.toLocaleString()
}
</script>

<template>
  <UiPartsDataDisplayListRecord
    :link-bridge="{ to: props.article.noteUrl, target: '_blank', ariaLabel: `${props.article.name}へ遷移` }"
  >
    <template #leftAside>
      <NuxtImg
        :alt="props.article.name"
        :src="props.article.spEyecatch || '/img/no-image-icon.jpg'"
        :class="$style['list-item__main-img']"
        ismap
        decoding="auto"
        loading="lazy"
        height="240"
        width="240"
        sizes="240px"
      />
    </template>
    <UiPartsDataDisplayListDetail :class="$style['list-item__list-detail']">
      <template #header>
        <NuxtImg
          :alt="props.article.name"
          :src="props.article.userUserProfileImagePath"
          :class="$style['list-item__profile-img']"
          ismap
          decoding="auto"
          loading="lazy"
          height="32"
          width="32"
          sizes="32px"
        />
        <div :class="$style['list-item__description']">
          <NuxtLink
            :to="`https://note.com/${props.article.userUrlname}`"
            :class="$style['list-item__link']"
            target="_blank"
          >
            {{ props.article.userNickname }}
          </NuxtLink>
          <span :class="$style['list-item__sub-text']">作成日: {{ props.article.publishAt }}</span>
        </div>
      </template>
      <template #title>
        {{ props.article.name }}
      </template>
      <template #footer>
        <div :class="[$style['list-item__footer-content'], $style['footer-content']]">
          <div :class="$style['footer-content__number']">
            <HeartIconSvg :class="$style['footer-content__icon']" />
            <span :class="$style['footer-content__number-text']">{{ props.article.likeCount.toLocaleString() }}</span>
          </div>
          <div :class="$style['footer-content__price']">
            <YenIconSvg :class="$style['footer-content__icon']" />
            <span :class="$style['footer-content__number-text']">{{ getPriceString() }}</span>
          </div>
        </div>
      </template>
    </UiPartsDataDisplayListDetail>
  </UiPartsDataDisplayListRecord>
</template>

<style module lang="scss">
@use './style.scss';
</style>
