<script setup lang="ts"></script>

<template>
  <aside class="nav">
    <ul class="nav__list list">
      <li class="list__item"><a href="" class="list__item-link">item 1</a></li>
      <li class="list__item"><a href="" class="list__item-link">item 2</a></li>
      <li class="list__item"><a href="" class="list__item-link">item 3</a></li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.nav {
  width: 30%;
  border-right: 2px solid var(--color-primary);
  min-height: 100vh;

  &__list {
    margin-top: 120px;
  }
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 12px;

  &__item {
    &-link {
      text-decoration: none;
      font-family: "Ubuntu-Medium";
      font-size: 24px;
      position: relative;
      color: var(--color-black);
      transition: color .3s;

      &:hover {
        color: var(--color-primary);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 100%;
        border-bottom: 2px solid transparent;
        transition: border-color .3s;
        transform: translateX(-50%);
      }

      &:hover::after {
        border-color: var(--color-primary);
      }
    }
  }
}
</style>