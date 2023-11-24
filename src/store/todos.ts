import { ref } from 'vue';
import { defineStore } from 'pinia';

import { ToDo } from '../interfaces/ToDo';

export const useToDosStore = defineStore('toDos', () => {
  const toDos = ref<ToDo[]>([]);

  const addToDos = (newToDos: ToDo[]) => {
    toDos.value = newToDos;
  };

  return {
    toDos,
    addToDos,
  };
});
