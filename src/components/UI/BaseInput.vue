<script setup lang="ts">
import type { InputTypeEnum } from '@/types/Enums';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: string,
  placeholder: string,
  type: InputTypeEnum,
  warningMessage: string,
}>()

const emits = defineEmits(['update:model-value'])

function updateInput(event: Event) {
  emits('update:model-value', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="input">
    <label class="input__label"></label>
    <input 
      :type="props.type" 
      class="input__field" 
      :placeholder="props.placeholder" 
      :value="props.modelValue" 
      @change="updateInput"
    >
    <div class="input__warning">
      <span class="input__warning-text">{{ props.warningMessage }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
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