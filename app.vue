<script setup lang="ts">
/** Loading Indicator */
const { isLoading } = useLoadingIndicator()
</script>

<template>
  <NuxtLayout>
    <div
      v-show="isLoading"
      :class="$style['spinner-wrapper']"
    >
      <UiPartsFeedbackSpinner size="large" />
    </div>
    <div v-show="!isLoading">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style module lang="scss">
.spinner {
  &-wrapper {
    display: flex;
    justify-content: center;
    padding: 32px 0;
  }
}
</style>
