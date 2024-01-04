<script setup lang="ts">
import { usePageApiStore } from '@/store/page/articles'

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
@use './style.scss';
</style>
