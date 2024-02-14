<script setup lang="ts">
import type { LocationQueryRaw } from 'vue-router'
import type { Props } from './types'
import { ENABLE_QUERY_KEY } from '@/constants/business/route/query'
import { usePageUiStore } from '@/store/page/articles/qiita'

preloadRouteComponents('/articles/qiita')

/** Props */
const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

/** Common Search UI Store */
const uiStore = usePageUiStore()

/** 検索キーワード */
const searchKeyword = uiStore.searchKeyword

/**
 * 状態に検索キーワードを設定します。
 * @param {string} keyword - キーワードパラメータは、検索に使用される検索キーワードを表す文字列です。
 */
const setSearchKeyword = (keyword: string): void => {
  uiStore.setSearchKeyword(keyword.trim())
}

/**
 * 検索実行します。
 */
const onSearch = async (): Promise<void> => {
  const query: LocationQueryRaw = RouteUtil.convertLocationQuery(
    LangUtil.isNull(uiStore.searchKeyword.value)
      ? {}
      : {
          q: uiStore.searchKeyword.value
        },
    ENABLE_QUERY_KEY
  )

  await navigateTo({
    path: '/articles/qiita',
    query
  })
}
</script>

<template>
  <form @submit.prevent="onSearch()">
    <UiPartsDataEntryInputInputSearch
      :model-value="searchKeyword"
      :size="props.size"
      @update:model-value="setSearchKeyword"
    />
  </form>
</template>
