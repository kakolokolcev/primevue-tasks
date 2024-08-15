import { ref, type Ref } from 'vue';

export const useList = <T>() => {
  const list = ref([]) as Ref<T[]>;

  const add = async (item: T) => {
    list.value.push(item);
  };

  const update = (index: number, item: T) => {
    list.value[index] = item;
  };

  const remove = (removeIndex: number) => {
    list.value = list.value.filter((_, index) => index !== removeIndex);
  };

  return { list, add, update, remove };
};
