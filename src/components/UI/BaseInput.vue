<script setup lang="ts">
import type { InputTypeEnum } from '@/types/Enums';
import { InputTypeEnum as InputTypeValues } from '@/types/Enums';
import { defineProps, defineEmits, ref, watch } from 'vue';
import Eye from '@/assets/icons/eye-regular.svg';
import EyeSlash from '@/assets/icons/eye-slash-regular.svg';

const props = defineProps<{
  modelValue: string,
  placeholder: string,
  type: InputTypeEnum,
  warningMessage: string,
}>()

const emits = defineEmits(['update:model-value'])
const isHowPassword = ref<boolean>(false)
const inputValue = ref<string>(props.modelValue)

function updateInput(event: Event) {
  emits('update:model-value', (event.target as HTMLInputElement).value)
}

function toggleIcon() {
  isHowPassword.value = !isHowPassword.value
}

watch(() => props.modelValue, newValue => {
  if (!isHowPassword.value) {
    inputValue.value = newValue
  }
})
</script>

<template>
  <div class="input">
    <label class="input__label"></label>
    <input 
      :type="isHowPassword ? InputTypeValues.TEXT : props.type" 
      class="input__field" 
      :placeholder="props.placeholder" 
      :value="isHowPassword ? inputValue : props.modelValue"
      @change="updateInput"
    >
    <div class="input__icon" v-if="props.type === InputTypeValues.PASSWORD">
      <img 
        :src="isHowPassword ? Eye : EyeSlash" 
        alt="Show password icon" 
        class="input__icon-image" 
        @click.stop="toggleIcon"
      />
    </div>
    <div class="input__warning">
      <span class="input__warning-text">{{ props.warningMessage }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  position: relative;

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

  &__icon {
    width: fit-content;
    height: 24px;
    position: absolute;
    bottom: 24px;
    right: 10px;

    &-image {
      width: 24px;
      height: 24px;
      cursor: pointer;

      &:hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
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