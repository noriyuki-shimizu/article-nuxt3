<script setup lang="ts" generic="T extends unknown[]">
import type { Props } from './types'

/** Props */
const props = withDefaults(defineProps<Props<T>>(), {
  height: '1000px'
})

/** リストの大枠要素 */
const listElement = ref<HTMLElement | null>(null)

/** ページ番号 */
const page = ref<number>(1)

/** 無限スクロールにおける読み込み完了フラグ */
const isFinish = ref<boolean>(false)

/** 無限スクロールにおける読み込み中フラグ */
const { isLoading } = useInfiniteScroll(
  listElement,
  async () => {
    if (isFinish.value) {
      return
    }
    isFinish.value = await props.onLoad(++page.value)
  },
  { distance: 10 }
)
</script>

<template>
  <section ref="listElement" :class="$style['infinite-scroll-list']" :style="{ height: props.height }">
    <template v-if="LangUtil.isEmpty(props.items)">
      <LazyUiPartsDataDisplayEmpty :class="$style['infinite-scroll-list__empty']">
        <template #description>
          <slot name="emptyDescription" />
        </template>
      </LazyUiPartsDataDisplayEmpty>
    </template>
    <template v-else>
      <template
        v-for="item in props.items"
        :key="item.id"
      >
        <slot name="record" :item="item" />
      </template>
      <div v-show="isLoading && !isFinish" :class="$style['infinite-scroll-list__spinner-wrapper']">
        <LazyUiPartsFeedbackSpinner />
      </div>
    </template>
  </section>
</template>

<style module lang="scss">
@use './style.scss';
</style>
