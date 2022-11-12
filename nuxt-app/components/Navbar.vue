<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <div class="navItems">
        <NuxtLink :to="navItem.to" v-for="navItem in appConfig.navbar.items">
          {{ navItem.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-wrapper {
  padding: 12px;
  .navbar {
    height: 60px;
    width: auto;
    padding: 10px;
    // background-color: $primary-color;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    align-items: center;
    .navItems {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
}
</style>
