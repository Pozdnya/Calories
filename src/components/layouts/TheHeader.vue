<script setup lang="ts">
import Logo from '@/assets/logo.png';
import BaseButton from '../UI/BaseButton.vue';
</script>

<template>
  <header class="header">
    <div class="logo header__logo">
      <a href="/" class="logo__link">
        <img :src="Logo" class="logo__image"/>
      </a>
    </div>

    <div class="header__actions">
      <BaseButton>Log In</BaseButton>
      <BaseButton>Registration</BaseButton>
    </div>
  </header>
</template>

<style scoped></style>