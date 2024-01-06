<script setup lang="ts">
import type { Props } from './types'

/** Props */
const props = defineProps<Props>()
</script>

<template>
  <article :class="$style['list-item']">
    <NuxtLink :class="$style['list-item__link-bridge']" :to="props.article.url" target="_blank" :aria-label="`${props.article.title}へ遷移`" />
    <header :class="$style['list-item__header']">
      <NuxtImg
        :alt="props.article.userId"
        :src="props.article.userProfileImageUrl || '/img/user-icon.png'"
        :class="$style['list-item__img']"
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
    </header>
    <h2 :class="$style['list-item__title']">
      {{ props.article.title }}
    </h2>
    <footer :class="$style['list-item__footer']">
      <ul :class="$style['list-item__tag-list']">
        <template v-for="tagName in props.article.tagNames" :key="`${props.article.id}-${tagName}`">
          <li :class="$style['list-item__tag-item']">
            <NuxtLink :to="`https://qiita.com/tags/${tagName.toLowerCase()}`" :class="$style['list-item__tag-link']" target="_blank">
              {{ tagName }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </footer>
  </article>
</template>

<style module lang="scss">
@use './style.scss';
</style>
