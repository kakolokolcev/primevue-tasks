<template>
  <div class="links-panel">
    <div
      v-if="list.length"
      class="links-panel__list"
    >
      <div
        v-for="(link, index) in list"
        :key="index"
        class="list-item"
      >
        <LinkField
          class="list-item__link-field"
          :link="link"
          @update="(updLink) => update(index, updLink)"
        />

        <i
          class="pi pi-trash list-item__remove-icon"
          @click.prevent="remove(index)"
        />
      </div>
    </div>

    <div
      v-else
      class="links-panel__empty-message"
    >
      Список ссылок пуст
    </div>

    <ButtonField
      class="links-panel__add-btn"
      label="Добавить ссылку"
      @click="() => add(EMPTY_LINK)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { type Link } from '@/types';

import { useList } from '@/composables/useList';

import ButtonField from 'primevue/button';

import LinkField from '@/components/_base/Link.vue';

const EMPTY_LINK = {
  url: '',
  title: '',
};

export default defineComponent({
  name: 'FirstTaskImplementation',

  components: {
    LinkField,
    ButtonField,
  },

  setup() {
    const { list, add, remove, update } = useList<Link>();

    return {
      list,
      add,
      remove,
      update,
      EMPTY_LINK,
    };
  },
});
</script>

<style lang="scss" scoped>
.links-panel {
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__list {
    gap: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    width: 100%;

    &__link-field {
      flex: 1;
    }

    &__remove-icon {
      color: #000;
      cursor: pointer;
    }
  }

  &__empty-message {
    color: #000;
    text-align: center;
  }

  &__add-btn {
    margin-top: 20px;
  }
}
</style>
