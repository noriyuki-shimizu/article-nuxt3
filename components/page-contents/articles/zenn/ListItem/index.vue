<script setup lang="ts">
import type { Props } from './types'
import HeartIconSvg from '@/assets/svg/heart-icon.svg?component'
import ListDetail from '@/components/ui-parts/data-display/ListDetail/index.vue'

/** Props */
const props = defineProps<Props>()
</script>

<template>
  <article :class="$style['list-item']">
    <NuxtLink :class="$style['list-item__link-bridge']" :to="`https://zenn.dev${props.article.path}`" target="_blank" :aria-label="`${props.article.title}へ遷移`" />
    <div :class="$style['list-item__container']">
      <div :class="$style['list-item__left-aside']">
        {{ props.article.emoji }}
      </div>
      <ListDetail>
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
          {{ props.article.title }}
        </template>
        <template #footer>
          <div :class="$style['list-item__number']">
            <HeartIconSvg :class="$style['list-item__icon']" />
            <span :class="$style['list-item__number-text']">{{ props.article.likedCount.toLocaleString() }}</span>
          </div>
        </template>
      </ListDetail>
    </div>
  </article>
</template>

<style module lang="scss">
@use './style.scss';
</style>
