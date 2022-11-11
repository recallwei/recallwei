<script setup lang="ts">
import type { Layout } from "@interfaces";

const layout = ref<Layout>("default");
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
