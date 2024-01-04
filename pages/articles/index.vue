<script setup lang="ts">
import { usePageApiStore } from '@/store/page/articles'

definePageMeta({
  middleware: [
    async () => {
      const nuxtApp = useNuxtApp()
      if (nuxtApp.isHydrating) {
        return
      }

      try {
        const pageApiStore = usePageApiStore()
        await pageApiStore.fetchArticles()
      } catch (err) {
        return nuxtApp.runWithContext(() => {
          const nuxtError = ErrorUtil.convertNuxtError(err)
          return abortNavigation(nuxtError)
        })
      }
    }
  ]
})

useSeoMeta({
  title: '技術記事一覧',
  description: '技術に関する記事を一覧で閲覧できます。'
})

/** Page API Store */
const pageApiStore = usePageApiStore()

/** Qiita 記事一覧データ */
const qiitaArticles = pageApiStore.qiitaArticles
</script>

<template>
  <div :class="$style['articles-container']">
    <div :class="[$style['articles-container__body'], $style['body']]">
      <h1 :class="$style['body__title']">
        技術記事一覧
      </h1>
      <section :class="$style['body__list']">
        <template v-if="LangUtil.isNull(qiitaArticles)">
          記事情報がありません。。。
        </template>
        <template v-else>
          <template v-for="article in qiitaArticles" :key="article.id">
            <article :class="[$style['body__list-item'], $style['list-item']]">
              <NuxtLink :class="$style['list-item__link-bridge']" :to="article.url" target="_blank" :aria-label="`${article.title}へ遷移`" />
              <header :class="$style['list-item__header']">
                <img :alt="article.userId" :src="article.userProfileImageUrl" :class="$style['list-item__img']" height="32" width="32">
                <div :class="$style['list-item__description']">
                  <NuxtLink :to="`https://qiita.com/${article.userId}`" :class="$style['list-item__link']">
                    @{{ article.userId }}
                    <template v-if="!LangUtil.isEmpty(article.userName)">
                      ({{ article.userName }})
                    </template>
                  </NuxtLink>
                  <span :class="$style['list-item__sub-text']">作成日: {{ article.createdAt }}</span>
                </div>
              </header>
              <h2 :class="$style['list-item__title']">
                {{ article.title }}
              </h2>
              <footer :class="$style['list-item__footer']">
                <ul :class="$style['list-item__tag-list']">
                  <template v-for="tagName in article.tagNames" :key="`${article.id}-${tagName}`">
                    <li :class="$style['list-item__tag-item']">
                      <NuxtLink :to="`https://qiita.com/tags/${tagName.toLowerCase()}`" :class="$style['list-item__tag-link']">
                        {{ tagName }}
                      </NuxtLink>
                    </li>
                  </template>
                </ul>
              </footer>
            </article>
          </template>
        </template>
      </section>
    </div>
  </div>
</template>

<style module lang="scss">
.list-item {
  position: relative;
  padding: 16px;
  margin: 16px 0;
  border: 1px solid var(--color-border);
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &__link-bridge {
    position: absolute;
    inset: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__link {
    position: relative;
    z-index: 1;
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__description {
    margin-left: 16px;
  }

  &__sub-text {
    display: block;
    font-size: 12px;
  }

  &__img {
    border-radius: 50%;
  }

  &__title {
    margin: 16px 0;
  }

  &__tag-list {
    display: flex;
    gap: 16px;
    font-size: 12px;
    list-style: none;
  }

  &__tag-item {
    position: relative;
    z-index: 1;
    padding: 4px 8px;
    background-color: var(--color-background-tag);
    border: 1px solid var(--color-border);
    border-radius: 8px;

    &:hover {
      background-color: var(--color-background-tag-hover);
    }
  }

  &__tag-link {
    color: var(--color-text);

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
