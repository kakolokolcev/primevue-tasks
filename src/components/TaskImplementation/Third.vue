<template>
  <div class="multiselect">
    <SelectField
      :options="OPTIONS"
      v-model="selectedOptions"
      :showToggleAll="false"
      :with-clear-all="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SelectField from '@/components/_base/Select.vue';

const OPTIONS = ['Город 1', 'Город 2', 'Город 3', 'Город 4', 'Город 5', 'Город 6', 'Город 7'];

export default defineComponent({
  name: 'ThirdTaskImplementation',

  components: {
    SelectField,
  },

  setup() {
    return {
      OPTIONS,
    };
  },

  data() {
    return {
      selectedOptions: [],
    };
  },
});
</script>

<style lang="scss" scoped></style>
