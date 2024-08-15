<template>
  <div class="task-layout">
    <Accordion multiple>
      <AccordionPanel :value="'0'">
        <AccordionHeader>Формулировка задачи</AccordionHeader>

        <AccordionContent>
          <slot name="formulation" />
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel :value="'1'">
        <AccordionHeader>Реализация</AccordionHeader>

        <AccordionContent>
          <slot name="implementation" />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

export default defineComponent({
  name: 'FirstTask',

  components: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
  },
});
</script>

<style scoped lang="scss"></style>
