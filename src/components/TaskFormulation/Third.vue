<template>
  <div class="task-formulation">
    <h3>Сброс значений в Select</h3>

    <p>
      Для селекта с возможностью мультивыбора (
      <a href="https://v3.primevue.org/multiselect/">https://v3.primevue.org/multiselect/</a>
      ) реализовать функцию сброса выбранных значений.
    </p>

    Сценарий использования:
    <ul>
      <li>Пользователь выбрал хотя бы одно значение в селекте</li>
      <li>
        Внутри селекта появился “крестик”, по нажатию на который выбор пользователя должен
        обнулиться
      </li>
      <li>
        Сброс списка выбранных значений работает одинаково как для одного, выбранного элемента, так
        и для нескольких
      </li>
      <li>“Крестик” появляется только если в селекте есть хотя бы один выбранный элемент</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThirdTaskFormulation',
});
</script>

<style scoped lang="scss"></style>
