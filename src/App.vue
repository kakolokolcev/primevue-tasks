<template>
  <div class="app">
    <div class="app-container">
      <h1 class="app-container__title">Тестовое задание</h1>

      <Accordion
        :value="[]"
        class="app-container__accordion"
        multiple
      >
        <AccordionPanel
          v-for="(task, index) in TASKS"
          :key="index"
          :value="String(index)"
        >
          <AccordionHeader>{{ task.title }}</AccordionHeader>

          <AccordionContent>
            <TaskLayout>
              <template #formulation>
                <component :is="task.formulation" />
              </template>
              <template #implementation>
                <component :is="task.implementation" />
              </template>
            </TaskLayout>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import { TaskLayout, TaskFormulations, TaskImplementations } from '@/components';

const TASKS = [
  {
    title: 'Задание 1',
    formulation: TaskFormulations.First,
    implementation: TaskImplementations.First,
  },
  {
    title: 'Задание 2',
    formulation: TaskFormulations.Second,
    implementation: TaskImplementations.Second,
  },
  {
    title: 'Задание 3',
    formulation: TaskFormulations.Third,
    implementation: TaskImplementations.Third,
  },
  {
    title: 'Задание 4',
    formulation: TaskFormulations.Fourth,
    implementation: TaskImplementations.Fourth,
  },
  {
    title: 'Задание 5',
    formulation: TaskFormulations.Fifth,
    implementation: TaskImplementations.Fifth,
  },
];

export default defineComponent({
  name: 'App',

  components: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    TaskLayout,
  },

  setup() {
    return {
      TASKS,
    };
  },
});
</script>

<style scoped lang="scss">
.app {
  .app-container {
    max-width: 80%;
    margin: 0 auto;
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    color: #fff;

    &__title {
      margin-bottom: 60px;
    }

    &__accordion {
      width: 100%;
    }
  }
}
</style>
