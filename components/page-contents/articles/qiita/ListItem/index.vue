<script setup lang="ts">
import type { Props } from './types'
import HeartIconSvg from '@/assets/svg/heart-icon.svg?component'

/** Props */
const props = defineProps<Props>()
</script>

<template>
  <UiPartsDataDisplayListRecord
    :link-bridge="{ to: props.article.url, target: '_blank', ariaLabel: `${props.article.title}へ遷移` }"
  >
    <UiPartsDataDisplayListDetail>
      <template #header>
        <NuxtImg
          :alt="props.article.userId"
          :src="props.article.userProfileImageUrl"
          :class="$style['list-item__img']"
          :ismap="false"
          decoding="auto"
          loading="lazy"
          height="32"
          width="32"
          sizes="32px"
        />
        <div :class="$style['list-item__description']">
          <NuxtLink :to="`https://qiita.com/${props.article.userId}`" :class="$style['list-item__link']" target="_blank">
            @{{ props.article.userId }}
            <template v-if="!LangUtil.isEmpty(props.article.userName)">
              ({{ props.article.userName }})
            </template>
          </NuxtLink>
          <span :class="$style['list-item__sub-text']">作成日: {{ props.article.createdAt }}</span>
        </div>
      </template>
      <template #title>
        {{ props.article.title }}
      </template>
      <template #footer>
        <div :class="$style['list-item__tag-list']">
          <template v-for="tagName in props.article.tagNames" :key="`${props.article.id}-${tagName}`">
            <UiPartsDataDisplayTag :class="$style['list-item__tag-item']">
              <NuxtLink :to="`https://qiita.com/tags/${tagName.toLowerCase()}`" :class="$style['list-item__tag-link']" target="_blank">
                {{ tagName }}
              </NuxtLink>
            </UiPartsDataDisplayTag>
          </template>
        </div>
        <div :class="$style['list-item__number']">
          <HeartIconSvg :class="$style['list-item__icon']" />
          <span :class="$style['list-item__number-text']">{{ props.article.likesCount.toLocaleString() }}</span>
        </div>
      </template>
    </UiPartsDataDisplayListDetail>
  </UiPartsDataDisplayListRecord>
</template>

<style module lang="scss">
@use './style.scss';
</style>
