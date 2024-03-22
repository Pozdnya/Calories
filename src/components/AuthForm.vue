<script setup lang="ts">
import { defineProps, reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { ButtonTypeEnum, FormModeEnum, InputTypeEnum } from '@/types/Enums';
import { useAppStore } from '@/stores/appStore';
import { useAuthStore } from '@/stores/authStore';

import BaseButton from './UI/BaseButton.vue';
import BaseInput from './UI/BaseInput.vue';
import type { IAuthData } from '@/types/Interfaces';

const appStore = useAppStore();
const authStore = useAuthStore();

const props = defineProps<{
  mode: FormModeEnum
}>()

type AuthType = FormModeEnum extends FormModeEnum.LOGIN ? Pick<IAuthData, 'email' | 'password'> : IAuthData;

const inputForm: AuthType = reactive({
  email: '',
  password: '',
  // userName: '',
})

const rules = {
  email: { required },
  password: { required },
  // userName: { required },
}

const v$ = useVuelidate(rules, inputForm as any)

const userNameInputErrorMessage = ref<string>('')
const emailInputErrorMessage = ref<string>('')
const passwordInputErrorMessage = ref<string>('')

async function submitHandler() {
  const isValidForm = await v$.value.$validate()
  console.log('isValid', isValidForm)
  
  if (!isValidForm) {
    emailInputErrorMessage.value = 'Incorrect email';
    passwordInputErrorMessage.value = 'Incorrect password';
    userNameInputErrorMessage.value = 'Incorrect name';

    return;
  }

  const loginedUser = {
    email: inputForm.email,
    password: inputForm.password,
  }

  authStore.loginUser(loginedUser, isValidForm)
  appStore.toggleDialog()
}

</script>

<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__inputs">
      <BaseInput v-if="props.mode === FormModeEnum.REGISTRATION" v-model="inputForm.userName" :type="InputTypeEnum.TEXT"
        placeholder="Enter your name"
        />
      <BaseInput v-model="inputForm.email" :type="InputTypeEnum.EMAIL" placeholder="Enter your email"  :errorMessage="emailInputErrorMessage" />
      <BaseInput v-model="inputForm.password" :type="InputTypeEnum.PASSWORD" placeholder="Enter your password" :errorMessage="passwordInputErrorMessage" />
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