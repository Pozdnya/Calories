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

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 2px solid var(--color-primary);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--color-white);
  z-index: 1;
  
  &__actions {
    display: flex;
    gap: 8px;
  }
}

.logo {
  width: 100%;

  &__link {
    width: fit-content;
    height: 64px;
    display: inline-block;
    border-radius: 50%;
    text-decoration: none;
  }

  &__image {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
}

</style>