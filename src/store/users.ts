import { ref } from 'vue';
import { defineStore } from 'pinia';

import { User } from '../interfaces/User';

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([]);

  const addUsers = (newUsers: User[]) => {
    users.value = newUsers;
  };

  return {
    users,
    addUsers,
  };
});
