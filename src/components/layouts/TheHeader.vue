<script setup lang="ts">
import { ButtonTypeEnum, FormModeEnum } from '@/types/Enums';
import { useAppStore } from '@/stores/appStore';
import { useAuthStore } from '@/stores/authStore';
import Logo from '@/assets/logo.png';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import AuthForm from '@/components/AuthForm.vue';

const appStore = useAppStore();
const authStore = useAuthStore();

</script>

<template>
  <BaseDialog v-if="appStore.isOpenDialog">
    <template #header>
      LOG IN
    </template>
    <template #body>
      <AuthForm :mode="FormModeEnum.LOGIN" v-if="appStore.getFormMode === FormModeEnum.LOGIN"/>
      <AuthForm :mode="FormModeEnum.REGISTRATION" v-if="appStore.getFormMode === FormModeEnum.REGISTRATION"/>
    </template>
  </BaseDialog>
  <header class="header">
    <div class="logo header__logo">
      <a href="/" class="logo__link">
        <img :src="Logo" class="logo__image" />
      </a>
    </div>

    <div class="header__actions" v-if="!authStore.isLoginedUser">
      <BaseButton :type="ButtonTypeEnum.BUTTON" @click="appStore.toggleDialog(FormModeEnum.LOGIN)">Log In</BaseButton>
      <BaseButton :type="ButtonTypeEnum.BUTTON" @click="appStore.toggleDialog(FormModeEnum.REGISTRATION)">Registration</BaseButton>
    </div>
    <div v-else>
      logined
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