<script setup lang="ts">
import { StatusCode } from '@/enums/common/http/statusCode'
import type { ErrorProps } from '@/types/core/errorPage'

/** Props */
const props = defineProps<ErrorProps>()

/** Runtime Config */
const runtimeConfig = useRuntimeConfig()

/**
 * エラーのタイトルを取得する
 * @returns エラータイトル
 */
const getErrorTitle = (): string => {
  switch (props.error.statusCode) {
    case StatusCode.STATUS_CODE_INTERNAL_SERVER_ERROR:
      return '致命的エラーが発生しました。'
    case StatusCode.STATUS_CODE_BAD_REQUEST:
      return '入力内容に誤りがあります。お手数ですが、もう一度入力内容の確認をお願いします。'
    case StatusCode.STATUS_CODE_NOT_FOUND:
      return 'お探しのページが見つかりませんでした。'
    default:
      return 'エラーが発生しました。'
  }
}

/**
 * エラーをクリアしてユーザーをホームページにリダイレクトする
 */
const handleError = async (): Promise<void> => {
  await clearError()
}

useHeadSafe({
  title: 'エラーページ',
  meta: [
    { name: 'description', content: '技術記事閲覧サイトにおけるエラーページです。' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <h2 :class="$style['error-title']">
      {{ getErrorTitle() }}
    </h2>

    <template v-if="!runtimeConfig.public.isProduction">
      <div :class="$style['error-detail']">
        {{ props.error }}
      </div>
    </template>

    <NuxtLink to="/" :class="$style['error-link']" @click="handleError">
      トップページへ
    </NuxtLink>
  </NuxtLayout>
</template>

<style module lang="scss">
.error-title {
  margin-bottom: 24px;
}

.error-detail {
  padding: 16px;
  margin-bottom: 24px;
  background-color: var(--color-background-snippet);
}

.error-link {
  display: block;
}
</style>
