<script setup lang="ts">
import type { Props } from './types'
import HeartIconSvg from '@/assets/svg/heart-icon.svg?component'
import ListDetail from '@/components/ui-parts/data-display/ListDetail/index.vue'
import Tag from '@/components/ui-parts/data-display/Tag/index.vue'

/** Props */
const props = defineProps<Props>()
</script>

<template>
  <article :class="$style['list-item']">
    <NuxtLink :class="$style['list-item__link-bridge']" :to="props.article.url" target="_blank" :aria-label="`${props.article.title}へ遷移`" />
    <ListDetail>
      <template #header>
        <NuxtImg
          :alt="props.article.userId"
          :src="props.article.userProfileImageUrl"
          :class="$style['list-item__img']"
          ismap
          decoding="auto"
          loading="lazy"
          height="32"
          width="32"
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
        <h2 :class="$style['list-item__title']">
          {{ props.article.title }}
        </h2>
      </template>
      <template #footer>
        <div :class="$style['list-item__tag-list']">
          <template v-for="tagName in props.article.tagNames" :key="`${props.article.id}-${tagName}`">
            <Tag :class="$style['list-item__tag-item']">
              <NuxtLink :to="`https://qiita.com/tags/${tagName.toLowerCase()}`" :class="$style['list-item__tag-link']" target="_blank">
                {{ tagName }}
              </NuxtLink>
            </Tag>
          </template>
        </div>
        <div :class="$style['list-item__number']">
          <HeartIconSvg :class="$style['list-item__icon']" />
          <span :class="$style['list-item__number-text']">{{ props.article.likesCount.toLocaleString() }}</span>
        </div>
      </template>
    </ListDetail>
  </article>
</template>

<style module lang="scss">
@use './style.scss';
</style>
