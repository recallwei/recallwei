<script setup lang="ts">
import "../styles/global.scss";
</script>

<template>
  <div class="layout-wrapper">
    <Navbar />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.layout-wrapper {
  width: 80%;
  margin: auto;
}
</style>
