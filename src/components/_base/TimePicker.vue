<template>
  <div class="time-field">
    <DatePicker
      v-model="date"
      timeOnly
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DatePicker from 'primevue/datepicker';

export default defineComponent({
  name: 'TimePicker',

  components: {
    DatePicker,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  computed: {
    date: {
      get() {
        let date = new Date();

        if (!this.modelValue) {
          this.$emit('update:modelValue', this.getFormatTime(date));

          return date;
        }

        const [hours, minutes] = this.modelValue.split(':');

        date.setHours(+hours);
        date.setMinutes(+minutes);

        return date;
      },
      set(value: string) {
        const date = new Date(value);

        this.$emit('update:modelValue', this.getFormatTime(date));
      },
    },
  },

  methods: {
    getFormatTime(date: Date) {
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    },
  },
});
</script>

<style lang="scss" scoped></style>
