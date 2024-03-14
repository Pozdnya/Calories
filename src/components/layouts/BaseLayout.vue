<script setup lang="ts">
import TheHeader from './TheHeader.vue';
import TheMain from './TheMain.vue';
import TheNavigation from './TheNavigation.vue';
</script>

<template>
  <TheHeader />
  <div class="content">
    <TheNavigation />
    <TheMain />
  </div>
</template>

<style scoped>
.content {
  display: flex;
}
</style>