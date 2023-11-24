import usersApi from '../../../api/userApi';

import { useUsersStore } from '../../../store/users';

const { fetchUsers } = usersApi();

const useUsers = () => {
  const store = useUsersStore();
  /**
   * FETCH USERS API
   */
  const getUsers = async () => {
    const users = await fetchUsers();
    store.addUsers(users);
  };

  return {
    store,
    getUsers,
  };
};

export default useUsers;
