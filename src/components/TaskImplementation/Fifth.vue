<template>
  <div class="data-table">
    <div class="data-table-header">
      <InputGroup class="data-table-header__search-group">
        <div class="data-table__select-wrapper">
          <SelectField
            :options="COLUMNS"
            v-model="selectedSearchFields"
            optionLabel="header"
            dropdownIcon="pi pi-sliders-v"
            :showToggleAll="false"
          />
        </div>

        <InputText
          v-model="searchValue"
          placeholder="Введите для поиска"
          @keyup.enter="search"
        />

        <ButtonField
          v-if="searchValue"
          icon="pi pi-times"
          @click="searchValue = ''"
        />
        <ButtonField
          label="Search"
          @click="search"
        />
      </InputGroup>

      <div class="data-table-header__column-select">
        <SelectField
          :options="COLUMNS"
          optionLabel="header"
          v-model="selectedColumns"
          :withClearAll="true"
          :showToggleAll="false"
        />
      </div>
    </div>

    <DataTable :value="filteredProducts">
      <Column
        v-for="col of selectedColumns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      />
      <div
        v-if="!selectedColumns.length"
        class="empty-table"
      >
        Ни один столбец не выбран для отображения
      </div>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { FIELDS } from '@/constants';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import ButtonField from 'primevue/button';

import SelectField from '@/components/_base/Select.vue';

const COLUMNS = [
  { header: 'ID', field: FIELDS.id },
  { header: 'Название', field: FIELDS.name },
  { header: 'Описание', field: FIELDS.description },
  { header: 'Город', field: FIELDS.city },
  { header: 'Стоимость', field: FIELDS.cost },
];

const PRODUCTS = [
  {
    [FIELDS.id]: 1,
    [FIELDS.name]: 'Товар 1',
    [FIELDS.description]: 'Описание 1',
    [FIELDS.city]: 'Москва',
    [FIELDS.cost]: 1950,
  },
  {
    [FIELDS.id]: 2,
    [FIELDS.name]: 'Товар 2',
    [FIELDS.description]: 'Описание 2',
    [FIELDS.city]: 'Санкт-Петербург',
    [FIELDS.cost]: 2500,
  },
  {
    [FIELDS.id]: 3,
    [FIELDS.name]: 'Товар 3',
    [FIELDS.description]: 'Описание 3',
    [FIELDS.city]: 'Екатеринбург',
    [FIELDS.cost]: 1800,
  },
  {
    [FIELDS.id]: 4,
    [FIELDS.name]: 'Товар 4',
    [FIELDS.description]: 'Описание 4',
    [FIELDS.city]: 'Нижний Новгород',
    [FIELDS.cost]: 2000,
  },
  {
    [FIELDS.id]: 5,
    [FIELDS.name]: 'Товар 5',
    [FIELDS.description]: 'Описание 5',
    [FIELDS.city]: 'Казань',
    [FIELDS.cost]: 200,
  },
  {
    [FIELDS.id]: 6,
    [FIELDS.name]: 'Товар 6',
    [FIELDS.description]: 'Описание 6',
    [FIELDS.city]: 'Новосибирск',
    [FIELDS.cost]: 2300,
  },
  {
    [FIELDS.id]: 7,
    [FIELDS.name]: 'Товар 7',
    [FIELDS.description]: 'Описание 7',
    [FIELDS.city]: 'Красноярск',
    [FIELDS.cost]: 2400,
  },
  {
    [FIELDS.id]: 8,
    [FIELDS.name]: 'Товар 8',
    [FIELDS.description]: 'Описание 8',
    [FIELDS.city]: 'Омск',
    [FIELDS.cost]: 2600,
  },
  {
    [FIELDS.id]: 9,
    [FIELDS.name]: 'Товар 9',
    [FIELDS.description]: 'Описание 9',
    [FIELDS.city]: 'Челябинск',
    [FIELDS.cost]: 2700,
  },
  {
    [FIELDS.id]: 10,
    [FIELDS.name]: 'Товар 10',
    [FIELDS.description]: 'Описание 10',
    [FIELDS.city]: 'Ростов-на-Дону',
    [FIELDS.cost]: 2800,
  },
];

export default defineComponent({
  name: 'FifthTaskImplementation',

  components: {
    DataTable,
    Column,
    SelectField,
    InputGroup,
    InputText,
    ButtonField,
  },

  setup() {
    return {
      COLUMNS,
      PRODUCTS,
    };
  },

  data() {
    return {
      searchValue: '',
      selectedSearchFields: [...COLUMNS],
      selectedColumns: [...COLUMNS],
      filteredProducts: PRODUCTS,
    };
  },

  methods: {
    search() {
      this.filteredProducts = PRODUCTS.filter((item) => {
        let isAvailable = false;

        for (let i = 0; i < this.selectedSearchFields.length; i += 1) {
          if (
            String(item[this.selectedSearchFields[i].field])
              .toLowerCase()
              .includes(this.searchValue.toLowerCase())
          ) {
            isAvailable = true;

            break;
          }
        }

        return isAvailable;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.data-table {
  .empty-table {
    width: 100%;
    text-align: center;
    margin: 30px 0 10px;
  }

  &-header {
    display: flex;
    gap: 20px;

    &__column-select {
      width: 20%;
      min-width: 20%;
    }
  }

  &__select-wrapper {
    :deep(.multiselect) {
      height: 40px;

      .p-multiselect-label-container {
        display: none;
      }

      .p-multiselect {
        border: 0;
        height: 100%;
      }

      .p-multiselect-dropdown {
        background-color: var(--p-button-primary-background);
        border-radius: 0;
        border-top-left-radius: var(--p-inputgroup-addon-border-radius);
        border-bottom-left-radius: var(--p-inputgroup-addon-border-radius);
        color: #000;
      }
    }
  }
}
</style>
