<script setup lang="ts">
import type { ButtonTypeEnum } from '@/types/Enums';
import { defineProps } from 'vue';

const props = defineProps<{
  type: ButtonTypeEnum
}>()
</script>

<template>
  <button class="button" :type="props.type">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 12px 20px;
  background-color: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .3s, color .3s;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  min-width: 120px;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
}
</style>