<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
</script>

<template>
  <main class="main">
    <div class="date-picker">
      <VueDatePicker class="date-picker__field" />
    </div>

    <div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  margin-top: 120px;
  padding: 0 20px;
}

.date-picker {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &__field {
    max-width: 40%;
  }
}
</style>