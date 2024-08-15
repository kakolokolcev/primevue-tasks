<template>
  <div class="task-formulation">
    <h3>Таблица с поиском (расширенное задание)</h3>

    <p>Компоненты для разработки</p>

    <ul>
      <li>
        <a href="https://v3.primevue.org/datatable/#dtproducts"
          >https://v3.primevue.org/datatable/#dtproducts</a
        >
      </li>
      <li>
        <a href="https://v3.primevue.org/inputgroup">https://v3.primevue.org/inputgroup</a>
      </li>
      <li>
        <a href="https://v3.primevue.org/multiselect/">https://v3.primevue.org/multiselect/</a>
      </li>
    </ul>

    Для разработки использовать компонент InputText, доступный по ссылке:
    <a href="https://v3.primevue.org/inputtext/">https://v3.primevue.org/inputtext/</a>

    Сценарий использования:
    <ul>
      <li>
        Пользователь может управлять составом колонок таблицы - для этого он может выбрать нужные
        для отображения колонки в селекте “Поля таблицы”
      </li>
      <li>Пользователь хочет выполнить поиск в таблице данных и переходит в строку поиска</li>
      <li>
        При вводе хотя бы одного символа в строку поиска, в строке должен появиться “крестик” для
        сброса введенного в строку значения
      </li>
      <li>
        После ввода строки поиска пользователь может нажать либо кнопку “Search”, либо клавишу
        Enter, после чего должен произойти поиск
      </li>
      <li>
        Поисковая выдача отображается в таблице, в тех полях, которые определены для отображения в
        таблице
      </li>
      <li>
        Кнопка с эквалайзером открывает селект или меню, в котором пользователь может указать поля,
        в которых нужно провести поиск
      </li>
      <li>
        При верстке необходимо соблюдать пропорции поля поиска и селектора полей: 80% и 20%
        соответственно
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FifthTaskFormulation',
});
</script>

<style scoped lang="scss"></style>
