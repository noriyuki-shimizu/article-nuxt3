<script setup lang="ts">
import Spinner from '@/components/ui-parts/feedback/Spinner/index.vue'

/** Loading Indicator */
const { isLoading } = useLoadingIndicator()
</script>

<template>
  <NuxtLayout>
    <div v-show="isLoading" :class="$style['spinner-wrapper']">
      <Spinner />
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
