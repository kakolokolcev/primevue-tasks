<template>
  <div class="time-field">
    <p>Переменная v-model: {{ date }}</p>

    <TimePicker v-model="date" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TimePicker from '@/components/_base/TimePicker.vue';

export default defineComponent({
  name: 'SecondTaskImplementation',

  components: {
    TimePicker,
  },

  data() {
    return {
      date: '',
    };
  },
});
</script>

<style lang="scss" scoped></style>
