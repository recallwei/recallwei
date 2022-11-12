<script setup lang="ts">
import type { Layout } from "@interfaces";

const layout = ref<Layout>("default");
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
// 页面切换过渡样式
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
