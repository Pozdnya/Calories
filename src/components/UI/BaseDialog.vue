<script setup lang="ts">
import { useAppStore } from '@/stores/appStore';

const appStore = useAppStore();
</script>

<template>
  <teleport to="body">
    <div class="overlay" @click="appStore.toggleDialog"></div>
    <dialog open="false" class="dialog">
      <header class="dialog__header">
        <slot name="header">HEADER</slot>
      </header>

      <div class="dialog__body">
        <slot name="body"></slot>
      </div>
    </dialog>
  </teleport>
</template>

<style scoped lang="scss">
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: #cecece;
  opacity: 0.5;
}

.dialog {
  position: fixed;
  top: 10rem;
  z-index: 6;
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  min-width: 40%;
  min-height: 200px;
  padding: 0;

  &__header {
    width: 100%;
    min-height: 24px;
    background-color: var(--color-primary);
    text-align: left;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    padding: 12px 0;
  }

  &__body {
    padding: 24px;
  }
}
</style>