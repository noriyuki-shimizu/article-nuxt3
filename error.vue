<script setup lang="ts">
import type { ErrorProps } from '@/types/core/errorPage'
import { STATUS_CODE_INTERNAL_SERVER_ERROR, STATUS_CODE_BAD_REQUEST } from '@/constants/http/statusCode'

/** Props */
const props = defineProps<ErrorProps>()

/**
 * 環境変数の値をチェックして、アプリケーションが開発環境で実行されているかどうかを判断
 * @returns 環境が開発環境かを示すブール値を返す
 */
const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development'
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
    <template v-if="props.error.statusCode === STATUS_CODE_INTERNAL_SERVER_ERROR">
      <h2>致命的エラーが発生しました。</h2>
    </template>
    <template v-else-if="props.error.statusCode === STATUS_CODE_BAD_REQUEST">
      <h2>入力内容に誤りがあります。お手数ですが、もう一度入力内容の確認をお願いします。</h2>
    </template>

    <template v-if="isDevelopment()">
      <div :class="$style['error-detail']">
        {{ props.error }}
      </div>
    </template>

    <NuxtLink to="/" @click="handleError">
      トップページへ
    </NuxtLink>
  </NuxtLayout>
</template>

<style module lang="scss">
.error-detail {
  padding: 16px;
  margin: 24px 0;
  background-color: var(--color-background-snippet);
  border-radius: 8px;
}
</style>
