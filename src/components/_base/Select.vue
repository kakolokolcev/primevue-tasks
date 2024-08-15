<template>
  <div class="multiselect">
    <MultiSelect
      ref="select"
      v-model="selectedValues"
      v-bind="$attrs"
    >
      <template #value>
        <slot name="value" />
      </template>
    </MultiSelect>

    <i
      v-if="withClearAll"
      v-show="modelValue.length"
      ref="removeAllRef"
      class="pi pi-times remove-all-btn"
      @click="removeAll"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

import MultiSelect from 'primevue/multiselect';

const DATA_ATTR_LABELCONTAINER = '[data-pc-section="labelcontainer"]';

const OPTIONS = ['Город 1', 'Город 2', 'Город 3', 'Город 4', 'Город 5', 'Город 6', 'Город 7'];

export default defineComponent({
  name: 'MultiSelectField',

  inheritAttrs: false,

  components: {
    MultiSelect,
  },

  props: {
    modelValue: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    withClearAll: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue'],

  setup() {
    const select = ref<typeof MultiSelect | null>(null);
    const removeAllRef = ref<HTMLElement | null>(null);

    return {
      OPTIONS,
      select,
      removeAllRef,
    };
  },

  computed: {
    selectedValues: {
      get() {
        return this.modelValue;
      },
      set(value: string[]) {
        this.$emit('update:modelValue', value);
      },
    },
  },

  mounted() {
    if (this.withClearAll) {
      const labelContainer = this.select?.rootEl.querySelector(DATA_ATTR_LABELCONTAINER);

      labelContainer.after(this.removeAllRef);
    }
  },

  methods: {
    removeAll(e: Event) {
      e.stopPropagation();

      this.$emit('update:modelValue', []);
    },
  },
});
</script>

<style lang="scss" scoped>
.multiselect {
  :deep(.p-multiselect) {
    max-width: 100%;
    width: 100%;

    .remove-all-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
    }

    .p-multiselect-label {
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
