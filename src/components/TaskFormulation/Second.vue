<template>
  <div class="task-formulation">
    <h3>DateTime picker</h3>

    <p>
      Создать компонент “Время”. Для выполнения задачи можно использовать компонент
      <a href="https://v3.primevue.org/calendar/#time">https://v3.primevue.org/calendar/#time</a>
    </p>

    <p>
      Выбранное в компоненте время должно отображаться в переменной директивы v-model. Значение
      представить в формате HH:MM.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SecondTaskFormulation',
});
</script>

<style scoped lang="scss"></style>
