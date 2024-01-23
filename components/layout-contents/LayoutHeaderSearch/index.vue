<script setup lang="ts">
import LayoutHeaderCommon from '../LayoutHeaderCommon/index.vue'
import SearchForm from '../QiitaSearchForm/index.vue'
import HeaderTitle from '../HeaderTitle/index.vue'
</script>

<template>
  <LayoutHeaderCommon>
    <HeaderTitle />
    <SearchForm size="small" />
  </LayoutHeaderCommon>
</template>

<style module lang="scss">
@use './style.scss';
</style>
