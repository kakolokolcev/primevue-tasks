<template>
  <div class="data-table">
    <p>Отображение данных в два столбца:</p>

    <DataTable :value="firstData">
      <Column
        field="time"
        header="Время"
      />
      <Column
        field="message"
        header="Сообщение"
      />
    </DataTable>

    <p>Отображение данных в одной ячейке:</p>

    <DataTable :value="[{ value: secondData }]">
      <Column
        field="message"
        header="Сообщение"
      >
        <template #body="slotProps">
          <p
            v-for="item in slotProps.data.value"
            :key="item"
          >
            {{ item }}
          </p>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { type IFourthTaskData } from '@/types';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const DATA =
  '[13:36:53] Расчетное время: 9 мин[13:36:58] Открыть клапан откачки К1[13:36:58] Включить вакуумный насос[13:36:58] Закрыть клапан К5[13:36:58] Закрыть клапан дистилляции К2[13:36:58] Ожидание: 8 с[13:37:06] Заливка 2.2мл. в испаритель[13:37:06] Заданно 26.50602409638554 шагов[13:37:09] Заливка перекиси завершена[13:37:09] Открыть клапан дистилляции К2[13:42:09] Включить нагрев испарителя[13:42:09] Закрыть клапан дистилляции К2[13:42:09] конечное давление1.0960040758227925 торр[13:42:09] Выпаривание через К2[13:42:09] Выпаривание длилось5 мин[13:42:09] Откачка до 1 торр[13:42:15] Закрыть клапан откачки К1[13:43:09] Открыть клапан откачки К1[13:43:14] Аппаратное смещение 0 денсит. = -0.313683180809021[13:43:14] Закрыть клапан дистилляции К2';

export default defineComponent({
  name: 'FourthTaskImplementation',

  components: {
    DataTable,
    Column,
  },

  data(): {
    firstData: IFourthTaskData[];
    secondData: string[];
  } {
    return {
      firstData: [],
      secondData: [],
    };
  },

  mounted() {
    this.firstData = this.formatData(DATA);
    this.secondData = this.formatData(DATA).map((item) => `[${item.time}] ${item.message}`);
  },

  methods: {
    formatData(data: string) {
      return data
        .split(/\[/)
        .filter((item) => item)
        .reduce((acc, item) => {
          const [time, message] = item.split(']');

          acc.push({ time, message });

          return acc;
        }, [] as IFourthTaskData[]);
    },
  },
});
</script>

<style lang="scss" scoped></style>
