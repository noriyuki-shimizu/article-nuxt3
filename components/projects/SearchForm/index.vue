<script setup lang="ts">
import type { LocationQueryRaw } from 'vue-router'
import type { Props } from './types'
import InputSearch from '@/components/ui-parts/data-entry/input/InputSearch/index.vue'
import { useCommonSearchUiStore } from '@/store/common/search'

preloadRouteComponents('/articles')

/** Props */
const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

/** Common Search UI Store */
const commonSearchUiStore = useCommonSearchUiStore()

/** 検索キーワード */
const searchKeyword = commonSearchUiStore.searchKeyword

/**
 * 状態に検索キーワードを設定します。
 * @param {string} keyword - キーワードパラメータは、検索に使用される検索キーワードを表す文字列です。
 */
const setSearchKeyword = (keyword: string): void => {
  commonSearchUiStore.setSearchKeyword(keyword.trim())
}

/**
 * 検索実行します。
 */
const onSearch = async (): Promise<void> => {
  const query: LocationQueryRaw = RouteUtil.convertLocationQuery(
    LangUtil.isNull(commonSearchUiStore.searchKeyword.value)
      ? {}
      : {
          q: commonSearchUiStore.searchKeyword.value
        }
  )

  await navigateTo({
    path: '/articles',
    query
  })
}
</script>

<template>
  <form @submit.prevent="onSearch()">
    <InputSearch :model-value="searchKeyword" :size="props.size" @update:model-value="setSearchKeyword" />
  </form>
</template>
