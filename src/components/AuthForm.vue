<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { ButtonTypeEnum, FormModeEnum, InputTypeEnum } from '@/types/Enums';
import { useAppStore } from '@/stores/appStore';
import { useAuthStore } from '@/stores/authStore';

import BaseButton from './UI/BaseButton.vue';
import BaseInput from './UI/BaseInput.vue';

const appStore = useAppStore();
const authStore = useAuthStore();

const props = defineProps<{
  mode: FormModeEnum
}>()

const inputedEmail = ref<string>('')
const inputedPassword = ref<string>('')
const inputedName = ref<string>('')

function submitHandler() {
  const loginedUser = {
    email: inputedEmail.value,
    password: inputedPassword.value,
    isLogined: true,
  }

  authStore.loginUser(loginedUser)
  appStore.toggleDialog()
}

</script>

<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__inputs">
      <BaseInput 
        v-if="props.mode === FormModeEnum.REGISTRATION" 
        v-model="inputedName" 
        :type="InputTypeEnum.TEXT" 
        placeholder="Enter your name"
        warningMessage="Incorect name"
      />
      <BaseInput 
        v-model="inputedEmail" 
        :type="InputTypeEnum.EMAIL" 
        placeholder="Enter your email" 
        warningMessage="Incorect email"
      />
      <BaseInput 
        v-model="inputedPassword" 
        :type="InputTypeEnum.PASSWORD" 
        placeholder="Enter your password" 
        warningMessage="Incorect password"
      />
    </div>

    <div class="form__actions">
      <BaseButton :type="ButtonTypeEnum.SUBMIT">Submit</BaseButton>
      <BaseButton :type="ButtonTypeEnum.BUTTON" @click="appStore.toggleDialog">Cancel</BaseButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  &__inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
}

.input {
  width: 100%;

  &__label {
    font-family: "Ubuntu-Medium";
    font-size: 20px;
    letter-spacing: 1.2;
  }

  &__field {
    padding: 12px 20px;
    border: 1px solid var(--color-primary);
    border-radius: 12px;

    &:focus {
      border: 1px solid var(--color-secondary);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    &:hover {
      border: 1px solid var(--color-primary);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }

  &__warning {
    text-align: center;
    color: var(--color-warning);

    &-text {
      font-family: "Ubuntu-Light";
      font-size: 12px;
    }
  }
}
</style>